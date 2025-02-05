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
import Image from '../../assets/wlogo.svg'
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
            <Link href="/" className="footer-logo">
              <img
                src={Image}
                alt="Taxrio Logo"
                width={60}
                height={50}
                priority
              />
              <h1>E-<span>TAX</span></h1>
            </Link>
            <p className="about-text">
              We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.
            </p>
            <div className="newsletter">
              <h3>Subscribe Our Newsletter</h3>
              <form onSubmit="#" className="subscribe-form">
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
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/news">Update News</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/testimonials">Testimonials</Link></li>
                <li><Link href="/terms">Terms Of Service</Link></li>
                <li><Link href="/privacy">Privacy policy</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                <li><Link href="/services/tax-planning">Tax Planning</Link></li>
                <li><Link href="/services/personal-tax">Personal Tax</Link></li>
                <li><Link href="/services/insurance-tax">Insurance Tax</Link></li>
                <li><Link href="/services/tax-audit">Tax Audit Support</Link></li>
                <li><Link href="/services/corporate-tax">Corporate Tax</Link></li>
                <li><Link href="/services/tax-advisory">Tax Advisory</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Get In Touch</h3>
              <div className="contct-info">
                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <div>
                    <strong>Our Address</strong>
                    <p>25/B Milford Road, New York, USA</p>
                  </div>
                </div>
                <div className="contact-item">
                  <FaPhone />
                  <div>
                    <strong>Call Us</strong>
                    <p>+2 123 654 7898</p>
                  </div>
                </div>
                <div className="contact-item">
                  <FaEnvelope />
                  <div>
                    <strong>Mail Us</strong>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© Copyright 2025 <span className="highlight">E-TAX</span> All Rights Reserved.</p>
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
