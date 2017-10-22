import React from 'react';
import PropTypes from 'prop-types';

const sizes = ['small', 'medium', 'large'];

const colors = ['purple', 'white', 'grey', 'blue'];

const propTypes = {
  size: PropTypes.oneOf(sizes),
  color: PropTypes.oneOf(colors),
};

const defaultProps = {
  size: 'medium',
  color: 'purple',
};

const Loading = ({ size, color, className }) => {
  const loadingClasses = `loading--${size} loading--${color}`;
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
