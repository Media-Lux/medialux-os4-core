#!/usr/bin/env python3
import os, sys, json, glob, hashlib, unicodedata
from jsonschema import Draft202012Validator

REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
SCHEMA_DIR = os.path.join(REPO_ROOT, "SCHEMAS")
LOG_ROOT = os.path.join(REPO_ROOT, "VAULT_LOGS")
MANIFEST_ROOT = os.path.join(REPO_ROOT, "MANIFESTS")

ZERO_HASH = "0x" + "00" * 32

def fail(msg):
    print(f"[FAIL] {msg}", file=sys.stderr)
    sys.exit(1)

def ok(msg):
    print(f"[OK] {msg}")

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

def sha256_hex(data: bytes):
    return "0x" + hashlib.sha256(data).hexdigest()

def load_json(path):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)

def validate_schema(schema_path, obj, label):
    schema = load_json(schema_path)
    v = Draft202012Validator(schema)
    errors = list(v.iter_errors(obj))
    if errors:
        for e in errors:
            print(f"[SCHEMA ERROR] {label}: {e.message}", file=sys.stderr)
        sys.exit(1)

def compute_event_hash(event):
    e = dict(event)
    e.pop("event_hash", None)
    return sha256_hex(canonical_json(e).encode("utf-8"))

def verify_jsonl(path):
    with open(path, "r", encoding="utf-8") as f:
        events = [json.loads(line) for line in f if line.strip()]

    prev = ZERO_HASH
    hashes = []

    for idx, ev in enumerate(events, start=1):
        validate_schema(
            os.path.join(SCHEMA_DIR, "event.schema.json"),
            ev,
            f"{path}:{idx}"
        )

        if ev["prev_event_hash"] != prev:
            fail(f"{path}:{idx} prev_event_hash mismatch")

        h = compute_event_hash(ev)
        if ev["event_hash"] != h:
            fail(f"{path}:{idx} event_hash mismatch")

        hashes.append(bytes.fromhex(h[2:]))
        prev = h

    payload = b"".join(hashes)
    return sha256_hex(payload), len(events)

def merkle_root(leaves):
    if not leaves:
        return sha256_hex(b"")
    level = leaves[:]
    while len(level) > 1:
        if len(level) % 2 == 1:
            level.append(level[-1])
        level = [
            hashlib.sha256(level[i] + level[i+1]).digest()
            for i in range(0, len(level), 2)
        ]
    return "0x" + level[0].hex()

def verify_manifest(path):
    manifest = load_json(path)
    validate_schema(
        os.path.join(SCHEMA_DIR, "anchor-manifest.schema.json"),
        manifest,
        path
    )

    m = dict(manifest)
    m.pop("manifest_hash", None)
    expected_mh = sha256_hex(canonical_json(m).encode("utf-8"))
    if manifest["manifest_hash"] != expected_mh:
        fail(f"{path} manifest_hash mismatch")

    leaves = []
    for rel in manifest["included_files"]:
        abs_path = os.path.join(REPO_ROOT, rel)
        fh, lines = verify_jsonl(abs_path)
        leaf = {
            "path": rel,
            "file_hash": fh,
            "lines": lines
        }
        leaves.append(hashlib.sha256(
            canonical_json(leaf).encode("utf-8")
        ).digest())

    expected_root = merkle_root(leaves)
    if manifest["merkle_root"] != expected_root:
        fail(f"{path} merkle_root mismatch")

    ok(f"{path} verified")

def main():
    manifests = glob.glob(os.path.join(MANIFEST_ROOT, "**/*.manifest.json"), recursive=True)
    if not manifests:
        ok("no manifests present (valid empty state)")
        return

    for m in sorted(manifests):
        verify_manifest(m)

    ok("all manifests verified")

if __name__ == "__main__":
    main()
