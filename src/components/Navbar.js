// Libraries
import React, { Component } from 'react';
// Components
import LanguageSwitcher from './LanguageSwitcher.js';
// Stylesheets
import '../css/style.css';
import '../css/Navbar.css';
import logo from '../img/brain-rain-logo.png';

export default class Navbar extends Component {
    onPressEtsyShopItem () {
        window.open('https://www.etsy.com/de/shop/BRAINRAINShop', '_blank'); 
    }

    onPressContactItem() { }
    onPressProductsItem() { }
    onPressAboutItem() { }

    // Idee: wenn ganz oben, dann Logo zu sehen, wenn weiter unten, dann
    // nicht

    // scrollende Seite: Menüpunkt markieren, der gerade zu sehen ist
    render() {
        return (
            <header>
                <div id="logo-wrapper" className="side-space">
                    <img src={logo} alt="The BRAINRAIN logo." />
                </div>
                <div id="menu-items">
                    <p>💁‍♂️<span onClick={() => this.onPressAboutItem()}>About</span></p>
                    <p>✨<span onClick={() => this.onPressProductsItem()}>Products</span></p>
                    <p>✍️<span onClick={() => this.onPressContactItem()}>Contact</span></p>
                    <p>🏬<span onClick={() => this.onPressEtsyShopItem()}>Etsy Shop</span></p>
                </div>
                <div className="side-space">
                    <LanguageSwitcher startLang="de" />
                </div>
            </header>
        );
    }
}
