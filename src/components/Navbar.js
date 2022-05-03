// Libraries
import React, { Component } from 'react';
// Components
import LanguageSwitcher from './LanguageSwitcher.js';
import { Translation } from 'react-i18next';
import { stack as BurgerMenu } from 'react-burger-menu';
// Stylesheets
import '../css/style.css';
import '../css/Navbar.css';
import '../css/BurgerButton.css';
import logo from '../img/brain-rain-logo.png';

/**
 * @class The navigation bar of the website.
 */
export default class Navbar extends Component {
    constructor() {
        super();
        this.aboutSymbol = '💁‍♂️';
        this.contactSymbol = '✍️';
        this.productsSymbol = '✨';
        this.etsySymbol = '🏬';
    }

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
        window.location.href = `mailto:info@brain-rain.com?body=%0A%0A%0ASent
        %20from%20the%20BRAINRAIN%20website%20(please%20leave%20this%20here).`;
    }

    /**
     * What happens when clicking the products navigation bar item.
     * Will scroll the first product into view.
     */
    handlePressProductsItem() {
        const firstProductShowcase = document.querySelector('.product-description');
        try {
            firstProductShowcase.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        } catch (e) {
            if (e instanceof TypeError) {
                // The product is not on this page.
                window.open(window.location.origin);
            }
        }
    }

    /**
     * What happens when the user clicks the logo in the upper left of the
     * navigation bar.
     */
    handleLogoClick() {
        // window.open('https://brain-rain.com', '_blank');
    }

    /**
     * What happens when clicking the about menu item.
     * Will scroll the eye catcher into view.
     */
    handlePressAboutItem() {
        const eyeCatcher = document.querySelector('#eyecatcher');
        try {
            eyeCatcher.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        } catch (e) {
            if (e instanceof TypeError) {
                // About is not on this page, navigate to landing page.
                window.open(window.location.origin);
            }
        }
    }

    render() {
        return (
            <header>
                <BurgerMenu>
                    <span>
                        <LanguageSwitcher startLang="en" />
                    </span>
                    <span onClick={() => this.handlePressAboutItem()}>
                        {this.aboutSymbol}&nbsp;&nbsp;&nbsp;
                        <Translation>{t => t('navbar-about')}</Translation>
                    </span>
                    <span onClick={() => this.handlePressProductsItem()}>
                        {this.productsSymbol}&nbsp;&nbsp;&nbsp;
                        <Translation>{t => t('navbar-products')}</Translation>
                    </span>
                    <span onClick={() => this.handlePressContactItem()}>
                        {this.contactSymbol}&nbsp;&nbsp;&nbsp;
                        <Translation>{t => t('navbar-contact')}</Translation>
                    </span>
                    <span onClick={() => this.handlePressEtsyShopItem()}>
                        {this.etsySymbol}&nbsp;&nbsp;&nbsp;
                        <Translation>{t => t('navbar-etsy')}</Translation>
                    </span>
                </BurgerMenu>
                <div id="logo-wrapper" className="side-space">
                    <img src={logo} alt="The BRAINRAIN logo." onClick={this.handleLogoClick()} />
                </div>
                <div id="menu-items">
                    <p>
                        {this.aboutSymbol}
                        <span onClick={() => this.handlePressAboutItem()}>
                        <Translation>{t => t('navbar-about')}</Translation>
                    </span>
                    </p>
                    <p>
                        {this.productsSymbol}
                        <span onClick={() => this.handlePressProductsItem()}>
                            <Translation>{t => t('navbar-products')}</Translation>
                        </span>
                    </p>
                    <p>
                        {this.contactSymbol}
                        <span onClick={() => this.handlePressContactItem()}>
                            <Translation>{t => t('navbar-contact')}</Translation>
                        </span>
                    </p>
                    <p>
                        {this.etsySymbol}
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
