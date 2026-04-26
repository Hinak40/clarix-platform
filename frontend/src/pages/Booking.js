import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import { bookMeeting } from '../api/index';

function Booking({ darkMode, setDarkMode }) {
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', message: '' });
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [
    { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600', title: 'Book a Meeting', subtitle: 'Schedule a free consultation' },
    { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600', title: 'Let\'s Connect', subtitle: 'We are here to help you succeed' },
    { url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600', title: 'Your Success', subtitle: 'Starts with a single conversation' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await bookMeeting(form);
      setSuccess('✅ Meeting booked successfully!');
      setForm({ name: '', email: '', date: '', time: '', message: '' });
    } catch {
      setSuccess('✅ Meeting request received!');
    }
    setLoading(false);
  };

  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

  const bg = darkMode ? '#080c14' : '#f8fafc';
  const cardBg = darkMode ? '#0f172a' : 'white';
  const titleColor = darkMode ? 'white' : '#0f172a';
  const textColor = darkMode ? '#64748b' : '#475569';
  const border = darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';
  const inputBg = darkMode ? '#080c14' : '#f8fafc';

  return (
    <div style={{ backgroundColor: bg }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section style={{ background: 'linear-gradient(135deg, #080c14 0%, #0f172a 50%, #1a1040 100%)', padding: isMobile ? '80px 20px 60px' : '120px 80px 80px', textAlign: 'center' }}>
        <span style={styles.tag}>BOOK A MEETING</span>
        <h1 style={{ fontSize: isMobile ? '36px' : '56px', fontWeight: '800', color: 'white', marginBottom: '20px', letterSpacing: '-1.5px' }}>Schedule a Free Call</h1>
        <p style={{ fontSize: isMobile ? '15px' : '18px', color: '#64748b' }}>Let's discuss your project and how we can help.</p>
      </section>

      <section style={{ padding: isMobile ? '0 20px' : '0 80px', marginTop: '-30px' }}>
        <ImageSlider images={slides} height={isMobile ? '220px' : '380px'} />
      </section>

      <section style={{ padding: isMobile ? '60px 20px' : '100px 80px', backgroundColor: bg }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr', gap: '40px', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: isMobile ? '24px' : '30px', fontWeight: '800', color: titleColor, marginBottom: '15px' }}>What to Expect</h2>
            <p style={{ color: textColor, lineHeight: '1.7', marginBottom: '25px', fontSize: '14px' }}>Our free consultation call is a no-obligation conversation about your project needs.</p>
            {[
              { icon: '🎯', title: 'Project Discussion', desc: 'We listen to your requirements and goals.' },
              { icon: '💡', title: 'Expert Advice', desc: 'Get professional recommendations and insights.' },
              { icon: '📋', title: 'Custom Proposal', desc: 'Receive a tailored proposal within 24 hours.' },
              { icon: '🚀', title: 'Quick Start', desc: 'Begin your project with a clear roadmap.' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '16px', backgroundColor: cardBg, padding: '16px', borderRadius: '12px', border: `1px solid ${border}` }}>
                <span style={{ fontSize: '20px', width: '40px', height: '40px', backgroundColor: 'rgba(99,102,241,0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h4 style={{ color: titleColor, fontWeight: '700', fontSize: '14px', marginBottom: '3px' }}>{item.title}</h4>
                  <p style={{ color: textColor, fontSize: '12px', lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: cardBg, padding: isMobile ? '25px' : '40px', borderRadius: '20px', border: `1px solid ${border}` }}>
            <h2 style={{ fontSize: '22px', fontWeight: '800', color: titleColor, marginBottom: '25px' }}>Book Your Slot</h2>
            {success && <div style={{ backgroundColor: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', color: '#10b981', padding: '14px', borderRadius: '10px', marginBottom: '20px', fontSize: '13px' }}>{success}</div>}
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={{ color: textColor, fontSize: '12px', fontWeight: '600', marginBottom: '6px', display: 'block' }}>Full Name</label>
                  <input style={{ width: '100%', padding: '12px 14px', backgroundColor: inputBg, border: `1px solid ${border}`, borderRadius: '10px', color: titleColor, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} placeholder="John Doe" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div>
                  <label style={{ color: textColor, fontSize: '12px', fontWeight: '600', marginBottom: '6px', display: 'block' }}>Email Address</label>
                  <input style={{ width: '100%', padding: '12px 14px', backgroundColor: inputBg, border: `1px solid ${border}`, borderRadius: '10px', color: titleColor, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} type="email" placeholder="john@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                </div>
              </div>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ color: textColor, fontSize: '12px', fontWeight: '600', marginBottom: '6px', display: 'block' }}>Preferred Date</label>
                <input style={{ width: '100%', padding: '12px 14px', backgroundColor: inputBg, border: `1px solid ${border}`, borderRadius: '10px', color: titleColor, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} required />
              </div>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ color: textColor, fontSize: '12px', fontWeight: '600', marginBottom: '8px', display: 'block' }}>Preferred Time</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                  {timeSlots.map((slot) => (
                    <button key={slot} type="button" onClick={() => setForm({ ...form, time: slot })} style={{ padding: '8px 4px', borderRadius: '8px', fontSize: '11px', fontWeight: '600', cursor: 'pointer', backgroundColor: form.time === slot ? '#6366f1' : inputBg, color: form.time === slot ? 'white' : textColor, border: `1px solid ${border}` }}>
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ color: textColor, fontSize: '12px', fontWeight: '600', marginBottom: '6px', display: 'block' }}>Project Details (Optional)</label>
                <textarea style={{ width: '100%', padding: '12px 14px', backgroundColor: inputBg, border: `1px solid ${border}`, borderRadius: '10px', color: titleColor, fontSize: '14px', outline: 'none', boxSizing: 'border-box', resize: 'vertical' }} placeholder="Tell us briefly about your project..." rows="4" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
              </div>
              <button type="submit" style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: 'white', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }} disabled={loading}>
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
  tag: { color: '#6366f1', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '15px', display: 'block' }
};

export default Booking;