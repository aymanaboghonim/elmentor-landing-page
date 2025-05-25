import React from 'react';
import '../styles/BenefitsSection.css';
import { FaGlobe, FaChalkboardTeacher, FaUsers, FaProjectDiagram, FaRocket, FaHandsHelping, FaGithub, FaMicrosoft } from 'react-icons/fa'; // Using FaMicrosoft for Teams

const BENEFITS_DATA = [
  { text: 'Global network access', icon: <FaGlobe /> },
  { text: 'Exclusive knowledge sessions', icon: <FaChalkboardTeacher /> },
  { text: 'Mentorship from industry leaders', icon: <FaUsers /> }, // Combined Mentorship
  { text: 'Project collaboration on real-world scenarios', icon: <FaProjectDiagram /> }, // Combined Project Collaboration
  { text: 'Career acceleration and support', icon: <FaRocket /> }, // Combined Career Acceleration
  { text: 'Supportive community for growth', icon: <FaHandsHelping /> }, // Combined Support for Growth
  { text: 'Organized knowledge base (GitHub-based)', icon: <FaGithub /> },
  { text: 'Dynamic communication channels (Teams-based)', icon: <FaMicrosoft /> },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="benefits-section">
      <div className="benefits-container">
        <h2 className="benefits-title">Unlock Your Potential with Elmentor</h2>
        <p className="benefits-subtitle">
          Joining Elmentor offers a multitude of advantages designed to foster your professional and personal growth in the tech world.
        </p>
        <div className="benefits-grid">
          {BENEFITS_DATA.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon-container">
                {benefit.icon}
              </div>
              <h3 className="benefit-text">{benefit.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
