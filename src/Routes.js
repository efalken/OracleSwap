// import Splash from './components/pages/Splash'
import Offers from './components/pages/Offers'
import LPAsProvider from './components/pages/LP.provider'
import Burns from './components/pages/BurnQuery'
import FAQ from './components/pages/FAQ'
import Documentation from './components/pages/Documentation'
import OracleHistory from './components/pages/OraclePriceHistory'
import Taker from './components/pages/Taker'
import Subcontract from './components/pages/Subcontract'



export default [
    // {path: "/", component: Splash},
    {path: "/faqs", component: FAQ},
    {path: "/burns", component: Burns},
    {path: "/oraclehist", component: OracleHistory},
    {path: "/documentation", component: Documentation},
    {path: "/:contract/offers", component: Offers},
    {path: "/:contract/lp/:address/provider", component: LPAsProvider},
    {path: "/:contract/taker/:address", component: Taker},
    {path: "/:contract/lp/:address/subcontract/:id", component: Subcontract},
]
