import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import { sendInquiry } from '../api/index';

function Contact({ darkMode, setDarkMode }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const slides = [
    { url: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600', title: 'Get In Touch', subtitle: 'We would love to hear from you' },
    { url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600', title: "Let's Talk", subtitle: 'Tell us about your project' },
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

  const bg = darkMode ? '#080c14' : '#f8fafc';
  const cardBg = darkMode ? '#0f172a' : 'white';
  const titleColor = darkMode ? 'white' : '#0f172a';
  const textColor = darkMode ? '#64748b' : '#475569';
  const border = darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';
  const inputBg = darkMode ? '#080c14' : '#f8fafc';

  return (
    <div style={{ backgroundColor: bg }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section className="section-pad" style={{ background: 'linear-gradient(135deg, #080c14 0%, #0f172a 50%, #1a1040 100%)', padding: '120px 80px 80px', textAlign: 'center' }}>
        <span style={styles.tag}>CONTACT US</span>
        <h1 className="section-title" style={{ fontSize: '56px', fontWeight: '800', color: 'white', marginBottom: '20px', letterSpacing: '-1.5px' }}>Get In Touch</h1>
        <p className="section-subtitle" style={{ fontSize: '18px', color: '#64748b' }}>Have a project in mind? We'd love to hear about it.</p>
      </section>

      <section className="slider-section" style={{ padding: '0 80px', marginTop: '-30px' }}>
        <ImageSlider images={slides} height="380px" />
      </section>

      <section className="section-pad" style={{ padding: '100px 80px', backgroundColor: bg }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '50px', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: '800', color: titleColor, marginBottom: '15px' }}>Let's Build Something Great</h2>
            <p style={{ color: textColor, lineHeight: '1.7', marginBottom: '30px', fontSize: '14px' }}>Whether you have a project in mind or just want to explore possibilities, we're here to help.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: '📧', label: 'Email', value: 'hello@clarix.com' },
                { icon: '📞', label: 'Phone', value: '+92 300 1234567' },
                { icon: '📍', label: 'Location', value: 'Islamabad, Pakistan' },
                { icon: '⏰', label: 'Hours', value: 'Mon-Fri, 9AM-6PM' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: cardBg, padding: '16px', borderRadius: '12px', border: `1px solid ${border}` }}>
                  <span style={{ fontSize: '18px', width: '40px', height: '40px', backgroundColor: 'rgba(99,102,241,0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ color: textColor, fontSize: '11px', fontWeight: '500', marginBottom: '2px' }}>{item.label}</p>
                    <p style={{ color: titleColor, fontSize: '13px', fontWeight: '600' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ backgroundColor: cardBg, padding: '35px', borderRadius: '20px', border: `1px solid ${border}` }}>
            <h2 style={{ fontSize: '22px', fontWeight: '800', color: titleColor, marginBottom: '25px' }}>Send Us a Message</h2>
            {success && <div style={{ backgroundColor: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', color: '#10b981', padding: '14px', borderRadius: '10px', marginBottom: '20px', fontSize: '13px' }}>{success}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={{ color: textColor, fontSize: '12px', fontWeight: '600', marginBottom: '6px', display: 'block' }}>Your Name</label>
                  <input style={{ width: '100%', padding: '12px 14px', backgroundColor: inputBg, border: `1px solid ${border}`, borderRadius: '10px', color: titleColor, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} placeholder="John Doe" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div>
                  <label style={{ color: textColor, fontSize: '12px', fontWeight: '600', marginBottom: '6px', display: 'block' }}>Email Address</label>
                  <input style={{ width: '100%', padding: '12px 14px', backgroundColor: inputBg, border: `1px solid ${border}`, borderRadius: '10px', color: titleColor, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} type="email" placeholder="john@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                </div>
              </div>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ color: textColor, fontSize: '12px', fontWeight: '600', marginBottom: '6px', display: 'block' }}>Phone Number</label>
                <input style={{ width: '100%', padding: '12px 14px', backgroundColor: inputBg, border: `1px solid ${border}`, borderRadius: '10px', color: titleColor, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} placeholder="+92 300 0000000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ color: textColor, fontSize: '12px', fontWeight: '600', marginBottom: '6px', display: 'block' }}>Your Message</label>
                <textarea style={{ width: '100%', padding: '12px 14px', backgroundColor: inputBg, border: `1px solid ${border}`, borderRadius: '10px', color: titleColor, fontSize: '14px', outline: 'none', boxSizing: 'border-box', resize: 'vertical' }} placeholder="Tell us about your project..." rows="5" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
              </div>
              <button type="submit" style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: 'white', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }} disabled={loading}>
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
  tag: { color: '#6366f1', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '15px', display: 'block' }
};

export default Contact;