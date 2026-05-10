import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import { getPortfolio } from '../api/index';

function Portfolio({ darkMode, setDarkMode }) {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    getPortfolio().then(res => setProjects(res.data)).catch(() => {});
  }, []);

  const slides = [
    { url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1600', title: 'Our Portfolio', subtitle: 'Projects we are proud of' },
    { url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1600', title: 'Real Solutions', subtitle: 'Built for real businesses' },
    { url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1600', title: 'Quality Work', subtitle: 'Every pixel matters' }
  ];

  const defaultProjects = [
    { _id: 1, title: 'E-Commerce Platform', description: 'Full-stack shopping platform with payment integration.', techStack: ['React', 'Node.js', 'MongoDB'], img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600', category: 'Web' },
    { _id: 2, title: 'Hospital Management', description: 'Complete hospital system for patient records.', techStack: ['Vue.js', 'Laravel', 'MySQL'], img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600', category: 'Web' },
    { _id: 3, title: 'Real Estate App', description: 'Property listing and management application.', techStack: ['React Native', 'Firebase'], img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600', category: 'Mobile' },
    { _id: 4, title: 'Food Delivery App', description: 'On-demand food delivery with real-time tracking.', techStack: ['React', 'Node.js', 'Socket.io'], img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600', category: 'Mobile' },
    { _id: 5, title: 'Learning Management', description: 'Online education platform with course management.', techStack: ['Next.js', 'PostgreSQL'], img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600', category: 'Web' },
    { _id: 6, title: 'CRM System', description: 'Customer relationship management for sales teams.', techStack: ['React', 'Django', 'PostgreSQL'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600', category: 'Web' }
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;
  const categories = ['All', 'Web', 'Mobile'];
  const filtered = filter === 'All' ? displayProjects : displayProjects.filter(p => p.category === filter);

  const bg = darkMode ? '#080c14' : '#f8fafc';
  const cardBg = darkMode ? '#0f172a' : 'white';
  const titleColor = darkMode ? 'white' : '#0f172a';
  const textColor = darkMode ? '#64748b' : '#475569';
  const border = darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';

  return (
    <div style={{ backgroundColor: bg }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section className="section-pad" style={{ background: 'linear-gradient(135deg, #080c14 0%, #0f172a 50%, #1a1040 100%)', padding: '120px 80px 80px', textAlign: 'center' }}>
        <span style={styles.tag}>OUR WORK</span>
        <h1 className="section-title" style={{ fontSize: '56px', fontWeight: '800', color: 'white', marginBottom: '20px', letterSpacing: '-1.5px' }}>Our Portfolio</h1>
        <p className="section-subtitle" style={{ fontSize: '18px', color: '#64748b' }}>Projects we have built for clients worldwide</p>
      </section>

      <section className="slider-section" style={{ padding: '0 80px', marginTop: '-30px' }}>
        <ImageSlider images={slides} height="420px" />
      </section>

      <section className="section-pad" style={{ padding: '100px 80px', backgroundColor: bg }}>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} style={{ padding: '10px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', backgroundColor: filter === cat ? '#6366f1' : cardBg, color: filter === cat ? 'white' : textColor, border: filter === cat ? 'none' : `1px solid ${border}` }}>
              {cat}
            </button>
          ))}
        </div>
        <div className="cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px' }}>
          {filtered.map((p) => (
            <div key={p._id} style={{ backgroundColor: cardBg, borderRadius: '16px', overflow: 'hidden', border: `1px solid ${border}` }}>
              <img src={p.img || 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600'} alt={p.title} style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: '22px' }}>
                <h3 style={{ fontSize: '17px', fontWeight: '700', color: titleColor, marginBottom: '8px' }}>{p.title}</h3>
                <p style={{ color: textColor, fontSize: '13px', lineHeight: '1.6', marginBottom: '14px' }}>{p.description}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {(p.techStack || []).map((tech, i) => (
                    <span key={i} style={{ backgroundColor: 'rgba(99,102,241,0.15)', color: '#818cf8', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '500' }}>{tech}</span>
                  ))}
                </div>
              </div>
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

export default Portfolio;