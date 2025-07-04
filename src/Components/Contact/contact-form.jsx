import { FaUser, FaEnvelope, FaEdit, FaComments, FaPaperPlane, FaPhone } from "react-icons/fa"
import "./contact-form.css"
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../utils";

export default function ContactForm() {

  const [name,setName] = useState('');
  const [mobile,setMobile] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://qfs-backend-vszx.onrender.com/contact-data/submit', { // Ensure this is correct
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, mobile, email, message }),
    });
    
    const result = await response.json();
    // console.log(result)
    if (response.ok) {
      // alert("Send Successfully");
      handleSuccess("Thanks For Contacts");
      setName('');
      setMobile('');
      setEmail('');
      setMessage('');

    } else {
      // alert('Error: ' + result.msg);
      handleError(result.msg);
    }
  }

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
"We’d love to hear from you! Get in touch with our team for expert advice, support, or any inquiries you may have."
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-roww">
              <div className="input-grup">
                <FaUser className="input-icon" />
                {/* <input type="text" placeholder="Your Name" required /> */}
                <input type="text" placeholder='Your Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="input-grup">
                <FaPhone className="input-icon" />
                <input
                  type="tel"
                  placeholder="Mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit mobile number"
                  maxLength={10}
                /> 
              </div>
            </div>

            <div className="input-grup">
              <FaEnvelope className="input-icon" />
              {/* <input type="email" placeholder="Your Email" required /> */}
              <input type="email" placeholder='Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-grup">
              <FaComments className="input-icon comments-icon" />
              <textarea placeholder="Write Your Message" required rows={6} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <FaPaperPlane className="send-icon" />
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  )
}

