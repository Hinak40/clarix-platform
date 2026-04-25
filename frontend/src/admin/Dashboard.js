import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/admin');
  };

  const cards = [
    { title: 'Services', link: '/admin/services', icon: '⚡', color: '#6366f1' },
    { title: 'Portfolio', link: '/admin/portfolio', icon: '💼', color: '#0ea5e9' },
    { title: 'Blog', link: '/admin/blog', icon: '📝', color: '#10b981' },
    { title: 'Inquiries', link: '/admin/inquiries', icon: '📩', color: '#f59e0b' },
    { title: 'Meetings', link: '/admin/meetings', icon: '📅', color: '#ef4444' }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>Clarix Admin</h2>
        <nav>
          {cards.map((c, i) => (
            <Link key={i} to={c.link} style={styles.navLink}>{c.icon} {c.title}</Link>
          ))}
        </nav>
        <button onClick={logout} style={styles.logoutBtn}>🚪 Logout</button>
      </div>
      <div style={styles.main}>
        <h1 style={styles.pageTitle}>Dashboard</h1>
        <p style={styles.subtitle}>Welcome back, Admin!</p>
        <div style={styles.grid}>
          {cards.map((card, i) => (
            <Link to={card.link} key={i} style={{...styles.card, borderTop: `4px solid ${card.color}`}}>
              <div style={styles.cardIcon}>{card.icon}</div>
              <h3 style={styles.cardTitle}>{card.title}</h3>
              <p style={styles.cardDesc}>Manage {card.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', minHeight: '100vh' },
  sidebar: { width: '240px', backgroundColor: '#0f172a', padding: '30px 20px', display: 'flex', flexDirection: 'column' },
  logo: { color: '#6366f1', fontSize: '22px', marginBottom: '30px' },
  navLink: { display: 'block', color: '#e2e8f0', textDecoration: 'none', padding: '10px', borderRadius: '8px', marginBottom: '5px', fontSize: '15px' },
  logoutBtn: { marginTop: 'auto', backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '10px', borderRadius: '8px', cursor: 'pointer' },
  main: { flex: 1, padding: '40px', backgroundColor: '#f8fafc' },
  pageTitle: { fontSize: '32px', color: '#0f172a', marginBottom: '5px' },
  subtitle: { color: '#64748b', marginBottom: '40px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' },
  card: { backgroundColor: 'white', padding: '30px', borderRadius: '12px', textDecoration: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' },
  cardIcon: { fontSize: '36px', marginBottom: '15px' },
  cardTitle: { fontSize: '20px', color: '#0f172a', marginBottom: '5px' },
  cardDesc: { color: '#64748b', fontSize: '14px' }
};

export default Dashboard;