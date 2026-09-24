import React from 'react';
import { SITE_CONFIG } from './config';
import './index.css';

function App() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-brand">{SITE_CONFIG.appName}</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#jobs">Find Jobs</a>
            <a href="#employers">For Employers</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <button className="btn btn-primary">Sign In</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="container">
          <h1>Find Your Dream Job with <span>{SITE_CONFIG.appName}</span></h1>
          <p>
            We connect top talent with industry-leading companies. Discover opportunities that match your skills, passion, and career goals.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Browse Jobs</button>
            <button className="btn btn-secondary">Hire Talent</button>
          </div>
        </div>
      </header>

      {/* Services/Features */}
      <section className="features" id="services">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3 className="feature-title">Fast Placement</h3>
              <p className="feature-text">We speed up the hiring process so you can start your new career faster than ever.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Top Companies</h3>
              <p className="feature-text">Partnering with Fortune 500s and innovative startups to bring you the best roles.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3 className="feature-title">Dedicated Support</h3>
              <p className="feature-text">Our experts guide you through resume building, interview prep, and offer negotiation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container">
          <h2>{SITE_CONFIG.appName}</h2>
          <p>Email: {SITE_CONFIG.contactEmail} | Phone: {SITE_CONFIG.contactPhone}</p>
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.appName}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
