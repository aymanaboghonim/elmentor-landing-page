import React, { useState } from 'react';
import '../styles/ContactSection.css';
import { FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitted(false);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitError('Please fill in all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitError('Please enter a valid email address.');
      return;
    }

    // Simulate form submission
    console.log('Form data submitted:', formData);
    // Replace with actual API call to a backend or email service
    // For now, we'll just simulate a successful submission
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      // throw new Error("Simulated network error"); // Uncomment to test error handling
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-section-title">Get in Touch</h2>
        <p className="contact-section-subtitle">
          Have questions, feedback, or want to get involved? Send us a message!
        </p>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              aria-required="true"
            ></textarea>
          </div>
          <button type="submit" className="contact-submit-button">
            Send Message <FaPaperPlane style={{ marginLeft: '8px' }} />
          </button>
          {isSubmitted && (
            <p className="form-success-message">
              Thank you for your message! We'll get back to you soon.
            </p>
          )}
          {submitError && (
            <p className="form-error-message">{submitError}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
