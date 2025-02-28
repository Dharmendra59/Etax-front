"use client"

import { useState, useEffect, useRef } from "react"
import { FaChartLine, FaFileInvoiceDollar, FaBalanceScale, FaCalculator, FaShieldAlt, FaHandshake } from "react-icons/fa"
import "./img-gallery.css"

const ImageGallery = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [visibleItems, setVisibleItems] = useState(7)
  const sliderRef = useRef(null)

  const galleryItems = [
    {
      id: 1,
      image: "https://www.taxproeducation.in/s/store/courses/6107c60b0cf2ba896eb27e6f/cover.jpg?v=3",
      title: "GST Filing Mastery",
      category: "gst",
      description: "Streamlined GST filing services for businesses of all sizes",
      icon: <FaFileInvoiceDollar />,
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxdT7fculCuNIntNypjUlMyGbxRsr081AFA&s",
      title: "Strategic Tax Planning",
      category: "tax",
      description: "Optimize your financial position with our expert tax strategies",
      icon: <FaCalculator />,
    },
    {
      id: 3,
      image: "https://static.vecteezy.com/system/resources/previews/041/414/025/non_2x/concept-of-financial-analysis-business-meetings-and-targets-management-accounting-company-business-team-analyzing-company-finances-flat-illustration-on-white-background-vector.jpg",
      title: "Financial Analysis Pro",
      category: "finance",
      description: "In-depth financial analysis and reporting for informed decisions",
      icon: <FaChartLine />,
    },
    {
      id: 4,
      image: "https://www.taxshieldservice.com/wp-content/uploads/2024/11/logo-1.png",
      title: "Tax Compliance Shield",
      category: "tax",
      description: "Stay compliant with all tax regulations and requirements",
      icon: <FaShieldAlt />,
    },
    {
      id: 5,
      image: "/placeholder.svg?height=450&width=600",
      title: "GST Consultation Elite",
      category: "gst",
      description: "Expert consultation on GST implementation and compliance",
      icon: <FaHandshake />,
    },
    {
      id: 6,
      image: "/placeholder.svg?height=400&width=550",
      title: "Financial Fortification",
      category: "finance",
      description: "Secure your financial future with our expert guidance",
      icon: <FaShieldAlt />,
    },
    {
      id: 7,
      image: "/placeholder.svg?height=380&width=520",
      title: "Corporate Tax Mastery",
      category: "tax",
      description: "Tailored tax strategies for corporations and large businesses",
      icon: <FaBalanceScale />,
    },
    {
      id: 8,
      image: "/placeholder.svg?height=420&width=580",
      title: "GST Audit Armor",
      category: "gst",
      description: "Comprehensive support for GST audits and inspections",
      icon: <FaFileInvoiceDollar />,
    },
    {
      id: 9,
      image: "/placeholder.svg?height=360&width=480",
      title: "Investment Strategy Pro",
      category: "finance",
      description: "Expert advice on investment strategies and portfolio management",
      icon: <FaChartLine />,
    },
  ]

  useEffect(() => {
    const slider = sliderRef.current
    let isDown = false
    let startX
    let scrollLeft

    slider.addEventListener('mousedown', (e) => {
      isDown = true
      slider.classList.add('active')
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    })

    slider.addEventListener('mouseleave', () => {
      isDown = false
      slider.classList.remove('active')
    })

    slider.addEventListener('mouseup', () => {
      isDown = false
      slider.classList.remove('active')
    })

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX) * 2
      slider.scrollLeft = scrollLeft - walk
    })

    return () => {
      slider.removeEventListener('mousedown', () => {})
      slider.removeEventListener('mouseleave', () => {})
      slider.removeEventListener('mouseup', () => {})
      slider.removeEventListener('mousemove', () => {})
    }
  }, [])

  const filterItems = (category) => {
    setActiveFilter(category)
    setVisibleItems(7)
  }

  const filteredItems =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  const loadMore = () => {
    setVisibleItems((prevVisible) => prevVisible + 3)
  }

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>QFS Images Gallery Showcase</h2>
          <p>Discover our innovative range of tax and GST solutions tailored for your financial success</p>
        </div>

        <div className="featured-service">
          <div className="featured-content">
            <h3>Featured: GST Filing Mastery</h3>
            <p>Revolutionize your GST filing process with our cutting-edge service. Streamlined, accurate, and hassle-free.</p>
            <a href="#" className="featured-btn">Learn More</a>
          </div>
          <div className="featured-image">
            <img src="https://alankitgst.com/NewsImages/382018152623GSTR-Snapshot.png" alt="Featured Service" />
          </div>
        </div>

        <div className="gallery-filter" ref={sliderRef}>
          <button className={activeFilter === "all" ? "active" : ""} onClick={() => filterItems("all")}>
            All Services
          </button>
          <button className={activeFilter === "tax" ? "active" : ""} onClick={() => filterItems("tax")}>
            Tax Services
          </button>
          <button className={activeFilter === "gst" ? "active" : ""} onClick={() => filterItems("gst")}>
            GST Services
          </button>
          <button className={activeFilter === "finance" ? "active" : ""} onClick={() => filterItems("finance")}>
            Financial Services
          </button>
        </div>

        <div className="gallery-grid">
          {filteredItems.slice(0, visibleItems).map((item, index) => (
            <div className={`gallery-item item-${index + 1}`} key={item.id}>
              <div className="gallery-item-inner">
                <div className="gallery-item-img">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} />
                </div>
                <div className="gallery-item-info">
                  <div className="item-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href="#" className="item-link">Explore</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleItems < filteredItems.length && (
          <div className="load-more-container">
            <button className="load-more-btn" onClick={loadMore}>
              Uncover More Services
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ImageGallery
