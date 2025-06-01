import React, { useState } from 'react';
import { FaUser, FaFile, FaEdit, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
import { useUser } from '../context/user.context';
import { useNavigate } from 'react-router-dom';
import './Profile.css';  // Yaha aap apni AdminProfile.css ka use kar sakte hain

const Profile = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const [selectedOccupation, setSelectedOccupation] = useState(user.occupation || "Student");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const occupationOptions = ["Charterd Accountant","Student", "Working Professional", "Intern", "Freelancer"];

  const handleOccupationChange = (occupation) => {
    setSelectedOccupation(occupation);
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    logout();
    navigate("/");
  };

  return (
    <div className="profile-container">
      {/* sideb */}
      <div className="sideb">
        <h2 className="sideb-title">Account Center</h2>
        <nav className="sideb-nav">
          <div className="nav-item active">
            <FaUser className="nav-icon" />
            <span>Personal Details</span>
          </div>
          <div className="nav-item">
            <FaFile className="nav-icon" />
            <span>Filing Details</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="head">
          <button className="logout-btn" onClick={handleLogout}>
            <span>Logout</span>
            <FaSignOutAlt className="logout-icon" />
          </button>
        </div>

        <div className="profile-section">
          {/* Profile Header */}
          <div className="profile-head">
            <div className="avatar-container">
              <div className="avatar">
                {user.profilePicture ? (
                  <img src={user.profilePicture} alt="Profile" className="avatar-image" />
                ) : (
                  <span className="avatar-letter">{user.name ? user.name.charAt(0).toUpperCase() : "A"}</span>
                )}
                <div className="edit-icon">
                  <FaEdit />
                </div>
              </div>
            </div>
            <div className="profile-info">
              <h3 className="profile-name">{user.name}</h3>
              <p className="profile-email">{user.email}</p>
            </div>
          </div>

          {/* Profile Form */}
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
      </div>
    </div>
  );
};

export default Profile;
