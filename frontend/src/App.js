import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

// Admin
import AdminLogin from './admin/AdminLogin';
import Dashboard from './admin/Dashboard';
import ManageServices from './admin/ManageServices';
import ManagePortfolio from './admin/ManagePortfolio';
import ManageBlog from './admin/ManageBlog';
import Inquiries from './admin/Inquiries';
import Meetings from './admin/Meetings';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? '' : 'light';
  }, [darkMode]);

  return (
    <Router>
      {/* Dark/Light Toggle Button */}
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        title="Toggle Theme"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/services" element={<Services darkMode={darkMode} />} />
        <Route path="/portfolio" element={<Portfolio darkMode={darkMode} />} />
        <Route path="/blog" element={<Blog darkMode={darkMode} />} />
        <Route path="/blog/:id" element={<BlogDetail darkMode={darkMode} />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        <Route path="/booking" element={<Booking darkMode={darkMode} />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/services" element={<ManageServices />} />
        <Route path="/admin/portfolio" element={<ManagePortfolio />} />
        <Route path="/admin/blog" element={<ManageBlog />} />
        <Route path="/admin/inquiries" element={<Inquiries />} />
        <Route path="/admin/meetings" element={<Meetings />} />
      </Routes>
    </Router>
  );
}

export default App;cd