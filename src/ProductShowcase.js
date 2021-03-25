import './style.css';
import './ProductShowcase.css';

import mark1 from './marke-1.png';
import mark2 from './marke-2.png';


import React, { Component } from 'react';

export default class ProductShowcase extends Component {


    // Über die props Klasse der eigentlichen Bilder mitgeben, mit denen dann die Größe 
    // on CSS bestimmt wird.
    render() {
        return (
            <div className="ProductShowcase">

                <div className="side-space"></div>
                {/* Hier abhängig von Bedingung die Reihenfolge ändern. */}
                <div className="main-product-part">
                    <div className="product-description">
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                            voluptua.
                        </p>
                    </div>
                    {/* Hinter Schrift (und?) Marken noch abgerundetes Rechteck */}
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