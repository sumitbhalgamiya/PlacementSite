import React from 'react';

function SimplePage({ title, subtitle }) {
  return (
    <div style={{ paddingBottom: '100px' }}>
      <div style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-dark)' }}>{title}</h2>
            {subtitle && <p style={{ color: 'var(--text-light)', marginTop: '1rem' }}>{subtitle}</p>}
          </div>
        </div>
      </div>
      <div className="container" style={{ textAlign: 'center' }}>
        <p style={{ color: 'var(--text-light)' }}>Content for {title} page will go here.</p>
      </div>
    </div>
  );
}

export default SimplePage;
