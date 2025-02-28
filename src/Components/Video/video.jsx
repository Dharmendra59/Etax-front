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
  const [activeTitle, setActiveTitle] = useState('');

  const galleryItems = [
    {
      id: 1,
      videoId: "MylpEHiXMds?si=1rAIqOcldFsrGcLU",
      thumbnail: 'https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/gst-retrun-filing.jpg',
      title: 'GST Filing Explained',
      category: 'gst',
      duration: '4:30',
      description: 'A comprehensive guide to GST filing for businesses',
      icon: <FaRegFileAlt />
    },
    {
      id: 2,
      videoId: "i2qXo7AaT54?si=lLQCR-H8sKKVa_BI",
      thumbnail: 'https://media.licdn.com/dms/image/v2/D5612AQEq10hvfujoBw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1684670050075?e=2147483647&v=beta&t=sph5bIHEzip_d6LgsM2ZT22AYRUgtTIup5kS0rsBt50',
      title: 'Tax Planning Strategies',
      category: 'tax',
      duration: '6:15',
      description: 'Learn effective tax planning strategies for your business',
      icon: <FaCalculator />
    },
    {
      id: 3,
      videoId: "VE7-bNoWVXM?si=BGFnWo2XW9yEaFbH",
      thumbnail: 'https://jaro-website.s3.ap-south-1.amazonaws.com/2024/08/How-to-analyze-financial-statements-1024x620-1.jpg',
      title: 'Financial Analysis Techniques',
      category: 'finance',
      duration: '8:45',
      description: 'Master financial analysis techniques for better decision making',
      icon: <FaChartLine />
    },
    {
      id: 4,
      videoId: "YPp_e0dhcKY?si=QZg20zvQrm4otC8I",
      thumbnail: 'https://blog.saginfotech.com/wp-content/uploads/2023/11/tax-compliance-awareness-for-companies-individuals.jpg',
      title: 'Tax Compliance Guidelines',
      category: 'tax',
      duration: '5:20',
      description: 'Stay compliant with these essential tax guidelines',
      icon: <FaShieldAlt />
    },
    {
      id: 5,
      videoId: "4sDqSPOJchw?si=VdbEtU9gaLH5c7wf",
      thumbnail: 'https://irisgst.s3.amazonaws.com/media/uploads/4point.png',
      title: 'GST Implementation Tips',
      category: 'gst',
      duration: '7:10',
      description: 'Expert tips on implementing GST in your business operations',
      icon: <FaHandshake />
    },
    {
      id: 6,
      videoId: "8KWuypd3SS0?si=19gbsPKdJufeTiwp",
      thumbnail: 'https://www.collidu.com/media/catalog/product/img/1/4/145fc3e7214a483ce2d9903e083a6d5b4dbc733efacf65902e3aa3370f065e4e/financial-security-slide1.png',
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

  const openVideoModal = (videoId, title) => {
    setActiveVideo(videoId);
    setActiveTitle(title);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setActiveVideo(null);
    setActiveTitle('');
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="video-gallery-section">
      <div className="video-gallery-container">
        <div className="video-gallery-header">
          <h2>QFS Video Gallery Resources</h2>
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
                      onClick={() => openVideoModal(item.videoId, item.title)}
                    >
                      <FaPlay />
                    </button>
                  </div>
                </div>
                <div className="video-info">
                  <div className="video-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
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
              <h3>{activeTitle}</h3>
              <button className="close-button" onClick={closeVideoModal}>×</button>
            </div>
            <div className="modal-body">
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  title={activeTitle}
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
