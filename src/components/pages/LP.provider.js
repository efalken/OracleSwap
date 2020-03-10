import React, { Component } from 'react'
import { drizzleConnect } from 'drizzle-react'
import PropTypes from 'prop-types'
import Split from '../layout/Split'
import { Box, Flex } from '@rebass/grid'
import Logo from '../basics/Logo'
import Text from '../basics/Text'
import { C, D, G, H } from '../basics/Colors'
import IndicatorB from '../basics/IndicatorB'
import IndicatorD from '../basics/IndicatorD'
import LabeledText from '../basics/LabeledText'
import { autoBind } from 'react-extras'
import Triangle from '../basics/Triangle'
import Form from '../basics/Form.js'
import ButtonEthScan from '../basics/ButtonEthScan.js'
import IndicatorC from '../basics/IndicatorC.js'
import DrizzleProviderSubcontractRow from '../blocks/DrizzleProviderSubcontractRow'
import TableA from '../blocks/TableA.js';
import WarningSign from '../basics/WarningSign'
import Input from '../basics/Input.js';
import Button from '../basics/Button.js';
import TruncatedAddress from '../basics/TruncatedAddress.js';
import VBackgroundCom from '../basics/VBackgroundCom'
var moment = require("moment");
var momentTz = require("moment-timezone");


class BookInfo extends Component {

  constructor(props, context) {
    super(props)
    autoBind(this)

    this.assets = [
      {
        contract: context.drizzle.contracts.ETHSwap,
        id: 0
      },
      {
        contract: context.drizzle.contracts.SPXSwap,
        id: 1
      },
      {
        contract: context.drizzle.contracts.BTCSwap,
        id: 2
      }
    ]
    this.contractDict = {
      "ETHUSD": "ETHSwap",
      "SPXUSD": "SPXSwap",
      "BTCUSD": "BTCSwap"
    }
    this.idDict = {
      "ETHSwap": 0,
      "SPXSwap": 1,
      "BTCSwap": 2
    }
    this.assetName = {
      0: 'ETH',
      1: 'SPX',
      2: 'BTC'
    }



    this.currentContract = this.props.routeParams.contract;
    this.currentLP = this.props.routeParams.address;
    this.asset_id = this.idDict[this.contractDict[this.currentContract]]

    this.contracts = context.drizzle.contracts
    this.drizzle = context.drizzle

    this.state = {
      contractID: 1,
      szabos: "",
      positionRM: "",
      takeState: null,
      closeFee: "",
      longFundingRate: "",
      shortFundingRate: ""
    }

    this.assetPastPricesKeys = {}
    this.ethPastPricesKeys = {}
    this.priceHistory = {
      0: []
    }
    this.priceHistory[this.asset_id] = []
    this.settleHistory = {
      0: []
    }
    this.settleHistory[this.asset_id] = []
    this.takekeys = {}
  }


    openEtherscan(txhash) {
      const url = 'https://etherscan.io/tx/' + txhash;
      window.open(url, '_blank');
    }

  setNewLpAddress(value) {
    this.setState(state => ({ ...state, newLpAddress: value }))
  }

  setNewMargin(value) {
    this.setState(state => ({ ...state, newMargin: value }))
  }

  setNewMarginToWithdrawalBalance(value) {
    this.setState(state => ({ ...state, newMarginToWithdrawalBalance: value }))
  }

  setMinRM(value) {
    this.setState(state => ({ ...state, minRM: value }))
  }

  setCustomFinalPrice(value) {
    this.setState(state => ({ ...state, customFinalPrice: value }))
  }

  setCustomFinalPrice1(value) {
    this.setState(state => ({ ...state, customFinalPrice1: value }))
  }

  setCustomFinalPrices(value) {
    this.setState(state => ({ ...state, customFinalPrice: value }))
    this.setState(state => ({ ...state, customFinalPrice1: value }))
  }

  setLongFundingRate(value) {
    this.setState(state => ({ ...state, longFundingRate: value }));
  }

  setShortFundingRate(value) {
    this.setState(state => ({ ...state, shortFundingRate: value }));
  }

  handleCloseFeeChange(value) {
    this.setState(state => ({ ...state, closeFee: value }));
  }

  setFees() {
    console.log(this.state)
    const stackId = this.contracts[
      this.contractDict[this.currentContract]
    ].methods.updateFees.cacheSend(
      this.state.closeFee,
      this.state.longFundingRate,
      this.state.shortFundingRate,
      {
        from: this.props.accounts[0]
      }
    );
  }

  settlePart1(e) {
    e.preventDefault();
    const stackId = this.contracts[
      this.contractDict[this.currentContract]
    ].methods.settleBatch.cacheSend(this.currentLP, {
      from: this.props.accounts[0]
    });
  }

  settlePart2(e) {
    e.preventDefault();
    const stackId = this.contracts[
      this.contractDict[this.currentContract]
    ].methods.settleParts.cacheSend(this.currentLP, {
      from: this.props.accounts[0]
    });
  }

  changeNewMargin() {
    const { newMargin } = this.state
    const stackId = this.contracts[this.contractDict[this.currentContract]].methods.fundLP.cacheSend(this.currentLP, {
      from: this.props.accounts[0], value: newMargin * 1e12
    });
  }

  changeNewMarginToWithdrawalBalance() {
    const { newMarginToWithdrawalBalance } = this.state
    const stackId = this.contracts[
      this.contractDict[this.currentContract]
    ].methods.withdrawLP.cacheSend(newMarginToWithdrawalBalance, {
      from: this.props.accounts[0]
    });
  }

  calculateCustomFinalPrices() {
    const { customFinalPrice } = this.state
    // TODO
    this.setState(state => ({ ...state, speculativeFinalProfit: `ETH ${customFinalPrice * 10}` }))
  }

  withdrawBalance() {

    const stackId = this.contracts[this.contractDict[this.currentContract]].methods.withdrawFromAssetSwap.cacheSend({ from: this.props.accounts[0] });
  }

  LPBurn(margin) {
    const stackId = this.contracts[
      this.contractDict[this.currentContract]
    ].methods.burnLP.cacheSend(this.currentLP, {
      from: this.props.accounts[0],
      value: (margin * 0.5)
    });
  }

  closeBook() {

    const stackId = this.contracts[this.contractDict[this.currentContract]].methods.closeBook.cacheSend({ from: this.props.accounts[0],
    value: this.state.closeFee * 1e12 });
  }

  adjRM() {
    const { minRM } = this.state
    const stackId = this.contracts[this.contractDict[this.currentContract]].methods.adjustMinRM.cacheSend(minRM, {
      from: this.props.accounts[0]
    });
  }

  openSubcontract(id) {
    const url = '/' + this.currentContract + '/lp/'
      + this.currentLP + '/subcontract/' + id;
    window.open(url, '_blank');
  }

  componentDidMount() {
    this.findValues(this.state.contractID)
  }

  getLeverage() {
    this.leverageKey = this.contracts.Oracle.methods.levRatio.cacheCall(this.asset_id)
  }

  handleChange(event) {
    this.setState({ contractID: event.target.value })
    this.findValues(event.target.value)
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    alert('Submitted!')
    event.preventDefault()
  }

  getTakeHistory(id) {
    const web3 = this.context.drizzle.web3
    const swap = this.contracts[this.contractDict[this.currentContract]]
    const contractweb3 = new web3.eth.Contract(swap.abi, swap.address);
    var takes = {};
    contractweb3.getPastEvents(
      'SubkTracker',
      {
        //  filter: {e_lp: this.currentLP},
        fromBlock: 9600636,
        toBlock: 'latest'
      }
    ).then(function (events) {
      events.forEach(function (element) {
        if (element.returnValues.eLP.toLowerCase() === this.currentLP.toLowerCase()) {
          takes[element.returnValues.eSubkID] = {
            data2: this.contracts[
              this.contractDict[this.currentContract]
            ].methods.getSubkData1.cacheCall(
              this.currentLP,
              element.returnValues.eSubkID
            ),
            data1: this.contracts[
              this.contractDict[this.currentContract]
            ].methods.getSubkData2.cacheCall(
              this.currentLP,
              element.returnValues.eSubkID
            )
          };
        }
      }, this);
      this.takekeys = takes
    }.bind(this));
  }

  getBookData() {
    this.bookDataKey = this.contracts[this.contractDict[this.currentContract]].methods.getBookData.cacheCall(this.currentLP)

  }

  getBookData2() {
    this.bookDataKey2 = this.contracts[this.contractDict[this.currentContract]].methods.getSettleInfo.cacheCall(this.currentLP)
  }

  getLongAndShortRates() {
    this.longKey = this.contracts.Oracle.methods.fundingRateLong.cacheCall(this.asset_id)
    this.shortKey = this.contracts.Oracle.methods.fundingRateShort.cacheCall(this.asset_id)
  }

  getWithdrawalBalance() {
    this.balanceKey = this.contracts[this.contractDict[this.currentContract]].methods.assetSwapBalance.cacheCall(this.currentLP)
  }

  getOracleSettleTime() {
    this.settleTimeKey = this.contracts.Oracle.methods.lastSettleTime.cacheCall()
  }


  getOraclePastPrices() {
    this.ethPastPricesKey = this.contracts.Oracle.methods.getUsdPrices.cacheCall(0, { 'from': '0x000000000000000000000000000000000000dEaD' })
    this.spxPastPricesKey = this.contracts.Oracle.methods.getUsdPrices.cacheCall(1, { 'from': '0x000000000000000000000000000000000000dEaD' })
    this.btcPastPricesKey = this.contracts.Oracle.methods.getUsdPrices.cacheCall(2, { 'from': '0x000000000000000000000000000000000000dEaD' })
    this.assetPastPricesKey = this.contracts.Oracle.methods.getUsdPrices.cacheCall(this.asset_id, { 'from': '0x000000000000000000000000000000000000dEaD' })
  }

  getCurrentDay() {
    this.currentDayKey = this.contracts.Oracle.methods.currentDay.cacheCall()
  }

  getOracleStartDay() {
    this.oracleStartDayKey = this.contracts.Oracle.methods.getStartDay.cacheCall()
  }

  inactiveOracleFunc() {
    this.contracts[this.contractDict[this.currentContract]].methods.inactiveOracle.cacheSend(this.contracts.Oracle.address)
  }

  takeFromLP(e) {
    e.preventDefault()
    console.log(this.state)
    if (this.state.szabos.length > 0 &&
      (this.state.takeState !== null &&
        this.state.positionRM.length > 0
      )) {
      this.contracts[
        this.contractDict[this.currentContract]
      ].methods.take.cacheSend(
        this.currentLP,
        this.state.positionRM,
        this.state.takeState,
        {
        from: this.props.accounts[0],
        value: this.state.szabos * 1e12
      })
    } else {
      alert("Please set szabo number and a taker side")
    }
  }

  radioShort() {
    this.setState({ takeState: false })
    console.log(this.state.takeState)
  }

  radioLong() {
    this.setState({ takeState: true })
    console.log(this.state.takeState)
  }

  handleEtherChange(value) {
    this.setState(state => ({ ...state, szabos: value }))
  }

  handlePositionRMChange(value) {
    this.setState(state => ({ ...state, positionRM: value }))
  }

  findValues() {
    this.getBookData()
    this.getBookData2()
    this.getWithdrawalBalance()
    this.getOracleSettleTime()
    this.getTakeHistory()
    this.getLeverage()
    this.getOraclePastPrices()
    this.getCurrentDay()
    this.getOracleStartDay()
  }

  calculatePNL(
    oracleStartDay,
    subStartDay,
    takerSide,
    requiredMargin,
    levRatio,
    ethPriceStart,
    ethPriceFinal,
    assetPriceStart,
    assetPriceFinal,
    fundingRate,
    backupEthPrice,
    backupAssetPrice
  ) {

    if (oracleStartDay === subStartDay) {
      return 0
    }

    let leveragedEth =
      (((requiredMargin / 1e12) * levRatio) / 1e2) *
      (ethPriceStart == 0 ? backupEthPrice : ethPriceStart);
    let assetRatio =
      (assetPriceFinal * 1e2) /
      (assetPriceStart == 0 ? backupAssetPrice : assetPriceStart);
    let lpPNL


    if (takerSide) {
      lpPNL = leveragedEth * (1.0 * (assetRatio - 1) - fundingRate / 1e4) / ethPriceFinal / 100
    } else {
      lpPNL = leveragedEth * (-1.0 * (assetRatio - 1) - fundingRate / 1e4) / ethPriceFinal / 100
    }

    return lpPNL
  }

  getLastPrice(prices) {
    let filteredPrices = prices.filter(price => price > 0);
    return filteredPrices[filteredPrices.length - 1];
  }

  getSubcontractStatus(subk, book) {
    if (subk === "0" && book === "0") {
      return "New"
    } else if (subk === "1" && book === "0") {
      return "Active"
    } else if ((subk === "2" || (subk === "3" || subk === "4")) || book === "1") {
      return "Cancelled"
    } else if (subk === "5" || book === "2") {
      return "Burned"
    } else if ((subk === "6" || subk === "7") || book === "3") {
      return "Redeemable"
    } else {
      return "No data"
    }
  }


  render() {

    let bookData = {
      0: "0x1234000000000000000000000000000000000000",
      1: "0",
      2: "0",
      3: "0",
      4: "0",
      5: "0",
      6: "0",
      7: "0",
      8: false,
      9: "0",
      book: "0x1234000000000000000000000000000000000000",
      lpMargin: "0",
      totalLpLong: "0",
      totalLpShort: "0",
      lpRM: "0",
      bookMinimum: "0",
      longFundingRate: "0",
      shortFundingRate: "0",
      bookStatus: "0",
      lpCloseFee: "0"
    }

    if (this.bookDataKey in this.props.contracts[this.contractDict[this.currentContract]].getBookData)
    {
      bookData = this.props.contracts[this.contractDict[this.currentContract]].getBookData[this.bookDataKey].value
    }

    let bookData2 = {
      0: "0x1234000000000000000000000000000000000000",
      1: "0",
      2: "0",
      3: "0",
      4: "0",
      5: "0",
      6: "0",
      totalLength: "0x1234000000000000000000000000000000000000",
      expiringLength: "0",
      newLength: "0",
      lastBookSettleUTC: "0",
      settleNumber: "0",
      bookBalance: "0",
      bookMaturityUTC: "0"
    }

    if (this.bookDataKey2 in this.props.contracts[this.contractDict[this.currentContract]].getSettleInfo)
    {
      bookData2 = this.props.contracts[this.contractDict[this.currentContract]].getSettleInfo[this.bookDataKey2].value
    }



    let balance = 1;
    if (this.balanceKey in this.props.contracts[this.contractDict[this.currentContract]].assetSwapBalance) {
      balance = this.props.contracts[this.contractDict[this.currentContract]].assetSwapBalance[this.balanceKey].value
    }

    let settleTime = 0;
    if (this.settleTimeKey in this.props.contracts.Oracle.lastSettleTime) {
      settleTime = this.props.contracts.Oracle.lastSettleTime[this.settleTimeKey].value
    }
    // let settlementPeriod = Math.floor(Date.now() / 1000) - settleTime < 300;


    let oracleStartDay = 0;
    if(this.oracleStartDayKey in this.props.contracts.Oracle.getStartDay) {
      oracleStartDay = this.props.contracts.Oracle.getStartDay[this.oracleStartDayKey].value
    }

    let subcontracts = {}
    Object.keys(this.takekeys).forEach(function (id) {
      if (
        this.takekeys[id]["data1"] in
          this.props.contracts[this.contractDict[this.currentContract]]
            .getSubkData1 &&
        this.takekeys[id]["data2"] in
          this.props.contracts[this.contractDict[this.currentContract]]
            .getSubkData2
      ) {
        let data1 = this.props.contracts[
          this.contractDict[this.currentContract]
        ].getSubkData1[this.takekeys[id]["data1"]].value;
        let data2 = this.props.contracts[
          this.contractDict[this.currentContract]
        ].getSubkData2[this.takekeys[id]["data2"]].value;
        if (data1.takerMargin !== "0") {
          subcontracts[id] = { ...data1, ...data2 };
        }
      }
    }, this);

    let spxPriceColumns = [];
    if (this.spxPastPricesKey in this.props.contracts.Oracle.getUsdPrices) {
      spxPriceColumns = this.props.contracts.Oracle.getUsdPrices[this.spxPastPricesKey].value
    }

     let ethPriceColumns = [];
    if (this.ethPastPricesKey in this.props.contracts.Oracle.getUsdPrices) {
      ethPriceColumns = this.props.contracts.Oracle.getUsdPrices[this.ethPastPricesKey].value
    }

    let btcPriceColumns = [];
    if (this.btcPastPricesKey in this.props.contracts.Oracle.getUsdPrices) {
      btcPriceColumns = this.props.contracts.Oracle.getUsdPrices[this.btcPastPricesKey].value
    }

    let assetPriceColumns = [];
    if (this.assetPastPricesKey in this.props.contracts.Oracle.getUsdPrices) {
      assetPriceColumns = this.props.contracts.Oracle.getUsdPrices[this.assetPastPricesKey].value
    }


    const priceDays = ["Fri", "Mon", "Tue", "Wed", "Thur", "Fri"];

    let ethDisplayColumns = ethPriceColumns.slice(0, 5);
    ethDisplayColumns.push(ethPriceColumns[ethPriceColumns.length - 1]);

    let spxDisplayColumns = spxPriceColumns.slice(0, 5);
    spxDisplayColumns.push(spxPriceColumns[spxPriceColumns.length - 1]);

    let btcDisplayColumns = btcPriceColumns.slice(0, 5);
    btcDisplayColumns.push(btcPriceColumns[btcPriceColumns.length - 1]);


    let LEVERAGE_RATIO = 0;
    if (this.leverageKey in this.props.contracts.Oracle.levRatio) {
      LEVERAGE_RATIO = this.props.contracts.Oracle.levRatio[this.leverageKey].value
    }


    let maxLongTake = 0;
    if (bookData) {
      if (bookData.lpMargin / 1e12 - bookData.lpRM / 1e12 > 0 &&
      (bookData.lpMargin / 1e12 / 2) + (bookData.totalLpShort / 1e12) - (bookData.totalLpLong / 1e12) > 0)
       {
        maxLongTake = ((bookData.lpMargin / 1e12 / 2) + (bookData.totalLpShort / 1e12) - (bookData.totalLpLong / 1e12))
      } else {
        maxLongTake = 0
      }
    }

    let maxShortTake = 0;
    if (bookData) {
      if (bookData.lpMargin / 1e12 - bookData.lpRM / 1e12 > 0 &&
      (bookData.lpMargin / 1e12 / 2) + (bookData.totalLpLong / 1e12) - (bookData.totalLpShort / 1e12) > 0)
      {
        maxShortTake = (bookData.lpMargin / 1e12 / 2 + (bookData.totalLpLong / 1e12) - (bookData.totalLpShort / 1e12))
      } else {
        maxShortTake = 0
      }
    }


    let estHour = momentTz().tz("America/New_York").hour();
    // let lastSettledDate = moment.unix(settleTime).format("MM/DD/YYYY HH:mm");

    var finalEthPrice = this.getLastPrice(ethPriceColumns);
    var finalAssetPrice = this.getLastPrice(assetPriceColumns);
    var settleTime24 = settleTime * 1 + 86400;

    let allPNL = [];
    if (subcontracts) {
      Object.keys(subcontracts).map(id => allPNL.push(this.calculatePNL(oracleStartDay, subcontracts[id].priceDay, subcontracts[id].takerSide, subcontracts[id].reqMargin, LEVERAGE_RATIO, ethPriceColumns[subcontracts[id].priceDay], (finalEthPrice / 100), assetPriceColumns[subcontracts[id].priceDay], (finalAssetPrice / 100), subcontracts[id].fundingRate, ethPriceColumns[0], assetPriceColumns[0], "SUBDATA"))
      )
    }

    let totalPNL = allPNL.reduce(function (accumulator, subPNL) {
      return accumulator + subPNL;
    }, 0);

    let customPNL = [];
    if (subcontracts) {
      Object.keys(subcontracts).map(id =>
        customPNL.push(
          this.calculatePNL(
            oracleStartDay,
            subcontracts[id].priceDay,
            subcontracts[id].takerSide,
            subcontracts[id].reqMargin,
            LEVERAGE_RATIO,
            ethPriceColumns[5],  /* subcontracts[id].priceDay],*/
            this.state.customFinalPrice,
            assetPriceColumns[5], /* subcontracts[id].priceDay],*/
            this.state.customFinalPrice1,
            subcontracts[id].fundingRate,
            ethPriceColumns[5],
            assetPriceColumns[5]
          )
        )
      );
    }

    let totalCustomPNL = customPNL.reduce(function (accumulator, subPNL) {
      return accumulator + subPNL;
    }, 0);

    return (
      <div>
        <VBackgroundCom />
        <Split
          side={
            <Box mt="30px" ml="25px" mr="35px">
              <Logo />
              <Flex mt="15px">

              </Flex>
              <Box
                mt="20px"
                pt="10px"
                style={{
                  borderTop: `thin solid ${G}`
                }}
              >
                <Text size="22px" weight="400">
                  Liquidity Provider
                </Text>
              </Box>

              <Box mb="10px" mt="10px">
                <TruncatedAddress
                  label="LP Address"
                  addr={this.currentLP}
                  start="8"
                  end="6"
                  transform="uppercase"
                  spacing="1px"
                />
              </Box>
              {(this.props.transactionStack.length > 0 && this.props.transactionStack[0].length === 66) ? (
                <Flex alignItems="center">
                  <ButtonEthScan
                    onClick={() =>
                      this.openEtherscan(this.props.transactionStack[0])
                    }
                    style={{ height: "30px" }}
                  >
                    See Transaction Detail on Ethscan
                  </ButtonEthScan>
                </Flex>
              ) : null}
              <Box>
              <LabeledText
                text={
                  this.currentLP === this.props.accounts[0]
                    ? "This is your LP book"
                    : "This is not you"
                }
                spacing="1px"
              />
                <TruncatedAddress
                  label="Book Address"
                  addr={bookData ? bookData.book : "None"}
                  start="8"
                  end="6"
                  transform="uppercase"
                  spacing="1px"
                />
              </Box>

              {bookData2.lastBookSettleUTC < settleTime &&
                moment().unix() > settleTime24 ? (
              <Flex
                mt="10px"
                pt="10px"
                alignItems="center"
                style={{
                  borderTop: `thin solid ${G}`
                }}
              >

              </Flex>) : null }

              {bookData2.lastBookSettleUTC  < settleTime &&
                moment().unix() > settleTime24 ? (
              <Box pt="3px" mt="8px">
                <Flex>

                <Box mb="10px" mt="10px" ml="10px">
                  <Text mb="10px">Settle Number: </Text>
                  <Text>{bookData2 ? bookData2.settleNumber : "0"}</Text>
                </Box>

                </Flex>
              </Box> ) : null}

  {bookData2.lastBookSettleUTC  < settleTime &&
    moment().unix() > settleTime24 ? (
              <Box pt="3px" mt="8px">
                <Flex>

                    <Button onClick={e => this.settlePart1(e)}>
                      Batch Settle
                    </Button>

                </Flex>
              </Box> ) : null}

  {bookData2.lastBookSettleUTC  < settleTime &&
    moment().unix() > settleTime24 ? (
              <Box pt="3px" mt="8px">
                <Flex>
                    <Button onClick={e => this.settlePart2(e)}>
                      Settle by Parts
                    </Button>
                </Flex>
              </Box>
                ) : null}

          {bookData2.lastBookSettleUTC > settleTime ? (
            <Flex
              mt="10px"
              pt="10px"
              alignItems="center"
              style={{
                borderTop: `thin solid ${G}`
              }}
            >
              <Box>
                <Text
                  size="16px"
                  justifyContent="space-between"
                  buttonWidth="95px"
                >
                  Withdraw Margin to Asset Swap
                </Text>

              <Form
                onChange={this.setNewMarginToWithdrawalBalance}
                value={this.state.newMarginToWithdrawalBalance}
                onSubmit={this.changeNewMarginToWithdrawalBalance}
                mb="20px"
                justifyContent="space-between"
                buttonWidth="95px"
                inputWidth="280px"
                placeholder="amount in gwei (600 is 0.6 Szabo)"
                buttonLabel="Move"
              />
                </Box>
                            </Flex>
                        ) : (
                        <Box
                          mt="10px"
                          mb="15px"
                          pt="5px"
                           style={{
                             borderTop: `thin solid ${G}`
                           }}
                        >
                        <Flex>
                  <Box ml="20px">
                    <Box>
                      <Button
                        width="120px"
                        bgColor={H}
                        onClick={() => this.LPBurn(bookData.lpMargin)}
                      >
                        <Flex justifyContent="center">
                          <Box mr="20px">
                            <WarningSign width="13" />
                          </Box>{" "}
                          <Box>Burn</Box>
                        </Flex>
                      </Button>
                    </Box>
                  </Box>
                </Flex>
                </Box> ) }


              <Flex
                mt="10px"
                pt="10px"
                alignItems="center"
                style={{
                  borderTop: `thin solid ${G}`
                }}
              >
              </Flex>
              <Flex>
                <Text size="16px" weight="400">
                  LP Fees in basis points of Notional
                </Text>
              </Flex>

              <Flex
                pt="5px"
                justifyContent="space-between"
                flexDirection="column"
              >
                <Flex justifyContent="space-between" width="100%">
                  <Flex
                    flexDirection="row"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <Flex style={{ color: "#9C9C9C", fontSize: "13px" }}>
                      Long Weekly Rate
                    </Flex>
                    <Flex style={{ color: "#ffffff", fontSize: "15px" }}>
                      {bookData ? (bookData.longFundingRate / LEVERAGE_RATIO * 100).toFixed(0): 0}
                    </Flex>
                  </Flex>
                  <Input
                    onChange={({ target: { value } }) =>
                      this.setLongFundingRate(value)
                    }
                    width="165px"
                    placeholder={"MinMax +/-" + (25000/LEVERAGE_RATIO).toFixed(0)}
                    marginLeft="15px"
                    value={this.state.longFundingRate}
                  />
                </Flex>

                <Flex
                  mt="5px"
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Flex
                    flexDirection="row"
                    justifyContent="space-between"
                    width="90%"
                  >
                    <Flex style={{ color: "#9C9C9C", fontSize: "13px" }}>
                      Short Weekly Rate
                    </Flex>
                    <Flex style={{ color: "#ffffff", fontSize: "15px" }}>
                      {bookData ? (bookData.shortFundingRate / LEVERAGE_RATIO * 100).toFixed(0): 0}
                    </Flex>
                  </Flex>
                  <Input
                    onChange={({ target: { value } }) =>
                      this.setShortFundingRate(value)
                    }
                    width="165px"
                    placeholder={"MinMax +/-" + (25000/LEVERAGE_RATIO).toFixed(0)}
                    marginLeft="15px"
                    value={this.state.shortFundingRate}
                  />
                </Flex>

                <Flex
                  mt="5px"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Flex
                    flexDirection="row"
                    justifyContent="space-between"
                    width="90%"
                  >
                    <Flex style={{ color: "#9C9C9C", fontSize: "13px" }}>
                      LP Close Fee
                    </Flex>
                    <Flex style={{ color: "#ffffff", fontSize: "15px" }}>
                      {bookData ? (bookData.lpCloseFee / LEVERAGE_RATIO * 100).toFixed(0): 0}
                    </Flex>
                  </Flex>
                  <Input
                    onChange={({ target: { value } }) =>
                      this.handleCloseFeeChange(value)
                    }
                    width="165px"
                    placeholder={"New Max " + (25000/LEVERAGE_RATIO).toFixed(0)}
                    marginLeft="15px"
                    value={this.state.closeFee}
                  />
                </Flex>
                <Box mt="10px" mb="10px">
                  <Button
                    style={{ height: "30px", width: "180px", float: "right" }}
                    onClick={() => this.setFees()}
                  >
                    Update Fees
                  </Button>
                </Box>

                <Box>
                  <Text
                    size="16px"
                    justifyContent="space-between"
                    buttonWidth="95px"
                  >
                    Adjust Minimum RM
                  </Text>
                </Box>
                <Form
                  onChange={this.setMinRM}
                  value={this.state.setMinRM}
                  onSubmit={this.adjRM}
                  mb="20px"
                  justifyContent="space-between"
                  buttonWidth="95px"
                  inputWidth="280px"
                  placeholder="new RM"
                  buttonLabel="Change Min RM"
                />


              </Flex>
              <Flex
                mt="10px"
                pt="10px"
                alignItems="center"
                style={{
                  borderTop: `thin solid ${G}`
                }}
               >
                <Text size="16px" weight="400">
                  Max Take
                </Text>
              </Flex>
              <Flex mb="10px" pt="5px">
                <Box mr="60px">
                  <LabeledText
                    big
                    label="Long"
                    text={maxLongTake - 0.5 > 0 ? (maxLongTake - 0.5).toFixed(0)+ " Sz" : 0}
                    spacing="1px"
                  />
                </Box>
                <Box mr="65px">
                  <LabeledText
                    big
                    label="Short"
                    text={maxShortTake - 0.5 > 0 ? (maxShortTake - 0.5).toFixed(0) + " Sz": 0}
                    spacing="1px"
                  />
                </Box>
                <Box mr="15px">
                  <LabeledText
                    big
                    label="Min RM Required"
                    text={bookData.bookMinimum + " Sz"}
                    spacing="1px"
                  />
                </Box>
              </Flex>


              <Box
                pt="10px"
                style={{
                  borderTop: `thin solid ${G}`
                }}
              >
                <Box>
                  <Text size="16px">Add to Margin</Text>
                </Box>
                <Form
                  onChange={this.setNewMargin}
                  value={this.state.newMargin}
                  onSubmit={this.changeNewMargin}
                  mb="30px"
                  justifyContent="space-between"
                  buttonWidth="95px"
                  inputWidth="280px"
                  placeholder="amount in szabos"
                  buttonLabel="Add"
                />


              <IndicatorC
                buttonLabel="Withdraw"
                onClick={this.withdrawBalance}
              >
                <Text size="14px">AssetSwap Balance</Text>{" "}
                <Text size="14px">{balance / 1e12 + " Sz"}</Text>
              </IndicatorC>

                <IndicatorC
                  buttonLabel="Close"
                  onClick={() => this.closeBook(Math.abs(bookData.totalLpLong - bookData.totalLpShort)
                    * 0.025)}
                >
                  <Text size="14px">Close Book Fee</Text>{" "}
                  <Text size="14px">{(Math.abs(bookData.totalLpLong - bookData.totalLpShort)
                    * 250 / 1e16).toFixed(3) + " Sz"}</Text>
                </IndicatorC>
              </Box>

            </Box>
          }
        >
          <Box p="15px" mt="15px">
            <Flex style={{ float: "right" }}>
              <Box>
                <Flex>
                  <IndicatorD
                    size="15px"
                    mr="20px"
                    label="Underlying asset"
                    value={this.currentContract}
                  />
                  <IndicatorB
                    size="15px"
                    mr="20px"
                    label="Leverage Ratio"
                    value={LEVERAGE_RATIO / 100}
                  />
                </Flex>
              </Box>

            </Flex>
          </Box>

          <Box mt="45px" mx="30px">
            <Box>
              <Flex width="75%" justifyContent="flex-end">
                <Text weight="bold">New positions use next closing price as initial price, positions denominated in Szabo, 1e-6 ETH,
                Max RM is 2</Text>
              </Flex>
              <Flex>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  style={{ width: "100%" }}
                >

                  <Flex
                    p="5px"
                    ml="5px"
                    style={{
                      border: "1px solid rgb(112, 180, 63)",
                      borderRadius: "5px"
                      // height: "76px"
                    }}
                  >
                    <Flex display="flex" flexDirection="column">
                      <Button
                        style={{ height: "30px" }}
                        onClick={this.takeFromLP}
                      >
                        Take
                      </Button>
                      <Flex ml="3px" mt="8px">
                        <form>
                          <div className="radio">
                            <span style={{ whiteSpace: "nowrap" }}>
                              <label
                                style={{
                                  fontSize: "14px",
                                  marginRight: "10px"
                                }}
                              >
                                <input
                                  type="radio"
                                  value="option1"
                                  name="taker"
                                  onChange={this.radioShort}
                                />
                                Short
                              </label>
                            </span>
                            <span style={{ whiteSpace: "nowrap" }}>
                            <label style={{ fontSize: "14px" }}>
                              <input
                                type="radio"
                                value="option2"
                                name="taker"
                                onChange={this.radioLong}
                              />
                              Long
                            </label>
                            </span>
                          </div>
                        </form>
                      </Flex>
                    </Flex>
                    <Flex display="flex" flexDirection="column" ml="10px">
                      <Input
                        onChange={({ target: { value } }) =>
                          this.handlePositionRMChange(value)
                        }
                        width="150px"
                        placeholder={"RM in Szabo"}
                        marginBottom="4px"
                        value={this.state.positionRM}
                      />
                      <Box>
                        <Input
                          onChange={({ target: { value } }) =>
                            this.handleEtherChange(value)
                          }
                          width="150px"
                          placeholder={"Initial Margin"}
                          value={this.state.szabos}
                        />
                      </Box>
                    </Flex>
                  </Flex>

                </Flex>
                <Flex>
                  <Box>
                    <TableA
                      mt="20px"
                      mr="20px"
                      columns={["ETH", "SPX", "BTC"]}
                      rows={[
                        priceDays,
                        ethDisplayColumns,
                        spxDisplayColumns,
                        btcDisplayColumns
                      ]}
                    />
                  </Box>
                </Flex>
              </Flex>
            </Box>
            <Box mt="20px" style={{ borderTop: `thin solid ${D}` }}>
              <Flex>
                <Flex mt="10px" flexDirection="column" width="50%">
                  <Box mr="20px" mt="4px">
                    <Text size="15px">Input custom final prices</Text>
                  </Box>
                  <Flex mt="10px">
                    {this.asset_id !== 0 ? (
                      <Input
                        onChange={({ target: { value } }) =>
                          this.setCustomFinalPrice(value)
                        }
                        mr="10px"
                        label="ETH"
                        value={this.state.customFinalPrice}
                      />
                    ) : (
                      <Input
                        onChange={({ target: { value } }) =>
                          this.setCustomFinalPrices(value)
                        }
                        mr="10px"
                        label="ETH"
                        value={this.state.customFinalPrices}
                      />
                    )}
                    {this.asset_id !== 0 ? (
                      <Input
                        onChange={({ target: { value } }) =>
                          this.setCustomFinalPrice1(value)
                        }
                        mr="10px"
                        label={this.assetName[this.asset_id]}
                        value={this.state.customFinalPrice1}
                      />
                    ) : null}
                    <Button onClick={() => console.log("calculating")}>
                      Submit
                    </Button>
                  </Flex>
                  <Box mt="4px" ml="20px">
                    {this.state.speculativeFinalProfit ? (
                      <Text size="15px" color={C}>
                        Your speculative final profit would be{" "}
                        <Text weight="bold" color={C}>
                          {this.state.speculativeFinalProfit}
                        </Text>
                      </Text>
                    ) : null}
                  </Box>
                  <Flex pt="10px">
                    <Box mr="30px">
                      <LabeledText
                        label="Projected LP PNL"
                        text={
                          this.state.customFinalPrice1 &&
                          this.state.customFinalPrice
                            ? totalCustomPNL.toFixed(2) + " Sz"
                            : totalPNL.toFixed(2) + " Sz"
                        }
                        spacing="1px"
                      />
                    </Box>
                    <Box mr="30px">
                      <LabeledText
                        label="Margin Cure to Avoid Default"
                        text={
                          this.state.customFinalPrice1 &&
                          this.state.customFinalPrice
                            ? Math.max(
                                -(
                                  bookData.lpMargin / 1e12 +
                                  totalCustomPNL -
                                  bookData.lpRM / 1e12
                                ).toFixed(2),
                                0
                              )
                            : Math.max(
                                -(
                                  bookData.lpMargin / 1e12 +
                                  totalPNL -
                                  bookData.lpRM / 1e12
                                ).toFixed(2),
                                0
                              )
                        }
                        spacing="1px"
                      />
                    </Box>
                  </Flex>
                </Flex>
                <Flex width="90%" flexDirection="column">
                  <Flex mt="10px" pt="10px" justifyContent="space-between">
                    <Box>
                      <LabeledText
                        big
                        label="Last Book Settlement"
                        text={
                          bookData2
                            ? moment.unix(bookData2.lastBookSettleUTC).format("MMM-DD")
                            : "No book data"
                        }
                        spacing="1px"
                      />
                    </Box>
                    <Box>
                      <LabeledText
                        label="Last Oracle Settlement"
                        big
                        text={
                          bookData
                            ? moment.unix(settleTime).format("MMM-DD HH:mm")
                            : "No book"
                        }
                        spacing="1px"
                      />
                    </Box>
                    <Box>
                      <LabeledText
                        big
                        label="Days to Book End"
                        text={
                          bookData2
                            ? ((bookData2.bookMaturityUTC - moment().unix())/86400).toFixed(0)
                            : "No book data"
                        }
                        spacing="1px"
                      />
                    </Box>
                    <Box>
                      <LabeledText
                        big
                        label="Settlement Period"
                        text={
                          settleTime > bookData2.lastBookSettleUTC
                            ? "Yes"
                            : "No"
                        }
                        spacing="1px"
                      />
                    </Box>

                  </Flex>
                  <Flex width="90%" flexDirection="column">
                    <Flex
                      mt="10px"
                      pt="10px"
                      alignItems="center"
                      style={{
                        borderTop: `thin solid ${G}`
                      }}
                    >
                      <Text size="16px" weight="400">
                        Margin
                      </Text>
                    </Flex>

                    <Flex pt="5px" justifyContent="space-between">
                      <Box>
                        <LabeledText
                          big
                          label="Total"
                          text={
                            bookData
                              ? (bookData.lpMargin / 1e12).toFixed(3) + " Sz"
                              : 0
                          }
                          spacing="1px"
                        />
                      </Box>
                      <Box>
                        <LabeledText
                          big
                          label="Required"
                          text={
                            bookData
                              ? (bookData.lpRM / 1e12).toFixed(0) + " Sz"
                              : 0
                          }
                          spacing="1px"
                        />
                      </Box>
                      <Box>
                        <LabeledText
                          big
                          label="Long"
                          text={
                            bookData
                              ? (bookData.totalLpLong / 1e12).toFixed(0) + " Sz"
                              : 0
                          }
                          spacing="1px"
                        />
                      </Box>
                      <Box>
                        <LabeledText
                          big
                          label="Short"
                          text={
                            bookData
                              ? (bookData.totalLpShort / 1e12).toFixed(0) + " Sz"
                              : 0
                          }
                          spacing="1px"
                        />
                      </Box>
                    </Flex>

                  </Flex>

                </Flex>
              </Flex>
            </Box>
            <Box mt="30px">
              <Triangle
                margin="15px"
                scale={1.8}
                color="#70B43F"
                rotation="0deg"
              />{" "}
              <Text>LP Active Subcontracts</Text>
              <Box
                mt="20px"
                style={{
                  borderTop: `thin solid ${D}`
                }}
              >
                {Object.keys(subcontracts).map((id, index) => (
                  <DrizzleProviderSubcontractRow
                    key={index}
                    onOpenDetail={() => this.openSubcontract(id)}
                    id={id}
                    fields={subcontracts[id]}
                    subStatus={this.getSubcontractStatus(
                      subcontracts[id].subkStatus,
                      bookData.bookStatus
                    )}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Split>
      </div>
    );
  }
}



BookInfo.contextTypes = {
  drizzle: PropTypes.object
}

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    contracts: state.contracts,
    drizzleStatus: state.drizzleStatus,
    transactions: state.transactions,
    transactionStack: state.transactionStack
  }
}

export default drizzleConnect(BookInfo, mapStateToProps)
