import React from 'react';
import {useNavigate} from 'react-router-dom';
import './styles/Shop.scss'

const Shop:React.FC = () => {
    const list:number[]=[1,2,3,4,5,6,7,8]
  return (
    <div className='shop-container'>
        <p className='product-category'>All products</p>
        <div className="shop-content">
            {list.map((item)=>{
                return <article className='shop-product'>
                    <div className='shop-product-image'>
                    </div>
                    <p className='shop-product-text'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                </article>
            })}
        </div>
    </div>
  )
}

export default Shop