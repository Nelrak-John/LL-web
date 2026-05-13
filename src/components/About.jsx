import React from 'react';

const About = () => {
  const aboutContent = '음악의 질감과 시각적 서사가 긴밀하게 교차하는 지점에서, 소리와 이미지의 경계를 허무는 독창적인 설계의 기록.';

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
