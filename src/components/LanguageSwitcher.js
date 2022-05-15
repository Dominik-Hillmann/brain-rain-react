// Libraries
import React, { Component } from 'react';
import i18next from 'i18next';
// Styles
import '../css/style.css';
import '../css/LanguageSwitcher.css';
// Images
import uk from '../img/uk.png';
import de from '../img/de.png';

/**
 * @class Controles the language used on the website.
 */
export default class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);
    this.possibleLangs = ['de', 'en'];
    if (!this.possibleLangs.includes(props.startLang)) {
      throw new TypeError(`${props.startLang} is not a choosable language.`);
    }

    this.state = { lang: props.startLang };
  }

  /**
   * Switches the sources of the flag images.
   * It changes the state causing the component to re-render.
   */
  switchFlag() {
    this.setState(prevState => ({
      lang: prevState.lang === 'de' ? 'en' : 'de'
    }));
  }

  /**
   * Triggers the language change in the website by calling
   * `i18next`.
   */
  triggerTranslation() {
    const currentLang = this.state.lang;
    const transLang = currentLang === 'de' ? 'en' : 'de';
    i18next.changeLanguage(transLang);
  }

  /**
   * What happens when the component gets clicked.
   */
  handleClick() {
    this.triggerTranslation();
    this.switchFlag();
  }

  render() {
    const frontFlag = this.state.lang === 'de' ? de : uk;
    const backFlag = this.state.lang === 'de' ? uk : de;
    
    return (
      <div className="LanguageSwitcher">
        <div id="flags-container" onClick={() => this.handleClick()}>
          <img className="front-flag flag" src={frontFlag} alt="The front flag." />
          <img className="back-end flag" src={backFlag} alt="The back flag." />
        </div>
      </div>
    );
  }
}