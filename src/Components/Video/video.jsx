import React, { useState } from 'react';
import { 
  FaPlay, 
  FaExpand, 
  FaRegFileAlt, 
  FaChartLine, 
  FaCalculator, 
  FaShieldAlt, 
  FaHandshake,
  FaInfoCircle,
  FaShareAlt
} from 'react-icons/fa';
import './video.css';

const VideoGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeVideo, setActiveVideo] = useState(null);
  
  const galleryItems = [
    {
      id: 1,
      videoId: "dQw4w9WgXcQ", // Example YouTube ID
      thumbnail: '/placeholder.svg?height=300&width=400',
      title: 'GST Filing Explained',
      category: 'gst',
      duration: '4:30',
      description: 'A comprehensive guide to GST filing for businesses',
      icon: <FaRegFileAlt />
    },
    {
      id: 2,
      videoId: "KMU0tzLwhbE", // Example YouTube ID
      thumbnail: '/placeholder.svg?height=300&width=400',
      title: 'Tax Planning Strategies',
      category: 'tax',
      duration: '6:15',
      description: 'Learn effective tax planning strategies for your business',
      icon: <FaCalculator />
    },
    {
      id: 3,
      videoId: "jNQXAC9IVRw", // Example YouTube ID
      thumbnail: '/placeholder.svg?height=300&width=400',
      title: 'Financial Analysis Techniques',
      category: 'finance',
      duration: '8:45',
      description: 'Master financial analysis techniques for better decision making',
      icon: <FaChartLine />
    },
    {
      id: 4,
      videoId: "M7lc1UVf-VE", // Example YouTube ID
      thumbnail: '/placeholder.svg?height=300&width=400',
      title: 'Tax Compliance Guidelines',
      category: 'tax',
      duration: '5:20',
      description: 'Stay compliant with these essential tax guidelines',
      icon: <FaShieldAlt />
    },
    {
      id: 5,
      videoId: "rfscVS0vtbw", // Example YouTube ID
      thumbnail: '/placeholder.svg?height=300&width=400',
      title: 'GST Implementation Tips',
      category: 'gst',
      duration: '7:10',
      description: 'Expert tips on implementing GST in your business operations',
      icon: <FaHandshake />
    },
    {
      id: 6,
      videoId: "eIrMbAQSU34", // Example YouTube ID
      thumbnail: '/placeholder.svg?height=300&width=400',
      title: 'Financial Security Measures',
      category: 'finance',
      duration: '9:30',
      description: 'Essential measures to ensure your financial security',
      icon: <FaShieldAlt />
    }
  ];

  const filterItems = (category) => {
    setActiveFilter(category);
  };

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openVideoModal = (videoId) => {
    setActiveVideo(videoId);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setActiveVideo(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="video-gallery-section">
      <div className="video-gallery-container">
        <div className="video-gallery-header">
          <h2>Tax & GST Video Resources</h2>
          <p>Watch our informative videos to better understand tax regulations and GST compliance</p>
        </div>
        
        <div className="video-gallery-filter">
          <button 
            className={activeFilter === 'all' ? 'active' : ''} 
            onClick={() => filterItems('all')}
          >
            All Videos
          </button>
          <button 
            className={activeFilter === 'tax' ? 'active' : ''} 
            onClick={() => filterItems('tax')}
          >
            Tax Videos
          </button>
          <button 
            className={activeFilter === 'gst' ? 'active' : ''} 
            onClick={() => filterItems('gst')}
          >
            GST Videos
          </button>
          <button 
            className={activeFilter === 'finance' ? 'active' : ''} 
            onClick={() => filterItems('finance')}
          >
            Financial Videos
          </button>
        </div>
        
        <div className="video-gallery-grid">
          {filteredItems.map((item) => (
            <div className="video-item" key={item.id}>
              <div className="video-item-inner">
                <div className="video-thumbnail">
                  <img src={item.thumbnail || "/placeholder.svg"} alt={item.title} />
                  <div className="video-duration">{item.duration}</div>
                  <div className="video-overlay">
                    <button 
                      className="play-button"
                      onClick={() => openVideoModal(item.videoId)}
                    >
                      <FaPlay />
                    </button>
                  </div>
                </div>
                <div className="video-info">
                  <div className="video-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="video-actions">
                    <button className="action-button info-button">
                      <FaInfoCircle />
                      <span>Details</span>
                    </button>
                    <button className="action-button share-button">
                      <FaShareAlt />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div className="video-modal" onClick={closeVideoModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <button className="close-button" onClick={closeVideoModal}>×</button>
            </div>
            <div className="modal-body">
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoGallery;
