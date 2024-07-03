### Usage 
Run `npm run generate-keypair account_1` to generate a keypair for an account called **account_1**. You should see the text:
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
Load the keypair by running `npm run load-keypair account_1`. You should see the text:
```
✅ Finished! We've loaded our secret key securely, using an env file!
The public key is:  98imjLHYmbnTMCDXUtawBmkZYx55MKiHz9KJgKyGY9rC
The secret key is:  Uint8Array(64) [
   (a long series of numbers)
]
```
From a different terminal, start local Solana cluster
```bash
% cd
% solana-test-validator
```
Run `npm run check-balance account_1` to see initial account balance. You should see the text:
```
💰 Finished! The balance for the wallet at address 98imjLHYmbnTMCDXUtawBmkZYx55MKiHz9KJgKyGY9rC is 0!
```
Send tokens to public key
```
solana airdrop 1 <PUBLIC_KEY>
```
Verify balance by running `npm run check-balance account_1`. You should see the text:
```
💰 Finished! The balance for the wallet at address DU9ad2b9iSEuzWd8eNjqKkSVj7TN7DARYyHuuWJdwrgm is 1!
```