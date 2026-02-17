import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import LoadingComponent from '../components/LoadingComponent/LoadingComponent';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <LoadingComponent></LoadingComponent>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location?.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;