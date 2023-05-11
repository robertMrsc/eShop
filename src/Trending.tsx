import React from 'react';

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