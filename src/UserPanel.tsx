import React from 'react';
import {useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Context/AuthContext';
type Props={
    display:boolean;
    setDisplay:React.Dispatch<React.SetStateAction<boolean>>
}
const UserPanel:React.FC<Props> = ({display, setDisplay}) => {

    const {user}=useAuth();

    const handleSignOut= async ()=>{
        try{
        const response= await fetch('http://localhost:5000/user/signout',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
            credentials:'include'
        });
        const data=await response.json();
        console.log(data);
    }
        catch(err){
            console.log(err);
        };
        setDisplay(false);
    };
    
    const {token, setToken}=useAuth();
    const navigate=useNavigate();
    const ref=useRef<HTMLDivElement>(null);

    const navToAcc=()=>{
        navigate('/dashboard')
        setDisplay(false);
    }

    type stylez={
        opacity:number,
        transform:string,
        pointerEvents:string
    }
    const openPanel:stylez={
        'opacity':1,
        'transform':"TranslateY(0)",
        'pointerEvents':'all'
    }
    const panelStyles=():any=>{
        if (display){
            return (
                openPanel
            )
        }
    }
    const handleSignIn=()=>{
        navigate('/login');
        setDisplay(false);
        setToken(token);
    }
    useEffect(()=>{
        
        function handleClickOutside(this:Document ,e:MouseEvent):any{
            if (!ref.current?.contains(e.target as Node)){
                setDisplay(false);
            }
        }
        document?.addEventListener('mousedown', handleClickOutside)
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        }
    },[ref]);
    useEffect(()=>{
        if (display){
            document.body.style.pointerEvents='none';
        }
        return()=>{
            document.body.style.pointerEvents='all'
        }
    }, [display])
    
  return (
    <div ref={ref} style={panelStyles()} className='user-panel'>
        <div className='user-panel-content'>
            <p className='user-panel-header'> {token ? `Hello, ${user?.fullname}` : `Account`}</p>
            <div className='user-panel-buttons'>
                { token ? <button onClick={handleSignOut} className='sign-out-button'>Sign out</button> :
                <button onClick={handleSignIn} className='sign-in-button'>Sign in</button> }
                {
                    token && 
                <button onClick={navToAcc} className='your-account-button'>Your account</button>
                }
            </div>
        </div>
    </div>
  )
}

export default UserPanel