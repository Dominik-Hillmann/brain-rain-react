// Libraries
import React from "react";
// Stylesheets
import '../css/ErrorPage.css';
// Images
import logo from '../img/brain-rain-logo.png';

/**
 * @class Page displayed on routes that are not implemented.
 */
export default class ErrorPage extends React.Component {    
    /**
     * Get the current URL without a route.
     * @returns {string} The URL without a route.
     */
    getUrlWithoutRoute() {
        const locationParts = window.location.href.split('/');
        const domain = locationParts[2];
        return `https://${domain}`;
    }

    render() {
        console.log(this.getUrlWithoutRoute());
        return (
            <div id="error-wrapper">
                <img src={logo} alt="The BRAINRAIN logo." />
                <h1>Oops! Seems like you went the wrong way.</h1>
                <p>
                    You can go back to the home page 👉&nbsp;
                    <a href={this.getUrlWithoutRoute()}>
                        this way
                    </a>
                    .
                </p>
            </div>
        );
    }
}