import React from 'react';
import PropTypes from 'prop-types';
import MatchMedia from './MatchMedia';
import { LARGE } from '../constants/breakpoints';

const LessThanLarge = ({ children, mediaFeatures }) => (
  <MatchMedia mediaQuery={`(max-width: ${LARGE - 1}px)`} mediaFeatures={mediaFeatures}>
    { children }
  </MatchMedia>
);

LessThanLarge.propTypes = {
  mediaFeatures: PropTypes.shape({ width: PropTypes.string }),
};

LessThanLarge.defaultProps = {
  mediaFeatures: null,
};

export default LessThanLarge;
