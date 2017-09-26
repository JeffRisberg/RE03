import React from 'react';
import PropTypes from 'prop-types';

const sizes = ['small', 'medium', 'large'];

const colours = ['purple', 'white', 'grey', 'blue'];

const propTypes = {
  size: PropTypes.oneOf(sizes),
  colour: PropTypes.oneOf(colours),
};

const defaultProps = {
  size: 'medium',
  colour: 'purple',
};

const Loading = ({ size, colour, className }) => {
  const loadingClasses = `loading--${size} loading--${colour}`;
  const classes = className
    ? [className, loadingClasses].join(' ')
    : loadingClasses;

  return (
    <div className={classes}>
      <svg className="loading__container" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <circle className="loading__circle" cx="24" cy="24" r="20"/>
      </svg>
    </div>
  );
};

Loading.propTypes = propTypes;

Loading.defaultProps = defaultProps;

export default Loading;
