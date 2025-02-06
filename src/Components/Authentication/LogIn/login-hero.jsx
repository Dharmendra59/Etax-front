import { FaHome, FaChevronRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./login-hero.css"

export default function LogInherol() {
  return (
    <section className="contact-heroa">
      <div className="heroa-overlay">
        <div className="heroa-content">
          <h1>LogIn</h1>
          <div className="breadcrumb">
            <Link to="/" className="home-link">
              <FaHome className="home-icon" />
              Home
            </Link>
            <FaChevronRight className="chevron-icon" />
            <span className="current-page">LogIn</span>
          </div>
        </div>
      </div>
    </section>
  )
}

