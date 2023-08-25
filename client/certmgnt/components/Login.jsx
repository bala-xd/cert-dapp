import { LockOutlined,NumberOutlined,EyeTwoTone,EyeInvisibleOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Radio, Form, Input,message,Card } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContract,useContractRead,useContractWrite } from '@thirdweb-dev/react';
import "../Styles/login.css"


const Login = () => {
    const [regno, setregno] = useState("")
    const [pass, setpass] = useState("")
    const [Slogin, setSlogin] = useState(false)
    const [Ilogin, setIlogin] = useState(false)
    const [Rlogin, setRlogin] = useState(false)
  
    const navigate = useNavigate();    

    const { contract } = useContract("0x4Dd5230179962A6Fb5E9B05A0226AeE870868247");

  /*const onFinish = (values) => {
    console.log('Received values of form: ', values);
    console.log(Slogin)
    
    
  };*/
  

  const { data:students } = useContractRead(contract, "students", [regno])

  
  const HandleClick=()=>{
    
    console.log(students.isLoggedin)
    localStorage.setItem("Slogin",Slogin)
    localStorage.setItem("Ilogin",Ilogin)
    localStorage.setItem("Rlogin",Rlogin)

    if(students.isLoggedin && Slogin==true && pass==students.password){
        navigate('/Student')
    }
    
    else if(Ilogin==true && regno=="INT101" && pass=="qwerty"){
        navigate('/Institute')
    }
    
    else if(students.isLoggedin && Rlogin==true && pass==students.password){
        navigate('/Verify')
    }
    else{
      message.error("Wrong Username Password")
    }
  }
  const onChange=(e)=>{
        if (e.target.value==1 ) {
            setSlogin(true)
        }
        if (e.target.value==2) {
            setIlogin(true)
        }
        if(e.target.value==3){
            setRlogin(true)
        }
  }
  return (
    <div>
    <div style={{height:"100vh", position: 'absolute', left: '0px', width: '100%', overflow: 'hidden'}} className='lbg'>
      
    <div className='form'>
    <Card title="Login" className='crd'>
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      
    >
      <Form.Item
        name="RegNo"
        rules={[
          {
            required: true,
            message: 'Enter Register Number ',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="RegNo"
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
      <Radio.Group onChange={onChange}>
      <Radio value={1}>Student</Radio>
      <Radio value={2}>Institute</Radio>
      <Radio value={3}>Recruiter</Radio>
    </Radio.Group>

      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button"
          
         onClick={HandleClick}>
          Log in
        </Button>
      </Form.Item>
    </Form>
    </Card>
    </div>
    
    </div>
    </div>
  );
};
export default Login;

