import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const keypairFromEnvironment = getKeypairFromEnvironment("SECRET_KEY")

const publicKey = new PublicKey(keypairFromEnvironment.publicKey.toBase58());

const connection = new Connection("http://127.0.0.1:8899", "confirmed");

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);