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
import { Link, useLocation } from "react-router-dom";
import Image from "../../assets/logo.svg";
import "./Header.css";
import { useUser } from "../../context/user.context";

export default function Header() {
  const { user, isAuthenticated } = useUser();
  const location = useLocation();

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
          <div className="frontlogo">
            <img src={Image} alt="logo" width={50} height={40} priority />
            <h5 className="logoh1">
              QF<span>S</span>
            </h5>
          </div>
        </Link>

        <div
          className={`nav-links ${isMobileMenuOpen ? "mobile-visible" : ""}`}
        >
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            to="/services"
            className={location.pathname === "/services" ? "active" : ""}
            onClick={handleLinkClick}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
            onClick={handleLinkClick}
          >
            Contact
          </Link>

          <div className="nav-item">
            {isAuthenticated ? (
              <Link
                to="/profile"
                className={location.pathname === "/profile" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Profile
              </Link>
            ) : (
              <div
                onClick={() => handleDropdownToggle("pages")}
                className="dropdown-toggle"
              >
                <Link to="#">
                  Pages
                  <FaChevronDown />
                </Link>
              </div>
            )}

            {!isAuthenticated && activeDropdown === "pages" && (
              <div className="popup">
                <Link
                  to="/login"
                  className={location.pathname === "/login" ? "active" : ""}
                  onClick={handleLinkClick}
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className={location.pathname === "/register" ? "active" : ""}
                  onClick={handleLinkClick}
                >
                  Registration
                </Link>
                <Link
                  to="/password"
                  className={location.pathname === "/password" ? "active" : ""}
                  onClick={handleLinkClick}
                >
                  Forgot Password
                </Link>
              </div>
            )}
          </div>

          <div className="nav-item">
            <Link
              to="#"
              onClick={() => handleDropdownToggle("blogs")}
              className={
                location.pathname.startsWith("/blogs") ||
                location.pathname.startsWith("/image") ||
                location.pathname.startsWith("/video")
                  ? "active"
                  : ""
              }
            >
              Blogs <FaChevronDown />
            </Link>

            {activeDropdown === "blogs" && (
              <div className="popup">
                <Link
                  to="/blogs"
                  className={location.pathname === "/blogs" ? "active" : ""}
                  onClick={handleLinkClick}
                >
                  Blogs
                </Link>
                <Link
                  to="/images"
                  className={location.pathname === "/image" ? "active" : ""}
                  onClick={handleLinkClick}
                >
                  Image Gallery
                </Link>
                <Link
                  to="/videos"
                  className={location.pathname === "/video" ? "active" : ""}
                  onClick={handleLinkClick}
                >
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
          <Link
            to="/get-started"
            className={`ct-button ${
              location.pathname === "/get-started" ? "active" : ""
            }`}
            onClick={handleLinkClick}
          >
            Get Started <FaArrowRight />
          </Link>
          <button
            className="mobile-menu"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
      <div className="bottom-btn">
        <Link
          to="/get-started"
          className={`bt-button ${
            location.pathname === "/get-started" ? "active" : ""
          }`}
          onClick={handleLinkClick}
        >
          Get Started <FaArrowRight />
        </Link>
      </div>
    </header>
  );
}
