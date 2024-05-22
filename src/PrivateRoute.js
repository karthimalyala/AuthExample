
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useIsAuthenticated } from "@azure/msal-react";

const PrivateRoute = () => {
    const isAuthenticated = useIsAuthenticated();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
