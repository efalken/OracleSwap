import {C, D, B} from './Colors'
import {Box, Flex} from '@rebass/grid'
import React from 'react'


export default
    ({size, label, value, ...props}) =>
        <Flex
        {...props}
        justifyContent="space-between"
        style={{
        paddingBottom: 8,
        borderBottom: `thin solid rgb(213, 87, 87)`,
        fontSize: size
        }}>
            
            <Box
            mr="20px"
            style={{
                color: C
            }}>
                {label}
            </Box>
            
            <Box
            style={{
                color: B
            }}>
                {value}
            </Box>
            
        </Flex>