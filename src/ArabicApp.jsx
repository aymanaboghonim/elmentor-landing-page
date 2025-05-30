import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import ArabicVersionPlaceholder from './components/ArabicVersionPlaceholder.jsx';
import SEOMetaTags from './components/SEOMetaTags.jsx';
import Footer from './components/Footer.jsx';
import './styles/Header.css';
import './styles/ArabicVersionPlaceholder.css';
import './styles/Footer.css';
import './styles/designSystem.css';
import './styles/App.css';

function ArabicApp() {
  return (
    <>
      <SEOMetaTags 
        title="برنامج المنتور | الصفحة الرئيسية"
        description="برنامج المنتور - منصة للتوجيه والتعلم في مجال تكنولوجيا المعلومات"
        lang="ar"
      />
      <Header />
      <ArabicVersionPlaceholder />
      <Footer />
    </>
  )
}

export default ArabicApp;
