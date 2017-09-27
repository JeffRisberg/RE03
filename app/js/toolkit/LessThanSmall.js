import React from 'react';
import PropTypes from 'prop-types';
import MatchMedia from './MatchMedia';
import { SMALL } from '../constants/breakpoints';

const LessThanSmall = ({ children, mediaFeatures }) => (
  <MatchMedia mediaQuery={`(max-width: ${SMALL - 1}px)`} mediaFeatures={mediaFeatures}>
    { children }
  </MatchMedia>
);

LessThanSmall.propTypes = {
  mediaFeatures: PropTypes.shape({ width: PropTypes.string }),
};

LessThanSmall.defaultProps = {
  mediaFeatures: null,
};

export default LessThanSmall;
