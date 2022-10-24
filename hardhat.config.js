require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { HTTPS_ENDPOINT, PRIVATE_KEY } = process.env;
module.exports = {
     solidity: "0.8.17",
     defaultNetwork: "goerli",
     networks: {
        hardhat: {},
        goerli: { 
            url: HTTPS_ENDPOINT,
            accounts: ["a060ccf26e425d3640083b0dc27605a7f44c25cefe2a7f0023c00dfd679d300d"],
           },
       },
  };
