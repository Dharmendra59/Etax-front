import React from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import "./Registration.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="logo">QFS</h1>
        <p>Create your free Qfs account</p>
        <form className="register-form">
          <div className="input-group">
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Your Password" />
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree with the <a href="#!">Terms Of Service</a>.
            </label>
          </div>
          <button type="submit" className="register-btn">
            <span>Register</span>
          </button>
        </form>
        <p>Continue with social media</p>
        <div className="social-icons">
          <FaFacebookF className="icon" />
          <FaGoogle className="icon" />
          <FaTwitter className="icon" />
        </div>
        <p>
          Already have an account? <a href="#!">Login</a>.
        </p>
      </div>
    </div>
  );
};

export default Register;
