import React from 'react'
import { useContract,useContractRead,useContractWrite } from '@thirdweb-dev/react';
import { FileTextOutlined,NumberOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input,message } from 'antd';
import { useState } from 'react';
import Snav from './nav/Snav';
import '../Styles/Components.css'
import '../Styles/login.css'


const Student = () => {
    const [name, setName] = useState("")
    const [aadhar, setAadhar] = useState()
    const [degree, setDegree] = useState("")
    
    //const [txh,settxh] = useState("")
   // const [txhh,settxhh]=useState("")

    const { contract } = useContract("0x4Dd5230179962A6Fb5E9B05A0226AeE870868247");
    const { mutateAsync: addCertificate} = useContractWrite(contract, "addCertificate");
    const { data: certificates } = useContractRead(contract, "certificates", aadhar)
   
    const handleRequest = async () =>{
        try {
            
            const data = await addCertificate({ args: [name, aadhar, degree] });
            console.info("contract call successs", data);
           

            console.log(data)
            
            setName("")
            setAadhar("")
            setDegree("")
            message.success("Request Sent")
            
          } catch (err) {
            console.error("contract call failure", err);
            
          }
    }

  return (
    <div className='bg' style={{height:"100vh"}}>
    <div className='student'>
      
    <Snav/>
    
      <div className='frm'>
        <br></br>
        <h1>Request Certificate</h1>
        <br></br>
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      
    >
      <Form.Item
        name="Name"
        rules={[
          {
            required: true,
            message: 'Please enter your Name!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name"
        onChange={(e)=>{setName(e.target.value)}} />
      </Form.Item>
      <Form.Item
        name="Aadhar"
        rules={[
          {
            required: true,
            message: 'Please enter your Aadhar',
          },
        ]}
      >
        <Input
          prefix={<NumberOutlined  className="site-form-item-icon" />}
          placeholder="Aadhar"
          onChange={(e)=>{setAadhar(e.target.value)}}
        />
      </Form.Item>
      <Form.Item
        name="Degree"
        rules={[
          {
            required: true,
            message: 'Please enter your Degree',
          },
        ]}
      >
        <Input
          prefix={<FileTextOutlined  className="site-form-item-icon" />}
          placeholder="Degree"
          onChange={(e)=>{setDegree(e.target.value)}}
        />
      </Form.Item>
      

        
      

      <Form.Item>
        <Button type='primary' htmlType="submit" className="login-form-button" onClick={handleRequest} >
          Request
        </Button>
       
      </Form.Item>
    </Form>
        </div>
    </div>
    </div>
    
   


  )
}

export default Student;