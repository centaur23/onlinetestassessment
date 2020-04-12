import { Route } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

const PublicRoute = ({
  children,
  computedMatch,
  location,
  ...rest
}) => {
  const renderingRoute = () => {
    return children;
  };
  return (
    <Route 
      {...rest} 
      render={
        () => renderingRoute()
      } 
    />
  );
};
PublicRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  computedMatch: PropTypes.object,
  location: PropTypes.object,
};
export default PublicRoute;
