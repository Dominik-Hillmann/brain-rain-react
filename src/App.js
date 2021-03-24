import './App.css';
import React from 'react';
import Navbar from './Navbar.js';
import EyeCatcher from './EyeCatcher.js';
import ProductShowcase from './ProductShowcase.js';


export default class App extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <EyeCatcher />
                <ProductShowcase />
            </>
        );
    }
}
