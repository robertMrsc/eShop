import React from "react";
import { useState, useEffect } from "react";
import { createContext , useContext} from "react";
import { productType } from "./productType";
type products=productType[];

type contextModel={
    products:products,
    setProducts:React.Dispatch<React.SetStateAction<products>>
}

const defaultValue:contextModel={
    products:[{
        title:"",
        price:"",
        description:"",
        imageUrl:"",
        _id:""
    }],
    setProducts:()=>{}
}

    


const productContext=createContext(defaultValue);

export const useProduct=()=>{
    return useContext(productContext)
}
type productContextProvider={
    children:React.ReactNode
}

export const ProductProvider=({children}:productContextProvider)=>{
    const [products, setProducts]=useState<products>(defaultValue.products);
    const [loading, setLoading]=useState(true);

    useEffect(()=>{
        const getProducts= async ()=>{
            try{
            const response=await fetch('http://localhost:5000/products',{
                method:"GET",
                headers:{
                    'Content-Type':'application/json'
                },

            });
            const data= await response.json();
            setProducts(data);
            setLoading(false);
        }
        catch(err){
            console.log(err);
            setLoading(false)
        }
            
        }
        getProducts();
    },[])

    return(
        <productContext.Provider value={{products, setProducts }}>
            { children}
        </productContext.Provider>
    )
}