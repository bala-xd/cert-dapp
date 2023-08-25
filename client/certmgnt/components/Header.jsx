import React from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";
import '../Styles/Components.css'
const Header = () => {
  return (
    <div className='hbg'>
      <div className='header'>
      <div style={{color:"black",paddingLeft:"520px"}}>
        <h2>Certificate Management using Blockchain</h2>
        </div>
        <div className='wallet'>
      <ConnectWallet/>
      </div>
        
        
        
      </div>
        </div>
  )
}

export default Header