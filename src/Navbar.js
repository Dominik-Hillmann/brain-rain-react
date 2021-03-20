import './style.css';
import './Navbar.css';
import logo from './brain-rain-logo.png';
import LanguageSwitcher from './LanguageSwitcher.js';
import React, { Component } from 'react';

export default class Navbar extends Component {
    // Idee: wenn ganz oben, dann Logo zu sehen, wenn weiter unten, dann
    // nicht

    // scrollende Seite: Menüpunkt markieren, der gerade zu sehen ist
    render() {
        return (
            <div className="Navbar">
                <header>
                    <div id="logo-wrapper" className="side-space">
                        <img src={logo} alt="The BRAINRAIN logo." />
                    </div>
                    <h1>BRAINRAIN</h1>
                    <div id="menu-items">
                        <p className="currently-shown">About</p>
                        <p>Products</p>
                        <p>Contact</p>
                    </div>

                    <div className="side-space">
                        <LanguageSwitcher startLang="de" />
                    </div>
                </header>
            </div>
        );
    }
}
