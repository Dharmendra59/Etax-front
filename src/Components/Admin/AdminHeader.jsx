import { useState } from "react";
import { FaBars, FaBell, FaUser, FaCog, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./AdminHeader.css";
import Sidebar from "./Sidebar";
import Image from "../../assets/wlogo.svg";

const AdminHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState("ADMIN");

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  const handleRouteChange = (route) => {
    setActiveRoute(route);
    setIsProfileOpen(false); // Close profile dropdown on route change
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('LoggedInUser');
    window.location.href = '/login';
  };

  return (
    <>
      <header className="admin-header">
        <div className="header-left">
          <button className="menu-toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <div className="Alogo">
            <img src={Image} alt="ALogo" />
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
          <div className="user-profile">
            <button onClick={toggleProfile}>
              <FaUser />
            </button>
            <div className={`profile-dropdown ${isProfileOpen ? "open" : ""}`}>
              <NavLink to="/admin/dashboard" onClick={() => setIsProfileOpen(false)}>
                <FaTachometerAlt /> Dashboard
              </NavLink>
              <NavLink to="/admin/admin-profile" onClick={() => setIsProfileOpen(false)}>
                <FaUser /> Profile
              </NavLink>
              <NavLink to="/admin/settings" onClick={() => setIsProfileOpen(false)}>
                <FaCog /> Settings
              </NavLink>
              <NavLink to="/login" onClick={handleLogout}>
                <FaSignOutAlt /> Logout
              </NavLink>
            </div>
          </div>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} onRouteChange={handleRouteChange} />
    </>
  );
};

export default AdminHeader;
