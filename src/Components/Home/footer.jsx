import React, { useState, useEffect } from 'react'
import { 
  FaArrowRight, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaArrowUp
} from 'react-icons/fa'
import Image from '../../assets/blogo.PNG'
import {Link} from 'react-router-dom'
import './footer.css'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)
//   const [email, setEmail] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Handle newsletter subscription
//     console.log('Subscribing email:', email)
//     setEmail('')
//   }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-about">
            <Link to="/" className="footer-logo">
              <img
                src={Image}
                alt="QFS Logo"
                width={"auto"}
                height={100}
                priority
              />
              
            </Link>
            <p className="about-text">
              We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.
            </p>
            <div className="newsletter">
              <h3>Subscribe Our Newsletter</h3>
              <form className="subscribe-form">
                <input
                  type="email"
                  placeholder="Your Email"
                  
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  // required
                />
                <button type="submit">
                  Subscribe <FaArrowRight />
                  
                </button>
              </form>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                {/* <li><Link href="/news">Update News</Link></li> */}
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/about">Testimonials</Link></li>
                <li><Link to="/terms">Terms Of Service</Link></li>
                <li><Link to="/privacy">Privacy policy</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                <li><Link to="/services">Tax Planning</Link></li>
                <li><Link to="/services">Personal Tax</Link></li>
                <li><Link to="/services">Insurance Tax</Link></li>
                <li><Link to="/services">Tax Audit Support</Link></li>
                <li><Link to="/services">Corporate Tax</Link></li>
                <li><Link to="/services">Tax Advisory</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Get In Touch</h3>
              <div className="contct-info">
                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <div>
                    <strong>Our Address</strong>
                    <p>96/18.,COLONEL GANJ KANPUR Kanpur Nagar Uttar Pradesh(208001).</p>
                  </div>
                </div>
                <div className="contact-item">
                  <FaPhone />
                  <div>
                    <strong>Call Us</strong>
                    <p><a href="tel:7905876982" style={{ color: 'inherit', textDecoration: 'none' }}>
                       7905876982
                    </a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <FaEnvelope />
                  <div>
                    <strong>Mail Us</strong>
                <a href="mailto:caamitgupta2023@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                <p>caamitgupta2023@gmail.com</p>
                </a>                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© Copyright 2025 <span className="highligt">Quick Financial Services</span> All Rights Reserved.</p>
          <div className="social-links">
            <Link href="#" aria-label="Facebook"><FaFacebookF /></Link>
            <Link href="#" aria-label="Twitter"><FaTwitter /></Link>
            <Link href="#" aria-label="LinkedIn"><FaLinkedinIn /></Link>
            <Link href="#" aria-label="YouTube"><FaYoutube /></Link>
          </div>
        </div>

        <button 
          className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp className='arr'/>
        </button>
      </div>
    </footer>
  )
}
