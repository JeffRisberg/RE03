import React from 'react';
import PropTypes from 'prop-types';
import MatchMedia from './MatchMedia';
import { LARGE } from '../constants/breakpoints';

const Large = ({ children, mediaFeatures }) => (
  <MatchMedia mediaQuery={`(min-width: ${LARGE}px)`} mediaFeatures={mediaFeatures}>
    { children }
  </MatchMedia>
);

Large.propTypes = {
  mediaFeatures: PropTypes.shape({ width: PropTypes.string }),
};

Large.defaultProps = {
  mediaFeatures: null,
};

export default Large;
