import { FaUsers, FaUserTie, FaHeadset } from 'react-icons/fa'

import './about.css'

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image-wrapper">
          <div className="experience-badge">
            <span className="number">30</span>
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
                <h3>Our Mission</h3>
                <p>There are many variations words passages of Lorem Ipsum don't available, but the majority.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <FaUserTie />
              </div>
              <div className="feature-content">
                <h3>Our Vision</h3>
                <p>There are many variations words passages of Lorem Ipsum don't available, but the majority.</p>
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
            <p>Ready To Help: <span>+91 7905876982</span></p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
