// Libraries
import React, { Component } from 'react';
import { toRoman } from 'roman-numerals';
// Components
import { Translation } from 'react-i18next';
import Bubbles from './Bubbles.js';
// Stylesheets
import '../css/style.css';
import '../css/EyeCatcher.css';
// Images
import background from '../img/background-eyecatcher.png';
import brainAnimation from '../img/burton.gif';
import negativeLogo from '../img/logo-negative-dark-blue.png'
import mobileWave from '../img/bold-wave.png';

/**
 * @class EyeCatcher Represents the main lettering seen first when the page is loaded.
 */
export default class EyeCatcher extends Component {

  handleEnvelopeClick() {
    window.location.href = `mailto:info@brain-rain.com?body=%0A%0A%0ASent
    %20from%20the%20BRAINRAIN%20website%20(please%20leave%20this%20here).`;
  }

  render() {
    return (
      <div className="EyeCatcher" id="eyecatcher">
        <Bubbles />

        <div className="side-space"></div>
        <img
          src={negativeLogo}
          id="eyecatcher-logo"
          style={{ backgroundImage: `url(${brainAnimation})` }}
          alt="The BRAINRAIN logo with animated background."
        />
        <h1
          id="brain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          BRAIN
        </h1>
        <h1
          id="rain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          tansition={{ duration: 30 }}
        >
          RAIN
        </h1>
        <h2 id="num">{toRoman(parseInt(new Date().getFullYear()))}</h2>
        <div id="welcome-text-wrapper">
          <div id="welcome-text">
            <p id="first-part-welcome">
              <nobr>
                <Translation>{t => t('catcher-weare')}</Translation>&nbsp;
                <span className="brain-rain-name">BRAINRAIN</span>&nbsp;
                <span className="shaking-hand">👋</span>.&nbsp;
              </nobr>
              <wbr />{/* It didn't want to break here at first. */}
              <Translation>{t => t('catcher-wemake')}</Translation>
            </p>
            <p id="second-part-welcome">
              <Translation>{t => t('catcher-weoffer')}</Translation>&nbsp;
              <wbr />
              <nobr>
                <span className="pointing-hand">👇</span>&nbsp;
              </nobr>
              <Translation>{t => t('catcher-contact')}</Translation>&nbsp;
              <span className="shaking-hand" onClick={() => this.handleEnvelopeClick()}>✉️</span>
            </p>
          </div>
        </div>
        <img
          id="eyecatcher-background-mobile"
          src={mobileWave}
          onDragStart={() => false}
          alt="The background to the main eye catcher on mobile devices."
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
