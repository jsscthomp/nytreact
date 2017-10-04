import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import routes from '../routes';
import Main from './components/Main.js';
import Search from './components/Search.js';
import Saved from './components/Saved.js';

const App = () => (
  <Router>
    <div>
      <Main />
      <Saved />
      <Search />

      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='Search' component={Search} />
        <Route exact path='Saved' component={Saved} />
      </Switch>

    </div>
  </Router>
);

export default App;
