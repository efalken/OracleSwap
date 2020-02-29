import React, { Component } from 'react'
import { drizzleConnect } from 'drizzle-react'
import PropTypes from 'prop-types'
import {autoBind} from 'react-extras'
import Text from '../basics/Text'
import IndicatorD from "../basics/IndicatorD";
var moment = require("moment");
var momentTz = require("moment-timezone");

class OracleHistory extends Component {

  constructor(props, context) {
    super(props)
    autoBind(this)

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

    this.assets= {
        0: "ETHUSD"
    }

    this.contracts = context.drizzle.contracts
    this.drizzle = context.drizzle
    this.priceHistory = {}

  }

  timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var year = a.getFullYear();
    var month = a.getMonth();
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + '/' + month + '/' + year + ' ' + hour + ':' + min;
    return time;
  }

  componentDidMount() {
    Object.keys(this.assets).forEach(function(asset) {
        this.getOracleLogs(asset)
      }, this);
  }


  getOracleLogs(id) {
    const web3 = this.context.drizzle.web3
    const oracle = this.drizzle.contracts.Oracle
    const contractweb3 = new web3.eth.Contract(oracle.abi, oracle.address);
    var pricedata = [];
    contractweb3.getPastEvents(
      'PriceUpdated',
      {
        fromBlock: 9000000,
        toBlock: 'latest'
      }
    ).then(function(events) {
      events.forEach(function(element) {
        pricedata.push({
          blockNum: element.blockNumber,
          priceEth: element.returnValues.ethPrice,
          priceSpx: element.returnValues.spxPrice,
          priceBtc: element.returnValues.btcPrice,
          time: element.returnValues.eUTCTime})
      }, this);
      this.priceHistory[id] = pricedata
    }.bind(this))
  }


  openEtherscan() {
     const url = "https://etherscan.io/address/0x18d51856B176E2aEAB5fD0Fb35b6D0110bCeC10a#code";
    // new const url = "https://etherscan.io/address/0xc9c61e5Ec1b7E7Af5Ccb91b6431733dE6d62cAC3#code";
    window.open(url, "_blank");
  }



  render() {

    if (Object.keys(this.priceHistory).length === 0)
      return (
        <Text size="20px" weight="200">Waiting...</Text>
        )
    else
    {
      return (
        <div>
            <IndicatorD
              className="etherscanLink"
              size="15px"
              mr="10px"
              mb="10px"
              ml="5px"
              mt="10px"
              width="240px"
              label="See Contract on"
              onClick={() => this.openEtherscan()}
              value="Etherscan"
            />
          {Object.keys(this.priceHistory).map(id => (
            <div key={id} style={{ width: "50%", float: "left" }}>
              <Text size="12px" weight="200">
                {" "}
                UTC time, EthUSD, SPX Index, BtcUSD
              </Text>{" "}
              <br />
              {this.priceHistory[id].map((event, index) => (
                <div key={index}>
                  <Text size="12px" weight="200">
                    {" "}
                    {moment.unix(event.time).format("DD-MM-YYTHH:mm")},{" "}
                    {(event.priceEth / 1e2).toFixed(2)},{" "}
                    {(event.priceSpx / 1e2).toFixed(2)},{" "}
                    {(event.priceBtc / 1e2).toFixed(2)}{" "}
                  </Text>
                  <br />
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    }
  }
}


OracleHistory.contextTypes = {
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

export default drizzleConnect(OracleHistory, mapStateToProps)
