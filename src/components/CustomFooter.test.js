// Libraries
import React from 'react';
import * as ReactDOM from 'react-dom';
// Components
import CustomFooter from './CustomFooter.js';

test('Renders the CustomFooter component.', () => {
  const root = document.createElement('div');
  ReactDOM.render(<CustomFooter />, root);
});
