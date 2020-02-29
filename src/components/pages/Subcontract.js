import React, { Component } from 'react'
import { drizzleConnect } from 'drizzle-react'
import PropTypes from 'prop-types'
import Split from '../layout/Split'
import { Box, Flex } from '@rebass/grid'
import Logo from '../basics/Logo'
import Text from '../basics/Text'
import { C, D, G, H, I, F } from '../basics/Colors'
import IndicatorB from '../basics/IndicatorB'
import IndicatorD from '../basics/IndicatorD'
import LabeledText from '../basics/LabeledText'
import { autoBind } from 'react-extras'
import Form from '../basics/Form.js'
import IndicatorC from '../basics/IndicatorC.js'
import Button from '../basics/Button.js'
import ButtonEthScan from '../basics/ButtonEthScan.js'
import WarningSign from '../basics/WarningSign'
import TableA from '../blocks/TableA.js'
import Input from '../basics/Input.js'
import TruncatedAddress from '../basics/TruncatedAddress.js'
import { checkServerIdentity } from 'tls'
import VBackgroundCom from '../basics/VBackgroundCom'
var moment = require('moment');

class SubcontractInfo extends Component {
  constructor(props, context) {
    super(props);
    autoBind(this);

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
      },
      {
        contract: context.drizzle.contracts.BTCETHSwap,
        id: 3
      }
    ];
    this.contractDict = {
      ETHUSD: "ETHSwap",
      SPXUSD: "SPXSwap",
      BTCUSD: "BTCSwap"
    };

    this.idDict = {
      ETHSwap: 0,
      SPXSwap: 1,
      BTCSwap: 2
    };

    this.currentContract = this.props.routeParams.contract;
    this.currentLP = this.props.routeParams.address;
    this.asset_id = this.idDict[this.contractDict[this.currentContract]];
    this.currentSubcontract = this.props.routeParams.id;
    console.log(this.currentContract);
    console.log(this.currentSubcontract);

    this.contracts = context.drizzle.contracts;
    this.drizzle = context.drizzle;

    this.state = {
      contractID: 1,
      ETHprecision: 3,
      lastEthPrice: 0,
      closeNow: null
    };

    this.isETHDenominated = 0;

    this.priceHistory = {
      0: []
    };
    this.priceHistory[this.asset_id] = [];

    this.assetName = {
      0: "ETH",
      1: "SPX",
      2: "BTC"
    };

  }

  openEtherscan(txhash) {
    const url = 'https://ropsten.etherscan.io/tx/' + txhash;
    window.open(url, '_blank');
  }

  PlayerCancel(margin) {
    console.log("Contract LP cancelation");
    if (this.state.closeNow === true) {
      const stackId = this.contracts[
        this.contractDict[this.currentContract]
      ].methods.cancel.cacheSend(
        this.currentLP,
        this.currentSubcontract,
        true,
        { from: this.props.accounts[0], value: (margin * 0.051).toFixed(0) }
      );
    }
  }

  PlayerSettlementCancel(margin, closeFee) {
    console.log("Contract LP cancelation");
    const stackId = this.contracts[
      this.contractDict[this.currentContract]
    ].methods.cancel.cacheSend(
      this.currentLP,
      this.currentSubcontract,
      false,
       { from: this.props.accounts[0],
      value: (margin * 0.051).toFixed(0)}
    );
  }

  LPCancel(margin) {
    console.log("Contract LP cancelation");
      const stackId = this.contracts[
        this.contractDict[this.currentContract]
      ].methods.cancel.cacheSend(
        this.currentLP,
        this.currentSubcontract,
        false,
        { from: this.props.accounts[0], value: (margin * 0.051).toFixed(0) }
      );
  }

  PlayerBurn(margin) {
    console.log("Contract LP burn");
    const stackId = this.contracts[
      this.contractDict[this.currentContract]
    ].methods.burnTaker.cacheSend(this.currentLP, this.currentSubcontract, {
      from: this.props.accounts[0],
      value: (margin * 0.5)
    });
  }

  LPBurn(e) {
    e.preventDefault();
    const stackId = this.contracts[
      this.contractDict[this.currentContract]
    ].methods.burnLP.cacheSend(this.currentLP, {
      from: this.props.accounts[0]
    });
  }

  redeem() {
    console.log("Redemption");
    const stackId = this.contracts[
      this.contractDict[this.currentContract]
    ].methods.redeem.cacheSend(this.currentLP, this.currentSubcontract, {
      from: this.props.accounts[0]
    });
  }

  setNewPlayerAddress(value) {
    this.setState(state => ({ ...state, newPlayerAddress: value }));
  }

  setNewExtraMargin(value) {
    this.setState(state => ({ ...state, newExtraMargin: value }));
  }

  setCloseNowTrue(e) {
    e.preventDefault();
    this.setState(state => ({ ...state, closeNow: true }));
  }

  setCloseNowFalse(e) {
    e.preventDefault();
    this.setState(state => ({ ...state, closeNow: false }));
  }

  setNewWithdrawMargin(value) {
    this.setState(state => ({ ...state, newWithdrawMargin: value }));
  }


  changeNewExtraMargin() {
    const { newExtraMargin } = this.state;
    console.log("Change: New extra margin", newExtraMargin);
    const stackId = this.contracts[
      this.contractDict[this.currentContract]
    ].methods.fundTaker.cacheSend(this.currentLP, this.currentSubcontract, {
      from: this.props.accounts[0],
      value: newExtraMargin * 1e12
    });
    console.log("stackId", stackId);
  }


  changeNewWithdrawMargin() {
    const { newWithdrawMargin } = this.state;
    console.log("Change: New withdraw margin", newWithdrawMargin);
    const stackId = this.contracts[
    this.contractDict[this.currentContract]
    ].methods.withdrawTaker.cacheSend(
      newWithdrawMargin,
      this.currentLP,
      this.currentSubcontract,
      { from: this.props.accounts[0] }
    );
  }

  componentDidMount() {
    this.findValues(this.state.contractID);
  }

  handleChange(event) {
    this.setState({ contractID: event.target.value });
    this.findValues(event.target.value);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert("Submitted!");
    event.preventDefault();
  }

  getSubcontractInfo1() {
    this.subKDataKey1 = this.contracts[
      this.contractDict[this.currentContract]
    ].methods.getSubkData1.cacheCall(this.currentLP, this.currentSubcontract);
  }

  getSubcontractInfo2() {
    this.subKDataKey2 = this.contracts[
      this.contractDict[this.currentContract]
    ].methods.getSubkData2.cacheCall(this.currentLP, this.currentSubcontract);
  }

  getWithdrawalBalance() {
    this.balanceKey = this.contracts[
      this.contractDict[this.currentContract]
    ].methods.assetSwapBalance.cacheCall(this.props.accounts[0]);
  }

  getLeverage() {
    this.leverageKey = this.contracts.Oracle.methods.levRatio.cacheCall(
      this.asset_id
    );
  }

  withdrawBalance() {
    const { withdrawalBalance } = this.state;
    this.contracts[
      this.contractDict[this.currentContract]
    ].methods.withdrawFromAssetSwap.cacheSend({ from: this.props.accounts[0] });
  }

  getOraclePastPrices() {
    this.ethPastPricesKey = this.contracts.Oracle.methods.getUsdPrices.cacheCall(
      0,
      { from: "0x000000000000000000000000000000000000dEaD" }
    );
    this.spxPastPricesKey = this.contracts.Oracle.methods.getUsdPrices.cacheCall(
      1,
      { from: "0x000000000000000000000000000000000000dEaD" }
    );
    this.btcPastPricesKey = this.contracts.Oracle.methods.getUsdPrices.cacheCall(
      2,
      { from: "0x000000000000000000000000000000000000dEaD" }
    );
    this.assetPastPricesKey = this.contracts.Oracle.methods.getUsdPrices.cacheCall(
      this.asset_id,
      { from: "0x000000000000000000000000000000000000dEaD" }
    );
  }

  getLastSettleTime() {
    this.settleTimeKey = this.contracts.Oracle.methods.lastSettleTime.cacheCall();
  }

  getBookData() {
    this.bookDataKey = this.contracts[
      this.contractDict[this.currentContract]
    ].methods.getBookData.cacheCall(this.currentLP);
  }

  getBookData2() {
    this.bookDataKey2 = this.contracts[
      this.contractDict[this.currentContract]
    ].methods.getSettleInfo.cacheCall(this.currentLP);
  }

  getCurrentDay() {
    this.currentDayKey = this.contracts.Oracle.methods.currentDay.cacheCall();
  }

  getOracleStartDay() {
    this.oracleStartDayKey = this.contracts.Oracle.methods.getStartDay.cacheCall();
  }

  // getSettleInfo() {
  //   this.settleInfoKey = this.contracts[this.contractDict[this.currentContract]].methods.getSettleInfo.cacheCall(this.currentLP)
  // }

  update(property) {
    return e =>
      this.setState({
        [property]: e.target.value
      });
  }

  inactiveLPFunc() {
    this.contracts[
      this.contractDict[this.currentContract]
    ].methods.inactiveLP.cacheSend(this.currentLP, {
      from: this.props.accounts[0]
    });
  }

  inactiveOracleFunc() {
    this.contracts[
      this.contractDict[this.currentContract]
    ].methods.inactiveOracle.cacheSend(this.contracts.Oracle.address);
  }

  findValues() {
    this.getSubcontractInfo1();
    this.getWithdrawalBalance();
    this.getSubcontractInfo2();
    this.getLeverage();
    this.getOraclePastPrices();
    this.getBookData();
    this.getBookData2();
    this.getLastSettleTime();
    this.getCurrentDay();
    this.getOracleStartDay();
  }

  setCustomFinalPrice(value) {
    this.setState(state => ({ ...state, customFinalPrice: value }));
  }

  setCustomFinalPrice1(value) {
    this.setState(state => ({ ...state, customFinalPrice1: value }));
  }

  setCustomFinalPrices(value) {
    this.setState(state => ({ ...state, customFinalPrice: value }));
    this.setState(state => ({ ...state, customFinalPrice1: value }));
  }

  calculatePNL(
    custom,
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
    if (!custom && oracleStartDay === subStartDay) {
      return 0;
    }

    var leveragedEth =
      (((requiredMargin / 1e12) * levRatio) / 1e2) * (ethPriceStart == 0 ? backupEthPrice : ethPriceStart);
    var assetRatio =
      (assetPriceFinal * 1e2) /
      (assetPriceStart == 0 ? backupAssetPrice : assetPriceStart);
    let lpPNL;

    if (takerSide) {
      lpPNL =
        (leveragedEth * (1.0 * (assetRatio - 1) - fundingRate / 1e4)) /
        ethPriceFinal /
        100;
    } else {
      lpPNL =
        (leveragedEth * (-1.0 * (assetRatio - 1) - fundingRate / 1e4)) /
        ethPriceFinal /
        100;
    }

    return lpPNL;
  }

  getLastPrice(prices) {
    let filteredPrices = prices.filter(price => price > 0);
    return filteredPrices[filteredPrices.length - 1];
  }

  initialPriceDay(day) {
    switch (day) {
      case "0":
        return "Friday";
      case "1":
        return "Monday";
      case "2":
        return "Tuesday";
      case "3":
        return "Wednesday";
      case "4":
        return "Thursday";
      case "5":
        return "Friday";
      default:
        return "No data";
    }
  }

  subkstatusSwitch(bookStatus, subcontractStatus) {
    if (bookStatus === "0") {
      switch (subcontractStatus) {
        case "0":
          return "New";
          break;
        case "1":
          return "Active";
          break;
        case "2":
          return "Cancelled";
          break;
        case "3":
          return "Cancelled";
          break;
        case "5":
          return "Burned";
        case "6":
          return "Redeemable";
          break;
        case "7":
          return "Redeemable";
          break;
        case "8":
          return "Inactive";
          break;
        default:
          return "No subcontract status";
      }
    } else {
      switch (bookStatus) {
        case "1":
          return "Cancelled";
        case "2":
          return "Burned";
        case "3":
          return "Redeemable";
        default:
          return "No Book Status";
      }
    }
  }

  render() {
/*
    let txHash = 0x0;
    if (this.stackId in this.state.transactionStack) {
         txHash = this.state.transactionStack[this.stackId].value;
         console.log("newtxHash", txHash);
     }
*/
    let bookData = {};
    if (
      this.bookDataKey in
      this.props.contracts[this.contractDict[this.currentContract]].getBookData
    ) {
      bookData = this.props.contracts[this.contractDict[this.currentContract]]
        .getBookData[this.bookDataKey].value;
    }

    let bookData2 = {};
    if (
      this.bookDataKey2 in
      this.props.contracts[this.contractDict[this.currentContract]]
        .getSettleInfo
    ) {
      bookData2 = this.props.contracts[this.contractDict[this.currentContract]]
        .getSettleInfo[this.bookDataKey2].value;
    }

    let subkdata1 = {};
    if (
      this.subKDataKey1 in
      this.props.contracts[this.contractDict[this.currentContract]].getSubkData1
    ) {
      subkdata1 = this.props.contracts[this.contractDict[this.currentContract]]
        .getSubkData1[this.subKDataKey1].value;
    }

    let subkdata2 = {};
    if (
      this.subKDataKey2 in
      this.props.contracts[this.contractDict[this.currentContract]].getSubkData2
    ) {
      subkdata2 = this.props.contracts[this.contractDict[this.currentContract]]
        .getSubkData2[this.subKDataKey2].value;
    }

    let spxPriceColumns = [];
    if (this.spxPastPricesKey in this.props.contracts.Oracle.getUsdPrices) {
      spxPriceColumns = this.props.contracts.Oracle.getUsdPrices[
        this.spxPastPricesKey
      ].value;
    }

    let ethPriceColumns = [];
    if (this.ethPastPricesKey in this.props.contracts.Oracle.getUsdPrices) {
      ethPriceColumns = this.props.contracts.Oracle.getUsdPrices[
        this.ethPastPricesKey
      ].value;
    }

    let btcPriceColumns = [];
    if (this.btcPastPricesKey in this.props.contracts.Oracle.getUsdPrices) {
      btcPriceColumns = this.props.contracts.Oracle.getUsdPrices[
        this.btcPastPricesKey
      ].value;
    }

    let assetPriceColumns = [];
    if (this.assetPastPricesKey in this.props.contracts.Oracle.getUsdPrices) {
      assetPriceColumns = this.props.contracts.Oracle.getUsdPrices[
        this.assetPastPricesKey
      ].value;
    }


    const priceDays = ["0-Fri","1-Mon", "2-Tue", "3-Wed", "4-Thu", "5-Fri"];


    let ethDisplayColumns = ethPriceColumns.slice(0, 5);
    ethDisplayColumns.push(ethPriceColumns[ethPriceColumns.length - 1]);

    let spxDisplayColumns = spxPriceColumns.slice(0, 5);
    spxDisplayColumns.push(spxPriceColumns[spxPriceColumns.length - 1]);

    let btcDisplayColumns = btcPriceColumns.slice(0, 5);
    btcDisplayColumns.push(btcPriceColumns[btcPriceColumns.length - 1]);

    let LEVERAGE_RATIO = 0;
    if (this.leverageKey in this.props.contracts.Oracle.levRatio) {
      LEVERAGE_RATIO = this.props.contracts.Oracle.levRatio[this.leverageKey]
        .value;
    }

    let lastSettleTime = 0;
    if (this.settleTimeKey in this.props.contracts.Oracle.lastSettleTime) {
      lastSettleTime = this.props.contracts.Oracle.lastSettleTime[
        this.settleTimeKey
      ].value;
    }



    let oracleStartDay = 0;
    if (this.oracleStartDayKey in this.props.contracts.Oracle.getStartDay) {
      oracleStartDay = this.props.contracts.Oracle.getStartDay[
        this.oracleStartDayKey
      ].value;
    }

    let mustCureTime = moment
      .unix(lastSettleTime)
      .add(1, "day")
      .format("MMM Do hh:mm");

    var finalEthPrice = this.getLastPrice(ethPriceColumns);
    var finalAssetPrice = this.getLastPrice(assetPriceColumns);


    var FINAL_PNL = this.calculatePNL(
      false,
      subkdata2.priceDay,
      oracleStartDay,
      subkdata2.takerSide,
      subkdata1.reqMargin,
      LEVERAGE_RATIO,
      ethPriceColumns[subkdata2.priceDay],
      finalEthPrice / 100,
      assetPriceColumns[subkdata2.priceDay],
      finalAssetPrice / 100,
      subkdata2.fundingRate,
      ethPriceColumns[0],
      assetPriceColumns[0]
    );
    var customFinalPNL = this.calculatePNL(
      true,
      subkdata2.priceDay,
      oracleStartDay,
      subkdata2.takerSide,
      subkdata1.reqMargin,
      LEVERAGE_RATIO,
      ethPriceColumns[subkdata2.priceDay],
      this.state.customFinalPrice,
      assetPriceColumns[subkdata2.priceDay],
      this.state.customFinalPrice1,
      subkdata2.fundingRate,
      ethPriceColumns[0],
      assetPriceColumns[0]
    );


    let oracleLastSettlePlusTwoDays = moment.unix(lastSettleTime).add(2, "day");
    let oracleLastSettlePlusTenDays = moment.unix(lastSettleTime).add(10, "day");

    console.log(this.props.transactions);
    console.log(this.props.transactionStack);

    return (
      <div>
        <VBackgroundCom />
        <Split
          side={
            <Box mt="30px" ml="25px" mr="35px">
              <Logo />
              <Box mt="15px">
                <Text size="20px" display="flex">
                  <a
                    className="faqs-link"
                    style={{
                      width: "fit-content",
                      color: "rgb(112, 180, 63)",
                      display: "flex",
                      marginTop: "10px",
                      textDecoration: "none",
                      cursor: "pointer",
                      marginBottom: "10px"
                    }}
                    href={
                      "/" +
                      this.currentContract +
                      "/lp/" +
                      this.currentLP +
                      "/provider"
                    }
                  >
                    Go to LP's Page
                  </a>
                </Text>
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
                <Box size="22px" weight="400">
                  Subcontract
                </Box>

                {moment() > oracleLastSettlePlusTwoDays &&
                lastSettleTime > bookData2.lastBookSettleUTC ? (
                  <Button
                    size="15px"
                    style={{ scrollMarginRight: "15px", marginTop: "5px" }}
                    onClick={this.inactiveLPFunc}
                  >
                    Inactive LP
                  </Button>
                ) : null}
                {moment() > oracleLastSettlePlusTenDays ? (
                  <Button
                    size="15px"
                    style={{ marginTop: "5px" }}
                    onClick={this.inactiveOracleFunc}
                  >
                    Inactive Oracle
                  </Button>
                ) : null}
              </Box>
              <Flex mb="10px" pt="10px">
              <LabeledText
                text={
                  subkdata1.taker === this.props.accounts[0]
                    ? "This is your LP book"
                    : ""
                }
                spacing="1px"
              />
                <LabeledText
                  label="LP Address"
                  text={this.currentLP}
                  spacing="1px"
                />
                <Box mt="20px" style={{ borderTop: `thin solid ${D}` }}></Box>
              </Flex>

              <Box
                pt="10px"
                style={{
                  borderTop: `thin solid ${G}`
                }}
              >
                <LabeledText
                  text={
                    subkdata1.taker === this.props.accounts[0]
                      ? "You are the Taker"
                      : "This is not you"
                  }
                  spacing="1px"
                />
                <LabeledText
                  label="Taker Address"
                  text={subkdata1.taker ? subkdata1.taker : "No data"}
                  spacing="1px"
                />
              </Box>

              <Box
                pt="15px"
                mt="10px"
                style={{
                  borderTop: `thin solid ${G}`
                }}
              >
                <Box mb="10px">
                  <Text size="16px">Taker Actions</Text>
                </Box>
{/* Add to margin */}
                {bookData.bookStatus * 1 < 2 &&
                subkdata2.subkStatus * 1 < 2  ? (
                <Form
                  mt="10px"
                  mb="10px"
                  value={this.state.newExtraMargin}
                  onChange={this.setNewExtraMargin}
                  onSubmit={this.changeNewExtraMargin}
                  justifyContent="space-between"
                  buttonWidth="105px"
                  label="Add margin"
                  inputWidth="270px"
                  placeholder="amount in ETH"
                  buttonLabel="Add"
                />
              ) : null }
{/* redeem */}
              {bookData.bookStatus * 1 === 3 ||
              subkdata2.subkStatus * 1 > 5 ? (
                  <Box>
                    <Button
                      width="120px"
                      bgColor={I}
                      onClick={() => this.redeem()}
                    >
                      <Flex justifyContent="center">
                        <Box>Redeem</Box>
                      </Flex>
                    </Button>
                  </Box> ) : null }
{/* withdraw */}

   {bookData.bookStatus * 1 < 2 &&
   lastSettleTime < bookData2.lastBookSettleUTC ? (
              <Flex>
     <Form
       onChange={this.setNewWithdrawMargin}
       value={this.state.newWithdrawMargin}
       onSubmit={this.changeNewWithdrawMargin}
       mb="20px"
       justifyContent="space-between"
       buttonWidth="95px"
       label="Withdraw margin to AssetSwap"
       inputWidth="280px"
       placeholder="amount in gwei (500 is 0.5 Sz)"
       buttonLabel="Move"
     />

</Flex>
   ) : null}
{/* cancel */}
   {bookData.bookStatus * 1 < 2  &&
   lastSettleTime < bookData2.lastBookSettleUTC ? (
              <Flex>
              <Box>
                <Button
                  width="120px"
                  bgColor={I}
                  onClick={() => this.PlayerCancel(subkdata1.reqMargin)}
                >
                  <Flex justifyContent="center">
                    <Box>Close Now</Box>
                  </Flex>
                </Button>
              </Box>
              <Box ml="20px">
                <Button
                  width="120px"
                  bgColor={I}
                  onClick={() =>
                    this.PlayerSettlementCancel(
                      subkdata1.reqMargin,
                      subkdata2.closeFee
                    )
                  }
                >
                  <Flex justifyContent="center">
                    <Box>Close</Box>
                  </Flex>
                </Button>
              </Box>
              </Flex> ) : null}
              </Box>


                  {bookData.bookStatus * 1 < 2 &&
                  subkdata2.subkStatus * 1 < 2 &&
                  lastSettleTime > bookData2.lastBookSettleUTC ? (
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
                    onClick={() => this.PlayerBurn(subkdata1.reqMargin)}
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
            </Box>
          ) : null}

              <Box
                mt="10px"
                mb="15px"
                pt="5px"
                 style={{
                   borderTop: `thin solid ${G}`
                 }}
              >
{/* LP cancel */}
                <Box mb="15px">
                  <Text size="16px">LP Actions</Text>
                </Box>
                {bookData.bookStatus !== "3" &&
                subkdata2.subkStatus * 1 < 2 &&
                lastSettleTime < bookData2.lastBookSettleUTC ? (
                <Flex mb="10px">
                  <Box mr="20px">
                    <Button
                      width="120px"
                      bgColor={I}
                      onClick={() => this.LPCancel(subkdata1.reqMargin)}
                    >
                      <Flex justifyContent="center">
                        <Box>Cancel</Box>
                      </Flex>
                    </Button>
                  </Box>
                </Flex>
              ) : null
             }
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

          <Box ml="30px">
            <Box style={{ color: "#9C9C9C", fontSize: "20px" }}>
              Subcontract ID
            </Box>
            <Box style={{ fontSize: "15px" }}>{this.currentSubcontract}</Box>
          </Box>

          <Box mt="20px" mx="30px">
            <Box>
{/* use for making comments*/}
              <Text weight="bold"></Text>
              <Flex>
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
              <Box mr="20px" mt="4px">
                <Text size="15px">Input custom final prices</Text>
              </Box>
              <Flex mt="20px">
                <Flex>
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
                      value={this.state.customFinalPrice}
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
              </Flex>
            </Box>
            <Flex pt="10px">
              <Box mr="30px">
                <LabeledText
                  label="Your projected PNL"
                  size="14px"
                  text={
                    this.state.customFinalPrice && this.state.customFinalPrice1
                      ? customFinalPNL.toFixed(3) + " Sz"
                      : FINAL_PNL.toFixed(3) + " Sz"
                  }
                  spacing="1px"
                />
              </Box>
              <Box mr="30px">
                <LabeledText
                  label="Margin Cure to Avoid Default"
                  text={
                    this.state.customFinalPrice && this.state.customFinalPrice1
                      ? Math.max(
                          -(
                            subkdata1.takerMargin / 1e12 +
                            customFinalPNL -
                            subkdata1.reqMargin / 1e12
                          ).toFixed(2),
                          0
                        )
                      : Math.max(
                          -(
                            subkdata1.takerMargin / 1e12 +
                            FINAL_PNL -
                            subkdata1.reqMargin / 1e12
                          ).toFixed(2),
                          0
                        )
                  }
                  spacing="1px"
                />
              </Box>
            </Flex>
            <Flex
              justifyContent="space-between"
              mt="20px"
              style={{ borderTop: `thin solid ${D}` }}
            >
              <Box width={1 / 4}>
                <LabeledText
                  label="Notional"
                  big
                  text={
                    bookData
                      ? "milli$ " +
                      Math.round(
                          (subkdata1.reqMargin / 1e12) *
                          (LEVERAGE_RATIO / 100) *
                          (finalEthPrice / 100)
                          )
                      : "none"
                  }
                  spacing="1px"
                />
              </Box>

              <Box width={1 / 4}>
                <LabeledText
                  label="Status"
                  big
                  text={this.subkstatusSwitch(
                    bookData.bookStatus,
                    subkdata2.subkStatus
                  )}
                  spacing="1px"
                />
              </Box>

              <Box width={1 / 4}>
                <LabeledText
                  label="Last Book Settlement"
                  big
                  text={
                    bookData
                      ? moment
                          .unix(bookData2.lastBookSettleUTC)
                          .format("MMM-DD")
                      : "No book"
                  }
                  spacing="1px"
                />
              </Box>

              <Box width={1 / 4}>
                <LabeledText
                  label="Last Oracle Settlement"
                  big
                  text={
                    bookData
                      ? moment.unix(lastSettleTime).format("MMM-DD HH:mm")
                      : "No book"
                  }
                  spacing="1px"
                />
              </Box>
            </Flex>
            <Flex
              justifyContent="space-between"
              mt="20px"
              style={{
                borderTop: `thin solid ${D}`
              }}
            >
              <Box width={1 / 4}>
                <LabeledText
                  label="Taker Margin"
                  big
                  text={
                    subkdata1
                      ? (subkdata1.takerMargin / 1e12).toFixed(3) + " Sz"
                      : "None"
                  }
                  spacing="1px"
                />
              </Box>
              <Box width={1 / 4}>
                <LabeledText
                  label="Required Margin"
                  big
                  text={
                    subkdata1
                      ? (subkdata1.reqMargin / 1e12).toFixed(0) + " Sz"
                      : "None"
                  }
                  spacing="1px"
                />
              </Box>
              <Box width={1 / 4}>
                <LabeledText
                  label="Close Fee"
                  big
                  text={
                    (
                      (subkdata1.reqMargin * subkdata2.closeFee) / 1e16 +
                      (subkdata1.reqMargin * 250) / 1e16
                    ).toFixed(3) + " Sz"
                  }
                  spacing="1px"
                />
              </Box>{" "}
              <Box width={1 / 4}>
                <LabeledText
                  label="Funding Rate"
                  big
                  text={
                    subkdata2
                      ? (subkdata2.fundingRate / 100).toFixed(2) + "%"
                      : "none"
                  }
                  spacing="1px"
                />
              </Box>
            </Flex>
            <Flex
              justifyContent="baseline"
              mt="20px"
              pb="20px"
              style={{
                borderTop: `thin solid ${D}`,
                borderBottom: `thin solid ${D}`
              }}
            >
              {subkdata2.subkStatus === "0" || subkdata2.subkStatus === "4" ? (
                <Box width={1 / 4}>
                  <LabeledText
                    label="Initial Price Day"
                    big
                    text={subkdata1 ? subkdata2.priceDay : "None"}
                    spacing="1px"
                  />
                </Box>
              ) : null}
              <Box width={1 / 4}>
                <LabeledText
                  label="Taker Side"
                  big
                  text={
                    subkdata2 ? (subkdata2.takerSide ? "Long" : "Short") : "n/a"
                  }
                  spacing="1px"
                />
              </Box>
              <Box width={1 / 4}>
                <LabeledText
                  label="Settlement Period"
                  big
                  text={
                    bookData
                      ? lastSettleTime > bookData2.lastBookSettleUTC
                        ? "Yes"
                        : "No"
                      : "none"
                  }
                  spacing="1px"
                />
              </Box>
            </Flex>
          </Box>
        </Split>
      </div>
    );
  }
}



SubcontractInfo.contextTypes = {
  drizzle: PropTypes.object
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    contracts: state.contracts,
    drizzleStatus: state.drizzleStatus,
    transactions: state.transactions,
    transactionStack: state.transactionStack
  }
}

export default drizzleConnect(SubcontractInfo, mapStateToProps)
