import React from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { toggleEvent } from '../../actions/events';
import './Events.scss';

class EventList extends React.Component {

    render() {
        const records = this.props.events.idList.map(id => this.props.events.records[id]);

        const eventNodes = records.map((event, key) => {
            const id = event.id;

            return (
                <div key={key} className="events__event">
                    <Link to={'/events/detail/'+id} className='btn btn-default'>View</Link>
                    {' '}
            <span style={{textDecoration: event.completed ? 'line-through' : 'none'}}
                  onClick={() => this.props.toggleEvent(event)}>
                {event.text}
            </span>
                    {' '}
                    ({event.time} hours)
                </div>
            );
        });

        return (
            <div className="events__list">
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
export default connect(
    mapStateToProps,
    {toggleEvent}
)(EventList);

