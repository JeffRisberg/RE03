import React, { Component } from 'react';
import { Medium, LessThanMedium } from '../toolkit';
import EventListContainer from '../components/Events/EventListContainer';
import EventFormContainer from '../components/Events/EventFormContainer';

class Events extends Component {

  render() {
    const id = this.props.match.params != undefined ? this.props.match.params.id : undefined;
    const content = (id != undefined) ?
      <EventFormContainer {...this.props} /> : <EventListContainer {...this.props} />;

    return (
      <div>
        <Medium>
          <div style={{ borderBottom: '5px solid orange' }}>
            {content}
          </div>
        </Medium>
        <LessThanMedium>
          <div style={{ borderBottom: '5px solid yellow' }}>
            {content}
          </div>
        </LessThanMedium>
      </div>
    );
  }
}

export default Events;
