import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaComments, FaPaperPlane, FaFileUpload } from "react-icons/fa";
import "./get-form.css";

export default function ContactForm() {
  const [fileName, setFileName] = useState(""); // State to hold the file name

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      setFileName(file.name); // Set the file name in state
    }
  };

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
          <h2>Easy Tax</h2>
          <p>
          We are dedicated to going that extra mile to create the perfect tailored plan to serve you better
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
                />
              </div>
            </div>

            <div className="input-grup">
              <FaEnvelope className="input-icon" />
              <input type="email" placeholder="Your Email" required />
            </div>

            <div className="input-grup file-input-grup">
              <label className="file-label" htmlFor="file-upload">
                <FaFileUpload className="file-icon" />
                <input
                  type="file"
                  id="file-upload"
                  className="file-input"
                  required
                  accept="image/*, .pdf, .doc, .docx" // File types you want to allow
                  onChange={handleFileChange} // Handle the file input change event
                />
                <span className="file-name">{fileName || "Select File"}</span> {/* Display file name or default text */}
              </label>
            </div>

            <div className="input-grup">
              <FaComments className="input-icon comments-icon" />
              <textarea placeholder="Your Query" required rows={6}></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <span>Submit</span>
              <FaPaperPlane className="send-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
