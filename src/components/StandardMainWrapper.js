// Libraries
import React from "react";
// Stylesheets
import '../css/StandardMainWrapper.css';
// Images
import boldWave from '../img/bold-wave.png';

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