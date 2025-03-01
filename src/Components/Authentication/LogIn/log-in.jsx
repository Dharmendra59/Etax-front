import React, { useState } from "react";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import "./log-in.css";
import Image from "../../../assets/logo.svg";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../../../utils";
import { auth, provider, signInWithPopup } from '../../../firebase';

export default function LoginForm() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("All Fields Required");
    }
    try {
      const url = "https://etax-back-1.onrender.com/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      const { success, message, token, error } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", token);
        setTimeout(() => {
          window.location.href = "/admin/dashboard";
        });
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
    }
  };


  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      handleSuccess(`Welcome ${user.displayName}`);
      navigate("/");
    } catch (error) {
      console.error("Error during Google login", error);
    }
  };
  
  
  

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__header">
          <img src={Image} alt="Logo" className="login__logo" />
          <h2 className="login__title">Login with your QFS account</h2>
        </div>

        <form className="login__form" onSubmit={handleSignup}>
          <div className="form__group">
            <FaEnvelope className="form__icon" />
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Your Email"
              className="form__input"
              value={loginInfo.email}
            />
          </div>

          <div className="form__group">
            <FaLock className="form__icon" />
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Your Password"
              className="form__input"
              value={loginInfo.password}
            />
          </div>

          <div className="form__options">
            <a href="/password" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="login__button">
            Login
          </button>
        </form>
        <ToastContainer />
        <div className="social-login">
          <div className="social-login__divider">
            <span className="social-login__text">Continue with Google</span>
          </div>

          <div className="social-login__buttons">
            <button
              className="social-button social-button--google"
              onClick={handleGoogleLogin}
            >
              <FaGoogle />
            </button>
          </div>
        </div>

        <p className="register-link">
          Don't have an account?{" "}
          <a href="/register" className="register-link__anchor">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
