import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getBlog } from '../api/index';

function BlogDetail({ darkMode }) {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const defaultBlogs = {
    '1': {
      title: 'Top 10 Web Development Trends in 2026',
      author: 'Ahmed Khan',
      createdAt: '2026-04-01',
      category: 'Web Dev',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200',
      content: `Web development is constantly evolving. In 2026, we are seeing major shifts in how developers build and deploy applications. From AI-powered development tools to edge computing, the landscape has never been more exciting.

Key trends include:

1. AI-assisted coding with tools like GitHub Copilot and Claude
2. The rise of edge computing and serverless architectures  
3. WebAssembly for high-performance browser applications
4. The continued dominance of React and Next.js in the frontend space
5. Progressive Web Apps replacing native mobile apps
6. Real-time collaboration features becoming standard
7. Micro-frontends for large scale applications
8. API-first development approach
9. Green coding and sustainable web practices
10. Enhanced web security with zero-trust architecture`
    },
    '2': {
      title: 'Why React is Still the Best Frontend Framework',
      author: 'Sara Ali',
      createdAt: '2026-03-15',
      category: 'React',
      img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200',
      content: `Despite the emergence of many new frameworks, React continues to dominate the frontend development landscape. Its component-based architecture, massive ecosystem, and strong community support make it the go-to choice for building modern web applications.

The introduction of React Server Components and concurrent features have further cemented its position as the industry standard. Here is why React remains on top:

- Huge ecosystem with thousands of libraries
- Strong community and corporate backing from Meta
- Flexible and unopinionated architecture
- Excellent performance with virtual DOM
- React Native for mobile development
- Constant innovation and updates`
    },
    '3': {
      title: 'How to Build a Scalable Backend with Node.js',
      author: 'Usman Malik',
      createdAt: '2026-03-01',
      category: 'Backend',
      img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200',
      content: `Building a scalable backend requires careful planning and the right architectural decisions. Node.js, with its non-blocking I/O model, is an excellent choice for building high-performance APIs.

Key considerations for scalability:

- Proper database indexing and query optimization
- Caching strategies with Redis
- Load balancing with Nginx
- Microservices architecture for large applications
- Message queues with RabbitMQ or Kafka
- Containerization with Docker and Kubernetes
- Monitoring and logging best practices
- Rate limiting and security measures`
    },
    '4': {
      title: 'UI/UX Design Principles Every Developer Should Know',
      author: 'Fatima Noor',
      createdAt: '2026-02-15',
      category: 'Design',
      img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200',
      content: `Good design is not just about making things look pretty — it is about making them work well for users. Every developer should understand basic UI/UX principles to build better products.

Essential design principles:

- Visual hierarchy guides user attention
- Consistent spacing and alignment create order
- Color psychology affects user behavior
- Typography impacts readability and mood
- Responsive design for all screen sizes
- Accessibility for all users including disabled
- Fast loading times improve user experience
- Clear calls to action drive conversions`
    },
    '5': {
      title: 'Getting Started with Cloud Deployment',
      author: 'Ahmed Khan',
      createdAt: '2026-02-01',
      category: 'Cloud',
      img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200',
      content: `Cloud deployment has become essential for modern applications. Whether you choose AWS, Google Cloud, or Azure, understanding the basics will help you deploy faster and more reliably.

Getting started steps:

- Choose the right cloud provider for your needs
- Understand regions and availability zones
- Set up proper IAM roles and permissions
- Use managed services to reduce operational overhead
- Implement CI/CD pipelines for automated deployment
- Monitor your applications with cloud-native tools
- Set up auto-scaling for traffic spikes
- Implement proper backup and disaster recovery`
    },
    '6': {
      title: 'Mobile App Development with React Native',
      author: 'Sara Ali',
      createdAt: '2026-01-15',
      category: 'Mobile',
      img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200',
      content: `React Native allows you to build cross-platform mobile apps using JavaScript and React. With a single codebase, you can target both iOS and Android platforms.

Why choose React Native:

- Single codebase for iOS and Android
- Near-native performance
- Large community and ecosystem
- Hot reloading for fast development
- Access to native device features
- Code sharing with React web apps
- Strong corporate backing from Meta
- Expo for quick project setup`
    }
  };

  useEffect(() => {
    setLoading(true);
    getBlog(id)
      .then(res => {
        if (res.data) setBlog(res.data);
        else setBlog(defaultBlogs[id] || null);
      })
      .catch(() => {
        setBlog(defaultBlogs[id] || null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const bg = darkMode ? '#080c14' : '#f8fafc';
  const cardBg = darkMode ? '#0f172a' : 'white';
  const textColor = darkMode ? '#94a3b8' : '#334155';
  const titleColor = darkMode ? 'white' : '#0f172a';
  const border = darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';

  if (loading) return (
    <div style={{ backgroundColor: bg, minHeight: '100vh' }}>
      <Navbar />
      <div style={styles.loadingPage}>
        <div style={styles.spinner} />
        <p style={{ color: '#64748b' }}>Loading article...</p>
      </div>
      <Footer />
    </div>
  );

  if (!blog) return (
    <div style={{ backgroundColor: bg, minHeight: '100vh' }}>
      <Navbar />
      <div style={styles.notFound}>
        <h2 style={{ color: titleColor, fontSize: '24px', marginBottom: '20px' }}>Article not found</h2>
        <Link to="/blog" style={styles.backBtn}>← Back to Blog</Link>
      </div>
      <Footer />
    </div>
  );

  return (
    <div style={{ backgroundColor: bg }}>
      <Navbar />
      <div style={{ ...styles.heroImg, backgroundImage: `url(${blog.img || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200'})` }}>
        <div style={styles.heroOverlay}>
          <span style={styles.categoryTag}>{blog.category || 'Tech'}</span>
          <h1 style={styles.title}>{blog.title}</h1>
          <div style={styles.meta}>
            <span style={styles.metaItem}>✍️ {blog.author}</span>
            <span style={styles.metaItem}>📅 {new Date(blog.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      <section style={{ ...styles.section, backgroundColor: bg }}>
        <div style={styles.container}>
          <Link to="/blog" style={styles.backLink}>← Back to Blog</Link>
          <div style={{ ...styles.content, backgroundColor: cardBg, border: `1px solid ${border}` }}>
            {blog.content.split('\n').map((line, i) => (
              line.trim() === '' 
                ? <br key={i} />
                : <p key={i} style={{ ...styles.contentText, color: textColor }}>{line}</p>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

const styles = {
  heroImg: { height: '450px', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'flex-end' },
  heroOverlay: { background: 'linear-gradient(to top, rgba(8,12,20,1), rgba(8,12,20,0.2))', width: '100%', padding: '60px 80px' },
  categoryTag: { backgroundColor: '#6366f1', color: 'white', padding: '5px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '600', letterSpacing: '1px' },
  title: { fontSize: '42px', fontWeight: '800', color: 'white', marginTop: '15px', marginBottom: '15px', letterSpacing: '-1px', maxWidth: '800px', lineHeight: '1.2' },
  meta: { display: 'flex', gap: '20px' },
  metaItem: { color: '#94a3b8', fontSize: '14px' },
  section: { padding: '60px 80px' },
  container: { maxWidth: '800px', margin: '0 auto' },
  backLink: { color: '#6366f1', textDecoration: 'none', fontSize: '14px', fontWeight: '600', display: 'block', marginBottom: '30px' },
  content: { padding: '50px', borderRadius: '20px' },
  contentText: { lineHeight: '2', fontSize: '16px', marginBottom: '8px' },
  loadingPage: { minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
  spinner: { width: '40px', height: '40px', border: '3px solid #1e293b', borderTop: '3px solid #6366f1', borderRadius: '50%', marginBottom: '20px', animation: 'spin 1s linear infinite' },
  notFound: { minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
  backBtn: { color: '#6366f1', textDecoration: 'none', fontWeight: '600' }
};

export default BlogDetail;