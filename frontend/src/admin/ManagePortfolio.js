import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPortfolio, createPortfolio, deletePortfolio } from '../api/index';

function ManagePortfolio() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', techStack: '' });

  const fetchProjects = () => {
    getPortfolio().then(res => setProjects(res.data)).catch(() => {});
  };

  useEffect(() => { fetchProjects(); }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await createPortfolio({ ...form, techStack: form.techStack.split(',') });
      setForm({ title: '', description: '', techStack: '' });
      fetchProjects();
    } catch {}
  };

  const handleDelete = async (id) => {
    try {
      await deletePortfolio(id);
      fetchProjects();
    } catch {}
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>Clarix Admin</h2>
        <Link to="/admin/dashboard" style={styles.navLink}>🏠 Dashboard</Link>
        <Link to="/admin/services" style={styles.navLink}>⚡ Services</Link>
        <Link to="/admin/portfolio" style={styles.navLink}>💼 Portfolio</Link>
        <Link to="/admin/blog" style={styles.navLink}>📝 Blog</Link>
        <Link to="/admin/inquiries" style={styles.navLink}>📩 Inquiries</Link>
        <Link to="/admin/meetings" style={styles.navLink}>📅 Meetings</Link>
      </div>
      <div style={styles.main}>
        <h1 style={styles.pageTitle}>Manage Portfolio</h1>
        <form onSubmit={handleAdd} style={styles.form}>
          <input style={styles.input} placeholder="Project Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
          <input style={styles.input} placeholder="Description" value={form.description} onChange={e => setForm({...form, description: e.target.value})} required />
          <input style={styles.input} placeholder="Tech Stack (comma separated: React, Node.js)" value={form.techStack} onChange={e => setForm({...form, techStack: e.target.value})} />
          <button type="submit" style={styles.btn}>Add Project</button>
        </form>
        <div style={styles.list}>
          {projects.map(p => (
            <div key={p._id} style={styles.item}>
              <div>
                <h3 style={styles.itemTitle}>{p.title}</h3>
                <p style={styles.itemDesc}>{p.description}</p>
              </div>
              <button onClick={() => handleDelete(p._id)} style={styles.deleteBtn}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', minHeight: '100vh' },
  sidebar: { width: '240px', backgroundColor: '#0f172a', padding: '30px 20px' },
  logo: { color: '#6366f1', fontSize: '22px', marginBottom: '30px' },
  navLink: { display: 'block', color: '#e2e8f0', textDecoration: 'none', padding: '10px', borderRadius: '8px', marginBottom: '5px' },
  main: { flex: 1, padding: '40px', backgroundColor: '#f8fafc' },
  pageTitle: { fontSize: '32px', color: '#0f172a', marginBottom: '30px' },
  form: { backgroundColor: 'white', padding: '25px', borderRadius: '12px', marginBottom: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' },
  input: { width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '15px', boxSizing: 'border-box' },
  btn: { backgroundColor: '#6366f1', color: 'white', padding: '12px 25px', border: 'none', borderRadius: '8px', cursor: 'pointer' },
  list: { display: 'flex', flexDirection: 'column', gap: '15px' },
  item: { backgroundColor: 'white', padding: '20px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' },
  itemTitle: { fontSize: '16px', color: '#0f172a', marginBottom: '5px' },
  itemDesc: { color: '#64748b', fontSize: '14px' },
  deleteBtn: { backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '8px', cursor: 'pointer' }
};

export default ManagePortfolio;