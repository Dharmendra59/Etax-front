import { FaUsers, FaUserTie, FaArrowRight } from 'react-icons/fa'

import './about-us.css'

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image-wrapper">
          <div className="experience-badge">
            <span className="number">30</span>
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
            There are many variations of passages available but the majority have
            suffered alteration in some form, by injected humour, or randomised words
            which don't look even slightly believable.
          </p>

          <div className="features">
            <div className="feature-item">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <div className="feature-content">
                <h3>Clients Satisfaction</h3>
                <p>Take a look at our round up of the best shows.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <FaUserTie />
              </div>
              <div className="feature-content">
                <h3>Professional Team</h3>
                <p>It has survived words which not only five centuries.</p>
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
