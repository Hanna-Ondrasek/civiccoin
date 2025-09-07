import hashlib

EVENT_CODE = "igaveblood"
EVENT_SALT = "civic2025"

def get_event_hash() -> bytes:
    # This is safe: deterministic, no external dependencies
    return hashlib.sha256((EVENT_CODE + EVENT_SALT).encode("utf-8")).hexdigest()
