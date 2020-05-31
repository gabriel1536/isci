import React from 'react';
import './tailwind.generated.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';

function App(): JSX.Element {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/about'>
            <Home />
          </Route>
          <Route path='/users'>
            <Home />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
