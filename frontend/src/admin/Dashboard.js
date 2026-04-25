import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getServices, getPortfolio, getBlogs, getInquiries, getMeetings } from '../api/index';

function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ services: 0, portfolio: 0, blogs: 0, inquiries: 0, meetings: 0 });
  const [dark, setDark] = useState(true);

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

  const bg = dark ? '#080c14' : '#f8fafc';
  const sidebarBg = dark ? '#0a0f1e' : '#ffffff';
  const cardBg = dark ? '#0f172a' : '#ffffff';
  const titleColor = dark ? 'white' : '#0f172a';
  const textColor = dark ? '#475569' : '#64748b';
  const border = dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.08)';
  const navLinkColor = dark ? '#94a3b8' : '#475569';

  return (
    <div style={{ ...styles.container, backgroundColor: bg }}>
      {/* Sidebar */}
      <div style={{ ...styles.sidebar, backgroundColor: sidebarBg, borderRight: `1px solid ${border}` }}>
        <div>
          <div style={styles.logoBox}>
            <span style={styles.logoIcon}>◆</span>
            <span style={{ ...styles.logoText, color: titleColor }}>Clarix</span>
          </div>
          <p style={{ ...styles.adminLabel, color: textColor }}>Admin Panel</p>
          <nav style={styles.nav}>
            {cards.map((c, i) => (
              <Link key={i} to={c.link} style={{ ...styles.navLink, color: navLinkColor }}>
                <span style={{ ...styles.navIcon, backgroundColor: `${c.color}20` }}>{c.icon}</span>
                <span>{c.title}</span>
                <span style={{ ...styles.navBadge, backgroundColor: c.color }}>{c.count}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <button onClick={() => setDark(!dark)} style={{ ...styles.themeBtn, marginBottom: '10px' }}>
            {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
          <button onClick={logout} style={styles.logoutBtn}>🚪 Logout</button>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.main}>
        {/* Header */}
        <div style={styles.header}>
          <div>
            <h1 style={{ ...styles.pageTitle, color: titleColor }}>Dashboard</h1>
            <p style={{ ...styles.pageSubtitle, color: textColor }}>Welcome back, Admin!</p>
          </div>
          <span style={{ ...styles.dateBadge, backgroundColor: cardBg, color: textColor, border: `1px solid ${border}` }}>
            📅 {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>

        {/* Stats Grid */}
        <div style={styles.statsGrid}>
          {cards.map((card, i) => (
            <Link to={card.link} key={i} style={{ ...styles.statCard, backgroundColor: cardBg, border: `1px solid ${border}` }}>
              <div style={styles.statTop}>
                <div style={{ ...styles.statIconBox, backgroundColor: `${card.color}15`, border: `1px solid ${card.color}25` }}>
                  <span style={styles.statIcon}>{card.icon}</span>
                </div>
                <span style={{ ...styles.statCount, color: card.color }}>{card.count}</span>
              </div>
              <h3 style={{ ...styles.statTitle, color: titleColor }}>{card.title}</h3>
              <p style={{ ...styles.statDesc, color: textColor }}>Manage {card.title}</p>
              <div style={{ ...styles.statLine, backgroundColor: card.color }} />
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div style={styles.section}>
          <h2 style={{ ...styles.sectionTitle, color: titleColor }}>Quick Actions</h2>
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
          {[
            { title: '🌐 Live Website', text: 'Your website is live and accessible to visitors.', link: 'https://clarix-platform.vercel.app', label: 'Visit Website →' },
            { title: '📊 Backend', text: 'Backend is running on Render. MongoDB is connected.', link: 'https://clarix-platform.onrender.com', label: 'Check Backend →' },
            { title: '💻 GitHub', text: 'Source code is available on GitHub repository.', link: 'https://github.com/Hinak40/clarix-platform', label: 'View Code →' }
          ].map((item, i) => (
            <div key={i} style={{ ...styles.infoCard, backgroundColor: cardBg, border: `1px solid ${border}` }}>
              <h3 style={{ ...styles.infoTitle, color: titleColor }}>{item.title}</h3>
              <p style={{ ...styles.infoText, color: textColor }}>{item.text}</p>
              <a href={item.link} target="_blank" rel="noreferrer" style={styles.infoLink}>{item.label}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" },
  sidebar: { width: '260px', padding: '30px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'sticky', top: 0, height: '100vh' },
  logoBox: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' },
  logoIcon: { color: '#6366f1', fontSize: '18px' },
  logoText: { fontSize: '22px', fontWeight: '800' },
  adminLabel: { fontSize: '11px', fontWeight: '600', letterSpacing: '2px', marginBottom: '25px' },
  nav: { display: 'flex', flexDirection: 'column', gap: '6px' },
  navLink: { display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', padding: '10px 12px', borderRadius: '10px', fontSize: '14px', fontWeight: '500' },
  navIcon: { width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 },
  navBadge: { marginLeft: 'auto', color: 'white', fontSize: '11px', fontWeight: '700', padding: '2px 8px', borderRadius: '20px' },
  themeBtn: { width: '100%', backgroundColor: 'rgba(99,102,241,0.1)', color: '#6366f1', border: '1px solid rgba(99,102,241,0.2)', padding: '10px', borderRadius: '10px', cursor: 'pointer', fontSize: '13px', fontWeight: '600' },
  logoutBtn: { width: '100%', backgroundColor: 'rgba(239,68,68,0.1)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.2)', padding: '12px', borderRadius: '10px', cursor: 'pointer', fontSize: '14px', fontWeight: '600' },
  main: { flex: 1, padding: '40px', overflowY: 'auto' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' },
  pageTitle: { fontSize: '32px', fontWeight: '800', marginBottom: '5px', letterSpacing: '-0.5px' },
  pageSubtitle: { fontSize: '14px' },
  dateBadge: { padding: '8px 16px', borderRadius: '8px', fontSize: '13px' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', marginBottom: '35px' },
  statCard: { padding: '22px 18px', borderRadius: '14px', textDecoration: 'none', transition: 'transform 0.2s' },
  statTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' },
  statIconBox: { width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  statIcon: { fontSize: '18px' },
  statCount: { fontSize: '28px', fontWeight: '800' },
  statTitle: { fontSize: '14px', fontWeight: '700', marginBottom: '4px' },
  statDesc: { fontSize: '12px', marginBottom: '14px' },
  statLine: { height: '3px', width: '36px', borderRadius: '2px' },
  section: { marginBottom: '30px' },
  sectionTitle: { fontSize: '18px', fontWeight: '700', marginBottom: '16px' },
  actionsGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' },
  actionBtn: { display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 18px', borderRadius: '12px', textDecoration: 'none' },
  actionIcon: { fontSize: '20px' },
  actionLabel: { color: 'white', fontSize: '14px', fontWeight: '600' },
  infoGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' },
  infoCard: { padding: '24px', borderRadius: '14px' },
  infoTitle: { fontSize: '15px', fontWeight: '700', marginBottom: '8px' },
  infoText: { fontSize: '13px', lineHeight: '1.6', marginBottom: '14px' },
  infoLink: { color: '#6366f1', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }
};

export default Dashboard;