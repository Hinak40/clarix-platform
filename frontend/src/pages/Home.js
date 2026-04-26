import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getServices } from '../api/index';

function Home({ darkMode, setDarkMode }) {
  const [services, setServices] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const slides = [
    { url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600', title: 'We Build Web Apps' },
    { url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600', title: 'We Design Experiences' },
    { url: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1600', title: 'We Deliver Results' }
  ];

  useEffect(() => {
    getServices().then(res => setServices(res.data)).catch(() => {});
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 3000);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
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

      {/* Hero Slider */}
      <section style={{ ...styles.hero, backgroundImage: `url(${slides[currentSlide].url})`, minHeight: isMobile ? '60vh' : '85vh' }}>
        <div style={{ ...styles.heroOverlay, minHeight: isMobile ? '60vh' : '85vh', padding: isMobile ? '40px 20px' : '60px 20px' }}>
          <span style={styles.heroBadge}>⚡ Top-Rated Software Agency</span>
          <h1 style={{ ...styles.heroTitle, fontSize: isMobile ? '32px' : '58px' }}>{slides[currentSlide].title}</h1>
          <p style={{ ...styles.heroSubtitle, fontSize: isMobile ? '15px' : '18px' }}>Clarix delivers cutting-edge web & mobile applications for businesses worldwide.</p>
          <div style={{ ...styles.heroBtns, flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>
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
      <section style={{ ...styles.stats, backgroundColor: statsBg, flexDirection: isMobile ? 'column' : 'row', borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}` }}>
        {[
          { number: '50+', label: 'Projects Completed', icon: '🏆' },
          { number: '30+', label: 'Happy Clients', icon: '🤝' },
          { number: '5+', label: 'Years Experience', icon: '📅' },
          { number: '10+', label: 'Team Members', icon: '👥' }
        ].map((stat, i) => (
          <div key={i} style={{ ...styles.statCard, backgroundColor: cardBg, border: `1px solid ${border}`, maxWidth: isMobile ? '100%' : '220px' }}>
            <div style={styles.statIconBox}>
              <span style={styles.statIcon}>{stat.icon}</span>
            </div>
            <div>
              <h3 style={styles.statNumber}>{stat.number}</h3>
              <p style={{ ...styles.statLabel, color: textColor }}>{stat.label}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Services */}
      <section style={{ ...styles.section, backgroundColor: bg, padding: isMobile ? '60px 20px' : '100px 80px' }}>
        <div style={styles.sectionHeader}>
          <span style={styles.tag}>WHAT WE DO</span>
          <h2 style={{ ...styles.sectionTitle, color: titleColor, fontSize: isMobile ? '28px' : '38px' }}>Our Services</h2>
          <p style={{ ...styles.sectionSubtitle, color: textColor }}>Wide range of digital services to help your business grow</p>
        </div>
        <div style={{ ...styles.servicesGrid, gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
          {displayServices.map((s) => (
            <div key={s._id} style={{ ...styles.serviceCard, backgroundColor: cardBg, border: `1px solid ${border}` }}>
              <div style={{ ...styles.serviceIconBox, backgroundColor: `${s.color || '#6366f1'}15` }}>
                <span style={styles.serviceIcon}>{s.icon || '⚡'}</span>
              </div>
              <h3 style={{ ...styles.serviceTitle, color: titleColor }}>{s.title}</h3>
              <p style={{ ...styles.serviceDesc, color: textColor }}>{s.description}</p>
              <div style={{ ...styles.serviceLine, backgroundColor: s.color || '#6366f1' }} />
            </div>
          ))}
        </div>
        <div style={styles.center}>
          <Link to="/services" style={styles.btnPrimary}>View All Services</Link>
        </div>
      </section>

      {/* Portfolio */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 80px', backgroundColor: darkMode ? '#0a0f1e' : '#f1f5f9' }}>
        <div style={styles.sectionHeader}>
          <span style={styles.tag}>OUR WORK</span>
          <h2 style={{ ...styles.sectionTitle, color: titleColor, fontSize: isMobile ? '28px' : '38px' }}>Recent Projects</h2>
          <p style={{ ...styles.sectionSubtitle, color: textColor }}>Take a look at some of our recent work</p>
        </div>
        <div style={{ ...styles.portfolioGrid, gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
          {[
            { title: 'E-Commerce Platform', tech: 'React + Node.js', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600', tag: 'E-Commerce' },
            { title: 'Hospital Management', tech: 'Vue + Laravel', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600', tag: 'Healthcare' },
            { title: 'Real Estate App', tech: 'React Native', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600', tag: 'Real Estate' }
          ].map((p, i) => (
            <div key={i} style={styles.portfolioCard}>
              <img src={p.img} alt={p.title} style={styles.portfolioImg} />
              <div style={{ ...styles.portfolioOverlay, backgroundColor: darkMode ? 'rgba(15,23,42,0.92)' : 'rgba(255,255,255,0.95)' }}>
                <span style={styles.portfolioTag}>{p.tag}</span>
                <h3 style={{ ...styles.portfolioTitle, color: titleColor }}>{p.title}</h3>
                <p style={{ color: textColor, fontSize: '13px' }}>{p.tech}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={styles.center}>
          <Link to="/portfolio" style={styles.btnOutline}>View All Projects</Link>
        </div>
      </section>

      {/* Why Us */}
      <section style={{ ...styles.whySection, backgroundColor: bg, padding: isMobile ? '60px 20px' : '100px 80px', flexDirection: isMobile ? 'column' : 'row' }}>
        <div style={styles.whyLeft}>
          <span style={styles.tag}>WHY CLARIX</span>
          <h2 style={{ ...styles.whyTitle, color: titleColor, fontSize: isMobile ? '26px' : '36px' }}>Why Businesses Choose Us</h2>
          <p style={{ ...styles.whyDesc, color: textColor }}>We combine technical expertise with creative thinking to deliver solutions that exceed expectations.</p>
          {['On-time delivery, every time', 'Transparent communication throughout', 'Post-launch support included', 'Scalable and maintainable code', 'Competitive pricing'].map((item, i) => (
            <div key={i} style={styles.whyItem}>
              <span style={styles.checkIcon}>✓</span>
              <span style={{ ...styles.whyItemText, color: textColor }}>{item}</span>
            </div>
          ))}
          <Link to="/contact" style={{ ...styles.btnPrimary, display: 'inline-block', marginTop: '30px' }}>Start a Project</Link>
        </div>
        {!isMobile && (
          <div style={styles.whyRight}>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" alt="Team" style={styles.whyImg} />
          </div>
        )}
      </section>

      {/* Testimonials */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 80px', backgroundColor: darkMode ? '#0a0f1e' : '#f1f5f9' }}>
        <div style={styles.sectionHeader}>
          <span style={styles.tag}>TESTIMONIALS</span>
          <h2 style={{ ...styles.sectionTitle, color: titleColor, fontSize: isMobile ? '28px' : '38px' }}>What Our Clients Say</h2>
        </div>
        <div style={{ ...styles.testimonialsGrid, gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
          {[
            { name: 'Hina Jehanzeb', role: 'CEO, TechStart', text: 'Clarix delivered our project on time with exceptional quality. Highly recommended!', avatar: 'H' },
            { name: 'Alishba Rehman', role: 'Founder, StyleHub', text: 'Amazing team! They transformed our vision into a beautiful digital product.', avatar: 'A' },
            { name: 'Wasil Khan', role: 'CTO, DataFlow', text: 'Professional, skilled, and reliable. Best agency we have worked with.', avatar: 'W' }
          ].map((t, i) => (
            <div key={i} style={{ ...styles.testimonialCard, backgroundColor: cardBg, border: `1px solid ${border}` }}>
              <p style={{ ...styles.testimonialText, color: textColor }}>"{t.text}"</p>
              <div style={styles.testimonialAuthor}>
                <div style={styles.testimonialAvatar}>{t.avatar}</div>
                <div>
                  <p style={{ ...styles.testimonialName, color: titleColor }}>{t.name}</p>
                  <p style={styles.testimonialRole}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ ...styles.cta, padding: isMobile ? '60px 20px' : '100px 50px' }}>
        <h2 style={{ ...styles.ctaTitle, fontSize: isMobile ? '28px' : '42px' }}>Ready to Start Your Project?</h2>
        <p style={styles.ctaSubtitle}>Let's build something amazing together.</p>
        <div style={{ ...styles.heroBtns, flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>
          <Link to="/booking" style={styles.btnWhite}>Book a Free Meeting</Link>
          <Link to="/portfolio" style={styles.btnOutlineWhite}>View Our Work</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const styles = {
  hero: { backgroundSize: 'cover', backgroundPosition: 'center', transition: 'background-image 1s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  heroOverlay: { backgroundColor: 'rgba(10,15,30,0.82)', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' },
  heroBadge: { backgroundColor: 'rgba(99,102,241,0.2)', color: '#a5b4fc', padding: '8px 20px', borderRadius: '50px', fontSize: '13px', fontWeight: '600', border: '1px solid rgba(99,102,241,0.3)', marginBottom: '25px' },
  heroTitle: { fontWeight: '800', color: 'white', marginBottom: '20px', letterSpacing: '-1.5px', lineHeight: '1.1' },
  heroSubtitle: { color: '#94a3b8', marginBottom: '40px', maxWidth: '580px', lineHeight: '1.7' },
  heroBtns: { display: 'flex', gap: '15px', marginBottom: '40px', flexWrap: 'wrap', justifyContent: 'center' },
  dots: { display: 'flex', gap: '8px', alignItems: 'center' },
  dot: { height: '8px', borderRadius: '4px', transition: 'all 0.3s ease', cursor: 'pointer' },
  btnPrimary: { background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: 'white', padding: '13px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '600', boxShadow: '0 4px 15px rgba(99,102,241,0.35)' },
  btnSecondary: { backgroundColor: 'transparent', color: 'white', padding: '13px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '600', border: '2px solid rgba(255,255,255,0.3)' },
  btnOutline: { backgroundColor: 'transparent', color: '#6366f1', padding: '13px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '600', border: '2px solid #6366f1' },
  btnWhite: { backgroundColor: 'white', color: '#6366f1', padding: '13px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '700' },
  btnOutlineWhite: { backgroundColor: 'transparent', color: 'white', padding: '13px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '600', border: '2px solid rgba(255,255,255,0.4)' },
  stats: { display: 'flex', justifyContent: 'center', gap: '15px', padding: '30px 40px', flexWrap: 'wrap' },
  statCard: { display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 24px', borderRadius: '12px', flex: '1', minWidth: '160px' },
  statIconBox: { width: '42px', height: '42px', backgroundColor: 'rgba(99,102,241,0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  statIcon: { fontSize: '18px' },
  statNumber: { fontSize: '22px', color: '#6366f1', fontWeight: '800', marginBottom: '2px' },
  statLabel: { fontSize: '12px', fontWeight: '500' },
  section: {},
  sectionHeader: { textAlign: 'center', marginBottom: '55px' },
  tag: { color: '#6366f1', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '12px', display: 'block' },
  sectionTitle: { fontWeight: '800', marginBottom: '12px', letterSpacing: '-1px' },
  sectionSubtitle: { fontSize: '16px', maxWidth: '500px', margin: '0 auto' },
  servicesGrid: { display: 'grid', gap: '22px', marginBottom: '50px' },
  serviceCard: { padding: '32px 28px', borderRadius: '16px' },
  serviceIconBox: { width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' },
  serviceIcon: { fontSize: '26px' },
  serviceTitle: { fontSize: '17px', fontWeight: '700', marginBottom: '10px' },
  serviceDesc: { fontSize: '14px', lineHeight: '1.7', marginBottom: '18px' },
  serviceLine: { height: '3px', width: '36px', borderRadius: '2px' },
  portfolioGrid: { display: 'grid', gap: '22px', marginBottom: '50px' },
  portfolioCard: { borderRadius: '16px', overflow: 'hidden', position: 'relative' },
  portfolioImg: { width: '100%', height: '220px', objectFit: 'cover', display: 'block' },
  portfolioOverlay: { padding: '20px', borderTop: '3px solid #6366f1' },
  portfolioTag: { backgroundColor: '#6366f1', color: 'white', padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '600' },
  portfolioTitle: { fontWeight: '700', fontSize: '16px', margin: '8px 0 4px' },
  whySection: { display: 'flex', gap: '80px', alignItems: 'center' },
  whyLeft: { flex: 1 },
  whyRight: { flex: 1 },
  whyTitle: { fontWeight: '800', marginBottom: '15px', letterSpacing: '-0.5px' },
  whyDesc: { lineHeight: '1.7', marginBottom: '25px', fontSize: '15px' },
  whyItem: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' },
  checkIcon: { color: '#6366f1', fontWeight: '700', fontSize: '16px', width: '24px', height: '24px', backgroundColor: 'rgba(99,102,241,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  whyItemText: { fontSize: '15px', fontWeight: '500' },
  whyImg: { width: '100%', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' },
  testimonialsGrid: { display: 'grid', gap: '22px' },
  testimonialCard: { padding: '32px', borderRadius: '16px' },
  testimonialText: { lineHeight: '1.8', marginBottom: '22px', fontSize: '15px', fontStyle: 'italic' },
  testimonialAuthor: { display: 'flex', alignItems: 'center', gap: '12px' },
  testimonialAvatar: { width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#6366f1', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: '700', flexShrink: 0 },
  testimonialName: { fontWeight: '600', fontSize: '15px', marginBottom: '3px' },
  testimonialRole: { color: '#6366f1', fontSize: '13px' },
  cta: { background: 'linear-gradient(135deg, #4f46e5, #6366f1)', textAlign: 'center', color: 'white' },
  ctaTitle: { fontWeight: '800', marginBottom: '15px', letterSpacing: '-1px' },
  ctaSubtitle: { fontSize: '18px', marginBottom: '35px', opacity: 0.85 },
  center: { textAlign: 'center' }
};

export default Home;