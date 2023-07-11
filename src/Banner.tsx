import React from 'react';
import { useParams } from 'react-router-dom';

const Banner:React.FC = () => {
  const {id}=useParams();
  console.log(id);
  return (
    <div className='image-banner'>
      <p className="banner-header">Home</p>
    </div>
  )
}

export default Banner