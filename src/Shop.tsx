import React from 'react';
import {useNavigate} from 'react-router-dom';
import './styles/Shop.scss';
import Products from './Products';
import { useProduct } from './Context/productContext';

const Shop:React.FC = () => {
    const {products}=useProduct();
    const navigate=useNavigate();
    const navToProduct=(id:string)=>{
        navigate(`/product/${id}`)
    }
  return (
    <div className='shop-container'>
        <p className='product-category'>All products</p>
        <div className="shop-content">
            {products.map((product)=>{
                return <article className='shop-product'>
                    <div style={{backgroundImage:`url(${product.imageUrl})`}} className='shop-product-image'>
                    </div>
                    <p className='shop-product-title'>{product.title}</p>
                    <p className="shop-product-price">{product.price}</p>
                </article>
            })}
        </div>
    </div>
  )
}

export default Shop