import React from 'react';
import { Outlet, Navigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import { useAuth } from './Context/AuthContext';


const PrivateRoutes:React.FC= () => {
    const {token, loading}=useAuth();
    console.log(token);
  
   return (
    loading ? <p>Loading...</p> :( token ? <Outlet/> : <Navigate to='/login' />)
  )
}

export default PrivateRoutes