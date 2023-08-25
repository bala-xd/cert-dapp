import React from 'react'
import {Menu} from "antd"
import { useNavigate } from 'react-router-dom';
import '../../Styles/Components.css'


const Snav = () => {
    
    const navigate = useNavigate();
  return (
    <div>
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
                
                {label:"Request Certificate" ,key:"/Student"},
                {label:"View Status" ,key:"/Status"},
                {label:"View Certificate" ,key:"/View"},
                {label:"Logout",key:"logout"}
                ]}>
            
            
            </Menu>
        </div>
  )
}

export default Snav