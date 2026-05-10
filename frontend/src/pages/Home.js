import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getServices } from '../api/index';

function Home({ darkMode, setDarkMode }) {
  const [services, setServices] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600', title: 'We Build Web Apps' },
    { url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600', title: 'We Design Experiences' },
    { url: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1600', title: 'We Deliver Results' }
  ];

  useEffect(() => {
    getServices().then(res => setServices(res.data)).catch(() => {});
    const timer = setInterval(() => setCurrentSlide(prev => (prev + 1) % slides.length), 3000);
    return () => clearInterval(timer);
  }, []);

  const defaultServices = [
    { _id: 1, title: 'Web Development', description: 'Modern, responsive websites built with latest technologies.', icon: '🌐', color: '#6366f1' },
    { _id: 2, title: 'Mobile Apps', description: 'Cross-platform mobile applications for iOS and Android.', icon: '📱', color: '#0ea5e9' },
    { _id: 3, title: 'UI/UX Design', description: 'Beautiful and intuitive designs that users love.', icon: '🎨', color: '#10b981' },
    { _id: 4, title: 'Cloud Solutions', description: 'Scalable cloud infrastructure for your business.', icon: '☁️', color: '#f59e0b' },
    { _id: 5, title: 'SEO Optimization', description: 'Boost your online presence and search rankings.', icon: '🚀', color: '#ef4444' },
    { _id: 6, title: 'E-Commerce', description: 'Complete online store solutions for your business.', icon: '🛒', color: '#8b5cf6' }
  ];

  const displayServices = services.length > 0 ? services : defaultServices;

  const bg = darkMode ? '#080c14' : '#f8fafc';
  const cardBg = darkMode ? '#0f172a' : 'white';
  const titleColor = darkMode ? 'white' : '#0f172a';
  const textColor = darkMode ? '#64748b' : '#475569';
  const border = darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';
  const statsBg = darkMode ? '#0a0f1e' : '#f1f5f9';

  return (
    <div style={{ backgroundColor: bg }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero */}
      <section style={{ ...styles.hero, backgroundImage: `url(${slides[currentSlide].url})` }}>
        <div className="hero-section" style={styles.heroOverlay}>
          <span style={styles.heroBadge}>⚡ Top-Rated Software Agency</span>
          <h1 className="hero-title" style={styles.heroTitle}>{slides[currentSlide].title}</h1>
          <p className="hero-subtitle" style={styles.heroSubtitle}>Clarix delivers cutting-edge web & mobile applications for businesses worldwide.</p>
          <div className="hero-btns" style={styles.heroBtns}>
            <Link to="/services" style={styles.btnPrimary}>Explore Services</Link>
            <Link to="/contact" style={styles.btnSecondary}>Get In Touch</Link>
          </div>
          <div style={styles.dots}>
            {slides.map((_, i) => (
              <span key={i} onClick={() => setCurrentSlide(i)} style={{ ...styles.dot, width: i === currentSlide ? '28px' : '8px', backgroundColor: i === currentSlide ? '#6366f1' : 'rgba(255,255,255,0.3)' }} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-row" style={{ display: 'flex', justifyContent: 'center', gap: '15px', padding: '30px 40px', backgroundColor: statsBg, borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}`, flexWrap: 'wrap' }}>
        {[
          { number: '50+', label: 'Projects Completed', icon: '🏆' },
          { number: '30+', label: 'Happy Clients', icon: '🤝' },
          { number: '5+', label: 'Years Experience', icon: '📅' },
          { number: '10+', label: 'Team Members', icon: '👥' }
        ].map((stat, i) => (
          <div className="stat-card-item" key={i} style={{ ...styles.statCard, backgroundColor: cardBg, border: `1px solid ${border}` }}>
            <div style={styles.statIconBox}><span style={styles.statIcon}>{stat.icon}</span></div>
            <div>
              <h3 style={styles.statNumber}>{stat.number}</h3>
              <p style={{ ...styles.statLabel, color: textColor }}>{stat.label}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Services */}
      <section className="section-pad" style={{ padding: '100px 80px', backgroundColor: bg }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={styles.tag}>WHAT WE DO</span>
          <h2 className="section-title" style={{ fontSize: '38px', fontWeight: '800', color: titleColor, marginBottom: '12px', letterSpacing: '-1px' }}>Our Services</h2>
          <p className="section-subtitle" style={{ color: textColor, fontSize: '16px' }}>Wide range of digital services to help your business grow</p>
        </div>
        <div className="cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px', marginBottom: '50px' }}>
          {displayServices.map((s) => (
            <div key={s._id} style={{ ...styles.serviceCard, backgroundColor: cardBg, border: `1px solid ${border}` }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', backgroundColor: `${s.color || '#6366f1'}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <span style={{ fontSize: '26px' }}>{s.icon || '⚡'}</span>
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: '700', color: titleColor, marginBottom: '10px' }}>{s.title}</h3>
              <p style={{ color: textColor, fontSize: '14px', lineHeight: '1.7', marginBottom: '18px' }}>{s.description}</p>
              <div style={{ height: '3px', width: '36px', borderRadius: '2px', backgroundColor: s.color || '#6366f1' }} />
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link to="/services" style={styles.btnPrimary}>View All Services</Link>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-pad" style={{ padding: '100px 80px', backgroundColor: darkMode ? '#0a0f1e' : '#f1f5f9' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={styles.tag}>OUR WORK</span>
          <h2 className="section-title" style={{ fontSize: '38px', fontWeight: '800', color: titleColor, marginBottom: '12px', letterSpacing: '-1px' }}>Recent Projects</h2>
          <p className="section-subtitle" style={{ color: textColor }}>Take a look at some of our recent work</p>
        </div>
        <div className="cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px', marginBottom: '50px' }}>
          {[
            { title: 'E-Commerce Platform', tech: 'React + Node.js', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600', tag: 'E-Commerce' },
            { title: 'Hospital Management', tech: 'Vue + Laravel', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600', tag: 'Healthcare' },
            { title: 'Real Estate App', tech: 'React Native', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600', tag: 'Real Estate' }
          ].map((p, i) => (
            <div key={i} style={{ borderRadius: '16px', overflow: 'hidden', backgroundColor: cardBg, border: `1px solid ${border}` }}>
              <img src={p.img} alt={p.title} style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: '20px', borderTop: '3px solid #6366f1' }}>
                <span style={{ backgroundColor: '#6366f1', color: 'white', padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '600' }}>{p.tag}</span>
                <h3 style={{ color: titleColor, fontWeight: '700', fontSize: '16px', margin: '8px 0 4px' }}>{p.title}</h3>
                <p style={{ color: textColor, fontSize: '13px' }}>{p.tech}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link to="/portfolio" style={{ ...styles.btnPrimary, backgroundColor: 'transparent', color: '#6366f1', border: '2px solid #6366f1', background: 'none' }}>View All Projects</Link>
        </div>
      </section>

      {/* Why Us */}
      <section className="why-section" style={{ padding: '100px 80px', backgroundColor: bg, display: 'flex', gap: '80px', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <span style={styles.tag}>WHY CLARIX</span>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: titleColor, marginBottom: '15px', letterSpacing: '-0.5px' }}>Why Businesses Choose Us</h2>
          <p style={{ color: textColor, lineHeight: '1.7', marginBottom: '25px', fontSize: '15px' }}>We combine technical expertise with creative thinking to deliver solutions that exceed expectations.</p>
          {['On-time delivery, every time', 'Transparent communication throughout', 'Post-launch support included', 'Scalable and maintainable code', 'Competitive pricing'].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span style={{ color: '#6366f1', fontWeight: '700', width: '24px', height: '24px', backgroundColor: 'rgba(99,102,241,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '14px' }}>✓</span>
              <span style={{ color: textColor, fontSize: '15px', fontWeight: '500' }}>{item}</span>
            </div>
          ))}
          <Link to="/contact" style={{ ...styles.btnPrimary, display: 'inline-block', marginTop: '30px' }}>Start a Project</Link>
        </div>
        <div className="why-img-hide" style={{ flex: 1 }}>
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" alt="Team" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad" style={{ padding: '100px 80px', backgroundColor: darkMode ? '#0a0f1e' : '#f1f5f9' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={styles.tag}>TESTIMONIALS</span>
          <h2 className="section-title" style={{ fontSize: '38px', fontWeight: '800', color: titleColor, letterSpacing: '-1px' }}>What Our Clients Say</h2>
        </div>
        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px' }}>
          {[
            { name: 'Hina Jehanzeb', role: 'CEO, TechStart', text: 'Clarix delivered our project on time with exceptional quality. Highly recommended!', avatar: 'H' },
            { name: 'Alishba Rehman', role: 'Founder, StyleHub', text: 'Amazing team! They transformed our vision into a beautiful digital product.', avatar: 'A' },
            { name: 'Wasil Khan', role: 'CTO, DataFlow', text: 'Professional, skilled, and reliable. Best agency we have worked with.', avatar: 'W' }
          ].map((t, i) => (
            <div key={i} style={{ backgroundColor: cardBg, border: `1px solid ${border}`, padding: '32px', borderRadius: '16px' }}>
              <p style={{ color: textColor, lineHeight: '1.8', marginBottom: '22px', fontSize: '15px', fontStyle: 'italic' }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#6366f1', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: '700', flexShrink: 0 }}>{t.avatar}</div>
                <div>
                  <p style={{ color: titleColor, fontWeight: '600', fontSize: '15px', marginBottom: '3px' }}>{t.name}</p>
                  <p style={{ color: '#6366f1', fontSize: '13px' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ background: 'linear-gradient(135deg, #4f46e5, #6366f1)', padding: '100px 50px', textAlign: 'center', color: 'white' }}>
        <h2 className="cta-title" style={{ fontSize: '42px', fontWeight: '800', marginBottom: '15px', letterSpacing: '-1px' }}>Ready to Start Your Project?</h2>
        <p style={{ fontSize: '18px', marginBottom: '35px', opacity: 0.85 }}>Let's build something amazing together.</p>
        <div className="cta-btns" style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/booking" style={{ backgroundColor: 'white', color: '#6366f1', padding: '13px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '700' }}>Book a Free Meeting</Link>
          <Link to="/portfolio" style={{ backgroundColor: 'transparent', color: 'white', padding: '13px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '600', border: '2px solid rgba(255,255,255,0.4)' }}>View Our Work</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const styles = {
  hero: { backgroundSize: 'cover', backgroundPosition: 'center', transition: 'background-image 1s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  heroOverlay: { backgroundColor: 'rgba(10,15,30,0.82)', width: '100%', minHeight: '85vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '60px 20px' },
  heroBadge: { backgroundColor: 'rgba(99,102,241,0.2)', color: '#a5b4fc', padding: '8px 20px', borderRadius: '50px', fontSize: '13px', fontWeight: '600', border: '1px solid rgba(99,102,241,0.3)', marginBottom: '25px' },
  heroTitle: { fontSize: '58px', fontWeight: '800', color: 'white', marginBottom: '20px', letterSpacing: '-1.5px', lineHeight: '1.1' },
  heroSubtitle: { fontSize: '18px', color: '#94a3b8', marginBottom: '40px', maxWidth: '580px', lineHeight: '1.7' },
  heroBtns: { display: 'flex', gap: '15px', marginBottom: '40px', flexWrap: 'wrap', justifyContent: 'center' },
  dots: { display: 'flex', gap: '8px', alignItems: 'center' },
  dot: { height: '8px', borderRadius: '4px', transition: 'all 0.3s ease', cursor: 'pointer' },
  btnPrimary: { background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: 'white', padding: '13px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '600' },
  btnSecondary: { backgroundColor: 'transparent', color: 'white', padding: '13px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '600', border: '2px solid rgba(255,255,255,0.3)' },
  statCard: { display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 24px', borderRadius: '12px', flex: '1', minWidth: '160px', maxWidth: '220px' },
  statIconBox: { width: '42px', height: '42px', backgroundColor: 'rgba(99,102,241,0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  statIcon: { fontSize: '18px' },
  statNumber: { fontSize: '22px', color: '#6366f1', fontWeight: '800', marginBottom: '2px' },
  statLabel: { fontSize: '12px', fontWeight: '500' },
  tag: { color: '#6366f1', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '12px', display: 'block' },
  serviceCard: { padding: '32px 28px', borderRadius: '16px' }
};

export default Home;