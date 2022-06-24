import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

function AuthRouter({ children }) {
  const { user } = useSelector((state) => state);
  const location = useLocation();
  if (user.id) {
    return children;
  }
  return <Navigate to="/loginwithpass" state={{ from: location }} replace />;
}

export default AuthRouter;
