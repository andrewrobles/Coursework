### Cryptography and the Solana Network 
Generate a keypair
```
npm run generate-keypair
```
Add the keys to .env
```
SECRET_KEY="[(<number-array>)]"
```
Load the keypair
```
npm run load-keypair
```
### Read Data From The Solana Network
From a different terminal, start local Solana cluster
```
cd
solana-test-validator
```
Verify balance is 0 
```
npm run check-balance
```
Request Solana to public key
```
solana airdrop <public-key>
```
Verify balance is 100
```
npm run check-balance
```