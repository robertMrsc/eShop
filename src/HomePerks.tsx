import React from 'react';
import {FaRegMoneyBillAlt} from 'react-icons/fa';
import {ImTruck} from 'react-icons/im';
import {GiClockwiseRotation} from 'react-icons/gi';
import {FaHeadset} from 'react-icons/fa'

const HomePerks:React.FC = () => {
  return (
    <div className='perks'>
        <div className='perk'>
            <span className='perk-icon'><ImTruck/></span>
            <p className='perk-header'>Free Delivery</p>
            <p className='perk-text'>No cost delivery for orders of minimum 150$.</p>
        </div>

        <div className='perk'>
            <span className='perk-icon'><GiClockwiseRotation/></span>
            <p className='perk-header'>30 days Return</p>
            <p className='perk-text'>If you don't like your product, you can return it for 30 days after delivery.</p>
        </div>

        <div className='perk'>
            <span className='perk-icon'><FaRegMoneyBillAlt/></span>
            <p className='perk-header'>Money back</p>
            <p className='perk-text'>Money back is guaranteed on every return.</p>
        </div>

        <div className='perk'>
            <span className='perk-icon'><FaHeadset/></span>
            <p className='perk-header'>Customer support</p>
            <p className='perk-text'>Live chat support 24/7</p>
        </div>
    </div>
  )
}

export default HomePerks