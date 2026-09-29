import React from 'react';

function Services() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="services" id="services" style={{ marginTop: '2rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Our Services</h2>
            <p style={{ color: 'var(--text-light)', marginTop: '1rem' }}>Comprehensive solutions tailored to your needs</p>
          </div>
          <div className="services-grid" style={{ boxShadow: 'none', border: '1px solid #e2e8f0' }}>
            <div className="service-item">
              <div className="service-icon">🛡️</div>
              <div className="service-content">
                <h3 className="service-title">Job Placement</h3>
                <p className="service-text">Your Partner in Career Success Across the USA</p>
              </div>
            </div>
            
            <div className="service-item">
              <div className="service-icon">🌐</div>
              <div className="service-content">
                <h3 className="service-title">Recruitment & Staffing</h3>
                <p className="service-text">Technical Staffing Solutions That Scale Your Business</p>
              </div>
            </div>
            
            <div className="service-item">
              <div className="service-icon">🎯</div>
              <div className="service-content">
                <h3 className="service-title">Talent Acquisition</h3>
                <p className="service-text">Full-Cycle Talent Acquisition Solutions</p>
              </div>
            </div>
            
            <div className="service-item">
              <div className="service-icon">✅</div>
              <div className="service-content">
                <h3 className="service-title">Background Verification</h3>
                <p className="service-text">Comprehensive Employee Background Check USA</p>
              </div>
            </div>
            
            <div className="service-item">
              <div className="service-icon">💰</div>
              <div className="service-content">
                <h3 className="service-title">Accounting & Taxes</h3>
                <p className="service-text">Your seamless Accounting and Tax partner</p>
              </div>
            </div>
            
            <div className="service-item">
              <div className="service-icon">💻</div>
              <div className="service-content">
                <h3 className="service-title">IT Training</h3>
                <p className="service-text">Training that prepares candidate for real world careers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
