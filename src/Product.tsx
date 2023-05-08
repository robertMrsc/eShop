import React from 'react';
import './styles/product.scss';
import { productType } from './Context/productType';
import { useParams } from 'react-router-dom';
import { useAuth } from './Context/AuthContext';

type Props={
  products:productType[];
}


const Product:React.FC<Props> = ({products}) => {
  const {id}=useParams();
  const {cart, setCart}=useAuth();
  const product=products.filter((product)=>{
    return product._id===id
  });
  const handleAddToCart=async()=>{
    try {
      const response=await fetch('http://localhost:5000/user/updateCart',{
        method:'PATCH',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          cart:[...cart, product[0]]
        }),
        credentials:'include'
      })
      const data=await response.json()
      setCart([...cart, product[0]])
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <main className='product-container'>
      <div className='product-images'>
        <div style={{backgroundImage:`url(${product[0]?.imageUrl})`}} className='primary-image'>

        </div>
      </div>

      <div className='product-text'>
          <p className='product-title'>{product[0]?.title}</p>
          <p className='product-price'>{product[0]?.price}</p>
          <p className='product-description'>{product[0]?.description}</p>
          <div className='product-button-container'> 
            <button onClick={handleAddToCart} className='product-button'>Add to cart</button>          
          </div>
          <div className='product-dropdown-container'>
          <div className='product-dropdown'>
            <p className='product-dropdown-text'>Ingredients</p>
            <span className='product-open'>^</span>            
          </div>
          <div className='product-dropdown'>
            <p className='product-dropdown-text'>Benefits and why to use</p>
            <span className='product-open'>^</span>            
          </div>
          </div>
      </div>
      
    </main>
  )
}

export default Product