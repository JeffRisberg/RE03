jest
  .unmock('redux')
  .unmock('react-redux')
  .unmock('../EventListContainer')
  .unmock('../../../../js/reducers/items')
  .unmock('../../../../js/reducers/events')
;

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import createHistory from 'history';
import { ActionTypes } from '../../../../js/constants';
import EventListContainer from '../../../../js/components/Events/EventListContainer';
import items from '../../../../js/reducers/items';
import events from '../../../../js/reducers/events';

describe('We can render an EventListContainer', () => {
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
      initialContent,
      applyMiddleware(thunk)
    );

    const history = createHistory({ basename: '/' });

    store.dispatch({
      type: ActionTypes.FETCH_EVENTS_SUCCESS,
      events: [{ text: "Dinner", time: "1800" }],
      meta: {
        log: ['event changed']
      }
    });

    const eventList =
      ReactTestUtils.renderIntoDocument(
        <div>
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <Route component={EventListContainer}/>
            </ConnectedRouter>
          </Provider>
        </div>
      );

    const eventListNode = ReactDOM.findDOMNode(eventList);

    expect(eventListNode.textContent).toContain('Add Event'); // above table

    /*
    expect(eventListNode.textContent).toContain('hours'); // in table header

    expect(eventListNode.textContent).toContain('Dinner'); // in event text
    expect(eventListNode.textContent).toContain('1800'); // in event time
    */
  });
});
