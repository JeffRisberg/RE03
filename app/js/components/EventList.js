import React from 'react';
import { connect } from 'react-redux';

import Event from './Event';

import { toggleEvent } from '../actions';

class EventList extends React.Component {

    render() {
        const events = this.props.events;

        const eventNodes = events.map(function (event, key) {
            return <Event key={key} event={event} onClick={() => onEventClick(item.id)} />;
        });

        return (
            <div className="eventList">
                <div>
                    {eventNodes}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.events
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onEventClick: (id) => {
            dispatch(toggleEvent(id));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventList);

