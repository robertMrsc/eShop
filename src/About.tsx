import React from 'react'
import Banner from './Banner';
import './styles/about.scss'

const About:React.FC = () => {
  return (
    <div className='about'>
       <div className='image-banner'>
            <p className='banner-header'>About us</p>
        </div>
        <p className='about-header'>About us</p>
        <div className='about-container'>
            <p className="about-text">Welcome to Robik's, your ultimate destination for a wide range of high-quality products! We are passionate about providing our customers with an exceptional shopping experience and an extensive selection of products to meet their diverse needs.At Robik's, we believe in the power of great products to enhance your everyday life. Whether you're looking for the latest tech gadgets, stylish fashion accessories, home and kitchen essentials, or unique gift ideas, we have something for everyone. Our carefully curated collection features products that are not only aesthetically pleasing but also functional and built to last.We take pride in offering products from reputable brands and trusted manufacturers, ensuring that every item you find on our website meets the highest standards of quality. Our team works tirelessly to source the best products, constantly staying up-to-date with the latest trends and innovations in the market. You can shop with confidence, knowing that each purchase you make from us is backed by our commitment to excellence.At Robik's, we prioritize customer satisfaction above all else. We strive to provide exceptional customer service, prompt shipping, and hassle-free returns. Our friendly and knowledgeable support team is always here to assist you with any questions or concerns you may have.We believe in building lasting relationships with our customers, and that's why we go the extra mile to create a personalized and enjoyable shopping experience. We value your feedback and suggestions, as they help us continually improve and expand our product offerings.Thank you for choosing Robik's as your go-to destination for all your shopping needs. We invite you to explore our extensive collection, discover exciting products, and experience the convenience of shopping from the comfort of your own home.Happy shopping! The Robik's Team.</p>
            <div className='about-image'></div>
        </div>
    </div>
  )
}

export default About