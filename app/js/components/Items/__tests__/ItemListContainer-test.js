jest
  .unmock('redux')
  .unmock('react-redux')
  .unmock('../ItemListContainer')
  .unmock('../../../../js/reducers/items')
  .unmock('../../../../js/reducers/events')
;

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { ActionTypes } from '../../../../js/constants';
import ItemListContainer from '../../../../js/components/Items/ItemListContainer';
import items from '../../../../js/reducers/items';
import events from '../../../../js/reducers/events';

describe('We can render an ItemListContainer', () => {
  it('contains content', () => {

    const combinedReducers1 = combineReducers({
      items,
      events
    });

    const combinedReducers2 = combineReducers({
      app: combinedReducers1
    });

    const initialContent = {
      app: {
        items: [],
        events: []
      }
    };

    const store = createStore(
      combinedReducers2,
      initialContent
    );

    store.dispatch({
      type: ActionTypes.APPEND_ITEMS,
      items: [{ text: "Lassie", description: "Big dog", value: 67 }]
    });

    const itemList =
      TestUtils.renderIntoDocument(
        <div>
          <Provider store={store}>
            <ItemListContainer />
          </Provider>
        </div>
      );

    const itemListNode = ReactDOM.findDOMNode(itemList);

    expect(itemListNode.textContent).toContain('Value'); // in table header

    expect(itemListNode.textContent).toContain('Lassie'); // in item text
    expect(itemListNode.textContent).toContain('Big dog'); // in item description
  });
});
