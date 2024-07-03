import { Keypair } from "@solana/web3.js";
import fs from "fs";

// Check if a variable name was provided as a command line argument
const variableName = process.argv[2];
if (!variableName) {
  console.error("Please provide a variable name as a command line argument.");
  process.exit(1);
}

// Generate the keypair
const keypair = Keypair.generate();

// Append the secret key to the .env file with the provided variable name
const secretKeyString = keypair.secretKey.toString();
fs.appendFileSync(".env", `${variableName}=${secretKeyString}\n`);

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key has been appended to the .env file as ${variableName}`);
console.log(`✅ Finished!`);
