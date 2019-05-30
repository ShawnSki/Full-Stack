import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Details from './Components/Details';
import Home from './Components/Home';
import Login from './Components/Login';


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/details' component={Details} />
    </Switch>
)