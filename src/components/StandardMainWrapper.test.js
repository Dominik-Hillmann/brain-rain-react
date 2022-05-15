// Libraries
import React from 'react';
import * as ReactDOM from 'react-dom';
// Components
import StandardMainWrapper from './StandardMainWrapper.js';

test('Renders the StandardMainWrapper component with and without content.', () => {
  const root = document.createElement('div');
  ReactDOM.render(<StandardMainWrapper />, root);

  const wrapperWithContent = (
    <StandardMainWrapper>
      <h1>Title</h1>
      <p>Text</p>
    </StandardMainWrapper>
  );
  ReactDOM.render(wrapperWithContent, root);

  expect(root.querySelector('h1').textContent).toEqual('Title');
  expect(root.querySelector('p').textContent).toEqual('Text');
});
