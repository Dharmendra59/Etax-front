import { useState, useEffect } from "react";
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
  FaTimes,
  FaChevronDown,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "../../assets/logo.svg";
import "./Header.css";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Toggle dropdown on click
  const handleDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

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
        <Link to="/" className="logo-link" onClick={handleLinkClick}>
          <div className="logo">
            <img src={Image} alt="logo" width={50} height={40} priority />
            <h1>
              QF<span>S</span>
            </h1>
          </div>
        </Link>

        <div className={`nav-links ${isMobileMenuOpen ? "mobile-visible" : ""}`}>
          <Link to="/" className="active" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/about" onClick={handleLinkClick}>
            About
          </Link>
          <Link to="/services" onClick={handleLinkClick}>
            Services
          </Link>
          <Link to="/contact" onClick={handleLinkClick}>
            Contact
          </Link>

          <div className="nav-item">
            <Link to="#" 
              onClick={() => handleDropdownToggle("pages")}>
              Pages <FaChevronDown/>
            </Link>
            
            {activeDropdown === "pages" && (
              <div className="popup">
                <Link to="/login" onClick={handleLinkClick}>
                  Log In
                </Link>
                <Link to="/register" onClick={handleLinkClick}>
                  Registration
                </Link>
                <Link to="/password" onClick={handleLinkClick}>
                  Forgot Password
                </Link>
              </div>
            )}
          </div>

          <div className="nav-item">
            <Link to="#" 
              onClick={() => handleDropdownToggle("blogs")}>
              Blogs <FaChevronDown/>
            </Link>
            
            {activeDropdown === "blogs" && (
              <div className="popup">
                <Link to="/blogs" onClick={handleLinkClick}>
                  Blogs
                </Link>
                <Link to="/image" onClick={handleLinkClick}>
                  Image Gallery
                </Link>
                <Link to="/video" onClick={handleLinkClick}>
                  Video Gallery
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="nav-right">
          <button className="search-btn" aria-label="Search">
            <FaSearch />
          </button>
          <Link to="/get-started" className="ct-button" onClick={handleLinkClick}>
            Get Started <FaArrowRight />
          </Link>
          <button className="mobile-menu" onClick={toggleMobileMenu} aria-label="Menu">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
}
