import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import SimplePage from './pages/SimplePage';
import Career from './pages/Career';

import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="career" element={<Career />} />
          <Route path="contact" element={<SimplePage title="Contact" />} />
          <Route path="refer" element={<SimplePage title="Refer & Earn" />} />
          <Route path="insights" element={<SimplePage title="Insights" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
