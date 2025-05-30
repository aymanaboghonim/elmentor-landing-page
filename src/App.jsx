import { useState, useEffect } from 'react'
import Header from './components/Header.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import SEOMetaTags from './components/SEOMetaTags.jsx';
import { initializeUXEnhancements } from './utils/uxEnhancements.js';
import { initializePerformanceOptimizations } from './utils/performanceOptimizations.js';
import './styles/Header.css';
import './styles/ScrollProgress.css';
import './styles/designSystem.css'; // Import design system
import './styles/layoutSystem.css'; // Import automated layout system
import HeroSection from './sections/HeroSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import CirclesSection from './sections/CirclesSection.jsx';
import ActivitiesSection from './sections/ActivitiesSection.jsx';
import FounderSection from './sections/FounderSection.jsx';
import BenefitsSection from './sections/BenefitsSection.jsx';
import IntroductoryVideoSection from './sections/IntroductoryVideoSection.jsx';
import NewsSection from './sections/NewsSection.jsx'; // Import NewsSection
import ContactSection from './sections/ContactSection.jsx';
import CommunityPresenceSection from './sections/CommunityPresenceSection.jsx';
import Footer from './components/Footer.jsx'; // Import Footer
import './styles/AboutSection.css';
import './styles/CirclesSection.css';
import './styles/ActivitiesSection.css';
import './styles/FounderSection.css';
import './styles/BenefitsSection.css';
import './styles/IntroductoryVideoSection.css';
import './styles/NewsSection.css'; // Import NewsSection CSS
import './styles/ContactSection.css';
import './styles/CommunityPresenceSection.css'; // Import CommunityPresenceSection CSS
import './styles/Footer.css'; // Import Footer CSS
import './styles/App.css';

function App() {
  useEffect(() => {
    initializeUXEnhancements();
    initializePerformanceOptimizations();
  }, []);

  return (
    <>
      <SEOMetaTags />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollProgress />
      <Header />
      <main id="main-content" className="main-content">
        <HeroSection />
        <AboutSection />
        <CirclesSection />
        <ActivitiesSection />
        <FounderSection />
        <BenefitsSection />
        <IntroductoryVideoSection />
        <NewsSection /> {/* Add NewsSection here */}
        <ContactSection />
        <CommunityPresenceSection />
      </main>
      <Footer /> {/* Add Footer here */}
    </>
  )
}

export default App
