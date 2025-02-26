import { FaHome, FaChevronRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./reg-hero.css"

export default function Regheror() {
  return (
    <section className="contact-heroa">
      <div className="heroa-overlay">
        <div className="heroa-content">
          <h6 className="regh1">Register</h6>
          <div className="breadcrumb">
            <Link to="/" className="home-link">
              <FaHome className="home-icon" />
              Home
            </Link>
            <FaChevronRight className="chevron-icon" />
            <span className="current-page">Register</span>
          </div>
        </div>
      </div>
    </section>
  )
}

