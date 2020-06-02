import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header/header';
import WeirdHeader from './components/weird-header/weird-header';

function App(): JSX.Element {
  return (
    <Router>
      <div>
        <Header />
        <WeirdHeader />
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/curses'>
            <Home />
          </Route>
          <Route path='/level'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
