import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { fetchEvent, saveEvent, deleteEvent } from '../actions/events';

import EventForm from './EventForm';

class EventDetail extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const id = this.props.params.id;
        const event = this.props.events.records[id];

        if (event == null)
            this.props.fetchEvent(id);
    }

    handleSubmit(e, formData) {
        e.preventDefault();

        //const ein = this.props.selections['ein'];

        //this.props.addDonation(formData, ein);
    }

    render() {
        const event = this.props.events.records[this.props.params.id];

        if (event != null) {
            return (
                <EventForm event={event} handleSubmit={this.handleSubmit}
                           formData={{
                           text: event.text,
                           description: event.description,
                           time: event.times
                           }}/>
            );
        }
        else
            return null;
    }
}
EventDetail.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        events: state.events
    };
};

export default connect(
    mapStateToProps,
    {fetchEvent, saveEvent, deleteEvent}
)(EventDetail);
