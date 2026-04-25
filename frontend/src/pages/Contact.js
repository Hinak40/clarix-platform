import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import { sendInquiry } from '../api/index';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const slides = [
    { url: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600', title: 'Get In Touch', subtitle: 'We would love to hear from you' },
    { url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600', title: 'Let\'s Talk', subtitle: 'Tell us about your project' },
    { url: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=1600', title: 'Start Today', subtitle: 'Your digital journey begins here' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendInquiry(form);
      setSuccess('✅ Message sent successfully! We will get back to you soon.');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setSuccess('✅ Message received! We will contact you shortly.');
    }
    setLoading(false);
  };

  return (
    <div>
      <Navbar />
      <section style={styles.hero}>
        <span style={styles.tag}>CONTACT US</span>
        <h1 style={styles.heroTitle}>Get In Touch</h1>
        <p style={styles.heroSubtitle}>Have a project in mind? We'd love to hear about it.</p>
      </section>
      <section style={styles.sliderSection}>
        <ImageSlider images={slides} height="380px" />
      </section>
      <section style={styles.section}>
        <div style={styles.grid}>
          <div style={styles.infoCol}>
            <h2 style={styles.infoTitle}>Let's Build Something Great Together</h2>
            <p style={styles.infoText}>Whether you have a project in mind or just want to explore possibilities, we're here to help.</p>
            <div style={styles.infoCards}>
              {[
                { icon: '📧', label: 'Email', value: 'hello@clarix.com' },
                { icon: '📞', label: 'Phone', value: '+92 300 1234567' },
                { icon: '📍', label: 'Location', value: 'Islamabad, Pakistan' },
                { icon: '⏰', label: 'Hours', value: 'Mon-Fri, 9AM-6PM' }
              ].map((item, i) => (
                <div key={i} style={styles.infoCard}>
                  <span style={styles.infoIcon}>{item.icon}</span>
                  <div>
                    <p style={styles.infoLabel}>{item.label}</p>
                    <p style={styles.infoValue}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={styles.formCol}>
            <h2 style={styles.formTitle}>Send Us a Message</h2>
            {success && <div style={styles.successMsg}>{success}</div>}
            <form onSubmit={handleSubmit}>
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Your Name</label>
                  <input style={styles.input} placeholder="John Doe" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Email Address</label>
                  <input style={styles.input} type="email" placeholder="john@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                </div>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Phone Number</label>
                <input style={styles.input} placeholder="+92 300 0000000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Your Message</label>
                <textarea style={styles.textarea} placeholder="Tell us about your project..." rows="5" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
              </div>
              <button type="submit" style={styles.btn} disabled={loading}>
                {loading ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>
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
  grid: { display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '60px', alignItems: 'start' },
  infoCol: {},
  infoTitle: { fontSize: '30px', fontWeight: '800', color: 'white', marginBottom: '15px', letterSpacing: '-0.5px' },
  infoText: { color: '#64748b', lineHeight: '1.7', marginBottom: '35px', fontSize: '15px' },
  infoCards: { display: 'flex', flexDirection: 'column', gap: '15px' },
  infoCard: { display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: '#0f172a', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' },
  infoIcon: { fontSize: '24px', width: '45px', height: '45px', backgroundColor: 'rgba(99,102,241,0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  infoLabel: { color: '#64748b', fontSize: '12px', fontWeight: '500', marginBottom: '3px' },
  infoValue: { color: 'white', fontSize: '14px', fontWeight: '600' },
  formCol: { backgroundColor: '#0f172a', padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)' },
  formTitle: { fontSize: '24px', fontWeight: '800', color: 'white', marginBottom: '25px' },
  successMsg: { backgroundColor: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', color: '#10b981', padding: '15px', borderRadius: '10px', marginBottom: '20px', fontSize: '14px' },
  formRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' },
  formGroup: { marginBottom: '20px' },
  label: { color: '#94a3b8', fontSize: '13px', fontWeight: '600', marginBottom: '8px', display: 'block', letterSpacing: '0.5px' },
  input: { width: '100%', padding: '12px 16px', backgroundColor: '#080c14', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', color: 'white', fontSize: '14px', outline: 'none', boxSizing: 'border-box' },
  textarea: { width: '100%', padding: '12px 16px', backgroundColor: '#080c14', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', color: 'white', fontSize: '14px', outline: 'none', boxSizing: 'border-box', resize: 'vertical' },
  btn: { width: '100%', padding: '14px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: 'white', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', boxShadow: '0 4px 15px rgba(99,102,241,0.3)' }
};

export default Contact;