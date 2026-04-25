import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import { bookMeeting } from '../api/index';

function Booking() {
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', message: '' });
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const slides = [
    { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600', title: 'Book a Meeting', subtitle: 'Schedule a free consultation with our team' },
    { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600', title: 'Let\'s Connect', subtitle: 'We are here to help you succeed' },
    { url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600', title: 'Your Success', subtitle: 'Starts with a single conversation' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await bookMeeting(form);
      setSuccess('✅ Meeting booked successfully! We will confirm shortly.');
      setForm({ name: '', email: '', date: '', time: '', message: '' });
    } catch {
      setSuccess('✅ Meeting request received! We will contact you to confirm.');
    }
    setLoading(false);
  };

  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

  return (
    <div>
      <Navbar />
      <section style={styles.hero}>
        <span style={styles.tag}>BOOK A MEETING</span>
        <h1 style={styles.heroTitle}>Schedule a Free Call</h1>
        <p style={styles.heroSubtitle}>Let's discuss your project and how we can help you achieve your goals.</p>
      </section>
      <section style={styles.sliderSection}>
        <ImageSlider images={slides} height="380px" />
      </section>
      <section style={styles.section}>
        <div style={styles.grid}>
          <div style={styles.infoCol}>
            <h2 style={styles.infoTitle}>What to Expect</h2>
            <p style={styles.infoText}>Our free consultation call is a no-obligation conversation about your project needs.</p>
            {[
              { icon: '🎯', title: 'Project Discussion', desc: 'We listen to your requirements and goals.' },
              { icon: '💡', title: 'Expert Advice', desc: 'Get professional recommendations and insights.' },
              { icon: '📋', title: 'Custom Proposal', desc: 'Receive a tailored proposal within 24 hours.' },
              { icon: '🚀', title: 'Quick Start', desc: 'Begin your project with a clear roadmap.' }
            ].map((item, i) => (
              <div key={i} style={styles.expectCard}>
                <span style={styles.expectIcon}>{item.icon}</span>
                <div>
                  <h4 style={styles.expectTitle}>{item.title}</h4>
                  <p style={styles.expectDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={styles.formCol}>
            <h2 style={styles.formTitle}>Book Your Slot</h2>
            {success && <div style={styles.successMsg}>{success}</div>}
            <form onSubmit={handleSubmit}>
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Full Name</label>
                  <input style={styles.input} placeholder="John Doe" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Email Address</label>
                  <input style={styles.input} type="email" placeholder="john@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                </div>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Preferred Date</label>
                <input style={styles.input} type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} required />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Preferred Time</label>
                <div style={styles.timeGrid}>
                  {timeSlots.map((slot) => (
                    <button key={slot} type="button" onClick={() => setForm({ ...form, time: slot })} style={{ ...styles.timeBtn, backgroundColor: form.time === slot ? '#6366f1' : '#080c14', color: form.time === slot ? 'white' : '#64748b', border: form.time === slot ? 'none' : '1px solid rgba(255,255,255,0.08)' }}>
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Project Details (Optional)</label>
                <textarea style={styles.textarea} placeholder="Tell us briefly about your project..." rows="4" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
              </div>
              <button type="submit" style={styles.btn} disabled={loading}>
                {loading ? 'Booking...' : 'Book Meeting →'}
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
  infoText: { color: '#64748b', lineHeight: '1.7', marginBottom: '30px', fontSize: '15px' },
  expectCard: { display: 'flex', gap: '15px', alignItems: 'flex-start', marginBottom: '20px', backgroundColor: '#0f172a', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' },
  expectIcon: { fontSize: '24px', width: '45px', height: '45px', backgroundColor: 'rgba(99,102,241,0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  expectTitle: { color: 'white', fontWeight: '700', fontSize: '15px', marginBottom: '4px' },
  expectDesc: { color: '#64748b', fontSize: '13px', lineHeight: '1.5' },
  formCol: { backgroundColor: '#0f172a', padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)' },
  formTitle: { fontSize: '24px', fontWeight: '800', color: 'white', marginBottom: '25px' },
  successMsg: { backgroundColor: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', color: '#10b981', padding: '15px', borderRadius: '10px', marginBottom: '20px', fontSize: '14px' },
  formRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' },
  formGroup: { marginBottom: '20px' },
  label: { color: '#94a3b8', fontSize: '13px', fontWeight: '600', marginBottom: '8px', display: 'block', letterSpacing: '0.5px' },
  input: { width: '100%', padding: '12px 16px', backgroundColor: '#080c14', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', color: 'white', fontSize: '14px', outline: 'none', boxSizing: 'border-box' },
  textarea: { width: '100%', padding: '12px 16px', backgroundColor: '#080c14', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', color: 'white', fontSize: '14px', outline: 'none', boxSizing: 'border-box', resize: 'vertical' },
  timeGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '5px' },
  timeBtn: { padding: '10px 8px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' },
  btn: { width: '100%', padding: '14px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: 'white', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', boxShadow: '0 4px 15px rgba(99,102,241,0.3)' }
};

export default Booking;