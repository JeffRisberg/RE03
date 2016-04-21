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
        addItem(input.value)(dispatch);
        input.value = '';
      }}>
        Add Item
      </button>
    </div>
  );
};

export default connect()(AddItem);
