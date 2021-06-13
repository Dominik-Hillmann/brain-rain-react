// Libraries
import React from 'react';
// Components
import { Translation } from 'react-i18next';
// Stylesheets
import '../css/CustomFooter.css';
// Images
import darkBlueNegativeBrain from '../img/logo-negative-dark-blue.png';
import instagramLogo from '../img/instagram.png';
import etsyLogo from '../img/etsy.png';
import githubLogo from '../img/github.png';
import adobePortfolioLogo from '../img/adobe-portfolio.png'

/**
 * @class The footer at the bottom of the website.
 */
export default class CustomFooter extends React.Component {
    /**
     * What happens when the Etsy button gets clicked.
     */
    handleEtsyClick() {
        window.open(this.props.etsyLink, '_blank');
    }

    /**
     * What happens if the Instagram button gets clicked.
     */
    handleInstagramClick() {
        window.open(this.props.instagramLink, '_blank');
    }

    /**
     * What happens if the GitHub button gets clicked.
     */
    handleGithubClick() {
        window.open(this.props.githubLink, '_blank');
    }

    /**
     * What happens of the Adobe Portfolio butto gets clicked.
     */
    handleAdobePortfolioClick() {
        window.open(this.props.portfolioLink, '_blank');
    }

    render() {
        return (<footer>
            <div className="side-space"></div>
                <div id="inner-footer">
                    <div className="logo-space">
                        <img src={darkBlueNegativeBrain} alt="BRAINRAIN logo" />
                        <h1>BRAINRAIN</h1>
                    </div>
                    <div className="social-media">
                        <img 
                            id="etsy" 
                            src={etsyLogo}
                            onClick={() => this.handleEtsyClick()} 
                            alt="Etsy logo"
                        />
                        <img 
                            id="instagram" 
                            src={instagramLogo} 
                            onClick={() => this.handleInstagramClick()}
                            alt="Instagram logo"
                        />
                        <img 
                            id="github" 
                            src={githubLogo}
                            onClick={() => this.handleGithubClick()}
                            alt="GitHub logo"
                        />
                        <img
                            id="adobe-portfolio"
                            src={adobePortfolioLogo}
                            onClick={() => this.handleAdobePortfolioClick()}
                            alt="Adobe Portfolio logo"
                        />
                    </div>
                    <div className="law-stuff">
                        Copyright Ⓒ {new Date().getFullYear()}&nbsp;
                        <Translation>{t => t('footer-remark')}</Translation>&nbsp;
                        <a href={`${window.location.origin}/imprint`}>
                            <Translation>{t => t('footer-imprint')}</Translation>
                        </a>.
                    </div>
                </div>
            <div className="side-space"></div>
        </footer>);
    }
}