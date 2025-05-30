import React from 'react';
import Button from '../components/Button.jsx';
import '../styles/HeroSection.css';

export default function HeroSection() {
  return (
    <section className="elmentor-hero" id="hero">
      <div className="elmentor-hero-content">        <h1 className="elmentor-hero-title">
          Join DevOps Visions: A Global Community for Continuous Learning and Professional Growth.<br />
          <span className="elmentor-hero-slogan">Empower through mentorship.</span>
        </h1>
        <p className="elmentor-hero-subhead">
          Connect, collaborate, and elevate your skills with a diverse network of tech enthusiasts and experts.<br />
          As we believe, <span className="elmentor-hero-quote">"If you want to go fast, go alone. If you want to go far, go together."</span>
        </p>
        <div className="hero-cta-container">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            ariaLabel="Explore our community sections"
          >
            Explore Our Community
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            ariaLabel="Get in touch with us"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
