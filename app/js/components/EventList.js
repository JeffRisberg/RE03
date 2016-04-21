import React from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';

import { toggleEvent } from '../actions/events';

class EventList extends React.Component {

    render() {
        const records = this.props.events.idList.map(id => this.props.events.records[id]);;

        const eventNodes = records.map((event, key) => {
            const id = event.id;

            return (
                <div key={key} className="event" onClick={() => this.props.onEventClick(id)}>
                    <Link to={'/eventDetail/'+id} className='btn btn-default'>View</Link>
                    {' '}
            <span style={{textDecoration: event.completed ? 'line-through' : 'none'}}>
                {event.text}
            </span>
                    {' '}
                    ({event.time} hours)
                </div>
            );
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

