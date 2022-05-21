// Libraries
import React from 'react';
import * as ReactDOM from 'react-dom';
// Components
import Imprint from './Imprint.js';

test('Renders the Imprint component.', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Imprint />, root);
});
