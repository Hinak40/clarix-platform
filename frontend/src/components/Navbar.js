import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 30px',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(8,12,20,0.97)' : 'rgba(8,12,20,0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <Link to="/" style={styles.logo}>
          <span style={{ color: '#6366f1' }}>◆</span> Clarix
        </Link>

        {/* Desktop Links */}
        <div className="desktop-links-hide" style={styles.desktopLinks}>
          {links.map((link) => (
            <Link key={link.path} to={link.path} style={{
              ...styles.link,
              color: location.pathname === link.path ? '#6366f1' : '#94a3b8',
              fontWeight: location.pathname === link.path ? '600' : '400'
            }}>
              {link.label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {setDarkMode && (
            <button onClick={() => setDarkMode(!darkMode)} style={styles.themeToggle}>
              {darkMode ? '☀️' : '🌙'}
            </button>
          )}
          <Link to="/booking" className="book-btn-hide" style={styles.bookBtn}>Book Meeting →</Link>
          <button className="hamburger-show" onClick={() => setMenuOpen(!menuOpen)} style={styles.hamburger}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="mobile-menu-show" style={{
        ...styles.mobileMenu,
        display: menuOpen ? 'flex' : 'none'
      }}>
        {links.map((link) => (
          <Link key={link.path} to={link.path} style={{
            ...styles.mobileLink,
            color: location.pathname === link.path ? '#6366f1' : '#e2e8f0'
          }}>
            {link.label}
          </Link>
        ))}
        <Link to="/booking" style={styles.mobileBookBtn}>Book Meeting →</Link>
      </div>
    </>
  );
}

const styles = {
  logo: { color: 'white', fontSize: '20px', fontWeight: '800', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' },
  desktopLinks: { display: 'flex', gap: '28px', alignItems: 'center' },
  link: { textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' },
  themeToggle: { width: '34px', height: '34px', borderRadius: '8px', backgroundColor: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', fontSize: '15px', cursor: 'pointer' },
  bookBtn: { background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: 'white', padding: '9px 18px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: '600' },
  hamburger: { backgroundColor: 'transparent', border: 'none', color: 'white', fontSize: '22px', cursor: 'pointer', padding: '4px' },
  mobileMenu: { flexDirection: 'column', backgroundColor: '#0f172a', padding: '20px 25px', gap: '5px', borderBottom: '1px solid rgba(255,255,255,0.05)', zIndex: 999 },
  mobileLink: { textDecoration: 'none', fontSize: '16px', fontWeight: '500', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'block' },
  mobileBookBtn: { background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: 'white', padding: '12px 20px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px', fontWeight: '600', textAlign: 'center', marginTop: '10px', display: 'block' }
};

export default Navbar;