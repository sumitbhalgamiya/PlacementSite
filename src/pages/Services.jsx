import React from 'react';

function Services() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--text-dark)' }}>Our Services</h2>
          <p style={{ color: 'var(--text-light)', marginTop: '1rem' }}>Comprehensive solutions tailored to your needs</p>
        </div>
      </div>
      <section className="services" id="services" style={{ marginTop: '2rem' }}>
        <div className="container">
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

      {/* Services Stats Section */}
      <section className="services-stats-section">
        <div className="container">
          <div className="s-stats-grid">
            <div className="s-stat-card">
              <div className="s-stat-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="s-stat-icon">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="s-stat-number">8,500+</h3>
              <h4 className="s-stat-title">Careers Launched</h4>
              <p className="s-stat-desc">Our dedicated efforts have helped thousands of professionals secure rewarding roles worldwide.</p>
            </div>

            <div className="s-stat-card">
              <div className="s-stat-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="s-stat-icon">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="s-stat-number">99.2%</h3>
              <h4 className="s-stat-title">Client Satisfaction</h4>
              <p className="s-stat-desc">We pride ourselves on matching top-tier talent with companies seamlessly.</p>
            </div>

            <div className="s-stat-card">
              <div className="s-stat-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="s-stat-icon">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                  <line x1="9" y1="22" x2="9" y2="2"></line>
                  <line x1="15" y1="22" x2="15" y2="2"></line>
                  <line x1="4" y1="10" x2="20" y2="10"></line>
                  <line x1="4" y1="14" x2="20" y2="14"></line>
                </svg>
              </div>
              <h3 className="s-stat-number">500+</h3>
              <h4 className="s-stat-title">Hiring Partners</h4>
              <p className="s-stat-desc">Our extensive network includes industry leaders spanning across 15+ different sectors.</p>
            </div>

            <div className="s-stat-card">
              <div className="s-stat-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="s-stat-icon">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="s-stat-number">12 Days</h3>
              <h4 className="s-stat-title">Avg. Time-to-Hire</h4>
              <p className="s-stat-desc">Our streamlined process drastically reduces the wait time from initial screening to offer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="process-header">
            <h2>Your Journey to Success</h2>
            <p>Our streamlined 5-step process ensures you land the right role quickly and efficiently.</p>
          </div>

          <div className="process-grid">
            {/* Step 1 */}
            <div className="process-card accent-blue">
              <div className="process-badges">
                <span className="step-badge">Phase 1</span>
                <span className="time-badge"><i className="time-icon">⏱</i> 1-2 Days</span>
              </div>
              <div className="process-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3>Discovery & Strategy</h3>
              <p>We analyze your background, goals, and strengths to craft a personalized career roadmap.</p>
            </div>

            {/* Step 2 */}
            <div className="process-card accent-green">
              <div className="process-badges">
                <span className="step-badge">Phase 2</span>
                <span className="time-badge"><i className="time-icon">⏱</i> 3-5 Days</span>
              </div>
              <div className="process-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3>Profile Revamp</h3>
              <p>Our experts overhaul your resume, LinkedIn, and portfolio to stand out to top recruiters.</p>
            </div>

            {/* Step 3 */}
            <div className="process-card accent-purple">
              <div className="process-badges">
                <span className="step-badge">Phase 3</span>
                <span className="time-badge"><i className="time-icon">⏱</i> 1-2 Weeks</span>
              </div>
              <div className="process-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <h3>Active Outreach</h3>
              <p>We leverage our network to market your profile directly to hiring managers and partners.</p>
            </div>

            {/* Step 4 */}
            <div className="process-card accent-orange">
              <div className="process-badges">
                <span className="step-badge">Phase 4</span>
                <span className="time-badge"><i className="time-icon">⏱</i> Ongoing</span>
              </div>
              <div className="process-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Interview Mastery</h3>
              <p>Rigorous mock interviews and technical coaching ensure you are fully prepared for every round.</p>
            </div>

            {/* Step 5 */}
            <div className="process-card accent-teal">
              <div className="process-badges">
                <span className="step-badge">Phase 5</span>
                <span className="time-badge"><i className="time-icon">⏱</i> Final Step</span>
              </div>
              <div className="process-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3>Placement & Growth</h3>
              <p>We handle salary negotiations and offer onboarding support to kickstart your new career.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
