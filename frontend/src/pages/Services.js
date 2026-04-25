import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import { getServices } from '../api/index';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then(res => setServices(res.data)).catch(() => {});
  }, []);

  const slides = [
    { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600', title: 'Our Services', subtitle: 'Everything you need to build a strong digital presence' },
    { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600', title: 'Expert Solutions', subtitle: 'Delivered by industry professionals' },
    { url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600', title: 'End-to-End Development', subtitle: 'From concept to deployment' }
  ];

  const defaultServices = [
    { _id: 1, title: 'Web Development', description: 'Modern, responsive websites and web apps built with React, Next.js, and Node.js. We deliver fast, scalable, and beautiful web solutions.', icon: '🌐', color: '#6366f1' },
    { _id: 2, title: 'Mobile Apps', description: 'Cross-platform mobile applications for iOS and Android using React Native. Native performance with a single codebase.', icon: '📱', color: '#0ea5e9' },
    { _id: 3, title: 'UI/UX Design', description: 'Beautiful and intuitive designs that users love. We craft experiences that are both visually stunning and highly functional.', icon: '🎨', color: '#10b981' },
    { _id: 4, title: 'Cloud Solutions', description: 'Scalable cloud infrastructure on AWS, GCP, and Azure. We handle deployment, monitoring, and maintenance.', icon: '☁️', color: '#f59e0b' },
    { _id: 5, title: 'SEO Optimization', description: 'Boost your online presence and search rankings with our proven SEO strategies and technical optimization.', icon: '🚀', color: '#ef4444' },
    { _id: 6, title: 'E-Commerce', description: 'Complete online store solutions with payment integration, inventory management, and analytics.', icon: '🛒', color: '#8b5cf6' },
    { _id: 7, title: 'API Development', description: 'Robust and scalable REST and GraphQL APIs. Secure, well-documented, and built for performance.', icon: '⚙️', color: '#ec4899' },
    { _id: 8, title: 'DevOps & CI/CD', description: 'Streamline your development workflow with automated pipelines, Docker, and Kubernetes.', icon: '🔧', color: '#14b8a6' },
    { _id: 9, title: 'Consulting', description: 'Expert technical consulting to help you make the right technology decisions for your business.', icon: '💡', color: '#f97316' }
  ];

  const displayServices = services.length > 0 ? services : defaultServices;

  const process = [
    { step: '01', title: 'Discovery', desc: 'We understand your business goals and requirements.' },
    { step: '02', title: 'Planning', desc: 'We create a detailed roadmap and technical architecture.' },
    { step: '03', title: 'Development', desc: 'Our team builds your solution with best practices.' },
    { step: '04', title: 'Launch', desc: 'We deploy, test, and support your product.' }
  ];

  return (
    <div>
<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* Hero */}
      <section style={styles.hero}>
        <span style={styles.tag}>WHAT WE OFFER</span>
        <h1 style={styles.heroTitle}>Our Services</h1>
        <p style={styles.heroSubtitle}>Everything you need to build a powerful digital presence</p>
      </section>

      {/* Slider */}
      <section style={styles.sliderSection}>
        <ImageSlider images={slides} height="420px" />
      </section>

      {/* Services Grid */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.tag}>ALL SERVICES</span>
          <h2 style={styles.sectionTitle}>What We Do</h2>
        </div>
        <div style={styles.grid}>
          {displayServices.map((s) => (
            <div key={s._id} style={styles.card}>
              <div style={{ ...styles.iconBox, backgroundColor: `${s.color || '#6366f1'}15`, border: `1px solid ${s.color || '#6366f1'}25` }}>
                <span style={styles.icon}>{s.icon || '⚡'}</span>
              </div>
              <h3 style={styles.cardTitle}>{s.title}</h3>
              <p style={styles.cardDesc}>{s.description}</p>
              <div style={{ ...styles.cardLine, backgroundColor: s.color || '#6366f1' }} />
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section style={styles.darkSection}>
        <span style={styles.tagLight}>HOW WE WORK</span>
        <h2 style={styles.sectionTitleLight}>Our Process</h2>
        <div style={styles.processGrid}>
          {process.map((p, i) => (
            <div key={i} style={styles.processCard}>
              <span style={styles.stepNum}>{p.step}</span>
              <h3 style={styles.stepTitle}>{p.title}</h3>
              <p style={styles.stepDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
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
  tagLight: { color: '#818cf8', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '15px', display: 'block', textAlign: 'center' },
  heroTitle: { fontSize: '56px', fontWeight: '800', color: 'white', marginBottom: '20px', letterSpacing: '-1.5px' },
  heroSubtitle: { fontSize: '18px', color: '#64748b', lineHeight: '1.7' },
  sliderSection: { padding: '0 80px', marginTop: '-30px' },
  section: { padding: '100px 80px', backgroundColor: '#080c14' },
  darkSection: { padding: '100px 80px', backgroundColor: '#0a0f1e', textAlign: 'center' },
  sectionHeader: { textAlign: 'center', marginBottom: '60px' },
  sectionTitle: { fontSize: '38px', fontWeight: '800', color: 'white', marginBottom: '12px', letterSpacing: '-1px' },
  sectionTitleLight: { fontSize: '38px', fontWeight: '800', color: 'white', marginBottom: '50px', letterSpacing: '-1px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' },
  card: {
    backgroundColor: '#0f172a',
    padding: '35px 30px',
    borderRadius: '16px',
    border: '1px solid rgba(255,255,255,0.06)',
    transition: 'transform 0.3s ease'
  },
  iconBox: {
    width: '60px', height: '60px',
    borderRadius: '14px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: '20px'
  },
  icon: { fontSize: '26px' },
  cardTitle: { fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: '10px' },
  cardDesc: { color: '#64748b', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' },
  cardLine: { height: '3px', width: '40px', borderRadius: '2px' },
  processGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px' },
  processCard: {
    backgroundColor: '#0f172a',
    padding: '40px 30px',
    borderRadius: '16px',
    border: '1px solid rgba(255,255,255,0.06)',
    textAlign: 'left'
  },
  stepNum: { fontSize: '42px', fontWeight: '800', color: '#6366f1', opacity: 0.4, display: 'block', marginBottom: '15px' },
  stepTitle: { fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: '10px' },
  stepDesc: { color: '#64748b', fontSize: '14px', lineHeight: '1.6' }
};

export default Services;