// Libraries
import React from 'react';
import * as ReactDOM from 'react-dom';
// Components
import Bubbles from './Bubbles.js';

describe('bubbles eye catcer tests.', () => {
  test('renders the bubbles component', () => {
    const root = document.createElement('div');
    ReactDOM.render(<Bubbles />, root);
  });
});