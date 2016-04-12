import React from 'react';
import Show from './Show';

/*
 * @class Channel
 * @extends React.Component
 */
class Channel extends React.Component {

  render () {
    return <div className="channel">
      <h2>Channel: {this.props.channel.title}</h2>
      <div>
        {this.props.channel.shows.map(function (show, key) {
          return <Show key={key} show={show} />;
        })}
      </div>
    </div>;
  }
}

export default Channel;
