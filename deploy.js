// const HDWalletProvider = require('truffle-hdewallet-provider');
// const Web3 = require('web3')

// interface = "";

// bytecode = "";

// const provider = new HDWalletProvider(
//     'clump color frog clog addict pencil august width course frozen visit exhibit', 
//     ''
// )

const hre = require('hardhat');

async function main() {
    const FluenceContract = await hre.ethers.getContractFactory("Fluence");
    const contract = await FluenceContract.deploy();

    await contract.deployed();

    console.log("Deployed to :", contract.address);
};


main()
.then(() => process.exit(0))
.catch((err) => console.error(err));