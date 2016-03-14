import React from 'react/addons';
import Show from './Show';

/*
 * @class Channel
 * @extends React.Component
 */
class Channel extends React.Component {

  /*
   * @method shouldComponentUpdate
   * @returns {Boolean}
   */
  shouldComponentUpdate () {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  /*
   * @method render
   * @returns {JSX}
   */
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

// Prop types validation
Channel.propTypes = {
  channel: React.PropTypes.object.isRequired
};

export default Channel;
