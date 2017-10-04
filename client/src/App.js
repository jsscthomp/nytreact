import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Router from 'react-router';
// import routes from '../routes';
import Main from '../client/src/components/Main';
import Search from '../client/src/components/Search';
import Saved from '../client/src/components/Saved';

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
