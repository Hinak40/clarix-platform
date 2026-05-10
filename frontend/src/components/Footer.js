import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={styles.footer} className="footer-pad">
      <div style={styles.top} className="footer-grid">
        <div style={styles.brand}>
          <Link to="/" style={styles.logo}><span style={styles.logoIcon}>◆</span> Clarix</Link>
          <p style={styles.tagline}>Building digital solutions that drive growth for businesses worldwide.</p>
          <div style={styles.socials}>
            {['LinkedIn', 'Twitter', 'GitHub', 'Instagram'].map((s, i) => (
              <span key={i} style={styles.socialBtn}>{s}</span>
            ))}
          </div>
        </div>
        <div style={styles.col}>
          <h4 style={styles.colTitle}>Services</h4>
          {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Solutions', 'SEO'].map((s, i) => (
            <Link key={i} to="/services" style={styles.footerLink}>{s}</Link>
          ))}
        </div>
        <div style={styles.col}>
          <h4 style={styles.colTitle}>Company</h4>
          {[
            { label: 'About Us', path: '/about' },
            { label: 'Portfolio', path: '/portfolio' },
            { label: 'Blog', path: '/blog' },
            { label: 'Contact', path: '/contact' }
          ].map((item, i) => (
            <Link key={i} to={item.path} style={styles.footerLink}>{item.label}</Link>
          ))}
        </div>
        <div style={styles.col}>
          <h4 style={styles.colTitle}>Contact</h4>
          <p style={styles.contactInfo}>📧 hello@clarix.com</p>
          <p style={styles.contactInfo}>📞 +92 300 1234567</p>
          <p style={styles.contactInfo}>📍 Islamabad, Pakistan</p>
          <Link to="/booking" style={styles.ctaBtn}>Book a Meeting →</Link>
        </div>
      </div>
      <div style={styles.bottom}>
        <p style={styles.copyright}>© 2026 Clarix. All rights reserved.</p>
        <p style={styles.copyright}>Built with ❤️ by Hina</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: { backgroundColor: '#050810', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '80px 70px 30px' },
  top: { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px', marginBottom: '60px' },
  brand: { display: 'flex', flexDirection: 'column', gap: '15px' },
  logo: { color: 'white', fontSize: '22px', fontWeight: '800', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' },
  logoIcon: { color: '#6366f1' },
  tagline: { color: '#475569', fontSize: '14px', lineHeight: '1.7', maxWidth: '280px' },
  socials: { display: 'flex', gap: '10px', flexWrap: 'wrap' },
  socialBtn: { backgroundColor: '#0f172a', color: '#64748b', padding: '6px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: '500', border: '1px solid #1e293b', cursor: 'pointer' },
  col: { display: 'flex', flexDirection: 'column', gap: '12px' },
  colTitle: { color: 'white', fontSize: '14px', fontWeight: '700', letterSpacing: '1px', marginBottom: '5px' },
  footerLink: { color: '#475569', textDecoration: 'none', fontSize: '14px' },
  contactInfo: { color: '#475569', fontSize: '14px', lineHeight: '1.6' },
  ctaBtn: { background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: '600', marginTop: '10px', display: 'inline-block' },
  bottom: { borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' },
  copyright: { color: '#334155', fontSize: '13px' }
};

export default Footer;