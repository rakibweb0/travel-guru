import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Spinner animation="border" variant="warning" />
    }

    if(user){
        return children
    }

    else{
        return <Navigate to="/page/login" state={{from: location}} replace></Navigate>
    }
};

export default PrivateRoute;