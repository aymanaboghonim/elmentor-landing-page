import React from 'react';
import '../styles/FounderSection.css';
import founderImage from '../assets/images/mohamed-radwan.png';
import { FaLinkedin, FaGithub, FaBlog, FaYoutube } from 'react-icons/fa';

const FounderSection = () => {
  const founderName = "Mohamed Radwan";
  const founderTitle = "Microsoft DevOps MVP, Founder & Executive, Elmentor Program (24+ years experience)";
  const bio = "Mohamed Radwan is a Microsoft MVP with over 24 years of experience in the tech industry. He has worked with more than 60 global enterprise companies, specializing in DevOps, Azure, Agile, and GitHub. Mohamed is passionate about automation, community contributions, and is a frequent speaker at major technology conferences. He founded the Elmentor Program to empower tech professionals through mentorship and collaborative knowledge sharing.";
  
  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/mohamedahmedradwan/', label: 'View LinkedIn Profile' },
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/MohamedRadwan-DevOps/devops-step-by-step', label: 'GitHub Portfolio' },
    { name: 'Blog', icon: <FaBlog />, url: 'https://mohamedradwan-devops.github.io/', label: 'Personal Blog' },
    { name: 'YouTube', icon: <FaYoutube />, url: 'https://www.youtube.com/@MRadwanMSF', label: 'Watch Mohamed on YouTube' },
  ];

  return (
    <section id="founder" className="founder-section">
      <div className="founder-container">
        <h2 className="founder-section-title">About the Founder</h2>
        <div className="founder-content-wrapper">
          <div className="founder-image-container">
            <img src={founderImage} alt={founderName} className="founder-image" />
          </div>
          <div className="founder-details-container">
            <h3 className="founder-name">{founderName}</h3>
            <p className="founder-title">{founderTitle}</p>
            <p className="founder-bio">{bio}</p>
            <div className="founder-social-links">
              {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="founder-social-link" aria-label={link.label}>
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
