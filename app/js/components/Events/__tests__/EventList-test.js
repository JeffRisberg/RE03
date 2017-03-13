jest
    .unmock('redux')
    .unmock('react-redux')
    .unmock('../EventList')
    .unmock('../../../../js/reducers/items')
    .unmock('../../../../js/reducers/events')
;

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { types } from '../../../../js/types'

import EventList from '../../../../js/components/Events/EventList';

import items from '../../../../js/reducers/items';
import events from '../../../../js/reducers/events';

describe('We can render an EventList component', () => {
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
            type: types.APPEND_EVENTS,
            events: [{text: "Dinner", time: "1800"}]
        });

        const eventList =
            TestUtils.renderIntoDocument(
                <div>
                    <Provider store={store}>
                        <EventList />
                    </Provider>
                </div>
            );

        const eventListNode = ReactDOM.findDOMNode(eventList);

        expect(eventListNode.textContent).toContain('hours'); // in table header

        expect(eventListNode.textContent).toContain('Dinner'); // in event text
        expect(eventListNode.textContent).toContain('1800'); // in event time
    });
});