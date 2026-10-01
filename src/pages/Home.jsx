import React, { useState, useEffect, useRef } from 'react';
import { SITE_CONFIG } from '../config';

// Import banner images
import img1 from '../assets/placement.jpg';
import img2 from '../assets/placement2.jpg';
import img3 from '../assets/Placement3.jfif';

// Import secondary banner images
import secBanner2 from '../assets/banners/banner2.png';
import secBanner3 from '../assets/banners/banner3.png';
import secBanner4 from '../assets/banners/banner4.png';
import secBanner5 from '../assets/banners/banner5.png';

const bannerImages = [img1, img2, img3];
const secondaryBanners = [secBanner2, secBanner3, secBanner4, secBanner5];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSecBannerIndex, setCurrentSecBannerIndex] = useState(0);
  const storiesRef = useRef(null);
  const liveUpdatesRef = useRef(null);

  const scrollStories = (direction) => {
    if (storiesRef.current) {
      const scrollAmount = 380; // approximate width + gap
      storiesRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollLiveUpdates = (direction) => {
    if (liveUpdatesRef.current) {
      const scrollAmount = 360;
      liveUpdatesRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 3000); // Change image every 3 seconds

    const secInterval = setInterval(() => {
      setCurrentSecBannerIndex((prevIndex) => (prevIndex + 1) % secondaryBanners.length);
    }, 4000); // Change secondary banner every 4 seconds

    const storiesInterval = setInterval(() => {
      if (storiesRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = storiesRef.current;
        // If we reached the end, scroll back to start, else scroll right
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          storiesRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollStories('right');
        }
      }
    }, 6000); // Auto scroll stories every 6 seconds

    return () => {
      clearInterval(interval);
      clearInterval(secInterval);
      clearInterval(storiesInterval);
    };
  }, []);

  return (
    <>
      {/* 1. Hero / Attractive Banner Section */}
      <section className="hero-banner">
        <div className="container banner-content">
          <div className="banner-text">
            <h1>YOUR LAUNCHPAD FOR <span className="highlight-text">CAREER GROWTH</span></h1>
            <p>Unlock exclusive job opportunities tailored for fresh graduates. Launch your career with industry leaders today.</p>
            <div className="banner-notice">Explore Global Roles 🚀</div>
          </div>
          <div className="banner-image">
            <div className="slideshow-container">
              {bannerImages.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`Placement Student ${index + 1}`} 
                  className={`banner-slide ${index === currentImageIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* 2. Trending Now Section */}
      <section className="trending-section">
        <div className="container">
          <div className="section-header">
            <h2>Trending Now: <span>Freshers Jobs & Skill Courses</span></h2>
            <p>Unlock your potential with practical courses, job-ready skills, and freshers jobs that help you start your career. Browse the latest job vacancies and learn at your own pace.</p>
          </div>
          
          <div className="trending-cards">
            <div className="t-card card-purple">
              <h3>Certification Courses</h3>
              <p>Learn in-demand skills and get certified</p>
              <ul className="card-details-list">
                <li>✓ 50+ Industry-recognized courses</li>
                <li>✓ Expert-led practical training</li>
                <li>✓ Lifetime access to materials</li>
              </ul>
            </div>
            <div className="t-card card-dark">
              <h3>Search Nearby Jobs</h3>
              <p>Find companies offering jobs nearby</p>
              <ul className="card-details-list">
                <li>✓ 10,000+ verified active listings</li>
                <li>✓ Filter by salary, location & role</li>
                <li>✓ Direct application to HR</li>
              </ul>
            </div>
            <div className="t-card card-magenta">
              <h3>Job Industry News</h3>
              <p>Explore latest news for Job Seekers and Providers</p>
              <ul className="card-details-list">
                <li>✓ Daily updates on market trends</li>
                <li>✓ Resume tips & interview guides</li>
                <li>✓ Insights from top recruiters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Second Banner Section - Rotating Banners */}
      <section className="rotating-banner-section">
        <div className="container">
          <div className="sec-slideshow-container">
            {secondaryBanners.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`Feature Banner ${index + 1}`} 
                className={`sec-banner-slide ${index === currentSecBannerIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Placement Stories Section */}
      <section className="stories-section">
        <div className="container" style={{ position: 'relative' }}>
          <h2>Read placement stories</h2>
          
          <button className="story-nav-btn left-btn" onClick={() => scrollStories('left')}>
            &#8249;
          </button>
          <button className="story-nav-btn right-btn" onClick={() => scrollStories('right')}>
            &#8250;
          </button>

          <div className="stories-grid" ref={storiesRef}>
            <div className="story-card">
              <p className="story-text">"{SITE_CONFIG.appName} acted as a launchpad for my career. The courses improved my skills while the job opportunities helped me land my first role. It's truly helpful for beginners."</p>
              <div className="story-author">
                <div className="author-avatar">P</div>
                <span>Pooja Das</span>
              </div>
            </div>
            <div className="story-card">
              <p className="story-text">"{SITE_CONFIG.appName} is a perfect platform for freshers. It helped me land my very first opportunity. The platform is simple to use and filled with genuine job openings. Highly recommended."</p>
              <div className="story-author">
                <div className="author-avatar">A</div>
                <span>Amit Sharma</span>
              </div>
            </div>
            <div className="story-card">
              <p className="story-text">"I had no clarity about entering the corporate world. {SITE_CONFIG.appName} guided me throughout the journey, helping me build the right skills and confidence. Highly recommended!"</p>
              <div className="story-author">
                <div className="author-avatar">R</div>
                <span>Rahul Gupta</span>
              </div>
            </div>
            <div className="story-card">
              <p className="story-text">"The structured curriculum and expert mentorship provided by {SITE_CONFIG.appName} gave me the practical knowledge required to succeed. I went from being a confused graduate to a software engineer in just 4 months!"</p>
              <div className="story-author">
                <div className="author-avatar" style={{backgroundColor: '#fce7f3', color: '#be185d'}}>S</div>
                <span>Sneha Patel</span>
              </div>
            </div>
            <div className="story-card">
              <p className="story-text">"What I loved most about {SITE_CONFIG.appName} is their dedication to students. The mock interviews and resume reviews were game-changers for me. I secured multiple offers thanks to their guidance."</p>
              <div className="story-author">
                <div className="author-avatar" style={{backgroundColor: '#dcfce7', color: '#166534'}}>K</div>
                <span>Karan Singh</span>
              </div>
            </div>
            <div className="story-card">
              <p className="story-text">"Transitioning into a tech career seemed daunting until I found {SITE_CONFIG.appName}. The step-by-step approach and real-world projects helped me build a standout portfolio. Now working at my dream company!"</p>
              <div className="story-author">
                <div className="author-avatar" style={{backgroundColor: '#fef9c3', color: '#854d0e'}}>M</div>
                <span>Meera Reddy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Why Job Seekers & Employers Choose {SITE_CONFIG.appName}</h2>
          
          <div className="benefits-grid">
            <div className="benefit-col">
              <div className="b-header">For Job Seekers</div>
              <div className="b-items">
                <div className="b-item">
                  <strong>Personalized Job Matching</strong>
                  <p>We connect you with roles that build long-term careers.</p>
                </div>
                <div className="b-item">
                  <strong>Faster Interview Scheduling</strong>
                  <p>Our recruiters actively secure interviews so you're not stuck waiting.</p>
                </div>
                <div className="b-item">
                  <strong>End-to-End Placement Support</strong>
                  <p>From resume building to offer negotiation, we guide every step.</p>
                </div>
              </div>
            </div>

            <div className="benefit-col b-center">
              <div className="b-header dark">What Makes Us Different</div>
              <div className="b-items text-white">
                <div className="b-item">
                  <strong>Quality Over Random Applications</strong>
                  <p>We don't spam job portals. Every application is carefully matched.</p>
                </div>
                <div className="b-item">
                  <strong>Success Assurance</strong>
                  <p>We’re committed to delivering as agreed under our service terms.</p>
                </div>
                <div className="b-item">
                  <strong>Full Time Roles Only</strong>
                  <p>We focus on stable full-time roles with real companies.</p>
                </div>
              </div>
            </div>

            <div className="benefit-col">
              <div className="b-header dark">For Employers</div>
              <div className="b-items">
                <div className="b-item">
                  <strong>Industry-Focused Hiring</strong>
                  <p>We understand your sector and find talent that actually fits.</p>
                </div>
                <div className="b-item">
                  <strong>Pre-Screened Candidates</strong>
                  <p>Save time by meeting our pre-screened qualified professionals.</p>
                </div>
                <div className="b-item">
                  <strong>Faster Hiring Cycles</strong>
                  <p>Our recruitment process reduces hiring delays significantly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Live Placement Updates */}
      <section className="live-updates-section">
        <div className="container">
          <div className="live-updates-header">
            <h2>Live Placement Updates of Our Candidates</h2>
            <div className="live-nav-buttons">
              <button className="live-nav-btn" onClick={() => scrollLiveUpdates('left')}>&#8249;</button>
              <button className="live-nav-btn" onClick={() => scrollLiveUpdates('right')}>&#8250;</button>
            </div>
          </div>
          
          <div className="live-cards-container" ref={liveUpdatesRef}>
            <div className="live-card">
              <div className="live-card-top">
                <div className="live-badge">
                  <span className="pulsing-dot"></span> Live
                </div>
                <span className="recently-updated">Recently Updated</span>
              </div>
              <div className="live-card-body">
                <h3>Cybersecurity</h3>
                <p>Final Interview Round at Global Tech</p>
                <div className="live-tags">
                  <span className="live-tag">📍 New York</span>
                  <span className="live-tag">💰 Negotiation</span>
                </div>
              </div>
              <div className="live-card-bottom animated-gradient-1">
                <div className="company-logo">Global Tech</div>
              </div>
            </div>
            
            <div className="live-card">
              <div className="live-card-top">
                <div className="live-badge">
                  <span className="pulsing-dot"></span> Live
                </div>
                <span className="recently-updated">Recently Updated</span>
              </div>
              <div className="live-card-body">
                <h3>Data Engineer</h3>
                <p>Received offer letter from FinTech Corp</p>
                <div className="live-tags">
                  <span className="live-tag">📍 Florida</span>
                  <span className="live-tag">💰 $105k</span>
                </div>
              </div>
              <div className="live-card-bottom animated-gradient-2">
                <div className="company-logo">FinTech</div>
              </div>
            </div>

            <div className="live-card">
              <div className="live-card-top">
                <div className="live-badge">
                  <span className="pulsing-dot"></span> Live
                </div>
                <span className="recently-updated">Recently Updated</span>
              </div>
              <div className="live-card-body">
                <h3>Software Developer</h3>
                <p>Received offer letter from CloudScale</p>
                <div className="live-tags">
                  <span className="live-tag">📍 Washington</span>
                  <span className="live-tag">💰 $165k</span>
                </div>
              </div>
              <div className="live-card-bottom animated-gradient-3">
                <div className="company-logo">CloudScale</div>
              </div>
            </div>

            <div className="live-card">
              <div className="live-card-top">
                <div className="live-badge">
                  <span className="pulsing-dot"></span> Live
                </div>
                <span className="recently-updated">Recently Updated</span>
              </div>
              <div className="live-card-body">
                <h3>Senior Consultant</h3>
                <p>Received offer from Enterprise Solutions</p>
                <div className="live-tags">
                  <span className="live-tag">📍 Georgia</span>
                  <span className="live-tag">💰 $133k</span>
                </div>
              </div>
              <div className="live-card-bottom animated-gradient-4">
                <div className="company-logo">Enterprise</div>
              </div>
            </div>

            <div className="live-card">
              <div className="live-card-top">
                <div className="live-badge">
                  <span className="pulsing-dot"></span> Live
                </div>
                <span className="recently-updated">Recently Updated</span>
              </div>
              <div className="live-card-body">
                <h3>Product Manager</h3>
                <p>Advanced to final round at AI Startups</p>
                <div className="live-tags">
                  <span className="live-tag">📍 Remote</span>
                  <span className="live-tag">💰 $120k</span>
                </div>
              </div>
              <div className="live-card-bottom animated-gradient-5">
                <div className="company-logo">AI Startups</div>
              </div>
            </div>

            <div className="live-card">
              <div className="live-card-top">
                <div className="live-badge">
                  <span className="pulsing-dot"></span> Live
                </div>
                <span className="recently-updated">Recently Updated</span>
              </div>
              <div className="live-card-body">
                <h3>UI/UX Designer</h3>
                <p>Accepted offer from IT Tech</p>
                <div className="live-tags">
                  <span className="live-tag">📍 California</span>
                  <span className="live-tag">💰 $145k</span>
                </div>
              </div>
              <div className="live-card-bottom animated-gradient-6">
                <div className="company-logo">IT Tech</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Success Timeline Section */}
      <section className="success-timeline-section">
        <div className="container">
          <div className="success-header">
            <h2>Driving Career Growth<br/>Year After Year</h2>
            <p>{SITE_CONFIG.appName} has empowered thousands of professionals to land their dream roles, consistently creating exceptional career opportunities and transforming lives across the globe.</p>
          </div>
          
          <div className="timeline-container">
            <div className="timeline-line"></div>
            <div className="timeline-items">
              <div className="t-item">
                <div className="t-year">2021</div>
                <div className="t-stats">
                  <h3>130+</h3>
                  <p>Candidates</p>
                </div>
              </div>
              <div className="t-item">
                <div className="t-year">2022</div>
                <div className="t-stats">
                  <h3>188+</h3>
                  <p>Candidates</p>
                </div>
              </div>
              <div className="t-item">
                <div className="t-year">2023</div>
                <div className="t-stats">
                  <h3>234+</h3>
                  <p>Candidates</p>
                </div>
              </div>
              <div className="t-item">
                <div className="t-year">2024</div>
                <div className="t-stats">
                  <h3>376+</h3>
                  <p>Candidates</p>
                </div>
              </div>
              <div className="t-item">
                <div className="t-year">2025</div>
                <div className="t-stats">
                  <h3>385+</h3>
                  <p>Candidates</p>
                </div>
              </div>
              <div className="t-item">
                <div className="t-year">2026</div>
                <div className="t-stats">
                  <h3>437+</h3>
                  <p>Candidates</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="success-summary">
            <div className="summary-item">
              <h3>5+</h3>
              <p>Years Of experience</p>
            </div>
            <div className="summary-item">
              <h3>5K+</h3>
              <p>Candidates Placed</p>
            </div>
            <div className="summary-item">
              <h3>360+</h3>
              <p>Partner Companies</p>
            </div>
            <div className="summary-item">
              <h3>12+</h3>
              <p>Countries Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Awards & Certifications Section */}
      <section className="awards-section">
        <div className="container">
          <h2 className="awards-title">Awards & Certifications</h2>
          
          <div className="awards-grid">
            <div className="award-card premium-card">
              <div className="shield-icon-wrapper">
                <svg viewBox="0 0 24 24" className="shield-bg shield-purple">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                <div className="shield-content">
                  <span className="brand-small">AWARD</span>
                  <span className="shield-main-text" style={{fontSize: "1rem"}}>TECH 50</span>
                  <span className="shield-sub-text">WINNER</span>
                </div>
              </div>
              <h3>Top 50 Tech Employers</h3>
              <p>Recognized as a leading platform for facilitating high-quality placements in the global tech industry.</p>
            </div>

            <div className="award-card premium-card">
              <div className="shield-icon-wrapper">
                <svg viewBox="0 0 24 24" className="shield-bg shield-orange">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                <div className="shield-content">
                  <span className="brand-small">EDTECH</span>
                  <span className="shield-main-text" style={{fontSize: "0.85rem"}}>EXCELLENCE</span>
                  <span className="shield-sub-text">2025</span>
                </div>
              </div>
              <h3>Excellence in EdTech</h3>
              <p>Awarded for our commitment to upskilling candidates and bridging the gap between education and employment.</p>
            </div>

            <div className="award-card premium-card">
              <div className="shield-icon-wrapper">
                <svg viewBox="0 0 24 24" className="shield-bg shield-red">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                <div className="shield-content">
                  <span className="brand-small">FORTUNE</span>
                  <span className="shield-main-text" style={{fontSize: "0.95rem"}}>PARTNER</span>
                  <span className="shield-sub-text">2026</span>
                </div>
              </div>
              <h3>Best Recruitment Partner</h3>
              <p>Voted by Fortune 500 companies as the most trusted and efficient talent acquisition partner in 2026.</p>
            </div>

            <div className="award-card premium-card">
              <div className="shield-icon-wrapper">
                <svg viewBox="0 0 24 24" className="shield-bg shield-blue">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                <div className="shield-content">
                  <span className="brand-small">GLOBAL</span>
                  <span className="shield-main-text" style={{fontSize: "0.95rem"}}>IMPACT</span>
                  <span className="shield-sub-text">AWARD</span>
                </div>
              </div>
              <h3>Global Impact Award</h3>
              <p>Honored for creating equal employment opportunities and driving diverse hiring across 12+ countries.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
