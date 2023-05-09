import React from 'react';
import {useNavigate} from 'react-router-dom';
import './styles/Shop.scss';
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
                return <article key={product._id} className='shop-product'>
                    <div onClick={()=> navToProduct(product._id)} style={{backgroundImage:`url(${product.imageUrl})`}} className='shop-product-image'>
                    </div>
                    <p onClick={()=> navToProduct(product._id)} className='shop-product-title'>{product.title}</p>
                    <p className="shop-product-price">{product.price} EUR</p>
                </article>
            })}
        </div>
    </div>
  )
}

export default Shop