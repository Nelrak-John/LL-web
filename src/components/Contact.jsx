import React from 'react';

const Contact = () => {
  return (
    <section 
      className="contact" 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        boxSizing: 'border-box',
        padding: '300px 0px 150px 0px', 
        minHeight: '70vh' 
      }}
    >
      {/* 1. 상단 Contact 메인 타이틀 */}
      <div 
        className="contact-title-container" 
        style={{
          width: '100%',
          textAlign: 'center',
          
          // 🚨 [가장 중요] 타이틀과 첫 번째 링크(KARLEN) 사이의 간격을 벌립니다.
          // 현재 '-5px' 혹은 '0px'로 밀착되어 있다면, 이 값을 정방향 수치로 변경하십시오.
          marginBottom: '-80px' // 수치를 키울수록 빨간 화살표처럼 아래로 밀려 내려갑니다.
        }}
      >
      
        <a 
          href="https://www.instagram.com/lonelylegacyxx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
          className="contact-title font-slogan"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block', textDecoration: 'none', color: 'inherit' }}
        >
          Contact
        </a>
      </div>
      
      {/* 2. 하단 링크 컨테이너 */}
      <div 
        className="contact-links-container" 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px', 
          width: '100%'
        }}
      >
        <div className="contact-link-row" style={{ width: '100%', textAlign: 'center' }}>
          <a 
            href="https://www.youtube.com/@krlnofficial" 
            className="contact-custom-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-block', 
              textDecoration: 'none', 
              color: 'inherit', 
              whiteSpace: 'nowrap',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              fontSize: '1.25rem', 
              fontWeight: '700',   
              letterSpacing: '-0.3px' /* 카멜 케이스(letterSpacing)로 수정 완료 */
            }}
          >
            KARLEN
          </a>
        </div>

        <div className="contact-link-row" style={{ width: '100%', textAlign: 'center' }}>
          <a 
            href="https://www.youtube.com/@poloet99" 
            className="contact-custom-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-block', 
              textDecoration: 'none', 
              color: 'inherit', 
              whiteSpace: 'nowrap',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              fontSize: '1.25rem',
              fontWeight: '700',
              letterSpacing: '-0.3px' /* 카멜 케이스(letterSpacing)로 수정 완료 */
            }}
          >
            Poloet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;