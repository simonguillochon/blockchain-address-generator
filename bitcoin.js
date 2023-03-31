const CoinKey = require('coinkey');

const wallet = new CoinKey.createRandom();

console.log("#------------------------------------------------------------------------------#");
console.log(`# PrivateKey: ${wallet.privateKey.toString('hex')} #`);
console.log(`# Address: ${wallet.publicAddress} -------------------------------- #`);
console.log("#------------------------------------------------------------------------------#");

