import React, { Component } from "react";
import Logo from "../basics/Logo";
import { Flex, Box } from "@rebass/grid";
import Text from "../basics/Text";
import Split from "../layout/Split";
import VBackground from "../basics/VBackground";
import { autoBind } from "react-extras";
import Take from "../../images/Take.gif";
import Redeem from "../../images/Redeem.gif";
import SettleParts from "../../images/SettleParts1.gif";
import CancelTaker from "../../images/CancelTaker.gif";
import TakerWD from "../../images/TakerWD.gif";
import FundTaker from "../../images/FundTaker.gif";
import SettleBatch from "../../images/SettleBatch.gif";
import ASwd from "../../images/ASwd.gif";
import LPwd from "../../images/LPwd.gif";
import UpdateFees from "../../images/UpdateFees.gif";
import LPfund from "../../images/LPfund.gif";
import CreateBook from "../../images/CreateBook.gif";

class Documentation extends Component {
  constructor(props, context) {
    super(props);
    autoBind(this);
    this.state = {};
  }

  openWhitepaper() {
    console.log("Opened whitepaper");
    // TODO
  }

  openTechnicalAppendix() {
    console.log("Opened technical appendix");
    // TODO
  }

  openCheatSpreadsheet() {
    console.log("Opened cheat spreadsheet");
    // TODO
  }

  openSimulationSheet() {
    console.log("Opened simulation sheet");
    // TODO
  }

  render() {
    return (
      <div>
        <VBackground />
        <Split
          side={
            <div>
              <Box mt="30px" ml="25px" mr="35px" style={{ position: "fixed" }}>
                <Logo />

                <div
                  backgroundcolor="#202020"
                  style={{
                    tabInterval: ".5in",
                    backgroundColor: "#202020",
                    width: "420px",
                    height: "82%",
                    marginTop: "20px",
                    padding: "10px 0px 10px 10px",
                    position: "fixed",
                    overflowY: "scroll"
                  }}
                  className="tech-head"
                >
                  <div className="WordSection1">
                    <p className="docu-header">
                      <span
                        style={{ color: "#E0FFFF" }}
                        className="docu-sidebar"
                      >
                        Highlights of Technical Appendix
                      </span>
                    </p>

                    <a href="../whitepaper/TA.pdf" download>
                      <p className="docu-header">
                        <span
                          style={{
                            color: "#CCDAFF",
                            margin: "15px 0px 15px 0px",
                            textDecoration: "none"
                          }}
                          className="docu-sidebar"
                        >
                          Download Technical Appendix PDF
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section8_0"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header">
                        <span
                          style={{ color: "#CCDAFF" }}
                          className="docu-sidebar"
                        >
                          7. Contract Functions
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section8_1"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#CCDAFF" }}
                          className="docu-sidebar"
                        >
                          7.1 Take Position
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section8_2"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#CCDAFF" }}
                          className="docu-sidebar"
                        >
                          7.2 Taker Curing Margin
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section8_3"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#CCDAFF" }}
                          className="docu-sidebar"
                        >
                          7.3 Taker Cancel
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section8_5"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#CCDAFF" }}
                          className="docu-sidebar"
                        >
                          7.5 Become an LP
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section8_6"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#CCDAFF" }}
                          className="docu-sidebar"
                        >
                          7.6 LP Curing Margin
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section8_7"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#CCDAFF" }}
                          className="docu-sidebar"
                        >
                          7.7 Withdrawing Margin
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section8_9"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#CCDAFF" }}
                          className="docu-sidebar"
                        >
                          7.9 LP Settlement Execution
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section8_10"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#CCDAFF" }}
                          className="docu-sidebar"
                        >
                          7.10 LP Fee Adjustments
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section8_11"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#CCDAFF" }}
                          className="docu-sidebar"
                        >
                          7.11 LP Adjust Minimum RM Size
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section8_16"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#CCDAFF" }}
                          className="docu-sidebar"
                        >
                          7.16 User Rights and Restrictions
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section9"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header">
                        <span
                          style={{ color: "#CCDAFF" }}
                          className="docu-sidebar"
                        >
                          9. Security Considerations
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section9_2"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#CCDAFF" }}
                          className="docu-sidebar"
                        >
                          9.2 Contract Constraints
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section10"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header">
                        <span
                          style={{ color: "#CCDAFF" }}
                          className="docu-sidebar"
                        >
                          9. Definitions
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
                {/* </Flex> */}
              </Box>
            </div>
          }
        >
          <Flex>
            <Box
              width="100%"
              style={{
                textAlign: "center",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "end"
              }}
            >
              <Box>

                <Flex
                  justifyContent="space-around"
                  alignItems="center"
                  height="100%"
                  className="nav-header-wrap"
                  backgroundColor="rgba(0, 0, 0, 0.6)"
                  pt="15px"
                  pb="15px"
                >
                <Text size="15px">
                  <a
                    className="nav-header"
                    style={{ textDecoration: "none", cursor: "pointer" }}
                    href="/"
                  >
                    HOME
                  </a>
                </Text>
                  <Text size="15px">
                    <a
                      className="nav-header"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                      href="/whitepaper"
                    >
                      Whitepaper
                    </a>
                  </Text>
                  <Text size="15px">
                    <a
                      className="nav-header"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                      href="/documentation"
                    >
                      Technical
                      <br />
                      Appendix
                    </a>
                  </Text>

                  <Text size="15px">
                    <a
                      className="nav-header"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                      href="http://winkdex.com"
                    >
                      Winkdex
                    </a>
                  </Text>
                  <Text size="15px">
                    <a
                      className="nav-header"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                      href="http://github.com/lorenzobotticelli/OracleSwap"
                    >
                      Github Project
                    </a>
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>

          <Flex>
            <Box
              width="100%"
              style={{
                textAlign: "center",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "end"
              }}
            >
              <Box>
                <Flex
                  justifyContent="space-around"
                  alignItems="center"
                  height="100%"
                  className="nav-header-wrap"
                  backgroundColor="rgba(0, 0, 0, 0.6)"
                  pt="15px"
                  pb="15px"
                >
                  <Flex
                    flexWrap="wrap"
                    onClick={this.openSimulationSheet}
                    style={{ cursor: "pointer" }}
                  >
                    <Box>
                      <Text
                        className="nav-header"
                        size="15px"
                        style={{ cursor: "pointer" }}
                      >
                        Excel Sheet
                      </Text>
                    </Box>
                  </Flex>
                  <Text size="15px">
                    <a
                      className="nav-header"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                      href="/faqs"
                    >
                      Etherscan Contracts
                    </a>
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
          <div>
            <div className="WordSection1">

              &nbsp;

              &nbsp;
              <h1>
                <a name="_Toc26445324"></a>
                <a name="_Toc15988698"></a>
                <span>
                  <span
                    style={{
                      msoFareastFontFamily: "Times New Roman",
                      color: "#CCDAFF"
                    }}
                    id="section8"
                  >
                    8 Contract Functions
                  </span>
                </span>
                <span
                  style={{ msoFareastFontFamily: "Times New Roman" }}
                ></span>
              </h1>
              &nbsp;
              <h2>
                <a name="_Toc26445325">
                  <span
                    style={{
                      msoFareastFontFamily: "Times New Roman",
                      color: "#B3C7FF"
                    }}
                    id="section8_1"
                  >
                    7.1 Take position
                  </span>
                </a>
                <span></span>
                <span
                  style={{ msoFareastFontFamily: "Times New Roman" }}
                ></span>
              </h2>

             &nbsp;
              &nbsp;
              <p className="MsoNormal">
                <b>
                  <span style={{ color: "#9FB8FF" }}>1 transaction</span>
                </b>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".25in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>1.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <div style={{ marginLeft: "100px" }}>
                   <img
                     src={Take}
                     alt="loading..."
                     style={{ maxWidth: "70%", height: "auto" }}
                   />
                 </div>
                <span style={{ color: "#9FB8FF" }}>
                  Function: take(LP address, RM, side)
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".75in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>a.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>Find LP</span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".75in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>b.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Set RM, which sets the notional (2.5&#215; for ETH and BTC,
                  10&#215; for SPX)
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".75in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>c.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Set side, true for taker long/LP short, false for taker
                  short/LP long
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".75in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>d.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Send 1.5&#8729;RM with function to initialize margin
                </span>
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  The investor's position is identified by the LP and the
                  subcontract ID generated; LP address, SubkID
                </span>
              </p>
              <h2>
                <span
                  style={{
                    msoFareastFontFamily: "Times New Roman",
                    color: "#CCDAFF"
                  }}
                  id="section8_2"
                >
                  7.2 Taker Curing Margin
                </span>
                <span
                  style={{ msoFareastFontFamily: "Times New Roman" }}
                ></span>
              </h2>
              &nbsp;
              <div style={{ marginLeft: "100px" }}>
                 <img
                   src={FundTaker}
                   alt="loading..."
                   style={{ maxWidth: "70%", height: "auto" }}
                 />
               </div>
             &nbsp;
              <p className="MsoNormal">
                <b>
                  <span style={{ color: "#9FB8FF" }}>1 transaction</span>
                </b>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".25in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>1.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>send eth to margin</span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".75in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>a.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  function for taker: fundTaker(LP address, subkcontract ID)
                </span>
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  The settlement price update on Friday at 4 sends the ending
                  price for that week's settlement. Users can see their
                  impending ETH debit or credit to see if they need to cure
                  their margin and avoid a default. For the investors, this is
                  easy: add the impending PNL to one's current margin, and if it
                  is below the required margin, they will default at settlemnet
                  if they do not cancel or cure. Cancelling can be done anytime
                  prior to the Friday settlement price update. After that, the
                  only option is to cure their margin position by sending enough
                  ETH so that their total margin, after the PNL debit, is
                  greater than their RM. They have until at least 24 hours after
                  the oracle settlement price update to send ETH to their
                  margin.
                </span>{" "}
              </p>
              <h2>
                <a name="_Toc26445329">
                  <span
                    style={{
                      msoFareastFontFamily: "Times New Roman",
                      color: "#B3C7FF"
                    }}
                    id="section8_3"
                  >
                    7.3 Taker cancel
                  </span>
                </a>

                <span
                  style={{ msoFareastFontFamily: "Times New Roman" }}
                ></span>
              </h2>
              <div style={{ marginLeft: "100px" }}>
   <img
     src={CancelTaker}
     alt="loading..."
     style={{ maxWidth: "70%", height: "auto" }}
   />
 </div>
&nbsp;
              <p className="MsoNormal">
                <b>
                  <span style={{ color: "#9FB8FF" }}>&nbsp;</span>
                </b>
              </p>
              <p className="MsoNormal">
                <b>
                  <span style={{ color: "#9FB8FF" }}>
                    3 transactions (including withdrawals)
                  </span>
                </b>
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  Cancels, like takes, are irreversable. They require a fee
                  which is the sum of the oracle and LP closing fee. For the LP,
                  a cancel is twice the oracle closing fee.{" "}
                </span>{" "}
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  There are two types of cancels. A regular cancel uses the
                  weekly settlement price as its last price point, and any
                  regular cancel can be implemented at any time prior to the
                  oracle settlement price update. This involves setting the bool
                  in the cancel function to false.
                </span>
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  If one is very nervous and wishes to get the very next oracle
                  price as their final price, they can toggle the cancel bool to
                  true. Canceling intraweek generates complications for the LP,
                  in that the LP could then be exposed to more market risk,
                  making their current net RM inadequate. To prevent this
                  situation, we only allow the investor to close intraweek if
                  the LP has sufficient excess margin available. For example, if
                  the LP has a flat book and zero margin, investors cannot
                  cancel intraweek prior to the next settlement day; investors
                  in such a scenario could only put in a cancel that would go
                  into effect at settlement using settlement day prices. As an
                  LP should have significant excess ETH&#8212;LP economics make
                  the most sense for existing ETH whales&#8212;most LPs should
                  have excess margin. The investor pays the maximum LP closing
                  fee to compensate for the impact of the intra-week close on
                  the LPs margin. This gives LP an incentive to maintain the
                  excess margin that allows these intraweek cancels.
                </span>
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  The inta-week cancel is still settled at the weekly
                  settlement, so taker must wait until then to retrieve their
                  funds. This intra-week settlement option is only available to
                  the taker, not the LP.{" "}
                </span>
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  After a cancel, the money in an investor's margin cannot be
                  used for anything else, such as transferring it directly to
                  another subcontract, and so should be withdrawn as soon as
                  possible. A cancel, burn, or default terminates a subcontract
                  at the settlement. The investor's margin can only be withdrawn
                  via the 'redeem' function, which moves all the investor's
                  margin to the AssetSwap contract and pops the subcontract from
                  the list of the LP's subcontracts. After that, the investor
                  should withdraw their ETH from the AssetSwap contract. ETH in
                  a user's AssetSwap balance cannot be used directly to fund
                  margins on other positions. If the investor defaulted on an
                  active LP book, they are debited Max(takerMargin,
                  0.5&#8729;RM) at redemption, which is sent to the oracle.
                </span>
              </p>
              <p className="MsoNormal">Taker Cancellation steps</p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".25in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>1.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Cancel before Friday oracle update (or Thursday if Friday is a
                  holiday)
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".75in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>a.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Cancel(LP address, subkID bytes, now bool)
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".75in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>b.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Wait for LP book settlement
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".25in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>2.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>Redeem</span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".75in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>a.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Redeem(LP address, subcontract ID)
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".25in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>3.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>WithdrawFromAssetSwap</span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".75in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>a.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  withdrawFromAssetSwap()
                </span>
              </p>

              &nbsp;
              <h2>
                <a name="_Toc26445326">
                  <span
                    style={{
                      msoFareastFontFamily: "Times New Roman",
                      color: "#B3C7FF"
                    }}
                    id="section8_5"
                  >
                    7.5 Become an LP
                  </span>
                </a>

                <span
                  style={{ msoFareastFontFamily: "Times New Roman" }}
                ></span>
              </h2>
              &nbsp;
              <div style={{ marginLeft: "100px" }}>
                 <img
                   src={CreateBook}
                   alt="loading..."
                   style={{ maxWidth: "70%", height: "auto" }}
                 />
               </div>
             &nbsp;
              <p className="MsoNormal">
                <b>
                  <span style={{ color: "#9FB8FF" }}>1 transaction</span>
                </b>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".25in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>1.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  createBook(RM, close fee, long Funding rate, short funding
                  rate)
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".75in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>a.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Set minimum RM, closing fee, long funding rate, short funding
                  rate
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.25in", textIndent: "-1.25in" }}
              >
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>i.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Data are in basis points as a percent of notional
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.25in", textIndent: "-1.25in" }}
              >
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>ii.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Max close fee for the LP is 100 for SPX, 25 for ETH/BTC
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.25in", textIndent: "-1.25in" }}
              >
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>iii.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Min/Max funding rates are &#177; 100 for SPX, &#177; 25 for
                  ETH/BTC
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".75in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>b.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Send 5x minimum RM to initialize margin
                </span>
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  The LP's book is identified by the LP's eth address. A payment
                  of 0.1 ETH is required at the time of book creation. While
                  this fee goes to the oracle, the purpose is to prevent someone
                  from trying to clog the system creating many accounts they do
                  not intend to use.{" "}
                </span>{" "}
              </p>
              <h2>
                <a name="_Toc26445327">
                  <span
                    style={{
                      msoFareastFontFamily: "Times New Roman",
                      color: "#B3C7FF"
                    }}
                    id="section8_6"
                  >
                    7.6 LP Curing Margin
                  </span>
                </a>

                <span
                  style={{ msoFareastFontFamily: "Times New Roman" }}
                ></span>
              </h2>
              &nbsp;
              <div style={{ marginLeft: "100px" }}>
                <img
                  src={LPfund}
                  alt="loading..."
                  style={{ maxWidth: "70%", height: "auto" }}
                />
              </div>
            &nbsp;

              <p className="MsoNormal">
                <b>
                  <span style={{ color: "#9FB8FF" }}>1 transaction</span>
                </b>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".25in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>2.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>send eth to margin</span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".75in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>a.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  function for LP: fundLP(LP address)
                </span>
              </p>
              <p
                className="MsoNormal"
                align="center"
                style={{ textAlign: "center" }}
              >
                <span style={{ color: "#9FB8FF" }}>
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                </span>
                <span>
                  <img
                    border="0"
                    width="383"
                    height="229"
                    id="_x0008_i1040"
                    src="HowTo.gif"
                    alt=""
                  ></img>
                </span>
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  The settlement price update on Friday at 4 sends the ending
                  price for that week's settlement. Users can see their
                  impending ETH debit or credit to see if they need to cure
                  their margin and avoid a default. For LPs estimating their
                  cure can be a little complicated. Not only do they have an
                  impending PNL, but cancellations at settlement may increase
                  their RM so that even if they have a positive PNL, they still
                  need to cure their margin. Also, if an investor defaults that
                  subcontract is removed from their book, and so this too may
                  cause their RM to increase. New positions are prevented after
                  the Friday oracle price update, so the LPs should have a good
                  idea of which subcontracts are cancelled, and which are
                  potentially going into default. Defaults are costly and
                  avoidable, so hopefully users will be smart enough to make
                  them rare. Initially, an LP should be prepared for such a
                  scenario, and over time develop a better sense of how
                  frequently this occurs.
                </span>
              </p>
              <h2>
                <a name="_Toc26445328">
                  <span
                    style={{
                      msoFareastFontFamily: "Times New Roman",
                      color: "#B3C7FF"
                    }}
                    id="section8_7"
                  >
                    7.7 Withdrawing margin
                  </span>
                </a>

              &nbsp;
                <span
                  style={{ msoFareastFontFamily: "Times New Roman" }}
                ></span>
              </h2>
              &nbsp;

              <p className="MsoNormal">
                <b>
                  <span style={{ color: "#9FB8FF" }}>2 transactions</span>
                </b>
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  If cancelled, defaulted, or burned, a taker' subcontract is
                  terminated at the subsequent settlement and should redeem
                  their margin after the LP settles. If LP or Oracle is marked
                  inactive, all takers can redeem their subcontracts and receive
                  their entire margins immediately.
                </span>
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  Withdraw functions move ETH from user margins in the book
                  contract to the AssetSwap contract. This cannot be done for
                  takers with inactive subcontracts, which instead must use the
                  'redeem' function that deletes the subcontract from the LP's
                  struct, debits any default fee if applicable, and then sends
                  the entire margin to the investor. This also cannot be done
                  during the settlement period between the weekly oracle
                  settlement price update and the LP's book settlement.
                </span>
              </p>

              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".25in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>1.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>Withdraw from margin</span>
              </p>
              <div style={{ marginLeft: "100px" }}>
                <img
                  src={TakerWD}
                  alt="loading..."
                  style={{ maxWidth: "70%", height: "auto" }}
                />
              </div>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".75in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>a.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>LP: withdrawLP(amount)</span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".75in", textIndent: "-.25in" }}
              >
                <a name="_Hlk26438983">
                  <span style={{ color: "#9FB8FF" }}>b.</span>
                </a>

                <span
                  style={{
                    fontsize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span>
                  <span style={{ color: "#9FB8FF" }}>
                    Taker withdrawTaker(amount, address, subcontract ID)
                  </span>
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".25in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>2.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Withdraw from AssetSwap
                </span>
              </p>
              <div style={{ marginLeft: "100px" }}>
                <img
                  src={ASwd}
                  alt="loading..."
                  style={{ maxWidth: "70%", height: "auto" }}
                />
              </div>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: ".75in", textIndent: "-.25in" }}
              >
                <a name="_Hlk26439062">
                  <span style={{ color: "#9FB8FF" }}>a.</span>
                </a>
                <span>
                  <span
                    style={{
                      fontsize: "7.0pt",
                      lineHeight: "106%",
                      color: "#9FB8FF"
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  </span>
                  <span style={{ color: "#9FB8FF" }}>
                    Both: withdrawFromAssetSwap()
                  </span>
                </span>
              </p>

              <h2>
                <a name="_Toc26445331">
                  <span
                    style={{
                      msoFareastFontFamily: "Times New Roman",
                      color: "#B3C7FF"
                    }}
                    id="section8_9"
                  >
                    7.9 LP Settlement{" "}
                  </span>
                </a>

                <span
                  style={{ msoFareastFontFamily: "Times New Roman" }}
                ></span>
              </h2>

            &nbsp;
              <p className="MsoNormal">
                <b>
                  <span style={{ color: "#9FB8FF" }}>&nbsp;</span>
                </b>
              </p>
              <p className="MsoNormal">
                <b>
                  <span style={{ color: "#9FB8FF" }}>
                    1, or 4+ transactions
                  </span>
                </b>
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  Anyone can run the settlement function, as it can only be run
                  once each week, and as it costs gas, the LP should be pleased
                  to let someone else pay to do this. This could also be useful
                  if an evil LP tries to avoid a PNL debit by not settling or
                  settling part of their book, in that someone else could settle
                  all or part of the book for her.{" "}
                </span>
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  Settlement function is designed for scale, allowing LPs to
                  have up to 2000 subcontracts. Processing these efficiently
                  requires breaking up the subcontract settlement into 3
                  different cases: new, expiring, and roll-overs. It also then
                  processes the final LP settlement&#8212;defining her new RM,
                  updating her margin for that week's cumulative PNL credit or
                  debit. For LPs with less than 200 subcontracts, the
                  settleBatch function should be used because it will work and
                  cost less gas. For LP's with more than 200 subcontracts, the
                  LP should run the 'settleParts' function until the settlement
                  is completed. This will then take at least 4 steps. It wil
                  ltake more than 4 if one of the categories: new, total,
                  expiring, contains more than 200 subcontracts.{" "}
                </span>{" "}
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  For small books (&lt; 200 subcontracts)
                </span>{" "}
              </p>
              <div style={{ marginLeft: "100px" }}>
                <img
                  src={SettleBatch}
                  alt="loading..."
                  style={{ maxWidth: "70%", height: "auto" }}
                />
              </div>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>Run settleBatch </span>
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>For large books</span>
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  As there are 4 functions in the settlement, this means
                  settleParts must be executed at least 4 times.
                </span>
              </p>
              <div style={{ marginLeft: "100px" }}>
                <img
                  src={SettleParts}
                  alt="loading..."
                  style={{ maxWidth: "70%", height: "auto" }}
                />
              </div>
            &nbsp;


              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>1.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Settle expiring contracts
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.0in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>a.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Requires oracle settlement price update &gt; last book
                  settlement
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.5in", textIndent: "-1.5in" }}
              >
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>i.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  This prevents settlement on, say, Tuesday
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.0in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>b.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Requires 24 hours after oracle settlement price update
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.0in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>c.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Requires settleNum &lt; 1e4
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.0in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>d.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Program loop capped at 200{" "}
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.0in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>e.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  repeat if there are more than 200 expiring contracts,
                  ceil(#expiring/200) times
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.0in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>f.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  when completed, settleNum = 1e4
                </span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>2.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>

              &nbsp;
                <span style={{ color: "#9FB8FF" }}>Settle rollovers</span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.0in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>a.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Requires settleNum &lt; 2e4
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.0in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>b.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Repeat if total # positions &gt; 200
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.0in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>c.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  When completed settleNum = 2e4
                </span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>3.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>

              &nbsp;
                <span style={{ color: "#9FB8FF" }}>Settle new contracts</span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.0in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>a.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Requires settleNum &lt; 3e4
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.0in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>b.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Repeat if total # new positions &gt; 200
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.0in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>c.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  When completed, settleNum = 3e4
                </span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>4.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>

              &nbsp;
                <span style={{ color: "#9FB8FF" }}>Settle LP</span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.0in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>a.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Requires settleNum = 3e4
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.0in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>b.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  When completed, settleNum = 0
                </span>
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  The LP book contract variable, settleNum, monitors its
                  progress through LP's subcontract sequence and makes sure that
                  settlements are completed. Given gas constraints, settlement
                  only loops through at most 200 subcontracts per execution.
                  This means that if an LP has 402 expiring subcontracts the
                  second step must be executed three times. It will show
                  settleNum = 200 after the first settle, 400 after the second,
                  and 10000 after the third. Given the settleNum==10000, the
                  rollover positions can be settled in a similar way. When the
                  rollovers are complete, settleNum == 2e4, which allows the new
                  positions to be settled, and then finally, the LPs margin to
                  be settled.{" "}
                </span>
              </p>
              <h2>
                <a name="_Toc26445332">
                  <span
                    style={{
                      msoFareastFontFamily: "Times New Roman",
                      color: "#B3C7FF"
                    }}
                    id="section8_10"
                  >
                    7.10 LP Fee Adjustments
                  </span>
                </a>
                <div style={{ marginLeft: "100px" }}>
                  <img
                    src={UpdateFees}
                    alt="loading..."
                    style={{ maxWidth: "70%", height: "auto" }}
                  />
                </div>
              &nbsp;
                <span
                  style={{ msoFareastFontFamily: "Times New Roman" }}
                ></span>
              </h2>
              &nbsp;

              <p className="MsoNormal">
                <b>
                  <span style={{ color: "#9FB8FF" }}>1 transaction</span>
                </b>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>1.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  updateFees(uint newClose, int frLong, int frShort)
                </span>
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  LP's can adjust their fees at any time. They input the data in
                  basis points so 10 is 0.1%. It is the fee in terms of the
                  notional, so when applied in the settlement or closingfee, it
                  is multiplied by the leverage ratio to get the factor that is
                  applied to the RM.{" "}
                </span>
              </p>
              <div align="center">
                <table
                  className="MsoNormal"
                  Table
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  style={{
                    borderCollapse: "collapse",
                    msoYftiTbllook: "1184",
                    msoPaddingAlt: "0in 0in 0in 0in"
                  }}
                >
                  <tr
                    style={{
                      msoYftiIrow: "0",
                      msoYftiFirstrow: "yes",
                      height: "15.0pt"
                    }}
                  >
                    <td
                      width="73"
                      nowrap
                      valign="top"
                      style={{
                        width: "55.0pt",
                        border: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "15.0pt"
                      }}
                    ></td>
                    <td
                      width="167"
                      nowrap
                      colspan="2"
                      valign="top"
                      style={{
                        width: "125.0pt",
                        border: "solid windowtext 1.0pt",
                        borderLeft: "none",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "15.0pt"
                      }}
                    >
                      <p
                        className="MsoNormal"
                        align="center"
                        style={{
                          marginBottom: "0in",
                          textAlign: "center",
                          lineHeight: "normal"
                        }}
                      >
                        <span style={{ color: "#9FB8FF" }}>Close Fee</span>
                      </p>
                    </td>
                    <td
                      width="163"
                      nowrap
                      colspan="2"
                      valign="top"
                      style={{
                        width: "122.0pt",
                        border: "solid windowtext 1.0pt",
                        borderLeft: "none",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "15.0pt"
                      }}
                    >
                      <p
                        className="MsoNormal"
                        align="center"
                        style={{
                          marginBottom: "0in",
                          textAlign: "center",
                          lineHeight: "normal"
                        }}
                      >
                        <span style={{ color: "#9FB8FF" }}>Funding Rate</span>
                      </p>
                    </td>
                  </tr>
                  <tr style={{ msoYftiIrow: "1", height: "15.0pt" }}>
                    <td
                      width="73"
                      nowrap
                      valign="top"
                      style={{
                        width: "55.0pt",
                        border: "solid windowtext 1.0pt",
                        borderTop: "none",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "15.0pt"
                      }}
                    ></td>
                    <td
                      width="100"
                      nowrap
                      valign="top"
                      style={{
                        width: "75.25pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "15.0pt"
                      }}
                    >
                      <p
                        className="MsoNormal"
                        align="right"
                        style={{
                          marginBottom: "0in",
                          textAlign: "right",
                          lineHeight: "normal"
                        }}
                      >
                        <span style={{ color: "#9FB8FF" }}>ETH or BTC</span>
                      </p>
                    </td>
                    <td
                      width="66"
                      nowrap
                      valign="top"
                      style={{
                        width: "49.75pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "15.0pt"
                      }}
                    >
                      <p
                        className="MsoNormal"
                        align="right"
                        style={{
                          marginBottom: "0in",
                          textAlign: "right",
                          lineHeight: "normal"
                        }}
                      >
                        <span style={{ color: "#9FB8FF" }}>SPX</span>
                      </p>
                    </td>
                    <td
                      width="102"
                      nowrap
                      valign="top"
                      style={{
                        width: "76.25pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4p",
                        height: "15.0pt"
                      }}
                    >
                      <p
                        className="MsoNormal"
                        align="right"
                        style={{
                          marginBottom: "0in",
                          textAlign: "right",
                          lineHeight: "normal"
                        }}
                      >
                        <span style={{ color: "#9FB8FF" }}>ETH or BTC</span>
                      </p>
                    </td>
                    <td
                      width="61"
                      nowrap
                      valign="top"
                      style={{
                        width: "45.75pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "15.0pt"
                      }}
                    >
                      <p
                        className="MsoNormal"
                        align="right"
                        style={{
                          marginBottom: "0in",
                          textAlign: "right",
                          lineHeight: "normal"
                        }}
                      >
                        <span style={{ color: "#9FB8FF" }}>SPX</span>
                      </p>
                    </td>
                  </tr>
                  <tr style={{ msoYftiIrow: "2", height: "15.0pt" }}>
                    <td
                      width="73"
                      nowrap
                      valign="top"
                      style={{
                        width: "55.0pt",
                        border: "solid windowtext 1.0pt",
                        borderTop: "none",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "15.0pt"
                      }}
                    >
                      <p
                        className="MsoNormal"
                        style={{ marginBottom: "0in", lineHeight: "normal" }}
                      >
                        <span style={{ color: "#9FB8FF" }}>Min</span>
                      </p>
                    </td>
                    <td
                      width="100"
                      nowrap
                      valign="top"
                      style={{
                        width: "75.25pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "15.0pt"
                      }}
                    >
                      <p
                        className="MsoNormal"
                        align="right"
                        style={{
                          marginBottom: "0in",
                          textAlign: "right",
                          lineHeight: "normal"
                        }}
                      >
                        <span style={{ color: "#9FB8FF" }}>0</span>
                      </p>
                    </td>
                    <td
                      width="66"
                      nowrap
                      valign="top"
                      style={{
                        width: "49.75pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "15.0pt"
                      }}
                    >
                      <p
                        className="MsoNormal"
                        align="right"
                        style={{
                          marginBottom: "0in",
                          textAlign: "right",
                          lineHeight: "normal"
                        }}
                      >
                        <span style={{ color: "#9FB8FF" }}>0</span>
                      </p>
                    </td>
                    <td
                      width="102"
                      nowrap
                      valign="top"
                      style={{
                        width: "76.25pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4p",
                        height: "15.0pt"
                      }}
                    >
                      <p
                        className="MsoNormal"
                        align="right"
                        style={{
                          marginBottom: "0in",
                          textAlign: "right",
                          lineHeight: "normal"
                        }}
                      >
                        <span style={{ color: "#9FB8FF" }}>-100</span>
                      </p>
                    </td>
                    <td
                      width="61"
                      nowrap
                      valign="top"
                      style={{
                        width: "45.75pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "15.0pt"
                      }}
                    >
                      <p
                        className="MsoNormal"
                        align="right"
                        style={{
                          marginBottom: "0in",
                          textAlign: "right",
                          lineHeight: "normal"
                        }}
                      >
                        <span style={{ color: "#9FB8FF" }}>-25</span>
                      </p>
                    </td>
                  </tr>
                  <tr
                    style={{
                      msoYftiIrow: "3",
                      msoYftiLastrow: "yes",
                      height: "15.0pt"
                    }}
                  >
                    <td
                      width="73"
                      nowrap
                      valign="top"
                      style={{
                        width: "55.0pt",
                        border: "solid windowtext 1.0pt",
                        borderTop: "none",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "15.0pt"
                      }}
                    >
                      <p
                        className="MsoNormal"
                        style={{ marginBottom: "0in", lineHeight: "normal" }}
                      >
                        <span style={{ color: "#9FB8FF" }}>Max</span>
                      </p>
                    </td>
                    <td
                      width="100"
                      nowrap
                      valign="top"
                      style={{
                        width: "75.25pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "15.0pt"
                      }}
                    >
                      <p
                        className="MsoNormal"
                        align="right"
                        style={{
                          marginBottom: "0in",
                          textAlign: "right",
                          lineHeight: "normal"
                        }}
                      >
                        <span style={{ color: "#9FB8FF" }}>100</span>
                      </p>
                    </td>
                    <td
                      width="66"
                      nowrap
                      valign="top"
                      style={{
                        width: "49.75pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "15.0pt"
                      }}
                    >
                      <p
                        className="MsoNormal"
                        align="right"
                        style={{
                          marginBottom: "0in",
                          textAlign: "right",
                          lineHeight: "normal"
                        }}
                      >
                        <span style={{ color: "#9FB8FF" }}>25</span>
                      </p>
                    </td>
                    <td
                      width="102"
                      nowrap
                      valign="top"
                      style={{
                        width: "76.25pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4p",
                        height: "15.0pt"
                      }}
                    >
                      <p
                        className="MsoNormal"
                        align="right"
                        style={{
                          marginBottom: "0in",
                          textAlign: "right",
                          lineHeight: "normal"
                        }}
                      >
                        <span style={{ color: "#9FB8FF" }}>100</span>
                      </p>
                    </td>
                    <td
                      width="61"
                      nowrap
                      valign="top"
                      style={{
                        width: "45.75pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "15.0pt"
                      }}
                    >
                      <p
                        className="MsoNormal"
                        align="right"
                        style={{
                          marginBottom: "0in",
                          textAlign: "right",
                          lineHeight: "normal"
                        }}
                      >
                        <span style={{ color: "#9FB8FF" }}>25</span>
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
              &nbsp;
              <h2>
                <a name="_Toc26445333">
                  <span
                    style={{
                      msoFareastFontFamily: "Times New Roman",
                      color: "#B3C7FF"
                    }}
                    id="section8_11"
                  >
                    7.11 LP Adjust minimum RM size
                  </span>
                </a>
                <span
                  style={{
                    msoFareastFontFamily: "Times New Roman",
                    color: "#B3C7FF"
                  }}
                >
                  {" "}
                </span>
                <span
                  style={{ msoFareastFontFamily: "Times New Roman" }}
                ></span>
              </h2>
              &nbsp;
              <p className="MsoNormal">
                <b>
                  <span style={{ color: "#9FB8FF" }}>1 transaction</span>
                </b>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>1.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  adjustMinRM(min amount)
                </span>
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  The minimum RM for an LP can be adjusted to avoid smaller
                  subcontracts, but also is a way to avoid new takes, in that if
                  set to the maximum (65535), there will be no more new takers
                  if one does not have enough excess margin to handle such a new
                  subcontract.
                </span>
              </p>


              <h2>
                <a name="_Toc26445337">
                  <span
                    style={{
                      msoFareastFontFamily: "Times New Roman",
                      color: "#B3C7FF"
                    }}
                    id="section8_16"
                  >
                    7.16 User Rights and Restrictions
                  </span>
                </a>
                <span></span>
                <span
                  style={{ msoFareastFontFamily: "Times New Roman" }}
                ></span>
              </h2>
              <p className="MsoListParagraph">
                <span style={{ color: "#9FB8FF" }}>&nbsp;</span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  No takes between 4-5 PM
                </span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Settlement Period restrictions
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.0in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>&#8259;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Between oracle.lastOracleSettle and subsequent LP's settle
                  time
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.0in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>&#8259;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Approximately Friday 4 PM through Saturday 4 PM
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.5in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>No new positions </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.5in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Users cannot withdraw margin
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.5in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>Users cannot cancel </span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Users can fund at any time
                </span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Users can withdraw from the AssetSwap contract at any time
                </span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Users can create new books, become an LP, at any time
                </span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  LPs can change fees at any time
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.0in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>&#8259;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Subcontracts use the fees posted at time of instantiation for
                  the life of the position
                </span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Users cannot withdraw below their RM while subcontract is
                  active
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.0in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>&#8259;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Subtracting the amount requested for withdrawal must result in
                  a margin greater than or equal to the required margin. After
                  default, cancellation, etc., takers can withdraw via the
                  redeem function, while the LP can withdraw via her Lpwithdraw
                  function.
                </span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Users can withdraw if LP misses settlement
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.0in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>&#8259;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  If the LP's book has not been settled within 48 hours of the
                  last oracle settlement price update, the first taker to
                  execute the inactive LP function receives the LP's default
                  payment, and then everyone can withdraw their entire margin
                  via the redeem function. The book cannot take new subcontracts
                  or settle again.{" "}
                </span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Users can withdraw if oracle inactive
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{ marginLeft: "1.0in", textIndent: "-.25in" }}
              >
                <span style={{ color: "#9FB8FF" }}>&#8259;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  If the book has not been settled for 10 days, this means
                  either the LP is inactive or the oracle is inactive. As users
                  have an incentive to invoke the inactiveLP function, the only
                  reason a book can continue for 9 days without a settlement
                  would be if the oracle has not posted new settlement prices.
                  Thus, we only need this one restriction to capture the root
                  problem. There is no direct benefit for flagging an inactive
                  oracle, but once done, all players can withdraw their margins.
                </span>
              </p>
              <p className="MsoListParagraph" style={{ marginLeft: "1.0in" }}>
                <span style={{ color: "#9FB8FF" }}>&nbsp;</span>
              </p>
              <h1>
                <a name="_Toc26445338">
                  <span
                    style={{
                      msoFareastFontFamily: "Times New Roman",
                      color: "#CCDAFF"
                    }}
                    id="section9"
                  >
                    8 Security Considerations
                  </span>
                </a>
                <span
                  style={{ msoFareastFontFamily: "Times New Roman" }}
                ></span>
              </h1>
              &nbsp;
              <p
                className="MsoNormal"
                style={{ marginBottom: ".0001pt", lineHeight: "normal" }}
              >
                <span style={{ color: "#9FB8FF" }}>
                  This suite of contracts emphasize simplicity to minimize
                  attack surfaces. While unknown unknowns exist, the following
                  known attacks are addressed.
                </span>
              </p>
              &nbsp;
              <h2>
                <a name="_Toc26445340">
                  <span
                    style={{
                      msoFareastFontFamily: "Times New Roman",
                      color: "#B3C7FF"
                    }}
                    id="section9_2"
                  >
                    7.2 Contract Constraints
                  </span>
                </a>

                <span
                  style={{ msoFareastFontFamily: "Times New Roman" }}
                ></span>
              </h2>
              &nbsp;
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  The only attack surface comes from an evil oracle posting
                  fraudulent prices to inflate the PNL of conspirator positions,
                  presumably the evil oracle's sock-puppet accounts. Everything
                  is vulnerable if the incentives do not align honesty with
                  profit-maximization at every level. OracleSwap's oracle can
                  cheat just as Infura or Bitcoin's miners can cheat, but they
                  are all constrained by their self-interest. Aligning
                  incentives lowers transaction costs, which makes it easier to
                  create contracts that people want to use.{" "}
                </span>
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  Creating a mechanism that makes honesty the Oracle/admin's
                  dominant strategy involves designing particular payoffs and
                  options, which implies various constraints.
                </span>
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  There are several restrictions within the contract code to
                  support the following objectives:
                </span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Make the Oracle settlement price update time predictable so
                  that an evil Oracle cannot sneak in a settlement price while
                  users are not paying attention
                </span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Give users time to react to an Oracle price update so they can
                  burn if the Oracle cheats
                </span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Make it so that users have an incentive to burn a cheating
                  Oracle's payoff rather than let him keep it
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <span style={{ color: "#9FB8FF" }}>
                  To those ends, the following restrictions are in place:
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: ".5in",
                  textIndent: "-.25in"
                }}
              >
                <span style={{ color: "#9FB8FF" }}>1.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Oracle Contract updates cannot occur for at least 20 hours
                  after the previous oracle price update
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: ".5in",
                  textIndent: "-.25in"
                }}
              >
                <span style={{ color: "#9FB8FF" }}>2.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Oracle contract settlement updates can only occur when the
                  prior oracle update flagged that the next oracle update will
                  be a settlement update (specifically, the boolean '
                  <i>nextUpdateSettle'</i> is marked true), or if the price
                  vector has all but its last slot filled. This way a player can
                  know that a settlement price, and thus a settlement, cannot
                  happen for at least 2 days if the next price is not earmarked
                  as a settlement price (it would take 20 hours after the next
                  price to post a settlement price, and then another 24 hours
                  until the LP could settle their book.{" "}
                </span>
                <a name="_Hlk27052345"></a>
              </p>
              <p
                className="MsoListParagraph"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: ".5in",
                  textIndent: "-.25in"
                }}
              >
                <span style={{ color: "#9FB8FF" }}>3.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  3.	The book contracts prevent users from settling their books
                  more than once during the settlement period. Specifically, the
                  settlement process cannot commence until the oracle settlement
                  update time is after the last book settlement time (the book
                    update time).{" "}
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: ".5in",
                  textIndent: "-.25in"
                }}
              >
                <span style={{ color: "#9FB8FF" }}>4.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Players have at least 24 hours from Oracle settlement update
                  to cure their margins or burn before the LP settles her book.
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: ".5in",
                  textIndent: "-.25in"
                }}
              >
                <span style={{ color: "#9FB8FF" }}>5.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  During the settlement period the next Oracle price update must
                  wait at least 48 hours so the LP can settle her book on the
                  oracle's settlement prices. This allow the LP time to settle.{" "}
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: ".5in",
                  textIndent: "-.25in"
                }}
              >
                <span style={{ color: "#9FB8FF" }}>6.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Withdrawals are not permitted during the settlement period.
                  This prevents players from withdrawing their excess margin to
                  zero, which would reduce their default cost if they were left
                  with margin less than RM at settlement (after the PNL
                  attribution). Players with an excess margin greater than 50%
                  of their RM will find burning just as costly as defaulting,
                  but with the bonus of depriving a cheating Oracle of getting
                  any of their ETH. This increase in the probability of burning
                  conditional upon cheating lowers the incentive for the Oracle
                  to cheat. We want to make burning more probable in the event
                  of a cheat, as this will make the oracle more honest.
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: ".5in",
                  textIndent: "-.25in"
                }}
              >
                <span style={{ color: "#9FB8FF" }}>7.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Cancels are not permitted during the settlement period. The
                  main reason is to prevent the look-back option where one sees
                  Friday prices, and on Saturday finds that the subsequent
                  weekly returns may be bad for them (e.g., they are long and
                  the price fell dramatically Friday evening). It also forces
                  players to either burn or default if the Oracle posts
                  fraudulent settlement prices.
                </span>
              </p>
              <p
                className="MsoListParagraph"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: ".5in",
                  textIndent: "-.25in"
                }}
              >
                <span style={{ color: "#9FB8FF" }}>7.</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Defaults are paid to the oracle to encourage burning. Even
                  if the player had less than 0.5RM, say 0.3RM left over, and thus
                  actually has to pay extra to punish the oracle (a default would
                    cost 0.3RM, a burn 0.5RM), buring deprives the  cheating oracle
                    of the fraudulent PNL and the 0.3RM default fee, maximizing burn
                    pain. Costly punishment encourages people who feel the agent
                    deserves punishment, to punish.
                </span>
              </p>
              &nbsp;
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  The LP book is accessed by looking at the address of the book
                  contract created by the message sender. Thus one must have the
                  private key to 0x123...456 to acces the book contract
                  associated with the LP address 0x123...456. These functions
                  include
                </span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>Updating fees</span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Adjusting minimum RM for subcontracts
                </span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>Burning their book</span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Withdrawing margin from the book contract
                </span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Setting the book up for cancellation in 4 weeks
                </span>
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  The taker to the subcontract must access the contract via
                  their taker address to execute the following functions
                </span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>Withdraw</span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>Burn</span>
              </p>
              <p className="MsoListParagraph" style={{ textIndent: "-.25in" }}>
                <span style={{ color: "#9FB8FF" }}>&#8226;</span>
                <span
                  style={{
                    fontSize: "7.0pt",
                    lineHeight: "106%",
                    color: "#9FB8FF"
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span style={{ color: "#9FB8FF" }}>
                  Inactivate the negligent LP
                </span>
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  As all withdrawals are sent to the AssetSwap contract into the
                  message sender's balance. It can then be withdrawn, where the
                  message sender's address points to a balance in the AssetSwap
                  contract, and any money in that address is sent out of the
                  AssetSwap contract to the user's off-contract account.{" "}
                </span>{" "}
              </p>
              <p className="MsoNormal">
                <span style={{ color: "#9FB8FF" }}>
                  One can fund their margin using any Ethereum account address.{" "}
                </span>
              </p>
              <h1>
                <a name="_Toc26445341">
                  <span
                    style={{
                      msoFareastFontFamily: "Times New Roman",
                      color: "#CCDAFF"
                    }}
                    id="section10"
                  >
                    10 Definitions
                  </span>
                </a>
                <span
                  style={{ msoFareastFontFamily: "Times New Roman" }}
                ></span>
              </h1>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>AssetSwap Balance:</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  {" "}
                  This balance is a way station for withdrawals from margin,
                  used to prevent re-entry attacks. The AssetSwap balance does
                  not count towards a player's margin. A player wishing to take
                  ETH out of their Margin first withdraws from their margin to
                  their AssetSwapBalance, and then from this Withdrawal Balance
                  to their off-contract public address. User money is
                  transferred to the AssetSwap only via withdrawals and
                  redemptions.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>AssetSwap Contract</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  : Each asset serviced by the Oracle Price Contract has a
                  separate AssetSwap Contract. For example, BTC will have a
                  separate contract than the SPX. They are all identical, just
                  with different reference assets and leverage ratios.{" "}
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Basis:</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  {" "}
                  The adjustment in a CFD or swap contract that accounts for
                  interest rates, dividends, storage costs, convenience yield,
                  and risk premium. This is implicit in the difference between a
                  futures/forward and cash price, but for a swap, there is only
                  a cash price, so the basis is applied as an effective funding
                  rate, applying symmetrically to longs and shorts (subtracted
                  from the long return, added to the short return). In this
                  contract, the basis is merely implicit within the differential
                  between the long and short funding rate, which also includes a
                  target rate that is identical for longs and shorts for a
                  specific asset. The basis equilibrates long and short swap
                  demand. Funding rates, which include the basis, are
                  constrained to be between&#8210;1 and +1% per week for crypto,
                  0.5% for SPX.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Book Contract</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  : When a player first posts as an LP, the asset contract
                  creates a unique contract for that investor's contract address
                  that will hold all that LP's counterparties. While all players
                  always interact with the base Asset Swap Contract, this then
                  transacts with the active LP Book Contracts. All margin ETH is
                  held within the Book contract, while ETH in AssetSwap Balances
                  are held in the Asset Swap contract.{" "}
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Burn</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  : A counterparty can burn their contract, which then prevents
                  their counterparty from receiving their debit at the
                  subsequent Weekly Settlement. The payable burn fee of
                  &frac12;&#8729;RM is not attributed to any player margin, so
                  it is inaccessible and effectively burned. A burn costs as
                  much as a default, though the payment mechanism is different,
                  in that the burn requires the player to send &frac12;&#8729;RM
                  but then does not debit the player's margin at redemption; a
                  default debits the players margin at redemption (or, for the
                  LP, at the final settlement).
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Business Day:</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  {" "}
                  A business day corresponds to a New York Stock Exchange
                  business day and are the only days that an initial subcontract
                  price is set, or that a Weekly Settlement can occur. The
                  Oracle Price Contract does not record non-business day prices,
                  or initialize subcontracts on these days, though players can
                  take on these non-business days and their subcontract will
                  initialize at the next business day. Business days thus
                  exclude weekends and about nine recognized holidays. These can
                  be found by Googling 'NYSE holidays' which are published three
                  years in advance. Half-day holidays will use the 4 PM crypto
                  price, though the SPX price will use the 1 PM official closing
                  price.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Cancel:</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  {" "}
                  A counterparty who wishes to terminate the contract initiates
                  a cancel. This must be done before the Friday Oracle Price
                  Update around 4:15 PM.{" "}
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>CFD:</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  {" "}
                  A Contract-For-Difference is like a futures contract in that
                  counterparties put up a fraction of the notional, their
                  margin, and use an asset price for generating a mark-to-market
                  PNL on that notional amount. Unlike futures, the reference is
                  not a separately traded price, but rather the cash price, so
                  to account for the basis we see in the futures market, long
                  and short positions are charged different funding rates in
                  CFDs. These are also called total return swaps, perpetual
                  swaps, or just swaps.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Closing Price</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  : Crypto prices are taken around 4 PM ET on NYSE Business Days
                  from various but unnamed Bitwise-approved exchanges. We use
                  the official close for the SPX, which refers to 4:00 PM but is
                  finalized around 4:10 PM.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Default:</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  {" "}
                  If a counterparty's margin is below their subcontract's
                  Required Margin at settlement, the subcontract defaults and is
                  terminated. This can only occur at the Weekly Settlement, as
                  investor withdrawals below a subcontract's RM are not allowed
                  and a PNL debit, can only be applied at the weekly settlement.
                  Players should be able to anticipate if they have enough ETH
                  to cure their margin prior to the Oracle contract settlement
                  day update at 4 PM, and so by canceling beforehand avoid this
                  charge.{" "}
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Excess Margin:</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  {" "}
                  Total or Actual Margin minus the Required Margin. This amount
                  can be withdrawn at any time outside of the settlement period.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Fed Funds rate:</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  {" "}
                  The overnight interest rate at which US banks lend to each
                  other. It serves as the basis for the cost of funds among
                  financial institutions and is the opportunity cost of a US
                  dollar.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>
                    Forward-Starting Price:
                  </span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  {" "}
                  a contract price set after an agreement to open or close a
                  position is made, such as the next closing price
                  (market-on-close) or the next day's value-weighted average
                  price.{" "}
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Funding Rate</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  : The weekly rate applied to the Taker. This rate is
                  subtracted from the return for the taker and applied to the
                  notional amount. These can be negative, in which case, would
                  add to the Taker return. LP's set their own funding rates, and
                  by adjusting the difference between the long and short funding
                  rates, equilibrate their long and short balances.{" "}
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Gwei</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  : 1e-3 Szabo, or 1e-9 ETH. Pronounced 'gway.' Anyone developing
                   their own version of OracleSwap should use ETH as the unit of
                    denomination, and Finney as the subunits. Here, Gwei are
                   the subunits of Szabo, as Finney are the subunits of Ether.
                </span>
              </p>
                <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Leverage Ratio:</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  {" "}
                  The OracleSwap's leverage ratio is the ratio of the notional
                  to the RM for that asset. It can be thought of as the inverse
                  of the required margin ratio. It is set such that the RM
                  should cover 99.5% of weekly events, and is currently 2.5 for
                  the ETHUSD and BTCUSD, and 10.0 for the SPX.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>LP</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  : A liquidity provider. They post an amount available for long
                  or short takers. They are paid via funding rates on their
                  gross exposure for the unpredictable risk generated by ending
                  up net short or long.{" "}
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Market-on-Close</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  : A Market-On-Close (MOC) order is a non-limit market order
                  that is executed at some official closing price, which is at 4
                  PM for US stock markets. MOC orders do not specify a price, as
                  these are forward-starting and thus unknown at the time of
                  order. OracleSwap uses quasi-MOC orders, in that the oracle
                  samples from a five-minute window around 4 PM.{" "}
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Margin:</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  {" "}
                  This is the total ETH attributed to a player. A Taker with
                  several different subcontracts will have a separate margin for
                  each, while an LP will have one margin for all her various
                  counterparties. This amount is in the LP book contract. It
                  takes only one function to fund into margin, but two functions
                  to withdraw (first from the margin, secondly from the
                  AssetSwap balance).
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Max Long/Short Take:</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  {" "}
                  this is the most a taker can take, long or short, for a given
                  LP. It is a function of the LP's current book. For example, if
                  the LP shows 100 Margin with no positions, a Taker can only go
                  long or short 50. If the LP shows a margin of 100, with the LP
                  currently long 100, Takers can only go short.
                </span>{" "}
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginLeft: "0in",
                  marginBottom: ".0001pt",
                  textIndent: ".5in"
                }}
              >
                <span style={{ color: "#9FB8FF" }}>
                  Max Long Take = Max(0, &frac12; LP's Total Margin&#8210; LP's Short +
                  LP's Long)
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{ marginBottom: "12.0pt", textIndent: ".5in" }}
              >
                <span style={{ color: "#9FB8FF" }}>
                  Max Short Take = Max(0, &frac12; LP's Total Margin + LP's Short&#8210;
                  LP's Long)
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Net Margin:</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  {" "}
                  An LP's Required Margin is netted, meaning it is the
                  difference between the gross long and short for an LP. For
                  example, if the gross long is 80, gross short is 50, the net
                  margin is 30. The LP's RM is equal to their net margin,
                  abs(long short). Only the LP has an RM based on a Net Margin.
                  For a taker, there is no netting if they take offsetting
                  positions within an LP's book.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Notional:</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  {" "}
                  Notional is the amount applied to the reference asset return
                  to generate the ETH PNL. It is generated by multiplying the RM
                  by the Asset Contract's specific Leverage Ratio and then the
                  ETH price in USD. This is in USD per ETH.{" "}
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>
                    Oracle Price Contract
                  </span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  : The Oracle Price Contract warehouses the asset prices of all
                  AssetSwap Contracts serviced by OracleSwap. It contains all
                  the information needed to calculate subcontract returns, and
                  so holds the closing prices for the current week (i.e., last
                  Friday to the current date). The Oracle posts prices between 4
                  and 5 PM New York City time. At settlement update, the oracle
                  contract pushes the asset returns to each AssetSwap contract.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Player</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  : Synonym for an OracleSwap counterparty, investor/taker or
                  LP.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>PNL</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  : Profit-n-loss, the cash flow between two parties of a
                  subcontract, where the loser/debtor has a negative PNL, and
                  the winner/creditor has a symmetric positive PNL.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Price Day:</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  {" "}
                  The day of the first price for a subcontract. It is determined
                  by the Oracle contract, which knows what the next day of the
                  week will be. Thus, if it is Tuesday prior to the oracle price
                  update in the 4-5 PM time period, the start day will by
                  Tuesday; if it is Tuesday after the oracle price update, the
                  start day will be Wednesday. For a position with an intraweek
                  close, the price day is actually the ending day price, and so
                  the return from start day to settle is subtracted from their
                  returns.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Redeem</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  : This function moves the investor's ETH to the AssetSwap contract,
                  from where it can be withdrawn to the investor's account. It is
                  the only way to withdraw funds after a subcontracts last
                  settlement, or if the LP's book is inactive or in default.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>RM</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  : Required Margin. Each subcontract has a specific RM for its
                  life, in units of ETH. RM must be greater than or equal to the
                  LP's minimum RM. This sets the notional amount via the
                  leverage ratio, so given the RM we have a notional and vice
                  versa.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Settlement:</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  {" "}
                  Settlement is applied each weekend by all LPs with active
                  subcontracts via the Settlement Function. This uses the Friday
                  closing prices recorded in the Oracle Price contract to the
                  subcontracts and then transfers the resulting PNL from the
                  debtor to the creditor. If Friday is an exchange holiday
                  (e.g., Christmas), the prior business day, Thursday, will be
                  the settlement day.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Settlement Period:</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  {" "}
                  The time between when the Oracle contract settlement prices
                  are updated Friday 4 PM and when the LP runs the settlement
                  function 24-48 hours later is exceptional. Withdraws and
                  cancels are not allowed so that users who see a fraudulent
                  price report by an evil Oracle are then properly incented to
                  burn rather than subject themselves to another week where they
                  will probably be cheated again. Users need to cancel before
                  the settlement period, before the Oracle contract update on
                  settlement day, to exit at the next settlement.{" "}
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>SPX:</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  {" "}
                  The SPX is the index for the S&amp;P500 portfolio, a
                  value-weighted index of the top 500 US companies. It is a cash
                  index that excludes dividends. In contrast, the SPY is an ETF
                  that trades on stock exchanges, and so its price is dividend
                  adjusted.{" "}
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Szabo:</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  {" "}
                  1e-6 ETH. This web version uses Szabo because it is not meant to be
                  economically meaningful, just a way to see how it works.
                  Anyone developing their own version of OracleSwap should use
                  ETH as the unit of denomination.
                </span>
                </p>

              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Subcontract: </span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  a bilateral agreement between a Taker and LP. It has a
                  specific RM for its life, as well as a specific funding rate
                  and closing fee determined at trade instantiation. An LP will
                  have many subcontracts. Each taker/investor will have the LP
                  as his counterparty.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Subcontract ID</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  : A subcontract is uniquely identified on the Blockchain via
                  an LP's address and subcontract ID (which is in bytes32). A
                  player can query event logs to see how this corresponds to a
                  particular taker address, but within the contract, it uses the
                  LP address to find the specific book contract, then within
                  that contract, the subcontract ID to find the particular
                  subcontract.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Swap</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  : A swap in the context of this document is a CFD and so has
                  no expiration (e.g., a perpetual swap). A swap account nets a
                  user's positions to generate their required margin and total
                  PNL, and its mark-to-market is based on the cash price of its
                  reference assets; it also charges a funding rate to long and
                  short positions. Prime brokers use these to provide hedge
                  funds a way to avoid stamp taxes and allow them to mask their
                  positions for strategic reasons. For equities, their CFDs are
                  often in swap accounts&#8212;swapping the cashflows from long
                  and short equity positions&#8212;and 'swap' vs. 'CFD'
                  terminology is a matter of preference.
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Taker</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  : A counterparty to a subcontract that takes an LP offer. Also
                  known as the investor. The taker determines the side (long or
                  short) and size (RM).{" "}
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <b>
                  <span style={{ color: "#9FB8FF" }}>Termination:</span>
                </b>
                <span style={{ color: "#9FB8FF" }}>
                  {" "}
                  When a contract ends for any reason&#8212;burn, cancel,
                  default&#8212;its termination occurs at the Friday settlement.
                  This then sets the subcontract's RM to zero, allowing the
                  Taker to withdraw his total margin, while the effect on an
                  LP's margin is ambiguous.{" "}
                </span>
              </p>
              <p
                className="MsoNormal"
                style={{
                  marginTop: "12.0pt",
                  marginRight: "0in",
                  marginBottom: "12.0pt",
                  marginLeft: "0in"
                }}
              >
                <span style={{ color: "#9FB8FF" }}>&nbsp;</span>
              </p>
              &nbsp;
              <div>
                <p className="MsoNormal" style={{ marginBottom: "0in" }}>
                  <span
                    style={{
                      fontSize: "12.0pt",
                      lineHeight: "106%",
                      msoFareastFontFamily: "Times New Roman"
                    }}
                  >
                    <br
                      clear="all"
                      style={{ msoSpecialCharacter: "line-break" }}
                    />
                  </span>
                </p>

                <div className="MsoNormal" style={{ marginBottom: "0in" }}>
                  <span
                    style={{
                      fontSize: "12.0pt",
                      lineHeight: "106%",
                      msoFareastFontFamily: "Times New Roman"
                    }}
                  >
                    <hr size="1" width="33%" align="left" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Split>
      </div>
    );
  }
}



export default Documentation;
