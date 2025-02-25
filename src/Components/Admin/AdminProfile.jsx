import React from 'react';
import './AdminProfile.css';

const AdminProfile = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('LoggedInUser');
    window.location.href = '/login';
  };

  const name = localStorage.getItem('LoggedInUser') || 'Admin';
  const email = localStorage.getItem('LoggedInUserEmail') || 'Admin';
//   localStorage.setItem('LoggedInUserEmail', email);

//   const email = 'admin@example.com'; // Ideally this should come from an API or context

  return (
    <div className="admin-profile">
      <div className="admin-profile__card">
        <div className="admin-profile__avatar">
          {name.charAt(0).toUpperCase()}
        </div>
        <h2 className="admin-profile__title">Admin Profile</h2>
        <div className="admin-profile__info">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
        <button className="admin-profile__logout" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default AdminProfile;
