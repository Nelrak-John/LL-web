import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ['Hero', 'About', 'Artworks', 'Projects', 'Contact'];

  useEffect(() => {
    const sectionElements = document.querySelectorAll('section');
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(sectionElements).indexOf(entry.target);
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    }, observerOptions);

    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (index) => {
    const sectionElements = document.querySelectorAll('section');
    sectionElements[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="scroll-indicator">
      {sections.map((section, index) => (
        <motion.div
          key={section}
          className={`indicator-item ${activeSection === index ? 'active' : ''}`}
          onClick={() => scrollToSection(index)}
          animate={{
            rotate: activeSection === index ? 45 : 0,
            scale: activeSection === index ? 0.8 : 1,
          }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <div className="indicator-plus">
            <span className="indicator-line horizontal"></span>
            <span className="indicator-line vertical"></span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollIndicator;
