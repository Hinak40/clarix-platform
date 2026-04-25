import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';

function About({ darkMode }) {
  const slides = [
    { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600', title: 'Meet Our Team', subtitle: 'Passionate people building amazing products' },
    { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600', title: 'Our Workspace', subtitle: 'Where ideas become reality' },
    { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600', title: 'Our Culture', subtitle: 'Collaboration, creativity, and growth' }
  ];

  const team = [
    { name: 'Hina Jehanzeb', role: 'CEO & Founder', avatar: 'A', color: '#6366f1' },
    { name: 'Abbas Hanif', role: 'Lead Developer', avatar: 'S', color: '#0ea5e9' },
    { name: 'Usman Malik', role: 'UI/UX Designer', avatar: 'U', color: '#10b981' },
    { name: 'Fatima Noor', role: 'Project Manager', avatar: 'F', color: '#f59e0b' }
  ];

  const values = [
    { icon: '🎯', title: 'Quality First', desc: 'We never compromise on the quality of our work.' },
    { icon: '🚀', title: 'Innovation', desc: 'Always exploring new technologies and approaches.' },
    { icon: '🤝', title: 'Collaboration', desc: 'Working closely with clients for best results.' },
    { icon: '⏱️', title: 'On Time', desc: 'We respect deadlines and deliver on time, every time.' }
  ];

  const bg = darkMode ? '#080c14' : '#f8fafc';
  const cardBg = darkMode ? '#0f172a' : 'white';
  const titleColor = darkMode ? 'white' : '#0f172a';
  const textColor = darkMode ? '#64748b' : '#475569';
  const border = darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';

  return (
    <div style={{ backgroundColor: bg }}>
      <Navbar />

      {/* Hero */}
      <section style={styles.hero}>
        <span style={styles.tag}>ABOUT US</span>
        <h1 style={styles.heroTitle}>We Are Clarix</h1>
        <p style={styles.heroSubtitle}>A passionate team of developers, designers, and strategists building digital solutions that matter.</p>
      </section>

      {/* Slider */}
      <section style={styles.sliderSection}>
        <ImageSlider images={slides} height="420px" />
      </section>

      {/* Mission & Vision */}
      <section style={{ ...styles.section, backgroundColor: bg }}>
        <div style={styles.missionGrid}>
          <div style={{ ...styles.missionCard, backgroundColor: cardBg, border: `1px solid ${border}` }}>
            <span style={styles.missionIcon}>🎯</span>
            <h2 style={{ ...styles.missionTitle, color: titleColor }}>Our Mission</h2>
            <p style={{ ...styles.missionText, color: textColor }}>To empower businesses with cutting-edge technology solutions. We believe every business deserves a strong digital presence, and we work tirelessly to make that happen — from startups to enterprises.</p>
          </div>
          <div style={{ ...styles.missionCard, backgroundColor: cardBg, border: `1px solid ${border}` }}>
            <span style={styles.missionIcon}>🔭</span>
            <h2 style={{ ...styles.missionTitle, color: titleColor }}>Our Vision</h2>
            <p style={{ ...styles.missionText, color: textColor }}>To become the most trusted software agency worldwide, known for quality, innovation, and commitment to client success. We envision a world where every business can leverage technology to its full potential.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ ...styles.darkSection, backgroundColor: darkMode ? '#0a0f1e' : '#f1f5f9' }}>
        <span style={{ ...styles.tagLight, color: '#6366f1' }}>WHAT DRIVES US</span>
        <h2 style={{ ...styles.sectionTitle, color: titleColor }}>Our Core Values</h2>
        <div style={styles.valuesGrid}>
          {values.map((v, i) => (
            <div key={i} style={{ ...styles.valueCard, backgroundColor: cardBg, border: `1px solid ${border}` }}>
              <span style={styles.valueIcon}>{v.icon}</span>
              <h3 style={{ ...styles.valueTitle, color: titleColor }}>{v.title}</h3>
              <p style={{ ...styles.valueDesc, color: textColor }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ ...styles.section, backgroundColor: bg }}>
        <span style={styles.tag}>THE PEOPLE</span>
        <h2 style={{ ...styles.sectionTitleDark, color: titleColor }}>Meet Our Team</h2>
        <p style={{ ...styles.sectionSubtitle, color: textColor }}>The talented people behind Clarix</p>
        <div style={styles.teamGrid}>
          {team.map((member, i) => (
            <div key={i} style={{ ...styles.teamCard, backgroundColor: cardBg, border: `1px solid ${border}` }}>
              <div style={{ ...styles.avatar, backgroundColor: member.color }}>
                {member.avatar}
              </div>
              <h3 style={{ ...styles.memberName, color: titleColor }}>{member.name}</h3>
              <p style={{ ...styles.memberRole, color: member.color }}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={styles.statsSection}>
        {[
          { number: '50+', label: 'Projects Done', icon: '🏆' },
          { number: '30+', label: 'Happy Clients', icon: '😊' },
          { number: '5+', label: 'Years Experience', icon: '📅' },
          { number: '10+', label: 'Team Members', icon: '👥' }
        ].map((stat, i) => (
          <div key={i} style={styles.statCard}>
            <span style={styles.statIcon}>{stat.icon}</span>
            <h2 style={styles.statNumber}>{stat.number}</h2>
            <p style={styles.statLabel}>{stat.label}</p>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}

const styles = {
  hero: {
    background: 'linear-gradient(135deg, #080c14 0%, #0f172a 50%, #1a1040 100%)',
    padding: '120px 80px 80px',
    textAlign: 'center',
    borderBottom: '1px solid rgba(255,255,255,0.05)'
  },
  tag: { color: '#6366f1', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '15px', display: 'block' },
  tagLight: { fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '15px', display: 'block', textAlign: 'center' },
  heroTitle: { fontSize: '56px', fontWeight: '800', color: 'white', marginBottom: '20px', letterSpacing: '-1.5px' },
  heroSubtitle: { fontSize: '18px', color: '#64748b', lineHeight: '1.7' },
  sliderSection: { padding: '0 80px', marginTop: '-30px' },
  section: { padding: '80px 80px' },
  darkSection: { padding: '80px 80px', textAlign: 'center' },
  missionGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' },
  missionCard: { padding: '40px 35px', borderRadius: '16px' },
  missionIcon: { fontSize: '36px', marginBottom: '15px', display: 'block' },
  missionTitle: { fontSize: '22px', fontWeight: '700', marginBottom: '12px' },
  missionText: { lineHeight: '1.8', fontSize: '14px' },
  valuesGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '40px' },
  valueCard: { padding: '28px 20px', borderRadius: '14px', textAlign: 'center' },
  valueIcon: { fontSize: '30px', marginBottom: '12px', display: 'block' },
  valueTitle: { fontSize: '16px', fontWeight: '700', marginBottom: '8px' },
  valueDesc: { fontSize: '13px', lineHeight: '1.6' },
  sectionTitle: { fontSize: '34px', fontWeight: '800', marginBottom: '40px', letterSpacing: '-1px' },
  sectionTitleDark: { fontSize: '34px', fontWeight: '800', marginBottom: '10px', letterSpacing: '-1px' },
  sectionSubtitle: { marginBottom: '40px', fontSize: '14px' },
  teamGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' },
  teamCard: { padding: '30px 20px', borderRadius: '16px', textAlign: 'center' },
  avatar: {
    width: '65px', height: '65px', borderRadius: '50%',
    color: 'white', fontSize: '26px', fontWeight: '700',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 15px'
  },
  memberName: { fontSize: '16px', fontWeight: '700', marginBottom: '5px' },
  memberRole: { fontSize: '12px', fontWeight: '500' },
  statsSection: {
    display: 'flex',
    backgroundColor: '#6366f1',
    flexWrap: 'wrap'
  },
  statCard: {
    flex: 1, textAlign: 'center',
    padding: '28px 15px',
    borderRight: '1px solid rgba(255,255,255,0.15)'
  },
  statIcon: { fontSize: '20px', display: 'block', marginBottom: '6px' },
  statNumber: { fontSize: '26px', color: 'white', fontWeight: '800', marginBottom: '3px' },
  statLabel: { color: 'rgba(255,255,255,0.75)', fontSize: '11px', fontWeight: '500' }
};

export default About;