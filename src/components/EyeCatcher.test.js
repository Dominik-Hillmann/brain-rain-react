// Libraries
import React from 'react';
import * as ReactDOM from 'react-dom';
// Components
import EyeCatcher from './EyeCatcher.js';

test('Renders the EyeCatcher component.', () => {
    const root = document.createElement('div');
    ReactDOM.render(<EyeCatcher />, root);
});
