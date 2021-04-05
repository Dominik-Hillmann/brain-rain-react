// Libraries
import React from 'react';
import * as ReactDOM from 'react-dom';
// Components
import ProductShowcase from './ProductShowcase.js';
// Images
import sampleImg from '../img/background.png';

test('Renders the ProductShowcase component.', () => {
    const root = document.createElement('div');
    ReactDOM.render(
        <ProductShowcase
            textBig=""
            textSmall=""
            buttonText=""
            animatedEmoji=""
            animatedEmojiClassName=""
            buttonLink=""
            textIsLeft={true}
            isWhite={true}
        >
            <img src={sampleImg} alt="" />
            <img src={sampleImg} alt="" />
        </ProductShowcase>, 
        root
    );
});
