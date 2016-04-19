import React from 'react';

import EventList from './EventList';
import AddEvent from './AddEvent';

class EventPage extends React.Component {

    render() {
        return (
            <div className="eventList">
                <AddEvent/>
                <EventList/>
            </div>
        );
    }
}

export default EventPage;