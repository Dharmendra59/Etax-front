import React, { useState } from 'react';
import { FaUser, FaFile, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
import { useUser } from '../context/user.context';
import { usenavvigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const { user, logout } = useUser();
  const navvigate = usenavvigate();

  const [selectedOccupation, setSelectedOccupation] = useState(user.occupation || "Student");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("details"); // New state for active tab

  const occupationOptions = ["Chartered Accountant", "Student", "Working Professional", "Intern", "Freelancer"];

  const handleOccupationChange = (occupation) => {
    setSelectedOccupation(occupation);
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    logout();
    navvigate("/");
  };

  // Dummy uploaded files (replace with real API/context data)
  const uploadedFiles = [
    { id: 1, name: "Tax_Return_2023.pdf", date: "2024-05-10", size: "1.2 MB" },
    { id: 2, name: "Income_Proof.docx", date: "2024-05-15", size: "550 KB" },
    { id: 3, name: "PAN_Card_Copy.jpg", date: "2024-05-20", size: "300 KB" },
  ];

  return (
    <div className="profile-container">
      {/* Sidebar */}
      <div className="sideb">
        <h2 className="sideb-title">Account Center</h2>
        <navv className="sideb-navv">
          <div
            className={`navv-item ${activeTab === "details" ? "active" : ""}`}
            onClick={() => setActiveTab("details")}
          >
            <FaUser className="navv-icon" />
            <span>Personal Details</span>
          </div>
          <div
            className={`navv-item ${activeTab === "filing" ? "active" : ""}`}
            onClick={() => setActiveTab("filing")}
          >
            <FaFile className="navv-icon" />
            <span>Filing Details</span>
          </div>
        </navv>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="head">
          <button className="logout-btn" onClick={handleLogout}>
            <span>Logout</span>
            <FaSignOutAlt className="logout-icon" />
          </button>
        </div>

        {activeTab === "details" && (
          <div className="profile-section">
            <div className="profile-head">
              <div className="avatar-container">
                <div className="avatar">
                  {user.profilePicture ? (
                    <img src={user.profilePicture} alt="Profile" className="avatar-image" />
                  ) : (
                    <span className="avatar-letter">{user.name ? user.name.charAt(0).toUpperCase() : "A"}</span>
                  )}
                </div>
              </div>
              <div className="profile-info">
                <h3 className="profile-name">{user.name}</h3>
                <p className="profile-email">{user.email}</p>
              </div>
            </div>

            <div className="profile-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="role">Role</label>
                  <input type="text" id="role" value={user.role || "Administrator"} className="form-input" readOnly />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" value={user.email} className="form-input" readOnly />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" value={user.name} className="form-input" readOnly />
                </div>
                <div className="form-group">
                  <label htmlFor="occupation">Occupation</label>
                  <div className="dropdown-container">
                    <button className="dropdown-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                      <span>{selectedOccupation}</span>
                      <FaChevronDown className={`dropdown-arrow ${isDropdownOpen ? "open" : ""}`} />
                    </button>
                    {isDropdownOpen && (
                      <div className="dropdown-menu">
                        {occupationOptions.map((option) => (
                          <div
                            key={option}
                            className={`dropdown-item ${option === selectedOccupation ? "selected" : ""}`}
                            onClick={() => handleOccupationChange(option)}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" value={user.city || "N/A"} className="form-input" readOnly />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "filing" && (
          <div className="profile-section">
            <h3>Uploaded Files</h3>
            {uploadedFiles.length === 0 ? (
              <p>No files uploaded yet.</p>
            ) : (
              <ul className="files-list">
                {uploadedFiles.map((file) => (
                  <li key={file.id} className="file-item">
                    <strong>{file.name}</strong> <br />
                    Date: {file.date}, Size: {file.size}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
