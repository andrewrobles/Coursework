import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { exec } from "child_process";

// Check if a variable name was provided as a command line argument
const variableName = process.argv[3];
if (!variableName) {
  console.error("Please provide a variable name as a command line argument.");
  process.exit(1);
}

const solAmount = process.argv[2];
if (!solAmount) {
  console.error("Please provide a SOL amount as a command line argument.");
  process.exit(1);
}

const keypair = getKeypairFromEnvironment(variableName);

// Run the Solana airdrop command as a shell command
const airdropCommand = `solana airdrop ${solAmount} ${keypair.publicKey.toBase58()}`;
exec(airdropCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing airdrop: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }
  console.log(`${stdout}`);
});
