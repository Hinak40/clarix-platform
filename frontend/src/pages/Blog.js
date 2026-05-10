import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import { getBlogs } from '../api/index';

function Blog({ darkMode, setDarkMode }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getBlogs().then(res => setBlogs(res.data)).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const slides = [
    { url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600', title: 'Our Blog', subtitle: 'Insights, tutorials and updates' },
    { url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600', title: 'Stay Updated', subtitle: 'Latest trends in tech' },
    { url: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1600', title: 'Learn & Grow', subtitle: 'Knowledge from our experts' }
  ];

  const defaultBlogs = [
    { _id: '1', title: 'Top 10 Web Development Trends in 2026', author: 'Ahmed Khan', createdAt: '2026-04-01', category: 'Web Dev', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600', excerpt: 'Explore the latest trends shaping the future of web development.' },
    { _id: '2', title: 'Why React is Still the Best Frontend Framework', author: 'Sara Ali', createdAt: '2026-03-15', category: 'React', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600', excerpt: 'React continues to dominate the frontend development landscape.' },
    { _id: '3', title: 'How to Build a Scalable Backend with Node.js', author: 'Usman Malik', createdAt: '2026-03-01', category: 'Backend', img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600', excerpt: 'Best practices for building scalable Node.js applications.' },
    { _id: '4', title: 'UI/UX Design Principles Every Developer Should Know', author: 'Fatima Noor', createdAt: '2026-02-15', category: 'Design', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600', excerpt: 'Key design principles that will make your applications better.' },
    { _id: '5', title: 'Getting Started with Cloud Deployment', author: 'Ahmed Khan', createdAt: '2026-02-01', category: 'Cloud', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600', excerpt: 'A beginner guide to deploying on AWS, GCP, and Azure.' },
    { _id: '6', title: 'Mobile App Development with React Native', author: 'Sara Ali', createdAt: '2026-01-15', category: 'Mobile', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600', excerpt: 'Build cross-platform mobile apps with React Native.' }
  ];

  const displayBlogs = blogs.length > 0 ? blogs : defaultBlogs;

  const bg = darkMode ? '#080c14' : '#f8fafc';
  const cardBg = darkMode ? '#0f172a' : 'white';
  const titleColor = darkMode ? 'white' : '#0f172a';
  const textColor = darkMode ? '#64748b' : '#475569';
  const border = darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';

  return (
    <div style={{ backgroundColor: bg }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section className="section-pad" style={{ background: 'linear-gradient(135deg, #080c14 0%, #0f172a 50%, #1a1040 100%)', padding: '120px 80px 80px', textAlign: 'center' }}>
        <span style={styles.tag}>OUR BLOG</span>
        <h1 className="section-title" style={{ fontSize: '56px', fontWeight: '800', color: 'white', marginBottom: '20px', letterSpacing: '-1.5px' }}>Insights & Updates</h1>
        <p className="section-subtitle" style={{ fontSize: '18px', color: '#64748b' }}>Knowledge and insights from our team of experts</p>
      </section>

      <section className="slider-section" style={{ padding: '0 80px', marginTop: '-30px' }}>
        <ImageSlider images={slides} height="420px" />
      </section>

      <section className="section-pad" style={{ padding: '100px 80px', backgroundColor: bg }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={styles.tag}>LATEST POSTS</span>
          <h2 className="section-title" style={{ fontSize: '38px', fontWeight: '800', color: titleColor }}>Recent Articles</h2>
        </div>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px' }}>
            <p style={{ color: '#64748b' }}>Loading articles...</p>
          </div>
        ) : (
          <div className="cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px' }}>
            {displayBlogs.map((blog) => (
              <div key={blog._id} style={{ backgroundColor: cardBg, borderRadius: '16px', overflow: 'hidden', border: `1px solid ${border}` }}>
                <div style={{ position: 'relative' }}>
                  <img src={blog.img || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600'} alt={blog.title} style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} />
                  <span style={{ position: 'absolute', top: '15px', left: '15px', backgroundColor: '#6366f1', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: '600' }}>{blog.category || 'Tech'}</span>
                </div>
                <div style={{ padding: '22px' }}>
                  <div style={{ display: 'flex', gap: '15px', marginBottom: '10px' }}>
                    <span style={{ color: textColor, fontSize: '12px' }}>✍️ {blog.author}</span>
                    <span style={{ color: textColor, fontSize: '12px' }}>📅 {new Date(blog.createdAt).toLocaleDateString()}</span>
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: titleColor, marginBottom: '8px', lineHeight: '1.4' }}>{blog.title}</h3>
                  <p style={{ color: textColor, fontSize: '13px', lineHeight: '1.6', marginBottom: '16px' }}>{blog.excerpt || 'Click to read the full article...'}</p>
                  <Link to={`/blog/${blog._id}`} style={{ color: '#6366f1', textDecoration: 'none', fontWeight: '600', fontSize: '13px' }}>Read Article →</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

const styles = {
  tag: { color: '#6366f1', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '15px', display: 'block' }
};

export default Blog;