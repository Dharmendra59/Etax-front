import React from "react";
import { useUser } from "../context/user.context";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Profile() {
  const { user, logout } = useUser();
  const navigate = useNavigate(); // Initialize navigation

  const handleClick = () => {
    localStorage.removeItem("token");
    logout();
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.role}</p>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}
