import { drizzleConnect } from 'drizzle-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as testData from '../../../data/snapshot.json'
import { Box, Flex } from '@rebass/grid'
import {Radius} from '../basics/Style'
import { B, A, E } from '../basics/Colors.js'
import Text from '../basics/Text.js'
import Triangle from '../basics/Triangle.js'
import {If, autoBind} from 'react-extras'

/*
 * Create component.
 */

class DrizzleContract extends Component {
  constructor(props, context) {
    super(props)
    autoBind(this)

    this.assetKey = ''
    this.asset_name = ''
    this.asset_id = this.props.id
    this.state = {}
    this.contractDict = {
      0: "ETHSwap",
      1: "SPXSwap",
      2: "BTCSwap"
    }
    this.contractDict2 = {
      0: "ETHUSD",
      1: "SPXUSD",
      2: "BTCUSD"
    }

    this.allLPKeys = {}
    this.priceHistory = {}
  // this.allLPS = {};
    this.contracts = context.drizzle.contracts
  }

  componentDidMount() {
    this.lookupName(this.props.id)
    this.getLeverage(this.props.id)
    this.getTakeLogs()
  }

  lookupID(name) {
    let cont_id = this.contractDict[name];
    this.asset_id = cont_id;

  }

  lookupName(id) {
    this.assetKey = this.contracts.Oracle.methods.assets.cacheCall(id)
  }

  calculateTotalLongs(id) {
    var sum = 0;
    Object.keys(testData[id]["lps"]).forEach(function (lp) {
      sum += testData[id]["lps"][lp]['totalLpLong']
    }, this)
    this.setState({totalLpLongs: sum})
  }

  calculateTotalShorts(id) {
    var sum = 0;
    Object.keys(testData[id]["lps"]).forEach(function (lp) {
      sum += testData[id]["lps"][lp]['totalLpShort']
    }, this)
    this.setState({totalLpShorts: sum})
  }

  calculateTotalSubcontracts(id) {
    var count = 0;
    Object.keys(testData[id]["lps"]).forEach(function (lp) {
      count += testData[id]["lps"][lp]['book']['subcontracts'].length
    }, this)
    this.setState({totalSubcontracts: count})
  }

 getTakeLogs() {
    const web3 = this.context.drizzle.web3
    const assetContract = this.contracts[this.contractDict[this.asset_id]]
    const contractweb3 = new web3.eth.Contract(assetContract.abi, assetContract.address);
    var takelps = {};
    contractweb3.getPastEvents(
      'LPNewBook',
      {
        fromBlock: 600000,
        toBlock: 'latest'
      }
    ).then(function(events) {
      events.forEach(function(element) {
        this.getLPInfo(element.returnValues.eLP)
       takelps[element.returnValues.eLP] = true;
        // console.log(element.returnValues.e_lp, "LP addresses")
      }, this);
  //    this.allLPS = takelps;
    }.bind(this));
  }

  getLPInfo(lp) {
    this.allLPKeys[lp] = this.contracts[this.contractDict[this.asset_id]].methods.getBookData.cacheCall(lp);
      // console.log(this.allLPKeys, "LPkeys")
  }

  getLeverage(id) {
    //console.log(this.contracts[this.contractDict[id]])
    this.leverageKey = this.props.contracts.Oracle.currentDay.cacheCall()

      }

  render() {

    let totalLpLong = 0;
    let totalLpShort = 0;


    Object.keys(this.allLPKeys).forEach(function(lp) {
      let bookData = {}
      if (this.allLPKeys[lp] in this.props.contracts[this.contractDict[this.asset_id]].getBookData)
      {
        bookData = this.props.contracts[this.contractDict[this.asset_id]].getBookData[this.allLPKeys[lp]].value
        totalLpLong += parseInt(bookData.totalLpLong, 10);
        totalLpShort += parseInt(bookData.totalLpShort, 10);
       console.log(bookData)
       console.log("heth")
      }
    }, this);


    let asset = {};
    if (this.assetKey in this.props.contracts.Oracle.assets)
    {
      asset = this.props.contracts.Oracle.assets[this.assetKey].value
    }
    let LEVERAGE_RATIO = -1;
    if (this.leverageKey in this.props.contracts.Oracle.currentDay)
    {
      LEVERAGE_RATIO = this.props.contracts.Oracle.currentDay[this.leverageKey].value
  //  console.log(LEVERAGE_RATIO)
  //  console.log(this.leverageKey, "levkey")
  }

    let loaded = (Object.keys(asset).length !== 0) && (LEVERAGE_RATIO !== -1)
    if (loaded)
    {
      return (
        <Flex
        style={{
            borderRadius: Radius,
            overflow: "hidden",
            width: this.props.width
        }}>
          <Box width={1}>
            <Box
            style={{
                backgroundColor: this.props.color ? this.props.color : B
            }}>
                <Box
                px="10px"
                pt="5px">
                    <Text color={A} size="28px" weight="300">{hex_to_ascii(asset.name)}</Text>
                </Box>
                <Flex
                px="10px"
                pb="10px">
                    <Box width={1}>
                        <Box><Text color={A} size="16px">Lev. Ratio</Text></Box>
                        <Box><Text color={A} size="16px">{LEVERAGE_RATIO/100}</Text></Box>
                    </Box>
                </Flex>
                <Flex
                px="10px"
                pt="4px"
                pb="10px"
                style={{
                    borderBottom: `thin solid ${E}`
                }}>
                    <Box width={1/2}>
                  <Text color={A} size="14px">Long</Text> <Text color={A} size="14px" underline={E}>{totalLpLong / 1e12} Sz</Text>
                    </Box>
                    <Box width={1/2}>
                  <Text color={A} size="14px">Short</Text> <Text color={A} size="14px" underline={E}>{totalLpShort /1e12} Sz</Text>
                    </Box>
                </Flex>
              </Box>
              <If
              condition={this.props.showActions}
              render={() =>
                <Box
                style={{
                    backgroundColor: B,
                    cursor: "pointer"
                }}>
                    <Box
                    px="12px"
                    pt="7px"
                    pb="9px"
                    onClick={this.props.onClickTake}
                    style={{
                        borderBottom: `thin solid ${E}`
                    }}>
                        <Triangle margin="7px" color="#70B43F"/> <a href={"/" + this.contractDict2[this.asset_id] + "/offers"} ><Text color={A} size="15px">Make or Take an offer</Text></a>
                    </Box>
                    <Box
                    onClick={ this.props.onClickPositions}
                    px="12px"
                    pt="7px"
                    pb="10px">
                        <Triangle margin="7px" color="#D55757" rotation="180deg"/>
                        <a href={"/" + this.contractDict2[this.asset_id] +"/taker/" + this.props.accounts[0]} >
                          <Text color={A} size="15xpx">View My Positions (Taker Only)</Text>
                        </a>
                    </Box>
                </Box>
              }/>
          </Box>
        </Flex>
      )
    }
    else
    {
      return (
        <div>
          <p>Loading</p>
        </div>
      )
    }
  }
}

function hex_to_ascii(str1)
{
  var hex  = str1.toString();
  var str = '';
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
}

DrizzleContract.contextTypes = {
  drizzle: PropTypes.object
}


const mapStateToProps = state => {
  return {
    contracts: state.contracts,
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus
  }
}

export default drizzleConnect(DrizzleContract, mapStateToProps)
