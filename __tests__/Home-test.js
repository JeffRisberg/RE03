jest
    .unmock('../app/js/components/Home')
;

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Home from '../app/js/components/Home';

describe('We can render an Home component', () => {
    it('contains content', () => {
        const home =
            TestUtils.renderIntoDocument(
                <div>
                    <Home />
                </div>
            );

        expect(ReactDOM.findDOMNode(home).textContent).toContain('RE03 Example');
    });

    it('allows a custom CSS class', () => {
        const home =
            TestUtils.renderIntoDocument(
                <div>
                    <Home className="dog" />
                </div>
            );

        // Walk through the DOM nodes and check class information

        const homeNode = ReactDOM.findDOMNode(home).children[0];
        expect(homeNode.getAttribute('class')).toEqual('dog');

        const rowNode = homeNode.children[1];
        expect(rowNode.getAttribute('class')).toEqual('row');
    });
});