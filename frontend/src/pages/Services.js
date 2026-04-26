import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import { getServices } from '../api/index';

function Services({ darkMode, setDarkMode }) {
  const [services, setServices] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    getServices().then(res => setServices(res.data)).catch(() => {});
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [
    { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600', title: 'Our Services', subtitle: 'Everything you need to build a strong digital presence' },
    { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600', title: 'Expert Solutions', subtitle: 'Delivered by industry professionals' },
    { url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600', title: 'End-to-End Development', subtitle: 'From concept to deployment' }
  ];

  const defaultServices = [
    { _id: 1, title: 'Web Development', description: 'Modern, responsive websites and web apps built with React, Next.js, and Node.js.', icon: '🌐', color: '#6366f1' },
    { _id: 2, title: 'Mobile Apps', description: 'Cross-platform mobile applications for iOS and Android using React Native.', icon: '📱', color: '#0ea5e9' },
    { _id: 3, title: 'UI/UX Design', description: 'Beautiful and intuitive designs that users love.', icon: '🎨', color: '#10b981' },
    { _id: 4, title: 'Cloud Solutions', description: 'Scalable cloud infrastructure on AWS, GCP, and Azure.', icon: '☁️', color: '#f59e0b' },
    { _id: 5, title: 'SEO Optimization', description: 'Boost your online presence and search rankings.', icon: '🚀', color: '#ef4444' },
    { _id: 6, title: 'E-Commerce', description: 'Complete online store solutions with payment integration.', icon: '🛒', color: '#8b5cf6' },
    { _id: 7, title: 'API Development', description: 'Robust and scalable REST and GraphQL APIs.', icon: '⚙️', color: '#ec4899' },
    { _id: 8, title: 'DevOps & CI/CD', description: 'Streamline your development workflow with automated pipelines.', icon: '🔧', color: '#14b8a6' },
    { _id: 9, title: 'Consulting', description: 'Expert technical consulting for your business.', icon: '💡', color: '#f97316' }
  ];

  const displayServices = services.length > 0 ? services : defaultServices;

  const bg = darkMode ? '#080c14' : '#f8fafc';
  const cardBg = darkMode ? '#0f172a' : 'white';
  const titleColor = darkMode ? 'white' : '#0f172a';
  const textColor = darkMode ? '#64748b' : '#475569';
  const border = darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';

  return (
    <div style={{ backgroundColor: bg }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section style={{ background: 'linear-gradient(135deg, #080c14 0%, #0f172a 50%, #1a1040 100%)', padding: isMobile ? '80px 20px 60px' : '120px 80px 80px', textAlign: 'center' }}>
        <span style={styles.tag}>WHAT WE OFFER</span>
        <h1 style={{ fontSize: isMobile ? '36px' : '56px', fontWeight: '800', color: 'white', marginBottom: '20px', letterSpacing: '-1.5px' }}>Our Services</h1>
        <p style={{ fontSize: isMobile ? '15px' : '18px', color: '#64748b' }}>Everything you need to build a powerful digital presence</p>
      </section>

      <section style={{ padding: isMobile ? '0 20px' : '0 80px', marginTop: '-30px' }}>
        <ImageSlider images={slides} height={isMobile ? '250px' : '420px'} />
      </section>

      <section style={{ padding: isMobile ? '60px 20px' : '100px 80px', backgroundColor: bg }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={styles.tag}>ALL SERVICES</span>
          <h2 style={{ fontSize: isMobile ? '28px' : '38px', fontWeight: '800', color: titleColor, letterSpacing: '-1px' }}>What We Do</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '22px' }}>
          {displayServices.map((s) => (
            <div key={s._id} style={{ backgroundColor: cardBg, padding: '32px 28px', borderRadius: '16px', border: `1px solid ${border}` }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', backgroundColor: `${s.color || '#6366f1'}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <span style={{ fontSize: '26px' }}>{s.icon || '⚡'}</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: titleColor, marginBottom: '10px' }}>{s.title}</h3>
              <p style={{ color: textColor, fontSize: '14px', lineHeight: '1.7', marginBottom: '18px' }}>{s.description}</p>
              <div style={{ height: '3px', width: '36px', borderRadius: '2px', backgroundColor: s.color || '#6366f1' }} />
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: isMobile ? '60px 20px' : '100px 80px', backgroundColor: darkMode ? '#0a0f1e' : '#f1f5f9', textAlign: 'center' }}>
        <span style={{ ...styles.tag, color: '#818cf8' }}>HOW WE WORK</span>
        <h2 style={{ fontSize: isMobile ? '28px' : '38px', fontWeight: '800', color: titleColor, marginBottom: '40px' }}>Our Process</h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '20px' }}>
          {[
            { step: '01', title: 'Discovery', desc: 'We understand your business goals and requirements.' },
            { step: '02', title: 'Planning', desc: 'We create a detailed roadmap and technical architecture.' },
            { step: '03', title: 'Development', desc: 'Our team builds your solution with best practices.' },
            { step: '04', title: 'Launch', desc: 'We deploy, test, and support your product.' }
          ].map((p, i) => (
            <div key={i} style={{ backgroundColor: cardBg, padding: '35px 25px', borderRadius: '16px', border: `1px solid ${border}`, textAlign: 'left' }}>
              <span style={{ fontSize: '36px', fontWeight: '800', color: '#6366f1', opacity: 0.4, display: 'block', marginBottom: '12px' }}>{p.step}</span>
              <h3 style={{ fontSize: '17px', fontWeight: '700', color: titleColor, marginBottom: '8px' }}>{p.title}</h3>
              <p style={{ color: textColor, fontSize: '13px', lineHeight: '1.6' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

const styles = {
  tag: { color: '#6366f1', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '15px', display: 'block' }
};

export default Services;