import React from 'react';
import PropTypes from 'prop-types';
import MatchMedia from './MatchMedia';
import { XLARGE } from '../constants/breakpoints';

const XLarge = ({ children, mediaFeatures }) => (
  <MatchMedia mediaQuery={`(min-width: ${XLARGE}px)`} mediaFeatures={mediaFeatures}>
    { children }
  </MatchMedia>
);

XLarge.propTypes = {
  mediaFeatures: PropTypes.shape({ width: PropTypes.string }),
};

XLarge.defaultProps = {
  mediaFeatures: null,
};

export default XLarge;
