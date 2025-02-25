import { FaTachometerAlt, FaUsers, FaUser,FaHome, FaChartBar, FaCog } from "react-icons/fa"
import "./Sidebar.css"

const Sidebar = ({ isOpen, toggleSidebar, onRouteChange }) => {
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-sidebar" onClick={toggleSidebar}>
          ×
        </button>
        <nav className="sidebar-nav">
          <a href="/admin/dashboard" onClick={() => onRouteChange("Dashboard")}>
            <FaTachometerAlt /> Dashboard
          </a>
          <a href="/" onClick={() => onRouteChange("Dashboard")}>
            <FaHome /> Home
          </a>
          <a href="/admin/admin-profile" onClick={() => onRouteChange("Users")}>
            <FaUser /> Profile
          </a>
          <a href="#" onClick={() => onRouteChange("Users")}>
            <FaUsers /> Users
          </a>
          <a href="/admin/file-data" onClick={() => onRouteChange("File Data")}>
            <FaChartBar /> File Data
          </a>
          <a href="#" onClick={() => onRouteChange("Settings")}>
            <FaCog /> Settings
          </a>
        </nav>
      </div>
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  )
}

export default Sidebar
