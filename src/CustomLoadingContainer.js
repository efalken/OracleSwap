import { drizzleConnect } from "drizzle-react";
import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import AssetSwap from "../contracts/solidityjson/AssetSwap.json";

/*
 * Create component.
 */

class CustomLoader extends Component {
  constructor(props, context) {
    super(props);
  }

  componentDidMount() {
    console.log(this.context);
    const drizz = this.context.drizzle;
    var ETHConfig = {
      contractName: "ETHSwap",
      web3Contract: new drizz.web3.eth.Contract(
        AssetSwap.abi,
        "0xA4eb2D8A2221e8fFF1D46f92cBa1064daE647b47"
      )
    };
    var SPXConfig = {
      contractName: "SPXSwap",
      web3Contract: new drizz.web3.eth.Contract(
        AssetSwap.abi,
        "0xD61Bf2354C8cDeda745F8a318ba43293ef858Deb"
      )
    };
    var BTCConfig = {
      contractName: "BTCSwap",
      web3Contract: new drizz.web3.eth.Contract(
        AssetSwap.abi,
        "0xfA8B6F7f756745a38C9596222c1bfdBb4bA8a157"
      )
    };

    this.context.drizzle.addContract(ETHConfig);
    this.context.drizzle.addContract(SPXConfig);
    this.context.drizzle.addContract(BTCConfig);
  }

  render() {
    if (this.props.web3.status === "failed") {
      if (this.props.errorComp) {
        return this.props.errorComp;
      }

      return (
        <main className="container loading-screen">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>⚠️</h1>
              <p>
                This browser has no connection to the Ethereum network. Please
                use the Chrome/FireFox extension MetaMask, or dedicated Ethereum
                browsers Mist or Parity.
              </p>
            </div>
          </div>
        </main>
      );
    }

    if (
      this.props.web3.status === "initialized" &&
      Object.keys(this.props.accounts).length === 0
    ) {
      return (
        <main className="container loading-screen">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>🦊</h1>
              <p>
                <strong>{"We can't find any Ethereum accounts!"}</strong> Please
                check and make sure Metamask or your browser are pointed at the
                correct network and your account is unlocked.
              </p>
            </div>
          </div>
        </main>
      );
    }

    if (
      this.props.drizzleStatus.initialized &&
      Object.keys(this.context.drizzle.contracts).length == 4
    ) {
      return Children.only(this.props.children);
    }

    if (this.props.loadingComp) {
      return this.props.loadingComp;
    }

    return (
      <main className="container loading-screen">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>⚙️</h1>
            <p>Loading dapp...</p>
          </div>
        </div>
      </main>
    );
  }
}

CustomLoader.contextTypes = {
  drizzle: PropTypes.object
};

CustomLoader.propTypes = {
  children: PropTypes.node,
  accounts: PropTypes.object.isRequired,
  drizzleStatus: PropTypes.object.isRequired,
  web3: PropTypes.object.isRequired,
  loadingComp: PropTypes.node,
  errorComp: PropTypes.node
};

/*
 * Export connected component.
 */

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
    web3: state.web3
  };
};

export default drizzleConnect(CustomLoader, mapStateToProps);
