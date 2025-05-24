import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx';
import './styles/Header.css';
import HeroSection from './sections/HeroSection.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection />
      {/* Main content sections will go here */}
      <main style={{ marginTop: 80 }}>
        {/* Placeholder for About, etc. */}
        <section id="about" style={{ height: '100vh', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2>About Our Services</h2>
        </section>
      </main>
    </>
  )
}

export default App
