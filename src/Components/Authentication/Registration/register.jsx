import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import "./registration.css";
import Image from "../../../assets/logo.svg";
import { handleError, handleSuccess } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    const { name, email, password } = formData;
    if (!name || !email || !password) {
      return handleError("All Fields Required");
    }

    try {
      const { data } = await axios.post("https://etax-back-1.onrender.com/auth/register", formData);
      console.log("Response:", data);

      if (data?.success) {
        handleSuccess(data.message);

        if (data.token) {
          localStorage.setItem("token", data.token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
          console.log("Token stored:", data.token);
        }

        setTimeout(() => navigate("/login"), 1000);
      } else {
        handleError(data.error?.details?.[0]?.message || data.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      handleError(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="reglogo">
          <img src={Image} alt="Logo" className="login__logo" />
        </div>

        <h1 className="text">Create a free QFS account</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form__input"
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="register-button">Register</button>
        </form>

        {/* <div className="social-login">
          <div className="social-login__divider">
            <span className="social-login__text">Continue with social media</span>
          </div>

          <div className="social-login__buttons">
            <button className="social-button social-button--facebook"><FaFacebookF /></button>
            <button className="social-button social-button--google"><FaGoogle /></button>
            <button className="social-button social-button--twitter"><FaTwitter /></button>
          </div>
        </div> */}

        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}