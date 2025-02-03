import { FaArrowRight } from "react-icons/fa"
import {Link} from "react-router-dom"
import "./contact.css"

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-overlay">
        <div className="contact-container">
          <h2 className="title">
            Maximize Your Potential With
            <br />
            Expert Consultation
          </h2>
          <p className="description">
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout.
          </p>
          <Link href="/contact" className="contact-button">
            Contact Now
            <FaArrowRight className="arrow" />
          </Link>
        </div>
      </div>
    </section>
  )
}

