# Solana Development Course

### Create and load keypairs 
Run `node generate-keypair.js account_1` to generate a keypair for an account called **account_1**. You should see the text:
```
The public key is:  98imjLHYmbnTMCDXUtawBmkZYx55MKiHz9KJgKyGY9rC
The secret key is:  Uint8Array(64) [
   (a long series of numbers) 
]
The secret key has been appended to the .env file as account_1
✅ Finished!
```
Verify that the secret key has been added to the .env file
```
account_1="[(a series of numbers)]"
```
Load the keypair by running `node load-keypair.js account_1`. You should see the text:
```
✅ Finished! We've loaded our secret key securely, using an env file!
The public key is:  98imjLHYmbnTMCDXUtawBmkZYx55MKiHz9KJgKyGY9rC
The secret key is:  Uint8Array(64) [
   (a long series of numbers)
]
```

### Connect to Solana and check account balances
From a different terminal, start local Solana cluster
```bash
% cd
% solana-test-validator
```
Run `node check-balance.js account_1` to see initial account balance. You should see the text:
```
💰 Finished! The balance for the wallet at address 98imjLHYmbnTMCDXUtawBmkZYx55MKiHz9KJgKyGY9rC is 0!
```
Send tokens to public key by running `node airdrop.js 5 account_1`. You should see the text:
```
Requesting airdrop of 5 SOL

Signature: S4CQAk4fM96GoAbQCQdtX1toqJfud2vKcxcbFhLfc6Jot8RTyHuQBg36cyomm6rW15ZRM2XcDDA38cVN5LrRfC8

5 SOL
```
Verify balance by running `node check-balance.js account_1`. You should see the text:
```
💰 Finished! The balance for the wallet at address DU9ad2b9iSEuzWd8eNjqKkSVj7TN7DARYyHuuWJdwrgm is 1!
```

### Make transactions

Do `node transfer.js 1 account_1 account_2` to transfer 1 SOL from account_1 to account_2. You should see the text:
```
✅ Loaded our own keypair, the destination public key, and connected to Solana
💸 Finished! Sent 1 from the account account_1 to account account_2. 
Transaction signature is 5nGjQsbbuoGGR36XwvrBQzQiFvpHZvrfv7FhqHezbbNMhgzjKvx986hayTCPx29pmzL1r1nXFpc5i3oAsoLpcMwt!
```
