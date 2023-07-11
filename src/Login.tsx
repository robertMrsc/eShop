import React from 'react';
import './styles/login.scss';
import { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';

const Login:React.FC = () => {
  const navigate=useNavigate();
    const [email, setEmail]=useState<string>('');
    const [password, setPassword]=useState<string>('');
    const [emailError, setEmailError]=useState<string>('');
    const [passwordError, setPasswordError]=useState<string>('');

    const handleEmail=(e:React.FormEvent<HTMLInputElement>)=>{
       setEmail(e.currentTarget.value);
    }

    const handlePassword=(e:React.FormEvent<HTMLInputElement>)=>{
       setPassword(e.currentTarget.value);
    }
    const handleLogin=async(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      setEmailError('');
      setPasswordError('');
      try{
      const res=await fetch('http://localhost:5000/user/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          email:email,
          password:password
        }),
        credentials:'include'
      })
      const data=await res.json();
      navigate('/')
      if (data.errors){
        setEmailError(data.errors.email);
        setPasswordError(data.errors.password)
      }
      console.log(data);
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <main className='login-container'>
        <p className='login-header'>Sign In</p>
        <form className='login-form' onSubmit={handleLogin}>
            <input  className='login-input' value={email} onChange={handleEmail} placeholder='Email...' type='text' ></input>
            <div className='email-errors'>
              {emailError && <p className='input-error'>{emailError}</p>}
            </div>
            <input className='login-input' type='password' onChange={handlePassword} placeholder='Password...' ></input>
            <div className='password-errors'>
              {passwordError && <p className='input-error'>{passwordError}</p>}
            </div>
            <button className='login-button' type='submit'>Sign In</button>
        </form>
        <div className='login-footer'>
        <p className='login-footer-text'>Don't have an account?</p>
        <Link className='login-footer-link' to='/signup'>Click here to signup</Link>
        </div>
    </main>
  )
}

export default Login