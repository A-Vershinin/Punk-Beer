import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Header from './components/header/Header';
import Favorite from './components/Favorite/Favorite';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Switch>
              <Route exact path="/list/:page?" component={Home} />
            </Switch>
            <Route path="/favorite" component={Favorite} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

{/*<Route exact path="/list" component={Home} />*/}
