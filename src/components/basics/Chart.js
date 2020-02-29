import React, {useRef} from "react"
import CryptowatchEmbed from "cryptowatch-embed"
import { Box } from "@rebass/grid"
import TradingViewWidget from 'react-tradingview-widget'
import { A } from "./Colors";

export default
    ({...props}) =>
        <Box
        style={{
            overflow: "hidden"
        }}>
            <Box
            style={{
                transform: "scale(1.01)",
                filter: "grayscale(30%)"
            }}>
                <TradingViewWidget
                save_image={false}
                hide_legend={false}
                {...props}/>
            </Box>
        </Box>