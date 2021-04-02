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
        this.possibleLangs = [ 'de', 'en' ];
        if (!this.possibleLangs.includes(props.startLang)) {
            throw new TypeError(`${props.startLang} is not a choosable language.`);
        }

        this.state = { lang: props.startLang };
    }

    switchFlag() {
        this.setState(this.state.lang === 'de' ? { lang: 'en' } : { lang: 'de' });
    }

    triggerTranslation() {
        const currentLang = this.state.lang;
        const transLang = currentLang === 'de' ? 'en' : 'de';
        i18next.changeLanguage(transLang);
    }

    handleClick() {
        this.switchFlag();
        this.triggerTranslation();
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