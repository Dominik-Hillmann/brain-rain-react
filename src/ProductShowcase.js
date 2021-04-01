import './style.css';
import './ProductShowcase.css';
import React from 'react';
import wave from './bold-wave.png';


export default class ProductShowcase extends React.Component {
    constructor(props) {
        super(props);
        const atLeastOneImg = this.props.children.length >= 1;
        if (!atLeastOneImg) {
            throw new TypeError('ProductShowcase needs at least one image.');
        }
    }

    handlePressBuyButton() {
        window.open(this.props.buttonLink, '_blank');
    }

    render() {
        const productDescription = (
            <div className="product-description">
                <p>
                    <span className="bigger-text">
                        {this.props.textBig}
                        <span className={this.props.animatedEmojiClassName}>{this.props.animatedEmoji}</span>
                    </span>
                    <span className="smaller-text">
                        {this.props.textSmall}
                    </span>
                    <button 
                        className={this.props.isWhite ? 'is-white' : ''} 
                        onClick={() => this.handlePressBuyButton()}
                    >
                        {this.props.buttonText}
                    </button>
                </p>
            </div>
        );
        const productImgs = <div className="product-imgs">{this.props.children}</div>;

        // Hier abhängig von Bedingung die Reihenfolge ändern.
        const productPart = this.props.textIsLeft ? (<>
            {productDescription}
            {productImgs}
        </>) : (<>
            {productImgs}
            {productDescription}
        </>);
        
        return (<>
            <div className={`ProductShowcase ${this.props.isWhite ? 'is-white': ''}`}>
                <div className="side-space"></div>
                <div className="main-product-part">{productPart}</div>
                <div className="side-space"></div>
            </div>
        </>);
    }
}