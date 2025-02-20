// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontLayout from './Pages/FrontLayout';
import Home from './Pages/Home';
import Header from './Components/Home/Header';
import Footer from './Components/Home/footer';
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



const App = () => {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        
        <Routes>
          <Route path="/" element={<FrontLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/password" element={<Password />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/get-started" element={<Get />} />
          </Route>
          
          <Route path="/admin" element={<AdminLayout />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='file-data' element={<FileData />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
        
      </div>

      
    </Router>
  );
};

export default App;
