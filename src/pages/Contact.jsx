import React from 'react';
import { SITE_CONFIG } from '../config';

function Contact() {
  return (
    <div style={{ paddingTop: '80px', paddingBottom: '80px', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f3e8ff 100%)', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#0f172a', fontWeight: '700' }}>
            Connect with Our <span style={{ color: '#1d4ed8' }}>Expert Team</span>
          </h2>
          <p style={{ color: '#475569', marginTop: '1rem', fontSize: '1.1rem' }}>
            Our experts are ready to assist you with training, jobs, and career-related support.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Phone Card */}
          <div style={{
            background: 'white',
            padding: '2.5rem',
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
            border: '1px solid #e2e8f0',
            textAlign: 'left'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              backgroundColor: '#f1f5f9',
              marginBottom: '1.5rem',
              color: '#0f172a'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem', color: '#0f172a' }}>Call Us</h3>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Speak to our expert team</p>
            <a href={`tel:${SITE_CONFIG.contactPhone.replace(/[^0-9+]/g, '')}`} style={{ color: '#0f172a', fontWeight: '600', textDecoration: 'underline', textUnderlineOffset: '4px', fontSize: '1.05rem' }}>
              {SITE_CONFIG.contactPhone}
            </a>
          </div>

          {/* Email Card */}
          <div style={{
            background: 'white',
            padding: '2.5rem',
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
            border: '1px solid #e2e8f0',
            textAlign: 'left'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              backgroundColor: '#f1f5f9',
              marginBottom: '1.5rem',
              color: '#0f172a'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem', color: '#0f172a' }}>Mail</h3>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Send us an email</p>
            <a href={`mailto:${SITE_CONFIG.contactEmail}`} style={{ color: '#0f172a', fontWeight: '600', textDecoration: 'underline', textUnderlineOffset: '4px', fontSize: '1.05rem' }}>
              {SITE_CONFIG.contactEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
