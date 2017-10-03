import React from 'react';
import Router from 'react-router';
const Route = Router.Route;
const IndexRoute = Router.IndexRoute;
import Main from '../client/src/components/Main';
import Search from '../client/src/components/Search';
import Saved from '../client/src/components/Saved';

module.exports = (

    <Route path='/' component={Main}>

        <Route path='Search' component={Search} />
        <Route path='Saved' component={Saved} />

        <IndexRoute component={Search} />

    </Route>
);