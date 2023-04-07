import React from 'react';
import {FaRegMoneyBillAlt} from 'react-icons/fa';
import {ImTruck} from 'react-icons/im';
import {GiClockwiseRotation} from 'react-icons/gi';
import {FaHeadset} from 'react-icons/fa'

const Trending:React.FC = () => {
  return (
    <div className='trending-container'>
        <p className='trending-text'>Trending products</p>
        <div className='trending-flex'>
            <div className='trending-flex-image watch '></div>
            <div className='trending-flex-image lens '></div>
            <div className='trending-flex-image camera '></div>
        </div>
    </div>
  )
}

export default Trending