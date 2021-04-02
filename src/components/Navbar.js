// Libraries
import React, { Component } from 'react';
// Components
import LanguageSwitcher from './LanguageSwitcher.js';
import { Translation } from 'react-i18next';
// Stylesheets
import '../css/style.css';
import '../css/Navbar.css';
import logo from '../img/brain-rain-logo.png';

export default class Navbar extends Component {
    onPressEtsyShopItem () {
        window.open('https://www.etsy.com/de/shop/BRAINRAINShop', '_blank'); 
    }

    onPressContactItem() {
        window.location.href = 'mailto:brainrainshop@gmail.com?body=%0A%0A%0ASent%20from%20the%20BRAINRAIN%20website.';
    }
    onPressProductsItem() {
    }
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
                    <p>💁‍♂️<span onClick={() => this.onPressAboutItem()}>
                        <Translation>{t => t('navbar-about')}</Translation>
                    </span></p>
                    <p>
                        ✨
                        <span onClick={() => this.onPressProductsItem()}>
                            <Translation>{t => t('navbar-products')}</Translation>
                        </span>
                    </p>
                    <p>
                        ✍️
                        <span onClick={() => this.onPressContactItem()}>
                            <Translation>{t => t('navbar-contact')}</Translation>
                        </span>
                    </p>
                    <p>
                        🏬
                        <span onClick={() => this.onPressEtsyShopItem()}>
                            <Translation>{t => t('navbar-etsy')}</Translation>
                        </span>
                    </p>
                </div>
                <div className="side-space">
                    <LanguageSwitcher startLang="de" />
                </div>
            </header>
        );
    }
}
