import React from 'react';

const About = () => {
  const aboutContent = (
    <div 
      className="slogan-image-wrapper"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '150%',
      }}
    >
      <img 
        src="/images/IMG_etc/Web_slogun.png" 
        alt="From the chaotic rhythm studio. LL is a journey of defining heritage through sound and vision." 
        className="slogan-image"
        width="1650" 
        height="750" 
        sizes="(max-width: 768px) 100vw, 1000px"
        loading="eager" 
        
        onDragStart={(e) => e.preventDefault()} 
        
        style={{
          width: '150%',
          maxWidth: '1500px', 
          height: 'auto',
          objectFit: 'contain',
          display: 'block',
          /* ★ 타이틀이 빠진 만큼 상단 여백을 마진(0 auto)으로 깔끔하게 리셋 */
          margin: '0 auto', 
          imageRendering: '-webkit-optimize-contrast',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          WebkitUserDrag: 'none',
        }}
      />
    </div>
  );

  return (
    <section className="about">
      <div className="about-content">
        {/* ★ 마스터 튜닝 포인트: 타이틀 텍스트 태그를 통째로 걷어내어 미니멀 무드 극대화 */}
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