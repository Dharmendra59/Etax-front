import { 
  FaArrowLeft, 
  FaArrowRight,
  FaCalculator,
  FaUserTie,
  FaHeadset
} from 'react-icons/fa'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <button className="nav-arrow left" aria-label="Previous slide">
          <FaArrowLeft />
        </button>
        <button className="nav-arrow right" aria-label="Next slide">
          <FaArrowRight />
        </button>
        <div className="logos">
            <span>E-TAX</span>
        </div>

        <div className="hero-content">
          <span className="welcome-text">WELCOME TO E-TAX!</span>
          <h1>Maximize Your Tax<br />Savings With Us</h1>
          <p>
            There are many variations of passages orem psum available but the majority have
            suffered alteration in some form by injected humour.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">About More</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
          </div>

          <div className="sv-highlights">
            <div className="sv-card">
              <div className="icon-circle">
                <FaCalculator />
              </div>
              <h3>Best Taxation sv</h3>
              <p>It is a long established fact that a reader will be distracted.</p>
            </div>

            <div className="sv-card">
              <div className="icon-circle">
                <FaUserTie />
              </div>
              <h3>Experts Team</h3>
              <p>It is a long established fact that a reader will be distracted.</p>
            </div>

            <div className="sv-card">
              <div className="icon-circle">
                <FaHeadset />
              </div>
              <h3>24/7 Support</h3>
              <p>It is a long established fact that a reader will be distracted.</p>
            </div>
          </div>
        
      </div>
    </section>
  )
}
