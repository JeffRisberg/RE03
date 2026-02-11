import React from 'react';
import { useParams } from 'react-router-dom';
import { Medium, LessThanMedium } from '../toolkit';
import EventListContainer from '../components/Events/EventListContainer';
import EventFormContainer from '../components/Events/EventFormContainer';

function Events() {
  const { id } = useParams();

  const content = (id != undefined) ?
    <EventFormContainer id={id} /> : <EventListContainer />;

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

export default Events;
