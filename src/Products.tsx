import React from 'react';
import { useProduct } from './Context/productContext';


const Products:React.FC = () => {
    const {products}=useProduct();
    const productList=products.map((product)=>{
        return <div className='image-test' style={{backgroundImage:`url(${product.imageUrl})`}}></div>
    })
  return (
    <>
    {productList}
    </>
  )
}

export default Products