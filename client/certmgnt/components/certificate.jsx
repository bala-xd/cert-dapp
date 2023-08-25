import React from 'react'
import { useState } from 'react'
import { useContractRead,useContract } from '@thirdweb-dev/react'
import { Input,Button } from 'antd'
import '.././Styles/certstyle.css'
import '../Styles/Components.css'

const Certificate=()=>{
    const { contract } = useContract("0x4Dd5230179962A6Fb5E9B05A0226AeE870868247");
    const [aadhar, setAadhar] = useState()
    //const { data: certificates } = useContractRead(contract, "certificates", aadhar)
    const handleChange=async(e)=>{
        
        setAadhar(e.target.value)
      }
    const onclickprint=() => {
      window.focus();
      window.print();
      //printJS("certi", "html");
    }  
    const { data:Marks } = useContractRead(contract, "marklist", [aadhar])
    const { data: certificates } = useContractRead(contract, "certificates", [aadhar])
  return (
    <div className='bg' style={{height:"100vh"}}>
    <div>
      <div id="no-print" style={{paddingLeft:"20px",paddingRight:"1200px"}}>
        <br></br>
      <h2>Enter Aadhar ID :</h2>
      <br></br>
      <div>
        <Input type='text' onChange={handleChange}></Input>
        </div>
        </div>
        {certificates && certificates.name &&(
        <div id="certi">
        <div  id="cert">
          <div id="fname">
            <span>{certificates.name}</span>
            </div>
            <div id="course">
            <span>{certificates.degree} </span>
          </div>
            <div id="year">
            <span>{certificates.year}</span>
            </div>
            <div id="m1">
            <span>{Marks.m1}</span>
            </div>
            <div id="m2">
            <span>{Marks.m2}</span>
            </div>
            <div id="m3">
            <span>{Marks.m3}</span>
            </div>
            <div id="m4">
            <span>{Marks.m4}</span>
            </div>
            <div id="m5">
            <span>{Marks.m5}</span>
            </div>
            <div id="m6">
            <span>{Marks.m6}</span>
            </div>
            <div id="m7">
            <span>{Marks.m7}</span>
            </div>
            <div id="m8">
            <span>{Marks.m8}</span>
            </div>

          
          
          <div id="txh">
            <span>{certificates.txh}</span>
          </div>
          
        
        
        <Button
          className="btn"
          onClick={onclickprint}
          htmlType="submit"
        >
          Print
        </Button>
      </div>
      </div>)}
      
    </div>
    </div>
 )
  
}
        
      
  


export default Certificate