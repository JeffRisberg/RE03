import React from 'react';
import PropTypes from 'prop-types';
import MatchMedia from './MatchMedia';
import { XLARGE } from '../constants/breakpoints';

const LessThanXLarge = ({ children, mediaFeatures }) => (
  <MatchMedia mediaQuery={`(max-width: ${XLARGE - 1}px)`} mediaFeatures={mediaFeatures}>
    { children }
  </MatchMedia>
);

LessThanXLarge.propTypes = {
  mediaFeatures: PropTypes.shape({ width: PropTypes.string }),
};

LessThanXLarge.defaultProps = {
  mediaFeatures: null,
};

export default LessThanXLarge;
