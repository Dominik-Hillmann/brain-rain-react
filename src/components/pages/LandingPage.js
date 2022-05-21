// Libraries
import React from 'react';
// Components 
import Navbar from '../Navbar.js';
import EyeCatcher from '../EyeCatcher.js';
import ConfiguredCookieConsent from '../ConfiguredCookieConsent.js';
import ProductShowcase from '../ProductShowcase.js';
import CustomFooter from '../CustomFooter.js';
import { Translation } from 'react-i18next';
// Images
import mark1 from '../../img/marke-1.png';
import mark2 from '../../img/marke-2.png';
import nut2 from '../../img/nuss-2.png';
import birch1 from '../../img/birke-1.png';
import birch2 from '../../img/birke-2.png';
import camera from '../../img/camera.png';
import drone from '../../img/drone.png';

/**
 * @class Represents the landing page as a whole.
 */
export default class LandingPage extends React.Component {
  render() {
    return (<>
      <Navbar />

      <EyeCatcher />

      <ProductShowcase
        textBig={<Translation>{t => t('filmphoto-title')}</Translation>}
        textSmall={<Translation>{t => t('filmphoto-text')}</Translation>}
        buttonText={<Translation>{t => t('filmphoto-button')}</Translation>}
        buttonHoverText={<Translation>{t => t('filmphoto-hovertext')}</Translation>}
        animatedEmoji="📷"
        animatedEmojiClassName="shaking-key"
        buttonLink="https://www.etsy.com/de/listing/737720303/hundemarke-aus-holz-mit-individueller?ref=listings_manager_grid"
        textIsLeft={false}
        isWhite={false}
      >
        <img src={drone} alt="A drone used for photography." style={{
          height: "370px"
        }} />
        <img src={camera} alt="A Nikon camera." style={{
          height: '350px',
          marginLeft: '-70px'
        }} />
      </ProductShowcase>

      <ProductShowcase
        textBig={<Translation>{t => t('product1-title')}</Translation>}
        textSmall={<Translation>{t => t('product1-text')}</Translation>}
        buttonText={<Translation>{t => t('product1-button')}</Translation>}
        buttonHoverText={<Translation>{t => t('products-hovertext')}</Translation>}
        animatedEmoji="🐕"
        animatedEmojiClassName="barking-doggo"
        buttonLink="https://www.etsy.com/de/listing/737720303/hundemarke-aus-holz-mit-individueller?ref=listings_manager_grid"
        textIsLeft={true}
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
        textBig={<Translation>{t => t('product2-title')}</Translation>}
        textSmall={<Translation>{t => t('product2-text')}</Translation>}
        buttonText={<Translation>{t => t('product2-button')}</Translation>}
        buttonHoverText={<Translation>{t => t('products-hovertext')}</Translation>}
        animatedEmoji="🔑"
        animatedEmojiClassName="shaking-key"
        buttonLink="https://www.etsy.com/listing/813037384/personalisierbarer-schlusselanhanger-aus?ref=shop_home_feat_2"
        textIsLeft={false}
        isWhite={true}
      >
        <img src={nut2} alt="Nussbaumanhänger" style={{ height: "300px" }} />
      </ProductShowcase>

      <ProductShowcase
        textBig={<Translation>{t => t('product3-title')}</Translation>}
        textSmall={<Translation>{t => t('product3-text')}</Translation>}
        buttonText={<Translation>{t => t('product3-button')}</Translation>}
        buttonHoverText={<Translation>{t => t('products-hovertext')}</Translation>}
        animatedEmoji="🎵"
        animatedEmojiClassName="shaking-key"
        buttonLink="https://www.etsy.com/listing/936961923/personalised-wooden-keychain-with?ref=shop_home_feat_3"
        textIsLeft={true}
        isWhite={false}
      >
        <img src={birch1} alt="Buchenholzanhänger" style={{ height: '200px' }} />
        <img src={birch2} alt="Buchenholzanhänger" style={{
          height: '200px',
          marginLeft: '-100px'
        }} />
      </ProductShowcase>

      <CustomFooter
        githubLink="https://github.com/Dominik-Hillmann"
        etsyLink="https://www.etsy.com/de/shop/BRAINRAINShop"
        instagramLink="https://www.instagram.com/charlie_fricke"
        portfolioLink="https://charliefricke.com"
      />

      <ConfiguredCookieConsent />
    </>);
  }
}
