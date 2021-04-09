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
        const domain = `http://${locationParts[2]}`;
        // Good practice to choose URL based on input instead of modifying URL.
        // Otherwise this could lead to redirection to malicious websites.
        if (domain === 'http://localhost:3000') {
            return domain;
        } else {
            return 'http://brain-rain.com';
        }
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