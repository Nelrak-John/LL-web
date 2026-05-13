import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    console.error('로고 이미지 로딩 실패: /images/web_logo/LL_logo_B_W.png');
  };

  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/videos/metallic-loop.mp4" type="video/mp4" />
      </video>
      <div className="hero-logo-container">
        {imageError ? (
          <h1 className="hero-logo-text font-slogan">LONELY LEGACY</h1>
        ) : (
          <img
            src="/images/web_logo/LL_logo_B_W.png"
            alt="LONELY LEGACY"
            className="hero-logo"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
