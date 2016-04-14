import React from 'react';
import { connect } from 'react-redux';

import { toggleEvent } from '../actions';

class Event extends React.Component {

    render() {
        let id = this.props.event.id;

        return (
            <div className="event" onClick={() => this.props.onEventClick(id)} >
            <span style={{textDecoration: this.props.event.completed? 'line-through' : 'none'}}>
                {this.props.event.text}
            </span>
                {' '}
                ({this.props.event.time} hours)
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onEventClick: (id) => {
            dispatch(toggleEvent(id));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Event);
