import React from 'react';
import { connect } from 'react-redux';

import { queryEvents } from '../actions/events';

import EventList from '../components/Events/EventList';
import AddEvent from '../components/AddEvent';

class EventPage extends React.Component {

    componentDidMount() {
        this.props.queryEvents();
    }

    render() {
        return (
            <div className="eventPage">
                <AddEvent />
                <EventList />
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {};
};
export default connect(
    mapStateToProps,
    {queryEvents}
)(EventPage);
