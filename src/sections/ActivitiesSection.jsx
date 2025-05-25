import React from 'react';
import '../styles/ActivitiesSection.css';
import { FaUsers, FaProjectDiagram, FaComments, FaHandshake, FaChalkboardTeacher, FaBookOpen, FaSearch, FaBriefcase, FaChartLine, FaUserFriends, FaLightbulb } from 'react-icons/fa';

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
              <ul className="activity-items-list">
                {activityCategory.items.map((item) => (
                  <li key={item.name} className="activity-item">
                    <span className="activity-icon" style={{ marginRight: '8px', fontSize: '1.2em' }}>{item.icon}</span>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
