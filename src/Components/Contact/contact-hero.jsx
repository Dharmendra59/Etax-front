import { FaHome, FaChevronRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./contact-hero.css"

export default function Contactheroc() {
  return (
    <section className="contact-heroc">
      <div className="heroc-overlay">
        <div className="heroc-content">
          <h6 className="contacth1">Contact Us</h6>
          <div className="breadcrumb">
            <Link to="/" className="home-link">
              <FaHome className="home-icon" />
              Home
            </Link>
            <FaChevronRight className="chevron-icon" />
            <span className="current-page">Contact Us</span>
          </div>
        </div>
      </div>
    </section>
  )
}

