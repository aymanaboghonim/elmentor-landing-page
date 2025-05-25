import React from 'react';
import '../styles/CommunityPresenceSection.css';
import { FaGithub, FaYoutube, FaFacebook, FaBlog } from 'react-icons/fa';
import devOpsVisionsLogo from '../assets/images/DevOps-Visions.png';

const COMMUNITY_LINKS = [
  {
    name: 'Elmentor Community Blog',
    url: 'https://devopsvisions.github.io/',
    icon: <FaBlog />,
    category: 'Elmentor Program Official Channels',
  },
  {
    name: 'Elmentor Program GitHub Org',
    url: 'https://github.com/ElmentorProgram',
    icon: <FaGithub />,
    category: 'Elmentor Program Official Channels',
  },
  {
    name: 'Elmentor Community YouTube',
    url: 'https://www.youtube.com/@MRadwanArabic',
    icon: <FaYoutube />,
    category: 'Elmentor Program Official Channels',
  },
  {
    name: 'Elmentor Facebook Page',
    url: 'https://www.facebook.com/DevOpsVisions', // Using DevOps Visions as placeholder
    icon: <FaFacebook />,
    category: 'Elmentor Program Official Channels',
  },
];

const ECOSYSTEM_LINKS = [
  {
    name: 'DevOps Visions Public Community GitHub',
    url: 'https://github.com/DevOpsVisions',
    icon: <FaGithub />,
    logo: devOpsVisionsLogo,
    category: 'Broader DevOps Visions Ecosystem',
  },
];

const CommunityPresenceSection = () => {
  return (
    <section id="community-presence" className="community-presence-section">
      <div className="community-presence-container">
        <h2 className="community-presence-title">Stay Connected & Engage</h2>
        <p className="community-presence-subtitle">
          Join our vibrant community across various platforms and be part of the conversation.
        </p>

        <div className="channels-category">
          <h3 className="category-title">Elmentor Program Official Channels</h3>
          <div className="links-grid">
            {COMMUNITY_LINKS.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="platform-link-card">
                <div className="platform-icon">{link.icon}</div>
                <span className="platform-name">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="channels-category">
          <h3 className="category-title">Broader DevOps Visions Ecosystem</h3>
          <div className="links-grid ecosystem-grid">
            {ECOSYSTEM_LINKS.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="platform-link-card ecosystem-card">
                {link.logo && <img src={link.logo} alt={`${link.name} Logo`} className="ecosystem-logo" />}
                <div className="platform-icon">{link.icon}</div>
                <span className="platform-name">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPresenceSection;
