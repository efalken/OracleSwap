import React from 'react'
import Styled from 'styled-components'
import {B} from './components/basics/Colors'

const Placeholder = Styled.div`
    user-select: "none",
    margin: 0;
    padding: 0;
    font-family: 'IBM Plex Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
 
    
    * {
        font-family: 'IBM Plex Mono', monospace;
        transition: all 0.2s;
        color: ${B};
    }
    
`

// Had min-width set a 1540px

function App({children}) {
    return (
        <Placeholder>{children}</Placeholder>
    );
}

export default App