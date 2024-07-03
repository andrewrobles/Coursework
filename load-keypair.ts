import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

// Check if a variable name was provided as a command line argument
const variableName = process.argv[2];
if (!variableName) {
  console.error("Please provide a variable name as a command line argument.");
  process.exit(1);
}

const keypair = getKeypairFromEnvironment(variableName);
console.log(
    `✅ Finished! We've loaded our secret key securely, using an env file!`
);
console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);