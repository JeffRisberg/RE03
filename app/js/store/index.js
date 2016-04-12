import { createStore, combineReducers } from 'redux';

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
          todo(t, action)
      );
    default:
      return state;
  }
};

const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const cart = (
    state = 'SHOW_ALL',
    action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const channel = (
    state = 'SHOW_ALL',
    action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const inventoryAppReducer = combineReducers({
  todos,
  cart,
  channel
});


var basicItems = [
  {
    title: 'Stegosaurus',
    description: "Mild",
    price: 42
  },
  {
    title: 'Velociraptor',
    description: "Mean",
    price: 71
  },
  {
    title: 'Lame-brained Lawyer',
    description: "Stupid",
    price: 10
  }
];

var inventory = {
  cart: {
    title: 'Jurassic Park Animals',
    items: [
      ...basicItems,
      {
        title: 'Lame-brained Lawyer',
        description: "Stupid",
        price: 10
      }
    ]
  },
  channel: {
    title: "Disney Channel",
    shows: [
      {name: "The Lion King", channelId: "LK-564"},
      {name: "Pocahontas", channelId: "P-789"}
    ]
  }
};

export default createStore(inventoryAppReducer, inventory)