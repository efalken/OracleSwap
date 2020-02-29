import { drizzleConnect } from 'drizzle-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from '@rebass/grid'
import { Radius } from '../basics/Style'
import { B, A, E, K } from '../basics/Colors.js'
import Text from '../basics/Text.js'
import Triangle from '../basics/Triangle.js'
import { If, autoBind } from 'react-extras'

import Button from '../basics/Button'


class SplashDrizzleContract extends Component {
  constructor(props, context) {
    super(props)
    autoBind(this)
  }

  render() {

      return (
        <Flex
          style={{
            borderRadius: Radius,
            overflow: "hidden",
            // width: this.props.width
          }}>
          <Box width={1} flexDirection="row" style={{ display: "flex" }}>
            <Box
              style={{
                backgroundColor: this.props.color ? this.props.color : B
              }}
              display="flex" flexDirection="row">
                <Box
                  px="10px"
                  py="5px"
                  display="flex">
                  <Text color={A} size="28px" weight="300">{this.props.contract.asset}</Text>
                </Box>
                </Box>
            <If
              condition={this.props.showActions}
              render={() =>
                <Box
                  style={{
                    backgroundColor: B,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center"
                  }}
                  display="flex" flexDirection="row">
                    <Button
                      px="12px"
                      display="flex" flexDirection="row"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "0 10px"
                      }}>
                     <a href={"/" + this.props.contract.asset + "/offers"} style={{textDecoration: 'none'}} ><Text color="white" size="15px">Access</Text></a>
                    </Button>
                </Box>
              } />
          </Box>
        </Flex>
      )
    }
  }

SplashDrizzleContract.contextTypes = {
  drizzle: PropTypes.object
}


const mapStateToProps = state => {
  return {
    contracts: state.contracts,
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus
  }
}

export default drizzleConnect(SplashDrizzleContract, mapStateToProps);
