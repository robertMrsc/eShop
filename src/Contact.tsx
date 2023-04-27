import React from 'react';
import './styles/contact.scss'

const Contact:React.FC = () => {
  return (
    <div className='contact'>
        <div className='image-banner'>

        </div>
        <div className='contact-container'>
            <p className='contact-header'>Contact us</p>
            <form className='contact-form'>
                <div className='contact-input'>
                    <label>First name</label>
                    <input className='contact-form-input' type='text'></input>
                </div>
                <div className='contact-input'>
                    <label>Last name</label>
                    <input className='contact-form-input' type='text'></input>
                </div>
                <div className='contact-input'>
                    <label>Email</label>
                    <input className='contact-form-input' type='email'></input>
                </div>
                <div className='contact-input'>
                    <label>Phone</label>
                    <input className='contact-form-input' type='text'></input>
                </div>
                <div className='message-input'>
                    <label>Message</label>
                    <textarea rows={10} cols={10} className='message-area'></textarea>
                </div>
                <button className='send-button' type='submit'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact