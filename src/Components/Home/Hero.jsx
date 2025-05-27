import {
  FaArrowLeft,
  FaArrowRight,
  FaUserTie,
  FaChartLine,
  FaBuilding,
  FaShieldAlt,
} from "react-icons/fa";
import "./Hero.css";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import mainImage from "../../assets/mainimg.PNG";  // ✅ Import the image

export default function Hero() {
  const scrollRef = useRef(null);
  const autoScrollInterval = useRef(null);

  const handleScroll = (direction) => {
    const scrollAmount = 200; // smoother
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (direction === "right") {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const autoScroll = () => {
      if (
        scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
        scrollContainer.scrollWidth
      ) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
      }
    };
    autoScrollInterval.current = setInterval(autoScroll, 3000);
    return () => clearInterval(autoScrollInterval.current);
  }, []);

  return (
    <section className="hero">
      {/* ✅ Use imported image instead of require() */}
      <img
        src={mainImage}
        alt="Hero Background"
        className="hero-bg"
      />
      <div className="hero-overlay">
        <div className="logos"><span>QFS</span></div>
        <div className="hero-content">
          <span className="welcome-text">IT'S TIME TO FILE YOUR ITR !</span>
          <h5 className="heroh1">Providing Best<br />Financial Services</h5>
          <p>Many variations of passages Lorem Ipsum available but the majority have been altered.</p>
          <div className="cta-buttons">
            <Link to="/contact"><button className="btn btn-primary">Learn More <FaArrowRight /></button></Link>
            <Link to="/get-started"><button className="btn btn-secondary">Get Started <FaArrowRight /></button></Link>
          </div>
        </div>

        <button className="nav-arrow left" onClick={() => handleScroll("left")}><FaArrowLeft /></button>
        <button className="nav-arrow right" onClick={() => handleScroll("right")}><FaArrowRight /></button>

        <div className="sv-highlights" ref={scrollRef}>
          <Link to="/get-started" className="sv-card">
            <div className="icon-circl"><FaUserTie /></div>
            <h3>ITR Filing</h3>
            <p>Variations of Lorem Ipsum available.</p>
          </Link>
          <div className="sv-card">
            <div className="icon-circl"><FaChartLine /></div>
            <h3>E-Invoicing & E-Way Bills</h3>
            <p>Variations of Lorem Ipsum available.</p>
          </div>
          <div className="sv-card">
            <div className="icon-circl"><FaBuilding /></div>
            <h3>GST Registration</h3>
            <p>Variations of Lorem Ipsum available.</p>
          </div>
          <div className="sv-card">
            <div className="icon-circl"><FaShieldAlt /></div>
            <h3>Tax Consultancy</h3>
            <p>Variations of Lorem Ipsum available.</p>
          </div>
          <div className="sv-card">
            <div className="icon-circl"><FaShieldAlt /></div>
            <h3>Audit Report</h3>
            <p>Variations of Lorem Ipsum available.</p>
          </div>
          <div className="sv-card">
            <div className="icon-circl"><FaShieldAlt /></div>
            <h3>Insurance & Tax</h3>
            <p>Variations of Lorem Ipsum available.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
