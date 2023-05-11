import React from 'react';
import './styles/dashboard.scss';
import { useNavigate, Outlet} from 'react-router-dom';
import AccDetails from './AccDetails';


const Dashboard = () => {
    const navigate=useNavigate();
    const navTo=(link:string)=>{
        navigate(link)
    }
  return (
    <>
    <div className='dashboard'>
        <div className='dashboard-content'>
            <p className='dashboard-my-account'>My account</p>
            <div className='dashboard-orders'>
                <p className='dashboard-text ds-option'>Your orders</p>
                <p onClick={()=> navTo('/cart')} className='dashboard-text ds-option' >Cart</p>
            </div>
            <div className="dashboard-account">
                <p className='dashboard-account-header'>Account settings</p>
                <p onClick={() => navTo('/dashboard/details')} className='dashboard-text ds-option' >Account details</p>
                <p onClick={() => navTo('/dashboard/address')} className='dashboard-text ds-option'>Address</p>
            </div>
            <div className='dashboard-contact'>
                <p className="dashboard-contact-header">Customer Service</p>
                <p onClick={()=> navTo('/contact')} className='dashboard-text ds-option'>Contact us</p>
                <p onClick={()=> navTo('/')} className='dashboard-text ds-option'>Facebook</p>
                <p onClick={()=> navTo('/')} className='dashboard-text ds-option'>Twitter</p>
            </div>
            <div className='dashboard-logout'>
                <p  className='dashboard-text ds-option logout'>Log out</p>
            </div>
        </div>
    </div>

    </>
    
  )
}

export default Dashboard