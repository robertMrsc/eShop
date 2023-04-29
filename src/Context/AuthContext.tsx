import React, {SetStateAction } from 'react';
import {createContext, useContext} from 'react';
import {useState, useEffect} from 'react';

type contextModel={
  token:string,
  setToken:React.Dispatch<SetStateAction<string>>,
  loading:boolean,
  setLoading:React.Dispatch<SetStateAction<boolean>>
}
const defaultValue:contextModel={
  token:'',
  setToken:()=>{

  },
  loading:true,
  setLoading:()=>{

  }
}

type authContextProviderProps={
    children:React.ReactNode,
}

const AuthContext=createContext(defaultValue);
export function useAuth(){
    return useContext(AuthContext);
}

export const AuthProvider = ({children}:authContextProviderProps) => {
  const [token, setToken]=useState<string>('')
  const [loading, setLoading]=useState<boolean>(true);
  const values={
    token
  }
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
    <AuthContext.Provider value={{token, setToken, loading, setLoading}}>
       {children}
    </AuthContext.Provider>
  )
}
