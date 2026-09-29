import React from 'react';
import { SITE_CONFIG } from '../config';

function AboutUs() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      <section className="about-us" id="about" style={{ marginTop: '2rem' }}>
        <div className="about-left">
          <div className="badge">ABOUT {SITE_CONFIG.appName.toUpperCase()}</div>
          <h2>Connecting Talent with<br/>Opportunity Since 2021</h2>
          <p>
            We're a leading job placement and recruitment company dedicated to empowering international students and connecting innovative companies with exceptional talent across the globe.
          </p>
          <div className="about-actions">
            <button className="btn btn-primary" style={{borderRadius: '50px', background: 'white', color: 'var(--text-dark)'}}>Join Our Team &rarr;</button>
            <button className="btn" style={{borderRadius: '50px', background: 'transparent', color: 'white', border: '1px solid white'}}>Explore Services</button>
          </div>
        </div>
        <div className="about-right">
          {/* Decorative graphic would go here */}
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
