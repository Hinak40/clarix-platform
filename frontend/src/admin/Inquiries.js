import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getInquiries } from '../api/index';

function Inquiries() {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    getInquiries().then(res => setInquiries(res.data)).catch(() => {});
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>Clarix Admin</h2>
        <Link to="/admin/dashboard" style={styles.navLink}>🏠 Dashboard</Link>
        <Link to="/admin/services" style={styles.navLink}>⚡ Services</Link>
        <Link to="/admin/portfolio" style={styles.navLink}>💼 Portfolio</Link>
        <Link to="/admin/blog" style={styles.navLink}>📝 Blog</Link>
        <Link to="/admin/inquiries" style={styles.navLink}>📩 Inquiries</Link>
        <Link to="/admin/meetings" style={styles.navLink}>📅 Meetings</Link>
      </div>
      <div style={styles.main}>
        <h1 style={styles.pageTitle}>Client Inquiries</h1>
        {inquiries.length === 0 ? <p style={styles.empty}>No inquiries yet.</p> : (
          <div style={styles.list}>
            {inquiries.map(inq => (
              <div key={inq._id} style={styles.card}>
                <h3 style={styles.name}>{inq.name}</h3>
                <p style={styles.info}>📧 {inq.email} {inq.phone && `• 📞 ${inq.phone}`}</p>
                <p style={styles.message}>{inq.message}</p>
                <p style={styles.date}>{new Date(inq.createdAt).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', minHeight: '100vh' },
  sidebar: { width: '240px', backgroundColor: '#0f172a', padding: '30px 20px' },
  logo: { color: '#6366f1', fontSize: '22px', marginBottom: '30px' },
  navLink: { display: 'block', color: '#e2e8f0', textDecoration: 'none', padding: '10px', borderRadius: '8px', marginBottom: '5px' },
  main: { flex: 1, padding: '40px', backgroundColor: '#f8fafc' },
  pageTitle: { fontSize: '32px', color: '#0f172a', marginBottom: '30px' },
  empty: { color: '#64748b' },
  list: { display: 'flex', flexDirection: 'column', gap: '15px' },
  card: { backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' },
  name: { fontSize: '18px', color: '#0f172a', marginBottom: '5px' },
  info: { color: '#6366f1', fontSize: '14px', marginBottom: '10px' },
  message: { color: '#334155', lineHeight: '1.6', marginBottom: '10px' },
  date: { color: '#94a3b8', fontSize: '12px' }
};

export default Inquiries;