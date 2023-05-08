import React from 'react';
import {AiOutlineUser} from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {Link, useNavigate} from 'react-router-dom';
import UserPanel from './UserPanel';
import {useState} from 'react';


const Header:React.FC = () => {
  const navigate=useNavigate();
  const [display, setDisplay]=useState(false);

  const handleClick=()=>{
  setDisplay(true);
  }
  const navToCart=()=>{
    navigate('/cart')
  }

  return (
    <header>
      {display && <div className='overlay'></div>}
        <div className='header-content'>
        <div className='logo-container'>
            <Link to='/' className='logo'>Robik's</Link>
            </div>
            <div className='header-links' >
                <Link to='/' className='link'>Home</Link>
                <Link to='/shop' className='link'>Shop</Link>
                <Link to='/' className='link'>About</Link>
                <Link to='/contact' className='link'>Contact</Link>
            </div>
            <div className="header-icons">
                <span onClick={handleClick} className='header-icon'><AiOutlineUser/></span>
                <span className='header-icon'><BiSearch/></span>
                <span onClick={navToCart}  className='header-icon'><AiOutlineShoppingCart/></span>
                <UserPanel setDisplay={setDisplay} display={display}/>
            </div>
            </div>
    </header>
  )
}

export default Header