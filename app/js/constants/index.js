export const ActionTypes = {
    RESET_EVENTS: 'RESET_EVENTS',
    FETCH_EVENT_SUCCESS: 'FETCH_EVENT_SUCCESS',
    FETCH_EVENT_FAILURE: 'FETCH_EVENT_FAILURE',
    PERSIST_EVENT_SUCCESS: 'PERSIST_EVENT_SUCCESS',

    RESET_ITEMS: 'RESET_ITEMS',
    FETCH_ITEM_SUCCESS: 'FETCH_ITEM_SUCCESS',
    FETCH_ITEM_FAILURE: 'FETCH_ITEM_FAILURE',
    PERSIST_ITEM_SUCCESS: 'PERSIST_ITEM_SUCCESS',
};

export const paths = {
    Events: 'events',
    Items: 'items',
    Index: '/',
};

export const API = {
    //baseUrl: config.baseUrl,
    //refreshAccessTokenPath: config.refreshAccessTokenPath,
};

export const forms = {
    Event: 'eventForm',
    Item: 'itemForm',
};

