import { NavLink } from "react-router-dom"
import { FaTachometerAlt, FaUsers, FaUser, FaHome, FaChartBar, FaCog } from "react-icons/fa"
import "./Sidebar.css"

const Sidebar = ({ isOpen, toggleSidebar, onRouteChange }) => {
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-sidebar" onClick={toggleSidebar}>
          ×
        </button>
        <nav className="sidebar-nav">
          <NavLink to="/admin/dashboard" onClick={() => onRouteChange("Dashboard")}>
            <FaTachometerAlt /> Dashboard
          </NavLink>
          <NavLink to="/" onClick={() => onRouteChange("Dashboard")}>
            <FaHome /> Home
          </NavLink>
          <NavLink to="/admin/admin-profile" onClick={() => onRouteChange("Users")}>
            <FaUser /> Profile
          </NavLink>
          <NavLink to="#" onClick={() => onRouteChange("Users")}>
            <FaUsers /> Users
          </NavLink>
          <NavLink to="/admin/file-data" onClick={() => onRouteChange("File Data")}>
            <FaChartBar /> File Data
          </NavLink>
          <NavLink to="/admin/contact-data" onClick={() => onRouteChange("File Data")}>
            <FaChartBar /> Contact Data
          </NavLink>
          <NavLink to="#" onClick={() => onRouteChange("Settings")}>
            <FaCog /> Settings
          </NavLink>
        </nav>
      </div>
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  )
}

export default Sidebar
