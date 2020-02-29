import React, { Component } from 'react'
import { drizzleConnect } from 'drizzle-react'
import PropTypes from 'prop-types'
import { Box, Flex} from '@rebass/grid'
import IndicatorB from '../basics/IndicatorB'
import IndicatorD from '../basics/IndicatorD'
import Logo from '../basics/Logo'
import Text from '../basics/Text'
import { D} from '../basics/Colors'
import {autoBind} from 'react-extras'
import Triangle from '../basics/Triangle'
import DrizzleSubcontractRow from '../blocks/DrizzleSubcontractRow.js'
import TruncatedAddress from '../basics/TruncatedAddress.js'
import VBackgroundCom from '../basics/VBackgroundCom'

class TakerInfo extends Component {
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
    this.currentTaker = this.props.routeParams.address;
    this.asset_id = this.idDict[this.contractDict[this.currentContract]];
    console.log(this.currentContract);
    console.log(this.currentTaker);

    this.contracts = context.drizzle.contracts;
    this.drizzle = context.drizzle;

    this.takeKeys = {};

    this.state = {
      contractID: 1
    };
  }

  getSubcontractBookData(lpAdd) {
    this.contracts[
      this.contractDict[this.currentContract]
    ].methods.getBookData.cacheCall(lpAdd);
  }

  getLeverage(id) {
    //console.log(this.contracts[this.contractDict[id]])
    this.leverageKey = this.contracts.Oracle.methods.levRatio.cacheCall(
      this.asset_id
    );
  }

  openSubcontract(id, lpAdd) {
    console.log("Opened subcontract", id);

    const lp = this.takeKeys[id]["lp"];
    console.log(this.takeKeys);
    console.log(lp);
    const url =
      "/" + this.currentContract + "/lp/" + lpAdd + "/subcontract/" + id;
    window.open(url, "_blank");
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

  getAllTakes() {
    const web3 = this.context.drizzle.web3;
    const swap = this.drizzle.contracts[
      this.contractDict[this.currentContract]
    ];
    const contractweb3 = new web3.eth.Contract(swap.abi, swap.address);
    var takes = {};
    contractweb3
      .getPastEvents("SubkTracker", {
        filter: { eTaker: this.currentTaker },
        fromBlock: 600000,
        toBlock: "latest"
      })
      .then(
        function(events) {
          events.forEach(function(element) {
            takes[element.returnValues.eSubkID] = {
              data1: this.contracts[
                this.contractDict[this.currentContract]
              ].methods.getSubkData1.cacheCall(
                element.returnValues.eLP,
                element.returnValues.eSubkID
              ),
              data2: this.contracts[
                this.contractDict[this.currentContract]
              ].methods.getSubkData2.cacheCall(
                element.returnValues.eLP,
                element.returnValues.eSubkID
              ),
              lp: element.returnValues.eLP
            };
          }, this);
          this.takeKeys = takes;
          console.log(this.takeKeys, "takeKeys");
        }.bind(this)
      );
  }

  findValues(id) {
    this.getAllTakes();
    this.getLeverage(id);
  }

  getSubcontractStatus(subk) {
    if (subk === "0") {
      return "New";
    } else if (subk === "1") {
      return "Active";
    } else if (subk === "2" || (subk === "3" || subk === "4")) {
      return "Cancelled";
    } else if (subk === "5") {
      return "Burned";
    } else if (subk === "6" || subk === "7") {
      return "Redeemable";
    } else {
      return "No data";
    }
  }

  render() {
    let LEVERAGE_RATIO = 0;
    if (this.leverageKey in this.props.contracts.Oracle.levRatio) {
      LEVERAGE_RATIO = this.props.contracts.Oracle.levRatio[this.leverageKey]
        .value;
    }

    let longRate = 0;

    let shortRate = 0;

    let subcontracts = {};
    Object.keys(this.takeKeys).forEach(function(id) {
      if (
        this.takeKeys[id]["data1"] in
          this.props.contracts[this.contractDict[this.currentContract]]
            .getSubkData1 &&
        this.takeKeys[id]["data2"] in
          this.props.contracts[this.contractDict[this.currentContract]]
            .getSubkData2
      ) {
        let data1 = this.props.contracts[
          this.contractDict[this.currentContract]
        ].getSubkData1[this.takeKeys[id]["data1"]].value;
        let data2 = this.props.contracts[
          this.contractDict[this.currentContract]
        ].getSubkData2[this.takeKeys[id]["data2"]].value;
        //subcontracts[id] = {data: data, status: status}
        subcontracts[id] = { ...data1, ...data2 };
      }
    }, this);

    console.log(subcontracts, "subs");
    console.log(this.currentContract, this.currentTaker);
    console.log(this.contracts[this.contractDict[this.currentContract]]);
    console.log(
      this.props.contracts[this.contractDict[this.currentContract]],
      "props"
    );
    Object.keys(subcontracts).map((id, index) => console.log(id));

    let lpAddressKeys = this.props.contracts[
      this.contractDict[this.currentContract]
    ].getSubkData2;

    return (
      <div>
        <VBackgroundCom />
        <Box>
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
                  <IndicatorB
                    size="15px"
                    mr="20px"
                    label="Leverage Ratio"
                    value={
                      subcontracts ? (LEVERAGE_RATIO / 100).toFixed(1) : "0"
                    }
                  />
                </Flex>
              </Box>

            </Flex>
          </Box>

          <Flex mt="30px" ml="30px" alignItems="flex-end">
            <Box mr="30px">
              <Text size="22px" weight="400" mr="30px">
                Taker
              </Text>
            </Box>
            <TruncatedAddress
              label="Address"
              addr={subcontracts ? this.currentTaker : "None"}
              start="8"
              end="6"
              transform="uppercase"
              spacing="1px"
            />
          </Flex>

          <Box mt="36px" mx="30px">
            <Box>
              <Triangle
                margin="15px"
                scale={1.8}
                color="#70B43F"
                rotation="0deg"
              />{" "}
              <Text>LP Active Subcontracts</Text>
              {subcontracts ? (
                <Box
                  mt="20px"
                  style={{
                    borderTop: `thin solid ${D}`
                  }}
                >
                  {Object.keys(subcontracts).map((id, index) => (
                    <DrizzleSubcontractRow
                      key={index}
                      onOpenDetail={() =>
                        this.openSubcontract(
                          id,
                          lpAddressKeys[Object.keys(lpAddressKeys)[index]]
                            .args[0]
                        )
                      }
                      id={id}
                      fields={subcontracts[id]}
                      lpAddress={
                        lpAddressKeys[Object.keys(lpAddressKeys)[index]].args[0]
                      }
                      subStatus={this.getSubcontractStatus(
                        subcontracts[id].subkStatus,
                      )}
                    />
                  ))}
                </Box>
              ) : null}
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
}

function DisplayTakenContracts(props) {
  const listitems = props.contracts.map( function(contract) {
    return(
      <tr key={contract['subcontractId'].toString()}>
        <td><a href="/subcontract">{contract['subcontractId']}</a></td>
        <td>{contract['lpAddress']}</td>
        <td>{contract['reqMargin']/1e12}</td>
        <td>{contract['takerMargin']/1e12}</td>
        <td>{contract['takerSide'] === true ? 'Long' : 'Short'}</td>
        <td>{contract['takerSide'] === 0 ? 'No' : 'Yes'}</td>
        <td>{contract['takerSide'] === 0 ? 'No' : 'Yes'}</td>
      </tr>
    )
  })
  return (
    <table>
      <tbody>
        <tr>
          <th>Subcontract ID</th>
          <th>LP Address</th>
          <th>Required Margin</th>
          <th>Taker Margin</th>
          <th>Side</th>
          <th>Is Cancelled?</th>
          <th>Is Burned?</th>
        </tr>
        {listitems}
      </tbody>
    </table>

  )
}


TakerInfo.contextTypes = {
  drizzle: PropTypes.object
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    contracts: state.contracts,
    drizzleStatus: state.drizzleStatus
  }
}

export default drizzleConnect(TakerInfo, mapStateToProps)
