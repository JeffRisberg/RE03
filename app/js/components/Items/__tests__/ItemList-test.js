jest
    .unmock('redux')
    .unmock('react-redux')
    .unmock('../ItemList')
    .unmock('../../../../js/reducers/items')
    .unmock('../../../../js/reducers/events')
;

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { types } from '../../../../js/types'

import ItemList from '../../../../js/components/Items/ItemList';

import items from '../../../../js/reducers/items';
import events from '../../../../js/reducers/events';

describe('We can render an ItemList component', () => {
    it('contains content', () => {

        const combinedReducers = combineReducers({
            items,
            events
        });

        const initialContent = {
            items: {idList: [], records: {}},
            events: {idList: [], records: {}}
        };

        const store = createStore(
            combinedReducers,
            initialContent
        );

        store.dispatch({
            type: types.APPEND_ITEMS,
            items: [{text: "Lassie", description: "Big dog", value: 67}]
        });

        const itemList =
            TestUtils.renderIntoDocument(
                <div>
                    <Provider store={store}>
                        <ItemList />
                    </Provider>
                </div>
            );

        const itemListNode = ReactDOM.findDOMNode(itemList);

        expect(itemListNode.textContent).toContain('Value'); // in table header

        expect(itemListNode.textContent).toContain('Lassie'); // in item text
        expect(itemListNode.textContent).toContain('Big dog'); // in item description
    });
});