import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
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

  const pageProps = { darkMode, setDarkMode };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home {...pageProps} />} />
        <Route path="/about" element={<About {...pageProps} />} />
        <Route path="/services" element={<Services {...pageProps} />} />
        <Route path="/portfolio" element={<Portfolio {...pageProps} />} />
        <Route path="/blog" element={<Blog {...pageProps} />} />
        <Route path="/blog/:id" element={<BlogDetail {...pageProps} />} />
        <Route path="/contact" element={<Contact {...pageProps} />} />
        <Route path="/booking" element={<Booking {...pageProps} />} />
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

export default App;