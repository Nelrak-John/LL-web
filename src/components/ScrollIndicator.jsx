import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ['Hero', 'About', 'Artworks', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll('section');
      sectionElements.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index) => {
    const sectionElements = document.querySelectorAll('section');
    sectionElements[index].scrollIntoView({ behavior: 'smooth' });
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
