import React from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import { useEffect , useRef} from 'react';
import { useNavigate } from 'react-router-dom';
interface Props{
    sideStatus:boolean,
    setSideStatus:React.Dispatch<React.SetStateAction<boolean>>
}

const Sidemenu:React.FC<Props> = ({sideStatus, setSideStatus}) => {

    const navigate=useNavigate();
    const navTo=(id:string)=>{
        navigate(`/${id}`);
        setSideStatus(false);
    };
    const handleClose=()=>{
        setSideStatus(false);
    }
    const ref=useRef<HTMLUListElement>(null);

    useEffect(()=>{
        
        function handleClickOutside(this:Document ,e:MouseEvent):any{
            if (!ref.current?.contains(e.target as Node)){
                setSideStatus(false);
            }
        }
        document?.addEventListener('mousedown', handleClickOutside)
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        }
    },[ref]);
    useEffect(()=>{
        if (sideStatus){
            document.body.style.pointerEvents='none';
        }
        return()=>{
            document.body.style.pointerEvents='all'
        }
    }, [sideStatus])

        type stylez={
        opacity:number,
        transform:string,
        pointerEvents:string,
        display:string
    }
    const openSidemenu:stylez={
        'opacity':1,
        'transform':"TranslateX(0%)",
        'pointerEvents':'all',
        'display':'flex'
    }
    const panelStyles=():any=>{
        if (sideStatus){
            return (
                openSidemenu
            )
        }
    }


  return (
    <>
    
    <ul ref={ref} style={panelStyles()} className="sidemenu">
        <div className="sidemenu-option-first">
            <span onClick={handleClose} className="exit-icon"><AiOutlineClose/></span>
            <p onClick={() => navTo('')} className="sidemenu-option">Home</p>
        </div>
        <li onClick={() => navTo('Shop')} className="sidemenu-option">Shop</li>
        <li onClick={() => navTo('About')} className="sidemenu-option">About</li>
        <li onClick={() => navTo('Contact')} className="sidemenu-option">Contact</li>
    </ul>
    </>
  )
}

export default Sidemenu