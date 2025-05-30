import React from 'react';
import '../styles/CommunityPresenceSection.css';
import { FaGithub, FaYoutube, FaFacebook, FaBlog } from 'react-icons/fa';
import devOpsVisionsLogo from '../assets/images/DevOps-Visions.png';
import Button from '../components/Button';

const COMMUNITY_LINKS = [  {
    name: 'DevOps Visions Community Blog',
    url: 'https://devopsvisions.github.io/',
    icon: <FaBlog />,
    category: 'DevOps Visions Program Official Channels',
  },  {
    name: 'DevOps Visions Program GitHub Org',
    url: 'https://github.com/DevOpsVisions',
    icon: <FaGithub />,
    category: 'DevOps Visions Program Official Channels',
  },  {
    name: 'DevOps Visions Community YouTube',
    url: 'https://www.youtube.com/@MRadwanArabic',
    icon: <FaYoutube />,
    category: 'DevOps Visions Program Official Channels',
  },  {
    name: 'DevOps Visions Facebook Page',
    url: 'https://www.facebook.com/DevOpsVisions', // Using DevOps Visions as placeholder
    icon: <FaFacebook />,
    category: 'DevOps Visions Program Official Channels',
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
    <section id="community-presence" className="community-presence-section" aria-labelledby="community-title">
      <div className="community-presence-container">
        <h2 id="community-title" className="community-presence-title">Stay Connected & Engage</h2>
        <p className="community-presence-subtitle">
          Join our vibrant community across various platforms and be part of the conversation.
        </p>

        <div className="channels-category">          <h3 className="category-title">DevOps Visions Program Official Channels</h3>
          <div className="links-grid" role="list" aria-label="Official DevOps Visions Program social media channels">
            {COMMUNITY_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="platform-link-card"
                role="listitem"
                aria-label={`Visit ${link.name} - opens in new tab`}
              >
                <div className="platform-icon" aria-hidden="true">{link.icon}</div>
                <span className="platform-name">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="channels-category">
          <h3 className="category-title">Broader DevOps Visions Ecosystem</h3>
          <div className="links-grid ecosystem-grid" role="list" aria-label="DevOps Visions ecosystem links">
            {ECOSYSTEM_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="platform-link-card ecosystem-card"
                role="listitem"
                aria-label={`Visit ${link.name} - opens in new tab`}
              >
                {link.logo && <img src={link.logo} alt={`${link.name} Logo`} className="ecosystem-logo" />}
                <div className="platform-icon" aria-hidden="true">{link.icon}</div>
                <span className="platform-name">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="community-cta-section">
          <h3 className="community-cta-title">Ready to Join Our Community?</h3>
          <p className="community-cta-text">
            Connect with like-minded professionals, share knowledge, and grow together in our supportive community.
          </p>
          <div className="community-cta-buttons">
            <Button 
              variant="primary" 
              size="large"
              onClick={() => window.open('https://github.com/DevOpsVisions', '_blank')}
              aria-label="Join our GitHub community - opens in new tab"
            >
              Join GitHub Community
            </Button>
            <Button 
              variant="secondary" 
              size="large"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Contact us to learn more about the community"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPresenceSection;
