import React from 'react';
import {connect} from 'react-redux';
import {queryEvents, toggleEvent} from '../../actions/events';
import { AddEventComponent } from 'Events';
import { EventListComponent } from 'Events';
import './Events.scss';

class EventListContainer extends React.Component {

    componentDidMount() {
        this.props.queryEvents();
    }

    render() {
        if (this.props.events != undefined) {
            return (
                <div className="eventPage">
                    <AddEventComponent />
                    <EventListComponent records={this.props.events} toggleEvent={this.props.toggleEvent} />
                </div>
            );
        }
        else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.app.events
    };
};
export default connect(
    mapStateToProps,
    {queryEvents, toggleEvent}
)(EventListContainer);
