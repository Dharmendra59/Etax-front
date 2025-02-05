import { FaHome, FaChevronRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./about-hero.css"

export default function Aboutheroa() {
  return (
    <section className="contact-heroa">
      <div className="heroa-overlay">
        <div className="heroa-content">
          <h1>About Us</h1>
          <div className="breadcrumb">
            <Link to="/" className="home-link">
              <FaHome className="home-icon" />
              Home
            </Link>
            <FaChevronRight className="chevron-icon" />
            <span className="current-page">About Us</span>
          </div>
        </div>
      </div>
    </section>
  )
}

