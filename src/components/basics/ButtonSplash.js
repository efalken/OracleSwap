import Styled from 'styled-components'
import { G } from './Colors'
import {Radius} from './Style'

export
    default
        Styled.button`
            border: none;
            border-radius: ${Radius};
            font-size: ${({size}) => size ? size : "14px"};
            padding: 6px 14px;
            outline: none;
            margin-right: ${({margin}) => margin};
            font-weight: ${({weight}) => weight ? weight : "normal"};
            width: ${({width}) => width ? width : "auto"};
            cursor: pointer;
            color: #fff;
            background-color: ${({bgColor}) => bgColor ? bgColor : "#0C101B"};
        `
