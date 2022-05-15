// Libraries
import React from 'react';
import * as ReactDOM from 'react-dom';
// Components
import LanguageSwitcher from './LanguageSwitcher.js';

test('Renders the LanguageSwitcher component.', () => {
  const root = document.createElement('div');

  ReactDOM.render(<LanguageSwitcher startLang="en" />, root);
  ReactDOM.render(<LanguageSwitcher startLang="de" />, root);
  
  expect(() => {
    const otherRoot = document.createElement('div');
    ReactDOM.render(<LanguageSwitcher startLang="it" />, otherRoot);
  }).toThrowError(TypeError);
});
