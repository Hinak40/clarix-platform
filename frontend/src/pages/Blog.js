import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import { getBlogs } from '../api/index';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getBlogs()
      .then(res => setBlogs(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const slides = [
    { url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600', title: 'Our Blog', subtitle: 'Insights, tutorials and updates from our team' },
    { url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600', title: 'Stay Updated', subtitle: 'Latest trends in tech and development' },
    { url: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1600', title: 'Learn & Grow', subtitle: 'Knowledge shared by our experts' }
  ];

  const defaultBlogs = [
    { _id: '1', title: 'Top 10 Web Development Trends in 2026', author: 'Ahmed Khan', createdAt: '2026-04-01', category: 'Web Dev', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600', excerpt: 'Explore the latest trends shaping the future of web development in 2026 and beyond.' },
    { _id: '2', title: 'Why React is Still the Best Frontend Framework', author: 'Sara Ali', createdAt: '2026-03-15', category: 'React', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600', excerpt: 'A deep dive into why React continues to dominate the frontend development landscape.' },
    { _id: '3', title: 'How to Build a Scalable Backend with Node.js', author: 'Usman Malik', createdAt: '2026-03-01', category: 'Backend', img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600', excerpt: 'Learn the best practices for building scalable and maintainable Node.js applications.' },
    { _id: '4', title: 'UI/UX Design Principles Every Developer Should Know', author: 'Fatima Noor', createdAt: '2026-02-15', category: 'Design', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600', excerpt: 'Key design principles that will make your applications more user-friendly and beautiful.' },
    { _id: '5', title: 'Getting Started with Cloud Deployment', author: 'Ahmed Khan', createdAt: '2026-02-01', category: 'Cloud', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600', excerpt: 'A beginner guide to deploying your applications on AWS, GCP, and Azure.' },
    { _id: '6', title: 'Mobile App Development with React Native', author: 'Sara Ali', createdAt: '2026-01-15', category: 'Mobile', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600', excerpt: 'Build cross-platform mobile apps with React Native — from setup to deployment.' }
  ];

  const displayBlogs = blogs.length > 0 ? blogs : defaultBlogs;

  return (
    <div>
      <Navbar />
      <section style={styles.hero}>
        <span style={styles.tag}>OUR BLOG</span>
        <h1 style={styles.heroTitle}>Insights & Updates</h1>
        <p style={styles.heroSubtitle}>Knowledge and insights from our team of experts</p>
      </section>
      <section style={styles.sliderSection}>
        <ImageSlider images={slides} height="420px" />
      </section>
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.tag}>LATEST POSTS</span>
          <h2 style={styles.sectionTitle}>Recent Articles</h2>
        </div>
        {loading ? (
          <div style={styles.loadingBox}>
            <div style={styles.spinner} />
            <p style={styles.loadingText}>Loading articles...</p>
          </div>
        ) : (
          <div style={styles.grid}>
            {displayBlogs.map((blog) => (
              <div key={blog._id} style={styles.card}>
                <div style={styles.imgBox}>
                  <img src={blog.img || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600'} alt={blog.title} style={styles.img} />
                  <span style={styles.categoryTag}>{blog.category || 'Tech'}</span>
                </div>
                <div style={styles.cardBody}>
                  <div style={styles.meta}>
                    <span style={styles.author}>✍️ {blog.author}</span>
                    <span style={styles.date}>📅 {new Date(blog.createdAt).toLocaleDateString()}</span>
                  </div>
                  <h3 style={styles.cardTitle}>{blog.title}</h3>
                  <p style={styles.excerpt}>{blog.excerpt || 'Click to read the full article...'}</p>
                  <Link to={`/blog/${blog._id}`} style={styles.readMore}>Read Article →</Link>
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
  hero: { background: 'linear-gradient(135deg, #080c14 0%, #0f172a 50%, #1a1040 100%)', padding: '120px 80px 80px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' },
  tag: { color: '#6366f1', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '15px', display: 'block' },
  heroTitle: { fontSize: '56px', fontWeight: '800', color: 'white', marginBottom: '20px', letterSpacing: '-1.5px' },
  heroSubtitle: { fontSize: '18px', color: '#64748b' },
  sliderSection: { padding: '0 80px', marginTop: '-30px' },
  section: { padding: '100px 80px', backgroundColor: '#080c14' },
  sectionHeader: { textAlign: 'center', marginBottom: '60px' },
  sectionTitle: { fontSize: '38px', fontWeight: '800', color: 'white', letterSpacing: '-1px' },
  loadingBox: { textAlign: 'center', padding: '80px' },
  spinner: { width: '40px', height: '40px', border: '3px solid #1e293b', borderTop: '3px solid #6366f1', borderRadius: '50%', margin: '0 auto 20px', animation: 'spin 1s linear infinite' },
  loadingText: { color: '#64748b' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' },
  card: { backgroundColor: '#0f172a', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' },
  imgBox: { position: 'relative' },
  img: { width: '100%', height: '200px', objectFit: 'cover', display: 'block' },
  categoryTag: { position: 'absolute', top: '15px', left: '15px', backgroundColor: '#6366f1', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: '600', letterSpacing: '1px' },
  cardBody: { padding: '25px' },
  meta: { display: 'flex', gap: '15px', marginBottom: '12px' },
  author: { color: '#64748b', fontSize: '12px' },
  date: { color: '#64748b', fontSize: '12px' },
  cardTitle: { fontSize: '17px', fontWeight: '700', color: 'white', marginBottom: '10px', lineHeight: '1.4' },
  excerpt: { color: '#64748b', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' },
  readMore: { color: '#6366f1', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }
};

export default Blog;