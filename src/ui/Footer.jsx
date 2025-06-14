
import React from 'react';
import  "../styles/Footer.css"

function Footer() {
  return (
    <div className="app-container"> 

      <footer className="footer">
        
        <div className="loop-section">
          <h2 className="loop-title">Stay in the loop</h2>
          <p className="loop-description">
            Be the first to get the latest updates from our fast-growing community of African youths.
          </p>
          <div className="loop-form-container">
            <input
              type="email"
              placeholder="Email address"
              className="email-input"
            />
            <button className="subscribe-button">
              Subscribe
            </button>
          </div>
        </div>

        <hr className="footer-hr" />

        <div className="footer-grid">
          {/* Building Africa's workforce - Remains in the first position */}
          <div className="section-item">
            <div className="logo-container">
              <img src="../src/assets/terra.a5b4c8a8.svg" className='tera__logo'/>
            </div>
            <h3 className="section-heading">Building Africa's workforce</h3>
            <p className="section-description-text">
              To achieve the future that we dream of, we must equip ourselves with the required skills to put us on the radar of employers all over the world
            </p>
          </div>

          {/* Contact Us & Social - Moved to the second position for left alignment */}
          <div className="section-item">
            
            <h4 className="contact__list-heading" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              CONTACT US
              <svg className="social-svg" style={{ marginLeft: '0.5rem', color: '#4CAF50' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </h4>
            <div className="contact-details">
              <p>Get in touch</p>
              <p>+234-907-651-7286</p>
              <p>hello@soar.africa.org</p>
              <p>Dixonsdrdotabba, Abaia, Boston, MD</p>
            </div>

            <h4 className="list-heading">CONNECT WITH US</h4>
            <div className="social-links-container">
              {/* LinkedIn Icon */}
              <a href="#" className="social-icon-wrapper">
                <svg className="social-svg" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* Facebook Icon */}
              <a href="#" className="social-icon-wrapper">
                <svg className="social-svg" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.811c-3.211 0-4.189 1.444-4.189 4.034v2.966z"/>
                </svg>
              </a>
              {/* Instagram Icon */}
              <a href="#" className="social-icon-wrapper">
                <svg className="social-svg" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.25.057 1.748.243 2.228.423.474.179.88.427 1.28.826.4.4.647.806.826 1.28.18.48.366.977.423 2.228.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.057 1.25-.243 1.748-.423 2.228-.179.474-.427.88-.826 1.28-.4.4-.806.647-1.28.826-.48.18-.977.366-2.228.423-1.265.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.25-.057-1.748-.243-2.228-.423-.474-.179-.88-.427-1.28-.826-.4-.4-.647-.806-.826-1.28-.18-.48-.366-.977-.423-2.228-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.057 1.25.243 1.748.423 2.228.179-.474.427-.88.826-1.28.4-.4.806-.647 1.28-.826.48-.18.977-.366 2.228-.423C8.416 2.175 8.796 2.163 12 2.163zm0 1.637c-3.155 0-3.513.011-4.717.067-1.176.054-1.635.228-1.996.362-.36.13-.615.26-.85.495-.235.234-.365.49-.495.85-.134.36-.308.82-.362 1.996-.056 1.204-.067 1.562-.067 4.717s.011 3.513.067 4.717c.054 1.176.228 1.635.362 1.996.13.36.26.615.495.85.234.235.49.365.85.495.36.134.82.308 1.996.362 1.204.056 1.562.067 4.717.067s3.513-.011 4.717-.067c1.176-.054 1.635-.228 1.996-.362.36-.13.615-.26.85-.495.235-.234.365-.49.495-.85.134-.36.308-.82.362-1.996.056-1.204.067-1.562.067-4.717s-.011-3.513-.067-4.717c-.054-1.176-.228-1.635-.362-1.996-.13-.36-.26-.615-.495-.85-.234-.235-.49-.365-.85-.495-.36-.134-.82-.308-1.996-.362C15.513 3.79 15.155 3.778 12 3.778zm0 3.442c-2.617 0-4.75 2.133-4.75 4.75s2.133 4.75 4.75 4.75 4.75-2.133 4.75-4.75-2.133-4.75-4.75-4.75zm0 1.637c1.868 0 3.113 1.245 3.113 3.113s-1.245 3.113-3.113 3.113-3.113-1.245-3.113-3.113 1.245-3.113 3.113-3.113zm6.402-4.721c-.438 0-.793.355-.793.793s.355.793.793.793.793-.355.793-.793-.355-.793-.793-.793z"/>
                </svg>
              </a>
            </div>
          </div>

          
          <div className="section-item">
            <h4 className="list-heading">QUICK LINKS</h4>
            <ul className="list-items">
              <li><a href="#" className="list-link">FAQ</a></li>
              <li><a href="#" className="list-link">Blog</a></li>
              <li><a href="#" className="list-link">Career Roadmap</a></li>
              <li><a href="#" className="list-link">Ambassador Program</a></li>
            </ul>
          </div>

          
          <div className="section-item">
            <h4 className="list-heading">COMPANY</h4>
            <ul className="list-items">
              <li><a href="#" className="list-link">Privacy Policy</a></li>
              <li><a href="#" className="list-link">Terms of Use</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright-section">
          <p>©️ Copyright 2024. All Rights Reserved. Terra Holding Limited</p>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button className="chat-button">
        <svg className="chat-button-svg" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
        <span className="sr-only">Chat</span> 
      </button>
    </div>
  );
}

export default Footer;