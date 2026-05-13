import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Artworks from './components/Artworks';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollIndicator from './components/ScrollIndicator';
import GrainOverlay from './components/GrainOverlay';

function App() {
  return (
    <>
      <GrainOverlay />
      <ScrollIndicator />
      <main>
        <Hero />
        <About />
        <Artworks />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
