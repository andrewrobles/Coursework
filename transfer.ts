import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { 
  PublicKey,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
  Connection
} from "@solana/web3.js";

const sourceAccountName = process.argv[2];
if (!sourceAccountName) {
  console.error("Please provide an account name to send from");
  process.exit(1);
}

const sourceKeypairFromEnvironment = getKeypairFromEnvironment(sourceAccountName)

const destinationAccountName = process.argv[3];
if (!destinationAccountName) {
  console.error("Please provide an account name to send to");
  process.exit(1);
}

const destinationKeypairFromEnvironment = getKeypairFromEnvironment(destinationAccountName)

console.log(
  `Source account name public key: ${sourceKeypairFromEnvironment.publicKey.toBase58()}`
);
console.log(
  `Destination account name public key: ${destinationKeypairFromEnvironment.publicKey.toBase58()}`
);

console.log(
  `✅ Loaded our own keypair, the destination public key, and connected to Solana`
);

const transaction = new Transaction();

const connection = new Connection("http://127.0.0.1:8899", "confirmed");

const solanaAmount = process.argv[4];
if (!solanaAmount) {
  console.error("Please provide amount of Solana to send");
  process.exit(1);
}

const LAMPORTS_TO_SEND = parseFloat(solanaAmount) * 1_000_000_000;

const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: sourceKeypairFromEnvironment.publicKey,
  toPubkey: destinationKeypairFromEnvironment.publicKey,
  lamports: LAMPORTS_TO_SEND,
});

transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [
  sourceKeypairFromEnvironment,
]);

console.log(
  `💸 Finished! Sent ${solanaAmount} from the account ${sourceAccountName} to account ${destinationAccountName}. `
);
console.log(`Transaction signature is ${signature}!`);