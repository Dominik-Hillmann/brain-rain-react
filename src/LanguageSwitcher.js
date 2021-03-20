import './style.css';
import './LanguageSwitcher.css';
import uk from './uk.png';
import de from './de.png';
import React, { Component } from 'react';

export default class LanguageSwitcher extends Component {
    constructor(props) {
        super(props);
        this.possibleLangs = [ 'de', 'en' ];
        if (!this.possibleLangs.includes(props.startLang)) {
            throw new TypeError(`${props.startLang} is not a choosable language.`);
        }

        this.state = { lang: props.startLang };
    }

    render() {
        const frontFlag = this.state.lang === 'de' ? de : uk;
        const backFlag = this.state.lang === 'de' ? uk : de;
        return (
            <div className="LanguageSwitcher">
                <div id="flags-container">
                    <img className="front-flag flag" src={frontFlag} alt="The front flag." />
                    <img className="back-end flag" src={backFlag} alt="The back flag." />
                </div>
            </div>
        );
    }
}