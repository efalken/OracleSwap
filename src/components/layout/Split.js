import React from 'react'
import {Box, Flex} from "@rebass/grid"
import {D} from "../basics/Colors"
 
/*  
    # Split
    Generates the page skeleton with two columns,
    one with a width of 600px and a second with the rest
    of the width.
    
    ## Props
    side: a function that returns the side bar contents
    children: the contents of the main container
*/
export default
    ({side, children}) =>
        <Flex>
            <Box width="470px" style={{
                backgroundColor: "rgba(39, 39, 39, 0.67)",
                height: "auto"
            }}>
                {side}
            </Box>
            <Box width="calc(100% - 470px)">
                {children}
            </Box>
        </Flex>