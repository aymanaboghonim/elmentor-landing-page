import React from 'react';
import '../styles/CirclesSection.css';
import Button from '../components/Button';

// Using the exact provided descriptions
const ELMENTOR_CIRCLES = [
  {
    name: "Audience",
    description: "External audience who engage with us from the outside"
  },
  {
    name: "Guests",
    description: "Occasional participants with limited access"
  },
  {
    name: "Members",
    description: "Active, permanent participants in the community"
  },
  {
    name: "Group Advisory (GAs)",
    description: "Leaders who support and guide members"
  },
  {
    name: "Lead Group Advisory (LGAs)",
    description: "Guide both the Group Advisory and members"
  },
  {
    name: "Executives",
    description: "Set strategic direction and oversee all layers"
  }
];

const CirclesSection = () => {
  return (
    <section id="circles" className="circles-section" aria-labelledby="circles-title">
      <div className="circles-container">
        <h2 id="circles-title" className="circles-section-title">Understanding Knowledge Access Through Elmentor Circles</h2>
        
        <div className="circles-explanation">
          <p className="circles-intro">
            To structure access, engagement, and leadership within the community, we use a model called 
            <strong> Elmentor Circles</strong>. These circles define different levels of participation 
            and responsibility, arranged in clear layers:
          </p>
        </div>          <div className="circles-diagram">
          <img 
            src="./elmentor-circles.png" 
            alt="Elmentor Circles Diagram showing the layered structure from Audience to Executives" 
            className="circles-image"
          />
        </div>
        
        <div className="circles-content">
          <div className="circles-list-container">
            <ul className="circles-list">
              {ELMENTOR_CIRCLES.map((circle) => (
                <li key={circle.name} className="circle-item">
                  <span className="circle-name">{circle.name}</span> – {circle.description}
                </li>
              ))}
            </ul>
          </div>
            <div className="circles-visual-note">
            <p>
              This model helps us structure engagement, learning, and decision-making in a clear and scalable way.
            </p>
          </div>
            <div className="circles-cta">
            <Button 
              variant="primary" 
              size="large"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Join El Mentor community"
            >
              Join Our Community
            </Button>
            <Button 
              variant="secondary" 
              size="large"
              onClick={() => document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Learn about our activities"
            >
              Explore Our Activities            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CirclesSection;
