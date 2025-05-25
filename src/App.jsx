import { useState } from 'react'
import Header from './components/Header.jsx';
import './styles/Header.css';
import HeroSection from './sections/HeroSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import CirclesSection from './sections/CirclesSection.jsx';
import ActivitiesSection from './sections/ActivitiesSection.jsx';
import FounderSection from './sections/FounderSection.jsx';
import BenefitsSection from './sections/BenefitsSection.jsx';
import IntroductoryVideoSection from './sections/IntroductoryVideoSection.jsx';
import NewsSection from './sections/NewsSection.jsx';
import ContactSection from './sections/ContactSection.jsx';
import CommunityPresenceSection from './sections/CommunityPresenceSection.jsx'; // Import CommunityPresenceSection
import './styles/AboutSection.css';
import './styles/CirclesSection.css';
import './styles/ActivitiesSection.css';
import './styles/FounderSection.css';
import './styles/BenefitsSection.css';
import './styles/IntroductoryVideoSection.css';
import './styles/NewsSection.css';
import './styles/ContactSection.css';
import './styles/CommunityPresenceSection.css'; // Import CommunityPresenceSection CSS
import './styles/App.css';

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <HeroSection />
        <AboutSection />
        <CirclesSection />
        <ActivitiesSection />
        <FounderSection />
        <BenefitsSection />
        <IntroductoryVideoSection />
        <NewsSection />
        <ContactSection />
        <CommunityPresenceSection /> {/* Add CommunityPresenceSection here */}
      </div>
    </>
  )
}

export default App
