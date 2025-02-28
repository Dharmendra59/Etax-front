"use client"

import { useState } from "react"
import { FaSearch, FaLink, FaRegFileAlt, FaChartLine, FaCalculator, FaShieldAlt, FaHandshake } from "react-icons/fa"
import "./service_main.css"

const ImageGallery = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const galleryItems = [
    {
      id: 1,
      image: "https://caindelhi.in/wp-content/uploads/2017/11/5.2-How-to-File-GST-Returns.png",
      title: "GST Filing",
      category: "gst",
      description: "Streamlined GST filing services for businesses of all sizes",
      icon: <FaRegFileAlt />,
    },
    {
      id: 2,
      image: "https://www.shutterstock.com/image-photo/tax-planning-words-written-on-260nw-379874299.jpg",
      title: "Tax Planning",
      category: "tax",
      description: "Strategic tax planning to optimize your financial position",
      icon: <FaCalculator />,
    },
    {
      id: 3,
      image: "https://www.shutterstock.com/image-photo/business-financing-accounting-banking-concept-260nw-2267738379.jpg",
      title: "Financial Analysis",
      category: "finance",
      description: "Comprehensive financial analysis and reporting",
      icon: <FaChartLine />,
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwpj-BfqYveqvQ_0JWiCWZj_pXzBYhCG_6A&s",
      title: "Tax Compliance",
      category: "tax",
      description: "Stay compliant with all tax regulations and requirements",
      icon: <FaShieldAlt />,
    },
    {
      id: 5,
      image: "https://masterbrains.co.in/wp-content/uploads/2024/07/Gst-Consultancy.png",
      title: "GST Consultation",
      category: "gst",
      description: "Expert consultation on GST implementation and compliance",
      icon: <FaHandshake />,
    },
    {
      id: 6,
      image: "https://dbs7qpzv4mcv.cloudfront.net/668_1581422202.jpeg",
      title: "Financial Security",
      category: "finance",
      description: "Secure your financial future with our expert guidance",
      icon: <FaShieldAlt />,
    },
  ]

  const filterItems = (category) => {
    setActiveFilter(category)
  }

  const filteredItems =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>QUICK FINANCIAL SERVICES </h2>
          <p>Explore our comprehensive range of tax and GST services designed to meet your financial needs</p>
        </div>

        <div className="gallery-filter">
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
          {filteredItems.map((item) => (
            <div className="gallery-item" key={item.id}>
              <div className="gallery-item-inner">
                <div className="gallery-item-img">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} />
                  <div className="overlay">
                    <div className="overlay-content">
                      <a href="#" className="icon">
                        <FaSearch />
                      </a>
                      <a href="#" className="icon">
                        <FaLink />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="gallery-item-info">
                  <div className="item-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageGallery

