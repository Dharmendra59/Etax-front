import React from 'react';
import './AdminProfile.css';
import { useUser } from '../../context/user.context';
import { useNavigate } from 'react-router-dom';

const AdminProfile = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("token");
    logout();
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <div className="admin-profile">
      <div className="admin-profile__card">
        {/* Profile Picture */}
        {/* <div className="admin-profile__avatar">
          {user.profilePicture ? (
            <img src={user.profilePicture} alt="Profile" className="admin-profile__image" />
          ) : (
            user.name ? user.name.charAt(0).toUpperCase() : 'A'
          )}
        </div> */}

        <h2 className="admin-profile__title">Admin Profile</h2>

        <div className="admin-profile__info">
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {/* <p><strong>Phone:</strong> {user.phone}</p> */}


        </div>

        <button className="admin-profile__logout" onClick={handleClick}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminProfile;
