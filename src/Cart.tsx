import React from 'react';
import './styles/cart.scss'
import { useAuth } from './Context/AuthContext';
import {CiCircleRemove} from 'react-icons/ci';
import {GoDiffAdded, GoDiffRemoved} from 'react-icons/go';
import { productType } from './Context/productType';
const Cart = () => {
  const {cart, setCart}=useAuth();
  const handleRemoveFromCart= async (id:string)=>{
    try {
      const updatedCart=cart.filter((product)=>{
        return product._id!==id;
      })
      setCart(updatedCart)
      const response=await fetch('http://localhost:5000/user/updateCart',{
        method:'PATCH',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          cart:updatedCart
        }),
        credentials:'include'
      })
      const data=await response.json()
    } catch (error) {
      console.log(error)
    }
  }
  
  const handleAddQuantity=async(product:productType)=>{
    try {
        const updatedCart:any=cart.map((item:productType)=>{
        if (item._id===product._id){
          return {...item, quantity:item.quantity+1}
        }
      })
      setCart(updatedCart);
      const response=await fetch('http://localhost:5000/user/updateCart',{
        method:'PATCH',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          cart:updatedCart
        }),
        credentials:'include'
      })
      const data=await response.json()
    } catch (error) {
      console.log(error);
    }
    
    
  }

  return (
    <div className='cart'>
      <p className='cart-header'>Your shopping cart</p>
      <div className='cart-content'>

        <div className="cart-content-header">
          <div className='cart-header-product'>
            <p className='cart-header-product-text'>Product</p>
          </div>
          <p className='cart-header-quantity'>Quantity</p>
          <p className='cart-header-price'>Price</p>
          <p className='cart-header-product-total'>Total</p>
        </div>
        
        {cart.map((product)=>{
          return <div key={product._id} className='cart-content-item'>
              <div className='cart-content-product'>
                
                  <span onClick={()=> handleRemoveFromCart(product._id)} className='cart-content-remove'><CiCircleRemove/></span>                

                <div style={{backgroundImage:`url(${product.imageUrl})`}} className='cart-product-image'></div>
                <p className='cart-product-title'> {product.title} </p>
              </div>
              <div className="cart-content-quantity">
                <span>
                  <GoDiffAdded onClick={()=> handleAddQuantity(product)} className='cart-quantity-add'/>
                </span>
                <p className='cart-quantity'>{product.quantity}</p>
                <span>
                  <GoDiffRemoved  className='cart-quantity-remove'/>
                </span>
              </div>
              <p className='cart-content-price'>{`${product.price} EUR`}</p>
              <p className='cart-content-product-total'>{`${Number(product.price) * product.quantity} EUR`}</p>
             </div>
        })}

      </div>
    </div>
  )
}

export default Cart
