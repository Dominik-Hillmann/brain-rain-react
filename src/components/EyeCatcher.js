// Libraries
import React, { Component } from 'react';
import { toRoman } from 'roman-numerals';
// Components
import { Translation } from 'react-i18next';
// Stylesheets
import '../css/style.css';
import '../css/EyeCatcher.css';
// Images
import background from '../img/background-eyecatcher.png';
import brainAnimation from '../img/burton.gif';
import negativeLogo from '../img/logo-negative-dark-blue.png'

export default class EyeCatcher extends Component {
    onScrollToFirstProduct() {
        console.log('IMPLEMENTIERE MICH.');
    }

    render() {
        return (
            <div className="EyeCatcher" id="eyecatcher">
                <div className="side-space"><p>s</p></div>
                <img 
                    src={negativeLogo} 
                    id="eyecatcher-logo" 
                    style={{ backgroundImage: `url(${brainAnimation})` }}
                    alt="The BRAINRAIN logo with animated background."    
                />
                <h1 id="brain">BRAIN</h1>
                <h1 id="rain">RAIN</h1>
                <h2 id="num">{toRoman(parseInt(new Date().getFullYear()))}</h2>
                <div id="welcome-text-wrapper">
                    <div id="welcome-text">
                        <p id="first-part-welcome">
                            Hi, <Translation>{t => t('catcher-weare')}</Translation>&nbsp;
                            <span className ="brain-rain-name">BRAINRAIN</span>
                            <span className="shaking-hand">👋</span>.
                            <Translation>{t => t('catcher-wemake')}</Translation>
                        </p>
                        <p id="second-part-welcome">
                            <Translation>{t => t('catcher-weoffer')}</Translation>
                            <Translation>{t => t('catcher-takelook')}</Translation>&nbsp;
                            <span className="pointing-hand">👇</span>.
                        </p>
                    </div>
                </div>
                <img 
                    id="welcome-text-wave" 
                    src="./img/thin_wave.png" 
                    onDragStart={() => false} 
                    alt="The background to the main eye catcher of the landing page."    
                /> 
                <img 
                    id="eyecatcher-background" 
                    src={background}
                    onDragStart={() => false} 
                    alt="The background to the main eye catcher of the landing page."    
                />
            </div>
        );
    }
}