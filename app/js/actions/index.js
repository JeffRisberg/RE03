let nextItemId = 10;
let nextEventId = 10;

export const addItem = (text) => {
  return {
    type: 'ADD_ITEM',
    id: nextItemId++,
    text
  };
};

export const toggleItem = (id) => {
  return {
    type: 'TOGGLE_ITEM',
    id
  };
};


export const addEvent = (text, time) => {
  return {
    type: 'ADD_EVENT',
    id: nextEventId++,
    text,
    time
  };
};

export const toggleEvent = (id) => {
  return {
    type: 'TOGGLE_EVENT',
    id
  };
};
