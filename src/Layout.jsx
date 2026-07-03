import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  const location = useLocation();
  const path = location.pathname;

  const isLightPage = ['/our-story', '/blogs', '/contact'].includes(path);

  useEffect(() => {
    if (isLightPage) {
      document.body.className = 'theme-white';
    } else {
      document.body.className = 'theme-black';
    }
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Setup scroll fade-in observer
    const animatedElements = document.querySelectorAll('.fade-in-section');
    let observer;
    if (animatedElements.length > 0) {
      const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      animatedElements.forEach(element => {
        observer.observe(element);
      });
    }

    return () => {
      if (observer) {
        animatedElements.forEach(element => {
          observer.unobserve(element);
        });
      }
    };
  }, [path, isLightPage]);

  // Set the activePage name based on location path
  let activePage = 'home';
  if (path === '/portfolio') activePage = 'portfolio';
  else if (path === '/our-story') activePage = 'our-story';
  else if (path === '/blogs') activePage = 'blogs';
  else if (path === '/contact') activePage = 'contact';

  return (
    <>
      <Header activePage={activePage} isLight={isLightPage} />
      <main>{children}</main>
      <Footer isLight={isLightPage} />
    </>
  );
}

export default Layout;
