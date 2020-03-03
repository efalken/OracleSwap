import React from 'react'
import { Box } from '@rebass/grid'
import Text from './Text'
import Background from '../../images/background.mp4'
import { C } from '../basics/Colors'

export default
  () =>
    <Box
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        // height: "100%",
        zIndex: -10,
        overflow: "hidden"
      }}>
      <video autoPlay muted loop
        style={{
          opacity: 0.3,
          filter: "grayscale(100%)",
          minHeight: "100%",
          minWidth: "100%"
        }}>
        <source src={Background} type="video/mp4" />
      </video>
      <Box
        style={{
          position: "absolute",
          bottom: 50,
          left: "calc(50% - 100px)"
        }}>
        {/* <Text size="16px" color={C}>&#x2193; Scroll down for more</Text> */}
      </Box>
    </Box>
