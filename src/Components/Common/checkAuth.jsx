import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const checkAuth = ({ isAuthenticated, user, children }) => {
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    if (user?.role === 'admin') {
      return children;
    } else if (user?.role === 'client') {
      return <Navigate to="/client/dashboard" replace />;
    } else {
      return <Navigate to="/unauthorized" replace />;
    }
  }
};

export default checkAuth;
