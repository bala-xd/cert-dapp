import React from 'react'
import {Menu} from "antd"
import { useNavigate } from 'react-router-dom';
import '../../Styles/Components.css'

const Inav = () => {
    
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
                    
                {label:"View Pending Request" ,key:"/Institute"},
                {label:"View Certificate" ,key:"/View"},
                {label:"Add Student",key:"/AddStudent"},
                {label:"Add Recruiter",key:"/AddRecruiter"},
                {label:"Logout",key:"logout"},
                
                
                ]}>
            
            
            </Menu>
        </div>
  )
}

export default Inav