import { FaUser, FaEnvelope, FaEdit, FaComments, FaPaperPlane, FaPhone } from "react-icons/fa"
import "./contact-form.css"

export default function ContactForm() {
  return (
    <section className="contact-section">
      <div className="contact-cont">
        <div className="image-section">
          <img
            src="https://live.themewild.com/taxrio/assets/img/contact/01.jpg"
            alt="Team meeting"
            className="contact-image"
          />
        </div>

        <div className="form-section">
          <h2>Get In Touch</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page randomised
            words which don't look even slightly when looking at its layout.
          </p>

          <form className="contact-form">
            <div className="form-row">
              <div className="input-grup">
                <FaUser className="input-icon" />
                <input type="text" placeholder="Your Name" required />
              </div>

              <div className="input-grup">
                <FaPhone className="input-icon" />
                <input
                  type="tel"
                  placeholder="Mobile"
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit mobile number"
                  maxLength={10}
                />              </div>
            </div>

            <div className="input-grup">
              <FaEnvelope className="input-icon" />
              <input type="email" placeholder="Your Email" required />
            </div>

            <div className="input-grup">
              <FaComments className="input-icon comments-icon" />
              <textarea placeholder="Write Your Message" required rows={6}></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <FaPaperPlane className="send-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

