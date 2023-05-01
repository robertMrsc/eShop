import React from 'react';
import './styles/dashboard.scss'
import Dashboard from './Dashboard';
import { Outlet } from 'react-router-dom';


const YourAccount = () => {
  return (
    <div className='account'>
    <Dashboard/>
    <Outlet/>
    </div>
  )
}

export default YourAccount