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
import NewsSection from './sections/NewsSection.jsx'; // Import NewsSection
import './styles/AboutSection.css';
import './styles/CirclesSection.css';
import './styles/ActivitiesSection.css';
import './styles/FounderSection.css';
import './styles/BenefitsSection.css';
import './styles/IntroductoryVideoSection.css';
import './styles/NewsSection.css'; // Import NewsSection CSS
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
        <NewsSection /> {/* Add NewsSection here */}
      </div>
    </>
  )
}

export default App
