require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom private boil suggest name riot stereo modify grid kangaroo army gauge'; 
let testAccounts = [
"0x2ee1efc66f25b3dd83a40eba701582ebc215357a77b800caee6fb67b52cb17ba",
"0x692e80d6739fe2db448cff5e21a9f422c72420e137703e2ecb4ca08982e8c2ff",
"0xc8ed634990a8a614b1a9f65ce6aaa06389cfeb497f4428de96c64edfd49028d3",
"0xe25f87ba09b8d571b44ed4829e3ae7668b34a002e420575fd1942508de46151a",
"0x1826a972a40756c8a51df5374cca62bc68d5177ba956c549f1e3bacf3b53e659",
"0xf597049783cbbd751f5f772746947fe344396329e32f11e1ed26984a9c300cd2",
"0xb6ee0321b908f8fb80e00ede491b56e49991e496e43c50423c822203f2a2d215",
"0xa850241723a7c28764a3c639f30f5540b7ccfd3b394cdd1c34b81e90fb9a96fc",
"0x5c16d38ba55452e042a3fdbd5e909a349f64b42a0c69961c65a5d890b8814d97",
"0xe79161e70799ee5e4837b8b62d49a94d6b7169ce30ff363c9bbfeb31b7122952"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


