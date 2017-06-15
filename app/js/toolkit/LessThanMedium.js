import React from 'react';
import PropTypes from 'prop-types';
import MatchMedia from './MatchMedia';
import { MEDIUM } from '../constants/breakpoints';

const LessThanMedium = ({ children, mediaFeatures }) => (
    <MatchMedia mediaQuery={`(max-width: ${MEDIUM - 1}px)`} mediaFeatures={mediaFeatures}>
        { children }
    </MatchMedia>
);

LessThanMedium.propTypes = {
    mediaFeatures: PropTypes.shape({ width: PropTypes.string }),
};

LessThanMedium.defaultProps = {
    mediaFeatures: null,
};

export default LessThanMedium;
