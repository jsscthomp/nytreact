// include react dependency
import React from 'react';
// include react router module
import { BrowserRouter as Switch, Router, Route, IndexRoute, browserHistory } from 'react-router-dom';
// reference high-level components
import Main from './components/Main.js';
import Search from './components/Search.js';
import Saved from './components/Saved.js';

// export routes
export default (
  // highest level component
  <Router history={browserHistory}>
        <Route exact path='/' component={Main}>

    {/* if user selects search or saved show appropriate component */}
        <Switch>
          <Route exact path='Search' component={Search} />
          <Route exact path='Saved' component={Saved} />
        </Switch>
    {/* if user selects any other path */}
        <IndexRoute component={Search} />
      </Route>
  </Router>
);


