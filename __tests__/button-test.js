import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

describe('We can render a button', () => {
  it('changes the text after click', () => {
    const button =
      ReactTestUtils.renderIntoDocument(
        <button
          onClick={ev => ev.target.innerHTML = 'Bye'}>
          Hello
        </button>
      );

    const buttonNode = ReactDOM.findDOMNode(button);

    expect(buttonNode.textContent).toEqual('Hello');

    ReactTestUtils.Simulate.click(button);

    expect(buttonNode.textContent).toEqual('Bye');
  });
});
