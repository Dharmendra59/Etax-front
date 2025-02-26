import { useState } from "react"
import { FaBars, FaSearch, FaBell, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa"
import "./AdminHeader.css"
import Sidebar from "./Sidebar"
import Image from "../../assets/wlogo.svg"

const AdminHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [activeRoute, setActiveRoute] = useState("ADMIN") // Default to 'Dashboard'

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen)

  const handleRouteChange = (route) => {
    setActiveRoute(route)
  }
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('LoggedInUser');
    window.location.href = '/login';
  };
  const name = localStorage.getItem('LoggedInUser') || 'Admin';

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
            <h4 className="ALogo">
              QFS <span className="Atext">{activeRoute}</span>
            </h4>
          </div>
        </div>
        <div className="header-right">
          
          <div className="notifications">
            <FaBell />
            <span className="notification-badge">3</span>
          </div>
          <div className="user-profile admin-profile__avatar">
            <button onClick={toggleProfile}>
              {name.charAt(0).toUpperCase()}
            </button>
            
            <div className={`profile-dropdown ${isProfileOpen ? "open" : ""}`}>
              <a href="/admin/admin-profile">
                <FaUser /> Profile
              </a>
              <a href="#settings">
                <FaCog /> Settings
              </a>
              <a href="#logout" onClick={handleLogout}>
                <FaSignOutAlt /> Logout
              </a>
            </div>
          </div>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} onRouteChange={handleRouteChange} />
    </>
  )
}

export default AdminHeader
