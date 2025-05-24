import React from "react";
import { FaGithub, FaMicrosoft, FaHandsHelping, FaLightbulb, FaUsers } from "react-icons/fa";
import "../styles/AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">About the Elmentor Program</h2>
        <div className="about-content">
          <div className="about-block">
            <h3 className="about-subtitle"><FaLightbulb className="about-icon" /> Mission Statement</h3>
            <p className="about-body">
              The Elmentor Program empowers tech professionals worldwide through mentorship, knowledge sharing, and a collaborative, transparent, and inclusive community. Our mission is to foster continuous learning, professional growth, and genuine value for all members.
            </p>
          </div>
          <div className="about-block">
            <h3 className="about-subtitle"><FaHandsHelping className="about-icon" /> Core Values</h3>
            <ul className="about-list">
              <li>Empowerment through mentorship and knowledge sharing</li>
              <li>Collaboration, transparency, and inclusivity</li>
              <li>Continuous learning and professional growth</li>
              <li>Genuine value and support for every member</li>
            </ul>
          </div>
          <div className="about-block">
            <h3 className="about-subtitle"><FaUsers className="about-icon" /> What We Offer</h3>
            <ul className="about-list">
              <li>Mentorship from experienced industry leaders</li>
              <li>Access to curated knowledge and resources</li>
              <li>Networking and community support</li>
              <li>Opportunities for real-world projects and growth</li>
            </ul>
            <div className="about-models">
              <p className="about-body">
                <span className="about-key"><FaGithub className="about-icon" /> GitHub</span> is used for structured knowledge sharing and transparent collaboration.<br />
                <span className="about-key"><FaMicrosoft className="about-icon" /> Microsoft Teams</span> powers our real-time communication and community engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
