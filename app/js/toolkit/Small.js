import React from 'react';
import PropTypes from 'prop-types';
import MatchMedia from './MatchMedia';
import { SMALL } from '../constants/breakpoints';

const Small = ({ children, mediaFeatures }) => (
    <MatchMedia mediaQuery={`(min-width: ${SMALL}px)`} mediaFeatures={mediaFeatures}>
        { children }
    </MatchMedia>
);

Small.propTypes = {
    mediaFeatures: PropTypes.shape({ width: PropTypes.string }),
};

Small.defaultProps = {
    mediaFeatures: null,
};

export default Small;
