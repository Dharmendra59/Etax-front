import React from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";
import "./password.css";

const ForgotPassword = () => {
  return (
    <div className="forgot-container">
      <div className="forgot-card">
      <h1 className="logo">QFS</h1>
      <p>Reset your Qfs account password</p>
        <form className="forgot-form">
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Your Valid Email" />
          </div>
          <button type="submit" className="forgot-btn">
            <FaKey className="btn-icon" />
            <span>Send Reset Link</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
