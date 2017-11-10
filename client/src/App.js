// include react dependency
import React from 'react';
// include react router module
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
// reference high-level components
import Main from './components/Main.js';
import Search from './components/Search.js';
import Saved from './components/Saved.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';

const history = createBrowserHistory();

// export routes
const App = () => 
  // highest level component

    <Router history={history}>
      <div>
          <Nav />
          <Route exact={true} path='/' component={Main} />

            {/* if user selects search or saved show appropriate component */}
          <Route path='/search' component={Search} />
          <Route path='/saved' component={Saved} />
          <Footer />
      </div>
    </Router>;

export default App;