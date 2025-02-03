import { useEffect, useState, useCallback } from 'react'
import { 
  FaArrowRight, 
  FaStar, 
  FaQuoteRight 
} from 'react-icons/fa'

import './testimonal.css'

const testimonials = [
  {
    id: 1,
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    rating: 99,
    author: "Loreta Jones",
    role: "Customer",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    id: 2,
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    rating: 99,
    author: "Niesha Phips",
    role: "Customer",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    id: 3,
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    rating: 99,
    author: "John Smith",
    role: "Customer",
    image: "/placeholder.svg?height=80&width=80"
  }
]

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length)
  }, [])

  const handleDotClick = (index, number) => {
    setActiveSlide(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000) // Resume auto-slide after 5 seconds
  }

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, 5000) // Change slide every 5 seconds
      return () => clearInterval(timer)
    }
  }, [nextSlide, isPaused])

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">
            What Our Client<br />
            <span className="highlight">Say's</span> About Us
          </h2>
          <p className="section-description">
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. All the generators on the
            Internet tend to repeat predefined chunks.
          </p>
          <button className="know-more-btn">
            Know More <FaArrowRight />
          </button>
        </div>

        <div 
          className="testimonials-slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="slider-track"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="quote-icon">
                  <FaQuoteRight />
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="rating-badge">{testimonial.rating}</div>
                <div className="author-info">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={80}
                    height={80}
                    className="author-image"
                  />
                  <div className="author-details">
                    <h3 className="author-name">{testimonial.author}</h3>
                    <span className="author-role">{testimonial.role}</span>
                    <div className="star-rating">
                      {[...Array(5)].map((_, index) => (
                        <FaStar key={index} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeSlide ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
