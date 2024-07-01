### Cryptography and the Solana Network 
Generate a keypair
```
npx esrun generate-keypair.ts
```
Add the keys to .env
```
SECRET_KEY="[(<number-array>)]"
```
Load the keypair
```
npx esrun load-keypair.ts
```
### Read Data From The Solana Network
Start local Solana cluster from home directory
```
solana-test-validator
```
Verify balance is 0 
```
npx esrun check-balance.ts
```
Request Solana to public key
```
solana airdrop <public-key>
```
Verify balance is 100
```
npx esrun check-balance.ts
```