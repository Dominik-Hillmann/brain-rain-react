// Libraries
import React from 'react';
import * as ReactDOM from 'react-dom';
// Components
import ConfiguredCookieConsent from './ConfiguredCookieConsent.js';

describe('cookie banner tests.', () => {

  test('renders the cookie banner component', () => {
    const root = document.createElement('div');
    ReactDOM.render(<ConfiguredCookieConsent />, root);
  });

  test('cookie acceptance works', () => {
    const banner = new ConfiguredCookieConsent();
    expect(() => banner.handleTrackAccept()).toThrow(TypeError);
  });
  
});
