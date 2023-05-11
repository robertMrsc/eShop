import React, {SetStateAction } from 'react';
import {createContext, useContext} from 'react';
import {useState, useEffect} from 'react';
import { productType } from './productType';
import { addressType } from './addressType';

type contextModel={
  token:string,
  setToken:React.Dispatch<SetStateAction<string>>,
  loading:boolean,
  setLoading:React.Dispatch<SetStateAction<boolean>>,
  user:any,
  setUser:React.Dispatch<any>,
  cart:productType[],
  setCart:React.Dispatch<React.SetStateAction<productType[]>>,
  address:string,
  setAddress:React.Dispatch<React.SetStateAction<string>>,
  country:string,
  setCountry:React.Dispatch<React.SetStateAction<string>>,
  county:string,
  setCounty:React.Dispatch<React.SetStateAction<string>>,
  town:string,
  setTown:React.Dispatch<React.SetStateAction<string>>,
  postal:string,
  setPostal:React.Dispatch<React.SetStateAction<string>>,
  email:string,
  setEmail:React.Dispatch<React.SetStateAction<string>>,
  name:string,
  setName:React.Dispatch<React.SetStateAction<string>>,
  mobile:string,
  setMobile:React.Dispatch<React.SetStateAction<string>>,
  birthdate:string,
  setBirthdate:React.Dispatch<React.SetStateAction<string>>,
  orders:productType[][],
  setOrders:React.Dispatch<React.SetStateAction<productType[][]>>
}
const defaultValue:contextModel={
  token:'',
  setToken:()=>{

  },
  loading:true,
  setLoading:()=>{

  },
  user:{},
  setUser:()=>{

  },
  cart:[],
  setCart:()=>{},

  address:'',
  setAddress:()=>{},

  country:'',
  setCountry:()=>{},

  county:'',
  setCounty:()=>{},

  town:'',
  setTown:()=>{},

  postal:'',
  setPostal:()=>{},

  email:'',
  setEmail:()=>{},

  name:'',
  setName:()=>{},

  mobile:'',
  setMobile:()=>{},

  birthdate:'',
  setBirthdate:()=>{},

  orders:[],
  setOrders:()=>{}

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
  const [user, setUser]=useState<any>();
  const [cart, setCart]=useState<productType[]>([]);
  const [address, setAddress]=useState<string>(defaultValue.address);
  const [country, setCountry]=useState<string>(defaultValue.country);
  const [county, setCounty]=useState<string>(defaultValue.county);
  const [town, setTown]=useState<string>(defaultValue.town);
  const [postal, setPostal]=useState<string>(defaultValue.postal);
  const [email, setEmail]=useState<string>('');
  const [name, setName]=useState<string>('');
  const [mobile, setMobile]=useState<string>('');
  const [birthdate, setBirthdate]=useState<string>('');
  const [orders, setOrders]=useState<productType[][]>([])

  const values={
    token
  }
  useEffect(()=>{
    const getUser=async()=>{
      try{
        const res=await fetch('http://localhost:5000/user/getuser',{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        },
        credentials:'include'

    })
    const data=await res.json();
    setUser(data);
    setCart(data.cart);
    setAddress(data.address.address);
    setCountry(data.address.country);
    setCounty(data.address.county);
    setTown(data.address.town);
    setPostal(data.address.postal);
    setEmail(data.email);
    setName(data.fullname);
    setMobile(data.mobile);
    setBirthdate(data.birthdate);
    setOrders(data.orders)
    console.log(data);
      }
      catch(err){
        console.log(err);
      }
    }
    getUser();
  },[])
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
    <AuthContext.Provider value={{token, setToken, loading, setLoading, user, setUser, cart, setCart, address, setAddress, country, setCountry, county, setCounty, town, setTown, postal, setPostal, email, setEmail, name, setName, mobile, setMobile, birthdate, setBirthdate, orders, setOrders}}>
       {children}
    </AuthContext.Provider>
  )
}
