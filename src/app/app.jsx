import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();


import Header from './components/Header/Header';
import Favorite from './components/Favorite/Favorite';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/favorite" component={Favorite}/>
            <Route path="/about" component={About}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


