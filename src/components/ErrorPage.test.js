// Libraries
import React from 'react';
import * as ReactDOM from 'react-dom';
// Components
import ErrorPage from './ErrorPage.js';

test('Renders the ErrorPage component.', () => {
  const root = document.createElement('div');
  ReactDOM.render(<ErrorPage />, root);
});
