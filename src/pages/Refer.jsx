import React from 'react';
import { SITE_CONFIG } from '../config';

function Refer() {
  return (
    <div className="refer-page" style={{ backgroundColor: '#fcfcfc', paddingBottom: '4rem' }}>
      {/* 1. Hero Section */}
      <section style={{ backgroundColor: '#111827', color: 'white', padding: '6rem 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem' }}>
          <div style={{ flex: '1 1 400px' }}>
            <div className="refer-hero-box" style={{ width: '100%', backgroundColor: '#1e293b', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa', border: '1px solid #334155', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)' }}>
              <svg className="refer-hero-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 12v10H4V12"></path>
                <path d="M2 7h20v5H2z"></path>
                <path d="M12 22V7"></path>
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
              </svg>
            </div>
          </div>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'inline-block', backgroundColor: '#1e3a8a', color: '#60a5fa', padding: '0.4rem 1rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              {SITE_CONFIG.appName}'s Referral Revolution
            </div>
            <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              Empower, Earn & Elevate<br/>Join Us Today!
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#d1d5db', lineHeight: '1.6', maxWidth: '600px' }}>
              If Any Of Your Friends, Family Member Or Colleague Looking For Job You Can Refer Them To Us & Get $500 On Per Reference Who Join Us.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Steps Section */}
      <section style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#0f172a' }}>
            3 Simple Steps to<br/>Start Earning Rewards
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            Our referral program is designed to be simple and rewarding. Follow these three easy steps to start earning while helping your friends advance their careers.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { step: 1, title: 'Refer a Friend', desc: 'Share your unique referral link or submit your friend\'s contact details through our referral portal.', icon: '📢', bg: '#eff6ff', color: '#3b82f6' },
              { step: 2, title: 'They Enroll', desc: 'Your referral signs up for one of our placement plans (Starter, Premium, Elite, or Pro).', icon: '📝', bg: '#fefce8', color: '#eab308' },
              { step: 3, title: 'Earn Rewards', desc: 'Get instant signup bonus, plus additional placement bonus when they land their dream job!', icon: '💰', bg: '#f0fdf4', color: '#22c55e' }
            ].map((s) => (
              <div key={s.step} style={{ backgroundColor: s.bg, padding: '3.5rem 2rem', borderRadius: '24px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{s.icon}</div>
                {/* Step Count in center */}
                <div style={{ backgroundColor: 'white', color: s.color, width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', marginBottom: '1.5rem' }}>
                  {s.step}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#0f172a' }}>{s.title}</h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Plans Section */}
      <section style={{ padding: '4rem 0', backgroundColor: '#fdfdf9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#0f172a' }}>
              Maximize Your Earnings With Our<br/>Job Placement Referral Plans
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Our tiered reward system ensures you're compensated fairly for connecting top talent with us. The more senior the placement, the higher your bonus.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            
            {/* Standard Plan */}
            <div style={{ flex: '1 1 400px', backgroundColor: 'white', borderRadius: '24px', padding: '3rem 2rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.2rem', color: '#0f172a' }}>Standard Placement Plan</h3>
              <p style={{ color: '#64748b', marginBottom: '2.5rem' }}>For Entry to Mid-Level Roles</p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a' }}>$100</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Signup Bonus</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a' }}>$200</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Joining Bonus</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#16a34a' }}>$300</div>
                  <div style={{ fontSize: '0.85rem', color: '#16a34a' }}>Total Earning</div>
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', color: '#475569' }}>
                {['Instant referral tracking portal', 'Bonus credited on candidate joining', 'Access to general support', 'Monthly referral newsletter'].map((f, i) => (
                  <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: '#16a34a' }}>✓</span> {f}
                  </li>
                ))}
              </ul>

            </div>

            {/* Executive Plan */}
            <div style={{ flex: '1 1 400px', backgroundColor: '#1d4ed8', borderRadius: '24px', padding: '3rem 2rem', color: 'white', position: 'relative', boxShadow: '0 20px 25px -5px rgba(29, 78, 216, 0.3)' }}>
              <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#f59e0b', color: '#000', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                Highest Payout
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>Executive Placement Plan</h3>
              <p style={{ color: '#93c5fd', marginBottom: '2.5rem' }}>For Senior & Leadership Roles</p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #3b82f6', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>$200</div>
                  <div style={{ fontSize: '0.85rem', color: '#93c5fd' }}>Signup Bonus</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>$400</div>
                  <div style={{ fontSize: '0.85rem', color: '#93c5fd' }}>Joining Bonus</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>$600</div>
                  <div style={{ fontSize: '0.85rem', color: 'white' }}>Total Earning</div>
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', color: '#e0e7ff' }}>
                {['Priority candidate screening', 'Dedicated relationship manager', 'Bonus credited on candidate joining', 'VIP event access'].map((f, i) => (
                  <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: '#93c5fd' }}>✓</span> {f}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Terms and Stats */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ backgroundColor: '#f8fafc', padding: '3rem', borderRadius: '24px', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-block', backgroundColor: '#e2e8f0', color: '#0f172a', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              Terms & Conditions for Job Placement Referrals
            </div>
            <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#0f172a' }}>Bonus Payout Structure</h4>
            <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              If a candidate is placed through our Standard Placement Plan, you will receive a $100 initial bonus upon their profile approval. Once they successfully complete 30 days of employment at their new job, you will receive an additional $200.<br/>
              For candidates placed via the Executive Placement Plan, the initial bonus is $200, followed by a $400 bonus upon successful 30-day employment retention.
            </p>

            <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#0f172a' }}>Important Guidelines:</h4>
            <ul style={{ color: '#475569', fontSize: '0.95rem', paddingLeft: '1.5rem', lineHeight: '1.7' }}>
              <li>The referral must be a new candidate who is not currently in our active database.</li>
              <li>Initial bonuses are processed within 15 days of the candidate's profile being officially shortlisted by a hiring partner.</li>
              <li>Joining bonuses are contingent upon the candidate accepting the offer and remaining employed for a minimum of 30 days.</li>
              <li>All candidates are subject to our standard screening and interview procedures.</li>
              <li>There is no cap on the number of candidates you can refer. The more you refer, the more you earn!</li>
            </ul>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: '#f8fafc', padding: '2.5rem', borderRadius: '24px' }}>
              <div style={{ color: '#1d4ed8', backgroundColor: '#e0e7ff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                👥
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>4,200+</div>
              <div style={{ fontWeight: 'bold', color: '#0f172a', marginBottom: '1rem' }}>Active Referrers</div>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>professionals who continuously refer their friends and colleagues to help build their careers.</p>
            </div>

            <div style={{ backgroundColor: '#f8fafc', padding: '2.5rem', borderRadius: '24px' }}>
              <div style={{ color: '#1d4ed8', backgroundColor: '#e0e7ff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                💰
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>$2.8M+</div>
              <div style={{ fontWeight: 'bold', color: '#0f172a', marginBottom: '1rem' }}>Total Referral Bonuses</div>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>paid out directly to our community for connecting us with top-tier talent.</p>
            </div>

            <div style={{ backgroundColor: '#f8fafc', padding: '2.5rem', borderRadius: '24px' }}>
              <div style={{ color: '#1d4ed8', backgroundColor: '#e0e7ff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                💳
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>$600</div>
              <div style={{ fontWeight: 'bold', color: '#0f172a', marginBottom: '1rem' }}>Highest Single Payout</div>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>earned by referrers when their candidate successfully joins an Executive role.</p>
            </div>

            <div style={{ backgroundColor: '#111827', padding: '2.5rem', borderRadius: '24px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>Start Referring</h3>
              <p style={{ color: '#9ca3af', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Turn your professional network into a continuous stream of income by recommending top talent.
              </p>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Refer;
