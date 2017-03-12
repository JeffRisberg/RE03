import React from 'react'
import {connect} from "react-redux";
import {addEvent} from "../actions/events";

let AddEvent = ({dispatch}) => {
    let text;
    let time;

    return (
        <div>
            <input ref={node => {
                text = node;
            }}/>
            <input ref={node => {
                time = node;
            }}/>
            <button onClick={() => {
                const event = {
                    text: text.value,
                    description: "",
                    time: time.value,
                    completed: false
                };
                addEvent(event)(dispatch);

                text.value = '';
                time.value = '';
            }}>
                Add Event
            </button>
        </div>
    );
};

export default connect()(AddEvent);
