import {A, C} from './Colors'
import {Box} from '@rebass/grid'
import React from 'react'


export default
    ({size, value, color, bgColor}) =>
        <Box style={{
            fontSize: size,
            backgroundColor: bgColor,
            color: color
        }}>
            {value}
        </Box>