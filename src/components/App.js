// Libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Components 
import LandingPage from './pages/LandingPage.js';
import Imprint from './pages/Imprint.js';
import Agbs from './pages/Agbs.js';
import Dolle from "./pages/Dolle";
import Widerrufsbelehrung from './pages/Widerrufsbelehrung';
import ErrorPage from './pages/ErrorPage.js';

/**
 * @class Represents the website as a whole.
 */
export default class App extends React.Component {

  render() {

    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />

        <Route path="/imprint" component={Imprint} />

        <Route path="/agbs" component={Agbs} />

        <Route path="/widerruf" component={Widerrufsbelehrung} />

        <Route exact path="/dolle" component={Dolle} />

        <Route component={ErrorPage} />
      </Switch>
    );
  }
}
