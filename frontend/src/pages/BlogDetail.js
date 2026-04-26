import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getBlog } from '../api/index';

function BlogDetail({ darkMode, setDarkMode }) {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const defaultBlogs = {
    '1': { title: 'Top 10 Web Development Trends in 2026', author: 'Ahmed Khan', createdAt: '2026-04-01', category: 'Web Dev', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200', content: `Web development is constantly evolving. In 2026, we are seeing major shifts in how developers build and deploy applications.\n\nKey trends include:\n\n1. AI-assisted coding with tools like GitHub Copilot\n2. The rise of edge computing and serverless architectures\n3. WebAssembly for high-performance browser applications\n4. The continued dominance of React and Next.js\n5. Progressive Web Apps replacing native mobile apps` },
    '2': { title: 'Why React is Still the Best Frontend Framework', author: 'Sara Ali', createdAt: '2026-03-15', category: 'React', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200', content: `Despite the emergence of many new frameworks, React continues to dominate the frontend development landscape.\n\nWhy React remains on top:\n\n- Huge ecosystem with thousands of libraries\n- Strong community and corporate backing from Meta\n- Flexible and unopinionated architecture\n- Excellent performance with virtual DOM\n- React Native for mobile development` },
    '3': { title: 'How to Build a Scalable Backend with Node.js', author: 'Usman Malik', createdAt: '2026-03-01', category: 'Backend', img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200', content: `Building a scalable backend requires careful planning and the right architectural decisions.\n\nKey considerations:\n\n- Proper database indexing and query optimization\n- Caching strategies with Redis\n- Load balancing with Nginx\n- Microservices architecture\n- Containerization with Docker` },
    '4': { title: 'UI/UX Design Principles Every Developer Should Know', author: 'Fatima Noor', createdAt: '2026-02-15', category: 'Design', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200', content: `Good design is not just about making things look pretty.\n\nEssential design principles:\n\n- Visual hierarchy guides user attention\n- Consistent spacing and alignment\n- Color psychology affects user behavior\n- Typography impacts readability\n- Responsive design for all screen sizes` },
    '5': { title: 'Getting Started with Cloud Deployment', author: 'Ahmed Khan', createdAt: '2026-02-01', category: 'Cloud', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200', content: `Cloud deployment has become essential for modern applications.\n\nGetting started steps:\n\n- Choose the right cloud provider\n- Understand regions and availability zones\n- Set up proper IAM roles and permissions\n- Use managed services to reduce overhead\n- Implement CI/CD pipelines` },
    '6': { title: 'Mobile App Development with React Native', author: 'Sara Ali', createdAt: '2026-01-15', category: 'Mobile', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200', content: `React Native allows you to build cross-platform mobile apps using JavaScript and React.\n\nWhy choose React Native:\n\n- Single codebase for iOS and Android\n- Near-native performance\n- Large community and ecosystem\n- Hot reloading for fast development\n- Expo for quick project setup` }
  };

  useEffect(() => {
    setLoading(true);
    getBlog(id)
      .then(res => { if (res.data) setBlog(res.data); else setBlog(defaultBlogs[id] || null); })
      .catch(() => { setBlog(defaultBlogs[id] || null); })
      .finally(() => setLoading(false));
  }, [id]);

  const bg = darkMode ? '#080c14' : '#f8fafc';
  const cardBg = darkMode ? '#0f172a' : 'white';
  const titleColor = darkMode ? 'white' : '#0f172a';
  const textColor = darkMode ? '#94a3b8' : '#334155';
  const border = darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';

  if (loading) return (
    <div style={{ backgroundColor: bg, minHeight: '100vh' }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#64748b' }}>Loading article...</p>
      </div>
      <Footer />
    </div>
  );

  if (!blog) return (
    <div style={{ backgroundColor: bg, minHeight: '100vh' }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: titleColor, fontSize: '24px', marginBottom: '20px' }}>Article not found</h2>
        <Link to="/blog" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: '600' }}>← Back to Blog</Link>
      </div>
      <Footer />
    </div>
  );

  return (
    <div style={{ backgroundColor: bg }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div style={{ height: isMobile ? '280px' : '450px', backgroundImage: `url(${blog.img || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200'})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'flex-end' }}>
        <div style={{ background: 'linear-gradient(to top, rgba(8,12,20,1), rgba(8,12,20,0.2))', width: '100%', padding: isMobile ? '30px 20px' : '60px 80px' }}>
          <span style={{ backgroundColor: '#6366f1', color: 'white', padding: '5px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>{blog.category || 'Tech'}</span>
          <h1 style={{ fontSize: isMobile ? '24px' : '42px', fontWeight: '800', color: 'white', marginTop: '15px', marginBottom: '15px', lineHeight: '1.2', maxWidth: '800px' }}>{blog.title}</h1>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <span style={{ color: '#94a3b8', fontSize: '14px' }}>✍️ {blog.author}</span>
            <span style={{ color: '#94a3b8', fontSize: '14px' }}>📅 {new Date(blog.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <section style={{ padding: isMobile ? '40px 20px' : '60px 80px', backgroundColor: bg }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link to="/blog" style={{ color: '#6366f1', textDecoration: 'none', fontSize: '14px', fontWeight: '600', display: 'block', marginBottom: '30px' }}>← Back to Blog</Link>
          <div style={{ backgroundColor: cardBg, padding: isMobile ? '25px 20px' : '50px', borderRadius: '20px', border: `1px solid ${border}` }}>
            {blog.content.split('\n').map((line, i) => (
              line.trim() === ''
                ? <br key={i} />
                : <p key={i} style={{ color: textColor, lineHeight: '2', fontSize: isMobile ? '14px' : '16px', marginBottom: '8px' }}>{line}</p>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BlogDetail;