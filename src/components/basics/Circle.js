import React from "react"
import Circle from "../basics/Circle.js"

export default
    ({rotation, fill, color, margin, scale}) =>
        <svg width="11px" height="11px" style={{transform: `rotate(${rotation ? rotation :  '0deg'}) scale(${scale ? scale : 1})`, marginRight: margin}}>
            <circle cx="5" cy="5" r="4" stroke={color} strokeWidth="1" fill="none" />
        </svg>