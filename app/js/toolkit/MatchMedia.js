import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cssMediaQuery from 'css-mediaquery';

const propTypes = {
    mediaQuery: PropTypes.string.isRequired,
    mediaFeatures: PropTypes.shape({ width: PropTypes.string }),
};

const defaultProps = {
    mediaFeatures: null,
};

const contextTypes = {
    mediaFeatures: PropTypes.shape({ width: PropTypes.string }),
};

class MatchMedia extends Component {

    static matchMediaExists() {
        if (typeof window === 'undefined') return false;
        if (typeof window.matchMedia === 'undefined') {
            console.warn('Missing \'matchMedia\' polyfill.'); // eslint-disable-line no-console
            return false;
        }
        return true;
    }

    static isServerRendered() {
        return typeof window === 'undefined';
    }

    constructor() {
        super();

        this.state = {
            matches: true,
        };

        this.onResize = this.onResize.bind(this);
    }

    componentWillMount() {
        if (MatchMedia.isServerRendered() && this.getMediaFeatures()) {
            this.setState({
                matches: this.serverMatches(),
            });
        }

        if (MatchMedia.matchMediaExists()) {
            this.mediaQuery = window.matchMedia(this.props.mediaQuery);
            this.mediaQuery.addListener(this.onResize);

            this.setState({
                matches: this.clientMatches(),
            });
        }
    }

    componentWillUnmount() {
        if (MatchMedia.matchMediaExists()) {
            this.mediaQuery.removeListener(this.onResize);
        }
    }

    onResize() {
        this.setState({
            matches: this.clientMatches(),
        });
    }

    getMediaFeatures() {
        if (!this.context.mediaFeatures && !this.props.mediaFeatures) {
            return undefined;
        }

        let mediaFeatures = { type: 'screen' };

        if (this.context.mediaFeatures) {
            mediaFeatures = Object.assign(mediaFeatures, this.context.mediaFeatures);
        }

        if (this.props.mediaFeatures) {
            mediaFeatures = Object.assign(mediaFeatures, this.props.mediaFeatures);
        }

        return mediaFeatures;
    }

    clientMatches() {
        return this.mediaQuery.matches;
    }

    serverMatches() {
        return cssMediaQuery.match(this.props.mediaQuery, this.getMediaFeatures());
    }

    render() {
        const { children } = this.props;
        const { matches } = this.state;

        return (<div>{ matches ? children : null }</div>);
    }
}

MatchMedia.propTypes = propTypes;

MatchMedia.defaultProps = defaultProps;

MatchMedia.contextTypes = contextTypes;

export default MatchMedia;
