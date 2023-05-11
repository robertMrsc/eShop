import React from 'react';
import { useAuth } from './Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './styles/checkout.scss';

const Checkout = () => {
    let total=0;
    const {cart, setCart, user,
        address, setAddress,
        country, setCountry,
        county, setCounty,
        town, setTown,
        postal, setPostal,
        email, setEmail,
         name, setName,
        mobile, setMobile,
        orders, setOrders
    }=useAuth();

    const navigate=useNavigate();

    cart.map((item)=>{
  return total=total + Number(item.price) * item.quantity;
 });

    const handleMobile=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setMobile(e.currentTarget.value);
    };

    const handleAddress=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setAddress(e.currentTarget.value);
    };
    const handleCountry=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setCountry(e.currentTarget.value);
    };
    const handleCounty=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setCounty(e.currentTarget.value);
    };
    const handleTown=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setTown(e.currentTarget.value);
    };
    const handlePostal=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setPostal(e.currentTarget.value);
    };

    const handleCheckout=async()=>{
        //e.preventDefault();
        setOrders([...orders, cart ]);
        setCart([]);
       try{
        
        
        const res=await fetch('http://localhost:5000/user/updateCart',{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                cart:cart,
                orders:orders
            }),
            credentials:'include'
        })
        const data=await res.json();
        console.log(data)
        //navigate('/')
    }
        catch(err){
            console.log(err);
        }

    }

  return (
    
    <div className='checkout'>
        <div className="checkout-header">
                <p className="checkout-header-text">Checkout</p>
            </div>
        <div className="checkout-content">
            <form className='checkout-form'>
                <p className="checkout-form-header">Delivery information</p>
                
                <div className="checkout-form-container">
                    <label>Name:</label>
                    <input readOnly={true} value={name} required={true} className='checkout-form-input' type='text' ></input>
                </div>

                <div className="checkout-form-container">
                    <label>Email:</label>
                    <input readOnly={true} value={email} required={true} className='checkout-form-input' type='email' ></input>
                </div>

                <div className="checkout-form-container">
                    <label>Mobile:</label>
                    <input onChange={handleMobile} value={mobile} required={true} className='checkout-form-input' type='tel' ></input>
                </div>

                <div className="checkout-form-container">
                    <label>Address:</label>
                    <input onChange={handleAddress} value={address} required={true} className='checkout-form-input' type='text' ></input>
                </div>

                <div className="checkout-form-container">
                    <label>Country:</label>
                    <input onChange={handleCountry} value={country} required={true} className='checkout-form-input' type='text'></input>
                </div>

                <div className="checkout-form-container">
                    <label>County:</label>
                    <input onChange={handleCounty} value={county} required={true} className='checkout-form-input' type='text' ></input>
                </div>

                <div className="checkout-form-container">
                    <label>Town:</label>
                    <input onChange={handleTown} value={town} required={true} className='checkout-form-input' type='text' ></input>
                </div>

                <div className="checkout-form-container">
                    <label>Postal Code:</label>
                    <input onChange={handlePostal} value={postal} required={true} className='checkout-form-input' type='text' ></input>
                </div>

            </form>
            <div className="order-summary">
                <div className="order-summary-header">
                    <p className="order-summary-header-text">Order summary</p>
                </div>
                <div className="order-summary-content">
                    {cart.map((product)=>{
                        return <div key={product._id} className='order-summary-product'> 
                            <div className='order-product-image' style={{backgroundImage:`url(${product.imageUrl})`}} > </div>
                            <div className='order-product-info'>
                                <p className="order-product-title">{product.title}</p>
                                <p className="order-product-price">{`${Number(product.price) * product.quantity} EUR`}</p>
                            </div>
                            <div className="order-product-quantity">
                                {`Quantity:${product.quantity}`}
                            </div>
                            
                        </div>
                    })}
                    <div className='checkout-subtotal'>
                        <div className="subtotal">
                            <p>Subtotal</p>
                            <p className='mlauto'>{`${total} EUR`}</p>
                        </div>
                        <div className="shipping">
                            <p>Shipping</p>
                            <p className='mlauto'>Free</p>
                        </div>
                    </div>
                    <div className="checkout-button">
                        <button type='submit' onClick={handleCheckout} className='order-button' >Place order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Checkout