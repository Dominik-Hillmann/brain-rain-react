// Libraries
import React from 'react';
import * as ReactDOM from 'react-dom';
// Components
import Navbar from './Navbar.js';

test('Renders the Navbar component.', () => {
    const root = document.createElement('div');
    ReactDOM.render(<Navbar />, root);
});
