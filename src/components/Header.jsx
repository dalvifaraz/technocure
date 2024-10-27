import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <header>
      {/* Top Contact Section */}
      <div className="header-top">
        <span className="contact-info">
          <a href="mailto:sales@techno-cure.com">sales@techno-cure.com</a>
          <span> | </span>
          <a href="tel:+97143861455">+971 438 614 55</a>
        </span>
      </div>

      {/* Logo and Navigation */}
      <div className="header-main">
        <div className="logo">
          <img src="/path/to/logo.png" alt="Technocure Logo" />
          <div className="logo-text">
            <h1>Technocure</h1>
            <p>Computer systems L.L.C</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>

            {/* Services Dropdown */}
            <li className="dropdown">
              <span>Services ▾</span>
              <div className="dropdown-content">
                <div className="dropdown-column">
                  <h4>Hardware Repair Services</h4>
                  <ul>
                    <li><Link to="/services">Apple MacBook Repair</Link></li>
                    <li><Link to="/services">Laptop Repair Services</Link></li>
                    <li><Link to="/services">Plotter Repair Services</Link></li>
                    <li><Link to="/services">Printer Repair Service</Link></li>
                  </ul>
                </div>
                <div className="dropdown-column">
                  <h4>Networking & Telephone</h4>
                  <ul>
                    <li><Link to="/services">Internet Solutions</Link></li>
                    <li><Link to="/services">Structured Cabling</Link></li>
                    <li><Link to="/services">Wireless Solutions</Link></li>
                  </ul>
                </div>
                <div className="dropdown-column">
                  <h4>Infrastructure & Software</h4>
                  <ul>
                    <li><Link to="/services">Server Setup and Maintenance</Link></li>
                    <li><Link to="/services">Active Directory Installation</Link></li>
                  </ul>
                </div>
                <div className="dropdown-column">
                  <h4>Security & Data Recovery</h4>
                  <ul>
                    <li><Link to="/services">Firewall and Network Security</Link></li>
                    <li><Link to="/services">Antivirus Solutions</Link></li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Rental Dropdown */}
            <li className="dropdown">
              <span>Rental ▾</span>
              <div className="dropdown-content">
                <div className="dropdown-column">
                  <h4>IT Equipment Rental</h4>
                  <ul>
                    <li><Link to="/rental">Laptop Rental</Link></li>
                    <li><Link to="/rental">Desktop Rental</Link></li>
                    <li><Link to="/rental">Printer Rental</Link></li>
                  </ul>
                </div>
                <div className="dropdown-column">
                  <h4>Event & Exhibition Rental</h4>
                  <ul>
                    <li><Link to="/rental">AV Equipment Rental</Link></li>
                    <li><Link to="/rental">Projector Rental</Link></li>
                  </ul>
                </div>
              </div>
            </li>

            <li><Link to="/hardware-tips">Hardware Tips</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
