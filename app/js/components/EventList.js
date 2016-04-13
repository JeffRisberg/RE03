import React from 'react';
import Event from './Event';

class EventList extends React.Component {

    componentDidMount() {
        var store = this.props.store;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const store = this.props.store;
        const events = store.getState().events;

        const eventNodes = events.map(function (event, key) {
            return <Event key={key} event={event} store={store}/>;
        });

        return (
            <div className="eventList">
                <div>
                    {eventNodes}
                </div>
            </div>
        );
    }
}

export default EventList;
