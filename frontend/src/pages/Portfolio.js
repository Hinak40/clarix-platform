import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import { getPortfolio } from '../api/index';

function Portfolio() {
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
    { _id: 1, title: 'E-Commerce Platform', description: 'Full-stack shopping platform with payment integration and real-time inventory.', techStack: ['React', 'Node.js', 'MongoDB'], img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600', category: 'Web' },
    { _id: 2, title: 'Hospital Management', description: 'Complete hospital system for patient records and appointment scheduling.', techStack: ['Vue.js', 'Laravel', 'MySQL'], img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600', category: 'Web' },
    { _id: 3, title: 'Real Estate App', description: 'Property listing and management application with map integration.', techStack: ['React Native', 'Firebase'], img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600', category: 'Mobile' },
    { _id: 4, title: 'Food Delivery App', description: 'On-demand food delivery platform with real-time order tracking.', techStack: ['React', 'Node.js', 'Socket.io'], img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600', category: 'Mobile' },
    { _id: 5, title: 'Learning Management', description: 'Online education platform with course management and live classes.', techStack: ['Next.js', 'PostgreSQL'], img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600', category: 'Web' },
    { _id: 6, title: 'CRM System', description: 'Customer relationship management tool for sales teams and analytics.', techStack: ['React', 'Django', 'PostgreSQL'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600', category: 'Web' }
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;
  const categories = ['All', 'Web', 'Mobile'];
  const filtered = filter === 'All' ? displayProjects : displayProjects.filter(p => p.category === filter);

  return (
    <div>
      <Navbar />
      <section style={styles.hero}>
        <span style={styles.tag}>OUR WORK</span>
        <h1 style={styles.heroTitle}>Our Portfolio</h1>
        <p style={styles.heroSubtitle}>Projects we have built for clients worldwide</p>
      </section>
      <section style={styles.sliderSection}>
        <ImageSlider images={slides} height="420px" />
      </section>
      <section style={styles.section}>
        <div style={styles.filters}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} style={{ ...styles.filterBtn, backgroundColor: filter === cat ? '#6366f1' : '#0f172a', color: filter === cat ? 'white' : '#64748b', border: filter === cat ? 'none' : '1px solid rgba(255,255,255,0.08)' }}>
              {cat}
            </button>
          ))}
        </div>
        <div style={styles.grid}>
          {filtered.map((p) => (
            <div key={p._id} style={styles.card}>
              <div style={styles.imgBox}>
                <img src={p.img || `https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600`} alt={p.title} style={styles.img} />
                <div style={styles.imgOverlay}>
                  <span style={styles.viewBtn}>View Project →</span>
                </div>
              </div>
              <div style={styles.cardBody}>
                <h3 style={styles.cardTitle}>{p.title}</h3>
                <p style={styles.cardDesc}>{p.description}</p>
                <div style={styles.tags}>
                  {(p.techStack || []).map((tech, i) => (
                    <span key={i} style={styles.techTag}>{tech}</span>
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
  hero: { background: 'linear-gradient(135deg, #080c14 0%, #0f172a 50%, #1a1040 100%)', padding: '120px 80px 80px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' },
  tag: { color: '#6366f1', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '15px', display: 'block' },
  heroTitle: { fontSize: '56px', fontWeight: '800', color: 'white', marginBottom: '20px', letterSpacing: '-1.5px' },
  heroSubtitle: { fontSize: '18px', color: '#64748b' },
  sliderSection: { padding: '0 80px', marginTop: '-30px' },
  section: { padding: '100px 80px', backgroundColor: '#080c14' },
  filters: { display: 'flex', gap: '12px', marginBottom: '50px', justifyContent: 'center' },
  filterBtn: { padding: '10px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' },
  card: { backgroundColor: '#0f172a', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' },
  imgBox: { position: 'relative', overflow: 'hidden' },
  img: { width: '100%', height: '220px', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' },
  imgOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(99,102,241,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s ease' },
  viewBtn: { color: 'white', fontWeight: '700', fontSize: '15px' },
  cardBody: { padding: '25px' },
  cardTitle: { fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: '8px' },
  cardDesc: { color: '#64748b', fontSize: '14px', lineHeight: '1.6', marginBottom: '15px' },
  tags: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
  techTag: { backgroundColor: 'rgba(99,102,241,0.15)', color: '#818cf8', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '500', border: '1px solid rgba(99,102,241,0.2)' }
};

export default Portfolio;