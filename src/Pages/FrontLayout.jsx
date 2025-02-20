import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Home/Header'
import Footer from '../Components/Home/footer'


const FrontLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />

    </div>
  )
}

export default FrontLayout
