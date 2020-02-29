import React from 'react'
import Logo from '../../images/LogoColor.svg'
import { Box, Flex } from '@rebass/grid'


export default
    () =>
    	<a href="/">
	        <img
	        width={300}
	        src={Logo}
					className="header-logo" />
        </a>