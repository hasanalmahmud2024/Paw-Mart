import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const {user, loading} = use(AuthContext);

    const location= useLocation();

    if (loading) {
        return <div className="flex justify-center items-center"><span className='loading loading-spinner '></span></div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location?.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;