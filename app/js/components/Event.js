import React from 'react';

class Event extends React.Component {

    render() {
        let store = this.props.store;
        let id = this.props.event.id;

        return <div className="event" onClick={() => {store.dispatch({
            type: 'TOGGLE_EVENT',
            id: this.props.event.id
            })}}>
            <span style={{textDecoration: this.props.event.completed? 'line-through' : 'none'}}>
                {this.props.event.text}
            </span>
            {' '}
            ({this.props.event.time} hours)
        </div>;
    }
}

export default Event;
