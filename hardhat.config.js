require("dotenv").config();
// dotenv file over everything else... 
require("@nomicfoundation/hardhat-toolbox");
// Import and configure dotenv


module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      // This value will be replaced on runtime
      url: process.env.TESTNET_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};