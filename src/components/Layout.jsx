import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { SITE_CONFIG } from '../config';

function Layout() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="nav-brand" style={{textDecoration: 'none'}}>{SITE_CONFIG.appName}</Link>
          <div className="nav-links">
            <Link to="/services">Services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/career">Career</Link>
            <Link to="/refer">Refer & Earn</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <h2>{SITE_CONFIG.appName}</h2>
          <p>Email: {SITE_CONFIG.contactEmail} | Phone: {SITE_CONFIG.contactPhone}</p>
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.appName}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Layout;
