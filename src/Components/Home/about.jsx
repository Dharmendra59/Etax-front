import { FaUsers, FaUserTie, FaHeadset } from 'react-icons/fa'

import './about.css'

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image-wrapper">
          <div className="experience-badge">
            <span className="number">10</span>
            <span className="textex">Years Of<br />Experience</span>
          </div>
          <div className="image-container">
            {/* <Img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about.PNG-vXOHMFdKo6mNTgfyb9caQmlHOTFX35.png"
              alt="Tax advisors in a meeting"
              width={600}
              height={600}
              className="main-image"
            /> */}
            <img src="https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?cs=srgb&dl=pexels-rebrand-cities-581004-1367276.jpg&fm=jpg" alt="Tax advisors in a meeting" width={600} height={600} className="main-image" />
          </div>
          <div className="blue-accent"></div>
        </div>

        <div className="about-content">
          <span className="section-label">About Us</span>
          <h2 className="section-title">
          We Offer Popular Plans for{' '}
            <span className="highligh">Finance & Tax</span>.
          </h2>
          <p className="section-description">
"Choose from a range of plans designed to simplify your finances and maximize your savings."
          </p>

          <div className="features">
            <div className="feature-item">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <div className="feature-content">
                <h3>Our Mission</h3>
                <p>"Our mission is to empower individuals and businesses with reliable, efficient, and transparent financial services."</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <FaUserTie />
              </div>
              <div className="feature-content">
                <h3>Our Vision</h3>
                <p>"We aspire to redefine financial services with innovation, integrity, and a commitment to empowering every client we serve."</p>
              </div>
            </div>
          </div>

          {/* <button className="discover-btn">
            Discover More
            <FaArrowRight />
          </button> */}
          <div className="advisor">
            <div className="advisor-icon">
            
              <FaHeadset />
            </div>
            <div className="info">
            <h1>Get Free Professional Advisor</h1>
            <p>Ready To Help: <span><a href="tel:+917905876982" style={{ textDecoration: 'none', color: 'inherit' }}>+91 7905876982</a></span></p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
