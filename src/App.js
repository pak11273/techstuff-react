import './App.css';

import { Route, Switch } from 'react-router-dom';

import { ExampleListPage } from './components/pages/ExampleList';
import GetUserInfo from './components/common/UserInfo';
import { LandingPage } from './components/pages/Landing';
import Login from './components/common/Login';
import { NotFoundPage } from './components/pages/NotFound';
import ProtectedRoute from './components/common/ProtectedRoute';
import React from 'react';

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  // const history = useHistory();

  return (
    <div className="App">
      <Switch>
        <Route path="/landing" component={LandingPage} />
        {/* any of the routes you need secured should be registered as SecureRoutes */}
        <Route path="/" exact component={() => <LandingPage />} />
        <Route path="/example-list" component={ExampleListPage} />
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/userinfo" component={GetUserInfo} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
