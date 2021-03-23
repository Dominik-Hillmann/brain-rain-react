import './style.css';
import './ProductShowcase.css';

import mark1 from './marke-1.png';
import mark2 from './marke-2.png';


import React, { Component } from 'react';

export default class ProductShowcase extends Component {
    render() {
        return (
            <div className="ProductShowcase">

                <div className="side-space"></div>

                <div className="main-product-part">
                    <div className="product-description">
                        <p>Das ist ein Test.</p>
                    </div>
                    <div className="product-imgs">
                        <img src={mark1} />
                        <img src={mark2} />
                    </div>
                </div>

                <div className="side-space"></div>

            </div>
        );
    }
}