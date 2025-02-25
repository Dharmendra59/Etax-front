import React from "react"
import { FaUser, FaEnvelope, FaLock, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa"
import "./registration.css"
import Image from "../../../assets/logo.svg";
import { handleError, handleSuccess } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function Register() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    const { name, email, password} = formData;
    if (!name || !email || !password) {
      return handleError("All Fields Required")
    }
    try {
      const url = "http://localhost:3000/auth/register"
      const response = await fetch(url, {
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      }); 
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/login')
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
    <div className="register-container">
      <div className="register-box">
        <div className="reglogo">
          <img
            src={Image}
            alt=" Logo"
            className="login__logo"

          />
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
            />
          </div>

          {/* <div className="terms-group">
            <input
              type="radio"
              name="agreeToTerms"
              id="terms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="terms">
              I agree with the <a href="/terms">Terms Of Service</a>
            </label>
          </div> */}

          <button type="submit" className="register-button">
            Register
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

        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  )
}

