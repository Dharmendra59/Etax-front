import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa"
import "./contact-top.css"

export default function ContactInfo() {
  return (
    <section className="contact-info">
      <div className="contact-container">
        <div className="info-card">
          <div className="icon-circle">
            <FaMapMarkerAlt className="info-icon" />
          </div>
          <h3>Office Address</h3>
          <p>96/18.,COLONEL GANJ KANPUR Kanpur Nagar Uttar Pradesh(208001).</p>
        </div>

        <div className="info-card">
          <div className="icon-circle">
            <FaPhone className="info-icon" />
          </div>
          <h3>Call Us</h3>
          <p>7905876982</p>
        </div>

        <div className="info-card">
          <div className="icon-circle">
            <FaEnvelope className="info-icon" />
          </div>
          <h3>Email Us</h3>
          <p>itaxshikha7@gmail.com</p>
        </div>

        <div className="info-card">
          <div className="icon-circle">
            <FaClock className="info-icon" />
          </div>
          <h3>Open Time</h3>
          <p>Mon - Sat (10.00AM - 05.30PM)</p>
        </div>
      </div>
    </section>
  )
}
