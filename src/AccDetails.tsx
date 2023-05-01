import React from 'react';

const AccDetails = () => {
  return (
    <div className='details'>
        <div className="details-content">
            <div className='details-header'>
                <p className='details-header-text'>Account details</p>
            </div>
            <form className='details-form'>
                <p className='details-form-header'>Personal details</p>

                <div className='input-container'>
                <label htmlFor='email' className='input-label' >Email:</label>
                <input id='email' className='input-field' type='email' value={'robi1@yahoo.com'}></input>

                </div>
                <div className='input-container'>
                <label htmlFor='name' className='input-label' >Name:</label>
                <input id='name' className='input-field' type='text' value={'Marsch Robert'} ></input>

                </div>
                <div className='input-container'>
                <label htmlFor='tel' className='input-label' >Mobile number:</label>
                <input id='tel' className='input-field' type='tel' placeholder='Optional'></input>

                </div>
                <div className='input-container'>
                <label htmlFor='date' className='input-label'>Birthdate:</label>
                <input id='date' className='input-field' type='date'></input>

                </div>
                <button className='save-form-button' type='submit'>Save changes</button>
            </form>
        </div>
    </div>
  )
}

export default AccDetails