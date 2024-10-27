import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { AiFillCaretRight } from 'react-icons/ai';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Technocure Logo */}
        <div className="footer-logo">
          <img src="/path/to/logo.png" alt="Technocure Logo" />
          <div className="logo-text">
            <h1>Technocure</h1>
            <p>Computer systems L.L.C</p>
          </div>
        </div>

        {/* Featured Services Section */}
        <div className="footer-section">
          <h4>FEATURED SERVICES</h4>
          <ul>
            <li><AiFillCaretRight size={10} style={{ marginRight: '4px' }} /><Link to="/services">Accounting Solutions</Link></li>
            <li><AiFillCaretRight size={10} style={{ marginRight: '4px' }} /><Link to="/services">Active Directory Installation</Link></li>
            <li><AiFillCaretRight size={10} style={{ marginRight: '4px' }} /><Link to="/services">Antivirus Solutions</Link></li>
            <li><AiFillCaretRight size={10} style={{ marginRight: '4px' }} /><Link to="/services">MacBook Repair</Link></li>
            <li><AiFillCaretRight size={10} style={{ marginRight: '4px' }} /><Link to="/services">Analog PBX System Installation</Link></li>
            <li><AiFillCaretRight size={10} style={{ marginRight: '4px' }} /><Link to="/services">Azure Cloud</Link></li>
            <li><AiFillCaretRight size={10} style={{ marginRight: '4px' }} /><Link to="/services">Backup Solution</Link></li>
          </ul>
        </div>

        {/* Hardware Tips Section */}
        <div className="footer-section">
          <h4>HARDWARE TIPS</h4>
          <ul>
            <li className='hardware-tips-item'><div className='hardware-tips-item-image'></div><Link to="/hardware-tips">Laptop Miscellaneous Problems and Possible Cure</Link></li>
            <li className='hardware-tips-item'><div className='hardware-tips-item-image'></div><Link to="/hardware-tips">Laptop Touch Pad & Keyboard related problems and Cure</Link></li>
            <li className='hardware-tips-item'><div className='hardware-tips-item-image'></div><Link to="/hardware-tips">Laptop Display Related Problems and Possible Cure</Link></li>
            <li className='hardware-tips-item'><div className='hardware-tips-item-image'></div><Link to="/hardware-tips">Laptop Power Related Problems and Possible Cure</Link></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section">
          <h4>CONTACT US</h4>
          <p>Technocure</p>
          <p>+971 438 614 55</p>
          <p>Dubai, United Arab Emirates</p>
          <p><a href="mailto:sales@techno-cure.com">sales@techno-cure.com</a></p>
        </div>
      </div>

      {/* Social Media Icons and Footer Bottom */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
          <a href="https://www.pinterest.com"><i className="fab fa-pinterest-p"></i></a>
          <a href="https://www.skype.com"><i className="fab fa-skype"></i></a>
          <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
        </div>
        <p className="footer-bottom-text">
          <Link to="/sitemap">Sitemap</Link> | <Link to="/privacy-policy">Privacy Policy</Link>
        </p>
        <p>&copy; 2019 Technocure</p>
      </div>
    </footer>
  );
};

