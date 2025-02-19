import React from "react"
import { FaUser, FaEnvelope, FaLock, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa"
import "./registration.css"
import Image from "../../../assets/logo.svg";

export default function Register() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    agreeToTerms: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
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

          <div className="terms-group">
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
          </div>

          <button type="submit" className="register-button">
            Register
          </button>
        </form>

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

