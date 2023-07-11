import React from 'react';
import { useState } from 'react';
import './styles/login.scss';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate=useNavigate();
  const [email, setEmail]=useState<string>('');
    const [password, setPassword]=useState<string>('');
    const [emailError, setEmailError]=useState<string>('');
    const [passwordError, setPasswordError]=useState<string>('');
    const [fullName, setFullName]=useState<string>('');

    const handleUsername=(e:React.FormEvent<HTMLInputElement>)=>{
       setEmail(e.currentTarget.value);
    }

    const handlePassword=(e:React.FormEvent<HTMLInputElement>)=>{
       setPassword(e.currentTarget.value);
    }
    const handleName=(e:React.FormEvent<HTMLInputElement>)=>{
      setFullName(e.currentTarget.value)
    }
    const handleSignup=async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setEmailError('');
        setPasswordError('')
        try{
       const response= await fetch('http://localhost:5000/user/signup',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            credentials:'include',
            body:JSON.stringify({
                email:email,
                password:password,
                fullname:fullName
            })
        })
        const data=await response.json();
        console.log(data);
        navigate('/')
        if (data.errors){
          setEmailError(data.errors.email);
          setPasswordError(data.errors.password);
        }
      }
      catch(err:any){
        console.log(err.message);
      }
    }
  return (
    <main className='login-container'>
        <p className='login-header'>Sign Up</p>
        <form className='login-form' onSubmit={handleSignup} >
            <input className='login-input' value={email} onChange={handleUsername} placeholder='Enter email...' type='email' ></input>
            <input onChange={handleName} className='login-input' type='text' placeholder='Enter Full Name' ></input>
            <div className='email-errors'>
              {emailError && <p className='input-error'>{emailError}</p>}
            </div>
            <input className='login-input' type='password' onChange={handlePassword} placeholder='Enter Password...' ></input>
            <div className='password-errors'>
              {passwordError && <p className='input-error'>{passwordError}</p>}
            </div>
            <button className='login-button' type='submit'>Sign Up</button>
        </form>
                <div className='login-footer'>
        <p className='login-footer-text'>Already have an account?</p>
        <Link className='login-footer-link' to='/login'>Click here to sign in</Link>
        </div>
    </main>
  )
}

export default Signup