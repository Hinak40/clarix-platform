import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getServices, getPortfolio, getBlogs, getInquiries, getMeetings } from '../api/index';

function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ services: 0, portfolio: 0, blogs: 0, inquiries: 0, meetings: 0 });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/admin');

    Promise.all([
      getServices().catch(() => ({ data: [] })),
      getPortfolio().catch(() => ({ data: [] })),
      getBlogs().catch(() => ({ data: [] })),
      getInquiries().catch(() => ({ data: [] })),
      getMeetings().catch(() => ({ data: [] }))
    ]).then(([s, p, b, i, m]) => {
      setStats({
        services: s.data.length,
        portfolio: p.data.length,
        blogs: b.data.length,
        inquiries: i.data.length,
        meetings: m.data.length
      });
    });
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/admin');
  };

  const cards = [
    { title: 'Services', link: '/admin/services', icon: '⚡', color: '#6366f1', count: stats.services },
    { title: 'Portfolio', link: '/admin/portfolio', icon: '💼', color: '#0ea5e9', count: stats.portfolio },
    { title: 'Blog', link: '/admin/blog', icon: '📝', color: '#10b981', count: stats.blogs },
    { title: 'Inquiries', link: '/admin/inquiries', icon: '📩', color: '#f59e0b', count: stats.inquiries },
    { title: 'Meetings', link: '/admin/meetings', icon: '📅', color: '#ef4444', count: stats.meetings }
  ];

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div>
          <div style={styles.logoBox}>
            <span style={styles.logoIcon}>◆</span>
            <span style={styles.logoText}>Clarix</span>
          </div>
          <p style={styles.adminLabel}>Admin Panel</p>
          <nav style={styles.nav}>
            {cards.map((c, i) => (
              <Link key={i} to={c.link} style={styles.navLink}>
                <span style={{ ...styles.navIcon, backgroundColor: `${c.color}20` }}>{c.icon}</span>
                <span>{c.title}</span>
                <span style={{ ...styles.navBadge, backgroundColor: c.color }}>{c.count}</span>
              </Link>
            ))}
          </nav>
        </div>
        <button onClick={logout} style={styles.logoutBtn}>🚪 Logout</button>
      </div>

      {/* Main Content */}
      <div style={styles.main}>
        {/* Header */}
        <div style={styles.header}>
          <div>
            <h1 style={styles.pageTitle}>Dashboard</h1>
            <p style={styles.pageSubtitle}>Welcome back, Admin! Here's your overview.</p>
          </div>
          <div style={styles.headerRight}>
            <span style={styles.dateBadge}>📅 {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={styles.statsGrid}>
          {cards.map((card, i) => (
            <Link to={card.link} key={i} style={styles.statCard}>
              <div style={styles.statTop}>
                <div style={{ ...styles.statIconBox, backgroundColor: `${card.color}15`, border: `1px solid ${card.color}25` }}>
                  <span style={styles.statIcon}>{card.icon}</span>
                </div>
                <span style={{ ...styles.statCount, color: card.color }}>{card.count}</span>
              </div>
              <h3 style={styles.statTitle}>{card.title}</h3>
              <p style={styles.statDesc}>Manage {card.title}</p>
              <div style={{ ...styles.statLine, backgroundColor: card.color }} />
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Quick Actions</h2>
          <div style={styles.actionsGrid}>
            {[
              { label: 'Add Service', link: '/admin/services', icon: '⚡', color: '#6366f1' },
              { label: 'Add Project', link: '/admin/portfolio', icon: '💼', color: '#0ea5e9' },
              { label: 'Write Blog', link: '/admin/blog', icon: '📝', color: '#10b981' },
              { label: 'View Inquiries', link: '/admin/inquiries', icon: '📩', color: '#f59e0b' }
            ].map((action, i) => (
              <Link key={i} to={action.link} style={{ ...styles.actionBtn, backgroundColor: action.color }}>
                <span style={styles.actionIcon}>{action.icon}</span>
                <span style={styles.actionLabel}>{action.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Info Cards */}
        <div style={styles.infoGrid}>
          <div style={styles.infoCard}>
            <h3 style={styles.infoTitle}>🌐 Live Website</h3>
            <p style={styles.infoText}>Your website is live and accessible to visitors.</p>
            <a href="https://clarix-platform.vercel.app" target="_blank" rel="noreferrer" style={styles.infoLink}>Visit Website →</a>
          </div>
          <div style={styles.infoCard}>
            <h3 style={styles.infoTitle}>📊 Performance</h3>
            <p style={styles.infoText}>Backend is running on Render. MongoDB is connected.</p>
            <a href="https://clarix-platform.onrender.com" target="_blank" rel="noreferrer" style={styles.infoLink}>Check Backend →</a>
          </div>
          <div style={styles.infoCard}>
            <h3 style={styles.infoTitle}>💻 GitHub</h3>
            <p style={styles.infoText}>Source code is available on GitHub repository.</p>
            <a href="https://github.com/Hinak40/clarix-platform" target="_blank" rel="noreferrer" style={styles.infoLink}>View Code →</a>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', minHeight: '100vh', backgroundColor: '#080c14', fontFamily: "'Plus Jakarta Sans', sans-serif" },
  sidebar: { width: '260px', backgroundColor: '#0a0f1e', padding: '30px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: '1px solid rgba(255,255,255,0.05)', position: 'sticky', top: 0, height: '100vh' },
  logoBox: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' },
  logoIcon: { color: '#6366f1', fontSize: '18px' },
  logoText: { color: 'white', fontSize: '22px', fontWeight: '800' },
  adminLabel: { color: '#475569', fontSize: '11px', fontWeight: '600', letterSpacing: '2px', marginBottom: '25px' },
  nav: { display: 'flex', flexDirection: 'column', gap: '6px' },
  navLink: { display: 'flex', alignItems: 'center', gap: '12px', color: '#94a3b8', textDecoration: 'none', padding: '10px 12px', borderRadius: '10px', fontSize: '14px', fontWeight: '500', transition: 'all 0.2s', backgroundColor: 'transparent' },
  navIcon: { width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 },
  navBadge: { marginLeft: 'auto', color: 'white', fontSize: '11px', fontWeight: '700', padding: '2px 8px', borderRadius: '20px' },
  logoutBtn: { width: '100%', backgroundColor: 'rgba(239,68,68,0.1)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.2)', padding: '12px', borderRadius: '10px', cursor: 'pointer', fontSize: '14px', fontWeight: '600' },
  main: { flex: 1, padding: '40px', overflowY: 'auto' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' },
  pageTitle: { fontSize: '32px', fontWeight: '800', color: 'white', marginBottom: '5px', letterSpacing: '-0.5px' },
  pageSubtitle: { color: '#475569', fontSize: '14px' },
  headerRight: {},
  dateBadge: { backgroundColor: '#0f172a', color: '#64748b', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', border: '1px solid rgba(255,255,255,0.05)' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', marginBottom: '35px' },
  statCard: { backgroundColor: '#0f172a', padding: '22px 18px', borderRadius: '14px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.2s' },
  statTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' },
  statIconBox: { width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  statIcon: { fontSize: '18px' },
  statCount: { fontSize: '28px', fontWeight: '800' },
  statTitle: { color: 'white', fontSize: '14px', fontWeight: '700', marginBottom: '4px' },
  statDesc: { color: '#475569', fontSize: '12px', marginBottom: '14px' },
  statLine: { height: '3px', width: '36px', borderRadius: '2px' },
  section: { marginBottom: '30px' },
  sectionTitle: { color: 'white', fontSize: '18px', fontWeight: '700', marginBottom: '16px' },
  actionsGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' },
  actionBtn: { display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 18px', borderRadius: '12px', textDecoration: 'none', transition: 'opacity 0.2s' },
  actionIcon: { fontSize: '20px' },
  actionLabel: { color: 'white', fontSize: '14px', fontWeight: '600' },
  infoGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' },
  infoCard: { backgroundColor: '#0f172a', padding: '24px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.05)' },
  infoTitle: { color: 'white', fontSize: '15px', fontWeight: '700', marginBottom: '8px' },
  infoText: { color: '#475569', fontSize: '13px', lineHeight: '1.6', marginBottom: '14px' },
  infoLink: { color: '#6366f1', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }
};

export default Dashboard;