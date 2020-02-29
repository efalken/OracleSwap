import React, { Component } from 'react'
//import * as testData from '../../../data/snapshot.json'
//import * as experiment from '../../../data/test.json'
import { drizzleConnect } from 'drizzle-react'
import PropTypes from 'prop-types'
import {autoBind} from 'react-extras'
import Text from '../basics/Text'

class Burns extends Component {

  constructor(props, context) {
    super(props)
    autoBind(this)
    console.log(props)
    console.log(context)
    //console.log('splash:', testData)

    this.state = {
        contracts: [
            {
                asset: "ETHUSD",
                id: 0
            },
            {
                asset: "SPXUSD",
                id: 1
            },
            {
                asset: "BTCUSD",
                id: 2
            }
        ],
    }

    this.assets= [
        "ETHSwap",
        "SPXSwap",
        "BTCSwap"
    ]

    this.contracts = context.drizzle.contracts
    this.drizzle = context.drizzle

    this.burnHistory = []

  }

  componentDidMount() {
    this.assets.forEach(function(asset) {
        this.getBurnsFromContracts(asset)
      }, this);

  }


  getBurnsFromContracts(asset) {
    const web3 = this.context.drizzle.web3
    console.log(asset)
    const cont = this.drizzle.contracts[asset]
    const contractweb3 = new web3.eth.Contract(cont.abi, cont.address);
    var burns = [];
    contractweb3.getPastEvents(
      'Burn',
      {
        fromBlock: 600000,
        toBlock: 'latest'
      }
    ).then(function(events) {
      events.forEach(function(element) {
          burns.push( {
            blockNum: element.blockNumber,
            lp: element.returnValues.lp,
            id: element.returnValues.id,
            timestamp: element.returnValues.time,
            sender: element.returnValues.sender})
      }, this);
      this.burnHistory.concat(burns)
    }.bind(this));
  }


  render() {
    if (this.burnHistory.length === 0)
      return (
        <Text size="20px" weight="200">No Burns to show</Text>
        )
    else
    {
      return (
          <div>
              <Text size="20px" weight="200">All Burns</Text>
              {this.burnHistory.map( (item, index) =>
                <div>
                  <Text size="18px" weight="200">Burn {index}</Text> <br/>
                  <Text size="15px" weight="200">Liquidity Provider: {item.lp}</Text><br/>
                  <Text size="15px" weight="200">Subcontract ID: {item.id}</Text><br/>
                  <Text size="15px" weight="200">Burner: {item.sender}</Text><br/>
                  <Text size="15px" weight="200">Time: {item.timestamp}</Text><br/>
                </div>
              )}
          </div>
      )
    }
  }
}

Burns.contextTypes = {
  drizzle: PropTypes.object
}

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    contracts: state.contracts,
    drizzleStatus: state.drizzleStatus
  }
}

export default drizzleConnect(Burns, mapStateToProps)
