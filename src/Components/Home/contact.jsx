import { FaArrowRight } from "react-icons/fa"
import {Link} from "react-router-dom"
import "./contact.css"

export default function hcontact() {
  return (
    <section className="hcontact">
      <div className="hcontact-overlay">
        <div className="hcontact-container">
          <h2 className="titele">
            Maximize Your Potential With
            <br />
            Expert Consultation
          </h2>
          <p className="description">
"Our experts provide tailored guidance to help you overcome challenges and unlock new opportunities for growth."
          </p>
          <Link to="/contact" className="hcontact-button">
            Contact Now
            <FaArrowRight className="arrow" />
          </Link>
        </div>
      </div>
    </section>
  )
}

