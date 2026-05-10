import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';

function About({ darkMode, setDarkMode }) {
  const slides = [
    { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600', title: 'Meet Our Team', subtitle: 'Passionate people building amazing products' },
    { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600', title: 'Our Workspace', subtitle: 'Where ideas become reality' },
    { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600', title: 'Our Culture', subtitle: 'Collaboration, creativity, and growth' }
  ];

  const team = [
    { name: 'Ahmed Khan', role: 'CEO & Founder', avatar: 'A', color: '#6366f1' },
    { name: 'Sara Ali', role: 'Lead Developer', avatar: 'S', color: '#0ea5e9' },
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
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section style={{ background: 'linear-gradient(135deg, #080c14 0%, #0f172a 50%, #1a1040 100%)', padding: '120px 80px 80px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }} className="section-pad">
        <span style={styles.tag}>ABOUT US</span>
        <h1 className="section-title" style={{ fontSize: '56px', fontWeight: '800', color: 'white', marginBottom: '20px', letterSpacing: '-1.5px' }}>We Are Clarix</h1>
        <p className="section-subtitle" style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.7' }}>A passionate team of developers, designers, and strategists building digital solutions that matter.</p>
      </section>

      <section className="slider-section" style={{ padding: '0 80px', marginTop: '-30px' }}>
        <ImageSlider images={slides} height="420px" />
      </section>

      <section className="section-pad" style={{ padding: '80px 80px', backgroundColor: bg }}>
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
          {[
            { icon: '🎯', title: 'Our Mission', text: 'To empower businesses with cutting-edge technology solutions. We believe every business deserves a strong digital presence.' },
            { icon: '🔭', title: 'Our Vision', text: 'To become the most trusted software agency worldwide, known for quality, innovation, and commitment to client success.' }
          ].map((item, i) => (
            <div key={i} style={{ backgroundColor: cardBg, border: `1px solid ${border}`, padding: '40px 35px', borderRadius: '16px' }}>
              <span style={{ fontSize: '36px', marginBottom: '15px', display: 'block' }}>{item.icon}</span>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: titleColor, marginBottom: '12px' }}>{item.title}</h2>
              <p style={{ color: textColor, lineHeight: '1.8', fontSize: '14px' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad" style={{ padding: '80px 80px', backgroundColor: darkMode ? '#0a0f1e' : '#f1f5f9', textAlign: 'center' }}>
        <span style={styles.tag}>WHAT DRIVES US</span>
        <h2 className="section-title" style={{ fontSize: '34px', fontWeight: '800', color: titleColor, marginBottom: '40px' }}>Our Core Values</h2>
        <div className="grid-2-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {values.map((v, i) => (
            <div key={i} style={{ backgroundColor: cardBg, border: `1px solid ${border}`, padding: '28px 20px', borderRadius: '14px' }}>
              <span style={{ fontSize: '30px', marginBottom: '12px', display: 'block' }}>{v.icon}</span>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: titleColor, marginBottom: '8px' }}>{v.title}</h3>
              <p style={{ color: textColor, fontSize: '13px', lineHeight: '1.6' }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad" style={{ padding: '80px 80px', backgroundColor: bg }}>
        <span style={styles.tag}>THE PEOPLE</span>
        <h2 className="section-title" style={{ fontSize: '34px', fontWeight: '800', color: titleColor, marginBottom: '10px' }}>Meet Our Team</h2>
        <p style={{ color: textColor, marginBottom: '40px', fontSize: '14px' }}>The talented people behind Clarix</p>
        <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {team.map((member, i) => (
            <div key={i} style={{ backgroundColor: cardBg, border: `1px solid ${border}`, padding: '30px 20px', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ width: '65px', height: '65px', borderRadius: '50%', backgroundColor: member.color, color: 'white', fontSize: '26px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px' }}>{member.avatar}</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: titleColor, marginBottom: '5px' }}>{member.name}</h3>
              <p style={{ fontSize: '12px', fontWeight: '500', color: member.color }}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ display: 'flex', backgroundColor: '#6366f1', flexWrap: 'wrap' }}>
        {[
          { number: '50+', label: 'Projects Done', icon: '🏆' },
          { number: '30+', label: 'Happy Clients', icon: '😊' },
          { number: '5+', label: 'Years Experience', icon: '📅' },
          { number: '10+', label: 'Team Members', icon: '👥' }
        ].map((stat, i) => (
          <div key={i} style={{ flex: '1 1 25%', textAlign: 'center', padding: '28px 15px', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
            <span style={{ fontSize: '20px', display: 'block', marginBottom: '6px' }}>{stat.icon}</span>
            <h2 style={{ fontSize: '26px', color: 'white', fontWeight: '800', marginBottom: '3px' }}>{stat.number}</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '11px', fontWeight: '500' }}>{stat.label}</p>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}

const styles = {
  tag: { color: '#6366f1', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '15px', display: 'block' }
};

export default About;