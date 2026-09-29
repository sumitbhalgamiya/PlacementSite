import React from 'react';

function SimplePage({ title }) {
  return (
    <div style={{ paddingTop: '150px', paddingBottom: '100px', textAlign: 'center' }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>{title}</h1>
        <p style={{ color: 'var(--text-light)' }}>Content for {title} page will go here.</p>
      </div>
    </div>
  );
}

export default SimplePage;
