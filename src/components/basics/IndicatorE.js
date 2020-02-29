import {A, C, G} from './Colors'
import {Box, Flex} from '@rebass/grid'
import React from 'react'
import Input from './Input'
import Button from './Button'
import Text from './Text'

/*
    # Indicator C
    This components displays a value
*/
export default
    ({children, buttonLabel, onClick, ...props}) =>
        <Flex
        pt="10px"
        pb="10px"
        justifyContent="space-between"
        alignItems="center"
        {...props}
        style={{}}>
            <Box mt="-5px">
                {children}
            </Box>
            <Box>
                <Button onClick={onClick}>{buttonLabel}</Button>
            </Box>
        </Flex>
