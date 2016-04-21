import React from 'react';
import { connect } from 'react-redux';

import { queryEvents } from '../actions/events';

import EventList from './EventList';
import AddEvent from './AddEvent';

class EventPage extends React.Component {

    componentDidMount() {
        this.props.onMount();
    }

    render() {
        return (
            <div className="eventPage">
                <AddEvent/>
                <EventList/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return {
        onMount: () => {
            queryEvents()(dispatch);
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventPage);
