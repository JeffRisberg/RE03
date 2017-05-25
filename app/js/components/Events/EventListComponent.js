import React from 'react';
import { Link } from 'react-router'
import './Events.scss';

class EventListComponent extends React.Component {

    render() {
        const eventNodes = this.props.records.map((event, key) => {
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

export default EventListComponent;
