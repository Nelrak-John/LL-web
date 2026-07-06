import React from 'react';

const About = () => {
  const aboutContent = (
    <div 
      className="slogan-image-wrapper"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200%',
      }}
    >
      <img 
        src="/images/IMG_etc/Web_slogun.png" 
        alt="From the chaotic rhythm studio. LL is a journey of defining heritage through sound and vision." 
        className="slogan-image"
        width="2200" 
        height="1000" 
        sizes="(max-width: 768px) 100vw, 1000px"
        loading="eager" 
        style={{
          width: '200%',
          maxWidth: '1000px', 
          height: 'auto',
          objectFit: 'contain',
          display: 'block',
          margin: '40px auto 0 auto', 
          imageRendering: '-webkit-optimize-contrast',
        }}
      />
    </div>
  );

  return (
    <section className="about">
      <div className="about-content">
        <h1 className="about-title font-slogan">Lonely Legacy</h1>
        <div 
          className="about-text-container"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {aboutContent}
        </div>
      </div>
    </section>
  );
};

export default About;