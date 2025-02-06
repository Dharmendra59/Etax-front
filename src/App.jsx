// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Home/Header';
import Footer from './Components/Home/footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import LogIn from './Pages/LogIn';
import Password from './Pages/Password';
import Register from './Pages/Registration';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/password" element={<Password />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
      
    </Router>
  );
};

export default App;
