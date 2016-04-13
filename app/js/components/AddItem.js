import React from 'react';
//import { connect } from 'react-redux';

import { addItem } from '../actions';

import store from '../store'

let AddItem = () => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        store.dispatch(addItem(input.value));
        input.value = '';
      }}>
        Add Item
      </button>
    </div>
  );
};
export default AddItem;