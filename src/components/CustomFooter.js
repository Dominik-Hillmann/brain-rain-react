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

export default class CustomFooter extends React.Component {
    handleEtsyClick() {
        window.open(this.props.etsyLink, '_blank');
    }

    handleInstagramClick() {
        window.open(this.props.instagramLink, '_blank');
    }

    handleGithubClick() {
        window.open(this.props.githubLink, '_blank');
    }

    render() {
        return (<footer>
            <div className="side-space"></div>
                <div id="inner-footer">
                    <div className="logo-space">
                        <img src={darkBlueNegativeBrain} />
                        <h1>BRAINRAIN</h1>
                    </div>
                    <div className="social-media">
                        <img 
                            id="etsy" 
                            src={etsyLogo}
                            onClick={() => this.handleEtsyClick()} 
                        />
                        <img 
                            id="instagram" 
                            src={instagramLogo} 
                            onClick={() => this.handleInstagramClick()}
                        />
                        <img 
                            id="github" 
                            src={githubLogo}
                            onClick={() => this.handleGithubClick()} 
                        />
                    </div>
                    <div className="law-stuff">
                        Copyright Ⓒ {new Date().getFullYear()}&nbsp;
                        <Translation>{t => t('footer-remark')}</Translation>&nbsp;
                        <a href="https://brain-rain.com/imprint">
                            <Translation>{t => t('footer-imprint')}</Translation>
                        </a>.
                    </div>
                </div>
            <div className="side-space"></div>
        </footer>);
    }
}