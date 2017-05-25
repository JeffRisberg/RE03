import React from 'react';
import {connect} from 'react-redux';
import {queryEvents, toggleEvent} from '../../actions/events';
import AddEventComponent from './AddEventComponent';
import EventListComponent from './EventListComponent';
import './Events.scss';

class EventListContainer extends React.Component {

    componentDidMount() {
        this.props.queryEvents();
    }

    render() {
        if (this.props.events != undefined) {
            const records = this.props.events.idList.map(id => this.props.events.records[id]);

            return (
                <div className="eventPage">
                    <AddEventComponent />
                    <EventListComponent records={records}
                                        toggleEvent={this.props.toggleEvent} />
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
