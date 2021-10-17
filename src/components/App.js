// Libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Components 
import LandingPage from './LandingPage.js';
import Imprint from './Imprint.js';
import ErrorPage from './ErrorPage.js';

/**
 * @class Represents the website as a whole.
 */
export default class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={LandingPage} exact />
                <Route path="/imprint" component={Imprint} />
                <Route component={ErrorPage} />
            </Switch>
        );
    }
}
