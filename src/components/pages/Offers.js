import React, { Component } from 'react'
import { drizzleConnect } from 'drizzle-react'
import PropTypes from 'prop-types'
import { Box, Flex } from '@rebass/grid'
import Logo from '../basics/Logo'
import Text from '../basics/Text'
import {C} from '../basics/Colors'
import IndicatorB from '../basics/IndicatorB'
import IndicatorC from '../basics/IndicatorC'
import IndicatorD from '../basics/IndicatorD'
import IndicatorE from '../basics/IndicatorE'
import TruncatedAddress from '../basics/TruncatedAddress.js'
import {autoBind} from 'react-extras'
import Triangle from '../basics/Triangle.js'
import Button from '../basics/Button'
import ButtonEthScan from '../basics/ButtonEthScan.js'
import OffersTable from '../blocks/OffersTable.js';
import Form from '../basics/Form.js'
import VBackgroundCom from '../basics/VBackgroundCom'
import Input from '../basics/Input.js';


class Offers extends Component {
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
    this.asset_id = this.idDict[this.contractDict[this.currentContract]];

    this.lpKeys = {};

    this.contracts = context.drizzle.contracts;
    this.drizzle = context.drizzle;

    this.state = {
      contractID: 1,
      ethers: "",
      positionRM: "",
      closeFee: "",
      takeState: null,
      longFundingRate: "",
      shortFundingRate: "",
      sendAmount: ""
    };
  }

  openEtherscan(txhash) {
    const url = "https://etherscan.io/tx/" + txhash;
    window.open(url, "_blank");
  }

  openEtherscanContract() {
    let url;
    if (this.currentContract === "SPXUSD") {
      url = "https://etherscan.io/address/0x18aBbBEb52122CE4e72D4C498e373fd124057b88#code"
    } else if (this.currentContract === "ETHUSD") {
      url = "https://etherscan.io/address/0xD1ebfffC3Ae13864FE86B735630e20b54Cc4B919#code";
    } else {
      url = "https://etherscan.io/address/0xeF841968872544Ae0a959Df96856be204DE717F6#code";
    }

    window.open(url, "_blank");
  }

  getAllLPs() {
    const web3 = this.context.drizzle.web3;
    const swap = this.drizzle.contracts[
      this.contractDict[this.currentContract]
    ];
    const contractweb3 = new web3.eth.Contract(swap.abi, swap.address);
    var LPMakes = {};
    contractweb3
      .getPastEvents("LPNewBook", {
        fromBlock: 9000000,
        toBlock: "latest"
      })
      .then(
        function(events) {
          events.forEach(function(element) {
            LPMakes[element.returnValues.eLP] = {
              bookData: this.contracts[
                this.contractDict[this.currentContract]
              ].methods.getBookData.cacheCall(element.returnValues.eLP)
            };
          }, this);
          this.lpKeys = LPMakes;
        }.bind(this)
      );
  }

  openLP(lpAddress) {
    const url = "/" + this.currentContract + "/lp/" + lpAddress + "/provider";
    window.open(url, "_blank");
  }

  getWithdrawalBalance() {
    this.balanceKey = this.contracts[
      this.contractDict[this.currentContract]
    ].methods.assetSwapBalance.cacheCall(this.props.accounts[0]);
  }

  openBook() {
    const url =
      "/" +
      this.currentContract +
      "/lp/" +
      this.props.accounts[0] +
      "/provider";
    window.open(url, "_blank");
  }

  setNewBalance(value) {
    this.setState(state => ({ ...state, newBalance: value }));
  }

  componentDidMount() {
    this.findValues(this.state.contractID);
  }

  getBookData() {
    this.bookDataKey = this.contracts[
      this.contractDict[this.currentContract]
    ].methods.getBookData.cacheCall(this.props.accounts[0]);
  }

  getBookData2() {
    this.bookDataKey2 = this.contracts[
      this.contractDict[this.currentContract]
    ].methods.getSettleInfo.cacheCall(this.props.accounts[0]);
  }

  setMinRM(value) {
    this.setState(state => ({ ...state, minRM: value }));
  }

  handleCloseFeeChange(value) {
    this.setState(state => ({ ...state, closeFee: value }));
  }

  setLongFundingRate(value) {
    this.setState(state => ({ ...state, longFundingRate: value }));
  }

  setShortFundingRate(value) {
    this.setState(state => ({ ...state, shortFundingRate: value }));
  }

  setSendAmount(value) {
    this.setState(state => ({ ...state, sendAmount: value }));
  }

  createBook() {
    const minRM = this.state.minRM;
    console.log(this.state);
    const stackId = this.contracts[
      this.contractDict[this.currentContract]
    ].methods.createBook.cacheSend(
      minRM,
      this.state.closeFee,
      this.state.longFundingRate,
      this.state.shortFundingRate,
      {
        from: this.props.accounts[0],
        value: this.state.sendAmount * 1e12
      }
    );
  }

  getLeverage() {
    this.leverageKey = this.contracts.Oracle.methods.levRatio.cacheCall(
      this.asset_id
    );
  }

  withdrawBalance() {
    const stackId = this.contracts[
      this.contractDict[this.currentContract]
    ].methods.withdrawFromAssetSwap.cacheSend({ from: this.props.accounts[0] });
  }

  handleChange(event) {
    this.setState(state => ({ ...state, contractID: event.target.value }));
    this.findValues(event.target.value);
  }

  handleInputChange(event) {
    this.setState(state => ({
      ...state,
      [event.target.name]: event.target.value
    }));
  }

  handleEtherChange(event) {
    this.setState(state => ({ ...state, ethers: event.target.value }));
  }

  handlePositionRMChange(event) {
    this.setState(state => ({ ...state, positionRM: event.target.value }));
  }

  findValues(id) {
    this.getBookData();
    this.getBookData2();
    this.getAllLPs();
    this.getLeverage();
    this.getWithdrawalBalance();
  }

  render() {
    let LEVERAGE_RATIO = 0;
    if (this.leverageKey in this.props.contracts.Oracle.levRatio) {
      LEVERAGE_RATIO = this.props.contracts.Oracle.levRatio[this.leverageKey]
        .value;
    }

    let balance = -1;
    if (
      this.balanceKey in
      this.props.contracts[this.contractDict[this.currentContract]]
        .assetSwapBalance
    ) {
      balance = this.props.contracts[this.contractDict[this.currentContract]]
        .assetSwapBalance[this.balanceKey].value;
    }

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
        };

    if (
      this.bookDataKey in
      this.props.contracts[this.contractDict[this.currentContract]].getBookData
    ) {
      bookData = this.props.contracts[this.contractDict[this.currentContract]]
        .getBookData[this.bookDataKey].value;
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
      bookMaturity: "0"
    };


    let books = {};
    Object.keys(this.lpKeys).forEach(function(id) {
      if (
        this.lpKeys[id]["bookData"] in
        this.props.contracts[this.contractDict[this.currentContract]]
          .getBookData
      ) {
        books[id] = this.props.contracts[
          this.contractDict[this.currentContract]
        ].getBookData[this.lpKeys[id]["bookData"]].value;
      }
    }, this);

    console.log(this.props.contracts.Oracle);
    console.log(this.contracts.Oracle.methods);

    console.log(this.currentContract, "contract");
    console.log(this.props.accounts[0]);
    console.log(books, "books");

    return (
      <div>
        <VBackgroundCom />
        <Box p="15px" style={{ background: "rgba(27, 29, 30, 0.6)" }}>
          <Logo />
          <Flex style={{ float: "right" }}>
            <Box>
              <Flex>
                <IndicatorD
                  size="15px"
                  mr="20px"
                  label="Underlying asset"
                  value={this.currentContract}
                />
                <IndicatorD
                  className="etherscanLink"
                  size="15px"
                  mr="20px"
                  label="See Contract on"
                  onClick={() => this.openEtherscanContract()}
                  value="Etherscan"
                />
                <IndicatorB
                  size="15px"
                  mr="20px"
                  label="Leverage Ratio"
                  value={(LEVERAGE_RATIO / 100).toFixed(1)}
                />
              </Flex>
            </Box>
          </Flex>
        </Box>

        <Box p="20px">
          <Text size="22px">Create a New Book (Become an LP)</Text>

          <Flex mt="5px">
            <Input
              onChange={({ target: { value } }) => this.setMinRM(value)}
              width="182px"
              placeholder={"Set RM"}
              value={this.state.minRM}
            />
            <Input
              onChange={({ target: { value } }) =>
                this.handleCloseFeeChange(value)
              }
              width="200px"
              placeholder={
                "Close Fee Max " + (25000 / LEVERAGE_RATIO).toFixed(0)
              }
              marginLeft="5px"
              value={this.state.closeFee}
            />
            <Input
              onChange={({ target: { value } }) =>
                this.setLongFundingRate(value)
              }
              width="210px"
              placeholder={
                "Long Rate Max/Min +/-" + (25000 / LEVERAGE_RATIO).toFixed(0)
              }
              value={this.state.longFundingRate}
              marginLeft="5px"
            />
            <Input
              onChange={({ target: { value } }) =>
                this.setShortFundingRate(value)
              }
              width="210px"
              placeholder={
                "Short Rate Max/Min +/-" + (25000 / LEVERAGE_RATIO).toFixed(0)
              }
              marginLeft="5px"
              value={this.state.shortFundingRate}
            />
            <Input
              onChange={({ target: { value } }) => this.setSendAmount(value)}
              width="182px"
              placeholder={"Initial Margin"}
              marginLeft="5px"
              value={this.state.sendAmount}
            />
            <Button onClick={this.createBook} style={{ marginLeft: "5px" }}>
              Create Book
            </Button>
          </Flex>

          <Flex>
            <Box mt="10px">
              <Button onClick={this.openBook}>View your Book</Button>
            </Box>
            <Box mt="10px" ml="10px">
              <Button
                onClick={this.props.onClickPositions}
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "0 10px 0 0"
                }}
              >
                <a
                  href={
                    "/" +
                    this.currentContract +
                    "/taker/" +
                    this.props.accounts[0]
                  }
                  style={{ textDecoration: "none" }}
                >
                  <Text color="white" size="15px">
                    View My Taker Positions
                  </Text>
                </a>
              </Button>
            </Box>
          </Flex>
        </Box>

        <Box ml="20px" mb="20px">
          <TruncatedAddress
            label="Your ETH Account:"
            addr={this.props.accounts[0]}
            start="6"
            end="3"
            spacing="1px"
          />
          {this.props.transactionStack.length > 0 &&
          this.props.transactionStack[0].length === 66 ? (
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
        </Box>
        <Flex alignItems="center" ml="20px">
          <Text>
            {" "}
            Your {this.currentContract} AssetSwap Balance:{" "}
            {(balance / 1e12).toFixed(3) + " Szabo"}
          </Text>
          <Box ml="20px">
            <IndicatorE
              buttonLabel="Withdraw"
              onClick={this.withdrawBalance}
            ></IndicatorE>
          </Box>
        </Flex>

        <Box p="20px">
          <Box>
            <Box display="flex" alignItems="center" ml="4px">
              <Triangle
                margin="9px"
                scale={1.8}
                color="#D55757"
                rotation="180deg"
              />
              <Text weight="bold">Current Offers</Text>
            </Box>
            <OffersTable
              rows={Object.keys(books).map(lp => ({
                fields: [
                  lp,
                  books[lp]["totalLpLong"] / 1e12,
                  books[lp]["totalLpShort"] / 1e12,
                  books[lp]["lpRM"] / 1e12,
                  books[lp]["lpMargin"] / 1e12,
                  books[lp]["bookMinimum"],
                  (
                    (books[lp]["longFundingRate"] / LEVERAGE_RATIO) *
                    100
                  ).toFixed(0),
                  (
                    (books[lp]["shortFundingRate"] / LEVERAGE_RATIO) *
                    100
                  ).toFixed(0),
                  (
                    (books[lp]["lpCloseFee"] / LEVERAGE_RATIO) * 100 +
                    (250 / LEVERAGE_RATIO) * 100
                  ).toFixed(0)
                ],
                onOpenLP: () => this.openLP(lp),
                handleEtherChange: () => this.handleEtherChange(event),
                handlePositionRMChange: () => this.handlePositionRMChange(event)
              }))}
            />
          </Box>
        </Box>
      </div>
    );
  }
}

Offers.contextTypes = {
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

export default drizzleConnect(Offers, mapStateToProps)
