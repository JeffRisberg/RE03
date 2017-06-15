import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    width: PropTypes.string,
    children: PropTypes.node,
};

const defaultProps = {
    width: null,
    children: null,
};

const childContextTypes = {
    mediaFeatures: PropTypes.shape({
        width: PropTypes.string,
    }),
};

class MediaFeatures extends Component {

    getChildContext() {
        const { width } = this.props;
        const mediaFeatures = width ? { width } : null;
        return { mediaFeatures };
    }

    render() {
        return <div>{ this.props.children }</div>;
    }
}

MediaFeatures.propTypes = propTypes;

MediaFeatures.defaultProps = defaultProps;

MediaFeatures.childContextTypes = childContextTypes;

export default MediaFeatures;
