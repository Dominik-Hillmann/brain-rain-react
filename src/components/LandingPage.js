// Libraries
import React from 'react';
// Components 
import Navbar from './Navbar.js';
import EyeCatcher from './EyeCatcher.js';
import ProductShowcase from './ProductShowcase.js';
import CustomFooter from './CustomFooter.js';
import CookieConsent from 'react-cookie-consent';
import { Translation } from 'react-i18next';
// Images
import mark1 from '../img/marke-1.png';
import mark2 from '../img/marke-2.png';

/**
 * @class Represents the landing page as a whole.
 */
export default class LandingPage extends React.Component {
    render() {
        return (<>
            <Navbar />
            <EyeCatcher />
            <ProductShowcase
                textBig={<Translation>{t => t('product1-title')}</Translation>} 
                textSmall={<Translation>{t => t('product1-text')}</Translation>}
                buttonText={<Translation>{t => t('product1-button')}</Translation>}
                animatedEmoji="🐕"
                animatedEmojiClassName="barking-doggo"
                buttonLink="https://www.etsy.com/de/listing/737720303/hundemarke-aus-holz-mit-individueller?ref=listings_manager_grid"
                textIsLeft={true}
                isWhite={false}
            >
                <img src={mark1} alt="A BRAINRAIN dog tag." style={{ 
                    height: "290px" 
                }} />
                <img src={mark2} alt="A BRAINRAIN dog tag." style={{ 
                    height: '250px',
                    marginLeft: '-40px'
                }} />
            </ProductShowcase>
            <ProductShowcase
                textBig={<Translation>{t => t('product2-title')}</Translation>} 
                textSmall={<Translation>{t => t('product2-text')}</Translation>}
                buttonText={<Translation>{t => t('product2-button')}</Translation>}
                animatedEmoji="🔑"
                animatedEmojiClassName="shaking-key"
                buttonLink="https://www.etsy.com/listing/813037384/personalisierbarer-schlusselanhanger-aus?ref=shop_home_feat_2"
                textIsLeft={false}
                isWhite={true}
            >
                <img src={mark1} alt="A BRAINRAIN dog tag." style={{ 
                    height: "290px" 
                }} />
                <img src={mark2} alt="A BRAINRAIN dog tag." style={{ 
                    height: '250px',
                    marginLeft: '-40px'
                }} />
            </ProductShowcase>
            <ProductShowcase
                textBig={<Translation>{t => t('product3-title')}</Translation>}
                textSmall={<Translation>{t => t('product3-text')}</Translation>}
                buttonText={<Translation>{t => t('product3-button')}</Translation>}
                animatedEmoji="🎵"
                animatedEmojiClassName="shaking-key"
                buttonLink="https://www.etsy.com/listing/936961923/personalised-wooden-keychain-with?ref=shop_home_feat_3"
                textIsLeft={true}
                isWhite={false}
            >
                <img src={mark1} alt="A BRAINRAIN dog tag." style={{ 
                    height: "290px" 
                }} />
                <img src={mark2} alt="A BRAINRAIN dog tag." style={{ 
                    height: '250px',
                    marginLeft: '-40px'
                }} />
            </ProductShowcase>
            <CustomFooter
                githubLink="https://github.com/Dominik-Hillmann"
                etsyLink="https://www.etsy.com/de/shop/BRAINRAINShop"
                instagramLink="https://www.instagram.com/charlie_fricke"
            />
            <CookieConsent
                location="bottom"
                buttonText={<Translation>{t => t('cookie-understand')}</Translation>}
                cookieName="General cookies"
                style={{ 
                    background: "black",
                    fontFamily: 'Celias'
                }}
                buttonStyle={{ 
                    color: "white", 
                    fontFamily: 'Celias',
                    backgroundColor: 'cornflowerblue'
                }}
            >
                <Translation>{t => t('cookie-banner')}</Translation>&nbsp;🍪
            </CookieConsent>
        </>);
    }
}
