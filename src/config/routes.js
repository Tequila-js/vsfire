import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Login from '../containers/Login';
import App from '../containers/App';
import Dashboard from '../containers/Dashboard';
import Test from '../containers/Test';
import Rebase from 're-base';
import { firebase } from '../services/firebaseService';

const isLoggedIn = (nextState, replace) => {    
   firebase.onAuth( (user) => {
       if(user && nextState.location.pathname === '/login') {
           browserHistory.replace('/');
       } else if(!user) {
           browserHistory.replace('/login');
       }
   });   
}

export const routes = (
    <Router history={browserHistory}>
        <Route path='/login' component={Login} onEnter={isLoggedIn} />
        <Route path='/' component={App} onEnter={isLoggedIn}>
            <IndexRoute component={Dashboard} />
            <Route path='test' component={Test} />
        </Route>
    </Router>
);