### Cryptography and the Solana Network 
Generate a keypair
```
npx esrun generate-keypair.ts
```
Add the secret key to .env
```
SECRET_KEY="[(a series of numbers)]"
```
Load the keypair
```
npx esrun load-keypair.ts
```
### Read Data From The Solana Network
Start local Solana cluster
```
solana-test-validator
```
