import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <a 
        href="https://www.instagram.com/lonelylegacyxx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
        className="contact-title font-slogan"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact
      </a>
      <div className="contact-content font-body" style={{ display: 'none' }}>
        <p>
          <span className="contact-link disabled">
            contact@lonelylegacy.com
          </span>
        </p>
        <p>
          <a href="https://www.instagram.com/lonelylegacyxx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="contact-link">
            Insta
          </a>
        </p>
        <p>
          <span className="contact-link disabled">
            Twitter
          </span>
        </p>
      </div>
    </section>
    
  );
};

export default Contact;
