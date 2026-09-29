import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config';

// Import banner images
import img1 from '../assets/placement.jpg';
import img2 from '../assets/placement2.jpg';
import img3 from '../assets/Placement3.jfif';

// Import secondary banner images
import secBanner1 from '../assets/banners/banner1.png';
import secBanner2 from '../assets/banners/banner2.png';
import secBanner3 from '../assets/banners/banner3.png';
import secBanner4 from '../assets/banners/banner4.png';
import secBanner5 from '../assets/banners/banner5.png';

const bannerImages = [img1, img2, img3];
const secondaryBanners = [secBanner1, secBanner2, secBanner3, secBanner4, secBanner5];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSecBannerIndex, setCurrentSecBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 3000); // Change image every 3 seconds

    const secInterval = setInterval(() => {
      setCurrentSecBannerIndex((prevIndex) => (prevIndex + 1) % secondaryBanners.length);
    }, 4000); // Change secondary banner every 4 seconds

    return () => {
      clearInterval(interval);
      clearInterval(secInterval);
    };
  }, []);

  return (
    <>
      {/* 1. Hero / Attractive Banner Section */}
      <section className="hero-banner">
        <div className="container banner-content">
          <div className="banner-text">
            <h1>THE PREMIER PLATFORM FOR <br/><span className="highlight-text">CAREER GROWTH + SKILL MASTERY</span></h1>
            <p>Browse job vacancies from top global companies hiring freshers and graduates right now. Explore opportunities and apply easily today.</p>
            <div className="banner-notice">Connect with top-tier companies offering entry-level roles worldwide.</div>
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
              <a href="#" className="explore-btn">Explore Now &rarr;</a>
            </div>
            <div className="t-card card-dark">
              <h3>Search Nearby Jobs</h3>
              <p>Find companies offering jobs nearby</p>
              <a href="#" className="explore-btn">Explore Now &rarr;</a>
            </div>
            <div className="t-card card-magenta">
              <h3>Job Industry News</h3>
              <p>Explore latest news for Job Seekers and Providers</p>
              <a href="#" className="explore-btn">Explore Now &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Placement Stories Section */}
      <section className="stories-section">
        <div className="container">
          <h2>Read placement stories</h2>
          <div className="stories-grid">
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
                  <strong>Refund Assurance</strong>
                  <p>If expectations aren't met under our service terms, our SLA includes protection.</p>
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
    </>
  );
}

export default Home;
