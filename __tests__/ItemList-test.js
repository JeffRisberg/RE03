jest
    .unmock('redux')
    .unmock('react-redux')
    .unmock('../app/js/components/ItemList')
    .unmock('../app/js/reducers/items')
    .unmock('../app/js/reducers/events')
;

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import ItemList from '../app/js/components/ItemList';

import items from '../app/js/reducers/items';
import events from '../app/js/reducers/events';

describe('We can render an ItemList component', () => {
    it('contains content', () => {

        const combinedReducers = combineReducers({
            items,
            events
        });

        const initialContent = {
            items: {idList: [], records: {}}
        };

        const store = createStore(
            combinedReducers,
            initialContent
        );

        const itemList =
            TestUtils.renderIntoDocument(
                <div>
                    <Provider store={store}>
                        <ItemList />
                    </Provider>
                </div>
            );

        const itemListNode = ReactDOM.findDOMNode(itemList);

        expect(itemListNode.textContent).toContain('Value');
    });
});