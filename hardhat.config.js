require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.8.21",
  // networks: {
  //   hardhat: {},
  //   sepolia: {
  //     url: QUICKNODE_HTTP_URL,
  //     accounts: [PRIVATE_KEY],
  //   },
  // },
  networks: {
    sepolia: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
      // gas: 5000000, //units of gas you are willing to pay, aka gas limit
      // gasPrice: 50000000000,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
