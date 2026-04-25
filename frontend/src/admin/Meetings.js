import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMeetings } from '../api/index';

function Meetings() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    getMeetings().then(res => setMeetings(res.data)).catch(() => {});
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
        <h1 style={styles.pageTitle}>Booked Meetings</h1>
        {meetings.length === 0 ? <p style={styles.empty}>No meetings booked yet.</p> : (
          <div style={styles.list}>
            {meetings.map(m => (
              <div key={m._id} style={styles.card}>
                <h3 style={styles.name}>{m.name}</h3>
                <p style={styles.info}>📧 {m.email}</p>
                <p style={styles.info}>📅 {m.date} • 🕐 {m.time}</p>
                {m.message && <p style={styles.message}>{m.message}</p>}
                <p style={styles.date}>{new Date(m.createdAt).toLocaleDateString()}</p>
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
  info: { color: '#6366f1', fontSize: '14px', marginBottom: '5px' },
  message: { color: '#334155', lineHeight: '1.6', marginBottom: '10px' },
  date: { color: '#94a3b8', fontSize: '12px' }
};

export default Meetings;