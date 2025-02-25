import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const checkAuth = ({ isAuthenticated, user, children }) => {
      const Location = useLocation();
      if(!isAuthenticated){
            return <Navigate to="/login" />
      }

  return (
    <div>
       
    </div>
  )
}

export default checkAuth
