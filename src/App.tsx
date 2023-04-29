import React from 'react';
import './styles/index.scss';
import Header from './Header';
import Homepage from './Homepage';
import Footer from './Footer';
import {Routes, Route} from 'react-router-dom';
import Shop from './Shop';
import Product from './Product';
import Login from './Login';
import Signup from './Signup';
import PrivateRoutes from './PrivateRoutes';
import Cart from './Cart';
import Contact from './Contact';
import { useAuth } from './Context/AuthContext';
import { AuthProvider } from './Context/AuthContext';

function App(){
  return (
    <div className="App">

        <AuthProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/shop' element={<Shop/>} /> 
          <Route path='/product' element={<Product/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route element={<PrivateRoutes/>}>
              <Route element={<Cart/>} path='/cart' />
          </Route>
        </Routes>
        <Footer/>
        </AuthProvider>
      
    </div>
  );
}

export default App;