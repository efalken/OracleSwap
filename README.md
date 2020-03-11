OracleSwap
==========

This project contains everything you need to run the front end to an OracleSwap
oracle and AssetSwap. It works on a server or on a desktop. It also contains the
Solidity contracts, though these are also verified on the etherscan. Developers
can save time modifying this code, but it is also useful to give users the opton
to download such a front end, because it makes their interactions more secure
and allows the the ability to fully audit the functionality.

Installation - Front End to OracleSwap contract
-----------------------------------------------

This replicates the Oracleswap.co website for secure access to the OracleSwap
Ethereum contract.

For **Windows**, clone the OracleSwap repository into a local directory. The
protocol is to first install [Git](https://git-scm.com/downloads) on your
computer. Then go to somewhere you want the OracleSwap folder, say
`C:\users\joesmith\documents`, and from the command line type

`git clone # https://github.com/efalken/OracleSwap.git`

This will create a new OracleSwap folder within 'documents.' The file
**yarn.lock** contains all the node modules to be installed (800MB in the folder
node_modules, but downloads complete in about 5 minutes on most computers). To
use yarn, you first must install [yarn](https://www.npmjs.com/package/yarn), and
then from the command line in the OracleSwap directory, type

\>`yarn install`

You will get some errors and warnings, but these are not material. After this is
completed type

\>`yarn add escope`

Then within the OracleSwap folder, type

\>`yarn start`

**Node** works on Windows, but only 50% of the time, depending on various
computer settings that I could not decoct. If you use the web front end on a
**Linux** server, however, it is less finicky. Once you have cloned the
OracleSwap GitHub to your server, go to the OracleSwap directory and type

\>`npm install`

It often has warnings, but these are not consequential. If you are on Window or
a Mac you would type

\>`npm start`

And then see the front end running at http://localhost:3000 in browser. You must
have the [MetaMask](https://metamask.io/) extension in your browser enabled.

On a Linux server, simply rebooting replaces the need to run 'npm start.' I am
not sure how this happens as someone set that up for me way back in October
2018. There have been very many changes since then, and so it's clearly very
robust as I have had no problems (seek assistance from a Linux server expert).

Custom configuration
--------------------

The files with information pointing to the oracle swap contracts on the Ethereum
blockchain are the following:

-   `contracts/solidityjson/oracle.json and assetswap.json`

Assetswap.json just needs the ABI. The oracle.json needs not just the ABI but
also the address and initial transaction ID to pull in prices, and these are
located at the bottom of the file. Due to a quirky versioning issue, my
front-end needs the ABI generated via Remix using a compiler before 0.6.0.
Compile using 5.15 to generate the ABI and put it into the json files. This
generates the fields "constant" and "payable," which were deprecated in 0.6.0,
and for some reason my version of web3.js fails without them.

-   `src/CustomLoadingsContainer.js`

This has the AssetSwap contract addresses, as different contracts exist for BTC,
ETH and SPX. They are identical except for the leverage ratios, which are 10 for
SPX, 2.5 for BTC and ETH (these are constructor arguments). The Oracle contract
sends returns to these contracts at settlement, where assets 0, 1, and 2 are for
ETH, SPX, and BTC, respectively.

-   `src/drizzleOptions.js`

This has the Infura ID to access the mainnet. You can also configure this for
the Ropsten network by choosing ropsten url in the drizzleOptions.js file, and
also changing the 'network' in oracle.json from "1" to "3". You can get your own
Infura ID by going to <https://infura.io/register>

-   `src/components/pages/LP.provider.js and Subcontract.js`

These javascript files both call the oracle contract to get the current weekly
prices within. It is a private call, so as oracle you need to assign an account
reader. While on the blockchain, such a reader needs to have a private key, in
web3.js it is sufficient to just know the address of the approved reader. I
added the dummy account 0x000...dEaD as a reader to the oracle (I don't know its
private key), and so this allows the web portal to access the oracle prices.
This way, if you change the address of the Oracle contract administrator it will
not change the website.

-   src/images/background.mp4

The background moving image was purchased and I don't have the right to give
this away for general use. Thus I added a Copywrite watermark so that people
will be motivated to replace it with their own background image if they create
their own contract suite. If you are just using this on your desktop it does not
matter.

-   src/public/PushPrices.py

There is a python file that can be used as a template for updating your own
oracle contract. I do not include an API contract to **pull** data, so you will
need to do that yourself. There are many ways to do this, but if you publicize a
general-purpose one the data provider will either change their format in
response or revoke your privileges. If you have web3.js installed, and the
python packages listed at the top, you can use this to automate your oracle
contract updates via a cronjob. You need at least Python 3.6 to use web3.js with
the blockchain. In the Pushprices.py file you put in your own oracle contract
address, and wallet public and private key, and Infura project ID. [I placed my
actual python file on github last week, one that accesses my address and private
key to pay for gas; within a couple days someone not only took the 0.5 ETH I had
in there but every time I sent 0.01 ETH to that address a bot would transfer it
out immediately--bastards].

Adjust units by 1e6
-------------------

Users should be able to transact in units of ether for funding and deposit,
finney for withdrawing. Because gas costs are at least 100 szabo (100k gwei) it
makes no economic sense to allow a tiny contract, and generally long-term
investors are dealing with at least 1 eth.

I denominated this contract in szabo, which at 1e-6 eth. This allows users to
see how it works while avoiding regulation, as the contract has no economic
value. To adjust the Solidity contracts from **'szabo'** to **'ether'**
denominations, do a search and replace on the Solidity files, replacing szabo
with ether, and 1e9 with finney (1 ether = 1e6\*1 szabo, 1 finney = 1e9\*1e6;
finney, szabo and ether are literals in Solidity).

In the javascript files, do a search and replace on **1e12** and change it to
**1e18** within all the files in the **src** directory. Also, switch **'sz'**
with **'eth'** to relabel the display amounts correctly for the users. Many IDEs
allow you to do this change within a folder on just the javascript files in one
simple search and replace command. You also need to replace **1e16** with
**1e22** in the LP.provider.js and subcontract.js files, as these adjust the
closing fee (which are multiplied by other factors, the key is to increase them
by 1e6).

Miscellaneous
-------------

To the extent you change Solidity methods you have to adjust the javascript
pages appropriately. These will generally be in the 'src/components' folder,
especially those within **pages**, **layout**, and **blocks**.

Some of the gifs used in the FAQ/documentation page I did not put on GitHub.
That is merely because they are very large, and you can see them on the
oracleswap.co website without any risk.

You can also use [Remix](https://remix.ethereum.org) to access these contracts.
These contracts use compiler v0.6.3. To do this, you must first load the three
solidity contracts into Remix (Book.sol, AssetSwap.sol, and Oracle.sol),
compile, and then 'load at address' for the contract in question.

The solidity files are in contracts/solidity, though they are also verified on
etherscan. They are just for informational purposes within the OracleSwap
folder, as the front-end just uses only the Oracle and AssetSwap json files. One
can create a front-end to a specific LP book using the Book.json file, though I
have not done so.

Security considerations are addressed in the technical document.

There is a ManagedAccount.sol solidity file that can be used to create your own
managed account that interacts with the AssetSwap contract. The Managed Account
listed here is the LP on the BTC contract

Managed Account

[https://etherscan.io/address/0x0F4F45f2EdBa03d4590Bd27Cf4FD62e91a2A2D6a\#code](https://etherscan.io/address/0xe4b39bb686ab0882dbbd30f9a58c4cb432110ec3#code)

ETH AssetSwap

<https://etherscan.io/address/0xA4eb2D8A2221e8fFF1D46f92cBa1064daE647b47#code>

SPX AssetSwap

<https://etherscan.io/address/0xD61Bf2354C8cDeda745F8a318ba43293ef858Deb#code>

BTC AssetSwap

<https://etherscan.io/address/0xfA8B6F7f756745a38C9596222c1bfdBb4bA8a157#code>

Oracle

<https://etherscan.io/address/0x9e5FE21D12629E05252d02f5a0B79fE841AaE1F1#code>
