import React from 'react';
import './App.css';
import Home from './Home'
import Privacy from './Privacy';
import Terms from './Terms';
import { IntlProviderWrapper } from './IntlContext';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <IntlProviderWrapper>
    <div className="App">
      <Router basename={'/home'}>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
    </IntlProviderWrapper>
  );
}

export default App;
