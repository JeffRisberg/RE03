jest
    .unmock('redux')
    .unmock('react-redux')
    .unmock('../EventListContainer')
    .unmock('../../../../js/reducers/items')
    .unmock('../../../../js/reducers/events')
;

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
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
                items: { idList: [], records: {} },
                events: { idList: [], records: {} }
            }
        };

        const store = createStore(
            combinedReducers2,
            initialContent
        );

        store.dispatch({
            type: ActionTypes.APPEND_EVENTS,
            events: [{ text: "Dinner", time: "1800" }]
        });

        const eventList =
            TestUtils.renderIntoDocument(
                <div>
                    <Provider store={store}>
                        <EventListContainer />
                    </Provider>
                </div>
            );

        const eventListNode = ReactDOM.findDOMNode(eventList);

        expect(eventListNode.textContent).toContain('hours'); // in table header

        expect(eventListNode.textContent).toContain('Dinner'); // in event text
        expect(eventListNode.textContent).toContain('1800'); // in event time
    });
});