import React from 'react';
import HomePerks from './HomePerks';
import Banner from './Banner';
import Trending from './Trending';

const Homepage:React.FC = () => {
  return (
    <>
        <Banner/>
        <Trending/>
        <HomePerks/>
    </>
  )
}

export default Homepage