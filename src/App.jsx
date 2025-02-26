// src/App.jsx
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import FrontLayout from './Pages/FrontLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import LogIn from './Pages/LogIn';
import Password from './Pages/Password';
import Register from './Pages/Registration';
import Blogs from './Pages/Blogs';
import Get from './Pages/GetStarted';
//admin routs..
import AdminLayout from './Components/Admin/AdminLayout';
import Dashboard from './Components/Admin/AdminDashboard';
import FileData from './Components/Admin/AdminFileData';
import AdminProfile from './Components/Admin/AdminProfile';
import ContactData from './Components/Admin/AdminContactUsData'
import axios from 'axios';







const App = () => {
  
  useEffect(()=>{
    const fetchUser = async ()=>{
      try{
        const response = await axios.get("http://localhost:3000/auth/authCheck",{ withCredentials : true,})
        console.log("response",response)
      }catch(error){

      }
    }
  },[])

  return (
    
      <div>
        
        <Routes>
          <Route path="/" element={<FrontLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<LogIn />} />
          <Route path="password" element={<Password />} />
          <Route path="register" element={<Register />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="get-started" element={<Get />} />
          </Route>
          
          <Route path="/admin" element={<AdminLayout />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='file-data' element={<FileData />} />
            <Route path='admin-profile' element={<AdminProfile />} />
            <Route path='contact-data' element={<ContactData />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
        
      </div>

      
   
  );
};

export default App;
