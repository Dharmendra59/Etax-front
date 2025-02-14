import { FaPlay, FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'
import './video.css'
import { Link } from 'react-router-dom'

export default function VideoSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="video-section">
      <div className="video-overlay">
        <div className="content-container">
          <h2 className="titele">
            We deliver expertise and help your<br />
            business to grow up
          </h2>
          <p className="description">
            There are many variations of passages available but the majority have suffered alteration in some
            form by injected humour words which don't look even slightly believable.
          </p>
          <Link to="/contact" >
          <button className="cta-button">
            Learn More <FaArrowRight />
          </button>
          </Link>
        </div>

        <button 
          className={`play-button ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            // Handle video play functionality
            console.log('Play video')
          }}
        >
          <div className="play-icon-wrapper">
            <FaPlay className="play-icon" />
          </div>
          <div className="ripple"></div>
          <div className="ripple"></div>
          <div className="ripple"></div>
        </button>
      </div>
    </section>
  )
}
