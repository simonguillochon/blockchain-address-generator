const ethers = require('ethers'); 

const wallet = ethers.Wallet.createRandom()

console.log("------------------------------------------------------------------------------");
console.log("PrivateKey:", wallet.privateKey);
console.log("Address:", wallet.address);
console.log('Mnemonic:', wallet.mnemonic.phrase)
console.log("------------------------------------------------------------------------------");

