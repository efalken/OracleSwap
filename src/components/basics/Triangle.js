import React from "react"
//import Triangle from '../basics/Triangle'

export default
    ({rotation, fill, color, margin, scale}) =>
        <svg width="11px" height="9px" viewBox="0 0 11 9" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{transform: `rotate(${rotation ? rotation :  '0deg'}) scale(${scale ? scale : 1})`, marginRight: margin}}>
            <title>Triangle</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="(Update-11/01)-Final-without-color" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Home-(Blue-Background)" transform="translate(-938.000000, -318.000000)" fillRule="nonzero" stroke={color}>
                    <g id="Group-3" transform="translate(924.026745, 205.000000)">
                        <polygon id="Triangle" points="19.5 113 24 121 15 121" fill={fill ? color : ""}></polygon>
                    </g>
                </g>
            </g>
        </svg>