import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
// Pages
const Home = Loadable({
  loader: () => import('./views/pages/home/home'),
  loading
});

class App extends Component {

  render() {
    return (
      <HashRouter>
          <Switch>
            <Route exact path="/home" name="Home" component={Home} />
            <Route path="/" name="Home" component={Home} />
          </Switch>
      </HashRouter>
    );
  }
}

export default App;
