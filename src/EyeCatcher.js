import './style.css';
import './EyeCatcher.css';

import background from './background-eyecatcher.png';
import brainAnimation from './burton.gif';
import negativeLogo from './logo-negative-dark-blue.png'

import React, { Component } from 'react';
import { toRoman } from 'roman-numerals';

export default class EyeCatcher extends Component {
    onScrollToFirstProduct() {
        console.log('IMPLEMENTIERE MICH.');
    }

    render() {
        return (
            <div className="EyeCatcher" id="eyecatcher">
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
                        <p>
                            We are <span className ="brain-rain-name">BRAINRAIN</span>,
                            we make personalized items for you
                            or your friends and family.
                            Currently, we offer custom made wooden 
                            key fobs and posters.<br />
                            Take a look at them right here <span>👇</span>.
                        </p>
                        {/* <button><a href="https://www.etsy.com/de/shop/BRAINRAINShop">ETSY SHOP</a></button> */}
                        {/* <button><a href="./contact.php">CONTACT</a></button> */}
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