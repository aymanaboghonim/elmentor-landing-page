import React from 'react';
import Button from '../components/Button.jsx';
import '../styles/ActivitiesSection.css';
import { FaUsers, FaProjectDiagram, FaComments, FaHandshake, FaChalkboardTeacher, FaBookOpen, FaSearch, FaBriefcase, FaChartLine, FaUserFriends, FaLightbulb, FaArrowRight } from 'react-icons/fa';

const ACTIVITIES_DATA = [
  {
    category: 'Technical Skills & Projects',
    items: [
      { name: 'DevOps Public Sessions', icon: <FaChalkboardTeacher /> },
      { name: 'Community Projects (Real-world practice)', icon: <FaProjectDiagram /> },
    ],
  },
  {
    category: 'Soft Skills Development',
    items: [
      { name: 'Communication Skills', icon: <FaComments /> },
      { name: 'Negotiation Skills', icon: <FaHandshake /> },
      { name: 'Understanding Corporate Dynamics', icon: <FaBriefcase /> },
      { name: 'Self-Management (Time, Motivation)', icon: <FaLightbulb /> },
    ],
  },
  {
    category: 'Networking & Resources',
    items: [
      { name: 'Professional Networking', icon: <FaUsers /> },
      { name: 'Resource Sharing', icon: <FaBookOpen /> },
    ],
  },
  {
    category: 'Career Development',
    items: [
      { name: 'CV Reviews', icon: <FaSearch /> },
      { name: 'Job Referrals', icon: <FaBriefcase /> },
      { name: 'Career Guidance', icon: <FaChartLine /> },
    ],
  },
  {
    category: 'Growth & Support',
    items: [
      { name: 'Peer Support Groups', icon: <FaUserFriends /> },
      { name: 'Personal Growth Workshops', icon: <FaLightbulb /> },
    ],
  },
  {
    category: 'Mentorship Services',
    items: [
      { name: 'One-on-One Mentorship', icon: <FaChalkboardTeacher /> },
      { name: 'Mentor-For-All Sessions', icon: <FaUsers /> },
    ],
  },
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="activities-section">
      <div className="activities-container">
        <h2 className="activities-title">Our Activities</h2>
        <p className="activities-subtitle">
          Engage in a variety of activities designed to enhance your skills, expand your network, and accelerate your career.
        </p>
        <div className="activities-grid">
          {ACTIVITIES_DATA.map((activityCategory) => (
            <div key={activityCategory.category} className="activity-category-card">
              <h3 className="activity-category-title">{activityCategory.category}</h3>
              <ul className="activity-items-list">                {activityCategory.items.map((item, index) => (
                  <li key={item.name} className="activity-item">
                    <span className="activity-icon" aria-hidden="true">{item.icon}</span>
                    <span className="activity-text">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="activities-cta">
          <p className="activities-cta-text">
            Ready to join our community and start your professional growth journey?
          </p>
          <div className="activities-cta-buttons">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              ariaLabel="Join DevOps Visions community"
              icon={<FaArrowRight />}
              iconPosition="right"
            >
              Join Now
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              ariaLabel="Learn more about our programs"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
