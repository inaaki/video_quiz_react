import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function PublicRoute({ children }) {
  const { currentUser } = useAuth();

  return !currentUser ? children : <Navigate to='/' replace={true} />;
}

export default PublicRoute;
