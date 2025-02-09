import { 
  FaArrowLeft, 
  FaArrowRight,
  FaCalculator,
  FaUserTie,
  FaSearchDollar,
  FaChartLine,
  FaBuilding,
  FaShieldAlt,
  FaDollarSign
} from "react-icons/fa";
import "./Hero.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Hero() {
  const scrollRef = useRef(null);

  // Function to handle horizontal scroll
  const handleScroll = (direction) => {
    const scrollAmount = 300; // Amount of scroll
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (direction === "right") {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="logos">
          <span>QFS</span>
        </div>

        <div className="hero-content">
          <span className="welcome-text">WELCOME TO QUICK FINANCIAL SERVICES !</span>
          <h1>Providing Best<br />Financial Services</h1>
          <p>
            There are many variations of passages Lorem Ipsum available but the majority have
            suffered alteration in some form by injected humour.
          </p>
          <div className="cta-buttons">
            <Link to="/contact">
              <button className="btn btn-primary">
                Get In Touch <FaArrowRight />
              </button>
            </Link>
            <Link to="/get-started">
              <button className="btn btn-secondary">
                Get Started <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className="nav-arrow left" onClick={() => handleScroll("left")}>
          <FaArrowLeft />
        </button>
        <button className="nav-arrow right" onClick={() => handleScroll("right")}>
          <FaArrowRight />
        </button>

        {/* Horizontal Scrolling Cards */}
        <div className="sv-highlights" ref={scrollRef}>
          <div className="sv-card">
            <div className="icon-circl">
              <FaCalculator />
            </div>
            <h3>TDS</h3>
            <p>There are many variations words passages of Lorem Ipsum don't available majority</p>
          </div>

          <div className="sv-card">
            <div className="icon-circl">
              <FaUserTie />
            </div>
            <h3>Financing Services</h3>
            <p>There are many variations words passages of Lorem Ipsum don't available majority</p>
          </div>

          <div className="sv-card">
            <div className="icon-circl">
              <FaSearchDollar />
            </div>
            <h3>ITR Filing</h3>
            <p>There are many variations words passages of Lorem Ipsum don't available majority</p>
          </div>

          <div className="sv-card">
            <div className="icon-circl">
              <FaChartLine />
            </div>
            <h3>E-Invoicing & E-Way Bills</h3>
            <p>There are many variations words passages of Lorem Ipsum don't available majority</p>
          </div>

          <div className="sv-card">
            <div className="icon-circl">
              <FaBuilding />
            </div>
            <h3>GST Registration</h3>
            <p>There are many variations words passages of Lorem Ipsum don't available majority</p>
          </div>
          <div className="sv-card">
            <div className="icon-circl">
              <FaShieldAlt />
            </div>
            <h3>Tax Consultancy</h3>
            <p>There are many variations words passages of Lorem Ipsum don't available majority</p>
          </div>
          <div className="sv-card">
            <div className="icon-circl">
              <FaDollarSign />
            </div>
            <h3>Accounts Payable</h3>
            <p>There are many variations words passages of Lorem Ipsum don't available majority</p>
          </div>
        </div>
      </div>
    </section>
  );
}
