import { FaUsers, FaUserTie, FaArrowRight } from 'react-icons/fa'

import './about-us.css'

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image-wrapper">
          <div className="experience-badge">
            <span className="number">10</span>
            <span className="text">Years Of<br />Experience</span>
          </div>
          <div className="image-container">
            {/* <Img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about.PNG-vXOHMFdKo6mNTgfyb9caQmlHOTFX35.png"
              alt="Tax advisors in a meeting"
              width={600}
              height={600}
              className="main-image"
            /> */}
            <img src="https://live.themewild.com/taxrio/assets/img/about/02.jpg" alt="Tax advisors in a meeting" width={600} height={600} className="main-image" />
          </div>
          <div className="blue-accent"></div>
        </div>

        <div className="about-content">
          <span className="section-label">About Us</span>
          <h2 className="section-title">
            We Are Trusted And Best{' '}
            <span className="highlight">Tax Advisor</span> For You.
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
                <h3>Clients Satisfaction</h3>
                <p>"Discover what makes our clients choose us year after year for reliable service and complete peace of mind."</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <FaUserTie />
              </div>
              <div className="feature-content">
                <h3>Professional Team</h3>
                <p>"Our experienced team is dedicated to delivering the highest quality financial services."</p>
              </div>
            </div>
          </div>

          <button className="discover-btn">
            Discover More
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
