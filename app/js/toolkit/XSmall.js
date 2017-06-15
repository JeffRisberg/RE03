import React from 'react';
import PropTypes from 'prop-types';
import MatchMedia from './MatchMedia';
import { XSMALL } from '../constants/breakpoints';

const XSmall = ({ children, mediaFeatures }) => (
    <MatchMedia mediaQuery={`(min-width: ${XSMALL}px)`} mediaFeatures={mediaFeatures}>
        { children }
    </MatchMedia>
);

XSmall.propTypes = {
    mediaFeatures: PropTypes.shape({ width: PropTypes.string }),
};

XSmall.defaultProps = {
    mediaFeatures: null,
};

export default XSmall;
