// import './App.css';

import { Route, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { initialState, reducer } from './reducer';
import { persistReducer, persistStore } from 'redux-persist';

import { ExampleListPage } from './components/pages/ExampleList';
import GetUserInfo from './components/common/UserInfo';
import { GlobalStyle } from 'theme/GlobalStyle';
import { LandingPage } from './components/pages/Landing';
import Login from './components/common/Login';
import { NotFoundPage } from './components/pages/NotFound';
import { PersistGate } from 'redux-persist/lib/integration/react';
import ProtectedRoute from './components/common/ProtectedRoute';
import { Provider } from 'react-redux';
import React from 'react';
import { SplashPage } from 'components/common';
import { ThemeProvider } from 'styled-components';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { theme } from 'theme/theme.js';
import thunk from 'redux-thunk';

// import OwnerHome from './components/OwnerHome';

// import Profile from './components/Profile';

// import Register from './components/Register';
// import RenterHome from './components/RenterHome';

// import NavBar from './components/NavBar';

// import ItemPage from './components/ItemPage';

// import Login from './components/Login';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(thunk, logger)
);
const persistor = persistStore(store);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  // const history = useHistory();

  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <PersistGate persistor={persistor}>
            <Switch>
              {/* <NavBar /> */}
              <Route exact path="/" component={SplashPage} />
              <Route path="/landing" component={LandingPage} />
              {/* any of the routes you need secured should be registered as SecureRoutes */}
              <Route path="/" exact component={() => <LandingPage />} />
              <Route path="/example-list" component={ExampleListPage} />
              <Route path="/rentals/rentals" component={ExampleListPage} />
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/userinfo" component={GetUserInfo} />
              <Route component={NotFoundPage} />
              <Route path="/login" component={Login} />
              {/* <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/owner-home" component={OwnerHome} />
            <Route path="/renter-home" component={RenterHome} /> */}
              {/* <Route path="/item" component={ItemPage} /> */}
            </Switch>
          </PersistGate>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
