import React, { useState } from 'react'
import Rnav from './nav/Rnav'
import { NumberOutlined } from '@ant-design/icons';
import { Input,Button } from 'antd';
import ".././Styles/Components.css"

const Recruiter = () => {
    const [txh, settxh] = useState("")
    const handleClick=(e)=>{
        e.preventDefault()
        const url= "https://sepolia.etherscan.io/tx/"+txh;
        window.open(url)
    }
  return (
    <div className='bg' style={{height:"100vh"}}>
    <div className='student'>
    <Rnav/>
   <div style={{paddingLeft:"20px"}}>
    <br></br>
    <h1>Verify the Certificate</h1>
    <br/>
   <Input
          prefix={<NumberOutlined  className="site-form-item-icon" />}
          placeholder="Enter Transaction Hash"
          onChange={(e)=>{settxh(e.target.value)}}
        />
    <br></br>
    <br></br>
   <Button style={{alignItems:"center"}} type="primary" htmlType="submit" className="login-form-button" onClick={handleClick} >
            Verify
        </Button></div>
   </div>
   </div>
  )
}

export default Recruiter