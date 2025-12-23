#!/usr/bin/env python3
"""
ATLAS Vault – Batch Manifest Builder
-----------------------------------
Creates a deterministic manifest for existing VAULT_LOGS JSONL files.

IMPORTANT:
- This tool does NOT create events.
- This tool does NOT modify logs.
- This tool is executed manually and explicitly.
"""

import os
import sys
import json
import hashlib
import unicodedata
from datetime import datetime

REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
LOG_ROOT = os.path.join(REPO_ROOT, "VAULT_LOGS")
MANIFEST_ROOT = os.path.join(REPO_ROOT, "MANIFESTS")

ZERO_HASH = "0x" + "00" * 32


def canonical(obj):
    if isinstance(obj, str):
        return unicodedata.normalize("NFC", obj)
    if obj is None or isinstance(obj, (bool, int, float)):
        return obj
    if isinstance(obj, list):
        return [canonical(x) for x in obj]
    if isinstance(obj, dict):
        return {k: canonical(obj[k]) for k in sorted(obj.keys())}
    return obj


def canonical_json(obj):
    return json.dumps(canonical(obj), ensure_ascii=False, separators=(",", ":"))


def sha256_hex(data: bytes) -> str:
    return "0x" + hashlib.sha256(data).hexdigest()


def compute_event_hash(event: dict) -> str:
    e = dict(event)
    e.pop("event_hash", None)
    return sha256_hex(canonical_json(e).encode("utf-8"))


def verify_and_hash_jsonl(path: str):
    with open(path, "r", encoding="utf-8") as f:
        events = [json.loads(line) for line in f if line.strip()]

    prev = ZERO_HASH
    hashes = []

    for idx, ev in enumerate(events, start=1):
        if ev["prev_event_hash"] != prev:
            raise RuntimeError(f"{path}:{idx} prev_event_hash mismatch")

        h = compute_event_hash(ev)
        if ev["event_hash"] != h:
            raise RuntimeError(f"{path}:{idx} event_hash mismatch")

        hashes.append(bytes.fromhex(h[2:]))
        prev = h

    payload = b"".join(hashes)
    file_hash = sha256_hex(payload)
    return file_hash, len(events)


def merkle_root(leaves: list[bytes]) -> str:
    if not leaves:
        return sha256_hex(b"")

    level = leaves[:]
    while len(level) > 1:
        if len(level) % 2 == 1:
            level.append(level[-1])
        level = [
            hashlib.sha256(level[i] + level[i + 1]).digest()
            for i in range(0, len(level), 2)
        ]
    return "0x" + level[0].hex()


def main():
    if len(sys.argv) < 6:
        print(
            "Usage:\n"
            "  build_batch.py <batch_id> <ts_utc_close> <builder_id> <builder_corepass_did_hash> <relative_jsonl_paths...>"
        )
        sys.exit(1)

    batch_id = sys.argv[1]
    ts_utc_close = sys.argv[2]
    builder_id = sys.argv[3]
    did_hash = sys.argv[4]
    rel_files = sorted(sys.argv[5:])

    file_hashes = {}
    leaves = []

    for rel in rel_files:
        abs_path = os.path.join(REPO_ROOT, rel)
        if not os.path.exists(abs_path):
            raise RuntimeError(f"Missing file: {rel}")

        fh, lines = verify_and_hash_jsonl(abs_path)
        file_hashes[rel] = fh

        leaf = {
            "path": rel,
            "file_hash": fh,
            "lines": lines
        }
        leaves.append(
            hashlib.sha256(canonical_json(leaf).encode("utf-8")).digest()
        )

    root = merkle_root(leaves)

    manifest = {
        "batch_id": batch_id,
        "ts_utc_close": ts_utc_close,
        "included_files": rel_files,
        "file_hashes": file_hashes,
        "merkle_root": root,
        "manifest_hash": "",
        "build_version": "1.0.0",
        "builder": {
            "builder_id": builder_id,
            "corepass_did_hash": did_hash
        }
    }

    mh = sha256_hex(canonical_json({k: v for k, v in manifest.items() if k != "manifest_hash"}).encode("utf-8"))
    manifest["manifest_hash"] = mh

    dt = datetime.fromisoformat(ts_utc_close.replace("Z", "+00:00"))
    out_dir = os.path.join(MANIFEST_ROOT, f"{dt.year:04d}", f"{dt.month:02d}")
    os.makedirs(out_dir, exist_ok=True)

    out_path = os.path.join(out_dir, f"{batch_id}.manifest.json")
    with open(out_path, "w", encoding="utf-8", newline="\n") as f:
        f.write(canonical_json(manifest) + "\n")

    print("Manifest written:", os.path.relpath(out_path, REPO_ROOT))
    print("\n--- Anchor Parameters ---")
    print("batch_id     =", batch_id)
    print("merkle_root  =", root)
    print("manifest_hash=", mh)


if __name__ == "__main__":
    main()
