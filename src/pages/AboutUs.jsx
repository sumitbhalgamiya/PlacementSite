import React from 'react';
import { SITE_CONFIG } from '../config';

// Images
import heroImg from '../assets/placement2.jpg';
import journeyImg from '../assets/Placement5.png';

function AboutUs() {
  return (
    <div style={{ paddingBottom: '0' }}>
      <div style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-dark)' }}>About Us</h2>
            <p style={{ color: 'var(--text-light)', marginTop: '1rem' }}>Bridging the gap between talent and opportunity</p>
          </div>
        </div>
      </div>
      {/* 1. Hero Section */}
      <section className="about-us" id="about">
        <div className="about-left">
          <div className="badge">ABOUT {SITE_CONFIG.appName.toUpperCase()}</div>
          <h2>Bridging the Gap Between Talent and Opportunity Since 2021</h2>
          <p>
            We are a premier job placement and staffing firm committed to helping aspiring professionals and matching forward-thinking organizations with top-tier talent worldwide.
          </p>
          <div className="about-actions">
            <button className="btn btn-primary" style={{borderRadius: '50px', background: 'white', color: 'var(--text-dark)'}}>Join Our Team &rarr;</button>
            <button className="btn" style={{borderRadius: '50px', background: 'transparent', color: 'white', border: '1px solid white'}}>Explore Services</button>
          </div>
        </div>
        <div className="about-right">
          <img src={heroImg} alt="About Us Hero" className="about-hero-img" />
        </div>
      </section>

      {/* 2. Intro and Stats Section */}
      <section className="about-stats-section">
        <div className="container">
          <div className="stats-top-grid">
            <div className="stats-left">
              <span className="section-badge-outline">About {SITE_CONFIG.appName}</span>
              <h2>We've successfully guided over 5,400+ professionals & partnered with 360+ businesses</h2>
            </div>
            <div className="stats-right">
              <p className="lead-text">
                At {SITE_CONFIG.appName}, we recognize that every career pursuit and job opening represents a step toward building successful futures and strong teams. What began as a dedicated effort to connect skilled individuals with the right roles has evolved into a comprehensive platform supporting both companies and candidates through intelligent hiring, global talent sourcing, and career advancement.
              </p>
              <p>
                Over the years, our agency has successfully guided thousands of job seekers into fulfilling positions while aiding hundreds of businesses in assembling dependable, high-performing teams. From initial job placement and talent acquisition to worldwide hiring solutions, we operate relentlessly behind the scenes to bridge the gap between potential and opportunity.
              </p>
              
              <ul className="benefits-checklist">
                <li><span className="check-icon">✓</span> Expert career placement for students and working professionals</li>
                <li><span className="check-icon">✓</span> Comprehensive recruitment, staffing, and talent solutions</li>
                <li><span className="check-icon">✓</span> Worldwide hiring support for diverse industries</li>
                <li><span className="check-icon">✓</span> Actionable guidance from the job search phase to successful onboarding</li>
              </ul>
            </div>
          </div>

          <div className="stats-bottom-row">
            <div className="stat-item">
              <h3>5+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <h3>5K+</h3>
              <p>Candidates Placed</p>
            </div>
            <div className="stat-item">
              <h3>360+</h3>
              <p>Partner Companies</p>
            </div>
            <div className="stat-item">
              <h3>12+</h3>
              <p>Countries Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Commitment Section */}
      <section className="commitment-section">
        <div className="container">
          <div className="commitment-header">
            <h2>Our Dedication To<br/>Individuals and Organizations</h2>
            <p>At {SITE_CONFIG.appName}, our focus is on delivering principled recruitment, rewarding career paths, and dependable workforce strategies grounded in integrity and transparency.</p>
          </div>
          
          <div className="commitment-grid">
            <div className="commit-card">
              <div className="commit-icon blue-icon">👤</div>
              <h3>Long-Term Careers</h3>
              <p>We direct professionals towards roles that foster long-lasting careers rather than short-term gigs. Every position we endorse is selected with your stability and growth as a priority.</p>
            </div>
            <div className="commit-card">
              <div className="commit-icon blue-icon">⏱️</div>
              <h3>Timely Execution</h3>
              <p>Exceptional talent and incredible opportunities shouldn't miss out due to delayed hiring processes. We act swiftly while maintaining high standards and precision at every stage.</p>
            </div>
            <div className="commit-card">
              <div className="commit-icon blue-icon">🤝</div>
              <h3>Partnership Focused</h3>
              <p>We don't merely place candidates; we forge enduring connections. Your triumph is our triumph, and we are dedicated to assisting you throughout your entire professional journey.</p>
            </div>
            <div className="commit-card">
              <div className="commit-icon blue-icon">🚀</div>
              <h3>Ongoing Innovation</h3>
              <p>We are constantly refining our methodologies, utilizing modern technology, and adapting to shifting market demands to ensure superior results for all parties involved.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Journey Section */}
      <section className="journey-section">
        <div className="container">
          <div className="journey-header">
            <h2>Our Journey of<br/>Establishing Trust in Staffing</h2>
            <p>From our inception to emerging as a reliable workforce ally,<br/>explore how {SITE_CONFIG.appName} has expanded over the years.</p>
          </div>
          
          <div className="journey-content">
            <div className="journey-image-wrapper">
              <img src={journeyImg} alt="Our Journey" />
            </div>
            <div className="journey-text-box">
              <span className="section-badge-filled">Our Story</span>
              <h3>The Origins of<br/>{SITE_CONFIG.appName}</h3>
              <p>
                {SITE_CONFIG.appName} originated from a simple inquiry: "Why are so many skilled international students facing challenges securing roles globally?" A group of passionate friends decided to take action. Without a formal office or rigid structure, they began mentoring and assisting students from their own homes.
              </p>
              <p>
                By the early 2020s, {SITE_CONFIG.appName} inaugurated its first official workspace with an ever-growing team. A year later, the organization expanded rapidly, building a dedicated workforce of over 100 professionals. As our impact multiplied, our vision broadened beyond simple job placements. Today, with hundreds of team members across multiple branches, {SITE_CONFIG.appName} has evolved into a full-scale recruitment and talent acquisition powerhouse, and our journey is just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Vision and Mission */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card">
              <div className="vm-header">
                <span className="vm-icon">👁️</span>
                <h3>Vision</h3>
              </div>
              <p>
                We envision a future where everyone has access to high-quality employment, expert career guidance, and opportunities to build the skills necessary to secure a competitive advantage in today's dynamic job market.
              </p>
            </div>
            <div className="vm-card">
              <div className="vm-header">
                <span className="vm-icon">🎯</span>
                <h3>Mission</h3>
              </div>
              <p>
                We are dedicated to bridging the divide between exceptional talent and career opportunities. Our mission is to support students, graduates, and experienced professionals in securing fulfilling roles. Through vetted job listings, career counseling and skill development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
