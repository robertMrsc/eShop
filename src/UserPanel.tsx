import React from 'react';
import {useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
type Props={
    display:boolean;
    setDisplay:React.Dispatch<React.SetStateAction<boolean>>
}
const UserPanel:React.FC<Props> = ({display, setDisplay}) => {
    const navigate=useNavigate();
    const ref=useRef<HTMLDivElement>(null);
    const panelStyles=()=>{
        if (display){
            return {
                "opacity":1,
                "transform":"TranslateY(0)",
                "pointer-events":"all"
            }
        }
    }
    const handleSignIn=()=>{
        navigate('/login');
        setDisplay(false);
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
            <p className='user-panel-header'>Your account</p>
            <div className='user-panel-buttons'>
                <button onClick={handleSignIn} className='sign-in-button'>Sign in</button>
            </div>
        </div>
    </div>
  )
}

export default UserPanel