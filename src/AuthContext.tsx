import React from 'react';
import {createContext, useContext} from 'react';
import {useState, useEffect} from 'react';


    const getAuth=async()=>{
    const res=await fetch('http://localhost:5000/user/auth',{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        },
        credentials:'include'

    })
    const token=await res.json();
    console.log(token)

  }
  getAuth();


const values={

}
type authContextProviderProps={
    children:React.ReactNode
}

const AuthContext=createContext(null);
export function useAuth(){
    return useContext(AuthContext);
}

export const AuthProvider = ({children}:authContextProviderProps) => {
    
  return (
    <AuthContext.Provider value={null}>

    </AuthContext.Provider>
  )
}

export default AuthContext