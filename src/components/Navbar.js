// Libraries
import React, { Component } from 'react';
// Components
import LanguageSwitcher from './LanguageSwitcher.js';
import { Translation } from 'react-i18next';
// Stylesheets
import '../css/style.css';
import '../css/Navbar.css';
import logo from '../img/brain-rain-logo.png';

/**
 * @class The navigation bar of the website.
 */
export default class Navbar extends Component {
    /**
     * What happens when clicking on the Etsy menu item.
     * Opens the BRAINRAIN shop on Etsy.
     */
    handlePressEtsyShopItem () {
        window.open('https://www.etsy.com/de/shop/BRAINRAINShop', '_blank'); 
    }

    /**
     * What happens when clicking the Contact item in the navigation bar.
     * Will open the mail program with a mail ready to be sent to the BRAIRAIN
     * e-mail address.
     * @todo Maybe use an account dedicated for the website that forwards mails 
     * to the actual address?
     */
    handlePressContactItem() {
        window.location.href = `mailto:brainrainshop@gmail.com?body=%0A%0A%0ASent
        %20from%20the%20BRAINRAIN%20website%20(please%20leave%20this%20here).`;
    }

    /**
     * What happens when clicking the products navigation bar item.
     * Will scroll the first product into view.
     */
    handlePressProductsItem() {
        const firstProductShowcase = document.querySelector('.product-description');
        firstProductShowcase.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    }

    /**
     * What happens when clicking the about menu item.
     * Will scroll the eye catcher into view.
     */
    handlePressAboutItem() {
        const eyeCatcher = document.querySelector('#eyecatcher');
        eyeCatcher.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    }

    
    render() {
        return (
            <header>
                <div id="logo-wrapper" className="side-space">
                    <img src={logo} alt="The BRAINRAIN logo." />
                </div>
                <div id="menu-items">
                    <p>
                        💁‍♂️
                        <span onClick={() => this.handlePressAboutItem()}>
                        <Translation>{t => t('navbar-about')}</Translation>
                    </span></p>
                    <p>
                        ✨
                        <span onClick={() => this.handlePressProductsItem()}>
                            <Translation>{t => t('navbar-products')}</Translation>
                        </span>
                    </p>
                    <p>
                        ✍️
                        <span onClick={() => this.handlePressContactItem()}>
                            <Translation>{t => t('navbar-contact')}</Translation>
                        </span>
                    </p>
                    <p>
                        🏬
                        <span onClick={() => this.handlePressEtsyShopItem()}>
                            <Translation>{t => t('navbar-etsy')}</Translation>
                        </span>
                    </p>
                </div>
                <div className="side-space">
                    <LanguageSwitcher startLang="en" />
                </div>
            </header>
        );
    }
}
