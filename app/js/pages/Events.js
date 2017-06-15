import React from 'react';
import { Medium, LessThanMedium } from '../toolkit';
import EventListContainer from '../components/Events/EventListContainer';
import EventFormContainer from '../components/Events/EventFormContainer';

class Events extends React.Component {

    render() {
        const id = this.props.params != undefined ? this.props.params.id : undefined;

        return (
            <div>
                <Medium>
                    <div style={{ background: 'red' }}>
                        {id != undefined ? <EventFormContainer {...this.props} /> : <EventListContainer /> }
                    </div>
                </Medium>
                <LessThanMedium>
                    <div style={{ background: 'blue' }}>
                        {id != undefined ? <EventFormContainer {...this.props} /> : <EventListContainer /> }
                    </div>
                </LessThanMedium>
            </div>
        );
    }
}

export default Events;
