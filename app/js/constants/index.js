export const ActionTypes = {
  FETCH_EVENTS: 'FETCH_EVENTS',
  FETCH_EVENTS_SUCCESS: 'FETCH_EVENTS_SUCCESS',
  FETCH_EVENTS_FAILURE: 'FETCH_EVENTS_FAILURE',
  PERSIST_EVENT_SUCCESS: 'PERSIST_EVENT_SUCCESS',

  FETCH_ITEMS: 'FETCH_ITEMS',
  FETCH_ITEMS_SUCCESS: 'FETCH_ITEMS_SUCCESS',
  FETCH_ITEMS_FAILURE: 'FETCH_ITEMS_FAILURE',
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

