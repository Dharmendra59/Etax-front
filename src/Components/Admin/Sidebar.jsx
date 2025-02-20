import { FaTachometerAlt, FaUsers, FaChartBar, FaCog } from "react-icons/fa"
import "./Sidebar.css"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-sidebar" onClick={toggleSidebar}>
          ×
        </button>
        <nav className="sidebar-nav">
          <a href="/admin/dashboard">
            <FaTachometerAlt /> Dashboard
          </a>
          <a href="">
            <FaUsers /> Users
          </a>
          <a href="/admin/file-data">
            <FaChartBar /> File Data
          </a>
          <a href="">
            <FaCog /> Settings
          </a>
        </nav>
      </div>
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  )
}

export default Sidebar

