// Libraries
import React from 'react';
import * as ReactDOM from 'react-dom';
// Components
import Widerrufsbelehrung from './Widerrufsbelehrung';

test('Renders the return policy component.', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Widerrufsbelehrung />, root);
});
