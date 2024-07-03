import fs from "fs"
import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

// Write the secret key to the .env file
const secretKeyString = keypair.secretKey.toString();
fs.writeFileSync(".env", `SECRET_KEY=[${secretKeyString}]\n`, { flag: "w" });

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
console.log(`✅ Finished!`);
