import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="contact-title font-slogan">Contact</h1>
      <div className="contact-content font-body">
        <p>
          <a href="mailto:contact@lonelylegacy.com" className="contact-link">
            contact@lonelylegacy.com
          </a>
        </p>
        <p>
          <a href="https://instagram.com/lonelylegacy" className="contact-link">
            Instagram
          </a>
        </p>
        <p>
          <a href="https://twitter.com/lonelylegacy" className="contact-link">
            Twitter
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
