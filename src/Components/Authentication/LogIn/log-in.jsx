import React, { useState} from "react"
import { FaEnvelope, FaLock, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa"
import "./log-in.css"
import Image from "../../../assets/logo.svg";
import { ToastContainer } from "react-toastify" 
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../../../utils";


export default function LoginForm() {
  const [loginInfo, setLoginInfo] = React.useState({
      email: "",
      password: "",
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(name, value);
    const copyLoginInfo = {...loginInfo}
    copyLoginInfo[name] = value
    setLoginInfo(copyLoginInfo)
  }
  console.log('logInInfo', loginInfo)
  const handleSignup = async (e) => {
      e.preventDefault()
      console.log("Form submitted:", loginInfo)
      const { email, password} = loginInfo;
      if ( !email || !password) {
        return handleError("All Fields Required")
      }
      try {
        const url = "http://localhost:3000/auth/login"
        const response = await fetch(url, {
          method: "POST",
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginInfo),
        }); 
        const result = await response.json();
        // console.log(result)
        const { success, message, jwtToken, name, error, email } = result;
        if (success) {
          handleSuccess(message);
          localStorage.setItem('token', jwtToken);
          localStorage.setItem('LoggedInUser', name);
          localStorage.setItem('LoggedInUserEmail', email);
          setTimeout(() => {
            navigate('/admin/dashboard', { replace: true });
          }, 1000);
        }else if (error) {
          const details = error?.details[0].message;
          handleError(details);
        }else if (!success) {
          handleError(message);
        }
        console.log(result);
      } catch(err) {
          handleError(err);
      }
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
              name="email" 
              placeholder="Your Email" 
              className="form__input"
              value={loginInfo.email}
            />
            {/* <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            /> */}
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
            {/* <div className="remember-me">
              <input type="radio" id="remember" className="remember-me_checkbox" />
              <label htmlFor="remember" className="remember-me__label">
                Remember Me
              </label>
            </div> */}
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
