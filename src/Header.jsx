import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header({ activePage, isLight }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      {/* Header Navigation */}
      <header className={`header-nav ${isLight ? 'nav-light-bg' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        {/* Logo (Left) */}
        <Link to="/" className="logo-container" onClick={closeMobileMenu}>
          <h1 className="logo-text">
            Blushing Bride
            <span>Photography & Films</span>
          </h1>
        </Link>

        {/* Center/Right Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <ul className="nav-menu">
            <li>
              <Link to="/" className={`nav-link ${activePage === 'home' ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className={`nav-link ${activePage === 'portfolio' ? 'active' : ''}`}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/our-story" className={`nav-link ${activePage === 'our-story' ? 'active' : ''}`}>
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/blogs" className={`nav-link ${activePage === 'blogs' ? 'active' : ''}`}>
                Blogs
              </Link>
            </li>

            {/* More Dropdown */}
            <li className="nav-dropdown-wrapper">
              <a href="#" className="nav-link dropdown-trigger" onClick={(e) => e.preventDefault()}>
                More <span style={{ fontSize: '0.6rem', verticalAlign: 'middle' }}>&#9662;</span>
              </a>
              <ul className="nav-dropdown">
                <li><a href="#" onClick={(e) => e.preventDefault()}>Careers</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Travel</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Backyard</a></li>
              </ul>
            </li>
          </ul>

          {/* Social Icons in Header */}
          <div className="nav-social-icons" style={{ display: 'flex', gap: '15px', alignItems: 'center', marginLeft: '20px' }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

          {/* Primary CTA Button, Gold Accent */}
          <Link to="/contact" className="btn-nav-action" style={{ marginLeft: '20px' }}>
            Get In Touch
          </Link>
        </nav>

        {/* Mobile Burger Menu Button */}
        <button className={`burger-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle Navigation Menu">
          <div className="burger-line line-1"></div>
          <div className="burger-line line-2"></div>
          <div className="burger-line line-3"></div>
        </button>
      </header>

      {/* Mobile Navigation Overlay Drawer */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-menu">
          <li>
            <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
              Home
              <span>Start Here</span>
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="mobile-nav-link" onClick={closeMobileMenu}>
              Portfolio
              <span>Our Works</span>
            </Link>
          </li>
          <li>
            <Link to="/our-story" className="mobile-nav-link" onClick={closeMobileMenu}>
              Our Story
              <span>About Us</span>
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="mobile-nav-link" onClick={closeMobileMenu}>
              Blogs
              <span>Latest Updates</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>
              Contact Us
              <span>Get In Touch</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
