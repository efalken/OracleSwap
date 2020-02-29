import React from 'react';
import {A, C, B, D, G} from './Colors'
import {Box} from '@rebass/grid'
import Text from './Text'

export default
    ({label, addr, start, end, transform, spacing, big}) =>
        <Box>
            <Box>
                <Text
                size={big ? "13px" : "11px"}
                color={C}>
                    {label}
                </Text>
            </Box>
            <Box mt="2px">
                <Text
                size={big ? "15px" : "13px"}
                color={B}
                style={{
                    textTransform: transform ? transform : "none",
                    letterSpacing: spacing ? spacing : 0
                }}>
                    {addr.substring(0, 2) + addr.substring(2, start).toUpperCase() + "..." + addr.substring(addr.length - end, addr.length).toUpperCase()}
                </Text>
            </Box>
        </Box>

/*class TruncatedAddress extends React.Component {

  constructor(props, context) {
    super(props)
  }

  render() {
    //multi line text
    var start_l = 4;
	var end_l = 4;
	let addr = this.props.address;
    let text = addr.substring(0, start_l) + "..." + addr.substring(addr.length - end_l, addr.length);
    return (
      <CopyToClipboard 
         text={text}
         onCopy={() => {
           //do stuff here, like summon a confirmation prompt
         }}>
         <span>Copy</span>
      </CopyToClipboard>
    );
  }
}

TruncatedAddress.contextTypes = {
  drizzle: PropTypes.object
}


const mapStateToProps = state => {
  return {
    contracts: state.contracts
  }
}

export default drizzleConnect(TruncatedAddress, mapStateToProps)
		*/