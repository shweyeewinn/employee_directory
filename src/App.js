import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Overview from './pages/Overview';
import { history } from './helper';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route path="/overview/:name" component={Overview} />
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
