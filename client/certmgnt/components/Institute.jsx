import React, { useState } from 'react';
import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import { FileTextOutlined,NumberOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input,message } from 'antd';
import Status from './status';
import Certificate from './certificate';
import Inav from './nav/Inav';
import '../Styles/Components.css'

const Getter = (props) => {
    const [aadhar, setAadhar] = useState()
    const [txh,settxh] = useState("")
    const [s1, sets1] = useState()
    const [s2, sets2] = useState()
    const [s3, sets3] = useState()
    const [s4, sets4] = useState()
    const [s5, sets5] = useState()
    const [s6, sets6] = useState()
    const [s7, sets7] = useState()
    const [s8, sets8] = useState()
    const [year, setyear] = useState()

    
    const [approvalRemark, setapprovalRemark] = useState("");
    const { contract } = useContract("0x4Dd5230179962A6Fb5E9B05A0226AeE870868247");
    const { data: certificates } = useContractRead(contract, "certificates")
    const { data: viewPendingRecords } = useContractRead(contract, "viewPendingRecords")
    const { mutateAsync: calcPendingRecords } = useContractWrite(contract, "calcPendingRecords")

    const { mutateAsync: approveCertificate } = useContractWrite(contract, "approveCertificate")
    const { mutateAsync: discardCertificate } = useContractWrite(contract, "discardCertificate")
    const { mutateAsync: viewCertificate } = useContractWrite(contract, "viewCertificate")
    const { mutateAsync: genCertificate } = useContractWrite(contract, "genCertificate")
    
   


    

    const getPendingApprovals = async () => {
        try {
            const data = await calcPendingRecords({ args: aadhar });
            console.info("contract call successs", data);
          } catch (err) {
            console.error("contract call failure", err);
          }
    }

    

    const handleApproveCertificate = async () => {
        try {
            const data = await approveCertificate({ args: [aadhar, approvalRemark ,txh] });
            console.info("contract call successs", data);
           /* const txhh= Object.keys(data).map((key) => data[key])
            settxh(txhh[0].transactionHash)
              console.log(txhh[0].transactionHash)
              
              console.log(txh)*/
              const txhh= Object.keys(data).map((key) => data[key])
              console.log(txhh[0].transactionHash)
              message.success(txhh[0].transactionHash)
              //alert()
              //settxh(txhh[0].transactionHash)
              //console.log(txh)
              
              
            
          } catch (err) {
            console.error("contract call failure", err);
          }
         /* const unsubscribe = contract.events.addTransactionListener(
            (event) => {
              console.log(event);
              //alert(event)
              settxhh(Object.keys(event).map((key) => event[key]))
              console.log(txhh)
              settxh(txhh[1])
            },
          );*/
        }
    const genCert = async()=>{
      try {
        const data = await genCertificate({ args: [aadhar,txh, s1, s2, s3, s4, s5, s6, s7, s8, year] })
        console.info("contract call successs", data);
        message.success("Certificte Generated")
        
      } catch (err) {
        console.error("contract call failure", err);
      }
    }
    
    const handleDeclineCertificate = async () => {
        try {
            const data = await discardCertificate({ args: [aadhar, approvalRemark] });
            console.info("contract call successs", data);
          } catch (err) {
            console.error("contract call failure", err);
          }
        
    }
    

    return (
      <div className='bg' style={{height:"100vh"}}>
        <div  className='student'>
          <Inav/>
            <div style={{paddingLeft:"20px"}}>
                <h2 >Pending Approvals:</h2>
                <br></br>
                <div>
                    <Button type="primary" htmlType="submit" className="login-form-button"  onClick={getPendingApprovals}>Next Pending Approval ID</Button>
                    {
                        viewPendingRecords && (
                            <h3>: {viewPendingRecords}</h3>
                        )
                    }
                </div>
                <br></br>
                <div >
                    <h2>Aadhar Id: </h2>
                    <br></br>
                    <Input
                    prefix={<NumberOutlined  className="site-form-item-icon" />}
                    placeholder="Enter Aadhar ID"
                    onChange={(e)=>{setAadhar(e.target.value)}}
                    />
                    
                </div>
                <br></br>
                <div>
                    <h2>Remark:</h2>
                    <br></br>
                    <Input
                    prefix={<FileTextOutlined className="site-form-item-icon" />}
                    placeholder="Enter Remark Here"
                    onChange={(e)=>{setapprovalRemark(e.target.value)}}
                    />
                    
                </div>
                <br></br>
                <div>
                    <h2>Year of Passing: </h2>
                    <br></br>
                    <Input
                    prefix={<FileTextOutlined className="site-form-item-icon" />}
                    placeholder="Enter Remark Here"
                    onChange={(e)=>{setyear(e.target.value)}}
                    />
                    
                </div>
                <br></br>
                <div className='student'>
                <div>
                    <h2>Semester 1: </h2>
                    <br></br>
                    <Input
                    prefix={<FileTextOutlined className="site-form-item-icon" />}
                    placeholder="Enter Remark Here"
                    onChange={(e)=>{sets1(e.target.value)}}
                    />
                    
                </div>
                <div>
                    <h2>Semester 2: </h2>
                    <br></br>
                    <Input
                    prefix={<FileTextOutlined className="site-form-item-icon" />}
                    placeholder="Enter Remark Here"
                    onChange={(e)=>{sets2(e.target.value)}}
                    />
                    
                </div>
                <div>
                    <h2>Semester 3: </h2>
                    <br></br>
                    <Input
                    prefix={<FileTextOutlined className="site-form-item-icon" />}
                    placeholder="Enter Remark Here"
                    onChange={(e)=>{sets3(e.target.value)}}
                    />
                    
                </div>
                <div>
                    <h2>Semester 4: </h2>
                    <br></br>
                    <Input
                    prefix={<FileTextOutlined className="site-form-item-icon" />}
                    placeholder="Enter Remark Here"
                    onChange={(e)=>{sets4(e.target.value)}}
                    />
                    
                </div>
                <div>
                    <h2>Semester 5: </h2>
                    <br></br>
                    <Input
                    prefix={<FileTextOutlined className="site-form-item-icon" />}
                    placeholder="Enter Remark Here"
                    onChange={(e)=>{sets5(e.target.value)}}
                    />
                    
                </div>
                <div>
                    <h2>Semester 6: </h2>
                    <br></br>
                    <Input
                    prefix={<FileTextOutlined className="site-form-item-icon" />}
                    placeholder="Enter Remark Here"
                    onChange={(e)=>{sets6(e.target.value)}}
                    />
                    
                </div>
                <div>
                    <h2>Semester 7: </h2>
                    <br></br>
                    <Input
                    prefix={<FileTextOutlined className="site-form-item-icon" />}
                    placeholder="Enter Remark Here"
                    onChange={(e)=>{sets7(e.target.value)}}
                    />
                    
                </div>
                <div>
                    <h2>Semester 8: </h2>
                    <br></br>
                    <Input
                    prefix={<FileTextOutlined className="site-form-item-icon" />}
                    placeholder="Enter Remark Here"
                    onChange={(e)=>{sets8(e.target.value)}}
                    />
                    
                </div>
                </div>
                <br></br>
                <div >
                    <Button style={{marginRight:"5vh"}} type="primary" htmlType="submit" className="login-form-button"  onClick={handleApproveCertificate}>Approve Certificate</Button>
                    <Button type="primary" htmlType="submit" className="login-form-button"  onClick={handleDeclineCertificate}>Decline Certificate</Button>
                </div>
                <br></br>
                <div>
                   <h2>Transactionhash:</h2>
                   <br></br>
                   <Input
                    prefix={<NumberOutlined className="site-form-item-icon" />}
                    placeholder="Enter Transaction Hash Here"
                    onChange={(e)=>{settxh(e.target.value)}}
                    />
                   
                </div>
                <br></br>
                <div>
                  <Button type="primary" htmlType="submit" className="login-form-button" onClick={genCert}>Generate certificate</Button>
                </div>
                  
                

            </div>
            
            </div>
        </div>
    )
   
}


export default Getter