import { useState } from 'react'
import Header from './components/Header.jsx';
import './styles/Header.css';
import HeroSection from './sections/HeroSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import CirclesSection from './sections/CirclesSection.jsx';
import './styles/AboutSection.css';
import './styles/CirclesSection.css';
import './styles/App.css';

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <HeroSection />
        <AboutSection />
        <CirclesSection />
      </div>
    </>
  )
}

export default App
