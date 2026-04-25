import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav style={{ ...styles.nav, backgroundColor: scrolled ? 'rgba(8,12,20,0.97)' : 'rgba(8,12,20,0.85)', backdropFilter: 'blur(20px)', boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none' }}>
      <Link to="/" style={styles.logo}>
        <span style={styles.logoIcon}>◆</span> Clarix
      </Link>
      <div style={styles.links}>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              ...styles.link,
              color: location.pathname === link.path ? '#6366f1' : '#94a3b8',
              fontWeight: location.pathname === link.path ? '600' : '400'
            }}
          >
            {link.label}
            {location.pathname === link.path && <span style={styles.activeDot} />}
          </Link>
        ))}
      </div>
      <Link to="/booking" style={styles.bookBtn}>
        Book Meeting →
      </Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '18px 70px',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    transition: 'all 0.3s ease'
  },
  logo: {
    color: 'white',
    fontSize: '22px',
    fontWeight: '800',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    letterSpacing: '-0.5px'
  },
  logoIcon: {
    color: '#6366f1',
    fontSize: '16px'
  },
  links: {
    display: 'flex',
    gap: '35px',
    alignItems: 'center'
  },
  link: {
    textDecoration: 'none',
    fontSize: '15px',
    position: 'relative',
    paddingBottom: '4px',
    transition: 'color 0.3s ease'
  },
  activeDot: {
    position: 'absolute',
    bottom: '-4px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    backgroundColor: '#6366f1',
    display: 'block'
  },
  bookBtn: {
    background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
    color: 'white',
    padding: '10px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
    boxShadow: '0 4px 15px rgba(99,102,241,0.3)'
  }
};

export default Navbar;