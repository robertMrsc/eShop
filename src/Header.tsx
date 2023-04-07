import React from 'react';
import {AiOutlineUser} from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const Header:React.FC = () => {
  return (
    <header>
        <div className='header-content'>
        <div className='logo-container'>
            <p className='logo'>Robik's</p>
            </div>
            <div className='header-links' >
                <Link to='/' className='link'>Home</Link>
                <Link to='/shop' className='link'>Shop</Link>
                <Link to='/' className='link'>About</Link>
                <Link to='/' className='link'>Contact</Link>
            </div>
            <div className="header-icons">
                <span className='header-icon'><AiOutlineUser/></span>
                <span className='header-icon'><BiSearch/></span>
                <span className='header-icon'><AiOutlineShoppingCart/></span>
            </div>
            </div>
    </header>
  )
}

export default Header