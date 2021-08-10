import {
  generateWallet,
  generateNewAccount,
  getStxAddress,
} from "@stacks/wallet-sdk"
import { TransactionVersion } from "@stacks/transactions"

const password = "password"
const secretKey = process.env.SECRETKEY

let wallet = await generateWallet({
  secretKey,
  password,
})

wallet = generateNewAccount(wallet)
wallet = generateNewAccount(wallet)
wallet = generateNewAccount(wallet)
wallet = generateNewAccount(wallet)
wallet = generateNewAccount(wallet)
wallet = generateNewAccount(wallet)
wallet = generateNewAccount(wallet)
wallet = generateNewAccount(wallet)
wallet = generateNewAccount(wallet)
wallet = generateNewAccount(wallet)
wallet = generateNewAccount(wallet)
wallet = generateNewAccount(wallet)
wallet = generateNewAccount(wallet)
wallet = generateNewAccount(wallet)
wallet = generateNewAccount(wallet)
wallet = generateNewAccount(wallet)
wallet = generateNewAccount(wallet)
wallet = generateNewAccount(wallet)
wallet = generateNewAccount(wallet)

wallet.accounts.forEach((account) => {
  account.address = getStxAddress({
    account: account,
    transactionVersion: TransactionVersion.Mainnet,
  })
  console.log("account: ", account)
})
// console.log("wallet: ", wallet)
