import { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Image from "../../assets/wlogo.PNG";
import "./Header.css";
import { useUser } from "../../context/user.context";

export default function Header() {
  const { user, isAuthenticated } = useUser();
  const location = useLocation();

  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };
  const handleDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="header">
      {/* Top Bar */}
      <div className={`top-bar ${scrolling ? "hidden" : ""}`}>
        <div className="cont-info">
          <div className="email-ticker">
            <div className="ticker-track">
              {/* Repeat same items for seamless loop */}
              <div className="ticker-item">
                <a href="mailto:caamitgupta2016@gmail.com">
                  <FaEnvelope /> caamitgupta2016@gmail.com
                </a>
              </div>
              <div className="ticker-item">
                <a href="mailto:caamitgupta2023@gmail.com">
                  <FaEnvelope /> caamitgupta2023@gmail.com
                </a>
              </div>
              {/* Duplicate for smooth infinite effect */}
              <div className="ticker-item">
                <a href="mailto:caamitgupta2016@gmail.com">
                  <FaEnvelope /> caamitgupta2016@gmail.com
                </a>
              </div>
              <div className="ticker-item">
                <a href="mailto:caamitgupta2023@gmail.com">
                  <FaEnvelope /> caamitgupta2023@gmail.com
                </a>
              </div>
            </div>
          </div>



          <a href="tel:7905876982">
            <FaPhone /> 7905876982
          </a>
          <span>
            <FaClock /> Sun - Fri (11AM - 7PM)
          </span>
        </div>
        <div className="right-section">
          <div className="social-links">
            <span>Follow Us:</span>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`main-nav ${scrolling ? "scrolling" : ""}`}>
        <Link to="/" className="logo-link" onClick={handleLinkClick}>
          <div className="frontlogo">
            <img src={Image} alt="logo" width={"auto"} height={100} />
          </div>
        </Link>

        <div className={`nav-links ${isMobileMenuOpen ? "mobile-visible" : ""}`}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={handleLinkClick}>Home</Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={handleLinkClick}>About</Link>
          <Link to="/services" className={location.pathname === "/services" ? "active" : ""} onClick={handleLinkClick}>Services</Link>

          {isAuthenticated && (
            <Link to="/profile" className={location.pathname === "/profile" ? "active" : ""} onClick={handleLinkClick}>
              Profile
            </Link>
          )}

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
                <Link to="/blogs" className={location.pathname === "/blogs" ? "active" : ""} onClick={handleLinkClick}>Blogs</Link>
                <Link to="/images" className={location.pathname === "/image" ? "active" : ""} onClick={handleLinkClick}>Image Gallery</Link>
                <Link to="/videos" className={location.pathname === "/video" ? "active" : ""} onClick={handleLinkClick}>Video Gallery</Link>
              </div>
            )}
          </div>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={handleLinkClick}>Contact</Link>

        </div>

        <div className="nav-right">
          {isAuthenticated ? (
            <Link to="/get-started" className={`ct-button ${location.pathname === "/get-started" ? "active" : ""}`} onClick={handleLinkClick}>
              Get Started <FaArrowRight />
            </Link>
          ) : (
            <Link to="/login" className={`ct-button ${location.pathname === "/login" ? "active" : ""}`} onClick={handleLinkClick}>
              Log In <FaArrowRight />
            </Link>
          )}

          <button className="mobile-menu" onClick={toggleMobileMenu} aria-label="Menu">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <div className="bottom-btn">
        {isAuthenticated ? (
          <Link to="/get-started" className={`bt-button ${location.pathname === "/get-started" ? "active" : ""}`} onClick={handleLinkClick}>
            Get Started <FaArrowRight />
          </Link>
        ) : (
          <Link to="/login" className={`bt-button ${location.pathname === "/login" ? "active" : ""}`} onClick={handleLinkClick}>
            Log In <FaArrowRight />
          </Link>
        )}
      </div>
    </header>
  );
}
