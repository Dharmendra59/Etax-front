import React, { useState, useEffect } from 'react';
import { FaSearch, FaLink, FaRegFileAlt, FaChartLine, FaCalculator, FaShieldAlt, FaHandshake, FaMoon, FaSun } from 'react-icons/fa';
import './img-gallery.css';

const ImageGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleItems, setVisibleItems] = useState(6);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const galleryItems = [
    {
      id: 1,
      image: '/placeholder.svg?height=400&width=600',
      title: 'GST Filing',
      category: 'gst',
      description: 'Streamlined GST filing services for businesses of all sizes',
      icon: <FaRegFileAlt />
    },
    {
      id: 2,
      image: '/placeholder.svg?height=300&width=400',
      title: 'Tax Planning',
      category: 'tax',
      description: 'Strategic tax planning to optimize your financial position',
      icon: <FaCalculator />
    },
    {
      id: 3,
      image: '/placeholder.svg?height=500&width=700',
      title: 'Financial Analysis',
      category: 'finance',
      description: 'Comprehensive financial analysis and reporting',
      icon: <FaChartLine />
    },
    {
      id: 4,
      image: '/placeholder.svg?height=350&width=500',
      title: 'Tax Compliance',
      category: 'tax',
      description: 'Stay compliant with all tax regulations and requirements',
      icon: <FaShieldAlt />
    },
    {
      id: 5,
      image: '/placeholder.svg?height=450&width=600',
      title: 'GST Consultation',
      category: 'gst',
      description: 'Expert consultation on GST implementation and compliance',
      icon: <FaHandshake />
    },
    {
      id: 6,
      image: '/placeholder.svg?height=400&width=550',
      title: 'Financial Security',
      category: 'finance',
      description: 'Secure your financial future with our expert guidance',
      icon: <FaShieldAlt />
    },
    {
      id: 7,
      image: '/placeholder.svg?height=380&width=520',
      title: 'Corporate Tax Strategy',
      category: 'tax',
      description: 'Tailored tax strategies for corporations and large businesses',
      icon: <FaCalculator />
    },
    {
      id: 8,
      image: '/placeholder.svg?height=420&width=580',
      title: 'GST Audit Support',
      category: 'gst',
      description: 'Comprehensive support for GST audits and inspections',
      icon: <FaRegFileAlt />
    },
    {
      id: 9,
      image: '/placeholder.svg?height=360&width=480',
      title: 'Investment Planning',
      category: 'finance',
      description: 'Expert advice on investment strategies and portfolio management',
      icon: <FaChartLine />
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filterItems = (category) => {
    setActiveFilter(category);
    setVisibleItems(6);
  };

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const loadMore = () => {
    setVisibleItems(prevVisible => prevVisible + 3);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <section className={`gallery-section ${darkMode ? 'dark-mode' : ''}`}>
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>Our Tax & GST Services</h2>
          <p>Explore our comprehensive range of tax and GST services designed to meet your financial needs</p>
        </div>
        
        <div className={`gallery-filter ${scrolled ? 'sticky' : ''}`}>
          <div className="filter-buttons">
            <button 
              className={activeFilter === 'all' ? 'active' : ''} 
              onClick={() => filterItems('all')}
            >
              All Services
            </button>
            <button 
              className={activeFilter === 'tax' ? 'active' : ''} 
              onClick={() => filterItems('tax')}
            >
              Tax Services
            </button>
            <button 
              className={activeFilter === 'gst' ? 'active' : ''} 
              onClick={() => filterItems('gst')}
            >
              GST Services
            </button>
            <button 
              className={activeFilter === 'finance' ? 'active' : ''} 
              onClick={() => filterItems('finance')}
            >
              Financial Services
            </button>
          </div>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        
        <div className="gallery-grid">
          {filteredItems.slice(0, visibleItems).map((item) => (
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
        
        {visibleItems < filteredItems.length && (
          <div className="load-more-container">
            <button className="load-more-btn" onClick={loadMore}>Load More</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;
