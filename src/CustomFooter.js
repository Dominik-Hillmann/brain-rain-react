import React from 'react';

import './CustomFooter.css';

import darkBlueNegativeBrain from './logo-negative-dark-blue.png';
import instagramLogo from './instagram.png';
import etsyLogo from './etsy.png';
import githubLogo from './github.png';

export default class CustomFooter extends React.Component {
    handleEtsyClick() {

    }

    handleInstagramClick() {

    }

    handleGithubClick() {
        
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
                            onClick={() => window.open('https://www.etsy.com/shop/BRAINRAINShop', '_blank')} 
                        />
                        <img 
                            id="instagram" 
                            src={instagramLogo} 
                            onClick={() => window.open('https://www.instagram.com/charlie_fricke', '_blank')}
                        />
                        <img 
                            id="github" 
                            src={githubLogo}
                            onClick={() => window.open('https://github.com/Dominik-Hillmann')} 
                        />
                    </div>
                    <div className="law-stuff">
                        Copyright Ⓒ {new Date().getFullYear()} BRAINRAIN GbR, Wanzleben, Germany. All rights reserved. 
                        <a> Imprint</a>.
                    </div>
                </div>
            <div className="side-space"></div>
        </footer>);
    }
}