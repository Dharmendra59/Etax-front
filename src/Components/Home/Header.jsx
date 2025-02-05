import { useState, useEffect } from 'react';
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
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Image from '../../assets/logo.svg';

import './header.css';

export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  // Track scroll state

  // Detect scroll position and set header visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {  // Set threshold to hide header after 50px scroll
        setScrolling(true); // Scroll down, hide header
      } else {
        setScrolling(false); // Scroll up, show header
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const handleProfileClick = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleOptionClick = () => {
    // Close the popup when an option is clicked
    setIsPopupVisible(false);
    
  };

  const handleLogout = () => {
    alert("You have logged out!");
    setIsPopupVisible(false); // Close the popup after logout
  };
  const handleBarsClick = () =>{
      setIsMobileMenu(!isMobileMenu);
  }
  const BarsClick = () =>{
      setIsMobileMenu(false)
  }

  return (
    <header className={`header ${scrolling ? 'scrolling' : ''}`} >
      {/* Top bar section */}
      <div className={`top-bar ${scrolling ? 'hidden' : ''}`}>
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

      {/* Main navigation section */}
      <nav className="main-nav" >
        <Link href="/" className='logo-link'>
          <div className="logo">
            <img src={Image} alt='logo' width={50} height={40} priority />
            <h1>E-<span>TAX</span></h1>
          </div>
        </Link>

        <div className="nav-links" >
          <Link to="/" className="active" onClick={handleOptionClick}>
            Home <FaChevronDown />
          </Link>
          <Link to="/about" >About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link onClick={handleProfileClick}>Pages <FaChevronDown /></Link>
          {isPopupVisible && (
            <div className="profile-popup">
                  <div className="popup-item">
                        <Link to="/login" onClick={handleOptionClick}>Log In</Link>
                        <Link onClick={handleLogout}>Log Out</Link>
                        <Link to="/registration" onClick={handleOptionClick}>Registration</Link>
                        
                  </div>
            </div>
            )}
        </div>
        

                    
        <div className="nav-right">
          <button className="search-btn" aria-label="Search" onClick={handleOptionClick}>
            <FaSearch />
          </button>
          <Link to="/contact" className="ct-button" onClick={handleOptionClick}>
            Let's Talk <FaArrowRight />
          </Link>
          <button className="mobile-menu" aria-label="Menu">
            <FaBars onClick={handleBarsClick} />
            {isMobileMenu && (
                  <div className="mobile-menu-icon">
                        <Link to="/" onClick={BarsClick}>Home</Link>
                        <Link to="/about" onClick={BarsClick}>About</Link>
                        <Link to="/services" onClick={BarsClick}>Services</Link>
                        <Link to="/contact" onClick={BarsClick}>Contact</Link>
                        <Link  onClick={handleProfileClick}>Pages <FaChevronDown /></Link>
                        {isPopupVisible && (
                                                  <div className="mobile-popup">
                                                        <div className="popup-item">
                                                              <Link to="/login" onClick={handleOptionClick}>Log In</Link>
                                                              <Link onClick={handleLogout}>Log Out</Link>
                                                              <Link to="/registration" onClick={handleOptionClick}>Registration</Link>

                                                        </div>
                                                  </div>
                                            )}
                  </div>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
