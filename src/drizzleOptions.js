import AssetSwap from './../contracts/solidityjson/AssetSwap.json'
import Oracle from './../contracts/solidityjson/Oracle.json'


const Web3 = require('web3');

const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'wss://mainnet.infura.io/ws/v3/ff71f0ac9a2c42caa271851f369053f6'
    //  url: 'wss://ropsten.infura.io/ws/v3/ff71f0ac9a2c42caa271851f369053f6'
    }
  },

  contracts: [
    Oracle
  ],
  events: {
    AssetSwap: [
      'SubkTracker',
      'BurnHist',
      'RatesUpdated',
      'LPNewBook'
    ],
    Oracle: [
      'PriceUpdated'
    ]
  },
  polls: {
    accounts: 1500
  }
}

export default drizzleOptions
