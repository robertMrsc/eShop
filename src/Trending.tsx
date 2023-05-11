import React from 'react';
import { useProduct } from './Context/productContext';
import { useNavigate } from 'react-router-dom';

const Trending:React.FC = () => {
  const {products}=useProduct();
  const trendingProducts=products.slice(0, 3);
  console.log(products);
  console.log(trendingProducts)
  const navigate=useNavigate();
  const handleNavigate=(id:string)=>{
    navigate(`/product/${id}`)
  }
  return (
    <div className='trending-container'>
        <p className='trending-text'>Trending products</p>
        <div className='trending-flex'>
            {trendingProducts.map((product)=>{
              return <div onClick={()=> handleNavigate(product._id)} style={{backgroundImage:`url(${product.imageUrl})`}} className='trending-flex-image'> </div>
            })}
        </div>
    </div>
  )
}

export default Trending