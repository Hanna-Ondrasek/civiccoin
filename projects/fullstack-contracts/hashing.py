import hashlib

#crazy idea: we come up with a custom hashing schema rather than importing hashlib
encoded = (b"igaveblood")
hash = hashlib.sha256(encoded)
hashed_code = hash.hexdigest()
