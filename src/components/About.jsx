import React from 'react';

const About = () => {
  const aboutContent = 'From the chaotic rhythm of the Emergency Room to the deep resonance of the studio. Lonely Legacy(LL) is a journey of defining heritage through sound and vision.';

  return (
    <section className="about">
      <div className="about-content">
        <h1 className="about-title font-slogan">Lonely Legacy</h1>
        <p className="about-text font-body">
          {aboutContent}
        </p>
      </div>
    </section>
  );
};

export default About;
