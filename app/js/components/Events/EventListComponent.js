import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Loading } from 'components';
import 'components/Loading/Loading.scss';
import './Events.scss';

class EventListComponent extends Component {
  static propTypes = {
    records: PropTypes.array,
    status: PropTypes.object,
  };

  render() {
    const { records, status } = this.props;

    if (status.isFetching) {
      return (
        <div className="events__list">
          <Loading size="large" color="purple"/>
        </div>
      );
    }

    const eventNodes = records.map((event, key) => {
      const id = event.id;

      return (
        <div key={key} className="events__event">
          <Link to={'/events/detail/' + id} className='btn btn-default'>View</Link>
          {' '}
          <span style={{ textDecoration: event.completed ? 'line-through' : 'none' }}
            onClick={() => this.props.toggleEvent(event)}>
            {event.text}
          </span>
          {' '}
          ({event.time} hours)
        </div>
      );
    });

    return (
      <div className="events__list">
        <div>
          {eventNodes}
        </div>
      </div>
    );
  }
}

export default EventListComponent;
