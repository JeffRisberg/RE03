import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { fetchEvent, saveEvent, deleteEvent } from '../actions/events';

class EventDetail extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        var id = this.props.params.id;
        var item = this.props.events.records[id];

        if (item == null)
            this.props.doFetch(id);
    }

    handleSubmit(e) {
        e.preventDefault();

        const event = this.props.events.records[this.props.params.id];
        const text = ReactDOM.findDOMNode(this.refs.text).value.trim();
        const description = ReactDOM.findDOMNode(this.refs.description).value.trim();
        const time = ReactDOM.findDOMNode(this.refs.time).value.trim();

        event.text = text;
        event.description = description;
        event.time = time;

        this.props.doSave(event);

        this.context.router.push('/events');
    }

    handleDelete(e) {
        e.preventDefault();

        const event = this.props.events.records[this.props.params.id];

        this.props.doDelete(event, "/events"); // after delete, will go to /events
    }

    render() {
        const event = this.props.events.records[this.props.params.id];

        if (event != null) {
            return (
                <form onSubmit={this.handleSubmit}>
                    <table className="eventDetail">
                        <tbody>
                        <tr>
                            <td></td>
                            <td><h2>Event Detail</h2></td>
                        </tr>
                        <tr>
                            <td>Text:</td>
                            <td><input type="text" ref="text" size="50" defaultValue={event.text}/></td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td><input type="text" ref="description" size="100" defaultValue={event.description}/></td>
                        </tr>
                        <tr>
                            <td>Time:</td>
                            <td><input type="text" ref="time" defaultValue={event.time}/></td>
                        </tr>
                        <tr>
                            <td>Completed:</td>
                            <td>{event.completed ? "X" : ""}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value="Submit" className="btn btn-default"/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><a onClick={this.handleDelete.bind()} className="btn btn-default">Delete</a></td>
                        </tr>
                        </tbody>
                    </table>
                </form>
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
const mapDispatchToProps = (dispatch) => {
    return {
        doMount: (id) => {
            fetchEvent(id)(dispatch);
        },
        doSave: (event) => {
            saveEvent(event)(dispatch);
        },
        doDelete: (event, thenUrl) => {
            deleteEvent(event, thenUrl)(dispatch);
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventDetail);