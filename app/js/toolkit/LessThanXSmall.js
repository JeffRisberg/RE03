import React from 'react';
import PropTypes from 'prop-types';
import MatchMedia from './MatchMedia';
import { XSMALL } from '../constants/breakpoints';

const LessThanXSmall = ({ children, mediaFeatures }) => (
    <MatchMedia mediaQuery={`(max-width: ${XSMALL - 1}px)`} mediaFeatures={mediaFeatures}>
        { children }
    </MatchMedia>
);

LessThanXSmall.propTypes = {
    mediaFeatures: PropTypes.shape({ width: PropTypes.string }),
};

LessThanXSmall.defaultProps = {
    mediaFeatures: null,
};

export default LessThanXSmall;
