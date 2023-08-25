import React,{useState} from 'react'
import { NumberOutlined } from '@ant-design/icons';
import { useContract,useContractRead,useContractWrite } from '@thirdweb-dev/react';
import { Input,Button } from 'antd';
import ".././Styles/Components.css"

const Status = () => {
  const { contract } = useContract("0x4Dd5230179962A6Fb5E9B05A0226AeE870868247");
  const [aadhar, setAadhar] = useState()
  const [Dummy, setDummy] = useState()
  const { data: certificates } =  useContractRead(contract, "certificates", [aadhar])
  //const { data: certificates } = useContractRead(contract, "getCertificate", aadhar)
  const [bool, setbool] = useState(false)
  const getStatus=()=>{
    
    setAadhar(Dummy);
    setbool(true)
  }
  return (
    <div className='bg' style={{height:"100vh"}}>
    <div style={{paddingRight:"1000px",paddingLeft:"20px"}}>
    <div>
      <br></br>
    <h1>Check Status of Your Certificate:</h1>
    <br></br>
    <div>
        <h2>Aadhar ID:</h2>
        <br></br>
        <div style={{display:"flex"}}>
        <Input type="text"  prefix={<NumberOutlined  className="site-form-item-icon" />}
          placeholder="Enter Aadhar ID"
            onChange={(e)=>{setDummy(e.target.value)}} />
            <div style={{paddingLeft:"20px"}}>
          <Button type="primary" htmlType="submit" className="login-form-button"  onClick={getStatus} > view status</Button>
          </div>
          </div>
    </div>
</div>
{bool && certificates && certificates.name && (
    <div>
        <h2>Certificate Details:</h2>
        <h2>Certificate Name: {certificates.name}</h2>
        <h2>Approval Status: {certificates.isApproved ? "Approved" : !certificates.exists ? "Declined" : "Approval Pending"}</h2>
        <h2>Approval Remark: {certificates.approvalRemark}</h2>
        <h2>Txh : {certificates.txh}</h2>
      
    </div>
)}
</div>
</div>
  )
}

export default Status