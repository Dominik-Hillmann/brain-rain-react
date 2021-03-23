import './App.css';
import React from 'react';
import Navbar from './Navbar.js';
import EyeCatcher from './EyeCatcher.js';
import ProductShowcase from './ProductShowcase.js';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <EyeCatcher />
                <ProductShowcase />
            </div>
        );
    }
}

export default App;
