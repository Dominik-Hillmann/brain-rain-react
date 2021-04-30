// Libraries
import React from 'react';
import * as ReactDOM from 'react-dom';
// Components
import WikiMaps from './WikiMaps.js';

test('Renders the CustomFooter component.', () => {
    const root = document.createElement('div');
    ReactDOM.render(<WikiMaps />, root);
});
