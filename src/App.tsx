import React from 'react';
import {useEffect, useState} from 'react'
import './styles/index.scss';
import Header from './Header';
import Homepage from './Homepage';
import Footer from './Footer';
import {Routes, Route, useParams} from 'react-router-dom';
import Shop from './Shop';
import Product from './Product';
import Login from './Login';
import Signup from './Signup';
import PrivateRoutes from './PrivateRoutes';
import Cart from './Cart';
import Contact from './Contact';
import { useAuth } from './Context/AuthContext';
import { AuthProvider } from './Context/AuthContext';
import Dashboard from './Dashboard';
import AccDetails from './AccDetails';
import YourAccount from './YourAccount';
import Address from './Address';
import { ProductProvider, useProduct } from './Context/productContext';
import { productType } from './Context/productType';
import DashBoardHome from './DashBoardHome';
import Checkout from './Checkout';
import AuthPrivateRoutes from './AuthPrivateRoutes';


function App(){
  const {products}=useProduct();
  console.log(products);
  
  return (
    <div className="App">
        <ProductProvider>
        <AuthProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/shop' element={<Shop/>} /> 
          <Route path='/product/:id' element={<Product products={products} />} />
          <Route path='/contact' element={<Contact/>} />
          <Route element={<AuthPrivateRoutes/>}>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
          </Route>
          <Route element={<PrivateRoutes/>}>
                <Route element={<Cart/>} path='/cart'/>
          <Route path='/dashboard' element={<YourAccount/>}>
                <Route path='/dashboard' element={<DashBoardHome/>} />
                <Route path='/dashboard/details' element={<AccDetails/>} />
                <Route path='/dashboard/address' element={<Address/>} />
          </Route>
          <Route element={<Checkout/>} path='/checkout' />
          </Route>
          
        </Routes>
        <Footer/>
        </AuthProvider>
        </ProductProvider>
        
      
    </div>
  );
}

export default App;