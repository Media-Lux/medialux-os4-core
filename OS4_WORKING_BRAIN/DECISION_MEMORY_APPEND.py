# OS4_WORKING_BRAIN/DECISION_MEMORY_APPEND.py
# Phase 1: Append-only decision/event persistence (JSONL)
# Purpose: Provide a minimal, reproducible memory trail for lifecycle dispatch.
# NOTE: Writes to local filesystem. GitHub persistence happens via manual push / pending process.

from __future__ import annotations

from dataclasses import asdict
from datetime import datetime, timezone
from typing import Any, Dict, Optional
import json
import os


DEFAULT_PATH = "system/decision_memory/decision_memory.jsonl"


def append_decision(entry: Dict[str, Any], *, file_path: str = DEFAULT_PATH) -> str:
    """
    Appends a single JSON object as one line (JSONL).
    Returns the written line (string).
    """
    os.makedirs(os.path.dirname(file_path), exist_ok=True)

    # Ensure append-only
    entry = dict(entry)
    entry.setdefault("appended_at", datetime.now(timezone.utc).isoformat())

    line = json.dumps(entry, ensure_ascii=False)
    with open(file_path, "a", encoding="utf-8") as f:
        f.write(line + "\n")
    return line


def build_dispatch_entry(
    *,
    decision_id: str,
    status: str,
    note: str,
    event_dict: Dict[str, Any],
) -> Dict[str, Any]:
    return {
        "decision_id": decision_id,
        "type": "lifecycle_dispatch",
        "status": status,
        "note": note,
        "event": event_dict,
        "logged_at": datetime.now(timezone.utc).isoformat(),
    }


if __name__ == "__main__":
    sample = build_dispatch_entry(
        decision_id="TEST-001",
        status="routed",
        note="Sample write",
        event_dict={"event_id": "EV-001", "event_type": "knowledge.ready_to_implement"},
    )
    print(append_decision(sample))
