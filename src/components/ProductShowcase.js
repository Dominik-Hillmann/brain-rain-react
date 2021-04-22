// Libraries
import React from 'react';
// Stylesheets
import '../css/style.css';
import '../css/ProductShowcase.css';

/**
 * @class A group of images paired with a text and a call to action.
 * The images should be cut out due to the 'floating' effect.
 */
export default class ProductShowcase extends React.Component {
    constructor(props) {
        super(props);
        const atLeastOneImg = this.props.children.length > 0;
        if (!atLeastOneImg) {
            throw new TypeError('ProductShowcase needs at least one image.');
        }
        
        this.state = { buttonText: this.props.buttonText };
    }

    /**
     * What happens when the buy button at the end of the text gets pressed.
     */
    handlePressBuyButton() {
        window.open(this.props.buttonLink, '_blank');
    }

    /**
     * What happens when the mouse hovers over the showcase button.
     * Right now only for white showcases.
     */
    handleMouseOver() {
        if (this.props.isWhite) {
            this.setState(_prevState => ({
                buttonText: this.props.buttonHoverText 
            }));
        }
    }

    /**
     * What happens when the mouse leaves the showcase button.
     * Right now only for white showcases.
     */
    handleMouseLeave() {
        if (this.props.isWhite) {
            this.setState(_prevState => ({
                buttonText: this.props.buttonText
            }));
        }
    }


    render() {
        const productDescription = (
            <div className="product-description">
                <p style={{ marginLeft: this.props.textIsLeft ? '0px' : null }}>
                    <span className="bigger-text">
                        {this.props.textBig}&nbsp;
                        <span className={this.props.animatedEmojiClassName}>{this.props.animatedEmoji}</span>
                    </span>
                    <span className="smaller-text">
                        {this.props.textSmall}
                    </span>
                    <button 
                        className={this.props.isWhite ? 'is-white' : ''} 
                        onClick={() => this.handlePressBuyButton()}
                        onMouseOver={() => this.handleMouseOver()}
                        onMouseLeave={() => this.handleMouseLeave()}
                    >
                        {this.state.buttonText}
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