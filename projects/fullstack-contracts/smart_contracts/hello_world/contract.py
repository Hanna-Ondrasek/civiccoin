
# from algopy import ARC4Contract, String
# from algopy.arc4 import abimethod

# import my_password

# """
# Your smart contract is basically a lock that checks a password.

# Each event has a hidden password (like health2025), but instead of storing the password directly, the contract stores its hashed version (a scrambled version you can’t reverse).

# When someone goes to the event, they type the password into your app.

# Your app scrambles it the same way (hash + salt) and sends that to the contract.

# The contract checks:

# Is this the right event?

# Does the scrambled code match the stored one?

# If yes → it replies “ok” (you proved you were at the event).

# If no → it replies “bad” (wrong code).

# That’s it. No rewards, no tracking — just a simple yes/no check to prove a user had the correct code for an event.

# 👉 Think of it like a ticket scanner at a concert: you show the QR code, the scanner either beeps green (“ok”) or red (“bad”).
# """
# #encoded = ("igaveblood").encode('utf-8')
# #hash = hashlib.sha256(encoded)
# #hashed_code = hash.hexdigest()


# class CivicMsg(ARC4Contract):
#     @abimethod()
#     def civic(self, name: String) -> String:
#         if name == my_password.password:
#             return String("+ 1 tokens awarded! ")
#         else:
#             return String("invalid event code")

from algopy import ARC4Contract, String
from algopy.arc4 import abimethod
from algopy.op import sha256

import my_password


# need to use an indexer to access lora
# could show everything on lora
# Donor walks in, shows the clinic their QR code (algorand address)
# Once the clinic has their address, the clinic sends a transation to that address of 1 donation token
# after part -- if i as a donor have 10 donor tokens, i can use smart contract to turn donations into a certificate
class CivicMsg(ARC4Contract):
    @abimethod()
    def civic(self, name: String) -> String:
        encoded_password = sha256(String(my_password.epic_password).bytes)
        name_hash = sha256(name.bytes)
        if name_hash == encoded_password:
            return String("Badge earned!" )
        else:
            return String("invalid event code")


# from algopy import ARC4Contract, Bytes, String
# from algopy.arc4 import abimethod, create
# from algopy.op import sha256
# from config import EVENT_SALT, get_event_hash  # ✅ import off-chain values


# class CivicSecure(ARC4Contract):
#     @create
#     def create(self) -> None:
#         # Inject the precomputed hash at compile time
#         self.global_state["event_hash"] = Bytes.from_hex(get_event_hash())  # ← only this is stored on-chain

#     @abimethod()
#     def civic(self, user_input: String) -> String:
#         # Reuse the same salt inside the contract
#         salt = Bytes(EVENT_SALT)
#         combined = user_input.encode() + salt
#         hashed = sha256(combined)

#         if hashed == self.global_state["event_hash"]:
#             return String("✅ Verified")
#         else:
#             return String("❌ Invalid")



