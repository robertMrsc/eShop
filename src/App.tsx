import React from 'react';
import './styles/index.scss';
import Header from './Header';
import Homepage from './Homepage';
import Footer from './Footer';
import {Routes, Route} from 'react-router-dom';
import Shop from './Shop';


function App(){
  return (
    <div className="App">
    
        
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/shop' element={<Shop/>} /> 
        </Routes>
        <Footer/>
      
    </div>
  );
}

export default App;