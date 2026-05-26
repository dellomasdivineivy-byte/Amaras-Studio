import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: ('admin' | 'staff' | 'client')[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  // Kung hindi pa naka-login, itapon sa login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Kung may restriction sa role at hindi tugma ang role ng user, ibalik sa kung saan safe
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};