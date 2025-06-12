import React, { useState } from 'react';

const CommunityGatheringSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const gatherings = [
    {
      title: "Japan/Tokyo Nov 2022",
      image: "https://raw.githubusercontent.com/MohamedRadwan-DevOps/devops-step-by-step/main/source/images/mics/jap-nov-23.jpg",
      location: "Tokyo, Japan",
      date: "November 2022"
    },
    {
      title: "Egypt/Cairo Feb 2023",
      image: "https://raw.githubusercontent.com/MohamedRadwan-DevOps/devops-step-by-step/main/source/images/mics/eg-2-23.jpg",
      location: "Cairo, Egypt",
      date: "February 2023"
    },
    {
      title: "USA/Seattle April 2023",
      image: "https://raw.githubusercontent.com/MohamedRadwan-DevOps/devops-step-by-step/main/source/images/mics/usa-apr-23.jpg",
      location: "Seattle, USA",
      date: "April 2023"
    },
    {
      title: "KSA/Riyadh March 2024",
      image: "https://raw.githubusercontent.com/MohamedRadwan-DevOps/devops-step-by-step/main/source/images/mics/ksa-mar-24.jpg",
      location: "Riyadh, KSA",
      date: "March 2024"
    },
    {
      title: "Egypt/Cairo August 2024",
      image: "https://raw.githubusercontent.com/MohamedRadwan-DevOps/devops-step-by-step/main/source/images/mics/egy-aug-24.jpg",
      location: "Cairo, Egypt",
      date: "August 2024"
    }
  ];

  return (
    <section className="community-gathering-section" id="community-gathering">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Community Gathering</h2>
          <p className="section-subtitle">
            Join our global community of DevOps professionals and mentoring enthusiasts. 
            Our gatherings bring together passionate individuals from around the world to share knowledge, 
            network, and grow together.
          </p>
        </div>
          <div className="gatherings-grid">
          {gatherings.map((gathering, index) => (
            <div key={index} className="gathering-card">
              <div className="gathering-image-container">
                <img 
                  src={gathering.image} 
                  alt={`Community gathering in ${gathering.location}`}
                  className="gathering-image"
                  loading="lazy"
                  onClick={() => setSelectedImage({...gathering, index})}
                  style={{ cursor: 'pointer' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="image-placeholder" style={{ display: 'none' }}>
                  <span>📍 {gathering.location}</span>
                </div>
                <div className="image-overlay">
                  <span className="view-gallery-text">🔍 Click to view in gallery</span>
                </div>
              </div>
              <div className="gathering-content">
                <h3 className="gathering-title">{gathering.title}</h3>
                <div className="gathering-details">
                  <span className="gathering-location">
                    <i className="icon-location" aria-hidden="true">📍</i>
                    {gathering.location}
                  </span>
                  <span className="gathering-date">
                    <i className="icon-calendar" aria-hidden="true">📅</i>
                    {gathering.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="gathering-cta">
          <p className="cta-text">
            Want to join our next gathering or organize one in your city?
          </p>
          <a 
            href="https://www.facebook.com/mradwandevops" 
            className="btn btn-primary gathering-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message Eng Mohamed Radwan on Facebook about community gatherings"
          >            Message Eng Mohamed Radwan on Facebook
          </a>
        </div>
        
        {/* Gallery Modal */}
        {selectedImage && (
          <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
            <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="gallery-close" 
                onClick={() => setSelectedImage(null)}
                aria-label="Close gallery"
              >
                ×
              </button>
              <div className="gallery-image-container">
                <img 
                  src={selectedImage.image} 
                  alt={`Community gathering in ${selectedImage.location}`}
                  className="gallery-image"
                />
              </div>
              <div className="gallery-info">
                <h3>{selectedImage.title}</h3>
                <p>📍 {selectedImage.location} • 📅 {selectedImage.date}</p>
              </div>
              <div className="gallery-navigation">
                <button 
                  className="gallery-nav-btn gallery-prev"
                  onClick={() => {
                    const prevIndex = selectedImage.index === 0 ? gatherings.length - 1 : selectedImage.index - 1;
                    setSelectedImage({...gatherings[prevIndex], index: prevIndex});
                  }}
                  aria-label="Previous image"
                >
                  ‹ Previous
                </button>
                <span className="gallery-counter">
                  {selectedImage.index + 1} of {gatherings.length}
                </span>
                <button 
                  className="gallery-nav-btn gallery-next"
                  onClick={() => {
                    const nextIndex = selectedImage.index === gatherings.length - 1 ? 0 : selectedImage.index + 1;
                    setSelectedImage({...gatherings[nextIndex], index: nextIndex});
                  }}
                  aria-label="Next image"
                >
                  Next ›
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CommunityGatheringSection;
