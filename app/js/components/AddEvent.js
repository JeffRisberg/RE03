import React from 'react';
//import { connect } from 'react-redux';

import { addEvent } from '../actions';

import store from '../store'

let AddEvent = () => {
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
        store.dispatch(addEvent(input.value, time.value));
        input.value = '';
        time.value = '';
      }}>
        Add Event
      </button>
    </div>
  );
};
export default AddEvent;