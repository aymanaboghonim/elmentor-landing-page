import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import logo from '../assets/images/elmentor-logo.png';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Activities', href: '#activities' },
  { label: 'Circles', href: '#circles' },
  { label: 'Founder', href: '#founder' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact' },
];

const MOBILE_BREAKPOINT = 900;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_BREAKPOINT);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleResize = () => {
      const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false); // Close mobile menu if switching to desktop
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`elmentor-header${scrolled ? ' scrolled' : ''}`}>
      <nav className="elmentor-nav" aria-label="Main Navigation">
        <a href="#home" className="elmentor-logo-link" tabIndex={0}>
          <img src={logo} alt="Elmentor Program Logo" className="elmentor-logo" />
        </a>
        {isMobile && (
          <button
            className="elmentor-hamburger"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="elmentor-mobile-menu"
            onClick={handleMenuToggle}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        )}
        {!isMobile && (
          <>
            <ul className="elmentor-nav-links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} tabIndex={0} onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="elmentor-lang-switcher" role="group" aria-label="Language Switcher">
              <button className="lang-btn active" tabIndex={0}>EN</button>
              <span className="lang-divider">|</span>
              <button className="lang-btn" tabIndex={0}>ع</button>
            </div>
          </>
        )}
      </nav>
      {/* Mobile Menu Overlay */}
      {isMobile && (
        <div
          id="elmentor-mobile-menu"
          className={`elmentor-mobile-menu${menuOpen ? ' open' : ''}`}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} tabIndex={0} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="elmentor-lang-switcher-mobile" role="group" aria-label="Language Switcher">
            <button className="lang-btn active" tabIndex={0}>EN</button>
            <span className="lang-divider">|</span>
            <button className="lang-btn" tabIndex={0}>ع</button>
          </div>
        </div>
      )}
      {isMobile && menuOpen && <div className="elmentor-menu-backdrop" onClick={closeMenu} tabIndex={-1} aria-hidden="true"></div>}
    </header>
  );
}
