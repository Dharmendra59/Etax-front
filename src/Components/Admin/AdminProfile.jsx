import React from 'react';
import './AdminProfile.css';

const AdminProfile = ({ user }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <div className="admin-profile">
      <div className="admin-profile__card">
        {/* Profile Picture */}
        <div className="admin-profile__avatar">
          {user.profilePicture ? (
            <img src={user.profilePicture} alt="Profile" className="admin-profile__image" />
          ) : (
            user.name ? user.name.charAt(0).toUpperCase() : 'A'
          )}
        </div>

        <h2 className="admin-profile__title">Admin Profile</h2>

        <div className="admin-profile__info">
          <p><strong>Role:</strong> {user.role || 'Administrator'}</p>
          <p><strong>Name:</strong> {user.name || 'Admin'}</p>
          <p><strong>Email:</strong> {user.email || 'admin@example.com'}</p>
          {/* <p><strong>Phone:</strong> {user.phone || 'N/A'}</p> */}
        </div>

        <button className="admin-profile__logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminProfile;
