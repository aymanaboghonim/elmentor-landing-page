import React from 'react';
import '../styles/IntroductoryVideoSection.css';

const IntroductoryVideoSection = () => {
  const videoId = 'hZ2oxrJg2Cc';
  const startTime = 5; // Start at 5 seconds
  const videoUrl = `https://www.youtube.com/embed/${videoId}?start=${startTime}&autoplay=0&rel=0`; // Added rel=0 to hide related videos

  return (
    <section id="intro-video" className="intro-video-section">
      <div className="intro-video-container">
        <h2 className="intro-video-title">Discover Elmentor: Watch Our Introduction</h2>
        <p className="intro-video-subtitle">
          Get a quick overview of the Elmentor Program and learn how it can help you achieve your career goals.
        </p>
        <div className="video-responsive-wrapper">
          <iframe
            src={videoUrl}
            title="What is the Elmentor Program and How Can It Help You?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default IntroductoryVideoSection;
