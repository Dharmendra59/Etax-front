import { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaSearch, FaBars, FaChevronDown, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "../../assets/logo.svg";

import "./Header.css";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [hoveredPopup, setHoveredPopup] = useState(null);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);


  useEffect(() => {
      const handleScroll = () => {
        setScrolling(window.scrollY > 50);
      };
    
      window.addEventListener("scroll", handleScroll);
    
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    const handleBarsClick = () =>{
      setIsMobileMenu(!isMobileMenu);
  }
  const BarsClick = () =>{
      setIsMobileMenu(false)
  }
    
  return (
      <header className="header">
      {/* Top bar */}
      <div className={`top-bar ${scrolling ? "hidden" : ""}`}>
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
    
      {/* Main navigation */}
      <nav className={`main-nav ${scrolling ? "scrolling" : ""}`}>
        <Link to="/" className="logo-link">
          <div className="logo">
            <img src={Image} alt="logo" width={50} height={40} priority />
            <h1>
              QF<span>S</span>
            </h1>
          </div>
        </Link>
    
        <div className="nav-links">
          <Link to="/" className="active">
            Home <FaChevronDown />
          </Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
    
          {/* Pages dropdown */}
          <div
            className="nav-item"
            onMouseEnter={() => setHoveredPopup("pages")}
            onMouseLeave={() => setHoveredPopup(null)}
          >
            <Link>
              Pages <FaChevronDown />
            </Link>
            {hoveredPopup === "pages" && (
              <div className="popup">
                <Link to="/login">Log In</Link>
                
                <a href="#" onClick={() => alert("You have logged out!")}>
                  Log Out
                </a>
                <Link to="/registration">Registration</Link>
              </div>
            )}
          </div>
    
          {/* Blogs dropdown */}
          <div
            className="nav-item"
            onMouseEnter={() => setHoveredPopup("blogs")}
            onMouseLeave={() => setHoveredPopup(null)}
          >
            <Link>
              Blogs <FaChevronDown />
            </Link>
            {hoveredPopup === "blogs" && (
              <div className="popup">
                <Link to="/image">Image Gallery</Link>
                <Link to="/video">Video Gallery</Link>
              </div>
            )}
          </div>
        </div>
    
        <div className="nav-right">
          <button className="search-btn" aria-label="Search">
            <FaSearch />
          </button>
          <Link to="/contact" className="ct-button">
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
                        <Link  onClick={() => setIsPopupVisible(!isPopupVisible)}>Pages <FaChevronDown /></Link>
                        {isPopupVisible && (
                                                  <div className="mobile-popup">
                                                        <div className="popup-item">
                                                              <Link to="/login">Log In</Link>
                                                              <Link>Log Out</Link>
                                                              <Link to="/registration" >Registration</Link>

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
