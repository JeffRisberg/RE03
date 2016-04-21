import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../actions/items';

let AddItem = ({dispatch}) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch(addItem(input.value));
        input.value = '';
      }}>
        Add Item
      </button>
    </div>
  );
};

export default connect()(AddItem);
