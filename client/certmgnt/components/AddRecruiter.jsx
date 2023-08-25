import React from 'react';
import { useState } from 'react';
import { FileTextOutlined,NumberOutlined, UserOutlined,EyeTwoTone,EyeInvisibleOutlined, } from '@ant-design/icons';
import { Button, Form, Input,message } from 'antd';
import { useContract,useContractRead, useContractWrite } from "@thirdweb-dev/react";
import '../Styles/Components.css'
const AddRecruiter = () => {
    const [regno, setregno] = useState("")
    const [pass, setpass] = useState("")
    const { contract } = useContract("0x4Dd5230179962A6Fb5E9B05A0226AeE870868247");
    const { mutateAsync: addstudent } = useContractWrite(contract, "addstudent")
    const { data:students } = useContractRead(contract, "students", [regno])
  
    const handleAdd = async () => {
      try {
        const data = await addstudent({ args: [regno, pass] });
        console.info("contract call successs", data);
        message.success("Recruiter Added")
      } catch (err) {
        console.error("contract call failure", err);
      }
      console.log(students.isLoggedin)
      
    }
    
  return (
    <div className='bg' style={{height:"100vh"}}>
    <div style={{paddingLeft:"20px",paddingRight:"1000px"}}>
      <br></br>
    <h1>Add Recruiter</h1>
    <br />
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
            message: 'Enter your Username ',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="UserName"
        onChange={(e)=>{setregno(e.target.value)}} />
      </Form.Item>
      <Form.Item
        name="Password"
        rules={[
          {
            required: true,
            message: 'Enter Password',
          },
        ]}
      >
        <Input.Password
        placeholder="input password"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        onChange={(e)=>{setpass(e.target.value)}}
      />
      </Form.Item>
      

        
      

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleAdd}  >
          Add
        </Button>
       
      </Form.Item>
    </Form>
    </div>
    </div>
  )
}

export default AddRecruiter