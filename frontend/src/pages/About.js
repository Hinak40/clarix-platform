import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';

function About() {
  const slides = [
    { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600', title: 'Meet Our Team', subtitle: 'Passionate people building amazing products' },
    { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600', title: 'Our Workspace', subtitle: 'Where ideas become reality' },
    { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600', title: 'Our Culture', subtitle: 'Collaboration, creativity, and growth' }
  ];

  const team = [
    { name: 'Hina Jehanzeb', role: 'CEO & Founder', avatar: 'A', color: '#6366f1' },
    { name: 'Alishba Rehman', role: 'Lead Developer', avatar: 'S', color: '#0ea5e9' },
    { name: 'Wasil Khan', role: 'UI/UX Designer', avatar: 'U', color: '#10b981' },
    { name: 'Abbas', role: 'Project Manager', avatar: 'F', color: '#f59e0b' }
  ];

  const values = [
    { icon: '🎯', title: 'Quality First', desc: 'We never compromise on the quality of our work.' },
    { icon: '🚀', title: 'Innovation', desc: 'Always exploring new technologies and approaches.' },
    { icon: '🤝', title: 'Collaboration', desc: 'Working closely with clients for best results.' },
    { icon: '⏱️', title: 'On Time', desc: 'We respect deadlines and deliver on time, every time.' }
  ];

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <span style={styles.tag}>ABOUT US</span>
          <h1 style={styles.heroTitle}>We Are Clarix</h1>
          <p style={styles.heroSubtitle}>A passionate team of developers, designers, and strategists building digital solutions that matter for businesses worldwide.</p>
        </div>
      </section>

      {/* Slider */}
      <section style={styles.sliderSection}>
        <ImageSlider images={slides} height="450px" />
      </section>

      {/* Mission & Vision */}
      <section style={styles.section}>
        <div style={styles.missionGrid}>
          <div style={styles.missionCard}>
            <span style={styles.missionIcon}>🎯</span>
            <h2 style={styles.missionTitle}>Our Mission</h2>
            <p style={styles.missionText}>To empower businesses with cutting-edge technology solutions. We believe every business deserves a strong digital presence, and we work tirelessly to make that happen — from startups to enterprises.</p>
          </div>
          <div style={styles.missionCard}>
            <span style={styles.missionIcon}>🔭</span>
            <h2 style={styles.missionTitle}>Our Vision</h2>
            <p style={styles.missionText}>To become the most trusted software agency worldwide, known for quality, innovation, and commitment to client success. We envision a world where every business can leverage technology to its full potential.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={styles.darkSection}>
        <span style={styles.tagLight}>WHAT DRIVES US</span>
        <h2 style={styles.sectionTitle}>Our Core Values</h2>
        <div style={styles.valuesGrid}>
          {values.map((v, i) => (
            <div key={i} style={styles.valueCard}>
              <span style={styles.valueIcon}>{v.icon}</span>
              <h3 style={styles.valueTitle}>{v.title}</h3>
              <p style={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={styles.section}>
        <span style={styles.tag}>THE PEOPLE</span>
        <h2 style={styles.sectionTitleDark}>Meet Our Team</h2>
        <p style={styles.sectionSubtitle}>The talented people behind Clarix</p>
        <div style={styles.teamGrid}>
          {team.map((member, i) => (
            <div key={i} style={styles.teamCard}>
              <div style={{ ...styles.avatar, backgroundColor: member.color }}>
                {member.avatar}
              </div>
              <h3 style={styles.memberName}>{member.name}</h3>
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
  heroContent: { maxWidth: '700px', margin: '0 auto' },
  tag: { color: '#6366f1', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '15px', display: 'block' },
  tagLight: { color: '#818cf8', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '15px', display: 'block', textAlign: 'center' },
  heroTitle: { fontSize: '56px', fontWeight: '800', color: 'white', marginBottom: '20px', letterSpacing: '-1.5px' },
  heroSubtitle: { fontSize: '18px', color: '#64748b', lineHeight: '1.7' },
  sliderSection: { padding: '0 80px', marginTop: '-30px' },
  section: { padding: '100px 80px', backgroundColor: '#080c14' },
  darkSection: { padding: '100px 80px', backgroundColor: '#0a0f1e', textAlign: 'center' },
  missionGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' },
  missionCard: {
    backgroundColor: '#0f172a',
    padding: '50px 40px',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.06)'
  },
  missionIcon: { fontSize: '40px', marginBottom: '20px', display: 'block' },
  missionTitle: { fontSize: '24px', fontWeight: '700', color: 'white', marginBottom: '15px' },
  missionText: { color: '#64748b', lineHeight: '1.8', fontSize: '15px' },
  valuesGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px', marginTop: '50px' },
  valueCard: {
    backgroundColor: '#0f172a',
    padding: '35px 25px',
    borderRadius: '16px',
    border: '1px solid rgba(255,255,255,0.06)',
    textAlign: 'center'
  },
  valueIcon: { fontSize: '36px', marginBottom: '15px', display: 'block' },
  valueTitle: { fontSize: '17px', fontWeight: '700', color: 'white', marginBottom: '10px' },
  valueDesc: { color: '#64748b', fontSize: '14px', lineHeight: '1.6' },
  sectionTitle: { fontSize: '38px', fontWeight: '800', color: 'white', marginBottom: '50px', letterSpacing: '-1px' },
  sectionTitleDark: { fontSize: '38px', fontWeight: '800', color: 'white', marginBottom: '12px', letterSpacing: '-1px' },
  sectionSubtitle: { color: '#64748b', marginBottom: '50px', fontSize: '15px' },
  teamGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px' },
  teamCard: {
    backgroundColor: '#0f172a',
    padding: '40px 25px',
    borderRadius: '20px',
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,0.06)',
    transition: 'transform 0.3s ease'
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    color: 'white',
    fontSize: '32px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px'
  },
  memberName: { fontSize: '17px', fontWeight: '700', color: 'white', marginBottom: '6px' },
  memberRole: { fontSize: '13px', fontWeight: '500' },
  statsSection: {
    display: 'flex',
    backgroundColor: '#6366f1',
    flexWrap: 'wrap'
  },
  statCard: { flex: 1, textAlign: 'center', padding: '50px 20px', borderRight: '1px solid rgba(255,255,255,0.15)' },
  statIcon: { fontSize: '28px', display: 'block', marginBottom: '10px' },
  statNumber: { fontSize: '42px', color: 'white', fontWeight: '800', marginBottom: '5px' },
  statLabel: { color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: '500' }
};

export default About;