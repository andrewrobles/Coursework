import { createMint } from "@solana/spl-token";
import "dotenv/config";
import {
  getKeypairFromEnvironment,
  getExplorerLink,
} from "@solana-developers/helpers";
import { Connection, clusterApiUrl } from "@solana/web3.js";

const url = "http://127.0.0.1:8899"
const connection = new Connection(url);

// Check if a variable name was provided as a command line argument
const accountName = process.argv[2];
if (!accountName) {
  console.error("Please provide account name as a command line argument.");
  process.exit(1);
}

const user = getKeypairFromEnvironment(accountName);

console.log(
  `🔑 Loaded our keypair securely, using an env file! Our public key is: ${user.publicKey.toBase58()}`
);

// This is a shortcut that runs:
// SystemProgram.createAccount
// token.createInitializeMintInstruction
// See https://www.soldev.app/course/token-program
const tokenMint = await createMint(connection, user, user.publicKey, null, 2);

const link = getExplorerLink("address", tokenMint.toString(), "localnet");

console.log(`✅ Finished! Created token mint: ${link}`);