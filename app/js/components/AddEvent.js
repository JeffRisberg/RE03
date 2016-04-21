import React from 'react';
import { connect } from 'react-redux';

import { addEvent } from '../actions/events';

let AddEvent = ({dispatch}) => {
  let input;
  let time;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <input ref={node => {
        time = node;
      }} />
      <button onClick={() => {
        addEvent(input.value, time.value)(dispatch);
        input.value = '';
        time.value = '';
      }}>
        Add Event
      </button>
    </div>
  );
};

export default connect()(AddEvent);
