import React from 'react';
import { useState, useEffect } from 'react';
import { useAuth } from './Context/AuthContext';

const Address = () => {
  const {address, setAddress,
        country, setCountry,
        county, setCounty,
        town, setTown,
        postal, setPostal
  }=useAuth();

    const handleAddress=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setAddress(e.currentTarget.value);
    }

    const handleCountry=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setCountry(e.currentTarget.value);
    }

    const handleCounty=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setCounty(e.currentTarget.value);
    }

    const handleTown=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setTown(e.currentTarget.value);
    }

    const handlePostal=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setPostal(e.currentTarget.value);
    }

    const saveChanges= async (e:React.SyntheticEvent) =>{
      e.preventDefault();
        try {
          const res=await fetch('http://localhost:5000/user/updateAddress',{
            method:'PATCH',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
              'address':{
                address,
                country,
                county,
                town,
                postal

              }
            }),
            credentials:'include'
          })
          const data=await res.json();
          console.log(data);
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <div className='address'>
      <div className='address-content'>
        <div className='address-header'>
          <p className='address-header-text'>Address</p>
        </div>
        <form className='address-form' onSubmit={saveChanges}>
          <p className='address-form-header'>Your address</p>

          <div className='address-input'>
            <label className='address-label'>Address:</label>
            <input onChange={handleAddress} type='text' className='address-field' value={address} ></input>
          </div>

            <div className='address-input'>
            <label className='address-label'>Country:</label>
            <input onChange={handleCountry} type='text' className='address-field' value={country} ></input>
          </div>

          <div className='address-input'>
            <label className='address-label'>County:</label>
            <input onChange={handleCounty} type='text' className='address-field' value={county} ></input>
          </div>

          <div className='address-input'>
            <label className='address-label'>Town:</label>
            <input onChange={handleTown} type='text' className='address-field' value={town} ></input>
          </div>

          <div className='address-input'>
            <label className='address-label'>Postal code:</label>
            <input onChange={handlePostal} type='text' value={postal} className='address-field' ></input>
          </div>
          <button className='save-form-button' type='submit'>Save changes</button>
        </form>
      </div>
    </div>
  )
}

export default Address