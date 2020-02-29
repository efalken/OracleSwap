import React, { Component } from 'react'
//import * as testData from '../../../data/snapshot.json'
//import * as experiment from '../../../data/test.json'
import {autoBind} from 'react-extras'
import Text from '../basics/Text'

class FAQ extends Component {

  constructor(props, context) {
    super(props)
    autoBind(this)
    //console.log(props)
    //console.log(context)]

  }

  componentDidMount() {

  }



  render() {
    document.body.style = 'background: black;';
    return (
        <div style={{color: 'black'}}>

          <p >&nbsp;</p>

          <p ><span
          >·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span>What is OracleSwap?</p>

          <p>OracleSwap is a suite of contracts that allow long-term
          investors to take derivative positions on assets such as ETH, BTC, or the US
          stock market. It requires liquidity providers who receive payments from these
          investors, and so it provides a way for crypto holders to put their ETH to work
          while staying completely on the blockchain. Trades are initiated using the next
          business-day closing price, and settlement occurs each Wednesday. Payoff caps
          at required margins minimize necessary interaction while capturing virtually
          all position performance. Prices are provided by a pseudonymous
          oracle/administrator whose dominant strategy is honest reporting. </p>

          <p ><span
          >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span>Do I have to use the OracleSwap front end?</p>

          <p >&nbsp;</p>

          <p  >OracleSwap.co is
          all open source code that connects directly to the Ethereum blockchain. If one downloads
          the front-end from GitHub to one’s PC , you can avoid the website, though this
          is all open source and it exactly the same. One can also access the contract
          via Remix, Web3.js, Truffle, etc.</p>

          <p  >&nbsp;</p>

          <p  ><span
          >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span>Why should we trust the Oracle?</p>

          <p  >For the same reason you trust the
          Ethereum Blockchain: it’s uncensorable and its administrators make the most
          money acting honestly. Honest play for the oracle is more profitable and easier
          than dishonesty. A cheat would be easily observable in the price history of the
          Oracle that is easy to query. You should trust that it will report honestly
          because reporting true prices allows it to make more money, which is the best
          way to further whatever evil, benign, or salutary plans the Oracle has. </p>

          <p  >A user who sees a bad price about
          to be applied to their weekly settlement has a 4 hour window to burn their PNL
          debit rather than send it to their counterparty, which is presumably a sock-puppet
          address of the oracle. While burning requires an out-of-pocket cost (it is a
          payable function), it is the optimal response because if you do not pay—burning
          the cheater’s payoff rather than sending it to him—the evil oracle will infer
          he can cheat you again next period by more than the cost of burning. </p>

          <p  >Given an investor would burn in a
          cheat and prevent the evil oracle a final period windfall, there is still a
          positive value to the strategy of entering a derivative contract and then
          walking away from a loss. For example, a simple cheat strategy would be to play
          until the evil oracle experienced a loss, and effectively walk-away from that
          final negative PNL. This simple strategy has a very limited expected value,
          about a 1-standard deviation weekly PNL, but it is within 10% of the optimal
          risk-adjusted payout. Considering rational outsiders will avoid an easily
          observed cheating oracle, such a swindle is an exit scam.</p>

          <p  >The optimal cheat return can be
          compared to the present value of future oracle revenue via closing fees, and the
          cost-benefit ratio for cheating is around 1:10, implying honesty is the Oracle's
          dominant selfish strategy.  This is discussed in more detail in the Technical
          Appendix.</p>

          <p  >Contract Logic to Control Risk:</p>

          <p  ><span
          >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span>Oracle Contract price updates are prohibited between 0.5 and 18
          hours after last update.</p>

          <p  ><span
          >o<span >&nbsp;&nbsp;
          </span></span>This allows correction to obvious mistakes, but prevents price
          changes that could be snuck in just before settlement. </p>

          <p  ><span
          >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span>Settlement can only occur 4 hours after the most recent Oracle
          update.</p>

          <p  ><span
          >o<span >&nbsp;&nbsp;
          </span></span>This provides counterparties time to burn their PNL rather than send
          to an obviously evil Oracle. If the Oracle posts obviously fraudulent prices,
          any counterparty with more than ¼ of their margin over-funded will find it
          cheaper to burn than continue or default. This minimizes a potential Oracle
          exit scam payoff.</p>

          <p  ><span
          >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span>Settlement can only occur 5 days after the most recent
          settlement. </p>

          <p  ><span
          >o<span >&nbsp;&nbsp;
          </span></span>This prevents a cheating Oracle/admin from sneaking a fraudulent
          settlement in at an unexpected time, such as at 2 AM Sunday. Such a scenario
          would allow an evil Oracle/admin to escape without counterparties having much
          time to burn their PNLs. It also prevents the scenario where an evil
          Oracle/admin might apply several fraudulent settlements quickly, effectively
          overcoming the RM cap on PNL.</p>

          <p  ><span
          >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span>PNL is capped at the Required Margin. </p>

          <p  ><span
          >o<span >&nbsp;&nbsp;
          </span></span>This not only provides leverage but minimizes the potential size
          of an Oracle exit scam payoff (those counterparties who, for some reason, might
          not burn their PNL when cheated). No matter how much ETH is in a player’s
          margin, settlement can only transfer up to the RM regardless of asset price
          movement.</p>

          <p  ><span
          >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span>After 9 days without a settlement any player can withdraw their
          entire margin, including their Required Margin.</p>

          <p  ><span
          >o<span >&nbsp;&nbsp;
          </span></span>This protects counterparties in the case of a DDoS attack, or if
          the oracle/admin becomes incapacitated or negligent. </p>

          <p  ><span
          >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span>Oracle Prices are easily audited.</p>

          <p  ><span
          >o<span >&nbsp;&nbsp;
          </span></span>Blockchain queries of event logs are provided at OracleSwap.co,
          and pull all the Oracle’s prices. One can easily see if a price is fraudulent.
          Note that crypto prices are taken at 4 PM ET, on New York Stock Exchange
          business days.</p>

          <p  ><span
          >o<span >&nbsp;&nbsp;
          </span></span>Link to OraclePrice History query</p>

          <p  >&nbsp;</p>

          <p  ><span
          >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span>Videos</p>

          <p  ><span
          >o<span >&nbsp;&nbsp;
          </span></span>How to Take</p>

          <p  ><span
          >o<span >&nbsp;&nbsp;
          </span></span>How to Provide Liquidity</p>

          <p  ><span
          >o<span >&nbsp;&nbsp;
          </span></span>How to Withdraw</p>

          <p>&nbsp;</p>

          <p  ><span
          >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span>What is a Swap?</p>

          <p >Hedge funds will often have ‘equity swap accounts’ with
          Prime Brokers who hold a basket of long and short equity positions that are marked-to-market
          daily and require a margin. They are called swap accounts because they swap the
          cashflows between the long and short holdings, though sometimes these swap
          accounts merely hold long or short positions. Each stock position in an equity
          swap is technically a Contract-for-Difference (CFD): it pays the difference in
          price for a reference asset times the number of shares held. CFD is an
          unnecessary acronym, so I prefer the term swap, as crypto traders should be
          familiar with it via BitMEX’s popular swap contracts.</p>

          <p >The long and short positions in an equity swap have funding
          rates based off of Fed Funds that is charged to the long positions and credited
          to the short. This funding cost is directly related to the basis (spot – futures)
          one sees in futures markets, in that as the futures price converges to the spot
          price at expiration, this amount can be converted to a rate. The many
          institutional constraints on arbitraging blockchain traded assets and contracts
          with those on traditional exchanges will create a significant basis outside of the
          mere effect from Fed Funds. That is, the inability of large investors arbitrage
          a large basis due to institutional rigidities allows the basis to deviate
          significantly from interest rates, so that the basis will be determined more by
          supply and demand. </p>

          <p ><span >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span>PNL calculation</p>

          <p >The general PNL formula is </p>

          <p  align='center' >Taker PNL=RM*LR*ETH<sub><span
          >t-1</span></sub>*(TakerSide*(P<sub><span
          >t</span></sub>/P<sub><span
          >t-1 </span></sub>-1) – Funding
          Rate)/ETH<sub><span >t</span></sub></p>

          <p  align='center' >LP PNL= &#8210;<sub> </sub>Taker
          PNL</p>

          <p >Walking through the equation we have the following:</p>

          <p ><b>RM*LR</b>: notional of exposure in ETH due to Required
          Margin (RM) and Leverage Ratio (LR). Actual margin can be much higher than RM,
          so one’s actual leverage can always be lower than the LR. </p>

          <p ><b>*ETH<sub>t-1</sub></b>: This turns the ETH notional into
          the notional of the asset, valued at the beginning of the period. If the asset
          price is denominated in USD, the notional must be in USD, but if in ETH (as in
          the BTCETH contract), this adjustment is excluded. This implies the notional
          for USD denominated contracts will change over time as the price of ETH
          changes. If we were to have a constant USD or BTC notional, this would imply
          either a changing RM, or a changing volatility/RM, and this formulation is
          simpler.</p>

          <p ><b>TakerSide: </b>+1 for long, -1 for short</p>

          <p ><b>(P</b><b><sub><span >t</span></sub>/P</b><b><sub><span >t-1 </span></sub>-1): </b>the asset’s net return. For continuing
          subcontracts it will use the Wednesday to Wednesday prices, while for new
          contracts it will use the date from the Price Initialization settlement as its
          open price.</p>

          <p ><b>Funding Rate</b>: weekly rate charged to the taker. Will
          vary by long/short designation and asset. Funding rates are the same across LPs
          within an asset. </p>

          <p ><b>/ETH</b><b><sub><span >t</span></sub></b> : This translates the PNL back into ETH at the end of
          the period for weekly settlement. Settlement is via ETH, so using the ETH price
          on both sides of the transaction effectively generates a linear return in the
          reference asset in its unit of denomination. If the ETH return abstracted from
          this currency adjustment it would create a complex adjustment term to preclude
          arbitrage, and be implicit within the basis. This term would involve the expected
          covariance of the ETH and asset price, which is a construct most investors neither
          understand nor want to.</p>

          <p >There are several examples given in the Technical Appendix.</p>

          <p  ><span >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span>Default</p>

          <p >Default can only occur on the Wednesday Settlement (around 9
          PM New York time). This occurs when the player’s Actual Margin&lt;Required
          Margin, which can only happen at settlement, because players cannon withdraw
          their margin below their RM, so actual Margin can only fall below the RM via a
          PNL attribution, or if a Liquidity Provider (LP) a change in the net margin. </p>

          <p >For example, if the RM=10 and a player—LP or Taker—has 11 in
          their margin, an impending PNL= <span >-</span> 2
          implies they need to add at least 1 ETH to their margin at settlement to avoid default.
          For an LP the situation is more complex, as an LP could have a balanced book with
          two takers with one long RM=100 the other short with RM=100. As the LP’s RM is
          netted it would have an RM=0 and could therefore be adequately margined at 0
          ETH. In this case, if one taker cancelled, their new RM would be 100, and so
          while previous to settlement the LP could have an adequate margin whatever
          their Margin, it would need to make sure they had 100 ETH at settlement. </p>

          <p >Parties must cure prior to Wednesday Settlement at 9 PM. They
          will know exactly how much they owe given the Prices reported at 4:15 PM. </p>

          <p ><span >In a default the subcontract is
          terminated at settlement and the defaulting party’s margin is debited a default
          fee of 5 times the cancellation fee (12.5% of RM) to make canceling dominate
          defaulting as a way of exiting subcontracts. </span></p>

          <p ><span >A default does not cost the
          non-defaulting counterparty anything, just stops their contract; given no open
          fee, the counterparty can replace it at no cost.</span></p>

          <p  ><span >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span>How, Why, and When to Burn your PNL</p>

          <p >Burning one’s PNL requires a payment, but it saves the
          typical player from getting cheated in the next settlement. A clear cheat by
          the Oracle signals the Oracle is untrustworthy, and given its prices are easily
          observed, future players will be discouraged. Thus the cheating oracle has
          nothing to lose by cheating again and probably will. The value of this cheat
          will be greater than the cost of a burn, which can be deduced via the game
          theoretic concept of common knowledge. The self-interested rational response to
          a cheating oracle is to burn. There is no appeal to morality, retribution, or rehabilitation,
          just cold self-interest. </p>

          <p >Given a cheater’s actions are easily observed and punishment
          is quick, it has the nice property of making sure even an evil oracle behave
          honestly in this contract (so it can make more money to fund other evil plans).
          </p>

          <p  ><span >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span>Burn History</p>

          <p >Check here to see if anyone has burned their PNL. As burns
          are uncensored they could be groundless, so they are not necessarily proof of a
          cheating oracle. One can assess the cheat allegation by looking at Oracle
          prices on the date of the burn. </p>

          <p >Note that ETH and BTC prices use 4 PM New York time using
          Bitwise-approved exchanges. These have a standard error of about 0.1% when take
          at the exact same time, but as we use a couple-minute window around 4 PM, the
          standard error may be around 0.2%. </p>

          <p  ><span >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span>Settlement times</p>

          <p >New Trades are recorded each business day around 3:45 PM New
          York time. New trades that have not been processed will use the first Price
          Initialization settlement. Thus, a trade taken at 3:30 PM Monday will use the
          Monday close as its first price, while a trade taken at 4 PM Monday will use
          the Tuesday close, and a trade take Saturday morning at 3 AM will use the
          Monday close. Business days are New York Stock Exchange business days (link to
          NYSE exchange holidays).  </p>

          <p >PNL is calculated and applied to subcontracts on Wednesday
          around 9 PM (Tuesday if holiday). </p>

          <p  ><span >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span>Fees</p>

          <p >Two parties to this contract need to be paid. The Liquidity
          Providers and the Oracle. The LP is paid via the Target Rate, which is part of
          the funding rate. This is different than most exchanges where the liquidity
          providers are called ‘market makers’, and have to also supply limit orders. The
          slow and expensive blockchain makes limit orders books infeasible, and so the
          LP gets no revenue via a bid-ask spread or maker rebate. This approach
          incentivizes the LP to keep their position open as long as possible.</p>

          <p >The funding rate paid by the takers is as follows:</p>

          <p  >FR<sub><span >long</span></sub>=Target Rate +Basis</p>

          <p  >FR<sub><span >short</span></sub>=Target Rate – Basis</p>

          <p >The target rate is to incent the LPs, while the basis rate
          is to equilibrate the long and short taker demand.  Takers pay the FR to the
          LPs, so the basis is a debit to longs, a credit to shorts.</p>

          <p >There is no open fee. Closing a position, however,
          necessitate a 1.5% RM fee from the initiator of the close, which given leverage
          implies a 0.15%, 0.60%, and 0.75% notional cost for SPX, BTC (both USD and ETH),
          and ETH contract respectively. This goes to the Oracle, as without such a
          payment it would lose nothing by destroying its reputation via dishonest
          reporting. For comparison, note these costs are the only ones applied
          round-trip, and there are no inexplicit costs via the bid-ask spread, price
          impact, having to move from one currency into another, or withdrawing money
          from the contract.</p>

          <p  ><span
          >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span>When are Prices Taken?</p>

          <p >ETH and BTC prices use a couple minute window of prices from
          Bitwise-approved exchanges around 4 PM New York time, while the SPX Index price
          is recorded around 4:10 PM but refers to the 4 PM close (it is a composite of
          around 500 stock prices, so often is slightly adjusted from what is shows at
          4:00 PM).  The crypto prices will have a standard error of about 0.1% when taken
          at the same time.</p>

          <p  ><span
          >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span>Minimum Size</p>

          <p >10 ETH. All RM is in ETH integer amounts, though players can
          initialize a position by sending more than their RM</p>

          <p >LPs can set their own minimum size. As an LP’s book has a
          maximum number of takers at 80, this allows a large LP to post and not be
          constrained by small subcontracts, and also allowing smaller LPs to </p>

          <p  ><span
          >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span>Maximum Take</p>

          <p >The LP provides ‘unsided’ offers, so she can post 100 ETH,
          but does not know whether it will initially be long or short. To prevent the
          case where she would get taken on 100 long, we limit a taker amount to that
          which would take he above 50% of her book given her current positions and open
          balance. </p>

          <p >The maximum amount a taker can take is as follows:</p>

          <p  align='center' >Max Long Take = ½ ExcessMargin + Short – Long </p>

          <p  align='center' >Max Short Take = ½ Excess
          Margin - Short + Long</p>

          <p >The maximum amount a taker can take is shown below. Note
          that the Excess Margin is just the Total minus Required margin.</p>

          <p ></p>

          <p  ><span>                                    <span
          >Margin                                          Max Take</span></span></p>

          <p  ><span
          >Long        Short           Required       Total    Excess        Long       Short</span></p>

          <p  ><span
          >0              0                  0                    100       100             50           50</span></p>

          <p  ><span
          >0              100              100                100       0                 100         0</span></p>

          <p  ><span
          >100          0                  100                100       0                 0             100</span></p>

          <p  ><span
          >0              0                  0                    250       250             125         125</span></p>

          <p  ><span
          >0              100              100                250       150             175         0</span></p>

          <p  ><span
          >100          0                  100                250       150             0             175</span></p>

          <p  ><span
          >100          100              0                    250       250             125         125</span></p>

          <p >&nbsp;</p>

          <p >                                                </p>

          <p >&nbsp;</p>

          <p ><span
          >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span>How to Withdraw</p>

          <p >For all players, taker or LP, removing ETH from either
          Margin or Open Balance in the same two-step process. First they withdraw to a
          Withdraw Balance, and then from their Withdrawal to their private address. This
          is to prevent re-entry attacks.</p>

          <p ><span >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span></span>How to contact</p>

          <p >The creator of this contract is at lorenzob at protonmail
          dot com. The oracle of this contract has a Gab account at @gab. Please keep
          questions and comments focused on product functionality.</p>

          </div>
    )
  }
}



export default FAQ
