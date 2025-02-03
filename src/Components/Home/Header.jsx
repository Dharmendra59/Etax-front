// 
import { 
  FaEnvelope, 
  FaPhone, 
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaSearch,
  FaBars,
  FaChevronDown,
  FaArrowRight
} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Image from '../../assets/logo.svg'

import './header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="cont-info">
          <a href="mailto:info@example.com">
            <FaEnvelope /> info@example.com
          </a>
          <a href="tel:+1234567898">
            <FaPhone /> +2 123 654 7898
          </a>
          <span>
            <FaClock /> Sun - Fri (08AM - 10PM)
          </span>
        </div>
        <div className="right-section">
          
          <div className="social-links">
            <span>Follow Us:</span>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      
      <nav className="main-nav">
      <Link href="/" className='logo-link'>
        <div className="logo">
          
           
            <img src={Image} alt='logo' width={50} 
              height={40}
              priority />
              
          
          
          <h1>E-<span>TAX</span></h1>
          
        </div>
        </Link>
        
        <div className="nav-links">
          <Link href="/" className="active">
            Home <FaChevronDown />
          </Link>
          <Link href="/about">About</Link>
          <Link href="/services">
            Services <FaChevronDown />
          </Link>
          {/* <Link href="/pages">
            Pages <FaChevronDown />
          </Link>
          <Link href="/case-study">
            Case Study <FaChevronDown />
          </Link>
          <Link href="/blog">
            Blog <FaChevronDown />
          </Link> */}
          <Link href="/contact">Contact</Link>
          <Link href="/faqs">
            Pages <FaChevronDown />
          </Link>
        </div>
        
        <div className="nav-right">
          <button className="search-btn" aria-label="Search">
            <FaSearch />
          </button>
          <Link href="/contact" className="cta-button">
            Let's Talk <FaArrowRight />
          </Link>
          <button className="mobile-menu" aria-label="Menu">
            <FaBars />
          </button>
        </div>
      </nav>
    </header>
  )
}
