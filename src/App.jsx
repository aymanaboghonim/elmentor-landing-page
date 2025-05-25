import { useState } from 'react'
import Header from './components/Header.jsx';
import './styles/Header.css';
import HeroSection from './sections/HeroSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import './styles/AboutSection.css';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <main style={{ marginTop: 80 }}>
        <AboutSection />
      </main>
    </>
  )
}

export default App
