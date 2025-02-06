import { FaEnvelope, FaLock, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa"
import "./log-in.css"

export default function LoginForm() {
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__header">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/login.PNG-pKdi3p3ryP0aI1NhFqyE7lEEldYU7h.png" 
            alt="Taxrio Logo" 
            className="login__logo" 
          />
          <h2 className="login__title">Login with your QFS account</h2>
        </div>

        <form className="login__form">
          <div className="form__group">
            <FaEnvelope className="form__icon" />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="form__input"
            />
          </div>

          <div className="form__group">
            <FaLock className="form__icon" />
            <input 
              type="password" 
              placeholder="Your Password" 
              className="form__input"
            />
          </div>

          <div className="form__options">
            <div className="remember-me">
              <input type="checkbox" id="remember" className="remember-me__checkbox" />
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
