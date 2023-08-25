import React from 'react'
import {Menu} from "antd"
import { useNavigate } from 'react-router-dom';

const Rnav = () => {
    
    const navigate = useNavigate();
  return (
    
    <div style={{display:"flex",flexDirection:"row"}}>
            <Menu 
            className='menbg'
            onClick={({key})=>{
                if(key==="logout"){
                    localStorage.clear()
                    navigate('/')
                }
                else{
                    navigate(key)
                }

            }}
            items={
                
                [
                    
                {label:"View Certificate" ,key:"/View"},
                {label:"View Status" ,key:"/Status"},
                {label:"Verify Certificate" ,key:"/Verify"},
                {label:"Logout",key:"logout"},
                
                ]}>
            
            
            </Menu>
        </div>
  )
}

export default Rnav