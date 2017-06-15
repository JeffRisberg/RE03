import React from 'react';
import PropTypes from 'prop-types';
import MatchMedia from './MatchMedia';
import { MEDIUM } from '../constants/breakpoints';

const Medium = ({ children, mediaFeatures }) => (
    <MatchMedia mediaQuery={`(min-width: ${MEDIUM}px)`} mediaFeatures={mediaFeatures}>
        { children }
    </MatchMedia>
);

Medium.propTypes = {
    mediaFeatures: PropTypes.shape({ width: PropTypes.string }),
};

Medium.defaultProps = {
    mediaFeatures: null,
};

export default Medium;
