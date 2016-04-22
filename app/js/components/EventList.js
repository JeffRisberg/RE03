import React from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';

import { saveEvent } from '../actions/events';

class EventList extends React.Component {

    render() {
        const records = this.props.events.idList.map(id => this.props.events.records[id]);

        const eventNodes = records.map((event, key) => {
            const id = event.id;

            return (
                <div key={key} className="event" onClick={() => this.props.onClick(event)}>
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
        onClick: (event) => {
            var newEvent = { ...event, completed: !event.completed };
            saveEvent(newEvent)(dispatch);
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventList);

