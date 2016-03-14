import React from 'react/addons';

/*
 * @class Show
 * @extends React.Component
 */
class Show extends React.Component {

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
    return <div className="show">
      {this.props.show.name} ({this.props.show.channelId})
    </div>;
  }
}

// Prop types validation
Show.propTypes = {
  show: React.PropTypes.object.isRequired,
};

export default Show;
