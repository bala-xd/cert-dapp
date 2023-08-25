import React from 'react'
import {useAddress,useContract } from '@thirdweb-dev/react'
import Student from '../components/student'
import Status from '../components/status';
import Getter from '../components/Institute';
import Certificate from '../components/certificate';
import { Routes,Route } from 'react-router-dom';
import Recruiter from '../components/Recruiter';
import '../Styles/Components.css'
import './App.css'
import Login from '../components/Login'
import Header from '../components/Header';
import AddStudent from '../components/AddStudent';
import AddRecruiter from '../components/AddRecruiter';

export default function App() {
  const address = useAddress(); 
  const { contract } = useContract("0x4Dd5230179962A6Fb5E9B05A0226AeE870868247");
  
  return (
    <div>
      
      
     <Header/>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Student' element={<Student />}></Route>
        <Route path='/Status' element={<Status />}></Route>
        <Route path='/Institute' element={<Getter />}></Route>
        <Route path='/View' element={<Certificate/>}></Route>
        <Route path='/Verify' element={<Recruiter/>}></Route>
        <Route path="/AddStudent" element={<AddStudent/>}></Route>
        <Route path="/AddRecruiter" element={<AddRecruiter/>}></Route>
        
        </Routes>
        
      
      
      
      
      
      
      
    </div>
    
  )
}


