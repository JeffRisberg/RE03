import React from 'react';
import { Medium, LessThanMedium } from '../toolkit';
import EventListContainer from '../components/Events/EventListContainer';

class Events extends React.Component {

    render() {
        return (
            <div>
                <Medium>
                    <div className="alpha">
                        <EventListContainer />
                    </div>
                </Medium>
                <LessThanMedium>
                    <div className="alpaa">
                        <EventListContainer />
                    </div>
                </LessThanMedium>
            </div>
        );
    }
}

export default Events;
