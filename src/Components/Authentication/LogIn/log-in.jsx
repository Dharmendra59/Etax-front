import React, { useState} from "react"
import { FaEnvelope, FaLock, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa"
import "./log-in.css"
import Image from "../../../assets/logo.svg";
import { ToastContainer } from "react-toastify" 

export default function LoginForm() {
  const [loginInfo, setLoginInfo] = React.useState({
    name: "",
    email: "",
    password: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(name, value);
    const copyLoginInfo = {...loginInfo}
    copyLoginInfo[name] = value
    setLoginInfo(copyLoginInfo)
  }
  console.log('logInInfo', loginInfo)
  const handleSignup = (e)=>{
    e.preventDefault();
  }
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__header">
          <img 
            src={Image}
            alt=" Logo" 
            className="login__logo" 
            
          />
          <h2 className="login__title">Login with your QFS account</h2>
        </div>

        <form className="login__form" onSubmit={handleSignup}>
          <div className="form__group">
            <FaEnvelope className="form__icon" />
            <input
              onChange={handleChange} 
              type="email" 
              placeholder="Your Email" 
              className="form__input"
            />
          </div>

          <div className="form__group">
            <FaLock className="form__icon" />
            <input
              onChange={handleChange} 
              type="password" 
              placeholder="Your Password" 
              className="form__input"
            />
          </div>

          <div className="form__options">
            <div className="remember-me">
              <input type="radio" id="remember" className="remember-me_checkbox" />
              <label htmlFor="remember" className="remember-me__label">
                Remember Me
              </label>
            </div>
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
            <span className="social-login__text">Continue with social media</span>
          </div>

          <div className="social-login__buttons">
            <button className="social-button social-button--facebook">
              <FaFacebookF />
            </button>
            <button className="social-button social-button--google">
              <FaGoogle />
            </button>
            <button className="social-button social-button--twitter">
              <FaTwitter />
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
  )
}
