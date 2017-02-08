import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Login from '../containers/Login';
import App from '../containers/App';
import Home from '../containers/Home';
import Test from '../containers/Test';
import NotFound from '../containers/NotFound';
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
            <IndexRoute component={Home} />
            <Route path='test' component={Test} />
            <Route path="*" component={NotFound} />            
        </Route>
    </Router>
);