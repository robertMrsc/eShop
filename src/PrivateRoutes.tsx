import React from 'react';
import { Outlet, Navigate} from 'react-router-dom';
import {useEffect, useState} from 'react';


const PrivateRoutes:React.FC= () => {
    const [token, setToken]=useState<string>('');
    const [loading, setLoading]=useState(true);
    console.log('aaaa')

   useEffect(()=>{
         const getAuth=async()=>{
        try{
    const res=await fetch('http://localhost:5000/user/auth',{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        },
        credentials:'include'

    })
    const token=await res.json();
    setToken(token);
    if (token==='Token does not exist'){
        setToken('');
    }
    setLoading(false);
    console.log(token)
}
catch(err){
    console.log(err);
    setLoading(false);
    
}


  }
  getAuth();
   },[])
  
   return (
    loading ? <p>Loading...</p> :( token ? <Outlet/> : <Navigate to='/login' />)
  )
}

export default PrivateRoutes