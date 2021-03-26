import './style.css';
import './ProductShowcase.css';
import React, { Component } from 'react';

export default class ProductShowcase extends Component {
    constructor(props) {
        super(props);

        const atLeastOneImg = this.props.children.length >= 1;
        if (!atLeastOneImg) {
            throw new TypeError('ProductShowcase needs at least one image.');
        }
    }

    handlePressBuyButton() {
        window.open(
            'https://www.etsy.com/de/listing/737720303/hundemarke-aus-holz-mit-individueller?ref=listings_manager_grid',
            '_blank'  
        );
    }

    render() {
        const productDescription = (
            <div className="product-description" onClick={() => this.handleClick()}>
                <p>
                    <span className="bigger-text">{this.props.textBig}</span>
                    {this.props.textSmall}
                    <button onClick={() => this.handlePressBuyButton()}>To the shop!</button>
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

        return (
            <div className="ProductShowcase">
                <div className="side-space"></div>
                <div className="main-product-part">{productPart}</div>
                <div className="side-space"></div>
            </div>
        );
    }
}