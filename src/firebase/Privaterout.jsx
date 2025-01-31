import React, { useContext } from 'react';
import { AuthContext } from './Authprovider';
import { Navigate } from 'react-router-dom';

const Privaterout = ({children}) => {
    const {user} = useContext(AuthContext)
    if (user){
        return children;
    }
    return (
        <div>
          <Navigate to = '/signin'></Navigate>
        </div>
    );
};

export default Privaterout;