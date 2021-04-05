// Libraries
import React from 'react';
import * as ReactDOM from 'react-dom';
// Components
import LandingPage from './LandingPage.js';

test('Renders the LandingPage component.', () => {
    const root = document.createElement('div');
    ReactDOM.render(<LandingPage />, root);
});
