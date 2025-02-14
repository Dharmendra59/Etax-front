import { FaHome, FaChevronRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./get-hero.css"

export default function Contactheroc() {
  return (
    <section className="contact-heroc">
      <div className="heroc-overlay">
        <div className="heroc-content">
          <h1>Tax Filing</h1>
          <div className="breadcrumb">
            <Link to="/" className="home-link">
              <FaHome className="home-icon" />
              Home
            </Link>
            <FaChevronRight className="chevron-icon" />
            <span className="current-page">Tax-Filing</span>
          </div>
        </div>
      </div>
    </section>
  )
}

