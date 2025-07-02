import { FaPlay, FaArrowRight, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import './video.css'
import { Link } from 'react-router-dom'

export default function VideoSection() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section className="vidio-section">
      <div className="vidio-overlay">
        <div className="content-container">
          <h2 className="titele">
            We deliver expertise and help your<br />
            business to grow up
          </h2>
          <p className="description">
            "Our experienced team provides the knowledge and support you need to strengthen your business and achieve sustainable growth."
          </p>
          <Link to="/contact">
            <button className="cta-button">
              Learn More <FaArrowRight />
            </button>
          </Link>
        </div>

        <button
          className={`play-button ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsVideoOpen(true)}
        >
          <div className="play-icon-wrapper">
            <FaPlay className="play-icon" />
          </div>
          <div className="ripple"></div>
          <div className="ripple"></div>
          <div className="ripple"></div>
        </button>
      </div>

      {isVideoOpen && (
        <div className="video-modal">
          <div className="video-content">
            <button
              className="close-button"
              onClick={() => setIsVideoOpen(false)}
            >
              <FaTimes />
            </button>
            <iframe
              width="1000"
              height="500"
              src="https://www.youtube.com/embed/lQn0JeBRezU?si=nFmn12VPMPN9A3RF"
              title="Video"
              frameBorder="0"
              allow="autoplay=1"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  )
}
