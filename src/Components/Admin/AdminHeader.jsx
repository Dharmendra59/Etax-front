"use client"

import { useState } from "react"
import { FaBars, FaSearch, FaBell, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa"
import "./AdminHeader.css"
import Sidebar from "./Sidebar"
import Image from "../../assets/wlogo.svg"

const AdminHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen)

  return (
    <>
      <header className="admin-header">
        <div className="header-left">
          <button className="menu-toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <div className="Alogo">
            <img
              src={Image}
              alt="ALogo"
            />
            <h4 className="ALogo">QFS ADMIN</h4>
          </div>
        </div>
        <div className="header-right">
          <div className="searc-bar">
            <input type="text" placeholder="Search..." />
            <button>
              <FaSearch />
            </button>
          </div>
          <div className="notifications">
            <FaBell />
            <span className="notification-badge">3</span>
          </div>
          <div className="user-profile">
            <button onClick={toggleProfile}>
              <FaUser />
            </button>
            <div className={`profile-dropdown ${isProfileOpen ? "open" : ""}`}>
              <a href="#profile">
                <FaUser /> Profile
              </a>
              <a href="#settings">
                <FaCog /> Settings
              </a>
              <a href="#logout">
                <FaSignOutAlt /> Logout
              </a>
            </div>
          </div>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  )
}

export default AdminHeader

