// Libraries
import React from "react";
// Stylesheets
import '../css/StandardMainWrapper.css'
import '../css/WikiMaps.css';
// Images
import boldWave from '../img/bold-wave.png';

/**
 * @class A wrapper around long texts, e.g. the imprint to make it good-looking.
 */
export default class StandardMainWrapper extends React.Component {
    render() {
        return (<div className="standard-main-wrapper-wrapper">
            <img src={boldWave} alt="A white wave." />
            <div className="content-wrapper">
                <div className="content">{this.props.children}</div>
            </div>
        </div>);
    }
}
