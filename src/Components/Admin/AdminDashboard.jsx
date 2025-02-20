import React, { useState } from 'react';
import { FaHome, FaChartLine, FaRegFileAlt, FaUsers, FaCog, FaBars } from 'react-icons/fa';
import './AdminDashboard.css';

const Dashboard = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <div className="dashboard-container">
      <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
        <div className="logo">GST</div>
        <ul className="nav-links">
          <li className="nav-item">
            <FaHome className="icon" />
            <span>Home</span>
          </li>
          <li className="nav-item">
            <FaChartLine className="icon" />
            <span>Analytics</span>
          </li>
          <li className="nav-item">
            <FaRegFileAlt className="icon" />
            <span>Reports</span>
          </li>
          <li className="nav-item">
            <FaUsers className="icon" />
            <span>Users</span>
          </li>
          <li className="nav-item">
            <FaCog className="icon" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <h1>Welcome to the GST Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
