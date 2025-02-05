import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Header from '../Components/Home/Header'
import About from '../Components/Home/about'
import Services from '../Components/Home/service'
import CaseStudies from '../Components/Home/case-study'
import Ratio from '../Components/Home/ratio'
import Video from '../Components/Home/video'
import ChooseUs from '../Components/Home/chooseUs'
import Contact from '../Components/Home/contact'
import Testimonials from '../Components/Home/testimonal'
import Footer from '../Components/Home/footer'

import Hero from '../Components/Home/Hero'

const Home = () => {
  return (
    <div>
      
      <Hero />
      <About />
      <Services />
      <Ratio />
      <CaseStudies />
      <Video />
      <ChooseUs />
      
      <Contact />
      <Testimonials />  
      
      

      
    </div>
  )
}

export default Home
