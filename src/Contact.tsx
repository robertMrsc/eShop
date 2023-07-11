import React from 'react';
import './styles/contact.scss'

const Contact:React.FC = () => {
  return (
    <div className='contact'>
        <div className='image-banner'>
            <p className='banner-header'>Contact us</p>
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
                    <textarea  rows={10} cols={10} className='message-area'></textarea>
                </div>
                <button className='send-button' type='submit'>Send</button>
            </form>
        </div>
        <div className='map-container'>
            <iframe className='contact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.6283958127847!2d23.62311115949016!3d46.77222074470634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c1526f65141%3A0x1b77634ecb69ecfe!2sParcul%20Iulius!5e0!3m2!1sro!2sro!4v1685642943352!5m2!1sro!2sro" loading="lazy" ></iframe>
        </div>
    </div>
  )
}

export default Contact