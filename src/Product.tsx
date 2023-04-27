import React from 'react';
import './styles/product.scss'


const Product = () => {
  return (
    <main className='product-container'>
      <div className='product-images'>
        <div className='primary-image'>

        </div>
        <div className='secondary-images'>
            <div className='secondary-image'></div>
            <div className='secondary-image'></div>
            <div className='secondary-image'></div>
            <div className='secondary-image'></div>
        </div>
      </div>

      <div className='product-text'>
          <p className='product-title'>Magical Soap</p>
          <p className='product-price'>$25.00</p>
          <p className='product-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sequi.</p>
          <p className='product-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas expedita tempore iste deserunt tempora eaque quia deleniti laboriosam libero. Illum optio cumque placeat asperiores numquam commodi possimus recusandae tempora.</p>
          <p className='product-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illo hic et consectetur a quibusdam ullam provident ex, iste dolor, cupiditate corporis voluptatibus, vel perferendis fugiat officiis nostrum fuga sint?</p>
          <div className='product-button-container'> 
            <button className='product-button'>Add to cart</button>          
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