import React from 'react';

class Show extends React.Component {

  render () {
    return <div className="show">
      {this.props.show.name} ({this.props.show.channelId})
    </div>;
  }
}

export default Show;
