// Libraries
import React from 'react';
import * as ReactDOM from 'react-dom';
// Components
import Agbs from './Agbs.js';

test('Renders the terms and conditions component.', () => {
    const root = document.createElement('div');
    ReactDOM.render(<Agbs />, root);
});
