import React from 'react'

const Address = () => {
  return (
    <div className='address'>
      <div className='address-content'>
        <div className='address-header'>
          <p className='address-header-text'>Address</p>
        </div>
        <form className='address-form'>
          <p className='address-form-header'>Your address</p>

          <div className='address-input'>
            <label className='address-label'>Address:</label>
            <input type='text' className='address-field' ></input>
          </div>

            <div className='address-input'>
            <label className='address-label'>Country:</label>
            <input type='text' className='address-field' ></input>
          </div>

          <div className='address-input'>
            <label className='address-label'>County:</label>
            <input type='text' className='address-field' ></input>
          </div>

          <div className='address-input'>
            <label className='address-label'>Town:</label>
            <input type='text' className='address-field' ></input>
          </div>

          <div className='address-input'>
            <label className='address-label'>Postal code:</label>
            <input type='text' className='address-field' ></input>
          </div>
          <button className='save-form-button' type='submit'>Save changes</button>
        </form>
      </div>
    </div>
  )
}

export default Address