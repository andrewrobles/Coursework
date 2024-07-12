import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

// Check if a variable name was provided as a command line argument
const variableName = process.argv[2];
if (!variableName) {
  console.error("Please provide a variable name as a command line argument.");
  process.exit(1);
}

const keypairFromEnvironment = getKeypairFromEnvironment(variableName)

const publicKey = new PublicKey(keypairFromEnvironment.publicKey.toBase58());

const connection = new Connection(clusterApiUrl("devnet"));

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);