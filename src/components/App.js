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

import Forward from "./pages/Forward";

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

        <Route exact path="/dolle/be027bf2" >
          <Forward link="https://apps.scrappbook.de/rJXeLe6Fq" />
        </Route>

        <Route exact path="/dolle/796bcfef" >
          <Forward link="https://apps.scrappbook.de/S1fr38lpYq" />
        </Route>

        <Route exact path="/dolle/002d0c20" >
          <Forward link="https://apps.scrappbook.de/Sk-A8x6F9" />
        </Route>

        <Route exact path="/dolle/4a0bc079" >
          <Forward link="https://apps.scrappbook.de/HJgHyDeaYc" />
        </Route>

        <Route exact path="/dolle/87f9b26d" >
          <Forward link="https://apps.scrappbook.de/HyU-wxpF5" />
        </Route>

        <Route exact path="/dolle/8c1c4a41" >
          <Forward link="https://apps.scrappbook.de/HJsfPl6F9" />
        </Route>

        <Route exact path="/dolle/c30126e6" >
          <Forward link="https://apps.scrappbook.de/ByMVwepF9" />
        </Route>

        <Route exact path="/dolle/7e2c74ea" >
          <Forward link="https://apps.scrappbook.de/BklYSDlaFc" />
        </Route>

        
        <Route exact path="/dolle/ee251e90" >
          <Forward link="https://apps.scrappbook.de/BJVM62Ccc" />
        </Route>

        <Route exact path="/dolle/c5875922" >
          <Forward link="https://apps.scrappbook.de/Syl07a30c9" />
        </Route>

        <Route exact path="/dolle/508db725" >
          <Forward link="https://apps.scrappbook.de/H10B6nAq9" />
        </Route>

        <Route component={ErrorPage} />
      </Switch>
    );
  }
}
