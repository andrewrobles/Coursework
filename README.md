### Usage 
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
From a different terminal, start local Solana cluster
```
cd
solana-test-validator
```
See initial balance
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