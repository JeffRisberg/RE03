jest
    .unmock('../app/js/pages/Home')
;

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TestUtils from 'react-addons-test-utils';

import Home from '../app/js/pages/Home';

describe('We can render a Home component', () => {
    it('renders correctly', () => {
        const content = 'content';
        const component = renderer.create(<Home>{content}</Home>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

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