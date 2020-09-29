require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe story cost rifle universe hunt muscle army gesture'; 
let testAccounts = [
"0x1ce8e7460a5560d57a783889916fac5baf43669a6e46125c12d1fcd5789eff06",
"0xa276bf06783cdd2c15deee4a4cf7bb0c18e588422f93c21d45f99aa37dcf738c",
"0x28ecc6db317e51b6e4541bcc33182ed1fc7f9efa3173b7b75f734b608c0335ad",
"0x8a52eb281b717631aa9b4fa2e3463eb38523fe99b4c5acb12603e6ea3afa1239",
"0x7cc8299ba990d5adc0536322a3d51bd893c5bf2d50f38943e2bf7ea3e411e8ac",
"0xbc0d62a21c89de8770750b89cacb732f3269ad4965c514419974d31757822fd1",
"0x6fe68a1ee583c2070d8efcab7abc36155a25d577c4301a1a784e9185e744326a",
"0xf0e0d8146fa214c9a6319d446c07a284fd28376476f36be49a7ddd06038bb5f0",
"0x8268f64727e87e29151d05df55dcc150a600606c1e88899b83268e09ac4851bc",
"0x0f15550eeb9e8224d3a0a30b28e5c8af465255a0d9fe6b6e21c2333315ec4346"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
