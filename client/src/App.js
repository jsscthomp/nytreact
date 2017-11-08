// include react dependency
import React from 'react';
// include react router module
import { Switch, Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
// reference high-level components
import Main from './components/Main.js';
import Search from './components/Search.js';
import Saved from './components/Saved.js';

const history = createBrowserHistory();

// export routes
export default (
  // highest level component
  // <BrowserRouter>
    <Router history={history}>
          <Route exact path='/' component={Main}>

      {/* if user selects search or saved show appropriate component */}
          <Switch>
            <Route exact path='Search' component={Search} />
            <Route exact path='Saved' component={Saved} />
          </Switch>

        </Route>
    </Router>
  // </BrowserRouter>
);


