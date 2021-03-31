import './App.css';
import React from 'react';
import Navbar from './Navbar.js';
import EyeCatcher from './EyeCatcher.js';
import ProductShowcase from './ProductShowcase.js';

import mark1 from './marke-1.png';
import mark2 from './marke-2.png';

export default class App extends React.Component {
    render() {
        return (<>
            <Navbar />
            <EyeCatcher />
            <ProductShowcase 
                textBig="Dog tag made out of wood with individual engraving." 
                textSmall="Lorem ipsum loro sim allet."
                textIsLeft={false}
                isWhite={false}
            >
                <img src={mark1} alt="A BRAINRAIN dog tag." style={{ 
                    height: "290px" 
                }} />
                <img src={mark2} alt="A BRAINRAIN dog tag." style={{ 
                    height: '250px',
                    marginLeft: '-40px'
                }} />
            </ProductShowcase>
        </>);
    }
}
