import { FaHome, FaChevronRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./services-hero.css"

export default function Servicesheros() {
  return (
    <section className="contact-heros">
      <div className="heros-overlay">
        <div className="heros-content">
          <h6 className="serviceh1">Our Services</h6>
          <div className="breadcrumb">
            <Link to="/" className="home-link">
              <FaHome className="home-icon" />
              Home
            </Link>
            <FaChevronRight className="chevron-icon" />
            <span className="current-page">Services</span>
          </div>
        </div>
      </div>
    </section>
  )
}

