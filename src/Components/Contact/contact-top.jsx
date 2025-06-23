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
                    <p><a href="tel:7905876982" style={{ color: 'inherit', textDecoration: 'none' }}>
                       7905876982
                    </a></p>        </div>

        <div className="info-card">
          <div className="icon-circle">
            <FaEnvelope className="info-icon" />
          </div>
          <h3>Email Us</h3>
                <a href="mailto:caamitgupta2023@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                <p>caamitgupta2023@gmail.com</p>
                </a>        </div>

        <div className="info-card">
          <div className="icon-circle">
            <FaClock className="info-icon" />
          </div>
          <h3>Open Time</h3>
          <p>Mon - Sat (11.00AM - 07.00PM)</p>
        </div>
      </div>
    </section>
  )
}
