import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const GuardedComponent = ({ component }: any) => {
  const { authToken } = useAuth();
  return authToken ? component : <Navigate replace to='/'/>
}

export default GuardedComponent;
