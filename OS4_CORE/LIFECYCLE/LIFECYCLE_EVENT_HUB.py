# OS4_CORE/LIFECYCLE/LIFECYCLE_EVENT_HUB.py
# Phase 1: Lifecycle -> Event -> Router -> Decision Memory (log)
# Purpose: Turn lifecycle transitions into OS4 events, route them, log outcomes.
# NOTE: This is a skeleton. No autonomous execution, no GitHub writes from here.

from __future__ import annotations

from dataclasses import dataclass, asdict
from datetime import datetime, timezone
from typing import Any, Dict, Optional, Callable
import json
import uuid


@dataclass
class OS4Event:
    event_id: str
    event_type: str
    lifecycle_state_from: str
    lifecycle_state_to: str
    knowledge_id: str
    domain: str
    owner: str
    urgency: float
    payload: Dict[str, Any]
    created_at: str

    def to_json(self) -> str:
        return json.dumps(asdict(self), ensure_ascii=False, indent=2)


class Brain2ChainAdapter:
    """
    Phase 1 router sink.
    Replace later with real Brain2Chain integration.
    """
    def __init__(self, sink: Optional[Callable[[Dict[str, Any]], None]] = None):
        self.sink = sink or self._default_sink

    def route(self, event: OS4Event) -> None:
        self.sink(asdict(event))

    @staticmethod
    def _default_sink(event_dict: Dict[str, Any]) -> None:
        print("[Brain2ChainAdapter] Routing event:")
        print(json.dumps(event_dict, ensure_ascii=False, indent=2))


class DecisionMemoryLogger:
    """
    Phase 1 logger (in-memory sink).
    Actual persistence is implemented in OS4_WORKING_BRAIN/DECISION_MEMORY_APPEND.py
    """
    def __init__(self, sink: Optional[Callable[[Dict[str, Any]], None]] = None):
        self.sink = sink or self._default_sink

    def log(self, event: OS4Event, status: str, note: str = "") -> None:
        entry = {
            "decision_id": str(uuid.uuid4()),
            "type": "lifecycle_dispatch",
            "status": status,  # queued | routed | failed
            "note": note,
            "event": asdict(event),
            "logged_at": datetime.now(timezone.utc).isoformat()
        }
        self.sink(entry)

    @staticmethod
    def _default_sink(entry: Dict[str, Any]) -> None:
        print("[DecisionMemoryLogger] Log entry:")
        print(json.dumps(entry, ensure_ascii=False, indent=2))


class LifecycleEventHub:
    """
    Core responsibility:
    - Observe lifecycle transitions
    - Emit OS4Event on specific transitions
    - Route into Brain2Chain (dispatch only)
    - Log decision memory feedback (queued/routed/failed)
    """

    def __init__(
        self,
        router: Optional[Brain2ChainAdapter] = None,
        logger: Optional[DecisionMemoryLogger] = None,
        trigger_map: Optional[Dict[str, Dict[str, Any]]] = None
    ):
        self.router = router or Brain2ChainAdapter()
        self.logger = logger or DecisionMemoryLogger()
        self.trigger_map = trigger_map or {
            "PRIORITIZED": {"event_type": "knowledge.ready_to_implement", "urgency": 0.85},
            "REJECTED": {"event_type": "knowledge.rejected", "urgency": 0.2},
        }

    def on_lifecycle_change(
        self,
        *,
        knowledge_id: str,
        state_from: str,
        state_to: str,
        domain: str,
        owner: str,
        meta: Optional[Dict[str, Any]] = None
    ) -> Optional[OS4Event]:
        meta = meta or {}
        trigger = self.trigger_map.get(state_to)
        if not trigger:
            return None

        event = OS4Event(
            event_id=str(uuid.uuid4()),
            event_type=trigger["event_type"],
            lifecycle_state_from=state_from,
            lifecycle_state_to=state_to,
            knowledge_id=knowledge_id,
            domain=domain,
            owner=owner,
            urgency=float(trigger.get("urgency", 0.5)),
            payload={"meta": meta, "hint": "Phase1: dispatch-only; execution handled elsewhere"},
            created_at=datetime.now(timezone.utc).isoformat(),
        )

        self.logger.log(event, status="queued", note="Event created by LifecycleEventHub")

        try:
            self.router.route(event)
            self.logger.log(event, status="routed", note="Event routed to Brain2ChainAdapter")
        except Exception as e:
            self.logger.log(event, status="failed", note=f"Routing error: {e}")
            raise

        return event


if __name__ == "__main__":
    hub = LifecycleEventHub()
    hub.on_lifecycle_change(
        knowledge_id="KN-0001",
        state_from="CLASSIFIED",
        state_to="PRIORITIZED",
        domain="OS4-Core",
        owner="@chef",
        meta={"title": "Knowledge Lifecycle Engine Core", "relevance": 0.91},
    )
