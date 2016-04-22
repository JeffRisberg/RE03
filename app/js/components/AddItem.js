import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../actions/items';

let AddItem = ({dispatch}) => {
    let text;
    let value;

    return (
        <div>
            <input ref={node => {
        text = node;
      }}/>
            <input ref={node => {
        value = node;
      }}/>
            <button onClick={() => {
        const item = {
             text: text.value,
             description: "",
             value: value.value,
             completed: false
        };
        addItem(item)(dispatch);

        text.value = '';
        value.value = '';
      }}>
                Add Item
            </button>
        </div>
    );
};

export default connect()(AddItem);
