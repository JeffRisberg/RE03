import React from "react";
import {connect} from "react-redux";
import {fetchEvent, saveEvent, deleteEvent} from "../../actions/events";
import EventForm from "./EventForm";
import "./Events.scss";

class EventDetail extends React.Component {

    componentDidMount() {
        const id = this.props.params.id;
        const event = this.props.events.records[id];

        if (event == null)
            this.props.fetchEvent(id);
    }

    handleSubmit = (e, formData) => {
        e.preventDefault();

        const event = this.props.events.records[this.props.params.id];

        event.text = formData.text;
        event.description = formData.description;
        event.time = formData.time;

        this.props.saveEvent(event);

        this.context.router.push('/events');
    }

    handleDelete = (e) => {
        e.preventDefault();

        const event = this.props.events.records[this.props.params.id];

        this.props.deleteEvent(event, '/events'); // this will go to /events after delete
    }

    render() {
        const event = this.props.events.records[this.props.params.id];

        if (event != null) {
            return (
                <EventForm event={event} className="events__detail"
                           handleSubmit={this.handleSubmit}
                           handleDelete={this.handleDelete}
                           formData={{
                               text: event.text,
                               description: event.description,
                               time: event.time
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
