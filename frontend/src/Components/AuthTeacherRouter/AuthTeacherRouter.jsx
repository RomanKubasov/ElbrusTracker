import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

function AuthTeacherRouter({ children }) {
  const { user } = useSelector((state) => state);
  const location = useLocation();
  if (user.role_id === 1) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
}

export default AuthTeacherRouter;
