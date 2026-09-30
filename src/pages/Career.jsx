import React from 'react';
import bannerImg from '../assets/banner1.png';

function Career() {
  return (
    <div className="career-page">
      <div style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-dark)' }}>Career</h2>
            <p style={{ color: 'var(--text-light)', marginTop: '1rem' }}>Join our team and help build the future</p>
          </div>
        </div>
      </div>
      {/* Banner Section */}
      <section className="career-banner">
        <img src={bannerImg} alt="Career Banner" className="career-banner-img" />
      </section>

      {/* Culture Section */}
      <section className="career-culture container">
        <div className="badge">A Culture of Belonging</div>
        <h2 className="section-title">Beyond Just a Workplace—We Are a Community</h2>
        <p className="section-subtitle">
          We believe in fostering a community rather than just building a corporation. Our dedicated team collaborates daily to unlock life-changing opportunities—from guiding students to their ideal careers, to matching businesses with top-tier talent. We strive to make every Monday feel exciting, ensuring you always look forward to coming to work.
        </p>
        
        <div className="stats-container">
          <div className="stat-card">
            <h3>94%</h3>
            <p>Employee Retention</p>
          </div>
          <div className="stat-card">
            <h3>4.8/5</h3>
            <p>Google Reviews Rating</p>
          </div>
          <div className="stat-card">
            <h3>35%</h3>
            <p>Average Annual Growth</p>
          </div>
        </div>
      </section>

      {/* Career Counselor Section */}
      <section className="career-counselor">
        <div className="counselor-content">
          <h2 className="section-title">Expert Career Guidance</h2>
          <p className="section-subtitle">
            Get dedicated support from our career specialists who will guide you through our unique placement process, helping you discover the most effective strategies to achieve your professional goals.
          </p>
          
          <h3>What to Expect from Our Counselors</h3>
          <p>
            You'll be paired with a personalized career advisor possessing deep technical expertise to fully grasp your career aspirations. Enjoy prompt support, with all your questions resolved within 24 hours.
          </p>
        </div>
        <div className="counselor-image-placeholder">
          <div className="icon-box" style={{display: 'flex', gap: '20px'}}>
            <span role="img" aria-label="briefcase">💼</span>
            <span role="img" aria-label="growth">📈</span>
            <span role="img" aria-label="handshake">🤝</span>
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="career-join bg-light">
        <div className="container text-center">
          <h2 className="section-title">Ready to Become Part of the Team?</h2>
          <p className="section-subtitle">
            If you're passionate about tackling complex challenges, cheering on collective successes, and having friendly debates over lunch spots, you belong here.
          </p>
          <p className="section-subtitle">
            We are dedicated to nurturing careers, exchanging innovative ideas, and ensuring that your job feels like much more than just work.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Career;
