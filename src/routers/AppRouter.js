
import React from 'react';
//import ReactDOM from 'react-dom';
import { Router, Route, Switch,Link,NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage.js';
import HelpPage from '../components/HelpPage.js';
import NotFoundPage from '../components/NotFoundPage.js';
import LoginPage from '../components/LoginPage.js';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history=createHistory();

 
const AppRouter=()=>
(
  <Router history={history}>
  <div>
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact={true} /> 
      <PrivateRoute path="/dashboard" component={DashboardPage}  />
      
      <PrivateRoute path="/help" component={HelpPage} />
      <Route  component={NotFoundPage} />
    </Switch>
    </div>
  </Router>
);
export default AppRouter;
