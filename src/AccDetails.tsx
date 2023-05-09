import React from 'react';
import { useAuth } from './Context/AuthContext';

const AccDetails = () => {

  const {email, setEmail, name, setName, mobile, setMobile, birthdate, setBirthdate}=useAuth();

  const handleEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.currentTarget.value)
  }

  const handleName=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.currentTarget.value)
  }

  const handleMobile=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setMobile(e.currentTarget.value)
  }

  const handleBirthdate=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setBirthdate(e.currentTarget.value)
  }

  const handleSave= async (e:React.SyntheticEvent) =>{
    e.preventDefault();
    try{
    const res=await fetch('http://localhost:5000/user/updateAddress',{
      method:"PATCH",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email,
        name,
        mobile,
        birthdate
      }),
      credentials:'include'
    })
    const data=await res.json();
    console.log(data)
  }
  catch(err){
    console.log(err);
  }

  }

  return (
    <div className='details'>
        <div className="details-content">
            <div className='details-header'>
                <p className='details-header-text'>Account details</p>
            </div>
            <form className='details-form' onSubmit={handleSave} >
                <p className='details-form-header'>Personal details</p>

                <div className='input-container'>
                <label htmlFor='email' className='input-label' >Email:</label>
                <input value={email} onChange={handleEmail} id='email' className='input-field' type='email' ></input>

                </div>
                <div className='input-container'>
                <label htmlFor='name' className='input-label' >Name:</label>
                <input value={name} id='name' onChange={handleName} className='input-field' type='text'  ></input>

                </div>
                <div className='input-container'>
                <label htmlFor='tel' className='input-label' >Mobile number:</label>
                <input id='tel' value={mobile} onChange={handleMobile} className='input-field' type='tel' placeholder='Optional'></input>

                </div>
                <div className='input-container'>
                <label htmlFor='date' className='input-label'>Birthdate:</label>
                <input id='date' value={birthdate} onChange={handleBirthdate} className='input-field' type='date'></input>

                </div>
                <button className='save-form-button' type='submit'>Save changes</button>
            </form>
        </div>
    </div>
  )
}

export default AccDetails