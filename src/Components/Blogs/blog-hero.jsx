import { FaHome, FaChevronRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./blog-hero.css"

export default function Aboutheroa() {
  return (
    <section className="contact-heroa">
      <div className="heroa-overlay">
        <div className="heroa-content">
          <h6 className="abouth1">Our Blogs</h6>
          <div className="breadcrumb">
            <Link to="/" className="home-link">
              <FaHome className="home-icon" />
              Home
            </Link>
            <FaChevronRight className="chevron-icon" />
            <span className="current-page">Blogs</span>
          </div>
        </div>
      </div>
    </section>
  )
}

