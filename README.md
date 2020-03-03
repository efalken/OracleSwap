OracleSwap
==========

This project contains everything you need to run the front end to the
oracleswap.co contract locally. It also contains the Solidity contracts, though
these are also verified on the etherscan. Users can modify the code to create
their own versions of this contract.

Installation - Front End to OracleSwap contract
-----------------------------------------------

This replicates the Oracleswap.co website for secure access to the Ethereum
contract. Clone the OracleSwap repository into a local directory. The protocol
is to first install [Git](https://git-scm.com/downloads) on your computer. Then
go to somewhere you want the OracleSwap folder, say
`C:\users\joesmith\documents`, and from the command line type

`git clone # https://github.com/efalken/OracleSwap.git`

This will create a new OracleSwap folder within 'documents.' The file
**yarn.lock** contains all the node modules to be installed (850MB in the folder
node_modules, but downloads in less than 5 minutes on most computers). To use
yarn, you first must install [yarn](https://www.npmjs.com/package/yarn), and
then from the command line in the OracleSwap directory, type

\>`yarn install`

You will get some errors and warnings but these are not material. After this is
completed type

\>`yarn add escope`

Then within the OracleSwap folder, type

\>`yarn start`

Node also works, but less than 50% of the time depending on the computer
configuration (I don't know why). It might work for you, in which case you can
install the node packages and using

\>`npm install`

If completed without any red errors, from the same directory type

\>`npm start`

You should see the front end running at http://localhost:3000 in browser. You
must have the [MetaMask](https://metamask.io/) extension in your browser
enabled.

Custom configuration
--------------------

The files with information pointing to the oracle swap contracts on the Ethereum
blockchain are in

-   `contracts/solidityjson/oracle.json and assetswap.json`

>   Assetswap.json just needs the abi. The oracle.json needs not just the abi,
>   but also the address and initial transaction ID, located at the bottom. Due
>   to a quirky versioning issue, my front-end needs the ABI generated via Remix
>   using a compiler before 0.6.0. Compile using 5.15 to generate the ABI and
>   put it into the json files. This generates the fields "constant" and
>   "payable," which were deprecated in 0.6.0, and for some reason my version of
>   web3.js fails without them.

-   `src/CustomLoadingsContainer.js`

>   This has the AssetSwap contract addresses, as different contracts exist for
>   BTC, ETH and SPX. They are identical except for the leverage ratios, which
>   are 10 for SPX, 2.5 for BTC and ETH. The Oracle contract sends returns to
>   these contracts at settlement, where assets 0, 1, and 2 are for ETH, SPX,
>   and BTC, respectively.

-   `src/drizzleOptions.js`

>   This has the infura ID to access the mainnet. You can also configure this
>   for the Ropsten network by choosing ropsten in the drizzleOptions.js file,
>   and also changing the 'network' in oracle.json from "1" to "3". You can get
>   your own infura ID by going to <https://infura.io/register>

-   `src/components/pages/LP.provider.js and Subcontract.js`

>   These javascript files both call the oracle contract to get the current
>   weekly prices within. It is a private call, so as oracle you need to assign
>   an account reader. While on the blockchain, such a reader needs to have a
>   private key, in web3.js it is sufficient to just know the address of the
>   approved reader. I added the dummy account 0x000...dEaD as a reader to the
>   oracle (I don't know its private key), and so this allows the web portal to
>   access the oracle prices. This way if you change the address of the Oracle
>   contract administrator it will not change the website.

To the extent you change other Solidity methods, of course, you have to adjust
the javascript pages appropriately. These will generally be in the
src/components folder, especially those within **pages**, **layout**, and
**blocks**.

If you just want to adjust the denomination replace szabo or 1e12 with ether or
1e18; replace 1e9 or gwei with 1e15 or finney, both within the javascript and
solidity files. Just replace any large numbers by a factor of 1e6 to turn them
into ether (eg, in LP.provider.js and subcontract.js, the close fee is is
adjusted by 1e16 to turn it into szabo, you would use 1e22 to turn it into ETH).

Miscellaneous
-------------

You can also use [Remix](https://remix.ethereum.org) to access these contracts.
These contract use compiler v0.6.3. To do this you must first load the three
solidity contracts into Remix (Book.sol, AssetSwap.sol, and Oracle.sol),
compile, and then 'load at address' for the contract in question.

The background moving image (background.mp4) was purchased, and so I added a
copywrite watermark so that people will be incented to use their own. If you are
just using this on your desktop, it does not matter.

The solidity files are in contracts/solidity, though they are also on etherscan.
They are just for informational purposes, as the front-end just uses only their
json files.

There is a ManagedAccount.sol solidity file that can be used to create your own
managed account that interacts with the AssetSwap contract

There is a python file that can be used as a template for updating your own
oracle contract (in public/PushPrices.py). I do not include an API contract to
pull data, so you will need to do that yourself. If you have web3.js installed,
and the python packages listed at the top, you can use this to automate your
oracle contract updates. You need at least Python 3.6 to use web3.js with the
blockchain. Here is where you put in your own oracle contract address, wallet
public and private key, and infura address.

Managed Account

<https://etherscan.io/address/0xe4b39bb686ab0882dbbd30f9a58c4cb432110ec3#code>

ETH AssetSwap

<https://etherscan.io/address/0x18abbbeb52122ce4e72d4c498e373fd124057b88#code>

SPX AssetSwap

<https://etherscan.io/address/0xd1ebfffc3ae13864fe86b735630e20b54cc4b919#code>

BTC AssetSwap

<https://etherscan.io/address/0xeF841968872544Ae0a959Df96856be204DE717F6#code>

Oracle

<https://etherscan.io/address/0xb0009Be42625f9AD53221DD0aC1BB1b799467AC0#code>
