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
        
        <div className="logos">
            <span>QFS</span>
        </div>

        <div className="hero-content">
          <span className="welcome-text">WELCOME TO QUICK FINANCIAL SUPPORT !</span>
          <h1>Providing Best<br />Financial Services</h1>
          <p>
            There are many variations of passages orem psum available but the majority have
            suffered alteration in some form by injected humour.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Get Started <FaArrowRight /></button>
            <button className="btn btn-secondary">Get In Touch <FaArrowRight /></button>
          </div>
          </div>

          <div className="sv-highlights">
            {/* <div className="sv-card">
              <div className="icon-circl">
                <FaCalculator />
              </div>
              <h3>Best Taxation sv</h3>
              <p>There are many variations words passages of Lorem Ipsum don't available majority</p>
            </div> */}

            <div className="sv-card">
              <div className="icon-circl">
                <FaUserTie />
              </div>
              <h3>Experts Team</h3>
              <p>There are many variations words passages of Lorem Ipsum don't available majority</p>
            </div>

            <div className="sv-card">
              <div className="icon-circl">
                <FaHeadset />
              </div>
              <h3>24/7 Support</h3>
              <p>There are many variations words passages of Lorem Ipsum don't available majority</p>
            </div>
          </div>
        
      </div>
    </section>
  )
}
