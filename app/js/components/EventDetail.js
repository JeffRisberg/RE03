import React from 'react';
import { connect } from 'react-redux';

import { fetchEvent } from '../actions/events';

class EventDetail extends React.Component {

    componentDidMount() {
        this.props.onMount(this.props.params.id);
    }

    render() {
        const event = this.props.events.records[this.props.params.id];

        if (event != null) {
            return (
                <table className="eventDetail">
                    <tbody>
                    <tr>
                        <td></td>
                        <td>Event Detail</td>
                    </tr>
                    <tr>
                        <td>Text</td>
                        <td>{event.text}</td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>{event.description}</td>
                    </tr>
                    <tr>
                        <td>Time:</td>
                        <td>{event.time}</td>
                    </tr>
                    <tr>
                        <td>Completed:</td>
                        <td>{event.completed}</td>
                    </tr>
                    </tbody>
                </table>
            );
        }
        else
            return null;
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.events
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onMount: (id) => {
            fetchEvent(id)(dispatch);
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventDetail);
