import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { DrizzleProvider } from 'drizzle-react'

import './App.css'
// Layouts
import App from './App'
import { LoadingContainer } from 'drizzle-react-components'
import CustomLoader from './CustomLoadingContainer'
import Splash from './components/pages/Splash'
import Documentation from './components/pages/Documentation'
import WhitePaper from './components/pages/Whitepaper'
import routes from './Routes'
import store from './state/store'
import drizzleOptions from './drizzleOptions'
import { Provider } from 'react-redux';

// Initialize react-router-redux.
const history = syncHistoryWithStore(browserHistory, store)

var pathname = window.location.pathname;

let splashElement = (
  <Provider store={store}>
    <App>
      <Router history={history}>
        <Route path="/" component={Splash}>
        </Route>
      </Router>
    </App>
  </Provider>
);

let documentationElement = (
<Provider store={store}>
  <App>
    <Router history={history}>
      <Route path="/documentation" component={Documentation}>
      </Route>
    </Router>
  </App>
</Provider>
);

let whitePaperElement = (
  <Provider store={store}>
    <App>
      <Router history={history}>
        <Route path="/whitepaper" component={WhitePaper}></Route>
      </Router>
    </App>
  </Provider>
);

let applicationElement = (
  <DrizzleProvider options={drizzleOptions} store={store}>
    <LoadingContainer>
      <CustomLoader>
        <App>
          <Router history={history}>
            {routes.map(({ path, component }) => (
              <Route key={path} path={path} component={component} />
            ))}
          </Router>
        </App>
      </CustomLoader>
    </LoadingContainer>
  </DrizzleProvider>
);

ReactDOM.render((pathname === "/" || (pathname === "/documentation" || pathname === "/whitepaper")) ? (pathname === "/" ? splashElement : (pathname === "/documentation" ? documentationElement : whitePaperElement)) : applicationElement, document.getElementById('root'))
