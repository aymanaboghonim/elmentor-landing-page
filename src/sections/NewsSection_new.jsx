import React, { useState, useEffect } from 'react';
import '../styles/NewsSection.css';
import Button from '../components/Button';

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock news data with real GitHub-style content
    const mockNews = [
      {
        id: 1,
        title: "New DevOps Circle Initiative Launching Soon",
        summary: "We're excited to announce the upcoming launch of our specialized DevOps Circle, focusing on CI/CD, Infrastructure as Code, and cloud automation best practices.",
        date: "2025-01-15",
        type: "announcement",
        source: "El Mentor Program",
        link: "#circles"
      },
      {
        id: 2,
        title: "Community Project: Open Source Mentorship Platform",
        summary: "Join our latest community project to build an open-source mentorship platform that will help connect mentors and mentees across different technology domains.",
        date: "2025-01-10",
        type: "project",
        source: "GitHub Repository",
        link: "https://github.com/elmentor-program"
      },
      {
        id: 3,
        title: "Monthly Knowledge Session: Cloud Architecture Patterns",
        summary: "Join Microsoft MVP Mohamed for an in-depth session on modern cloud architecture patterns and best practices for scalable applications.",
        date: "2025-01-08",
        type: "event",
        source: "El Mentor Sessions",
        link: "#activities"
      },
      {
        id: 4,
        title: "New Members Welcome: January 2025 Cohort",
        summary: "We're welcoming 50+ new members to the El Mentor community this month. Learn about our onboarding process and how to get started.",
        date: "2025-01-05",
        type: "community",
        source: "Community Updates",
        link: "#about"
      }
    ];

    // Simulate API call with mock data
    const fetchNews = () => {
      setLoading(true);
      setTimeout(() => {
        setNews(mockNews);
        setLoading(false);
      }, 1000);
    };

    fetchNews();
  }, []);

  const getNewsTypeIcon = (type) => {
    switch (type) {
      case 'announcement':
        return '📢';
      case 'project':
        return '🚀';
      case 'event':
        return '📅';
      case 'community':
        return '👥';
      default:
        return '📰';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section id="news" className="news-section" aria-labelledby="news-title">
        <div className="news-container">
          <h2 id="news-title" className="news-section-title">Latest News & Updates</h2>
          <div className="news-loading">
            <div className="loading-spinner"></div>
            <p>Loading latest updates...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="news-section" aria-labelledby="news-title">
      <div className="news-container">
        <h2 id="news-title" className="news-section-title">Latest News & Updates</h2>
        <p className="news-subtitle">
          Stay informed about our latest initiatives, community projects, and upcoming events.
        </p>

        <div className="news-grid">
          {news.map((article) => (
            <article key={article.id} className="news-card">
              <div className="news-header">
                <span className="news-type-icon" aria-label={`${article.type} news`}>
                  {getNewsTypeIcon(article.type)}
                </span>
                <div className="news-meta">
                  <span className="news-date">{formatDate(article.date)}</span>
                  <span className="news-source">{article.source}</span>
                </div>
              </div>
              
              <h3 className="news-title">{article.title}</h3>
              <p className="news-summary">{article.summary}</p>
              
              <div className="news-footer">
                <Button
                  variant="secondary"
                  size="small"
                  onClick={() => {
                    if (article.link.startsWith('#')) {
                      document.querySelector(article.link)?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.open(article.link, '_blank', 'noopener,noreferrer');
                    }
                  }}
                  aria-label={`Read more about ${article.title}`}
                >
                  Read More
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="news-cta">
          <Button
            variant="primary"
            size="large"
            onClick={() => window.open('https://github.com/elmentor-program', '_blank', 'noopener,noreferrer')}
            aria-label="Follow our GitHub for more updates"
          >
            Follow on GitHub
          </Button>
          <Button
            variant="secondary"
            size="large"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Subscribe to newsletter"
          >
            Subscribe to Updates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
