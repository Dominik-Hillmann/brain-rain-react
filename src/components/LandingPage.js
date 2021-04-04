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

export default class LandingPage extends React.Component {
    render() {
        return (<>
            <Navbar />
            {/* <EyeCatcher />
            <ProductShowcase
                textBig="Wooden dog tag with individual engraving." 
                textSmall={`If you are still looking for a beautiful dog tag you
                    have come to the right place. Our dog tags (diameter 3.5 cm)
                    are made of wood into which we engrave the symbol of your
                    choice. Afterwards, we treat the tags with linseed oil to
                    make it resistent to water and also make them easier to clean.
                    The oil is in no way harmful for your dog.`}
                buttonText="To the shop!"
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
                textBig="Wooden personalized key fob." 
                textSmall={`You can choose the engraving on each of the four
                sides`}
                buttonText="You've enchanted me."
                animatedEmoji="🔑"
                animatedEmojiClassName="shaking-key"
                buttonLink="https://www.etsy.com/de/listing/737720303/hundemarke-aus-holz-mit-individueller?ref=listings_manager_grid"
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
                textBig="Wooden dog tag with individual engraving." 
                textSmall={`If you are still looking for a beautiful dog tag you
                    have come to the right place. Our dog tags (diameter 3.5 cm)
                    are made of wood into which we engrave the symbol of your
                    choice. Afterwards, we treat the tags with linseed oil to
                    make it resistent to water and also make them easier to clean.
                    The oil is in no way harmful for your dog.`}
                buttonText="To the shop!"
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
            </CookieConsent> */}
        </>);
    }
}
