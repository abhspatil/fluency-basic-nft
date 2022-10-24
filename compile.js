const path = require('path');
const fs = require('fs');
const solc = require('solc');

const contractPath = path.resolve(__dirname, "contracts", "fluence.sol");
const srcPath = fs.readFileSync(contractPath, 'utf8')

// const input = fs.readFileSync(contractPath, 'utf8').toString();

console.log(solc.compile(srcPath, 1));

// console.log(solc.compile(JSON.stringify(input), 1));

// module.exports = solc.compile(srcPath, 1).contracts[":fluence"];