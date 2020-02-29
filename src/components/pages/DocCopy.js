import React, { Component } from 'react'
// import { drizzleConnect } from 'drizzle-react'
// import PropTypes from 'prop-types'
import Logo from '../basics/Logo'
import { Flex, Box } from '@rebass/grid'
import Text from '../basics/Text'
import Split from '../layout/Split'
import VBackground from '../basics/VBackground'
import { autoBind } from 'react-extras'

var tpSection1_1 = require("../whitepaper/section_1/TPSection1_1.htm")
var tpSection1_2 = require('../whitepaper/section_1/TPsection1_2.htm')
var tpSection1_3 = require('../whitepaper/section_1/TPsection1_3.htm')
var tpSection1_4 = require('../whitepaper/section_1/TPsection1_4.htm')
var tpSection1_5 = require('../whitepaper/section_1/TPsection1_5.htm')

var tpSection2_0 = require('../whitepaper/section_2/section2_0.htm')
var tpSection2_1 = require('../whitepaper/section_2/section2_1.htm')
var tpSection2_2 = require('../whitepaper/section_2/section2_2.htm')
var tpSection2_3 = require('../whitepaper/section_2/section2_3.htm')

var tpSection3_1 = require("../whitepaper/section_3/section3_1.htm");
var tpSection3_2 = require("../whitepaper/section_3/section3_2.htm");
var tpSection3_3 = require("../whitepaper/section_3/section3_3.htm");
var tpSection3_4 = require("../whitepaper/section_3/section3_4.htm");
var tpSection3_5 = require("../whitepaper/section_3/section3_5.htm");
var tpSection3_6 = require("../whitepaper/section_3/section3_6.htm");

var tpSection4 = require('../whitepaper/TPsection4.htm')
var tpSection5 = require('../whitepaper/TPsection5.htm')

var tpSection6_0 = require("../whitepaper/section_6/section6_0.htm");
var tpSection6_1 = require("../whitepaper/section_6/section6_1.htm");
var tpSection6_2 = require("../whitepaper/section_6/section6_2.htm");
var tpSection6_3 = require("../whitepaper/section_6/section6_3.htm");
var tpSection6_4 = require("../whitepaper/section_6/section6_4.htm");

var tpSection7_0 = require("../whitepaper/section_7/section7_0.htm")
var tpSection7_1 = require("../whitepaper/section_7/section7_1.htm")

var tpSection8_1 = require("../whitepaper/section_8/section8_1.htm")
var tpSection8_2 = require("../whitepaper/section_8/section8_2.htm")
var tpSection8_3 = require("../whitepaper/section_8/section8_3.htm")

var tpSection9 = require("../whitepaper/TPsection9.htm")

var tpSection10_1 = require("../whitepaper/section_10/section10_1.htm");
var tpSection10_2 = require("../whitepaper/section_10/section10_2.htm");

var tpSection11 = require("../whitepaper/TPsection11.htm")

class Documentation extends Component {

  constructor(props, context) {
    super(props)
    autoBind(this)
    this.state = {}
  }

  openWhitepaper() {
    console.log("Opened whitepaper")
    // TODO
  }

  openTechnicalAppendix() {
    console.log("Opened technical appendix")
    // TODO
  }

  openCheatSpreadsheet() {
    console.log("Opened cheat spreadsheet")
    // TODO
  }

  openSimulationSheet() {
    console.log("Opened simulation sheet")
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
                {/* <Flex> */}
                {/* <iframe className="tech-appendix" style={{ height: "100vh", width: "100%", marginTop: "10px" }} src={techHead}></iframe> */}
                <div
                  backgroundcolor="#323E4F"
                  style={{
                    tabInterval: ".5in",
                    backgroundColor: "#323E4F",
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
                        style={{ color: "#B4C7E7" }}
                        className="docu-sidebar"
                      >
                        Technical Appendix to OracleSwap White Paper
                      </span>
                    </p>

                    <p className="docu-header">
                      <span
                        style={{ color: "#B4C7E7" }}
                        className="docu-sidebar"
                      >
                        &nbsp;
                      </span>
                    </p>

                    <a
                      href="#section1_1"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header">
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          1. Decentralization and Oracles
                        </span>
                      </p>

                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          1.1 Attack and Censorship Resistance
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section1_2"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          1.2 Conspiracy-Proofness
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section1_3"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          1.3 Costly Decentralization
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section1_4"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          1.4 Fault Tolerance
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section1_5"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          1.5 A Market Consists of Competing Centralized Agents
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section2_0"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header">
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          2. PNL
                        </span>
                      </p>

                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          2.0 Basics
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section2_1"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          2.1 PNL in the Code
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section2_2"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          2.2 Basis Rates
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section2_3"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          2.3 Implicit Collar Cost of PNL Caps
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section3_1"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header">
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          3. Position Management
                        </span>
                      </p>

                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          3.1 Weekly PNL and Settlement
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section3_2"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          3.2 Maximum New Position Sizes
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section3_3"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          3.3 LP Margin Management
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section3_4"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          3.4 Closing a Subcontract and Withdrawing ETH
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section3_5"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          3.5 Monitoring and Punishing LPs and the Oracle
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section3_6"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          3.6 Gas Costs
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section4"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header">
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          4. Liquidity Provider (LP) Risk and Return
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section5"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header">
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          5. ETH Hedge Simulations
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section6_0"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header">
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          6. The Oracle s Cheat Strategy
                        </span>
                      </p>

                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          6.0 Basics
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section6_1"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          6.1 Common Knowledge and The Burn
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section6_2"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          6.2 Burn Mechanics
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section6_3"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          6.3 Total Cost-Benefit to Cheating
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section6_4"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          6.4 The Value of the Walk-Away Option
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section7_0"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header">
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          7. Adverse Selection on Limit Order Books
                        </span>
                      </p>

                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          7.0 Basic Problem
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section7_1"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          7.1 Trading Costs Avoided
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section8_1"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header">
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          8. Oracle/Admin Rights
                        </span>
                      </p>

                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          8.1 Updates Oracle Prices
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
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          8.2 Pause netting on new takes in AssetSwap contract
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
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          8.3 Cancel books or stop new takes in case of contract
                          deprecation
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
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          9. Contract Methods
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section10_1"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header">
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          10. Security Considerations
                        </span>
                      </p>

                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          10.1 General Attack Issues
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section10_2"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header" style={{ marginLeft: ".5in" }}>
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          10.2 Contract Constraints on the Oracle/Admin
                        </span>
                      </p>
                    </a>

                    <a
                      href="#section11"
                      style={{ textDecoration: "none" }}
                      className="docu-header"
                    >
                      <p className="docu-header">
                        <span
                          style={{ color: "#B4C7E7" }}
                          className="docu-sidebar"
                        >
                          11 Definitions
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
                      href="/faqs"
                    >
                      FAQS
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
                    //  href="http://github.com/lorenzobotticelli/OracleSwap"
                      href="./whitepaper/WP.htm"
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
                  {/* <Flex
                    flexWrap="wrap"
                    onClick={this.openWhitepaper}
                    style={{ cursor: "pointer" }}
                    variant="nav"
                  >
                    <Box>
                      <Text
                        className="nav-header"
                        size="15px"
                        style={{ cursor: "pointer" }}
                      >
                        Whitepaper PDF
                      </Text>
                    </Box>
                  </Flex>
                  <Flex
                    flexWrap="wrap"
                    onClick={this.openTechnicalAppendix}
                    style={{ cursor: "pointer" }}
                  >
                    <Box>
                      <Text
                        className="nav-header"
                        size="15px"
                        style={{ cursor: "pointer" }}
                      >
                        Technical Appendix PDF
                      </Text>
                    </Box>
                  </Flex> */}
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
            <div style={{ height: "fit-content" }} id="section1_1">
              <iframe
                src={tpSection1_1}
                style={{ width: "100%", height: "1080px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section1_2">
              <iframe
                src={tpSection1_2}
                style={{ width: "100%", height: "458px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section1_3">
              <iframe
                src={tpSection1_3}
                style={{ width: "100%", height: "510px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section1_4">
              <iframe
                src={tpSection1_4}
                style={{ width: "100%", height: "350px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section1_5">
              <iframe
                src={tpSection1_5}
                style={{ width: "100%", height: "400px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section2_0">
              <iframe
                src={tpSection2_0}
                style={{ width: "100%", height: "1895px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section2_1">
              <iframe
                src={tpSection2_1}
                style={{ width: "100%", height: "1280px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section2_2">
              <iframe
                src={tpSection2_2}
                style={{ width: "100%", height: "935px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section2_3">
              <iframe
                src={tpSection2_3}
                style={{ width: "100%", height: "1555px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section3_1">
              <iframe
                src={tpSection3_1}
                style={{ width: "100%", height: "745px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section3_2">
              <iframe
                src={tpSection3_2}
                style={{ width: "100%", height: "555px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section3_3">
              <iframe
                src={tpSection3_3}
                style={{ width: "100%", height: "985px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section3_4">
              <iframe
                src={tpSection3_4}
                style={{ width: "100%", height: "665px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section3_5">
              <iframe
                src={tpSection3_5}
                style={{ width: "100%", height: "800px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section3_6">
              <iframe
                src={tpSection3_6}
                style={{ width: "100%", height: "370px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section4">
              <iframe
                src={tpSection4}
                style={{ width: "100%", height: "2675px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section5">
              <iframe
                src={tpSection5}
                style={{ width: "100%", height: "2365px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section6_0">
              <iframe
                src={tpSection6_0}
                style={{ width: "100%", height: "490px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="sectoin6_1">
              <iframe
                src={tpSection6_1}
                style={{ width: "100%", height: "1135px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section6_2">
              <iframe
                src={tpSection6_2}
                style={{ width: "100%", height: "320px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section6_3">
              <iframe
                src={tpSection6_3}
                style={{ width: "100%", height: "320px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section6_4">
              <iframe
                src={tpSection6_4}
                style={{ width: "100%", height: "1250px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section7_0">
              <iframe
                src={tpSection7_0}
                style={{ width: "100%", height: "1285px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section7_1">
              <iframe
                src={tpSection7_1}
                style={{ width: "100%", height: "385px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section8_1">
              <iframe
                src={tpSection8_1}
                style={{ width: "100%", height: "205px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section8_2">
              <iframe
                src={tpSection8_2}
                style={{ width: "100%", height: "245px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section8_3">
              <iframe
                src={tpSection8_3}
                style={{ width: "100%", height: "185px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section9">
              <iframe
                src={tpSection9}
                style={{ width: "100%", height: "3350px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section10_1">
              <iframe
                src={tpSection10_1}
                style={{ width: "100%", height: "2535px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section10_2">
              <iframe
                src={tpSection10_2}
                style={{ width: "100%", height: "1435px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>

            <div style={{ height: "fit-content" }} id="section11">
              <iframe
                src={tpSection11}
                style={{ width: "100%", height: "2475px" }}
                className="iframe"
                scrolling="auto"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </Split>
      </div>
    );
  }
}

// Splash.contextTypes = {
//   drizzle: PropTypes.object
// }

// May still need this even with data function to refresh component on updates for this contract.
// const mapStateToProps = state => {
//   return {
//     accounts: state.accounts,
//     contracts: state.contracts,
//     drizzleStatus: state.drizzleStatus
//   }
// }

export default Documentation;
<div className="WordSection1">
  <h1>
    <a name="_Toc26445296">
      <span style={{ msoFareastFontFamily: "Times New Roman" }}>
        1 Decentralization and Oracles
      </span>
    </a>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h1>
  &nbsp;
  <p className="MsoNormal">
    A pseudonymous Ethereum oracle contract retains the essential benefits of
    decentralization&#8212;attack and censorship resistance&#8212;by merely
    being on the blockchain. This allows it to focus on{" "}
    <i>incentive compatibility</i>, which is easier with a single-agent oracle
    and reduces costs.
  </p>
  <h2>
    <a name="_Toc26445297">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        1.1 Attack and Censorship Resistance
      </span>
    </a>
    <span style={{ msoBookmark: "_Toc26445297" }}></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    After the first crusade (1099), the Knights Templar safeguarded pilgrims to
    newly conquered Jerusalem and quickly developed an early international bank.
    A pilgrim could deposit money or valuables within a Templar stronghold and
    receive an official letter describing what they had. That pilgrim could then
    withdraw cash along the route to take care of their needs. By the 12th
    century, depositors could freely move their wealth from one property to the
    next.
  </p>
  <p className="MsoNormal">
    Eventually, the Templar protocol was seen as a threat, especially as King
    Philip IV of France was deeply indebted to the Templars. On the same day
    across Europe, October 13, 1307, they seized an attack surface by arresting
    many key Templars, including the Grand Master. Authorities made absurd
    charges such as that recruits were forced to spit on the cross and engaged
    in financial corruption. Many of the accused confessed to these charges
    under torture. A few years later, dozens of Templars were burned at the
    stake in Paris for their confessions, and the Templar banking system
    disappeared.{" "}
  </p>
  <p className="MsoNormal">
    Governments, exchanges, or any traditional financial institution would like
    to retard anything that might compete with their monopoly power.
    Decentralization is essential for resisting their inevitable attacks, in
    that if someone takes over an existing valuable blockchain, it can and
    probably will reappear via a hard fork. The profitability of the old chain
    would create a willing and able army of substitute miners if China or Craig
    Wright decided to appropriate 51% of existing miners to create a new
    protocol.{" "}
  </p>
  <p className="MsoNormal">
    Bitcoin has created perhaps the first technological innovation our large
    institutions will be unable to destroy or coopt. Anyone targeting a
    ledger-producing node on the Ethereum blockchain will see one instantly take
    its place. Vitalik Buterin nicely describes this resiliency in his admirable
    assessment of his limited power:
  </p>
  <div
    style={{
      border: "solid windowtext 1.0pt",
      padding: "1.0pt 4.0pt 1.0pt 4.0pt",
      marginLeft: ".5in",
      marginRight: ".5in",
      background: "#4d4d4d"
    }}
  >
    <p className="MsoNormal">
      The thing with developers is that we are fairly fungible people. One
      developer goes down, and someone else can keep on developing. If someone
      puts a gun to my head and tells me to write a hard fork patch, I'll
      definitely write the hard fork patch. I'll write the GitHub issue, I'll
      write up the code, I'll publish it, and I'll do everything they say. If I
      do this and publish a hard fork patch to delete a bunch of accounts, how
      many people will be willing to download the update, install it and switch
      to that update? This is called decentralization.{" "}
    </p>

    <p className="MsoNormal">
      <span style={{ color: "#9FB8FF" }}>
        Vitalik Buterin. TechCrunch: Sessions Blockchain 2018 Zug, Switzerland
      </span>
    </p>
  </div>
  <p className="MsoNormal">
    The potential for a hard fork in the case of an attack is the primary
    protection against outsiders. This depends on the protocol having a deep and
    committed set of users and developers, and is why decentralization is
    essential for long-run crypto security
  </p>
  <p className="MsoNormal">
    Outside attacks have decimated if not destroyed several once useful
    financial innovations. E-gold, Etherdelta, Intrade, and ShapeShift all had
    conspicuous centralization points, allowing authorities to prosecute, close,
    or force them to submit to traditional financial protocols. While
    decentralization could have saved them, an easier solution going forward is
    pseudonymity on the decentralized blockchain. If the agent supplying the
    prices is pseudonymous, running virtually costless scripts on remote servers
    across the globe, there is nothing outside of shutting off the internet that
    anyone can do to stop it. This inheritance is what makes Ethereum so
    valuable, in that dapps do not need their own decentralized consensus
    mechanisms to avoid such attacks.{" "}
  </p>
  <p className="MsoNormal">
    The bubble of 2017 encouraged everyone in the crypto space to issue tokens
    regardless of need. How a token would make a dapp more efficient was a
    secondary concern for investors eager to invest in the next bitcoin. Even if
    only 10% of ICO money was applied to research and development, that implies
    billions of dollars' worth of talent and time working on creating
    decentralized dapps that could justify their need for tokens. All would have
    all recognized the value of a dependable decentralized oracle, yet they were
    unable to deliver one, a telling failure. The most popular oracle today
    resides within the MakerDAO protocol and is effectively controlled by the
    Maker's internal developers, centralized.{" "}
  </p>
  <p className="MsoNormal">
    Decentralized oracles do not work for reasons discussed below related to
    cost, but a fundamental problem is the susceptibility to censorship, in that
    any oracle that facilitates derivative trading is subject to regulation in
    developed countries across the world. Dapp corporations are conspicuous
    attack surfaces. To the extent Augur and 0x have little volume in
    assets/propositions that do not compete with traditional institutions,
    authorities are wise to simply see such ventures as a problem that will
    solve itself. If these protocols ever become competitive with traditional
    financial institutions&#8212;by providing a futures position on the ETH
    price, for instance&#8212;all the standard financial frictions will be
    forced upon them under the pretext of safeguarding the public. Maker and
    Chainlink are already flirting with KYC.{" "}
  </p>
  <p className="MsoNormal">
    Satoshi needed to remain anonymous at the early stages of bitcoin to avoid
    some local government prosecuting him before bitcoin could work without him.
    The peer-to-peer system bitcoin initially emulated, Tor, is populated by
    people who do not advertise on traditional platforms, have institutional
    investors, or speak at conferences. Viable dapps should follow this example
    and focus less on corporatization and more on developing their reputation
    among current crypto enthusiasts.{" "}
  </p>
  <h2>
    <a name="_Toc26445298">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        1.2 Conspiracy-Proofness
      </span>
    </a>
    <span style={{ msoBookmark: "_Toc26445298" }}></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    It is generally harder for random individuals in decentralized systems to
    collude at the expense of other participants. Such mechanisms eliminate the
    effect of trolls and singular troublemakers, and so is comforting and easily
    observable. Yet this can create a dangerous sense of complacency, as any
    robust mechanism must incent good behavior even if there is collusion, and
    mechanisms to prevent that are much less straightforward.{" "}
  </p>
  <p className="MsoNormal">
    Satoshi knew that malicious collusion would be feasible with proof-of-work,
    just not problematic because it would be perverse. In the Bitcoin White
    Paper, Satoshi emphasized how proof-of-work removed the need for a trusted
    third party, why the term trustless is often attributed to a decentralized
    network. With proof-of-work, it is not impossible to double-spend, however,
    just contrary to self-interested rationality. Specifically, he wrote that
    anyone with the ability to double-spend '
    <i>
      ought to find it more profitable to play by the rules than to undermine
      the system and the validity of his own wealth
    </i>
    .'
  </p>
  <p className="MsoNormal">
    For the large blockchains like Ethereum and Bitcoin, one needs specialized
    mining equipment that is only valuable if miners follow the letter and
    spirit of the law. The capital destroyed by manipulating blocks is a
    thousand-fold greater than the direct hash-power cost of such an attack.
    While a handful of Bitcoin or Ethereum mining groups can effectively collude
    and control 51% network control, it is not worrisome because it would not be
    in their self-interest to engineer a double-spend given the cost of losing
    future revenue. For example, in the spring of 2019, the head of Binance
    revealed that a blockchain rollback was possible by suggesting a potential
    rewrite to undo a recent theft. The bitcoin community mocked him, and he
    quickly recanted because this would obviously not be in the long-term
    self-interest of the bitcoin miners or exchanges.
  </p>
  <p className="MsoNormal">
    The term <i>collusion resistance</i>
    is often mentioned as a primary decentralization virtue. A better term would
    be
    <i>conspiracy resistance</i>. Any decentralized system must generate proper
    incentives even if there is collusion because collusion is invariably
    possible as, in practice, large decentralized blockchains are controlled by
    a handful of teams. There have been several instances of benign collusion,
    which can actually increase the robustness of a network. For instance, in
    the September 2018 Bitcoin inflation bug, or the Fall 2016 Ethereum DDoS
    attacks, BTC and ETH miners effectively colluded to protect their
    blockchains, not subvert it.{" "}
  </p>
  <p className="MsoNormal">
    Conspiracy resistance all comes down to incentives, making sure that miners
    find honesty more valuable than cheating. This same profit-maximizing
    incentive not only keeps miners honest, but it also protects them from
    themselves. While blockchains have many things in common, they often have
    very different priorities. Users who prioritize speed prefer EOS, those who
    prioritize anonymity, Monero, that code is law, Bitcoin. A quorum of miners
    who conspire to radically change their blockchain's traditional priorities
    will devalue their asset by alienating their base; crypto users who share
    these targeted priorities will not switch but rather highlight their
    favorite blockchain has been right all along. Decentralization among
    cryptos, and the potential for a hard fork as with Bitcoin Cash, prevents
    hubristic insiders from doing too much damage.
  </p>
  <h2>
    <a name="_Toc26445299">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        1.3 Costly Decentralization
      </span>
    </a>
    <span style={{ msoBookmark: "_Toc26445299" }}></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    Quick and straightforward monitoring is essential for creating an
    incentive-compatible mechanism. For a decentralized oracle, various subsets
    of agents are at work on any outcome. It is difficult to find a concise set
    of data on, say, the percentage and type of Augur markets declared invalid,
    or a listing of Chainlink's past outcome reports. While all the data exists
    (immutably!), putting this together is simply infeasible for an average
    user, and past errors are dismissed as anomalies.{" "}
  </p>
  <p className="MsoNormal">
    Decentralized oracles that depend on the market value of their tokens
    incenting good behavior have a large wedge between how much users must pay
    the oracle and how much is needed to keep it honest. For example, suppose
    there is a game such that one needs to pay the reporter 1 finney so that the
    net benefit of honestly reporting is greater than any scam that reporter can
    implement. If only 2% of token holders report, this implies we must pay 50
    finneys to the oracle collectively (1/0.02), as we have no way to focus the
    present value of the token onto the subset of token-holders reporting.{" "}
  </p>
  <p className="MsoNormal">
    If the token valuation is not sufficient, the other incentive option is for
    a reporter to post a bond that is sacrificed if they report dishonestly. The
    first issue here is then, why are there tokens? Useless tokens issued with
    disengenous rationalizations heighten one's concern about the oracle's
    focus, which is clearly short-term. The shorter the time-horizon, the lower
    the costs of cheating. More importantly, this caps payoffs to trivial
    levels. We can generate a 50:1 cost/benefit ratio using present values, and
    it is all relative to the size of the OracleSwap's book; a reporter will
    have trouble providing sufficient capital to bond a market above trivial
    levels, especially because they have to provide the capital first, before
    the volume arises.
  </p>
  <p className="MsoNormal">
    Another problem with decentralized oracles is they generally serve a diverse
    set of outcomes. This generality makes them poorly aligned with any
    particular contract. The frequency and the size of the payoff will vary
    across applications, generating very different potential cheating payoffs as
    well as different costs for the relevant reporters. An oracle fee might
    create honesty in general, but for some games the costs will be too
    expensive for a viable dapp, while some games will present attractive cheat
    payoffs relative to forgone fee revenue. Efficient solutions minimize
    contextual parameters, implying the best general solution will be suboptimal
    for any particular application.{" "}
  </p>
  <p className="MsoNormal">
    While there are obvious costs, there are no obvious benefits given
    censorship and attack resistance. A reputation scoring algorithm is
    pointless because the most obvious dapp risk is an exit scam, which relies
    on behaving honestly until the final swindle. Weeding out mildly incompetent
    fraudsters merely sets one up for a greater disappointment unless one
    addresses the fundamental protector: that the present value of being honest
    is always greater than acting dishonestly. The wisdom of the crowd is not
    relevant for contracts relying on liquid asset prices.{" "}
  </p>
  <p className="MsoNormal">
    Making honesty the profit-maximizing strategy is easier to do when there are
    not just fewer, but one, reporter. In the limit, efficiency reduces the
    oracle collective to a singleton.{" "}
  </p>
  <h2>
    <a name="_Toc26445300">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        1.4 Fault Tolerance
      </span>
    </a>
    <span style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}>
      {" "}
    </span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    This danger refers to unintentional errors, which can come from corrupted
    sources or problems in the aggregation algorithm that aggregates these
    prices and then posts a single price to the contract. Indeed, the crucial
    problem with oracles is that ultimately, any finalized price that is used
    for generating PNL is subject to risk, in that there is no logical mechanism
    to prove a particular price is wrong using only on-chain logic. In contrast,
    a flawed mining block in proof of work is exposed by a concatenation of hash
    functions, making verification much easier.{" "}
  </p>
  <p className="MsoNormal">
    We all make unintentional mistakes and rely on the goodwill and common sense
    of those we do business with to 'undo' those cases where we might have added
    an extra zero to a payment. Credit cards allow chargebacks, and if a bank
    accidentally deposits $1MM in your account, you should be prepared to pay it
    back. The downside is that this process invariably involves third parties at
    some level who enforce the rule that large unintentional mistakes are
    reversible, and this implies they have rights over user account balances.{" "}
  </p>
  <p className="MsoNormal">
    The oracle Solidity contract itself has two error checks. First, if prices
    move by more than 50% from their prior value, and secondly, if they are
    exactly the same as their prior value. These catch the most common errors.
    Off the blockchain, OracleSwap uses an automated pull of prices from several
    independent sources and then adds additional filters proportional to how
    much the median price has deviated from benchmarks such as the prior day or
    the price change of correlated assets (e.g., check with an additional
    independent source if the price change is 10% over the past day, check
    further if the price change is 20%). If that server fails to post a backup
    server in a different geography that pulled data at approximately the same
    time will post a price, etc. OracleSwap allows the oracle the ability to
    overwrite a price update within 60 minutes of posting, which still allows
    users sufficient time to burn if such a price appears not merely wrong, but
    significant and intentionally wrong.{" "}
  </p>
  <h2>
    <a name="_Toc26445301">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        1.5 A Market: Competing Centralized Agents
      </span>
    </a>
    <span style="mso-bookmark:_Toc26445301"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    For oracles, decentralization solves a problem it does not have to have:
    attack and censorship resistance. An agent updating an oracle contract only
    needs access to the internet and pseudonymity to avoid censorship. Given
    that, the best way to create proper oracle incentives is to create a game
    where the payoffs for honesty and cheating are well parameterized, and
    outsiders can easily verify if an agent is behaving honestly. Simplicity is
    essential to any robust game, and this extends to removing parties and
    procedures.
  </p>
  <p className="MsoNormal">
    Markets are the ultimate decentralized mechanism. It is not a paradox that
    markets consist of centralized agents; rather, it is often the nature of
    things that properties exist at higher levels but not lower ones. A
    decentralized market needs consumers to have both choice and information,
    and for businesses to have free entry. Markets have always depended upon
    individuals with valuable reputations.<a name="_ftnref1"></a>
    <a href="#_ftn1">
      <span style="mso-bookmark:_ftnref1">
        <span className="MsoFootnoteReference">
          <span style={{ color: "#9FB8FF" }}>[1]</span>
        </span>
      </span>
      <span style="mso-bookmark:_ftnref1"></span>
    </a>
    <span style="mso-bookmark:_ftnref1"></span>
    Blockchains are the best accountability device in history, and so it is
    possible to create valuable reputations on the blockchain.{" "}
  </p>
  <p className="MsoNormal">
    OracleSwap provides queries of the event logs that allow people to pull all
    of the oracle's price reports into a simple webpage and correspond to cash
    prices at a consistent daily frequency. As OracleSwap contracts are
    hardcoded only to pull prices from the Oracle contract, and the oracle is
    unambiguously accountable for its reports, this creates a simple way to
    observe everything relevant to assessing the Oracle quickly.{" "}
  </p>
  <h1>
    <a name="_Toc15988684"></a>
    <a name="_Toc26445302"></a>
    <span style="mso-bookmark:_Toc15988684">
      <span style={{ msoFareastFontFamily: "Times New Roman" }}>2 PNL</span>
    </span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h1>
  &nbsp;
  <h2>
    <a name="_Toc26445303">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        2.1 Basics
      </span>
    </a>
    <span style="mso-bookmark:_Toc26445303"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
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
      The standard PNL for an investor is straightforward: if you own 10 shares
      of Tesla stock, and its price moves from $270 to $275, you make $50. More
      generally:{" "}
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <span style={{ color: "#9FB8FF" }}>
      PNL = q&#8729;(p<sub>1</sub>&#8210; p<sub>0</sub>)
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
      Here <i>q</i> would be the number of BTC, ETH, or SPX contracts, <i>p</i>{" "}
      its price is in USD. This is equivalent to{" "}
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <span style={{ color: "#9FB8FF" }}>
      PNL = q&#8729;p<sub>0</sub>&#8729;(p<sub>1</sub>/p<sub>0 </sub>&#8210; 1)
    </span>
  </p>
  <p className="MsoNormal">
    This is the payoff we are targeting, the notional amount in USD times the
    net return. Importantly, the notional and return are both denominated in
    USD. As we are transacting in ETH, this implies an ETH/USD adjustment at the
    beginning and end of the return period. For example, in 2018, the Venezuelan
    stock market rose 80000%, but if you bought a Venezuelan stock, you would
    have lost 90% of your investment because you need to buy Venezuelan dollars
    to buy Venezuelan stock there, and the currency devalued by even more.
    Anyone offering a USD return in a Venezuelan stock will account for this.{" "}
  </p>
  <p className="MsoNormal">
    The OracleSwap contract is denominated in ETH while its assets are
    denominated in USD. This implies we must use the ETH price to convert the
    notional into USD at the beginning of the period, and then convert the USD
    payoff back into ETH. Thus, contracts denominated in USD will use the ETH
    price at the beginning and end of the return period to adjust for this.{" "}
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
      Specifically, the PNL for these contracts is:
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{ textAlign: "center", textIndent: ".5in" }}
  >
    <span style={{ color: "#9FB8FF" }}>
      PNL = RM &#8729; LevRatio &#8729; ETH<sub>t-1 </sub>&#8729; (Asset
      <sub>t</sub>/Asset<sub>t-1</sub>&#8210; 1) /ETH<sub>t</sub>
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
      To be extra clear, it helps to separate this, though we exclude the
      funding rate
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{ textAlign: "center", textIndent: ".5in" }}
  >
    <span style={{ color: "#9FB8FF" }}>ETH notional = RM &#8729; LevRatio</span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{ textAlign: "center", textIndent: ".5in" }}
  >
    <span style={{ color: "#9FB8FF" }}>
      USD notional<sub> t-1 </sub>= RM &#8729; LevRatio &#8729; ETH
      <sub>t-1</sub>
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{ textAlign: "center", textIndent: ".5in" }}
  >
    <span style={{ color: "#9FB8FF" }}>
      USDpnl<sub>t </sub>= USDnotional<sub>t-1 </sub>&#8729; (Asset<sub>t</sub>
      /Asset<sub>t-1</sub>&#8210; 1)
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{ textAlign: "center", textIndent: ".5in" }}
  >
    <span style={{ color: "#9FB8FF" }}>
      ETHpnl<sub>t</sub> = USDpnl<sub>t</sub> /ETH<sub>t</sub>
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
      Note that the ETH notional, like the required margin (RM), is constant,
      while the USD notional will change as the price of ETH changes. Thus, if
      one has 10 ETH notional, the returns will always be around &#177; 1 in ETH
      for a BTC contract, but in USD terms, this could be a lot or a little
      depending on the future price of ETH. As each subcontract implies
      symmetric PNLs to Taker and Liquidity Provider (LP), we need only
      calculate the PNL for one party.
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <span style={{ color: "#9FB8FF" }}>
      PNL<sup>investor</sup> = &#8210; PNL<sup>LP</sup>
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
      <span style={{ color: "#9FB8FF" }}>Example 1, BTC</span>
    </b>
    <span style={{ color: "#9FB8FF" }}>
      : Assume Alice is an LP and posts 100 ETH margin on the BTC contract, a
      funding rate of 0.25% (7.8% annualized). The BTC leverage ratio (LR) is
      2.5. Bob takes the short and posts an RM=10.{" "}
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      At the Initial Settlement, ETH=$150, BTC=$4000, and the implied notional
      is thus $3,750.
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      Notional = RM&#8729;LevRatio&#8729;ETH<sub>0</sub>
      =10&#8729;2.5&#8729;150=3750
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      At first Friday settle, ETH=$175, BTC=$5000. Alice is long, so her return
      is the long return plus the funding rate Bob pays as Taker.
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      PNL<sup>Bob</sup>=Notional&#8729;(P<sub>1</sub>/P<sub>0</sub>
      -1)-FundRate}/ETH<sub>1</sub>
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      =3750&#8729;{-(5000 / 4000 - 1) - 0.0015}/175= &#8210;5389
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      PNL<sup>Alice</sup>= &#8210; PNL<sup>Bob</sup> = 5.389
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>The USD return is thus</span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      Return(USD)= &#8210;(5.389&#8729;175)/3750=25.15%
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>AssetReturn = 5000/4000 = 25.00%</span>
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
      The return difference reflects Bob's funding rate.{" "}
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
      <span style={{ color: "#9FB8FF" }}>Example 2, BTC with ETH changing</span>
    </b>
    <span style={{ color: "#9FB8FF" }}>
      : Assume everything is the same as in Example 1, except the ETH price is
      $130 in the second period. At price initialization, ETH=$150, BTC=$4000,
      and Notional is $3,750 as before.
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      Notional = RM&#8729;LevRatio &#8729; ETH0 = 10&#8729;2.5&#8729;150=3750
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      At the first Friday Weekly Settlement, ETH=$130, BTC=$5000, and
      BTC/ETH=0.035
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      PNL<sup>Bob</sup>=3750&#8729;{-(5000 / 4000 - 1) - 0.0015}/130=
      &#8210;7.255
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      Return(Bob, USD) = (-7.255&#8729;130)/3750= &#8210; 25.15%
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:.5in"
  >
    <span style={{ color: "#9FB8FF" }}>AssetReturn = 5000/4000-1 = 25.00%</span>
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
      Here in example 2, we see Bob with the exact same position and asset
      return as in example 1. While the PNL in ETH is different,&#8210;5.389
      vs.&#8210;7.255, the USD PNL and return is the same. ETH movement or level
      does not affect the USD <i>return</i> due to the construction of the
      contract.
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
      <span style={{ color: "#9FB8FF" }}>Example 3, SPX</span>
    </b>
    <span style={{ color: "#9FB8FF" }}>
      : Assume Alice is an LP and posts RM=10 ETH, SPX contract, and the funding
      rate is 0.04% (2% ann). Bob takes the long and posts RM=10.
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      At price initialization, ETH=$150, SPX=$2815. Leverage Ratio of 10, which
      implies a notional of $15,000.{" "}
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      Notional = RM&#8729;LevRatio&#8729;ETH=10&#8729;10&#8729;150 = 15000
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      At first Friday Weekly Settlement, ETH=$155, SPX=$2850.{" "}
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      PNL<sup>Bob</sup>=15000&#8729;{-(2850 / 2815 - 1) - 0.0004}/155= 1.165
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      Return<sup>Bob</sup>(USD) = (1.165&#8729;155)/15000= 1.20%
    </span>
  </p>
  <p className="MsoNormal" style="margin-left:.5in">
    <span style={{ color: "#9FB8FF" }}>AssetReturn = 2850/2815-1 = 1.24%</span>
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
      Again, the return differential is from the financing fee Bob pays to the
      LP.
    </span>
  </p>
  <p className="MsoNormal">
    If a new position starts on Monday morning, it uses the Monday closing price
    as its start price as opposed to the prior settlement price. If a position
    is closed intra-week, say on Monday morning, it effectively uses Monday as
    the ending price. More precisely, the PNL function takes the Friday-Friday
    return, and then subtracts the Monday-Friday return given their side (long
    or short). This will not exactly equal the Friday-Monday return, but the
    difference is economically insignificant and unbiased.
  </p>
  <h2>
    <span style='mso-fareast-font-family:"Times New Roman";color:#B3C7FF'>
      2.2 PNL in the Code
    </span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
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
      The actual PNL calculation in the code is conceptually the same as above.
      It is applied in a circuitous way because of the memory constraints within
      Solidity contracts, and also because of the lack of floating-point math
      (integers are always truncated below).{" "}
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
      A subcontract refers to a particular asset within the Oracle contract
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <span style={{ color: "#9FB8FF" }}>
      Asset: 0 is ETH, 1 is SPX, 2 is BTC
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
      Each asset has a particular leverage ratio, which, due to the lack of
      floating-point math in solidity, is divided by 1e2 in equations:{" "}
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style="margin-top:12.0pt;margin-right:0in;
margin-bottom:12.0pt;margin-left:4.5pt;text-align:center"
  >
    <span style={{ color: "#9FB8FF" }}>
      Leverage Ratio: 250 for ETH and BTC, 1000 for SPX
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
      At the settlement update, the Oracle contract creates a new set of asset
      returns from the start of each day of the week to the settlement day.
      These prices are defined as
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style="margin-top:12.0pt;margin-right:0in;
margin-bottom:12.0pt;margin-left:4.5pt;text-align:center"
  >
    <span style={{ color: "#9FB8FF" }}>Uint[6][3] private prices</span>
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
      prices[i][t] is prices for asset i on day t
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
      prices[1] thus is a 6 element price vector for asset 1: [0, 1, 2, 3, 4, 5]
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
      In a standard week, the 6 slots in the Oracle price vector are:{" "}
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <span style={{ color: "#9FB8FF" }}>
      0:Friday, 1:Monday, 2:Tuesday, 3:Wednesday, 4:Thursday, 5:Friday
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
      If there is a holiday on days 0 through 4, the data in slots 0-4 are moved
      downward. If there is a holiday on day 5, the Thursday price is in slot 5.{" "}
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
      The price slot-day correspondence if Wednesday was a holiday:
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <span style={{ color: "#9FB8FF" }}>
      Friday, Monday, Tuesday, Thursday, Null, Friday
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
      The price slot-day correspondence if the most recent Friday was a holiday:
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <span style={{ color: "#9FB8FF" }}>
      Friday, Tuesday, Wednesday, Thursday, Null, Thursday
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
      The price slot-day correspondence if the prior Friday was a holiday:
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <span style={{ color: "#9FB8FF" }}>
      Thursday, Monday, Tuesday, Wednesday, Thursday, Friday
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
      For new positions, Price[i][t] is the starting weekly price, and
      prices[i][5] the ending price. If taken on Friday before the oracle price
      update, t=5, so the settlement will not assess a PNL for that subcontract.
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
      For rolling positions, Price[i][0] is the starting weekly price, and
      prices[i][5] the ending price.{" "}
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
      For expiring positions, Price[i][t] is the starting weekly price, and
      prices[i][5] the ending price.{" "}
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
      Settlement day is always equal to 5, and so if you query the oracle
      contract and see currentDay=5, you know the settlement prices are the most
      recent prices in the oracle contract.
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
      On a settlement update, the Oracle contract creates two vectors of 5
      returns for each asset. One is for new positions, from the initial day to
      the end of the week, the other for closing positions, from the start of
      the week to the closing day.{" "}
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <span style={{ color: "#9FB8FF" }}>
      return(start, end) = AssetPrice[end] &#8729; X / AssetPrice[start] X
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
      Due to the lack of floating-point arithmetic, the large constant X
      prevents rounding errors and basically makes this the net return times X.
      We have X = 1 eth (i.e., 1e18).{" "}
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
      Next we adjust for the ETH price, as all subcontracts have an adjustment
      for the starting and ending ETH price for reasons discussed above (turning
      notional into USD, then turning USD PNL into ETH PNL). Here the start
      price is in the numerator, because we initially multiply it by our ETH
      notional, and then at the end divide by the ending ETH price to generate
      the targeted USD returns, in ETH. Note we divide by 100 because leverage
      ratios are multiplied by 100 (e.g., 250 for 2.5).
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <span style={{ color: "#9FB8FF" }}>
      PNL = return(start, end) &#8729; (EthPrice[start] &#8729; LevRatio /
      EthPrice[end] / 100
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
      Lastly, we bound the return at 0.975 of the constant we use to avoid
      floating-point problems min, max = -X&#8729;0.975, X&#8729;0.975. This is
      because the PNL payments are capped at the required margin. As the
      financing rate is capped at &#177; 0.025&#8729;RM, , so any returns
      greater than 0.975&#8729;X in absolute magnitude could imply PNL greater
      than a counterparty's RM. This allows us to multiply a subcontracts RM by
      the PNL vector and be sure the counterparty has sufficient margin to cover
      their debit.
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
      As the RM, like the PNL, are in wei, we divide by 1e18 to normalize this
      back into wei. Then we subtract the subcontract's specific funding rate.
      First, we turn this into the same units as the PNL by multiplying by 1e18.
      As the funding rate is in basis points as a percent of RM (e.g., 250 is
      2.5% of RM or 1.0% of notional for crypto), we divide by 1e4.
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <span style={{ color: "#9FB8FF" }}>
      SubContractPNL= RM&#8729;PNL / 1e18 subcontract.fundingRate &#8729; 1e18 /
      1e4
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
      This gives us the PNL for a long taker. The sum of the taker PNLs is then
      subtracted from the LP's margin at settlement. As each subcontract's PNL
      is capped at its RM, and the LP's RM is netted, the LP will always have
      enough margin to pay for any possible debit.
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
      There is a worksheet in the excel spreadsheet OracleSwap.xlsx with the PNL
      logic.
    </span>
  </p>
  <h2>
    <a name="_Toc15988685"></a>
    <a name="_Toc26445305"></a>
    <span style="mso-bookmark:_Toc15988685">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        2.3 Basis Rates
      </span>
    </span>
    <span style="mso-bookmark:_Toc15988685"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  <p className="MsoNormal">
    <a name="_Hlk524987905">
      <span style={{ color: "#9FB8FF" }}>&nbsp;</span>
    </a>
  </p>
  <p className="MsoNormal">
    The basis rate is a transfer between short and long, and so does not
    represent a fee to the oracle or LP, but rather, it reflects the equilibrium
    demand for long short and long asset exposure.
  </p>
  <p className="MsoNormal">
    The <i>basis</i> is the difference between a forward and spot price and is
    defined as the difference between the spot or cash price and the futures
    price. Alas, while most references define the basis as <i>spot future</i>,
    and some use <i>futures spot</i>; it does not matter as long as you are
    consistent. It comes from the basic equation relating the basis to funding
    rates is based on arbitrage. Say you own USD. You can invest in US
    Treasuries and get the US interest rate return, 1+
    <i>
      r<sub>us</sub>
    </i>
    Alternatively, you can buy currency in country A, earn A's interest rate{" "}
    <i>
      r<sub>A</sub>
    </i>
    , and then convert this back into USD at a current forward or futures price
    (these interest rates and futures prices refer to the same duration, so that
    a futures price in 6 months would use the 6-month interest rates, etc.).
    This generates the following arbitrage condition:
  </p>
  <p className="MsoNormal" align="center" style={{ textAlign: "center" }}>
    <span style={{ color: "#9FB8FF" }}>
      1 + r<sub>US</sub> = 1/S<sub>0</sub>&#8729;(1+r<sub>A</sub>)&#8729;F
      <sub>1</sub>
    </span>
  </p>
  <p className="MsoNormal">
    Here <i>S</i>
    <sub>0</sub> is the current spot price of currency A, in USD per A.{" "}
    <i>
      F<sub>1</sub>
    </i>{" "}
    is the forward price of currency A. Rearranging we get
  </p>
  <p className="MsoNormal" align="center" style={{ textAlign: "center" }}>
    <span style={{ color: "#9FB8FF" }}>
      ln(F<sub>1</sub>)&#8210; ln(S<sub>0</sub>) = r<sub>US</sub> &#8210; r
      <sub>A</sub>= basis
    </span>
  </p>
  <p className="MsoNormal">
    This equation is called <i>covered interest rate parity</i> and matches
    forward currency prices and interest rates very well due to arbitrage in
    these liquid markets. There are specific pages in Bloomberg that show libor
    and forward currency prices, and they are always an almost exact identity.
    Without a futures price, a swap referencing a cash (aka spot) price accounts
    for these costs via explicit funding rates. We can rewrite this formula to
    apply to a contract that uses only spot prices as follows:
  </p>
  <p className="MsoNormal" align="center" style={{ textAlign: "center" }}>
    <span style={{ color: "#9FB8FF" }}>
      Swap Long Return = (CashPrice<sub>1</sub>/CashPrice<sub>0</sub>&#8210; 1
      &#8210; Basis)
    </span>
  </p>
  <p className="MsoNormal">
    Based on interest rates and dividends, the basis for the ETH and BTC
    contracts should be like that for gold, in the gold does not generate an
    interest rate while saving in USD does. Gold's basis is the USD interest
    rate for USD gold futures. Therefore, the long positions in ETH and BTC
    should pay 1.5% while the shorts would receive 1.5%. For the SPX, we must
    consider the dividend on stock, which at around 1.8%, is about the US
    interest rate, resulting in a long funding rate of near 0% for the SPX.{" "}
  </p>
  <p className="MsoNormal">
    For many assets, especially commodities, interest rates and dividends are of
    less importance in determining the basis. That is, the complete basis is
    comprised of the following factors:
  </p>
  <p className="MsoNormal" align="center" style={{ textAlign: "center" }}>
    <span style={{ color: "#9FB8FF" }}>
      Basis = interest rate + storage costs dividends convenience yield risk
      premium
    </span>
  </p>
  <p className="MsoNormal">
    Storage costs include insurance or the cost of decay of agriculture
    commodities. Convenience yield refers to the benefit of being the owner when
    there are occasional shortages that cause price spikes, or the benefit of
    using the good as collateral or a means of payment (and thus, T-bills have
    an excellent convenience yield). The risk premium is a term for everything
    else, but reflecting the fear of some catastrophe such as the possibility of
    a war stopping oil supplies, or that a particular country will decide to
    devalue their currency. As the convenience yield and risk premium are not as
    explicitly measured, issues related to convenience yield are sometimes
    conflated with the risk premium and vice versa.
  </p>
  <p className="MsoNormal">
    A commodity like oil has periods where the basis is significantly negative
    or positive, while the gold basis is entirely explained by the nominal
    interest rate. One could say that oil has a highly volatile risk premium,
    but one could also point to more prosaic explanations, such optimism among
    the futures traders. The bottom line is that outside of interest rates and
    dividends, the basis is affected by subjective issues that are difficult to
    quantify but do not constitute arbitrage.
  </p>
  <p className="MsoNormal">
    Basis rates are like interest rates, in that they are strongly
    autocorrelated. A futures basis does not whip around nearly as much as the
    spot price, but rather will tend to be positive or negative for several
    months. The highly volatile basis we see at BitMEX reflects the unique
    market there that precludes arbitrage with cash exchanges, and also allows
    BitMEX to game their basis to maximize revenue. Optimism and pessimism
    should have a first-order impact on the price, not the basis. An equilibrium
    basis of +10% will be around +10% for the next week, just as in an interest
    rate.
  </p>
  <h2
    style="margin-top:14.95pt;margin-right:0in;margin-bottom:14.95pt;
margin-left:.5in;page-break-after:auto"
  >
    <a name="_Toc15988686"></a>
    <a name="_Toc26445306"></a>
    <span style="mso-bookmark:_Toc15988686">
      <span style='mso-fareast-font-family:"Times New Roman";color:#B3C7FF'>
        2.4 Implicit Collar Cost of PNL Caps
      </span>
    </span>
    <span style="mso-bookmark:_Toc15988686"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  <p className="MsoNormal">
    The Leverage Ratios imply that the RM will cover and approximate 3-standard
    deviation event given the notional. For example, an asset with a 100%
    annualized volatility has a 14% weekly volatility. Thus a 3
  </p>
  <span style="font-family:Symbol;color:#9FB8FF">s</span>
  <span style={{ color: "#9FB8FF" }}>
    {" "}
    move is around 42%, so a notional position of 100 with margin covering a 3
  </span>
  <span style="font-family:Symbol;color:#9FB8FF">s</span>
  <span style={{ color: "#9FB8FF" }}>
    {" "}
    event has a margin of 42, implying a Leverage Ratio of 2.4. Note that this
    implies the expected cashflow&#8212;debit or credit&#8212;will be around 1/3
    of the RM, and investors should anticipate this accordingly (i.e., weekly
    volatility is about 33% of RM for all assets). The current volatilities for
    ETH and BTC are around 70%, so the leverage ratios of 2.5 are conservative
    as a forward-looking estimate of margin coverage.{" "}
  </span>
  <p className="MsoNormal">
    Eliminating all cases where a PNL is truncated requires excessive margin,
    which is costly, but a margin too small would not meaningfully replicate a
    true long/short exposure. As with most things, you can get most of the
    benefits at a fraction of the cost if you tolerate some imperfection.
  </p>
  <p className="MsoNormal">
    The RM cap on PNL generates an implicit sort of <i>collar</i>, which for the
    long is a portfolio short an out-of-the-money call and long an
    out-of-the-money put. The short's collar value is just the opposite as this
    is a bilateral contract, so the short is then long the call and short the
    put. If the collar is worth 1% annualized to the long, it is worth&#8210;1%
    to the short.{" "}
  </p>
  <p className="MsoNormal">
    In backtests from March 2016 through October 2019, using our leverage values
    of 2.5 for crypto and 10 for the SPX, in only 2 out of 570 weeks was the PNL
    outside the RM. The PNL breaches of the RM caps for the ETH were in the
    spring of 2017 when its USD price was up 105% and 110% in two separate
    weeks.{" "}
  </p>
  <p className="MsoNormal">
    Volatility was unusually high in March 2017, over twice as high as the
    current 50% annualized vol for at-the-money bitcoin options on Deribit. That
    bubble, based on token issuance, was unique. It is reasonable to discount
    this sort of volatility going forward.
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
      The interesting point here is the unusual nature of an upside truncation
      in this sample period. Consider the ETH PNL in OracleSwap. For the ETH
      contract, if we ignore the funding rate, the PNL translates to:
    </span>
  </p>
  <p className="MsoNormal" align="center" style={{ textAlign: "center" }}>
    <span style={{ color: "#9FB8FF" }}>
      PNL(ETH) = Notional(ETH) &#8729; ret(ETH)/(1 + ret(ETH))
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
      For the contract referencing ETH's USD price, an asymmetry comes from the
      fact that when the ETH loses 33% of its value, the long now also owes 50%
      more ETH because the USD payout is denominated in ETH. Given a leverage
      ratio of 2.5, the RM cap is hit when the ETH value falls by 28.6% (2/7) or
      rises by 66% (2/3). While this may seem strange, the target is the USD
      return, and indeed the return in USD is linear in the USD Price change,
      while it is concave for the ETH return as a percent of ETH notional. A
      decline in ETH price means that to pay the same amount of USD back, you
      must provide more ETH, so the ETH return is exaggerated on the downside.
      On the upside, a higher ETH price generating a profit means you need to
      provide fewer ETH for a target USD payment, implying a lower ETH return.
      This generates the following concave relation:
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <b>
      <span style="font-size:12.0pt;line-height:106%;color:#9FB8FF">
        Figure 3
      </span>
    </b>
  </p>
  <p className="MsoNormal" align="center" style={{ textAlign: "center" }}>
    <span style="color:#9FB8FF;mso-no-proof:yes">
      <img
        border="0"
        width="383"
        height="229"
        id="_x0000_i1040"
        src="TA_files/image008.png"
      ></img>
    </span>
  </p>
  <p className="MsoNormal">
    Using conservative volatility and correlation assumptions, we can create a
    forward-looking estimate of collar costs. We generated 100,000 simulations
    using volatilities assumptions of 70% and 100% annualized for the BTC and
    ETH, respectively. We assumed a mean return of 0% and that the returns have
    lognormal distributions. The correlation assumption between the BTC with the
    ETH was 0.9.{" "}
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
      Table 1 shows that contrary to the 2016-9 sample period, the long should
      anticipate a benefit, but only by at most 0.4% annually.{" "}
    </span>
  </p>
  <p className="MsoNormal" align="center" style={{ textAlign: "center" }}>
    <b>
      <span style="font-size:12.0pt;line-height:106%;color:#9FB8FF">
        Table 1
      </span>
    </b>
  </p>
  <p className="MsoNormal" align="center" style={{ textAlign: "center" }}>
    <b>
      <span style="font-size:12.0pt;line-height:106%;color:#9FB8FF">
        Monte Carlo Estimates of Collar Value
      </span>
    </b>
  </p>
  <p className="MsoNormal" align="center" style={{ textAlign: "center" }}>
    <span style={{ color: "#9FB8FF" }}>
      Annualized valuation as a percent of notional
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center;line-height:115%;tab-stops:2.5in 3.5in"
  >
    <u>
      <span style={{ color: "#9FB8FF" }}>
        BTC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ETH
      </span>
    </u>
  </p>
  <p
    className="MsoListParagraph"
    align="center"
    style="margin-left:0in;text-align:center;
line-height:115%;tab-stops:3.5in"
  >
    <span style={{ color: "#9FB8FF" }}>
      0.11%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.36%
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:63.0pt;margin-bottom:
8.0pt;margin-left:.5in;text-align:justify"
  >
    <span
      style="font-size:10.0pt;
line-height:106%;color:#9FB8FF"
    >
      We generated 100,000 simulations using volatilities assumptions of 70% and
      100% annualized for the BTC and ETH, respectively. Leverage ratios for
      these contracts were 2.5. We assumed a mean return of 0%, and that the
      returns have lognormal distributions. The correlation assumption between
      the BTC and ETH is assumed to be 0.9.{" "}
    </span>
  </p>
  <p className="MsoNormal">
    For the SPX we have data going back to 1950, and there are only 7 weekly
    returns greater than 10% in absolute value (an LR=10 implies a 10% RM cap).
    Only two of them were above 11%, both declines by 15% (in October 1987 and
    October 2008). A Monte Carlo simulation of correlated ETH returns (0.2 with
    the SPX) does not add any significant information, in that we basically have
    two 5% truncations to the short's PNL, and this generates a long collar
    value estimate of +0.25% (~25% over 69 years). Note that since we have data
    on ETH, stock volatility has been below average, so while we have not come
    close to breaching the RM on our 10x leveraged contract, we want a contract
    that is robust to the inevitable above-average volatility periods.
  </p>
  <p className="MsoNormal">
    In sum, the value to the long from these collars is well under 0.4%
    annually. In the context of bitcoin funding rates averaging 10% for bitcoin
    on BitMEX, with monthly averages ranging from +100% to&#8210;50%, any
    explicit adjustment for the effect of the RM cap on PNL is a distraction.
    The long collar value within this contract is two orders of magnitude less
    important than the risk premium driving the equilibrium differential in long
    and short funding rates. It is for this reason PNL caps are not economically
    relevant as a practical matter.{" "}
  </p>
  <h1>
    <a name="_Toc26445307"></a>
    <a name="_Toc15988687"></a>
    <span style="mso-bookmark:_Toc26445307">
      <span style={{ msoFareastFontFamily: "Times New Roman" }}>
        3 Position Management
      </span>
    </span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h1>
  &nbsp;
  <h2>
    <a name="_Toc26445308">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        3.1 Weekly PNL and Settlement
      </span>
    </a>
    <span
      style="mso-bookmark:
_Toc26445308"
    ></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    Settlement transfers the week's PNL between counterparty margins as follows:
  </p>
  <p className="MsoNormal" style="text-indent:.5in">
    <span style={{ color: "#9FB8FF" }}>
      Investor[j] Margin<sub>1</sub> = Investor[j] Margin<sub>0</sub> +
      min(RM,max(-RM,PNL[j]))
    </span>
  </p>
  <p className="MsoNormal" style="text-indent:.5in">
    <span style={{ color: "#9FB8FF" }}>
      LPMargin<sub>1</sub>= LPMargin<sub>0</sub> &#8210; &#8721;{" "}
      <sub>(j=1 to J)</sub> PNL[j]
    </span>
  </p>
  <p className="MsoNormal">
    Here the min/max function is the collar on the PNL in that RM is the maximum
    credited or debited for any subcontract. Note the sum of the investor PNL is
    debited from the LP so that total ETH in the contract is not affected by the
    settlement, just its attribution via the various player margins. There is an
    additional issue related to the burn discussed in section 6.3, but that will
    be rare (if frequent, no one would use this contract), and is not addressed
    here.
  </p>
  <p className="MsoNormal">
    Players can add to their margin at any time. Payments are immediately
    credited to the player's margin within the book contract. Players cannot
    withdraw or cancel during the period between the Oracle settlement update
    and the LP's book settlement.
  </p>
  <p className="MsoNormal">
    A player will know exactly what their PNL will be given the Oracle Price
    Contract update around 4:15 PM, though they should have a reasonable
    estimate earlier in the day. Any player who anticipates their current
    margin, after the PNL is applied, will be below their Required Margin,
    should cure their position by sending ETH to their margin to avoid default.
    Cancels will be known with certainty after 4:15 PM, allowing LPs to
    anticipate their effect on their net RM; defaults, however, are less certain
    because the player could cure at any time.
  </p>
  <p className="MsoNormal">
    During the settlement function execution, each taker is evaluated for having
    a total margin &gt; RM for their subcontract after the PNL debit/credit. If
    a player's total margin is less than their required margin upon settlement
    they default and a default flag is set so that at redemption, 50% of their
    RM is debited from the taker's account. The subcontract is immediately
    terminated, removed from the LP's RM calculation, and can never be processed
    at settlement again.
  </p>
  <p className="MsoNormal">
    The settlement function is restricted only to occur at least 24 hours after
    the Oracle settlement. An LP should be sure to settle between 24 and 48
    hours after this time. However, anyone can run it, and once executed in the
    settlement period, it cannot be rerun until the next Oracle settlement
    update, so allowing anyone to pay gas to do this is harmless.{" "}
  </p>
  <p className="MsoNormal">
    If the settlement functions are not completed within 48 hours of the Oracle
    settlement update, any taker who executes the 'inactive LP' function gets
    the LP's default fee of their RM (if the LP has less than that in their
    margin, they will pay whatever they have).{" "}
  </p>
  <p className="MsoNormal">
    Weekly settlement periodicity is the point of moderation between two
    extremes. If one created a trade that settled in six months, the margin
    would have to be five times larger to handle the greater expected price
    variability. The strategy would also then be more like a one-period game,
    not a repeated one because there would be many fewer future periods in
    oracle's cheat calculus. If the contract had a daily or intraday settlement,
    this would require daily attention by investors, and more gas used for
    margin cures and running the settlement functions.{" "}
  </p>
  <p className="MsoNormal">
    Real-time margining would add the cost from having to audit prices referring
    to odd times, including checking for the absence of price updates when there
    were large spikes. More importantly, the infrastructure needed to provide
    real-time pricing is orders of magnitude greater than that required for
    daily pricing.{" "}
  </p>
  <h2>
    <a name="_Toc26445309">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        3.2 LP Management
      </span>
    </a>
    <span style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}>
      {" "}
    </span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
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
      LP revenue comes via the funding rate that is part of the PNL, and also
      the closing fee payment. LP closing fee revenue gets attributed to the
      LP's margin account.{" "}
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
      At settlement, an LPs net margin is recalculated as:
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style="margin-top:12.0pt;margin-right:0in;
margin-bottom:12.0pt;margin-left:0in;text-align:center;text-indent:.5in"
  >
    <span style={{ color: "#9FB8FF" }}>
      LP RM &#61; Net Margin &#61; abs(long RM&#8210; short RM)
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
      Within any week, the intraweek LP RM calculation are simply additive: each
      new position is not netted.{" "}
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
    <a name="_Hlk13494273">
      <span style={{ color: "#9FB8FF" }}>
        LP's are protected from getting too unbalanced in that takers cannot
        take positions that push an LP's book beyond 50% of her total offered
        amount. Specifically, the rule is:
      </span>
    </a>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center"
  >
    <span style={{ color: "#9FB8FF" }}>
      Max Short Take = Max 0, &frac12; Total LP Margin + LPShort &#8210; LPLong
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center"
  >
    <span style={{ color: "#9FB8FF" }}>
      Max Long Take = Max 0, &frac12; Total LP Margin + LPLong &#8210; LPShort
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style="margin-bottom:0in;margin-bottom:.0001pt;
text-align:center"
  >
    <span style={{ color: "#9FB8FF" }}>&nbsp;</span>
  </p>
  <p className="MsoNormal">Table 2 gives examples</p>
  <p className="MsoNormal" align="center" style={{ textAlign: "center" }}>
    <b>
      <span style="font-size:12.0pt;line-height:106%;color:#9FB8FF">
        Table 2
      </span>
    </b>
  </p>
  <p className="MsoNormal" align="center" style={{ textAlign: "center" }}>
    <b>
      <span style="font-size:12.0pt;line-height:106%;color:#9FB8FF">
        Maximum Taker Amounts as a Function on an LP's Book
      </span>
    </b>
  </p>
  <div align="center">
    <table
      className="MsoNormal"
      Table
      border="0"
      cellspacing="0"
      cellpadding="0"
      width="557"
      style="width:418.0pt;border-collapse:collapse;mso-yfti-tbllook:1184;
 mso-padding-alt:0in 0in 0in 0in"
    >
      <tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes;height:15.0pt">
        <td
          width="93"
          nowrap
          valign="bottom"
          style="width:70.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <a name="_Hlk25927064">
              <b>
                <span style={{ color: "#9FB8FF" }}>Long Takers</span>
              </b>
            </a>
          </p>
        </td>
        <td
          width="93"
          nowrap
          valign="bottom"
          style="width:70.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <b>
              <span style={{ color: "#9FB8FF" }}>Short Takers</span>
            </b>
          </p>
        </td>
        <td
          width="80"
          nowrap
          valign="bottom"
          style="width:60.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <b>
              <span style={{ color: "#9FB8FF" }}>LP Margin</span>
            </b>
          </p>
        </td>
        <td
          width="73"
          nowrap
          valign="bottom"
          style="width:55.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <b>
              <span style={{ color: "#9FB8FF" }}>LP's RM</span>
            </b>
          </p>
        </td>
        <td
          width="107"
          nowrap
          valign="bottom"
          style="width:80.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <b>
              <span style={{ color: "#9FB8FF" }}>MaxLong Take</span>
            </b>
          </p>
        </td>
        <td
          width="111"
          nowrap
          valign="bottom"
          style="width:83.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <b>
              <span style={{ color: "#9FB8FF" }}>MaxShort Take</span>
            </b>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:1;height:15.0pt">
        <td
          width="93"
          nowrap
          valign="bottom"
          style="width:70.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>0</span>
          </p>
        </td>
        <td
          width="93"
          nowrap
          valign="bottom"
          style="width:70.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>0</span>
          </p>
        </td>
        <td
          width="80"
          nowrap
          valign="bottom"
          style="width:60.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>100</span>
          </p>
        </td>
        <td
          width="73"
          nowrap
          valign="bottom"
          style="width:55.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>0</span>
          </p>
        </td>
        <td
          width="107"
          nowrap
          valign="bottom"
          style="width:80.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>50</span>
          </p>
        </td>
        <td
          width="111"
          nowrap
          valign="bottom"
          style="width:83.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>50</span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:2;height:15.0pt">
        <td
          width="93"
          nowrap
          valign="bottom"
          style="width:70.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>50</span>
          </p>
        </td>
        <td
          width="93"
          nowrap
          valign="bottom"
          style="width:70.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>0</span>
          </p>
        </td>
        <td
          width="80"
          nowrap
          valign="bottom"
          style="width:60.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>100</span>
          </p>
        </td>
        <td
          width="73"
          nowrap
          valign="bottom"
          style="width:55.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>50</span>
          </p>
        </td>
        <td
          width="107"
          nowrap
          valign="bottom"
          style="width:80.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>0</span>
          </p>
        </td>
        <td
          width="111"
          nowrap
          valign="bottom"
          style="width:83.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>100</span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:3;height:15.0pt">
        <td
          width="93"
          nowrap
          valign="bottom"
          style="width:70.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>100</span>
          </p>
        </td>
        <td
          width="93"
          nowrap
          valign="bottom"
          style="width:70.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>0</span>
          </p>
        </td>
        <td
          width="80"
          nowrap
          valign="bottom"
          style="width:60.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>100</span>
          </p>
        </td>
        <td
          width="73"
          nowrap
          valign="bottom"
          style="width:55.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>100</span>
          </p>
        </td>
        <td
          width="107"
          nowrap
          valign="bottom"
          style="width:80.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>0</span>
          </p>
        </td>
        <td
          width="111"
          nowrap
          valign="bottom"
          style="width:83.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>150</span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:4;height:15.0pt">
        <td
          width="93"
          nowrap
          valign="bottom"
          style="width:70.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>0</span>
          </p>
        </td>
        <td
          width="93"
          nowrap
          valign="bottom"
          style="width:70.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>50</span>
          </p>
        </td>
        <td
          width="80"
          nowrap
          valign="bottom"
          style="width:60.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>100</span>
          </p>
        </td>
        <td
          width="73"
          nowrap
          valign="bottom"
          style="width:55.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>50</span>
          </p>
        </td>
        <td
          width="107"
          nowrap
          valign="bottom"
          style="width:80.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>100</span>
          </p>
        </td>
        <td
          width="111"
          nowrap
          valign="bottom"
          style="width:83.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>0</span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:5;height:15.0pt">
        <td
          width="93"
          nowrap
          valign="bottom"
          style="width:70.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>50</span>
          </p>
        </td>
        <td
          width="93"
          nowrap
          valign="bottom"
          style="width:70.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>50</span>
          </p>
        </td>
        <td
          width="80"
          nowrap
          valign="bottom"
          style="width:60.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>100</span>
          </p>
        </td>
        <td
          width="73"
          nowrap
          valign="bottom"
          style="width:55.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>0</span>
          </p>
        </td>
        <td
          width="107"
          nowrap
          valign="bottom"
          style="width:80.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>50</span>
          </p>
        </td>
        <td
          width="111"
          nowrap
          valign="bottom"
          style="width:83.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>50</span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:6;height:15.0pt">
        <td
          width="93"
          nowrap
          valign="bottom"
          style="width:70.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>50</span>
          </p>
        </td>
        <td
          width="93"
          nowrap
          valign="bottom"
          style="width:70.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>50</span>
          </p>
        </td>
        <td
          width="80"
          nowrap
          valign="bottom"
          style="width:60.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>100</span>
          </p>
        </td>
        <td
          width="73"
          nowrap
          valign="bottom"
          style="width:55.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>0</span>
          </p>
        </td>
        <td
          width="107"
          nowrap
          valign="bottom"
          style="width:80.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>50</span>
          </p>
        </td>
        <td
          width="111"
          nowrap
          valign="bottom"
          style="width:83.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>50</span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:7;height:15.0pt">
        <td
          width="93"
          nowrap
          valign="bottom"
          style="width:70.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>0</span>
          </p>
        </td>
        <td
          width="93"
          nowrap
          valign="bottom"
          style="width:70.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>100</span>
          </p>
        </td>
        <td
          width="80"
          nowrap
          valign="bottom"
          style="width:60.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>100</span>
          </p>
        </td>
        <td
          width="73"
          nowrap
          valign="bottom"
          style="width:55.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>100</span>
          </p>
        </td>
        <td
          width="107"
          nowrap
          valign="bottom"
          style="width:80.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>150</span>
          </p>
        </td>
        <td
          width="111"
          nowrap
          valign="bottom"
          style="width:83.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>0</span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:8;height:15.0pt">
        <td
          width="93"
          nowrap
          valign="bottom"
          style="width:70.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>50</span>
          </p>
        </td>
        <td
          width="93"
          nowrap
          valign="bottom"
          style="width:70.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>100</span>
          </p>
        </td>
        <td
          width="80"
          nowrap
          valign="bottom"
          style="width:60.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>100</span>
          </p>
        </td>
        <td
          width="73"
          nowrap
          valign="bottom"
          style="width:55.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>50</span>
          </p>
        </td>
        <td
          width="107"
          nowrap
          valign="bottom"
          style="width:80.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>100</span>
          </p>
        </td>
        <td
          width="111"
          nowrap
          valign="bottom"
          style="width:83.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>0</span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:9;mso-yfti-lastrow:yes;height:15.0pt">
        <td
          width="93"
          nowrap
          valign="bottom"
          style="width:70.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>100</span>
          </p>
        </td>
        <td
          width="93"
          nowrap
          valign="bottom"
          style="width:70.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>100</span>
          </p>
        </td>
        <td
          width="80"
          nowrap
          valign="bottom"
          style="width:60.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>100</span>
          </p>
        </td>
        <td
          width="73"
          nowrap
          valign="bottom"
          style="width:55.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>0</span>
          </p>
        </td>
        <td
          width="107"
          nowrap
          valign="bottom"
          style="width:80.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>50</span>
          </p>
        </td>
        <td
          width="111"
          nowrap
          valign="bottom"
          style="width:83.0pt;padding:0in 5.4pt 0in 5.4pt;
  height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>50</span>
          </p>
        </td>
      </tr>
    </table>
  </div>
  <p className="MsoNormal">
    <b>
      <span style={{ color: "#9FB8FF" }}>&nbsp;</span>
    </b>
  </p>
  <p className="MsoNormal">
    <a name="_Hlk17982857">
      <span style={{ color: "#9FB8FF" }}>
        An LP should assess their book for potential defaults and assume the
        worst-case scenario for settlement. For example, if there are only 3
        hours left until the LP can run the settlement function, a prudent LP
        should assume all potential defaults that lower their RM will not occur,
        while all defaults that increase their net RM will occur
      </span>
    </a>
    <span style={{ color: "#9FB8FF" }}>.</span>
  </p>
  <p className="MsoNormal">
    Takes are not allowed during the settlement period so that LPs will have a
    better estimate of their Required Margin.{" "}
  </p>
  <p className="MsoNormal">
    Anyone can settle an LPs book because the settlement can only happen once a
    week, and if someone wants to pay gas to do this, an LP is strictly better
    off. LPs should take responsibility for settlement, as a failure to settle
    on settlement day will prevent settlement for another week. If a settlement
    is missed because the Oracle was inactive and never posted settlement
    prices, any player in the LPs book can execute the inactive function, which
    allows all players to redeem their subcontracts and withdraw their entire
    margin (i.e., if the book was not settled, and it has been at least 48 hours
    since the last Oracle settlement update). If the Oracle was active, and no
    one settled the LP's book on settlement day, the first taker to execute the
    inactiveLP function will get the LP's default fee as a reward.{" "}
  </p>
  <p className="MsoNormal">
    Book settlement involves three separate functions: the first is for the
    taker long positions, the second for the shorts, and finally, for the LP's
    margin adjustment and check of LP margin adequacy. These must be run in
    succession. See section 8 below.
  </p>
  <h2>
    <a name="_Toc26445310">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        3.3 Monitoring and Punishing the Oracle
      </span>
    </a>
    <span style="mso-bookmark:_Toc26445310"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    <b>
      <span style={{ color: "#9FB8FF" }}>Settlement. </span>
    </b>
    <span style={{ color: "#9FB8FF" }}>
      Friday is the price settlement day, except for when Friday is a holiday as
      defined by the New York Stock Exchange, in which case it is Thursday
      (there are no two-day consecutive NYSE holidays). A counterparty can see
      if the current oracle prices are the settlement price by checking if
      'currentDay==5' in the oracle contract. They can also see if the next
      oracle update is the settlement price update by noting if the
      currentDay==4 or if 'nextUpdateSettle' is set to true.{" "}
    </span>
  </p>
  <p className="MsoNormal">
    The settlement period is from the time of the oracle settlement update
    through the book's settlement, a period of between 24 and 48 hours. No takes
    are allowed during the settlement period to make the LP's job of estimating
    their new net RM easier. No withdrawals are allowed so that a cheated
    player, with &gt;50% of their RM in excess margin, should burn rather than
    default because they will deprive the cheater of their money; if a player
    has enough margin to not default, a cheated player should burn because the
    cheating oracle will probably cheat him out of at least 50% of their
    remaining RM anyway (using common knowledge reasoning).{" "}
  </p>
  <p className="MsoNormal">
    <b>
      <span style={{ color: "#9FB8FF" }}>Burn</span>
    </b>
    <span style={{ color: "#9FB8FF" }}>
      . A burn should only be invoked if the Oracle prices look fraudulent, and
      one suspects one's counterparty is part of this conspiracy. For example,
      if a player&#8212;LP or Taker&#8212;is long, and the Oracle reports a
      reference asset price well below the 'true' price, it is reasonable to
      infer the Oracle is implementing an exit scam. In such a scenario, the
      long counterparty would be wise to burn to both inflict righteous justice
      and avoid exposing one's margin to another week with a cheating oracle.{" "}
    </span>
  </p>
  <p className="MsoNormal">
    This involves the payable burn function, where the player must send
    &frac12;&#8729;RM, which is effectively burned. The burn prevents that ETH
    from going to their counterparty, and like the payable amount is left in
    contract limbo, unobtainable by any party to the contract.{" "}
  </p>
  <p className="MsoNormal">
    For example, if one anticipates having 0.9 ETH in their margin after the
    PNL, and their RM is 1 ETH, if they pay the burn fee of 0.5 ETH they get
    their entire 0.9 ETH back. If they do not cure, they would only redeem 0.4
    ETH; the other 0.5 ETH would be effectively burned as a default penalty. In
    this way, a burn and default both cost the same. However, if they have been
    cheated, a user would prevent the cheater from getting their ETH via the PNL
    and also the the default fee. It generates a burn event log highlighting the
    oracle's bad behavior.{" "}
  </p>
  <p className="MsoNormal">
    Takers with less than 50% excess margin, who are cheated by their entire RM
    amount, will find defaulting cheaper than burning in that at default they
    are charged 50% of their RM. However, as MakerDAO highlights, most users
    overfund their margins to avoid having to take emergency measures to cure
    their margins and prevent default. Though we can only speculate, it is
    likely most users will also have overfunded margins, and find burning and
    defaulting equally costly, though with the burn benefit of preventing an
    objectively bad person from profiting at their expense.{" "}
  </p>
  <p className="MsoNormal">
    A fraudulent price would almost surely happen at the settlement update
    because a cheating oracle would gain nothing by posting fraudulent prices
    earlier, as this would only give its victims more time to react. Thus,
    settlement prices would be where we expect to see fraudulent prices. After
    settlement prices are updated, all parties have at least 24 hours to enact
    the burn function before the LP runs the settlement function on their book.
  </p>
  <p className="MsoNormal">
    <b>
      <span style={{ color: "#9FB8FF" }}>Inactive LP</span>
    </b>
    <span style={{ color: "#9FB8FF" }}>
      . If an LP neglects to settle, first, a taker must accept some
      responsibility in that anyone can settle an LP's book on settlement day
      from 4 PM Saturday to 4 PM Sunday. Yet it is ultimately the LP's
      responsibility, and so the LP bears a cost for their negligence. If the
      settlement period passes without a settlement (48 hours after the Oracle
      settlement update), the first taker to execute the inactiveLP function
      receives their RM from the LP's margin (if the LP has less than this in
      their margin, the taker receives whatever is there). The LP is also
      penalized any amount above that, an amount that is sent to a burn address.
      At that point, the book is in default, and all players can redeem their
      subcontracts and withdraw their margins.
    </span>
  </p>
  <p className="MsoNormal">
    <b>
      <span style={{ color: "#9FB8FF" }}>Inactive Oracle</span>
    </b>
    <span style={{ color: "#9FB8FF" }}>
      . After 9 days of there being no book settlement, and if there has been no
      Oracle settlement update after the previous book settlement, this implies
      the oracle is incapacitated. At such a time, any player can execute the
      inactive function and put the book into default, though there is no
      default fee because there is no way to charge the oracle. At this point,
      any taker can redeem their subcontract and withdraw their complete margin.
    </span>
  </p>
  <h2>
    <a name="_Toc26445311">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        3.4 Gas Costs
      </span>
    </a>
    <span style="mso-bookmark:_Toc26445311"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    The following are approximate gas costs for various functions
  </p>
  <p className="MsoNormal" style="margin-bottom:0in;margin-bottom:.0001pt">
    <span style={{ color: "#9FB8FF" }}>
      Create Book as new LP: 2400k, 2.8MM, $3
    </span>
  </p>
  <p className="MsoNormal" style="margin-bottom:0in;margin-bottom:.0001pt">
    <span style={{ color: "#9FB8FF" }}>
      Take a position as investor: 220k, $0.25
    </span>
  </p>
  <p className="MsoNormal" style="margin-bottom:0in;margin-bottom:.0001pt">
    <span style={{ color: "#9FB8FF" }}>Fund margin: 40k, $0.03</span>
  </p>
  <p className="MsoNormal" style="margin-bottom:0in;margin-bottom:.0001pt">
    <span style={{ color: "#9FB8FF" }}>Withdraw from margin: 70k, $0.06</span>
  </p>
  <p className="MsoNormal" style="margin-bottom:0in;margin-bottom:.0001pt">
    <span style={{ color: "#9FB8FF" }}>
      Withdraw from AssetSwap: 40k, $0.03
    </span>
  </p>
  <p className="MsoNormal" style="margin-bottom:0in;margin-bottom:.0001pt">
    <span style={{ color: "#9FB8FF" }}>Cancel subcontract: 150k, $0.13</span>
  </p>
  <p className="MsoNormal" style="margin-bottom:0in;margin-bottom:.0001pt">
    <span style={{ color: "#9FB8FF" }}>Settlement:</span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>fixed cost: 100k, $0.09</span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      new takers: 20k per subcontract, 26k if default, $0.02
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      cancels: 25k per subcontract, $0.02
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      rollovers: 13k per subcontract, 15k if default, $0.01
    </span>
  </p>
  <p className="MsoNormal" style="margin-left:.5in">
    <span style={{ color: "#9FB8FF" }}>final: 40k, $0.03</span>
  </p>
  &nbsp;
  <h1>
    <a name="_Toc15988688"></a>
    <a name="_Toc26445312"></a>
    <span style="mso-bookmark:_Toc15988688">
      <span style={{ msoFareastFontFamily: "Times New Roman" }}>
        4 Liquidity Provider (LP) Risk and Return
      </span>
    </span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
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
    <span style={{ color: "#9FB8FF" }}>
      The risk for an LP comes from her net exposure, which will be randomly
      sided as LPs post two-sided offers at a singular forward price. This
      causes such net positions to be uncorrelated with any other asset. More
      formally, Cov(<i>x</i>,<i>Ax</i>)=0 if <i>x</i> is a random variable, and{" "}
      <i>A</i> is a random variable with equal probability of being +1 or
      &#8209;1. This independence simplifies the analysis because we need only
      anticipate volatility and not correlation in estimating portfolio risk.{" "}
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
      For this example, we will assume the average funding rate is 8%, and the
      LP closing fee revenue is 3% of notional, for a total of 11%. Consider
      Alice, aka The Whale, has 100 ETH currently. We will assume the expected
      return for all assets is 0%, as we want to see the value of becoming an LP
      via its fees and target rate vs. its incremental risk, irrespective of any
      expectations about asset price movements. She contemplates allocating 25%
      of her ETH towards being an LP in the BTC contract. She expects her book
      to average a gross/net RM of 5:1.
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <b>
      <span style="font-size:12.0pt;line-height:106%;color:#9FB8FF">
        Table 3
      </span>
    </b>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <b>
      <span style="font-size:12.0pt;line-height:106%;color:#9FB8FF">
        Current Portfolio and Portfolio with a 25% Allocation to OracleSwap
      </span>
    </b>{" "}
  </p>
  <div align="center">
    <table
      className="MsoNormal"
      Table
      border="0"
      cellspacing="0"
      cellpadding="0"
      style="mso-cellspacing:0in;mso-yfti-tbllook:1184;mso-padding-alt:0in 0in 0in 0in"
    >
      <tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
        <td width="57" style="width:42.75pt;padding:0in 0in 0in 0in"></td>
      </tr>
      <tr style="mso-yfti-irow:1;mso-yfti-lastrow:yes">
        <td style="padding:0in 0in 0in 0in"></td>
        <td style="padding:0in 0in 0in 0in">
          <p
            className="MsoNormal"
            align="center"
            style={{ textAlign: "center" }}
          >
            <span
              style='font-size:12.0pt;line-height:106%;mso-fareast-font-family:"Times New Roman";
  mso-no-proof:yes'
            >
              <img
                border="0"
                width="544"
                height="139"
                id="_x0000_i1039"
                src="TA_files/image010.png"
                alt="	Current Portfolio	Portfolio with LP Allocation&#13;&#10;	100 ETH	75 ETH in Excess Margin&#13;&#10;		25 ETH in Required Margin as BTC LP&#13;&#10;		For example:&#13;&#10;		75 ETH RM long/50 ETH RM short&#13;&#10;		or&#13;&#10;		50 ETH RM long/75 ETH RM short&#13;&#10;"
              ></img>
            </span>
            <span style='font-size:12.0pt;line-height:106%;mso-fareast-font-family:"Times New Roman"'></span>
          </p>
        </td>
      </tr>
    </table>
  </div>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <br clear="all" style="mso-special-character:line-break" />
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
      The Whale's BTC position has a net RM of 25 ETH. This RM supports a net
      position long or short, but it also is subject to ETH value fluctuation as
      if it were still considered part of her initial ETH investment portfolio.
      The Whale's ETH risk is unchanged.{" "}
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
      The net position it generates is a marginal risk. Given leverage of 2.5,
      an ETH price of $200, this 25 ETH supports $12,500 worth of a net long or
      short. Given the zero correlation of the randomly sided BTC exposure with
      her ETH position, we can ignore the covariance term in calculating her
      portfolio variance. That is, as the Whale can be either long or short, the
      raw correlation between her asset position and ETH is zero regardless of
      the correlation between that asset and ETH (even the case where the asset
      is ETH itself). Given an annualized volatility of 70% for the ETH and BTC,
      the USD volatility of these two positions are
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <b>
      <span style="font-size:12.0pt;line-height:106%;color:#9FB8FF">
        Table 4
      </span>
    </b>
  </p>
  <div align="center">
    <table
      className="MsoNormal"
      Table
      border="0"
      cellspacing="0"
      cellpadding="0"
      style="mso-cellspacing:0in;mso-yfti-tbllook:1184;mso-padding-alt:0in 0in 0in 0in"
    >
      <tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
        <td width="64" style="width:48.0pt;padding:0in 0in 0in 0in"></td>
      </tr>
      <tr style="mso-yfti-irow:1;mso-yfti-lastrow:yes">
        <td style="padding:0in 0in 0in 0in"></td>
        <td style="padding:0in 0in 0in 0in">
          <p
            className="MsoNormal"
            align="center"
            style={{ textAlign: "center" }}
          >
            <span
              style='font-size:12.0pt;line-height:106%;mso-fareast-font-family:"Times New Roman";
  mso-no-proof:yes'
            >
              <img
                border="0"
                width="497"
                height="72"
                id="_x0000_i1038"
                src="TA_files/image011.png"
                alt="	Current Portfolio	Portfolio with LP Allocation&#13;&#10;	$20,000&#8729;0.7 or	\sqrt{{0.7}^2\times{20000}^2+{0.7}^2\times{12500}^2}&#13;&#10;	$14,000	$16,509&#13;&#10;"
              ></img>
              <span style='font-size:12.0pt;line-height:106%;mso-fareast-font-family:"Times New Roman"'></span>
            </span>
          </p>
        </td>
      </tr>
    </table>
  </div>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <br clear="all" />
    <b>
      <span style="font-size:12.0pt;line-height:106%;color:#9FB8FF">
        Portfolios with Annualized USD Volatility
      </span>
    </b>
  </p>
  <p className="MsoNormal">
    The Whale's total risk only rises by $2,509 by allocating 25% of her ETH to
    becoming an LP, much less than the $8,750 in risk generated by a $12,500
    position considered by itself (her net BTC exposure).{" "}
  </p>
  <p className="MsoNormal">
    Her 25 ETH supports 125 ETH in total book RM due to cross-margining (e.g.,
    75 long/50 short). Given a funding rate and closing fee revenue of 11%, a
    funding rate of 8%, and an extra 3% via her take of closing fees, this
    generates a $6,875 annual revenue. Her marginal Sharpe ratio is thus
    $6875/$2509=2.74. Note the Sharpe and returns are all invariant to the price
    of ETH or BTC, in that if the ETH price were initially $100 or $400, this
    would increase the initial and ending values by the same proportion.
  </p>
  <p className="MsoNormal">
    The general formula for looking at an ETH whale's marginal risk is simply
    the difference between the portfolio with the allocation to the OracleSwap
    compared to her original ETH position:{" "}
  </p>
  <p className="MsoNormal" align="center" style={{ textAlign: "center" }}>
    <span style='mso-fareast-font-family:"Times New Roman";color:#9FB8FF'>
      Marginal Volatility = sqrt(EthVol<sup>2</sup> + (AssetVol<sup> </sup>
      &#8729; w &#8729; LevRatio)<sup>2</sup>) &#8210; EthVol
    </span>
  </p>
  <p className="MsoNormal">Here </p>
  <span style="font-family:Symbol;color:#9FB8FF">s</span>
  <sub>
    <span style={{ color: "#9FB8FF" }}>ETH</span>
  </sub>
  <span style={{ color: "#9FB8FF" }}>
    {" "}
    is the volatility of one's ETH holdings, and <i>w</i>
    the percent allocation of that to an LP contract <i>k</i>, which has a
    specific leverage ratio (LR<sub>k</sub>) and volatility (
  </span>
  <span
    style="font-family:
Symbol;color:#9FB8FF"
  >
    s
  </span>
  <sub>
    <span style={{ color: "#9FB8FF" }}>k</span>
  </sub>
  <span style={{ color: "#9FB8FF" }}>
    ). The initial ETH risk is unaffected by <i>w</i> because the net ETH
    position is unchanged by becoming an LP as some of her ETH has moved to the
    OracleSwap contract to act as margin and its USD fluctuation is the same as
    before. The diversification effect of idiosyncratic risk generates a
    nonlinear effect where allocating 25% of one's ETH to the OracleSwap
    generates less incremental volatility than when considered by itself.{" "}
  </span>
  <p className="MsoNormal">
    The return will be a function of the Gross/Net margin, in that, an LP can
    have 20 ETH in their margin to support a book that is long/short various
    amounts: 20/0, 60/40, or 120/100. These generate the same amount of risk,
    yet the higher gross margins generate more revenue via the higher
    outstanding gross notional.{" "}
  </p>
  <p className="MsoNormal" style="margin-bottom:0in;margin-bottom:.0001pt">
    <span style={{ color: "#9FB8FF" }}>
      Table 4 shows how to compare a base long 100 ETH, to the case where The
      Whale allocates 25 ETH of that to be an LP. If you can understand this
      example, it generalizes to other scenarios via a simple closed-form
      solution.{" "}
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <b>
      <span style="font-size:12.0pt;line-height:106%;color:#9FB8FF">
        Table 4
      </span>
    </b>
  </p>
  <div align="center">
    <table
      className="MsoNormal"
      Table
      border="0"
      cellspacing="0"
      cellpadding="0"
      width="636"
      style="width:476.75pt;border-collapse:collapse;mso-yfti-tbllook:1184;
 mso-padding-alt:0in 0in 0in 0in"
    >
      <tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes;height:15.0pt">
        <td
          width="636"
          nowrap
          colspan="3"
          valign="top"
          style="width:476.75pt;border:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <b>
              <span style={{ color: "#9FB8FF" }}>Assumptions</span>
            </b>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:1;height:15.0pt">
        <td
          width="225"
          nowrap
          valign="top"
          style="width:168.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>ETH price in USD</span>
          </p>
        </td>
        <td
          width="82"
          nowrap
          valign="top"
          style="width:61.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>$200</span>
          </p>
        </td>
        <td
          width="329"
          nowrap
          valign="top"
          style="width:246.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        ></td>
      </tr>
      <tr style="mso-yfti-irow:2;height:15.0pt">
        <td
          width="225"
          nowrap
          valign="top"
          style="width:168.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>Vol(ETH)=</span>
            <span
              style="font-family:
  Symbol;color:#9FB8FF"
            >
              s
            </span>
            <sub>
              <span style={{ color: "#9FB8FF" }}>E</span>
            </sub>
          </p>
        </td>
        <td
          width="82"
          nowrap
          valign="top"
          style="width:61.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>70%</span>
          </p>
        </td>
        <td
          width="329"
          nowrap
          valign="top"
          style="width:246.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>
              Annualized, as are all assumptions here
            </span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:3;height:15.0pt">
        <td
          width="225"
          nowrap
          valign="top"
          style="width:168.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>Vol(BTC)=</span>
            <span
              style="font-family:
  Symbol;color:#9FB8FF"
            >
              s
            </span>
            <sub>
              <span style={{ color: "#9FB8FF" }}>B</span>
            </sub>
          </p>
        </td>
        <td
          width="82"
          nowrap
          valign="top"
          style="width:61.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>70%</span>
          </p>
        </td>
        <td
          width="329"
          nowrap
          valign="top"
          style="width:246.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        ></td>
      </tr>
      <tr style="mso-yfti-irow:4;height:15.0pt">
        <td
          width="225"
          nowrap
          valign="top"
          style="width:168.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>
              Correl(ETH,<i>z</i>BTC)=0
            </span>
          </p>
        </td>
        <td
          width="82"
          nowrap
          valign="top"
          style="width:61.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>0</span>
          </p>
        </td>
        <td
          width="329"
          nowrap
          valign="top"
          style="width:246.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <i>
              <span style={{ color: "#9FB8FF" }}>z</span>
            </i>
            <span style={{ color: "#9FB8FF" }}>random +1/-1 with p=0.5</span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:5;height:15.0pt">
        <td
          width="225"
          nowrap
          valign="top"
          style="width:168.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>
              Leverage Ratio BTC contract (LR)
            </span>
          </p>
        </td>
        <td
          width="82"
          nowrap
          valign="top"
          style="width:61.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>2.5</span>
          </p>
        </td>
        <td
          width="329"
          nowrap
          valign="top"
          style="width:246.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        ></td>
      </tr>
      <tr style="mso-yfti-irow:6;height:15.0pt">
        <td
          width="225"
          nowrap
          valign="top"
          style="width:168.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>
              Target rate on BTC contract{" "}
            </span>
          </p>
        </td>
        <td
          width="82"
          nowrap
          valign="top"
          style="width:61.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>6%</span>
          </p>
        </td>
        <td
          width="329"
          nowrap
          valign="top"
          style="width:246.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        ></td>
      </tr>
      <tr style="mso-yfti-irow:7;height:15.0pt">
        <td
          width="636"
          nowrap
          colspan="3"
          valign="top"
          style="width:476.75pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <b>
              <span style={{ color: "#9FB8FF" }}>
                Portfolio A: base case, 100 ETH Long
              </span>
            </b>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:8;height:15.0pt">
        <td
          width="225"
          nowrap
          valign="top"
          style="width:168.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>ETH quantity</span>
          </p>
        </td>
        <td
          width="82"
          nowrap
          valign="top"
          style="width:61.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>100</span>
          </p>
        </td>
        <td
          width="329"
          nowrap
          valign="top"
          style="width:246.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>Base long position</span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:9;height:15.0pt">
        <td
          width="225"
          nowrap
          valign="top"
          style="width:168.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>$Value</span>
          </p>
        </td>
        <td
          width="82"
          nowrap
          valign="top"
          style="width:61.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>$20,000 </span>
          </p>
        </td>
        <td
          width="329"
          nowrap
          valign="top"
          style="width:246.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>ETHETHprice</span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:10;height:15.0pt">
        <td
          width="225"
          nowrap
          valign="top"
          style="width:168.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>$Vol</span>
          </p>
        </td>
        <td
          width="82"
          nowrap
          valign="top"
          style="width:61.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>$14,000 </span>
          </p>
        </td>
        <td
          width="329"
          nowrap
          valign="top"
          style="width:246.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>$Value</span>
            <span
              style="font-family:
  Symbol;color:#9FB8FF"
            >
              {" "}
              s
            </span>
            <sub>
              <span style={{ color: "#9FB8FF" }}>E</span>
            </sub>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:11;height:15.25pt">
        <td
          width="636"
          nowrap
          colspan="3"
          valign="top"
          style="width:476.75pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.25pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <b>
              <span style={{ color: "#9FB8FF" }}>
                Portfolio B: allocate 25% to be LP in BTC contract
              </span>
            </b>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:12;height:15.0pt">
        <td
          width="225"
          nowrap
          valign="top"
          style="width:168.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>% Allocation=w</span>
          </p>
        </td>
        <td
          width="82"
          nowrap
          valign="top"
          style="width:61.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>25%</span>
          </p>
        </td>
        <td
          width="329"
          nowrap
          valign="top"
          style="width:246.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>
              % of original ETH put into BTC contract as LP
            </span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:13;height:15.0pt">
        <td
          width="225"
          nowrap
          valign="top"
          style="width:168.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>Allocation in ETH </span>
          </p>
        </td>
        <td
          width="82"
          nowrap
          valign="top"
          style="width:61.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>25</span>
          </p>
        </td>
        <td
          width="329"
          nowrap
          valign="top"
          style="width:246.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>
              Amount of ETH in RM as an LP
            </span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:14;height:15.0pt">
        <td
          width="225"
          nowrap
          valign="top"
          style="width:168.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>Value(PortB)</span>
          </p>
        </td>
        <td
          width="82"
          nowrap
          valign="top"
          style="width:61.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>$20,000</span>{" "}
          </p>
        </td>
        <td
          width="329"
          nowrap
          valign="top"
          style="width:246.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>
              (750 excess margin + 250 RM)ETHprice
            </span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:15;height:15.0pt">
        <td
          width="225"
          nowrap
          valign="top"
          style="width:168.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>Gross/Net</span>
          </p>
        </td>
        <td
          width="82"
          nowrap
          valign="top"
          style="width:61.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>5:1</span>
          </p>
        </td>
        <td
          width="329"
          nowrap
          valign="top"
          style="width:246.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>
              Anticipated ratio of Gross/Net: long 50/short 30, or long 30/short
              50
            </span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:16;height:15.0pt">
        <td
          width="225"
          nowrap
          valign="top"
          style="width:168.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>
              &#926; Notional BTC exposure
            </span>
          </p>
        </td>
        <td
          width="82"
          nowrap
          valign="top"
          style="width:61.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>62.5</span>
          </p>
        </td>
        <td
          width="329"
          nowrap
          valign="top"
          style="width:246.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>
              Expected BTC exposure (in ETH) given net RM and LR. This is 'at
              risk' from BTC volatility.
            </span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:17;height:15.0pt">
        <td
          width="225"
          nowrap
          valign="top"
          style="width:168.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>$ Notional BTC exposure</span>
          </p>
        </td>
        <td
          width="82"
          nowrap
          valign="top"
          style="width:61.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>$12,500 </span>
          </p>
        </td>
        <td
          width="329"
          nowrap
          valign="top"
          style="width:246.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>
              Notional BTC exposure in USD
            </span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:18;height:15.0pt">
        <td
          width="225"
          nowrap
          valign="top"
          style="width:168.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>
              $ Volatility of BTC Exposure
            </span>
          </p>
        </td>
        <td
          width="82"
          nowrap
          valign="top"
          style="width:61.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>$ 8,750 </span>
          </p>
        </td>
        <td
          width="329"
          nowrap
          valign="top"
          style="width:246.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>$ BTC Notional</span>
            <span style="font-family:Symbol;color:#9FB8FF">s</span>
            <sub>
              <span
                style="color:
  #9FB8FF"
              >
                B
              </span>
            </sub>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:19;height:15.0pt">
        <td
          width="225"
          nowrap
          valign="top"
          style="width:168.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>
              $ Volatility of ETH Exposure
            </span>
          </p>
        </td>
        <td
          width="82"
          nowrap
          valign="top"
          style="width:61.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>$ 14,000 </span>
          </p>
        </td>
        <td
          width="329"
          nowrap
          valign="top"
          style="width:246.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>
              ETH Risk does not change, as investor just moved some to act as
              margin{" "}
            </span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:20;height:15.0pt">
        <td
          width="225"
          nowrap
          valign="top"
          style="width:168.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>
              $ Volatility of BTC &amp; ETH exposure
            </span>
          </p>
        </td>
        <td
          width="82"
          nowrap
          valign="top"
          style="width:61.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>$ 16,509 </span>
          </p>
        </td>
        <td
          width="329"
          nowrap
          valign="top"
          style="width:246.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>
              Total portfolio volatility,{" "}
            </span>
          </p>
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>
              BTC position uncorrelated due to random side
            </span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:21;height:15.0pt">
        <td
          width="225"
          nowrap
          valign="top"
          style="width:168.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>$ Marginal Volatility</span>
          </p>
        </td>
        <td
          width="82"
          nowrap
          valign="top"
          style="width:61.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>$2,509</span>
          </p>
        </td>
        <td
          width="329"
          nowrap
          valign="top"
          style="width:246.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style="font-family:Symbol;color:#9FB8FF">s</span>
            <sub>
              <span style={{ color: "#9FB8FF" }}>PortB</span>
            </sub>
            <span style={{ color: "#9FB8FF" }}>&#8210; </span>
            <span style="font-family:Symbol;color:#9FB8FF">s</span>
            <sub>
              <span
                style="color:
  #9FB8FF"
              >
                E
              </span>
            </sub>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:22;mso-yfti-lastrow:yes;height:15.0pt">
        <td
          width="225"
          nowrap
          valign="top"
          style="width:168.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>$ Marginal Revenue</span>
          </p>
        </td>
        <td
          width="82"
          nowrap
          valign="top"
          style="width:61.65pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>$6,875 </span>
          </p>
        </td>
        <td
          width="329"
          nowrap
          valign="top"
          style="width:246.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>
              Gross/Netnet RMLRETHPriceTarget Rate
            </span>
          </p>
        </td>
      </tr>
    </table>
  </div>
  &nbsp;
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
      Looking at the marginal Sharpe ratios for various contracts, with their
      specific LR and volatilities, we see the following Sharpe ratios as a
      function of the net RM as a percent of the LP's ETH portfolio.
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <b>
      <span style="font-size:12.0pt;line-height:106%;color:#9FB8FF">
        Figure 3
      </span>
    </b>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <b>
      <span style="font-size:12.0pt;line-height:106%;color:#9FB8FF">
        Marginal Sharpe by Allocation to OracleSwap Contract
      </span>
    </b>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <span
      style="font-size:
10.0pt;line-height:106%;color:#9FB8FF"
    >
      Net/Gross RM is 5. Funding rates were 8% for ETH and BTC, and 1.5% for
      SPX, while assumed fee income was 3% for cryptos and 1.2% for SPX.
      Volatility assumptions were 70%, for ETH and BTC, and 17.5% for the SPX,
      respectively.
    </span>
  </p>
  <p className="MsoNormal" align="center" style={{ textAlign: "center" }}>
    <span style="color:#9FB8FF;mso-no-proof:yes">
      <img
        border="0"
        width="405"
        height="266"
        id="_x0000_i1037"
        src="TA_files/image013.png"
      ></img>
    </span>
  </p>
  <p className="MsoNormal">
    Figure 3 shows that for large ETH holders, the marginal attractiveness from
    a Sharpe perspective is exceptional for allocations below 30%, with Sharpe
    ratios well above 2. There are few real-world opportunities with Sharpe
    ratios above 1.<a name="_ftnref2"></a>
    <a href="#_ftn2">
      <span style="mso-bookmark:_ftnref2">
        <span className="MsoFootnoteReference">
          <span style={{ color: "#9FB8FF" }}>[2]</span>
        </span>
      </span>
      <span style="mso-bookmark:_ftnref2"></span>
    </a>
    <span style="mso-bookmark:_ftnref2"></span>
    This example highlights that it is feasible to generate an attractive return
    for potential LPs while offering competitive rates if we target existing ETH
    holders who want to put that money to work while maintaining their custody
    and anonymity. These above-average returns should be feasible because,
    unlike in currency markets, it is difficult for large institutions to
    allocate large amounts of capital to arbitrage this given current regulatory
    constraints. Current large ETH holders have a comparative advantage in being
    LPs because of the low marginal risk of such positions.
  </p>
  <h1>
    <a name="_Toc15988689"></a>
    <a name="_Toc26445313"></a>
    <span style="mso-bookmark:_Toc15988689">
      <span style={{ msoFareastFontFamily: "Times New Roman" }}>
        5 ETH Hedge Simulations
      </span>
    </span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
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
    <span style={{ color: "#9FB8FF" }}>
      A perfect hedge can be achieved by putting the equivalent amount of ETH
      into margin as implied by the notional of the short ETH OracleSwap
      contract. For example, consider the following stochastic parameters for
      ETH in a binomial lattice:
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:12.0pt;margin-right:0in;margin-bottom:
12.0pt;margin-left:.5in;text-indent:.5in"
  >
    <span style={{ color: "#9FB8FF" }}>
      Up Gross Return: 4/3 Down Gross Return: 3/4
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
      The net returns are thus 33.33% and&#8210;25%, and with these returns, an
      up and down move lead to the original price. For an asset with a zero
      expected return, the probability of an up move, <i>p</i>, is simply
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <span style={{ color: "#9FB8FF" }}>
      P=(1&#8210; down)/(up &#8210; down) = 3/7
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
      We want to have the probability of an up movement consistent with our
      expected return assumption, in this case, zero, as we wish to abstract
      from any assumptions about the expected return (it is trivial to add).
      That is, this probability ensures the expected return throughout the tree
      is zero at every node.
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
      The shorthand for the profit, which is transacted in ETH, for USD
      denominated assets like ETH is:{" "}
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <span style={{ color: "#9FB8FF" }}>
      PNL in ETH = NotionalETH &#8729; AssetReturn/(1+ETH Return)
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
      This generates up and down ETH PNLs for the short of&#8210;25 and +33.33
      ETH, respectively. This consistency is because the RM in this contract is
      fixed in ETH RM, so no matter how the ETH price moves, the ETH notional is
      constant. While the USD values of these cash flows will vary as the ETH
      price changes, the ETH PNL amounts are fixed. This generates the following
      path over 2 periods, where we note the PNL generated by the OracleSwap
      short contract with an RM=50, and notional value of 100. The ETH price
      starts at $100.{" "}
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <b>
      <span style="font-size:12.0pt;line-height:106%;color:#9FB8FF">
        Figure 3
      </span>
    </b>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <b>
      <span style="font-size:12.0pt;line-height:106%;color:#9FB8FF">
        Hedged Returns with Constant Net Exposure
      </span>
    </b>
  </p>
  <p className="MsoNormal" align="center" style={{ textAlign: "center" }}>
    <span style="color:#9FB8FF;mso-no-proof:yes">
      <img
        border="0"
        width="487"
        height="355"
        id="_x0000_i1036"
        src="TA_files/image016.png"
      ></img>
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
      In the final period, all nodes also generate a $0 profit, reflecting a
      perfect hedge. However, to achieve this, one would have to buy or sell ETH
      in period 1. To reset one's margin to the initial margin is to 'renovate,'
      and to maintain a perfect hedge over time one has to renovate each time
      there is a cash flow, which in the case of OracleSwap is each week. If
      instead, we left the ETH in the margin in period 1, we would have the
      following lattice:
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <b>
      <span style="font-size:12.0pt;line-height:106%;color:#9FB8FF">
        Figure 4
      </span>
    </b>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <b>
      <span style="font-size:12.0pt;line-height:106%;color:#9FB8FF">
        Hedged Returns with No Net Margin Adjustments
      </span>
    </b>
  </p>
  <p className="MsoNormal" align="center" style={{ textAlign: "center" }}>
    <span style="color:#9FB8FF;mso-no-proof:yes">
      <img
        border="0"
        width="576"
        height="423"
        id="_x0000_i1035"
        src="TA_files/image017.png"
      ></img>
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
      In this case, while the expected USD PNL is zero at every node, the final
      nodes have non-zero net USD PNL reflecting an imperfect hedge. This is
      because initially, the net position is long and short 100 ETH per the
      contract, but by period 1 there has been an ETH change to the net position
      due to the ETH PNL generated by the OracleSwap short position. If we leave
      our margin alone in period 1, then in the top node we would have a net
      short ETH position while the bottom node has a net long ETH position.
      Thus, in the subsequent period, the net position shows a profit if asset
      prices mean-revert, while there is a loss if the asset continues to rise
      or fall. This is why in simulations where the margin is not immediately
      set back to 100 ETH, the profit generated from a hedged portfolio (long
      100 ETH, short 100 ETH notional in OracleSwap) creates a slight humped
      pattern to the final PNL distribution.{" "}
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
      Figure 5 illustrates the outcome from a simple simulation using a lattice
      over 10 weeks. We calculate the total PNL after 10 periods for the
      unhedged and hedged position where the hedger applies a rule to cure his
      margin if it moves 35% from its original value. This generates an 85%
      reduction in total volatility over the 10 weeks, and on average requires
      only one cure.{" "}
    </span>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <b>
      <span style="font-size:12.0pt;line-height:106%;color:#9FB8FF">
        Figure 5
      </span>
    </b>
  </p>
  <p
    className="MsoNormal"
    align="center"
    style={{
      marginTop: "12.0pt",
      marginTight: "0in",
      marginBottom: "12.0pt",
      marginLeft: "0in",
      textAlign: "center"
    }}
  >
    <b>
      <span style="font-size:12.0pt;line-height:106%;color:#9FB8FF">
        Hedged vs. Unhedged ETH Portfolios over 10 Weeks
      </span>
    </b>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:12.0pt;margin-right:.5in;margin-bottom:
12.0pt;margin-left:.5in;text-align:justify"
  >
    <span
      style="font-size:10.0pt;
line-height:106%;color:#9FB8FF"
    >
      We generate all 1024 paths of ETH using a binomial approximation of a
      lognormally distribution with a mean return of 0 and an annualized
      volatility of 100%. The hedged USD PNL combines the long PNL with a PNL
      generated from an OracleSwap short of equal initial ETH notional value.
      The hedger then applies the rule of withdrawing all ETH above its initial
      ETH margin if it rises above or below 35% of its initial margin, so that
      an initial margin of 100 that rose to 137 would then be debited by 37 ETH
      and turned into USD; an initial margin that fell below 65 ETH, to 61 ETH,
      would take an infusion of 39 ETH, etc. Data are bucketed so each column
      represents an average of the hedged PNL
    </span>
  </p>
  <p className="MsoNormal" align="center" style={{ textAlign: "center" }}>
    <span style="color:#9FB8FF;mso-no-proof:yes">
      <img
        border="0"
        width="358"
        height="236"
        id="_x0000_i1034"
        src="TA_files/image018.png"
      ></img>
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
      Data used in this example in OracleSwapData.xlsx available at
      www.oracleswap.co
    </span>
  </p>
  <h1>
    <a name="_Toc15988690"></a>
    <a name="_Toc26445314"></a>
    <span style="mso-bookmark:_Toc15988690">
      <span style={{ msoFareastFontFamily: "Times New Roman" }}>
        6 The Oracle
      </span>
    </span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h1>
  &nbsp;
  <h2>
    <a name="_Toc26445315">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        6.1 Responsibility and Strategy
      </span>
    </a>
    <span style="mso-bookmark:_Toc26445315"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    The oracle has the right and responsibility to post 4 PM prices to the
    oracle contract sometime between 4 and 5 PM. Prices posted in the oracle
    contract are recorded in event logs and can be pulled outside of the EVM
    using web3.js. Contract constraints on the timing of these updates imply the
    Oracle can only post prices once a day, at most 5 days a week. Each Friday
    is settlement day, and when the settlement prices are posted, the Oracle
    contract computes that week's return from each day to the settlement price
    (up to 5 data points) and pushes it to the AssetSwap contracts.{" "}
  </p>
  <p className="MsoNormal">
    The oracle protocol is to have several independent computers pull data from
    several independent sources that pertain to a few-minute window. Given more
    than five sources, the median should be a reasonable estimate of that day's
    closing price. If server 1 fails to pull or post prices, then server 2,
    seeing the Ethereum contract's last update time is stale, tries to post
    prices it pulled from a time window a few minutes later in case the problem
    was related to the time of day. A third computer checks again.
  </p>
  <p className="MsoNormal">
    A fraudulent price is the only attack surface in this protocol. Outside of
    margin funding and withdrawal (which can only be done by the account owner),
    or a default penalty attributed to a taker at redemption, margins are only
    debited and credited at the weekly LP book settlement via the returns
    created by the oracle contract. The algebra used to generate ETH PNL is
    coded into the oracle and book contracts and cannot be altered.{" "}
  </p>
  <p className="MsoNormal">
    As the only cheating scenario is the Oracle posting fraudulent prices that
    inflate the PNL of a conspiring counterparty, we will call this combo oracle
    and counterparty Oracle/Alice (in practice, the Oracle would probably be
    Alice to avoid diluting his payoff). OracleSwap's incentive compatibility
    comes out of the way it is a repeated game. Given the oracle revenue via
    close fees, the oracle owns an annuity that is non-transferable. A single
    cheat should be fatal to all contracts the OracleSwap's oracle services,
    like the{" "}
    <a href="https://en.wikipedia.org/wiki/Grim_trigger">
      <span style={{ color: "#9FB8FF" }}>grim trigger</span>
    </a>{" "}
    strategy in a repeated game. We can then compare the value of this annuity
    to any cheat payoff the Oracle may generate.{" "}
  </p>
  <p className="MsoNormal">
    In iterated prisoner's dilemma games, the optimal strategy is not to play
    the Nash strategy of the 1-period game, but to cooperate and play a socially
    optimal strategy. The value of a repeated game is that uncooperative play
    (aka cheating, defecting) reduces the payoff to both players in future
    periods. A player may choose to act selfishly to increase their own reward
    rather than play the socially optimal strategy, but if it is known that the
    other player is following a trigger strategy (never cooperate again once a
    counterparty defects), then the player expects to receive reduced payoffs in
    the future if they deviate at this stage. An effective trigger strategy
    ensures that cooperating has more utility to the player than acting
    selfishly now and facing the other player's punishment in the future. This
    is <i>reciprocal altruism</i>: I play nice because I expect you will respond
    by playing nice too.{" "}
  </p>
  <p className="MsoNormal">
    A key to this game is that players can easily and accurately see if an agent
    is cheating, highlighting the importance of an oracle that is easy to audit.
    While everything is immutably recorded on the blockchain, many oracles are
    difficult to review. This lack of transparency not only makes it difficult
    for new users to trust an oracle, but it also provides the oracle time to
    exit before outsiders can punish him. OracleSwap makes it easy to see its
    current and historical prices.{" "}
  </p>
  &nbsp;
  <h2>
    <a name="_Toc15988691"></a>
    <a name="_Toc26445316"></a>
    <span style="mso-bookmark:_Toc15988691">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        6.2 Common Knowledge and The Burn
      </span>
    </span>
    <span style="mso-bookmark:_Toc15988691"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    If Oracle/Alice has net positions across several different subcontracts,
    they could post prices such that the net position generates the maximum PNL.
    For example, if net long (whether as an investor or LP), they would post a
    price high enough such that their long PNL=RM. The burn option encourages
    the cheated counterparties to prevent Oracle/Alice from capturing this
    payoff.{" "}
  </p>
  <p className="MsoNormal">
    In the <i>settlement period</i>&#8212;between the Oracle contract settlement
    update and LP book settlement&#8212;players can do any of the following for
    contracts they have not already canceled.{" "}
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      add to their margin to prevent a default
    </span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      burn their debit rather than let their counterparty enjoy it
    </span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>do nothing </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      implying <i>default</i> if total margin + prospective PNL &lt; RM
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      implying <i>continue</i> else
    </span>
  </p>
  <p className="MsoNormal">
    Counterparties cannot withdraw or cancel during the settlement period. The
    cost of default and burn is the same, &frac12;&#8729;RM.{" "}
  </p>
  <p className="MsoNormal">
    Assume Bob is the counterparty to Oracle/Alice. Let us define PNL
    <sup>true</sup> as the true PNL given the subcontract parameters and honest
    prices, PNL<sup>rep</sup> as the PNL derived from the reported prices which
    may be untrue, where PNL is from Oracle/Alice's perspective (Bob's cash flow
    is thus&#8210;PNL). An honest oracle posts prices that imply PNL
    <sup>rep</sup>=PNL<sup>true</sup>.{" "}
  </p>
  <p className="MsoNormal">
    If Oracle/Alice cheat at the settlement via a bogus price report, they have
    no downside from further exposing their cheating nature the following week:
    outsiders will see the cheat in our Oracle Price Contract's event logs, and
    rational investors will not risk their money with a cheating Oracle. This
    implies Oracle/Alice should post prices implying PNL<sup>rep</sup>
    &#8805;max(0, PNL<sup>true</sup>) at the next and presumably final period
    because there is nothing Bob could do to further damage Oracle/Alice's
    reputation if they post PNL<sup>rep</sup>=0 when PNL<sup>true</sup>
    &lt;0, and as Oracle/Alice would owe nothing to Bob, his burn would not cost
    Oracle/Alice anything. If PNL<sup>true</sup> &gt;0 in the final period and
    they report truthfully, presumably, Bob will accept this report as well
    because in that case burning would not punish the Oracle (because the
    Oracle/Alice is paying). Thus, Bob should rationally expect a cost of at
    least E[max(0, PNL<sup>true</sup>)] for playing another week, which is about
    0.4
    <span
      style="font-family:
Symbol;color:#9FB8FF"
    >
      s (
    </span>
    <span style={{ color: "#9FB8FF" }}>where </span>
    <span style="font-family:Symbol;color:#9FB8FF">s</span>
    <span style={{ color: "#9FB8FF" }}>
      is a subcontract's 1-standard deviation PNL for a week
    </span>
    <span style="font-family:Symbol;color:#9FB8FF">)</span>
    <span style={{ color: "#9FB8FF" }}>
      .<a name="_ftnref3"></a>
      <a href="#_ftn3">
        <span style="mso-bookmark:_ftnref3">
          <span className="MsoFootnoteReference">
            <span style={{ color: "#9FB8FF" }}>[3]</span>
          </span>
        </span>
        <span style="mso-bookmark:_ftnref3"></span>
      </a>
      <span style="mso-bookmark:_ftnref3"></span>
    </span>
  </p>
  <p className="MsoNormal">
    Oracle/Alice then reason they should expect to get away with charging Bob
    max(0, PNL<sup>true</sup>)+0.4
    <span style="font-family:Symbol;color:#9FB8FF">s</span>
    <span style={{ color: "#9FB8FF" }}>
      in the next and presumably final period because when Bob was presented the
      choice of implicitly paying an extra 0.4
    </span>
    <span
      style="font-family:Symbol;
color:#9FB8FF"
    >
      s
    </span>
    <span style={{ color: "#9FB8FF" }}>
      {" "}
      vs. the burn cost, he made the cheaper choice (a burn costs
      &frac12;&#8729;RM or about 1.5
    </span>
    <span style="font-family:Symbol;color:#9FB8FF">s</span>
    <span style={{ color: "#9FB8FF" }}>
      ). This is based on the idea that rational decision making ignores sunk
      costs. A cheating Oracle has cost Bob not just (PNL<sup>true</sup>&#8210;
      PNL<sup>rep</sup>), the amount of the initial cheat, but also the implicit
      0.4
    </span>
    <span style="font-family:Symbol;color:#9FB8FF">s</span>
    <span style={{ color: "#9FB8FF" }}>
      cost, the amount of the expected value of the anticipated cheat.{" "}
    </span>
  </p>
  <p className="MsoNormal">
    Thus, if Oracle/Alice decide to confront Bob with the choice of paying an
    additional 0.4<span style="font-family:Symbol;color:#9FB8FF">s</span>
    <span style={{ color: "#9FB8FF" }}>
      or burn in the next and final settlement, we should expect the same choice
      to not burn, the same decision Bob made previously (being rationally
      indifferent to sunk costs). Bob anticipates Oracle/Alice reasoning in this
      fashion, and thus now expects Oracle/Alice to report max(0, PNL
      <sup>true</sup>)+0.4
    </span>
    <span style="font-family:Symbol;color:#9FB8FF">s</span>
    <span style={{ color: "#9FB8FF" }}>
      , which has an expected value of 0.8
    </span>
    <span
      style="font-family:Symbol;
color:#9FB8FF"
    >
      s
    </span>
    <span style={{ color: "#9FB8FF" }}>. </span>
  </p>
  <p className="MsoNormal">
    Oracle/Alice anticipate this level of Bob's reasoning, and so using similar
    logic as before, assume if Bob does not burn when expecting a cost of 0.8
    <span
      style="font-family:Symbol;
color:#9FB8FF"
    >
      s
    </span>
    <span style={{ color: "#9FB8FF" }}>
      , this implies Oracle/Alice can over-charge Bob by 0.8
    </span>
    <span style="font-family:Symbol;color:#9FB8FF">s</span>
    <span style={{ color: "#9FB8FF" }}>
      {" "}
      in the final period and not arouse Bob's burn response. Bob anticipates
      this reasoning, and now his expected cost in the next and final period is
      max(0, PNL<sup>true</sup>)+0.8
    </span>
    <span
      style="font-family:Symbol;
color:#9FB8FF"
    >
      s
    </span>
    <span style={{ color: "#9FB8FF" }}>
      , which has an expected value of 1.2
    </span>
    <span style="font-family:Symbol;color:#9FB8FF">s</span>
    <span style={{ color: "#9FB8FF" }}>. </span>
  </p>
  <p className="MsoNormal">
    If Bob chooses not to burn, Oracle/Alice would then anticipate they could
    over-charge Bob by 1.2
    <span style="font-family:Symbol;color:#9FB8FF">s</span>
    <span style={{ color: "#9FB8FF" }}>
      in the final period and not arouse Bob's burn response, for an expected
      value of 1.6
    </span>
    <span style="font-family:Symbol;color:#9FB8FF">s</span>
    <span style={{ color: "#9FB8FF" }}>.</span>
  </p>
  <p className="MsoNormal">
    Given the cost of a burn is &frac12;&#8729;RM, which is 1.5
    <span style="font-family:Symbol;color:#9FB8FF">s</span>
    <span style={{ color: "#9FB8FF" }}>
      , at this point, Bob realizes that if he does not burn, Oracle/Alice's
      final price report will cheat Bob by more than the cost of burning and
      immediately terminating the subcontract.
    </span>
  </p>
  <p className="MsoNormal">
    For players with Excess Margin&lt;&frac12;&#8729;RM, defaulting will be
    cheaper. Considering most MakerDAO contracts are overcollateralized by 300%,
    and that over-collateralization is an efficient way to manage a margin
    position, it is reasonable to assume most counterparties will probably have
    more Excess Margin greater than &frac12;&#8729;RM, i.e., the burn cost. All
    such players rationally should burn rather than default or continue.{" "}
  </p>
  <p className="MsoNormal">
    Rational analysis nicely aligns with our less-rational instincts here.{" "}
    <i>Altruistic punishment</i> describes how people punish non-cooperators at
    a cost to themselves even in one-shot interactions where there is no chance
    of any long-run benefit. Experimental and ethnographic data shows that
    altruistic punishment strengthens cooperation.<a name="_ftnref4"></a>
    <a href="#_ftn4">
      <span style="mso-bookmark:_ftnref4">
        <span className="MsoFootnoteReference">
          <span style={{ color: "#9FB8FF" }}>[4]</span>
        </span>
      </span>
      <span style="mso-bookmark:_ftnref4"></span>
    </a>
    <span style="mso-bookmark:_ftnref4"></span>
    People hate cheaters and will pay to hurt them. For example, in games like{" "}
    <i>tit-for-tat</i>
    or <i>the</i> <i>ultimatum game</i>, people cooperate more when there is an
    option for players to<i> </i>pay to punish players in the game who are
    playing a rational but socially uncooperative strategy. As the oracle
    receives the default fee, burning instead of defaulting has the additional
    benefit of preventing a cheating oracle from profiting here. Potential
    cheaters rationally anticipate this individually irrational punishment,
    discouraging cheating.{" "}
  </p>
  <h2
    style="margin-top:14.95pt;margin-right:0in;margin-bottom:14.95pt;
margin-left:.5in;page-break-after:auto"
  >
    <a name="_Toc26445317">
      <span style='mso-fareast-font-family:"Times New Roman";color:#B3C7FF'>
        6.3 Burn Mechanics
      </span>
    </a>
    <span style="mso-bookmark:_Toc26445317"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  <p className="MsoNormal">
    If a taker burns, the effect works as follows. Each burn reduces the
    'burnFactor' that is multiplied against all PNL credits. That is, only those
    receiving ETH are affected by burns. The default burnFactor is 1.0, so
    players get 100% of their PNL in the standard case. If a long taker
    representing 10% of the long book burns, the burnFactor is reduced by 10%.
    If another taker representing 12% of the long book burns, this reduces it by
    another 12%, down to 78%.{" "}
  </p>
  <p className="MsoNormal">
    If the LP burns, their effect is calculated using the LP's net position. For
    example, if the LP is long 10 and short 6, she is net long 4, and so if she
    burned it would reduce the burnFactor by 40%. She would have to pay her
    &frac12;&#8729;RM just like a taker, but her RM is on the net position, not
    the gross, so in that way it is the same as for the taker. Similarly, the
    LP's net position is used for attributing the burn. That is, her net credit
    would be adjusted by the burn factor, not the gross credit.{" "}
  </p>
  <p className="MsoNormal">
    An evil oracle would rationally cheat only at the settlement price. Cheating
    intraweek merely gives people more time to cancel and burn, reducing their
    potential heist. A cheat price would set an asset price either very high or
    low, cheating all the longs or the shorts, but not both. While the longs{" "}
    <i>and</i> shorts could all burn, this means they would be paying money to
    receive less. This would be perverse, but even if someone did this, the
    burnFactor is bounded below by zero.{" "}
  </p>
  <h2
    style="margin-top:14.95pt;margin-right:0in;margin-bottom:14.95pt;
margin-left:.5in;page-break-after:auto"
  >
    <a name="_Toc15988693"></a>
    <a name="_Toc26445318"></a>
    <span style="mso-bookmark:_Toc15988693">
      <span style='mso-fareast-font-family:"Times New Roman";color:#B3C7FF'>
        6.4 Total Cost-Benefit to Cheating
      </span>
    </span>
    <span style="mso-bookmark:_Toc15988693"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  <p className="MsoNormal">
    Let us benchmark our exit scam payoff via the Total OracleSwap RM, which is
    the sum of all the RM across all the OracleSwap subcontracts. We will denote
    this RM<sub>gross</sub>. A contract attractive to hack will have many users,
    and many will be accidentally aligned with the cheating Oracle's position
    side. A cheating oracle that tries to build a position slowly would have to
    expose themselves to many random PNLs, and as their maximum payoff is their
    net position's RM, this is a 3-standard deviation weekly move. Given the
    costs of cheating, potentially losing money via market moves could create a
    scenario where the cheater's benefit is negative. This implies a cheat would
    most likely entail a quick positioning. To put on a large net position
    within one or two weeks implies there would be many other users with various
    positions.{" "}
  </p>
  <p className="MsoNormal">
    These independent positions cut down the percent of RM<sub>gross</sub>{" "}
    affected by an Oracle scam by at least &frac34;. When combined with the fact
    that most players will burn rather than continue, say &frac34;, this cuts
    Oracle/Alice's final payoff to &frac12;&#8729;(1-&frac34;) or
    1&frasl;16&#8729;RM<sub>gross</sub>.
  </p>
  <p className="MsoNormal">
    If we assume subcontracts roll over every 2 months, then the Oracle expects
    6 closes, and as each subcontract generates 2.5% RM in Oracle revenue, the
    annual dividend on RM<sub>gross</sub> is 15%. Using the Gordon dividend
    discount model, a discount rate of 10% and a growth rate of 5% imply a
    present value of 3 to 6RM<sub>gross</sub>. Thus, under very modest
    assumptions, an evil oracle would find it rational to use their Oracle
    revenue to further other evil schemes, because even evil people prefer more
    money to less (3 &gt; 1&frasl;16).
  </p>
  <p className="MsoNormal">
    Higher expected growth rates make the value of the annuity lost even
    greater, making cheating less attractive. The key is that unlike many other
    Oracle business models, even upon achieving a steady-state level of growth,
    the Oracle finds honesty the dominant strategy. A seasoned OracleSwap oracle
    will have perfected the automated scripts that attend to its contracts, so
    its annuity stream would take virtually no effort or capital, an asset worth
    preserving. OracleSwap is a long-run incentive compatible mechanism.
  </p>
  <h2
    style="margin-top:14.95pt;margin-right:0in;margin-bottom:14.95pt;
margin-left:.5in;page-break-after:auto"
  >
    <a name="_Toc15988692"></a>
    <a name="_Toc26445319"></a>
    <span style="mso-bookmark:_Toc15988692">
      <span style='mso-fareast-font-family:"Times New Roman";color:#B3C7FF'>
        6.5 The Value of the Walk-Away Option
      </span>
    </span>
    <span style="mso-bookmark:_Toc15988692"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  <p className="MsoNormal">
    Consider the strategy of playing until one generates a loss and then posting
    a fraudulent price. While the counterparty would probably burn, the cheating
    Oracle would have lost nothing.{" "}
  </p>
  <p className="MsoNormal">
    There is a trade-off in such a strategy as higher returns imply higher risk.
    For example, the strategy of walking away from a substantial loss, say a{" "}
    <span
      style="font-family:
Symbol;color:#9FB8FF"
    >
      &#8259;
    </span>
    <span style={{ color: "#9FB8FF" }}>2.5</span>
    <span style="font-family:Symbol;color:#9FB8FF">s</span>
    <span style={{ color: "#9FB8FF" }}>
      outcome would take an average of 161 weeks for this to happen. While the
      expected cumulative payoff is 2.8
    </span>
    <span
      style="font-family:Symbol;
color:#9FB8FF"
    >
      s{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      of a weekly standard deviation, its standard deviation is 12.7
    </span>
    <span
      style="font-family:Symbol;
color:#9FB8FF"
    >
      s,{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      meaning their expected return would be between 15.5
    </span>
    <span style="font-family:Symbol;color:#9FB8FF">s</span>
    <span style={{ color: "#9FB8FF" }}> and &#8210;9.9</span>
    <span
      style="font-family:Symbol;
color:#9FB8FF"
    >
      s
    </span>
    <span style={{ color: "#9FB8FF" }}>
      , a poor Sharpe ratio and even worse in terms of time wasted. A rational
      cheating oracle has to balance the expected return to the time and
      volatility of such a strategy.{" "}
    </span>
  </p>
  <p className="MsoNormal">
    Looking at the cheat strategy payoff strategically is the classic{" "}
    <i>optimal stopping problem</i>. Specifically, Oracle/Alice's expected
    payoff is of the following form.
  </p>
  <p className="MsoNormal" align="center" style={{ textAlign: "center" }}>
    <span style={{ color: "#9FB8FF" }}>
      Cheat Payoff = sum(t=1 to T-1) PNL<sub>t</sub> where T= min t st PNL
      <sub>t</sub> lt k{" "}
    </span>
  </p>
  <p className="MsoNormal">
    Diabolical Oracle/Alice's strategy is to post true prices until they imply
    that PNL<sup>true</sup>&#8804;
    <i>k</i>, at which time they will report prices that imply their PNL=RM, Bob
    would burn, terminating the contract, and Oracle/Alice withdraw their margin
    ETH and move to Belize to work on their next white paper. The sum of PNLs up
    to time <i>T</i> has a positive expected value because the sequence of PNLs
    from <i>1</i>
    to <i>T-1</i> are all random variables truncated from below. For example, if{" "}
    <i>k</i>=0, the only PNL that will accrue to Oracle/Alice will be positive;
    they will walk away from their first loss.
  </p>
  <p className="MsoNormal">
    While the expected payoff from such a strategy increases linearly as{" "}
    <i>k</i> moves from 0 to , the volatility increases exponentially.
    Oracle/Alice's problem is one of maximizing a risk-adjusted return.{" "}
  </p>
  <p className="MsoNormal">
    The ratio of the expected payoff to the standard deviation is maximized at
    around <i>k</i>= &#8210;0.5, though the maximum is exceptionally flat from 0
    to &#8210;0.5. This implies Oracle/Alice's Sharpe ratio would be 90% near
    optimal, and a lot quicker and simpler if she used the strategy to walk away
    from her first loss. The expected total return to the optimal 'walk away
    from one's first loss' strategy is about 1
    <span style="font-family:Symbol;color:#9FB8FF">s</span>
    <span style={{ color: "#9FB8FF" }}>, which is about RM/3.</span>
  </p>
  <p className="MsoNormal">
    Other counterparties not part of the conspiracy would reduce this by another
    3/4 in comparison to the RM used to generate Oracle fee revenue. This
    reduces the stopping strategy payoff to &frac14;&#8729;RM<sub>gross</sub>/3,
    or 1&frasl;12&#8729;RM<sub>gross</sub>.
  </p>
  <p className="MsoNormal">
    The problem with this scam is it is improbable that one contract will break
    a target loss the same week another one does. As no one should trust an
    oracle that cheated on a different contract, this means they reap the
    returns from one contract at the expense of all the rest, making the
    cost-benefit much worse. For example, if the SPX loses 0.5 of a weekly
    standard deviation, Oracle/Alice's other AssetSwap positions (say, on the
    ETH) will, on average, be near zero, generating little marginal value to
    this scam. As the number of contracts increases, the ratio of this exit scam
    payoff to the RM<sub>gross</sub> declines.{" "}
  </p>
  <p className="MsoNormal">
    An ambitious Oracle has little to do but think of new contracts of interest,
    so the addition of new assets is a reasonable Oracle expectation, implying a
    large expected growth rate as the opportunity cost of cheating (loses that
    potential revenue). An oracle with many assets, meanwhile, would only be
    able to do this for a small fraction of the assets serviced (those that are
    highly correlated), however, unlike the more deliberate cheat where the
    oracle can implement a targeted cheat across all assets simultaneously. For
    this reason, it is irrelevant as a practical consideration.{" "}
  </p>
  <h2>
    <a name="_Toc26445320">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        6.6 Who is the Oracle?
      </span>
    </a>
    <span style="mso-bookmark:_Toc26445320"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
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
      As the creator of this suite of contracts, my motivation is ideological as
      opposed to mercenary. I believe cryptocurrencies enhance individual
      liberties necessary for a flourishing society. I would act as the oracle
      for free, as ongoing oracle duties can be automated in such a way to
      require almost no marginal effort (the process will require a human touch
      as servers crash, data providers change their protocols, etc.). Yet
      without revenue, outsiders would have to trust my good intentions, an
      unreasonable request, in that my earnestness could all be what game
      theorists call <i>cheap talk</i>. The cost function for a reliable oracle
      is the opportunity cost of cheating, which requires the oracle generates
      revenue.
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
      I am resigned to accept that it would not be practical to profit from this
      creation financially. As a US citizen, the oracle duties would probably
      fall under some regulatory restriction, and creating this contract and
      front-end has generated a large number of fingerprints. That this is
      necessary is why most prominent, well-funded dapps related to financial
      derivatives are incomplete, missing either an oracle or an explicit
      derivative contract. While this creates sufficient legal ambiguity to
      facilitate initial funding and dreams of BitMEX-like revenue, it also
      creates large problems in creating a viable incentive structure. There are
      many jurisdictions where administering such a contract is legal, and so I
      gave the oracle rights and responsibilities to someone else, knowing the
      oracle would be viable. Why do I use a pseudonym, then? Because initially
      there are many questions about code and concepts, and if I were
      conspicuous it would be more likely someone could identify him through me.
      By the time I am revealed, there will be sufficiently few correspondences
      that his anonymity will be preserved.{" "}
    </span>
  </p>
  <h1>
    <a name="_Toc15988694"></a>
    <a name="_Toc26445321"></a>
    <span style="mso-bookmark:_Toc15988694">
      <span style={{ msoFareastFontFamily: "Times New Roman" }}>
        7 Adverse Selection on Limit Order Books
      </span>
    </span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h1>
  &nbsp;
  <h2>
    <a name="_Toc26445322">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        7.1 Basic Problem
      </span>
    </a>
    <span style="mso-bookmark:_Toc26445322"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    Around 12 billion dollars were spent shortening the latency from 15 to 9
    milliseconds for messages between New York (where cash markets trade) to
    Chicago (where futures trade), highlighting the value of a low latency
    advantage. In contrast to the high-frequency games where competition is over
    milliseconds, a blockchain user faces at least a ten-thousand millisecond
    lag.{" "}
  </p>
  <p className="MsoNormal">
    Latency affects limit order books in the following way. Say you place an
    order to buy 100 shares of XYZ stock trading at a bid-ask price of
    $18.17-$18.18. You are probably not the first buy order in the $18.17 queue,
    so market orders will go through several levels to reach your bid. If the
    XYZ stock price moves up or down $0.05 before you would be able to cancel
    that order, you get filled only if it is now trading at $18.12-$18.13,
    meaning you bought at $18.17 and can sell now at $18.12; you lost $0.05.
    This mechanism is called adverse selection, because conditional upon getting
    filled you paid too much; if the price went up by $0.05, you would probably
    not be filled on your $18.17 order to buy.{" "}
  </p>
  <p className="MsoNormal">
    Another way to look at this is as an option. Say Alice announces a limit
    order to sell at $100 when the current market price is $99. Say her offer is
    good for N seconds. Those who can react within N seconds have an option
    because if the true price stays below $100, they are not obligated to buy,
    while if the price goes above $100, they have the right to buy at $100,
    locking in an instant profit. The greater the time lag, the greater the
    value of the option.{" "}
  </p>
  <p className="MsoNormal">
    Latency basically increases the market maker's perceived asset volatility,
    in that a stock that moves by 1 cent per second will move by 10 cents over
    100 seconds. Thus, the size of the move a market maker anticipates increases
    as the latency increases, increasing her spread to diminish the adverse
    selection, or option value, in her posted limit prices.{" "}
  </p>
  <p className="MsoNormal">
    Informed traders could be someone who has a latency advantage, or who has
    insider information on a relevant event. Such traders have a better estimate
    of the future price than others. More prosaically, the advantage is merely
    that the trader knows they must buy a lot of shares, which will push prices
    up (statistically). Such traders inflict losses on market makers.
  </p>
  <p className="MsoNormal">
    Noise traders are those with uncorrelated supply/demand. Delusional theories
    are idiosyncratic, and by definition, noise traders trade in amounts
    uncorrelated with future price movements. They could want to trade to use
    their money to buy a phone or making a portfolio allocation decision
    unrelated to future price movements. Further, they are small because they do
    not include those whose trades are large enough to actually push the price,
    per the definition of a noise trader. Noise traders generate revenue for
    market makers, and while small in trade size are more numerous than informed
    traders.
  </p>
  <p className="MsoNormal">
    In equilibrium, a market maker only continues to post resting limit orders
    if she makes zero economic profit; the noise traders pay for the informed
    traders.
  </p>
  <p className="MsoNormal">
    To counter the effects of informed traders, the market maker does two things
    related to latency. First, she invests time and money into low-latency
    computers and algorithms to effectively reduce her relative latency: if she
    is the fastest, she is not giving anyone an option regardless of her
    objective latency, because anyone trading before the quickest trader is not
    reacting to relevant information quicker but rather randomly arriving for
    other reasons. High latency markets tend to have a higher differential
    between those trading on the bleeding edge and your casual trader.{" "}
  </p>
  <p className="MsoNormal">
    In general, the explicit cost of latency due to adverse selection for the
    fastest players is significantly less than the implicit costs generated by
    investing in capital and algorithms to minimize the explicit costs. Given
    the value of low latency, it is optimal to invest in cutting edge
    technology. This obliges informed traders to invest likewise to minimize
    their latency disadvantage, creating an arms race in hardware and software
    spending.{" "}
  </p>
  <p className="MsoNormal">
    For example, losses are about 4% of revenue for most credit card issuers,
    but companies spend multiples of that in making sure this expense is under
    control. This is why credit card companies have what appears to be absurdly
    high profits, in that the interest margin on credit cards is much higher
    than for other bank loans: their non-interest expense overstates the
    profitability of credit cards. Credit cards have a very active and energetic
    set of attackers, creating a perpetual arms race in tactics and
    countermeasures. These indirect costs are why not just reducing but
    eliminating the latency cost is so important because it eliminates these
    non-explicit latency costs for LPs.{" "}
  </p>
  <p className="MsoNormal">
    As the spread widens, the number of trades decreases because it increases
    the net cost of trading. Noise traders will flee any market where spreads
    are significantly higher because the short-term horizon preferred by noise
    traders is sensitive to transaction costs. For example, a day-trader who
    pays 0.5% to enter or exit a trade, trading daily over a year, generates a
    252% annual cost (252&#8729;2&#8729;0.5). Such a cost destroys many
    short-term strategies, no matter how delusional. Noise traders are not in
    crypto because of its singular attributes, which are valuable to long-term
    investors, but rather just think they have spotted a trading opportunity, or
    who have found it much easier to open an account on BitMEX than open an
    account trading equities. For these people, trading on centralized exchanges
    sacrifices non-essential aspects of the trading experience.{" "}
  </p>
  <p className="MsoNormal">
    Without noise traders, the remaining participants are then playing the
    unattractive game of trying to outsmart others who know at least as much as
    they do about market prices. The Milgrom-Stokey no-trade theorem
    (Information, Trade and Common Knowledge <i>Journal of Economic Theory</i>,
    1982) states that if all the traders in the market are rational, anyone who
    makes an offer must have valuable and true private information, or else they
    would not be making the offer, so accepting the offer would make them a
    loser. All the traders will reason the same way, and thus will not accept
    any offers. Another relevant result is Grossman-Stiglitz's Impossibility of
    Informationally Efficient Markets (<i>American Economic Review</i>, 1982)
    that shows how without noise trading, no one has an incentive to put
    information into markets because the other rational traders infer what he
    knows via his market demand. These are extreme outcomes, but they underlie a
    profound point: an active and efficient limit order book needs many noise
    traders.{" "}
  </p>
  <p className="MsoNormal">
    The bottom line is that a standard market maker is not merely taking on
    risk, as when they are forced to be long or short some asset when they have
    no opinion on its return, but more importantly, forced to subject themselves
    to informed traders that cost them money with statistical certainty. Unlike
    the standard conception of risk that adds non-diversifiable volatility to
    one's wealth, adverse selection risk is like the risk generated by accident
    claims in an auto insurer's portfolio, a statistically certain expected
    loss. The presence of informed traders creates a cost ultimately borne by
    the noise traders because, in equilibrium, market makers need to generate a
    zero economic profit. Without noise traders, market makers cannot persist,
    leaving casual traders placing small resting limit orders and little volume.{" "}
  </p>
  <h2>
    <a name="_Toc26445323">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        7.2 Trading Costs Avoided
      </span>
    </a>
    <span
      style="mso-bookmark:
_Toc26445323"
    ></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    While adverse selection is a high cost for high latency limit-order books,
    another consideration is a game related to placing large orders. For
    example, say you place an abnormally large order on a central limit order
    book, an offer to buy 9000 shares at $14.23 when the market bid-ask is at
    $14.23-$14.30 with only 200 shares offered. This creates an attractive
    asymmetric payoff for smaller traders. A sneaky trader then often posts a
    lower bid just above it (e.g., 100 @ $14.24). If the market goes down, they
    instantly sell to the larger order $14.23 for a modest $0.01 loss, while if
    the price rises, profits are unbounded. To avoid these parasites, a large
    order needs to be parceled out at a size commensurate with the average best
    bid-ask size, necessitating many cancel-and-replace orders. While
    algorithmic trading via direct market access to centralized exchanges can
    manage this efficiently, on the blockchain, it adds significant costs and
    time.
  </p>
  <p className="MsoNormal">
    These games are entirely avoided by forward-starting prices based on liquid
    cash markets. VWAP has grown in popularity because it minimizes trade
    impact, and the day lag does not inconvenience long-term investors. As VWAP
    providers use cutting-edge high-frequency strategies, users benefit from the
    latest algorithmic trading innovations, and also from the ability of VWAP
    providers to net customer orders, which reduces trading costs, savings they
    pass off to their customers as they compete with other VWAP providers.
  </p>
  <p className="MsoNormal">
    For the foreseeable future, OracleSwap's volume is too small for concerns
    about the market impact on a 4 PM price. That is, moving or gaming the asset
    price at a point in time would take significantly more volume than
    OracleSwap will generate initially. If OracleSwap either became very popular
    or references illiquid assets, it would have to reference an extended time
    window to mitigate the manipulation risk. For example, the CME bitcoin
    futures uses a 1-hour window to set their settlement price, which is a
    straightforward extension of our initial 5-minute crypto window.
  </p>
  <h1>
    <a name="_Toc26445324"></a>
    <a name="_Toc15988698"></a>
    <span style="mso-bookmark:_Toc26445324">
      <span style={{ msoFareastFontFamily: "Times New Roman" }}>
        8 Contract Functions
      </span>
    </span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h1>
  &nbsp;
  <h2>
    <a name="_Toc26445325">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        8.1 Take position
      </span>
    </a>
    <span style="mso-bookmark:_Toc26445325"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    <b>
      <span style={{ color: "#9FB8FF" }}>1 transaction</span>
    </b>
  </p>
  <p className="MsoListParagraph" style="margin-left:.25in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>1.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Function: take(LP address, RM, side)
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:.75in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>a.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>Find LP</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:.75in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>b.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Set RM, which sets the notional (2.5&#215; for ETH and BTC, 10&#215; for
      SPX)
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:.75in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>c.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Set side, true for taker long/LP short, false for taker short/LP long
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:.75in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>d.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Send 1.5&#8729;RM with function to initialize margin
    </span>
  </p>
  <p className="MsoNormal">
    The investor's position is identified by the LP and the subcontract ID
    generated; LP address, SubkID
  </p>
  <h2>
    <span style='mso-fareast-font-family:"Times New Roman";color:#B3C7FF'>
      8.2 Taker Curing Margin
    </span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    <b>
      <span style={{ color: "#9FB8FF" }}>1 transaction</span>
    </b>
  </p>
  <p className="MsoListParagraph" style="margin-left:.25in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>1.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>send eth to margin</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:.75in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>a.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      function for taker: fundTaker(LP address, subkcontract ID)
    </span>
  </p>
  <p className="MsoNormal">
    The settlement price update on Friday at 4 sends the ending price for that
    week's settlement. Users can see their impending ETH debit or credit to see
    if they need to cure their margin and avoid a default. For the investors,
    this is easy: add the impending PNL to one's current margin, and if it is
    below the required margin, they will default at settlemnet if they do not
    cancel or cure. Cancelling can be done anytime prior to the Friday
    settlement price update. After that, the only option is to cure their margin
    position by sending enough ETH so that their total margin, after the PNL
    debit, is greater than their RM. They have until at least 24 hours after the
    oracle settlement price update to send ETH to their margin.
  </p>
  <h2>
    <a name="_Toc26445329">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        8.3 Taker cancel
      </span>
    </a>
    <span style="mso-bookmark:_Toc26445329"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
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
    Cancels, like takes, are irreversable. They require a fee which is the sum
    of the oracle and LP closing fee. For the LP, a cancel is twice the oracle
    closing fee.{" "}
  </p>
  <p className="MsoNormal">
    There are two types of cancels. A regular cancel uses the weekly settlement
    price as its last price point, and any regular cancel can be implemented at
    any time prior to the oracle settlement price update. This involves setting
    the bool in the cancel function to false.
  </p>
  <p className="MsoNormal">
    If one is very nervous and wishes to get the very next oracle price as their
    final price, they can toggle the cancel bool to true. Canceling intraweek
    generates complications for the LP, in that the LP could then be exposed to
    more market risk, making their current net RM inadequate. To prevent this
    situation, we only allow the investor to close intraweek if the LP has
    sufficient excess margin available. For example, if the LP has a flat book
    and zero margin, investors cannot cancel intraweek prior to the next
    settlement day; investors in such a scenario could only put in a cancel that
    would go into effect at settlement using settlement day prices. As an LP
    should have significant excess ETH&#8212;LP economics make the most sense
    for existing ETH whales&#8212;most LPs should have excess margin. The
    investor pays the maximum LP closing fee to compensate for the impact of the
    intra-week close on the LPs margin. This gives LP an incentive to maintain
    the excess margin that allows these intraweek cancels.
  </p>
  <p className="MsoNormal">
    The inta-week cancel is still settled at the weekly settlement, so taker
    must wait until then to retrieve their funds. This intra-week settlement
    option is only available to the taker, not the LP.{" "}
  </p>
  <p className="MsoNormal">
    After a cancel, the money in an investor's margin cannot be used for
    anything else, such as transferring it directly to another subcontract, and
    so should be withdrawn as soon as possible. A cancel, burn, or default
    terminates a subcontract at the settlement. The investor's margin can only
    be withdrawn via the 'redeem' function, which moves all the investor's
    margin to the AssetSwap contract and pops the subcontract from the list of
    the LP's subcontracts. After that, the investor should withdraw their ETH
    from the AssetSwap contract. ETH in a user's AssetSwap balance cannot be
    used directly to fund margins on other positions. If the investor defaulted
    on an active LP book, they are debited Max(takerMargin, 0.5&#8729;RM) at
    redemption, which is sent to the oracle.
  </p>
  <p className="MsoNormal">Taker Cancellation steps</p>
  <p className="MsoListParagraph" style="margin-left:.25in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>1.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Cancel before Friday oracle update (or Thursday if Friday is a holiday)
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:.75in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>a.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Cancel(LP address, subkID bytes, now bool)
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:.75in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>b.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>Wait for LP book settlement</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:.25in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>2.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>Redeem</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:.75in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>a.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>Redeem(LP address, subcontract ID)</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:.25in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>3.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>WithdrawFromAssetSwap</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:.75in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>a.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>withdrawFromAssetSwap()</span>
  </p>
  <h2>
    <a name="_Toc26445335">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        8.4 Taker Inactive LP
      </span>
    </a>
    <span style="mso-bookmark:_Toc26445335"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    <b>
      <span style={{ color: "#9FB8FF" }}>1 transaction</span>
    </b>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>1.</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>inactiveLP(LP address)</span>
  </p>
  <p className="MsoNormal">
    If the LP is inactive, in that 48 hours passed since the oracle settlement
    without an LP settlement, the first taker within the LP's book to execute
    the LP inactive function gets the LP's default fee of max(totalLPMargin,
    &frac12;&#8729;LP RM). This then inactivates the LP book, allowing all
    takers to costlessly redeem their subcontracts immediately, and for the LP
    to withdraw all her remaining margin.
  </p>
  &nbsp;
  <h2>
    <a name="_Toc26445326">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        8.5 Become an LP
      </span>
    </a>
    <span style="mso-bookmark:_Toc26445326"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    <b>
      <span style={{ color: "#9FB8FF" }}>1 transaction</span>
    </b>
  </p>
  <p className="MsoListParagraph" style="margin-left:.25in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>1.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      createBook(RM, close fee, long Funding rate, short funding rate)
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:.75in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>a.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Set minimum RM, closing fee, long funding rate, short funding rate
    </span>
  </p>
  <p
    className="MsoListParagraph"
    style="margin-left:1.25in;text-indent:-1.25in"
  >
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>i.</span>
    <span
      style="font-size:7.0pt;
line-height:106%;color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Data are in basis points as a percent of notional
    </span>
  </p>
  <p
    className="MsoListParagraph"
    style="margin-left:1.25in;text-indent:-1.25in"
  >
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>ii.</span>
    <span
      style="font-size:7.0pt;
line-height:106%;color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Max close fee for the LP is 100 for SPX, 25 for ETH/BTC
    </span>
  </p>
  <p
    className="MsoListParagraph"
    style="margin-left:1.25in;text-indent:-1.25in"
  >
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>iii.</span>
    <span
      style="font-size:7.0pt;
line-height:106%;color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Min/Max funding rates are &#177; 100 for SPX, &#177; 25 for ETH/BTC
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:.75in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>b.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Send 5x minimum RM to initialize margin
    </span>
  </p>
  <p className="MsoNormal">
    The LP's book is identified by the LP's eth address. A payment of 0.1 ETH is
    required at the time of book creation. While this fee goes to the oracle,
    the purpose is to prevent someone from trying to clog the system creating
    many accounts they do not intend to use.{" "}
  </p>
  <h2>
    <a name="_Toc26445327">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        8.6 LP Curing Margin
      </span>
    </a>
    <span style="mso-bookmark:_Toc26445327"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    <b>
      <span style={{ color: "#9FB8FF" }}>1 transaction</span>
    </b>
  </p>
  <p className="MsoListParagraph" style="margin-left:.25in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>2.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>send eth to margin</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:.75in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>a.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      function for LP: fundLP(LP address)
    </span>
  </p>
  <p className="MsoNormal">
    The settlement price update on Friday at 4 sends the ending price for that
    week's settlement. Users can see their impending ETH debit or credit to see
    if they need to cure their margin and avoid a default. For LPs estimating
    their cure can be a little complicated. Not only do they have an impending
    PNL, but cancellations at settlement may increase their RM so that even if
    they have a positive PNL, they still need to cure their margin. Also, if an
    investor defaults that subcontract is removed from their book, and so this
    too may cause their RM to increase. New positions are prevented after the
    Friday oracle price update, so the LPs should have a good idea of which
    subcontracts are cancelled, and which are potentially going into default.
    Defaults are costly and avoidable, so hopefully users will be smart enough
    to make them rare. Initially, an LP should be prepared for such a scenario,
    and over time develop a better sense of how frequently this occurs.
  </p>
  <h2>
    <a name="_Toc26445328">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        8.7 Withdrawing margin
      </span>
    </a>
    <span style="mso-bookmark:_Toc26445328"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    <b>
      <span style={{ color: "#9FB8FF" }}>2 transactions</span>
    </b>
  </p>
  <p className="MsoNormal">
    If cancelled, defaulted, or burned, a taker' subcontract is terminated at
    the subsequent settlement and should redeem their margin after the LP
    settles. If LP or Oracle is marked inactive, all takers can redeem their
    subcontracts and receive their entire margins immediately.
  </p>
  <p className="MsoNormal">
    Withdraw functions move ETH from user margins in the book contract to the
    AssetSwap contract. This cannot be done for takers with inactive
    subcontracts, which instead must use the 'redeem' function that deletes the
    subcontract from the LP's struct, debits any default fee if applicable, and
    then sends the entire margin to the investor. This also cannot be done
    during the settlement period between the weekly oracle settlement price
    update and the LP's book settlement.
  </p>
  <p className="MsoListParagraph" style="margin-left:.25in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>1.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>Withdraw from margin</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:.75in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>a.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>LP: withdrawLP(amount)</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:.75in;text-indent:-.25in">
    <a name="_Hlk26438983">
      <span style={{ color: "#9FB8FF" }}>b.</span>
    </a>
    <span style="mso-bookmark:_Hlk26438983">
      <span
        style="font-size:7.0pt;line-height:
106%;color:#9FB8FF"
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
      </span>
      <span style={{ color: "#9FB8FF" }}>
        Taker withdrawTaker(amount, address, subcontract ID)
      </span>
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:.25in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>2.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>Withdraw from AssetSwap</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:.75in;text-indent:-.25in">
    <a name="_Hlk26439062">
      <span style={{ color: "#9FB8FF" }}>a.</span>
    </a>
    <span style="mso-bookmark:_Hlk26439062">
      <span
        style="font-size:7.0pt;line-height:
106%;color:#9FB8FF"
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
      </span>
      <span style={{ color: "#9FB8FF" }}>Both: withdrawFromAssetSwap()</span>
    </span>
  </p>
  <h2>
    <a name="_Toc26445330">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        8.8 LP cancellation
      </span>
    </a>
    <span style="mso-bookmark:_Toc26445330"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    <b>
      <span style={{ color: "#9FB8FF" }}>1 or 2 transactions</span>
    </b>
  </p>
  <p className="MsoNormal">
    There are two cancellation methods for LPs. The first is a standard
    cancellation of a subcontract, which can only be closed at the settlement
    price, not intraweek. The LP does not redeem the subcontract, rather, at
    settlement the RM is adjusted for the LP to reflect the cancellation and the
    LP can withdraw their excess margin.
  </p>
  <p className="MsoNormal">
    If an LP has a large book and wants to close the book, cancelling each
    specific subcontract would be onerous. Therefore, we allow the LP to exit
    painlessly, though it requires a wait time of 28 days.{" "}
  </p>
  <p className="MsoNormal">
    To enact this, the LP must first execute the function endBook, which sets
    the cancellation at 28 days after its invocation. This cannot be undone.
    Once this day has passed, the LP must execute the activateEndBook function,
    which tells the LP book to allow all takers to redeem their subcontracts at
    the subsequent settlement, and to never process a new take or settlement.
    The next settlement will be the last settlement for the LP's book. After the
    final settlement, the LP can withdraw their entire margin to the AssetSwap,
    and then from the AssetSwap to their personal account.
  </p>
  <p className="MsoNormal">Regular cancel, 1 step</p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>1.</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Cancel before Friday oracle update (or Thursday if Friday is a holiday)
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <a name="_Hlk26439077">
      <span style={{ color: "#9FB8FF" }}>a.</span>
    </a>
    <span style="mso-bookmark:_Hlk26439077">
      <span
        style="font-size:7.0pt;line-height:
106%;color:#9FB8FF"
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
      </span>
      <span style={{ color: "#9FB8FF" }}>cancel(address, bytes32, bool)</span>
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.5in;text-indent:-1.5in">
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>i.</span>
    <span
      style="font-size:7.0pt;
line-height:106%;color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      set bool to true if you want to cancel at the next business day close. If
      the next business day close is Friday, this doesn't make a difference
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>b.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Wait for settlement, see RM adjusted appropriately
    </span>
  </p>
  <p className="MsoNormal">Book cancel, 2 steps</p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>1.</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Set book closing time 28 days from day activated
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>a.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>cancelBook()</span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>2.</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      After 28 days, run function again to proceed with cancellation of all
      subcontracts at the next settlement. checks to see if today is after the
      book closing time. If true, LP can activate, which closes the book at
      settlement. At that point all takers can costlessly redeem their
      subcontracts, and the LP can withdraw their entire margin
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>a.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>cancelBook()</span>
  </p>
  <h2>
    <a name="_Toc26445331">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        8.9 LP Executing{" "}
      </span>
    </a>
    <span style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}>
      Execution
    </span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  <p className="MsoNormal">
    <b>
      <span style={{ color: "#9FB8FF" }}>&nbsp;</span>
    </b>
  </p>
  <p className="MsoNormal">
    <b>
      <span style={{ color: "#9FB8FF" }}>1, or 4+ transactions</span>
    </b>
  </p>
  <p className="MsoNormal">
    Anyone can run the settlement function, as it can only be run once each
    week, and as it costs gas, the LP should be pleased to let someone else pay
    to do this. This could also be useful if an evil LP tries to avoid a PNL
    debit by not settling or settling part of their book, in that someone else
    could settle all or part of the book for her.{" "}
  </p>
  <p className="MsoNormal">
    Settlement function is designed for scale, allowing LPs to have up to 2000
    subcontracts. Processing these efficiently requires breaking up the
    subcontract settlement into 3 different cases: new, expiring, and
    roll-overs. It also then processes the final LP settlement&#8212;defining
    her new RM, updating her margin for that week's cumulative PNL credit or
    debit. For LPs with less than 200 subcontracts, the settleBatch function
    should be used because it will work and cost less gas. For LP's with more
    than 200 subcontracts, the LP should run the 'settleParts' function until
    the settlement is completed. This will then take at least 4 steps. It wil
    ltake more than 4 if one of the categories: new, total, expiring, contains
    more than 200 subcontracts.{" "}
  </p>
  <p className="MsoNormal">For small books (&lt; 200 subcontracts)</p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>Run settleBatch </span>
  </p>
  <p className="MsoNormal">For large books</p>
  <p className="MsoNormal">
    As there are 4 functions in the settlement, this means settleParts must be
    executed at least 4 times.
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>1.</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>Settle expiring contracts</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>a.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Requires oracle settlement price update &gt; last book settlement
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.5in;text-indent:-1.5in">
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>i.</span>
    <span
      style="font-size:7.0pt;
line-height:106%;color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      This prevents settlement on, say, Tuesday
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>b.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Requires 24 hours after oracle settlement price update
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>c.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>Requires settleNumber &lt; 1e4</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>d.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>Program loop capped at 200 </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>e.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      repeat if there are more than 200 expiring contracts, ceil(#expiring/200)
      times
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>f.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>when completed, settleNumber = 1e4</span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>2.</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>Settle rollovers</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>a.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>Requires settleNumber &lt; 2e4</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>b.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Repeat if total # positions &gt; 200
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>c.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>When completed settleNumber = 2e4</span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>3.</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>Settle new contracts</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>a.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>Requires settleNumber &lt; 3e4</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>b.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Repeat if total # new positions &gt; 200
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>c.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>When completed, settleNumber = 3e4</span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>4.</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>Settle LP</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>a.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>Requires settleNumber = 3e4</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>b.</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>When completed, settleNumber = 0</span>
  </p>
  <p className="MsoNormal">
    The LP book contract variable, settleNumber, monitors its progress through LP's
    subcontract sequence and makes sure that settlements are completed. Given
    gas constraints, settlement only loops through at most 200 subcontracts per
    execution. This means that if an LP has 402 expiring subcontracts the second
    step must be executed three times. It will show settleNumber = 200 after the
    first settle, 400 after the second, and 10000 after the third. Given the
    settleNumber==10000, the rollover positions can be settled in a similar way.
    When the rollovers are complete, settleNumber == 2e4, which allows the new
    positions to be settled, and then finally, the LPs margin to be settled.{" "}
  </p>
  <h2>
    <a name="_Toc26445332">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        8.10 LP Fee Adjustments
      </span>
    </a>
    <span style="mso-bookmark:_Toc26445332"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    <b>
      <span style={{ color: "#9FB8FF" }}>1 transaction</span>
    </b>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>1.</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      updateFees(uint newClose, int frLong, int frShort)
    </span>
  </p>
  <p className="MsoNormal">
    LP's can adjust their fees at any time. They input the data in basis points
    so 10 is 0.1%. It is the fee in terms of the notional, so when applied in
    the settlement or closingfee, it is multiplied by the leverage ratio to get
    the factor that is applied to the RM.{" "}
  </p>
  <div align="center">
    <table
      className="MsoNormal"
      Table
      border="0"
      cellspacing="0"
      cellpadding="0"
      style="border-collapse:collapse;mso-yfti-tbllook:1184;mso-padding-alt:0in 0in 0in 0in"
    >
      <tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes;height:15.0pt">
        <td
          width="73"
          nowrap
          valign="top"
          style="width:55.0pt;border:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        ></td>
        <td
          width="167"
          nowrap
          colspan="2"
          valign="top"
          style="width:125.0pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="center"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>Close Fee</span>
          </p>
        </td>
        <td
          width="163"
          nowrap
          colspan="2"
          valign="top"
          style="width:122.0pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="center"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:center;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>Funding Rate</span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:1;height:15.0pt">
        <td
          width="73"
          nowrap
          valign="top"
          style="width:55.0pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        ></td>
        <td
          width="100"
          nowrap
          valign="top"
          style="width:75.25pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>ETH or BTC</span>
          </p>
        </td>
        <td
          width="66"
          nowrap
          valign="top"
          style="width:49.75pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>SPX</span>
          </p>
        </td>
        <td
          width="102"
          nowrap
          valign="top"
          style="width:76.25pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>ETH or BTC</span>
          </p>
        </td>
        <td
          width="61"
          nowrap
          valign="top"
          style="width:45.75pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>SPX</span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:2;height:15.0pt">
        <td
          width="73"
          nowrap
          valign="top"
          style="width:55.0pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>Min</span>
          </p>
        </td>
        <td
          width="100"
          nowrap
          valign="top"
          style="width:75.25pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>0</span>
          </p>
        </td>
        <td
          width="66"
          nowrap
          valign="top"
          style="width:49.75pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>0</span>
          </p>
        </td>
        <td
          width="102"
          nowrap
          valign="top"
          style="width:76.25pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>-100</span>
          </p>
        </td>
        <td
          width="61"
          nowrap
          valign="top"
          style="width:45.75pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>-25</span>
          </p>
        </td>
      </tr>
      <tr style="mso-yfti-irow:3;mso-yfti-lastrow:yes;height:15.0pt">
        <td
          width="73"
          nowrap
          valign="top"
          style="width:55.0pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal"
          >
            <span style={{ color: "#9FB8FF" }}>Max</span>
          </p>
        </td>
        <td
          width="100"
          nowrap
          valign="top"
          style="width:75.25pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>100</span>
          </p>
        </td>
        <td
          width="66"
          nowrap
          valign="top"
          style="width:49.75pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>25</span>
          </p>
        </td>
        <td
          width="102"
          nowrap
          valign="top"
          style="width:76.25pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
          >
            <span style={{ color: "#9FB8FF" }}>100</span>
          </p>
        </td>
        <td
          width="61"
          nowrap
          valign="top"
          style="width:45.75pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt;height:15.0pt"
        >
          <p
            className="MsoNormal"
            align="right"
            style="margin-bottom:0in;margin-bottom:.0001pt;
  text-align:right;line-height:normal"
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
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        8.11 LP Adjust minimum RM size
      </span>
    </a>
    <span style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}>
      {" "}
    </span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    <b>
      <span style={{ color: "#9FB8FF" }}>1 transaction</span>
    </b>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>1.</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>adjustMinRM(min amount)</span>
  </p>
  <p className="MsoNormal">
    The minimum RM for an LP can be adjusted to avoid smaller subcontracts, but
    also is a way to avoid new takes, in that if set to the maximum (65535),
    there will be no more new takers if one does not have enough excess margin
    to handle such a new subcontract.
  </p>
  <h2>
    <a name="_Toc26445334">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        8.12 InactiveOracle
      </span>
    </a>
    <span style="mso-bookmark:_Toc26445334"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    <b>
      <span style={{ color: "#9FB8FF" }}>1 transaction</span>
    </b>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>1.</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>inactiveOracle(LP address)</span>
  </p>
  <p className="MsoNormal">
    If the oracle is inactive and has not posted new settlement prices for 9
    days, anyone can execute the inactiveOracle funciton, which allows all
    takers to redeem their subcontracts immediately, and the LP to withdraw its
    entire margin. Once marked inactive, no new takes or settlements can occur.
  </p>
  <h2>
    <span style='mso-fareast-font-family:"Times New Roman";color:#B3C7FF'>
      8.13 Payable functions
    </span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    For functions cancel and burn, a payment for a fee must be sent. Any excess
    payment over the amount owed via contract parameters is sent to the payer's
    margin.
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      burnTaker(LP address, subcontract ID)
    </span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      cancel(LP address, subcontract ID, bool)
    </span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      createBook(RM, close fee, long Funding rate, short funding rate)
    </span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>fundLP(LP address)</span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>take(LP address, uint256, bool)</span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      fundTaker(LP address, subcontract ID)
    </span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>burnLP(LP address, subcontract ID)</span>
  </p>
  <h2>
    <span style='mso-fareast-font-family:"Times New Roman";color:#B3C7FF'>
      8.14 Nonpayable functions that require gas
    </span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  <p className="MsoListParagraph">
    <span style={{ color: "#9FB8FF" }}>&nbsp;</span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      inactiveLP(LP address, subcontract ID)
    </span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>inactiveOracle(LP address)</span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>redeem(LP address, subcontract ID)</span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <a name="_Hlk26439150">
      <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    </a>
    <span style="mso-bookmark:_Hlk26439150">
      <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
      <span style={{ color: "#9FB8FF" }}>settleParts(LP address)</span>
    </span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>settleBatch(LP address)</span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>withdrawFromAssetSwap()</span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <a name="_Hlk26439500">
      <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    </a>
    <span style="mso-bookmark:_Hlk26439500">
      <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
      <span style={{ color: "#9FB8FF" }}>withdrawLP(uint256)</span>
    </span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      withdrawTaker(uint256, LP address, subcontract ID)
    </span>
  </p>
  <h2>
    <span style='mso-fareast-font-family:"Times New Roman";color:#B3C7FF'>
      8.15 Getter functions
    </span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  <p className="MsoListParagraph">
    <span style={{ color: "#9FB8FF" }}>&nbsp;</span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>getBookData(LP address)</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>input: LP address</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>book</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>lpMargin (in wei)</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>totalLpLong (in wei)</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>totalLpShort (in wei)</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>lpRM (in wei)</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>bookMinimum (in eth)</span>
  </p>
  <p
    className="MsoListParagraph"
    style="margin-top:0in;margin-right:0in;margin-bottom:
0in;margin-left:1.0in;margin-bottom:.0001pt;text-indent:-.25in"
  >
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>bookStatus</span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.25in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>0: fine</span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.25in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      1: cancelled, all contracts expire at next book settlement
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.25in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      2: LP burned, all subcontracts expire at next book settlement
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.25in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      3: Book dead via burn, default, cancel, everyone can redeem asap
    </span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>getSettleInfo(LP address)</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>number of new </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>number of expiring subcontracts</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      number of total subcontracts in LP's struct list
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      includes new and expiring contracts
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>lastBookSettleUTCTime</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>settleNumber</span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      getSubkData1(LP address, subcontract ID)
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>taker address</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>tarker margin</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>required margin </span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>getSubkData2</span>
  </p>
  <p
    className="MsoListParagraph"
    style="margin-top:0in;margin-right:0in;margin-bottom:
0in;margin-left:1.0in;margin-bottom:.0001pt;text-indent:-.25in"
  >
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>subkStatus</span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.25in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>0: new contract </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.25in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      1: active, neither new or canceled.
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.25in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      2: taker has canceled, subcontract expires at next book settlement
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.25in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      3: LP has canceled, subcontract expires at next book settlement
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.25in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      4: investor has canceled intraweek, though subcontract expires at next
      book settlement
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.25in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      5: taker has burned, subcontract expires at next book settlement
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.25in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      6: subcontract is no longer being settled, but it still exists in LPs
      book. Taker should redeem to withdraw margin to asset Swap contract, then
      withdraw from the AssetSwap contract to their personal address
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:1.25in;margin-bottom:.0001pt"
  >
    <span style={{ color: "#9FB8FF" }}>
      7: taker defaulted at settlement and will be debited 50% of their RM at
      redemption (contract will burn whatever is there if taker margin is less
      than 50% of RM).
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>priceDay</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>closeFee</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>fundingRate</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>takerSide</span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>hourOfDay()</span>
  </p>
  <h2>
    <a name="_Toc26445337">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        8.16 User Rights and Restrictions
      </span>
    </a>
    <span style="mso-bookmark:_Toc26445337"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  <p className="MsoListParagraph">
    <span style={{ color: "#9FB8FF" }}>&nbsp;</span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>No takes between 4-5 PM</span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>Settlement Period restrictions</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Between oracle.lastOracleSettle and subsequent LP's settle time
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Approximately Friday 4 PM through Saturday 4 PM
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.5in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>No new positions </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.5in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>Users cannot withdraw margin</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.5in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>Users cannot cancel </span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>Users can fund at any time</span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Users can withdraw from the AssetSwap contract at any time
    </span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Users can create new books, become an LP, at any time
    </span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>LPs can change fees at any time</span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Subcontracts use the fees posted at time of instantiation for the life of
      the position
    </span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Users cannot withdraw below their RM while subcontract is active
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Subtracting the amount requested for withdrawal must result in a margin
      greater than or equal to the required margin. After default, cancellation,
      etc., takers can withdraw via the redeem function, while the LP can
      withdraw via her Lpwithdraw function.
    </span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Users can withdraw if LP misses settlement
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      If the LP's book has not been settled within 48 hours of the last oracle
      settlement price update, the first taker to execute the inactive LP
      function receives the LP's default payment, and then everyone can withdraw
      their entire margin via the redeem function. The book cannot take new
      subcontracts or settle again.{" "}
    </span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Users can withdraw if oracle inactive
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in;text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8259;</span>
    <span
      style="font-size:7.0pt;line-height:106%;
color:#9FB8FF"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </span>
    <span style={{ color: "#9FB8FF" }}>
      If the book has not been settled for 10 days, this means either the LP is
      inactive or the oracle is inactive. As users have an incentive to invoke
      the inactiveLP function, the only reason a book can continue for 9 days
      without a settlement would be if the oracle has not posted new settlement
      prices. Thus, we only need this one restriction to capture the root
      problem. There is no direct benefit for flagging an inactive oracle, but
      once done, all players can withdraw their margins.
    </span>
  </p>
  <p className="MsoListParagraph" style="margin-left:1.0in">
    <span style={{ color: "#9FB8FF" }}>&nbsp;</span>
  </p>
  <h1>
    <a name="_Toc26445338">
      <span style={{ msoFareastFontFamily: "Times New Roman" }}>
        9 Security Considerations
      </span>
    </a>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h1>
  &nbsp;
  <p
    className="MsoNormal"
    style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
normal"
  >
    <span style={{ color: "#9FB8FF" }}>
      This suite of contracts emphasize simplicity to minimize attack surfaces.
      While unknown unknowns exist, the following known attacks are addressed.
    </span>
  </p>
  &nbsp;
  <h2>
    <a name="_Toc26445339">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        9.1 General Attack Issues
      </span>
    </a>
    <span
      style="mso-bookmark:
_Toc26445339"
    ></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p
    className="MsoNormal"
    style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
normal"
  >
    <b>
      <span style={{ color: "#9FB8FF" }}>Re-Entrancy Attacks </span>
    </b>
  </p>
  &nbsp;
  <p className="MsoNormal">
    The contract has been written with the Checks-Effects-Interactions pattern
    to avoid reentry attacks. It also uses 'transfer' and not 'send' or 'call'
    to move ether off the contract. The only function that sends Ether outside
    the contract is the 'withdrawFromAssetSwap' function which follows the
    recommended withdrawal pattern. Any attempt to remove Ether from the
    contracts must go through this function.{" "}
  </p>
  &nbsp;
  <p
    className="MsoNormal"
    style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
normal"
  >
    <b>
      <span style={{ color: "#9FB8FF" }}>Sending and Receiving Ether</span>
    </b>
  </p>
  &nbsp;
  <p className="MsoNormal">
    As mentioned in the re-entrancy section, the only way ether is sent out of
    the smart contracts is through the 'withdrawFromAssetSwap' function in the
    SwapMarket contract. This follows the general security advice of favoring
    pulling rather than pushing. This function uses Solidity's 'transfer'
    function, which is considered the safest way to send Ether to an unknown
    contract. Furthermore, none of the OracleSwap contracts have a fallback
    function. The contracts have been compiled and deployed with a newer version
    of Solidity so that any Ether sent without a function call will be rejected.
  </p>
  &nbsp;
  <p
    className="MsoNormal"
    style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
normal"
  >
    <b>
      <span style={{ color: "#9FB8FF" }}>Integer Overflow</span>
    </b>
  </p>
  &nbsp;
  <p className="MsoNormal">
    The contracts utilize one internal procedure to guarantee that the
    subtraction of uints does not wrap around zero (subzero). Addition,
    meanwhile, is left alone because in all cases there is no scenarior where an
    item would reach the top of its range. That is, in checking all the
    potential edge cases, it became apparent that an integer wrap-around is
    impossible, making the use of a <i>safemath</i> procedure redundant. Our
    subzero function, in contrast, is helpful because in many cases, we want y =
    max(0, y&#8210; x), which this function does as well as making sure a uint
    does not wrap around its range.
  </p>
  <p
    className="MsoNormal"
    style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
normal"
  >
    <b>
      <span style={{ color: "#9FB8FF" }}>DoS and Gas Limit Attacks</span>
    </b>
  </p>
  &nbsp;
  <p className="MsoNormal">
    Because there is a finite gas limit that can be spent within a single block,
    it is important to ensure that no malicious users can manipulate the
    contract to a state where any transactions will fail by exceeding the gas
    limit. In the smart contracts associated with OracleSwap, user-exposed
    functions have either constant execution gas costs or caps. The settle
    function loops through an LP's set of active subcontracts, but each loop is
    capped at 200 subcontracts, and the worst-case scenario here is 5MM gas,
    well below the 8MM block limit. If there are 545 subcontracts, the procedure
    would require 3 sequential settle function calls on the longs.{" "}
  </p>
  <p className="MsoNormal">
    Once a taker is no longer active, they should 'pop' their subcontract from
    the list of long and short subcontracts, as this is the only way for them to
    receive back their entire margin. If they fail to do so, however (say if
    they had zero margin to claim) the LP or anyone else can run this function
    and remove the subcontract for minimal gas. There is a cap of 2000 long or
    short positions.
  </p>
  <p className="MsoNormal">
    A DoS problem can also occur if a contract requires an external call to
    finish to progress to a new state, and this external call is corrupted or
    neglected. OracleSwap does not have an external calls outside the contract.{" "}
  </p>
  <p className="MsoNormal">
    In the worst-case scenario where the contract was frozen, all users can
    access their entire margins if settlement has not occurred for 10 days.
    Withdrawals and redeem function calls require little gas.
  </p>
  <p
    className="MsoNormal"
    style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
normal"
  >
    <b>
      <span style={{ color: "#9FB8FF" }}>Timestamp Dependence</span>
    </b>
  </p>
  &nbsp;
  <p className="MsoNormal">
    It is known that a miner may manipulate the block timestamp up to about 30
    seconds. The OracleSwap contracts rely on the block timestamp often to
    restrict access to certain functions. These functions include when the
    Oracle may post prices, when new subcontracts can be taken, how often
    subcontracts may be settled, etc. The scale of all of the time-dependent
    checks are at a large magnitude (usually hours) and can tolerate
    manipulation of 30 seconds.{" "}
  </p>
  <p
    className="MsoNormal"
    style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
normal"
  >
    <b>
      <span style={{ color: "#9FB8FF" }}>Front Running</span>
    </b>
  </p>
  &nbsp;
  <p className="MsoNormal">
    Some Ethereum contracts may have issues where block miners may manipulate
    the order in which transactions are executed within a block. This a typical
    problem for market contracts where an attacker might see a transaction for
    an order and insert their transaction to be executed prior. However, the
    nature of OracleSwap makes this kind of attack irrelevant. Since forward
    starting prices are used to open and close a position, pushing someone out
    of the way to get access to liquidity (say the LP only offered enough to
    satisfy one new long position), or take an LP's offer when they wanted to
    retract it, would merely be a minor inconvenience, not costly.{" "}
  </p>
  <p
    className="MsoNormal"
    style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
normal"
  >
    <b>
      <span style={{ color: "#9FB8FF" }}>Entropy</span>
    </b>
  </p>
  &nbsp;
  <p className="MsoNormal">
    No uncertainty or random number generation is used for the OracleSwap suite.
    This makes the contract inherently resistant to attacks that try to exploit
    the generation of uncertainty in the smart contracts.
  </p>
  <p
    className="MsoNormal"
    style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
normal"
  >
    <b>
      <span style={{ color: "#9FB8FF" }}>Unexpected Ether</span>
    </b>
  </p>
  &nbsp;
  <p className="MsoNormal">
    This attack uses the fact that some contracts use this.balance to represent
    the amount of ether that should be in the contract. As 'selfdestruct' forces
    a contract to accept ETH, one can put unclaimed ETH into a contract.
    Further, default and burn payments are effectively left in the contract
    address, but outside any user's margin or balance, so such a scenario can
    easily happen. OracleSwap does not reference this.balance in any of its
    functions.
  </p>
  <p
    className="MsoNormal"
    style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
normal"
  >
    <b>
      <span style={{ color: "#9FB8FF" }}>DelegateCall</span>
    </b>
  </p>
  &nbsp;
  <p className="MsoNormal">
    In the second Parity Multisig Wallet attack ($150M) uninitialized libraries
    were accessed via a 'delegatecall' function, allowing the hacker to become
    the owner of a contract library. The hacker then called the 'kill' function,
    which froze the contract and all the ETH contained in it. OracleSwap does
    not use 'delegatecall' and uses no external libraries.{" "}
  </p>
  <p
    className="MsoNormal"
    style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
normal"
  >
    <b>
      <span style={{ color: "#9FB8FF" }}>Fallback functions</span>
    </b>
  </p>
  &nbsp;
  <p
    className="MsoNormal"
    style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
normal"
  >
    <span style={{ color: "#9FB8FF" }}>
      OracleSwap does not have any fallback functions.
    </span>
  </p>
  <p
    className="MsoNormal"
    style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
normal"
  >
    <b>
      <span style={{ color: "#9FB8FF" }}>
        External contract referencing non-static contracts.{" "}
      </span>
    </b>
  </p>
  &nbsp;
  <p className="MsoNormal">
    OracleSwap does not reference external non-static contracts. Initially, the
    Oracle contract is published without knowing the 3 AssetSwap contracts it is
    servicing, though it imports the contract code at compile time. TheAssetSwap
    contracts are all published with the oracle's address in its contract
    constructor, and after that cannot be changed. Once the 3 AssetSwap
    contracts are published, they are loaded into the Oracle contract, and
    cannot be replaced or added to. Users can see these addresses using the
    method 'AssetSwaps' in the Oracle contract, and also accessing the oracle
    method in the AssetSwap contract.
  </p>
  <p
    className="MsoNormal"
    style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
normal"
  >
    <b>
      <span style={{ color: "#9FB8FF" }}>Uninitialized Storage pointers</span>
    </b>
  </p>
  &nbsp;
  <p className="MsoNormal">
    This can cause storage locations for state variables to become transposed,
    which effectively changes the value of various parameters. The Solidity
    compiler shows a warning for uninitialized storage variables, and OracleSwap
    does not contain any.{" "}
  </p>
  <p
    className="MsoNormal"
    style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
normal"
  >
    <b>
      <span style={{ color: "#9FB8FF" }}>Short address attack</span>
    </b>
  </p>
  &nbsp;
  <p className="MsoNormal">
    Some contracts concatenate inputs to save gas, so a short address or
    parameter then alters a subsequent parameter, such as the amount sent.
    OracleSwap does not concatenate inputs.{" "}
  </p>
  <p
    className="MsoNormal"
    style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
normal"
  >
    <b>
      <span style={{ color: "#9FB8FF" }}>Unchecked call return values</span>
    </b>
  </p>
  &nbsp;
  <p className="MsoNormal">
    When 'call' or 'send' are used to send ether they return a boolean
    indicating if the call succeeded or failed, but they do not revert if these
    functions fail, rather, they simply return false. This can cause the
    contract to think it sent ether when it did not, which can then allow other
    contract users to access this unspent ether. OracleSwap uses 'transfer',
    never 'call' or 'send'.{" "}
  </p>
  <p
    className="MsoNormal"
    style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
normal"
  >
    <b>
      <span style={{ color: "#9FB8FF" }}>Constructor Misnaming</span>
    </b>
  </p>
  &nbsp;
  <p className="MsoNormal">
    If a constructor does not match name of contract it will behave like a
    function, leading to unexpected consequences. This error involves a
    constructor not matching the contract name. This is not possible after
    v0.4.22, and OracleSwap uses Solidity v0.5.14. OracleSwap also has
    constructor names that match the contract name.{" "}
  </p>
  <p
    className="MsoNormal"
    style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
normal"
  >
    <b>
      <span style={{ color: "#9FB8FF" }}>
        Floating point and precision errors
      </span>
    </b>
  </p>
  &nbsp;
  <p className="MsoNormal">
    Solidity does not use fixed-point types, requiring developers to keep track
    of the precision of the numbers as they are being divided. Functions are
    designed so that when there is division, the numerator and denominator are
    in units such that precision is not lost. All prices are input in pennies
    (e.g., 18100 for $181.00). Other parameters like the closing cost are in
    units that require dividing by 1e4, etc., to generate the appropriate
    output.
  </p>
  <p
    className="MsoNormal"
    style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
normal"
  >
    <b>
      <span style={{ color: "#9FB8FF" }}>tx.origin</span>
    </b>
  </p>
  &nbsp;
  <p className="MsoNormal">
    Contracts that authorize users using the tx.origin variable are susceptible
    to phishing attacks that trick users into performing authenticated actions
    on the vulnerable contract. OracleSwap does not use tx.origin.{" "}
  </p>
  <p
    className="MsoNormal"
    style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
normal"
  >
    <b>
      <span style={{ color: "#9FB8FF" }}>Public Visibility</span>
    </b>
  </p>
  &nbsp;
  <p className="MsoNormal">
    The public visibility of functions, where an outsider can see and access a
    function can allow hackers to manipulate the contract, such as in the first
    Parity attack ($31M) where a hacker reset the ownership of these contracts
    and then drained their ether. Access to public functions in OracleSwap
    involving state changes to an active subcontract or user data is restricted
    by address.
  </p>
  &nbsp;
  <p
    className="MsoNormal"
    style="margin-bottom:0in;margin-bottom:.0001pt;line-height:
normal"
  >
    <b>
      <span style={{ color: "#9FB8FF" }}>
        Other General Code Considerations
      </span>
    </b>
  </p>
  &nbsp;
  <p className="MsoNormal">
    Access to critical functions is restricted to either the oracle or the
    players in the contract. The multi-contract structure ensures that any
    attempt to sabotage a liquidity provider's book will be restricted to that
    liquidity provider alone and will not affect all providers.{" "}
  </p>
  <p className="MsoNormal">
    If somehow the Oracle or LP disappears, all funds will be made available to
    users again after 10 days of the admin not updating prices. There is no
    self-destruct, freeze, or other type of mechanism that would preclude users
    from accessing their margins.{" "}
  </p>
  <h2>
    <a name="_Toc26445340">
      <span
        style={{ msoFareastFontFamily: "Times New Roman", color: "#B3C7FF" }}
      >
        9.2 Contract Constraints on the Oracle
      </span>
    </a>
    <span style="mso-bookmark:_Toc26445340"></span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    The only attack surface comes from an evil oracle posting fraudulent prices
    to inflate the PNL of conspirator positions, presumably the evil oracle's
    sock-puppet accounts. Everything is vulnerable if the incentives do not
    align honesty with profit-maximization at every level. OracleSwap's oracle
    can cheat just as Infura or Bitcoin's miners can cheat, but they are all
    constrained by their self-interest. Aligning incentives lowers transaction
    costs, which makes it easier to create contracts that people want to use.{" "}
  </p>
  <p className="MsoNormal">
    Creating a mechanism that makes honesty the Oracle/admin's dominant strategy
    involves designing particular payoffs and options, which implies various
    constraints.
  </p>
  <p className="MsoNormal">
    There are several restrictions within the contract code to support the
    following objectives:
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Make the Oracle settlement price update time predictable so that an evil
      Oracle cannot sneak in a settlement price while users are not paying
      attention
    </span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Give users time to react to an Oracle price update so they can burn if the
      Oracle cheats
    </span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Make it so that users have an incentive to burn a cheating Oracle's payoff
      rather than let him keep it
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
    style="margin-top:12.0pt;margin-right:0in;margin-bottom:
12.0pt;margin-left:.5in;text-indent:-.25in"
  >
    <span style={{ color: "#9FB8FF" }}>1.</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Oracle Contract updates cannot occur for at least 20 hours after the
      previous oracle price update
    </span>
  </p>
  <p
    className="MsoListParagraph"
    style="margin-top:12.0pt;margin-right:0in;margin-bottom:
12.0pt;margin-left:.5in;text-indent:-.25in"
  >
    <span style={{ color: "#9FB8FF" }}>2.</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Oracle contract settlement updates can only occur when the prior oracle
      update flagged that the next oracle update will be a settlement update
      (specifically, the boolean '<i>nextUpdateSettle'</i> is marked true), or
      if the price vector has all but its last slot filled. This way a player
      can know that a settlement price, and thus a settlement, cannot happen for
      at least 2 days if the next price is not earmarked as a settlement price
      (it would take 20 hours after the next price to post a settlement price,
      and then another 24 hours until the LP could settle their book.{" "}
    </span>
    <a name="_Hlk27052345"></a>
  </p>
  <p
    className="MsoListParagraph"
    style="margin-top:12.0pt;margin-right:0in;margin-bottom:
12.0pt;margin-left:.5in;text-indent:-.25in"
  >
    <span style={{ color: "#9FB8FF" }}>3.</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      The book contracts prevent users from running settlement more than once
      during the settlement period. Once the final settlement function is
      completed the lastBookUpdate time is updated, and the settlement process
      cannot commence if the last book update time is greater than the last
      oracle settlement time.{" "}
    </span>
  </p>
  <p
    className="MsoListParagraph"
    style="margin-top:12.0pt;margin-right:0in;margin-bottom:
12.0pt;margin-left:.5in;text-indent:-.25in"
  >
    <span style={{ color: "#9FB8FF" }}>4.</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Players have at least 24 hours from Oracle settlement update to cure their
      margins or burn before the LP settles her book.
    </span>
  </p>
  <p
    className="MsoListParagraph"
    style="margin-top:12.0pt;margin-right:0in;margin-bottom:
12.0pt;margin-left:.5in;text-indent:-.25in"
  >
    <span style={{ color: "#9FB8FF" }}>5.</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      During the settlement period the next Oracle price update must wait at
      least 48 hours so the LP can settle her book on the oracle's settlement
      prices. This allow the LP time to settle.{" "}
    </span>
  </p>
  <p
    className="MsoListParagraph"
    style="margin-top:12.0pt;margin-right:0in;margin-bottom:
12.0pt;margin-left:.5in;text-indent:-.25in"
  >
    <span style={{ color: "#9FB8FF" }}>6.</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Withdrawals are not permitted during the settlement period. This prevents
      players from withdrawing their excess margin to zero, which would reduce
      their default cost if they were left with margin less than RM at
      settlement (after the PNL attribution). Players with an excess margin
      greater than 50% of their RM will find burning just as costly as
      defaulting, but with the bonus of depriving a cheating Oracle of getting
      any of their ETH. This increase in the probability of burning conditional
      upon cheating lowers the incentive for the Oracle to cheat. We want to
      make burning more probable in the event of a cheat, as this will make the
      oracle more honest.
    </span>
  </p>
  <p
    className="MsoListParagraph"
    style="margin-top:12.0pt;margin-right:0in;margin-bottom:
12.0pt;margin-left:.5in;text-indent:-.25in"
  >
    <span style={{ color: "#9FB8FF" }}>7.</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Cancels are not permitted during the settlement period. The main reason is
      to prevent the look-back option where one sees Friday prices, and on
      Saturday finds that the subsequent weekly returns may be bad for them
      (e.g., they are long and the price fell dramatically Friday evening). It
      also forces players to either burn or default if the Oracle posts
      fraudulent settlement prices.
    </span>
  </p>
  <p
    className="MsoListParagraph"
    style="margin-top:12.0pt;margin-right:0in;margin-bottom:
12.0pt;margin-left:.5in;text-indent:-.25in"
  >
    <span style={{ color: "#9FB8FF" }}>8.</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Defaults are paid to the oracle to encourage burning. Even if the player
      had less than 0.5RM, say 0.3RM left over, while the default fee would be
      strictly less than the burn fee, buring depriveshe cheating oracle of the
      0.3RM and the fraudulent PNL, maximizing burn pain.{" "}
    </span>
  </p>
  <h2>
    <span style='mso-fareast-font-family:"Times New Roman";color:#B3C7FF'>
      9.3 Contract Constraints on the Functions
    </span>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
  </h2>
  &nbsp;
  <p className="MsoNormal">
    The LP book is accessed by looking at the address of the book contract
    created by the message sender. Thus one must have the private key to
    0x123...456 to acces the book contract associated with the LP address
    0x123...456. These functions include
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>Updating fees</span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Adjusting minimum RM for subcontracts
    </span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>Burning their book</span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Withdrawing margin from the book contract
    </span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>
      Setting the book up for cancellation in 4 weeks
    </span>
  </p>
  <p className="MsoNormal">
    The taker to the subcontract must access the contract via their taker
    address to execute the following functions
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>Withdraw</span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>Burn</span>
  </p>
  <p className="MsoListParagraph" style="text-indent:-.25in">
    <span style={{ color: "#9FB8FF" }}>&#8226;</span>
    <span style="font-size:7.0pt;line-height:106%;color:#9FB8FF">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span style={{ color: "#9FB8FF" }}>Inactivate the negligent LP</span>
  </p>
  <p className="MsoNormal">
    As all withdrawals are sent to the AssetSwap contract into the message
    sender's balance. It can then be withdrawn, where the message sender's
    address points to a balance in the AssetSwap contract, and any money in that
    address is sent out of the AssetSwap contract to the user's off-contract
    account.{" "}
  </p>
  <p className="MsoNormal">
    One can fund their margin using any Ethereum account address.{" "}
  </p>
  <h1>
    <a name="_Toc26445341">
      <span style={{ msoFareastFontFamily: "Times New Roman" }}>
        10 Definitions
      </span>
    </a>
    <span style={{ msoFareastFontFamily: "Times New Roman" }}></span>
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
      This balance is a way station for withdrawals from margin, used to prevent
      re-entry attacks. The AssetSwap balance does not count towards a player's
      margin. A player wishing to take ETH out of their Margin first withdraws
      from their margin to their AssetSwapBalance, and then from this Withdrawal
      Balance to their off-contract public address. User money is transferred to
      the AssetSwap only via withdrawals and redemptions.
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
      : Each asset serviced by the Oracle Price Contract has a separate
      AssetSwap Contract. For example, BTC will have a separate contract than
      the SPX. They are all identical, just with different reference assets and
      leverage ratios.{" "}
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
      The adjustment in a CFD or swap contract that accounts for interest rates,
      dividends, storage costs, convenience yield, and risk premium. This is
      implicit in the difference between a futures/forward and cash price, but
      for a swap, there is only a cash price, so the basis is applied as an
      effective funding rate, applying symmetrically to longs and shorts
      (subtracted from the long return, added to the short return). In this
      contract, the basis is merely implicit within the differential between the
      long and short funding rate, which also includes a target rate that is
      identical for longs and shorts for a specific asset. The basis
      equilibrates long and short swap demand. Funding rates, which include the
      basis, are constrained to be between&#8210;1 and +1% per week for crypto,
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
      : When a player first posts as an LP, the asset contract creates a unique
      contract for that investor's contract address that will hold all that LP's
      counterparties. While all players always interact with the base Asset Swap
      Contract, this then transacts with the active LP Book Contracts. All
      margin ETH is held within the Book contract, while ETH in AssetSwap
      Balances are held in the Asset Swap contract.{" "}
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
      : A counterparty can burn their contract, which then prevents their
      counterparty from receiving their debit at the subsequent Weekly
      Settlement. The payable burn fee of &frac12;&#8729;RM is not attributed to
      any player margin, so it is inaccessible and effectively burned. A burn
      costs as much as a default, though the payment mechanism is different, in
      that the burn requires the player to send &frac12;&#8729;RM but then does
      not debit the player's margin at redemption; a default debits the players
      margin at redemption (or, for the LP, at the final settlement).
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
      A business day corresponds to a New York Stock Exchange business day and
      are the only days that an initial subcontract price is set, or that a
      Weekly Settlement can occur. The Oracle Price Contract does not record
      non-business day prices, or initialize subcontracts on these days, though
      players can take on these non-business days and their subcontract will
      initialize at the next business day. Business days thus exclude weekends
      and about nine recognized holidays. These can be found by Googling 'NYSE
      holidays' which are published three years in advance. Half-day holidays
      will use the 4 PM crypto price, though the SPX price will use the 1 PM
      official closing price.
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
      A counterparty who wishes to terminate the contract initiates a cancel.
      This must be done before the Friday Oracle Price Update around 4:15 PM.{" "}
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
      counterparties put up a fraction of the notional, their margin, and use an
      asset price for generating a mark-to-market PNL on that notional amount.
      Unlike futures, the reference is not a separately traded price, but rather
      the cash price, so to account for the basis we see in the futures market,
      long and short positions are charged different funding rates in CFDs.
      These are also called total return swaps, perpetual swaps, or just swaps.
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
      : Crypto prices are taken around 4 PM ET on NYSE Business Days from
      various but unnamed Bitwise-approved exchanges. We use the official close
      for the SPX, which refers to 4:00 PM but is finalized around 4:10 PM.
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
      If a counterparty's margin is below their subcontract's Required Margin at
      settlement, the subcontract defaults and is terminated. This can only
      occur at the Weekly Settlement, as investor withdrawals below a
      subcontract's RM are not allowed and a PNL debit, can only be applied at
      the weekly settlement. Players should be able to anticipate if they have
      enough ETH to cure their margin prior to the Oracle contract settlement
      day update at 4 PM, and so by canceling beforehand avoid this charge.{" "}
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
      Total or Actual Margin minus the Required Margin. This amount can be
      withdrawn at any time outside of the settlement period.
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
      The overnight interest rate at which US banks lend to each other. It
      serves as the basis for the cost of funds among financial institutions and
      is the opportunity cost of a US dollar.
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
      <span style={{ color: "#9FB8FF" }}>Forward-Starting Price:</span>
    </b>
    <span style={{ color: "#9FB8FF" }}>
      {" "}
      a contract price set after an agreement to open or close a position is
      made, such as the next closing price (market-on-close) or the next day's
      value-weighted average price.{" "}
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
      : The weekly rate applied to the Taker. This rate is subtracted from the
      return for the taker and applied to the notional amount. These can be
      negative, in which case, would add to the Taker return. LP's set their own
      funding rates, and by adjusting the difference between the long and short
      funding rates, equilibrate their long and short balances.{" "}
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
      The OracleSwap's leverage ratio is the ratio of the notional to the RM for
      that asset. It can be thought of as the inverse of the required margin
      ratio. It is set such that the RM should cover 99.5% of weekly events, and
      is currently 2.5 for the ETHUSD and BTCUSD, and 10.0 for the SPX.
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
      : A liquidity provider. They post an amount available for long or short
      takers. They are paid via funding rates on their gross exposure for the
      unpredictable risk generated by ending up net short or long.{" "}
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
      : A Market-On-Close (MOC) order is a non-limit market order that is
      executed at some official closing price, which is at 4 PM for US stock
      markets. MOC orders do not specify a price, as these are forward-starting
      and thus unknown at the time of order. OracleSwap uses quasi-MOC orders,
      in that the oracle samples from a five-minute window around 4 PM.{" "}
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
      This is the total ETH attributed to a player. A Taker with several
      different subcontracts will have a separate margin for each, while an LP
      will have one margin for all her various counterparties. This amount is in
      the LP book contract. It takes only one function to fund into margin, but
      two functions to withdraw (first from the margin, secondly from the
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
      this is the most a taker can take, long or short, for a given LP. It is a
      function of the LP's current book. For example, if the LP shows 100 Margin
      with no positions, a Taker can only go long or short 50. If the LP shows a
      margin of 100, with the LP currently long 100, Takers can only go short.
    </span>{" "}
  </p>
  <p
    className="MsoNormal"
    style="margin-top:12.0pt;margin-right:0in;margin-bottom:
0in;margin-left:0in;margin-bottom:.0001pt;text-indent:.5in"
  >
    <span style={{ color: "#9FB8FF" }}>
      Max Long Take = Max(0, LP's Total Margin&#8210; LP's Short + LP's Long)
    </span>
  </p>
  <p className="MsoNormal" style="margin-bottom:12.0pt;text-indent:.5in">
    <span style={{ color: "#9FB8FF" }}>
      Max Short Take = Max(0, LP's Total Margin + LP's Short&#8210; LP's Long)
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
      An LP's Required Margin is netted, meaning it is the difference between
      the gross long and short for an LP. For example, if the gross long is 80,
      gross short is 50, the net margin is 30. The LP's RM is equal to their net
      margin, abs(long short). Only the LP has an RM based on a Net Margin. For
      a taker, there is no netting if they take offsetting positions within an
      LP's book.
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
      Notional is the amount applied to the reference asset return to generate
      the ETH PNL. It is generated by multiplying the RM by the Asset Contract's
      specific Leverage Ratio and then the ETH price in USD. This is in USD per
      ETH.{" "}
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
      <span style={{ color: "#9FB8FF" }}>Oracle Price Contract</span>
    </b>
    <span style={{ color: "#9FB8FF" }}>
      : The Oracle Price Contract warehouses the asset prices of all AssetSwap
      Contracts serviced by OracleSwap. It contains all the information needed
      to calculate subcontract returns, and so holds the closing prices for the
      current week (i.e., last Friday to the current date). The Oracle posts
      prices between 4 and 5 PM New York City time. At settlement update, the
      oracle contract pushes the asset returns to each AssetSwap contract.
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
      : Synonym for an OracleSwap counterparty, investor/taker or LP.
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
      : Profit-n-loss, the cash flow between two parties of a subcontract, where
      the loser/debtor has a negative PNL, and the winner/creditor has a
      symmetric positive PNL.
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
      : Required Margin. Each subcontract has a specific RM for its life, in
      units of ETH. RM must be greater than or equal to the LP's minimum RM.
      This sets the notional amount via the leverage ratio, so given the RM we
      have a notional and vice versa.
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
      Settlement is applied each weekend by all LPs with active subcontracts via
      the Settlement Function. This uses the Friday closing prices recorded in
      the Oracle Price contract to the subcontracts and then transfers the
      resulting PNL from the debtor to the creditor. If Friday is an exchange
      holiday (e.g., Christmas), the prior business day, Thursday, will be the
      settlement day.
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
      The time between when the Oracle contract settlement prices are updated
      Friday 4 PM and when the LP runs the settlement function 24-48 hours later
      is exceptional. Withdraws and cancels are not allowed so that users who
      see a fraudulent price report by an evil Oracle are then properly incented
      to burn rather than subject themselves to another week where they will
      probably be cheated again. Users need to cancel before the settlement
      period, before the Oracle contract update on settlement day, to exit at
      the next settlement.{" "}
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
      The SPX is the index for the S&amp;P500 portfolio, a value-weighted index
      of the top 500 US companies. It is a cash index that excludes dividends.
      In contrast, the SPY is an ETF that trades on stock exchanges, and so its
      price is dividend adjusted.{" "}
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
      The day of the first price for a subcontract. It is determined by the
      Oracle contract, which knows what the next day of the week will be. Thus,
      if it is Tuesday prior to the oracle price update in the 4-5 PM time
      period, the start day will by Tuesday; if it is Tuesday after the oracle
      price update, the start day will be Wednesday. For a position with an
      intraweek close, the price day is actually the ending day price, and so
      the return from start day to settle is subtracted from their returns.
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
      a bilateral agreement between a Taker and LP. It has a specific RM for its
      life, as well as a specific funding rate and closing fee determined at
      trade instantiation. An LP will have many subcontracts. Each
      taker/investor will have the LP as his counterparty.
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
      : A subcontract is uniquely identified on the Blockchain via an LP's
      address and subcontract ID (which is in bytes32). A player can query event
      logs to see how this corresponds to a particular taker address, but within
      the contract, it uses the LP address to find the specific book contract,
      then within that contract, the subcontract ID to find the particular
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
      : A swap in the context of this document is a CFD and so has no expiration
      (e.g., a perpetual swap). A swap account nets a user's positions to
      generate their required margin and total PNL, and its mark-to-market is
      based on the cash price of its reference assets; it also charges a funding
      rate to long and short positions. Prime brokers use these to provide hedge
      funds a way to avoid stamp taxes and allow them to mask their positions
      for strategic reasons. For equities, their CFDs are often in swap
      accounts&#8212;swapping the cashflows from long and short equity
      positions&#8212;and 'swap' vs. 'CFD' terminology is a matter of
      preference.
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
      : A counterparty to a subcontract that takes an LP offer. Also known as
      the investor. The taker determines the side (long or short) and size (RM).{" "}
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
      When a contract ends for any reason&#8212;burn, cancel, default&#8212;its
      termination occurs at the Friday settlement. This then sets the
      subcontract's RM to zero, allowing the Taker to withdraw his total margin,
      while the effect on an LP's margin is ambiguous.{" "}
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
    <p className="MsoNormal" style="margin-bottom:0in;margin-bottom:.0001pt">
      <span style='font-size:12.0pt;line-height:106%;mso-fareast-font-family:"Times New Roman"'>
        <br clear="all" style="mso-special-character:line-break" />
      </span>
    </p>

    <div className="MsoNormal" style="margin-bottom:0in;margin-bottom:.0001pt">
      <span style='font-size:12.0pt;line-height:106%;mso-fareast-font-family:"Times New Roman"'>
        <hr size="1" width="33%" align="left" />
      </span>
    </div>

    <div id="ftn1">
      <p className="MsoFootnoteText">
        <a name="_ftn1"></a>
        <a href="#_ftnref1">
          <span style="mso-bookmark:_ftn1">
            <span className="MsoFootnoteReference">[1]</span>
          </span>
          <span style="mso-bookmark:_ftn1"></span>
        </a>
        <span style="mso-bookmark:_ftn1"></span>
        See Ecclesiastes 7:1.{" "}
      </p>
    </div>

    <div id="ftn2">
      <p className="MsoFootnoteText">
        <a name="_ftn2"></a>
        <a href="#_ftnref2">
          <span style="mso-bookmark:_ftn2">
            <span className="MsoFootnoteReference">[2]</span>
          </span>
          <span style="mso-bookmark:_ftn2"></span>
        </a>
        <span style="mso-bookmark:_ftn2"></span> Historically, equity returns
        have a Sharpe ratio of around 0.4, and are considered a good long-term
        investment. Warren Buffet is a legend in equity markets, and his
        lifetime Sharpe ratio is around 0.64.
      </p>
    </div>

    <div id="ftn3">
      <p className="MsoFootnoteText">
        <a name="_ftn3"></a>
        <a href="#_ftnref3">
          <span style="mso-bookmark:_ftn3">
            <span className="MsoFootnoteReference">[3]</span>
          </span>
          <span style="mso-bookmark:_ftn3"></span>
        </a>
        <span style="mso-bookmark:_ftn3"></span>
        If x a standard normal, E(y|y=x if x&gt;0)
        <span
          style="position:relative;
top:3pt"
        >
          <span style="mso-no-proof:yes">
            <img
              border="0"
              width="8"
              height="8"
              id="_x0000_i1033"
              src="TA_files/image020.png"
            ></img>
          </span>
          = E(x|x&gt;0)+ (0|x&lt;0)=E(x|x&gt;0)=sqrt(2/
          <span style="font-family:Symbol">p</span>){" "}
          <span style="font-family:Symbol">@</span> 0.4.{" "}
        </span>
      </p>
    </div>

    <div id="ftn4">
      <p className="MsoFootnoteText">
        <a name="_ftn4"></a>
        <a href="#_ftnref4">
          <span style="mso-bookmark:_ftn4">
            <span className="MsoFootnoteReference">[4]</span>
          </span>
          <span style="mso-bookmark:_ftn4"></span>
        </a>
        <span style="mso-bookmark:_ftn4"></span>
        Fehr, Ernst, and Gachter. Cooperation and punishment in public goods
        experiments. <i>American Economic Review</i> (2000). The innate human
        desire to apply costly vengeance paradoxically lowers violence as these
        hard-wired emotions act like commitment devices that discourage
        opportunistic, rational, but socially destructive acts, and is a crucial
        motivator for cooperative behavior. In contrast, in many species like
        lions and baboons, a new male alpha rationally kills the unweaned babies
        because females do not hold irrational grudges about sunk costs, and so
        soon become receptive mates for the new alpha, creating an incentive for
        the next alpha to kill the infants.
      </p>
    </div>
  </div>
</div>;
