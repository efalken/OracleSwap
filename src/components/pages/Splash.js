import React, { Component } from 'react'
import { drizzleConnect } from 'drizzle-react'
import PropTypes from 'prop-types'
import Logo from '../basics/Logo'
import { Flex, Box } from '@rebass/grid'
import Text from '../basics/Text'
import VBackground from '../basics/VBackground'
import SplashDrizzleContract from '../blocks/SplashDrizzleContract'
import { autoBind } from 'react-extras'
import taAppend from "../whitepaper/OSTechApp.pdf"
import wppdf from "../whitepaper/OracleSwap.pdf"
import excelSheet from "../whitepaper/OracleSwapData.xlsx"


class Splash extends Component {

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
        chartSymbols: ["SP:SPX", "BTCUSD"]
    }

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

  openContract(id) {
    console.log("Opened contract", id)
    // TODO
  }


  render() {

    return (
      <div>
        <VBackground />
        <Flex width={1}>
          {/* pt={30}
        px={30}> */}

          <Flex width={1} flexWrap="wrap">
            <Flex
              width={1}
              backgroundColor="rgba(27, 29, 30, 0.6)"
              padding="10px"
              justifyContent="space-between"
            >
              <Box>
                <Logo />
              </Box>


              <Flex
                width="100%"
                justifyContent="space-around"
                alignItems="center"
                // height="100%"
                className="nav-header-wrap"
              >
                {}
                <Flex
                  flexWrap="wrap"
                  width="100%"
                  justifyContent="space-around"
                  //   onClick={this.openWhitepaper}
                  style={{ cursor: "pointer" }}
                  variant="nav"
                >
                  {}
                  <Flex
                    alignItems="center"
                    height="100%"
                    className="nav-header-wrap"
                    backgroundColor="rgba(27, 29, 30, 0.6)"
                    width="100%"
                    justifyContent="space-around"

                  >
                    <Text size="15px">
                      <a
                        className="nav-header"
                        style={{
                          textDecoration: "none",
                          cursor: "pointer"
                        }}
                        href={wppdf}
                        download=""
                      >
                        Whitepaper
                      </a>
                    </Text>
                    <Text size="15px">
                      <a
                        className="nav-header"
                        style={{
                          textDecoration: "none",
                          cursor: "pointer"
                        }}
                        href={taAppend}
                        download=""
                      >
                        Technical
                        <br />
                        Appendix
                      </a>
                    </Text>

                    <Text size="15px">
                      <a
                        className="nav-header"
                        style={{
                          textDecoration: "none",
                            cursor: "pointer"
                        }}
                        href="https://etherscan.io/address/0xb0009Be42625f9AD53221DD0aC1BB1b799467AC0#code"
                      >
                        EtherScan
                      </a>
                    </Text>

                        <Text size="15px">
                          <a
                            className="nav-header"
                            style={{
                              textDecoration: "none",
                              cursor: "pointer"
                            }}
                            href="/documentation"
                          >
                            FAQ
                          </a>
                        </Text>

                    <Text size="15px">
                      <a
                        className="nav-header"
                        style={{
                          textDecoration: "none",
                          cursor: "pointer"
                        }}
                        href={excelSheet}
                      >
                        Excel Sheet
                      </a>
                    </Text>



                    <Text size="15px">
                      <a
                        className="nav-header"
                        style={{
                          textDecoration: "none",
                          cursor: "pointer"
                        }}
                        href="http://github.com/efalken/OracleSwap"
                    //    href="FAQ.js"
                      >
                        Github Project
                      </a>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>

              {/* </Box> */}
            </Flex>
            <Flex
              width={1}
              justifyContent="center"
              alignItems="center"
              // style={{
              //     height: "calc(100vh - 90px)"
              // }}
            >
              <Box mt="50px">
                <Flex justifyContent="center" mb="30px">
                  <Text size="36px" weight="200">
                    Available Contracts
                  </Text>
                </Flex>
                <Flex justifyContent="center" mb="30px">
                  <Text size="18px" weight="100">
                    MetaMask extension must be enabled to access contracts
                  </Text>
                </Flex>
                <Flex
                  mt="20px"
                  // mr="-20px"
                  flexWrap="wrap"
                  justifyContent="center"
                  flexDirection="column"
                  alignItems="center"
                >
                  {this.state.contracts.map(contract => (
                    <Box mr="20px" mb="20px" key={contract.id}>
                      <SplashDrizzleContract
                        showActions={true}
                        key={contract.asset}
                        contract={contract}
                        width="1400px"
                        id={contract.id}
                      />
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Text size="20px">
            <a
              className="nav-header"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                padding: "25px"
              }}
              href="/oraclehist"
            >
              Oracle Price History
            </a>
          </Text>
          <Text size="20px">
            <a
              className="nav-header"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                padding: "25px"
              }}
              href="/burns"
            >
              Burn History
            </a>
          </Text>
        </Flex>
      </div>
    );
  }
}

Splash.contextTypes = {
  drizzle: PropTypes.object
}


export default Splash;
