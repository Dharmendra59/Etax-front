// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Home/Header';
import Footer from './Components/Home/footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';

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
        </Routes>
        <Footer />
      </div>
      
    </Router>
  );
};

export default App;
