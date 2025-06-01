import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaComments, FaPaperPlane, FaFileUpload } from "react-icons/fa";
import "./get-form.css";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../utils";

export default function ContactForm() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append('name', name);
      formData.append('mobile', mobile);
      formData.append('email', email);
      formData.append('message', message);
      formData.append('file', file);

      try {
        const response = await fetch('http://localhost:3000/file/file_submit', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();

        if (response.ok) {
          // const uploadedFileUrl = result?.url || ''; // Replace 'url' with your backend key
          // if (uploadedFileUrl) {
            // Directly open the uploaded file in a new tab (view mode)
          //   window.open(uploadedFileUrl, '_blank');
          //   handleSuccess("File Uploaded & Viewable!");
          // } else {
          //   handleError('File uploaded, but URL not found.');
          // }
                      handleSuccess("File Uploaded Successfully");

          // Reset form fields
          setName('');
          setMobile('');
          setEmail('');
          setMessage('');
          setFile(null);
        } else {
          handleError(result.msg || 'Something went wrong');
        }
      } catch (error) {
        handleError('Something went wrong');
      }
    };

    return (
      <section className="contact-section">
        <div className="contact-cont">
          <div className="image-section">
            <img
              src="https://st.depositphotos.com/1594308/2118/i/450/depositphotos_21186915-stock-photo-business-partners-discussing-documents.jpg"
              alt="Team meeting"
              className="contact-image"
            />
          </div>

          <div className="form-section">
            <h2>Easy Tax</h2>
            <p>
              We are dedicated to going that extra mile to create the perfect tailored plan to serve you better
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="input-grup">
                  <FaUser className="input-icon" />
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
                <input type="email" placeholder='Your Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input-grup file-input-grup">
                <label className="file-label" htmlFor="file-upload">
                  <FaFileUpload className="file-icon" />
                  <input
                    type="file"
                    id="file-upload"
                    className="file-input"
                    required
                    onChange={(e) => setFile(e.target.files[0])}
                    accept="image/*, .pdf, .doc, .docx"
                  />
                  <span className="file-name">{file ? file.name : "Select File"}</span>
                </label>
              </div>

              <div className="input-grup">
                <FaComments className="input-icon comments-icon" />
                <textarea placeholder="Write Your Message" required rows={6} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <span>Submit</span>
                <FaPaperPlane className="send-icon" />
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </section>
    );
}
