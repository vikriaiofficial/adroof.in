'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage:%0A${encodeURIComponent(formData.message)}`;
    window.location.href = `mailto:info@adroof.in?subject=${encodeURIComponent(formData.subject || 'Contact Inquiry')}&body=${body}`;
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1.5px solid rgba(15, 23, 42, 0.12)',
    fontSize: '0.95rem',
    color: '#0f172a',
    background: 'rgba(255, 255, 255, 0.6)',
    outline: 'none',
    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
    fontFamily: 'inherit',
  };

  return (
    <div className="main-wrapper">
      <div className="glow-top" />
      <div className="glow-bottom" />

      {/* Header */}
      <header style={{
        position: 'relative', zIndex: 10, width: '100%', maxWidth: '1200px',
        margin: '0 auto', padding: '24px', display: 'flex',
        justifyContent: 'space-between', alignItems: 'center',
        borderBottom: '1px solid rgba(15, 23, 42, 0.05)'
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image src="/logo.png" alt="AdRoof Logo" width={120} height={40} style={{ height: '36px', width: 'auto' }} />
        </a>
        <a href="/" className="download-btn" style={{ padding: '8px 16px', borderRadius: '12px', fontSize: '0.85rem' }}>
          Back to Home
        </a>
      </header>

      {/* Main */}
      <main className="page-content-container" style={{ padding: '40px 20px 80px', maxWidth: '1100px' }}>
        {/* Title */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '100%', marginBottom: '2.5rem' }}>
          <p className="intro-badge">GET IN TOUCH</p>
          <h1 className="main-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Contact Us</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', textAlign: 'center', maxWidth: '500px' }}>
            Have a question or need help? We&apos;d love to hear from you.
          </p>
        </div>

        {/* Two Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', width: '100%' }}>

          {/* Left: Contact Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Email Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.8)', border: '1px solid rgba(15, 23, 42, 0.08)',
              borderRadius: '16px', padding: '24px', display: 'flex', gap: '1rem', alignItems: 'flex-start',
              boxShadow: '0 4px 20px rgba(15, 23, 42, 0.03)', transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}>
              <div style={{
                minWidth: '48px', height: '48px', borderRadius: '14px',
                background: 'linear-gradient(135deg, rgba(255,106,0,0.1), rgba(255,106,0,0.05))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--brand-orange)" strokeWidth="2" style={{ width: '24px', height: '24px' }} strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <p style={{ fontWeight: '700', color: '#0f172a', fontSize: '1rem', marginBottom: '4px' }}>Email Us</p>
                <a href="mailto:info@adroof.in" style={{ color: 'var(--brand-orange)', textDecoration: 'none', fontWeight: '500', fontSize: '0.95rem' }}>
                  info@adroof.in
                </a>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '4px' }}>We typically respond within 24 hours.</p>
              </div>
            </div>

            {/* Phone Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.8)', border: '1px solid rgba(15, 23, 42, 0.08)',
              borderRadius: '16px', padding: '24px', display: 'flex', gap: '1rem', alignItems: 'flex-start',
              boxShadow: '0 4px 20px rgba(15, 23, 42, 0.03)',
            }}>
              <div style={{
                minWidth: '48px', height: '48px', borderRadius: '14px',
                background: 'linear-gradient(135deg, rgba(22,163,74,0.1), rgba(22,163,74,0.05))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" style={{ width: '24px', height: '24px' }} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p style={{ fontWeight: '700', color: '#0f172a', fontSize: '1rem', marginBottom: '4px' }}>Call Us</p>
                <a href="tel:+917350272829" style={{ color: '#16a34a', textDecoration: 'none', fontWeight: '500', fontSize: '0.95rem' }}>
                  +91 73502 72829
                </a>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '4px' }}>Mon–Sat, 10:00 AM – 7:00 PM IST</p>
              </div>
            </div>

            {/* Address Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.8)', border: '1px solid rgba(15, 23, 42, 0.08)',
              borderRadius: '16px', padding: '24px', display: 'flex', gap: '1rem', alignItems: 'flex-start',
              boxShadow: '0 4px 20px rgba(15, 23, 42, 0.03)',
            }}>
              <div style={{
                minWidth: '48px', height: '48px', borderRadius: '14px',
                background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(59,130,246,0.05))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" style={{ width: '24px', height: '24px' }} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p style={{ fontWeight: '700', color: '#0f172a', fontSize: '1rem', marginBottom: '4px' }}>Visit Us</p>
                <p style={{ color: '#334155', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  <strong>Gore Enterprises</strong><br />
                  House No 4, Kumbhar Wasti<br />
                  Ravalgaon, Ravalgaon-Guravpimpri Rd<br />
                  Mirajgaon, Ahmednagar<br />
                  <strong>Maharashtra, India - 414401</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.8)', border: '1px solid rgba(15, 23, 42, 0.08)',
            borderRadius: '16px', padding: 'clamp(24px, 5vw, 36px)',
            boxShadow: '0 10px 30px rgba(15, 23, 42, 0.03)',
          }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h2 style={{ color: '#0f172a', fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.25rem' }}>Send us a message</h2>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#334155', marginBottom: '6px', display: 'block' }}>Full Name *</label>
                  <input type="text" required placeholder="Your full name" value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={inputStyle} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#334155', marginBottom: '6px', display: 'block' }}>Email *</label>
                    <input type="email" required placeholder="you@example.com" value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#334155', marginBottom: '6px', display: 'block' }}>Phone</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })} style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#334155', marginBottom: '6px', display: 'block' }}>Subject *</label>
                  <input type="text" required placeholder="How can we help?" value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })} style={inputStyle} />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#334155', marginBottom: '6px', display: 'block' }}>Message *</label>
                  <textarea required placeholder="Tell us more about your inquiry..." rows={5} value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }} />
                </div>

                <button type="submit" style={{
                  width: '100%', padding: '14px 24px', borderRadius: '14px', border: 'none',
                  fontSize: '1rem', fontWeight: '700', cursor: 'pointer', color: '#fff',
                  background: 'linear-gradient(135deg, #ff6a00, #ee5a24)',
                  boxShadow: '0 4px 20px rgba(255, 106, 0, 0.3)',
                  transition: 'all 0.3s ease', letterSpacing: '0.02em',
                }}>
                  📩 Send Message
                </button>
              </form>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', padding: '2rem 0', textAlign: 'center' }}>
                <div style={{
                  width: '72px', height: '72px', borderRadius: '50%',
                  background: 'rgba(22, 163, 74, 0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" style={{ width: '36px', height: '36px' }}>
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 style={{ color: '#0f172a', fontSize: '1.5rem', fontWeight: '700' }}>Message Ready!</h2>
                <p style={{ maxWidth: '380px', color: '#475569' }}>
                  Your email client has been opened with a pre-filled message to <strong>info@adroof.in</strong>. Please send the email to complete your inquiry.
                </p>
                <button onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                  style={{
                    padding: '10px 24px', borderRadius: '12px', border: '1.5px solid rgba(15, 23, 42, 0.12)',
                    background: 'transparent', color: '#0f172a', fontWeight: '600', cursor: 'pointer', fontSize: '0.9rem',
                    transition: 'all 0.25s ease',
                  }}>
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer id="contact" className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo-container">
                <Image src="/logo.png" alt="AdRoof Logo" width={150} height={150} style={{ height: "46px", width: "auto" }} />
              </div>
              <p className="footer-description">
                Bringing simple, direct advertising to local businesses and major brands. Book physical hoardings, banners, flyer distributions, and vehicle voice announcements alongside optimized Meta & Google ad campaigns right from the AdRoof application.
              </p>
              <div className="footer-col" style={{ gap: "0.75rem" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: "600", color: "#0f172a" }}>Follow Us</h4>
                <div className="social-links-row">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-circle-link" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-circle-link" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-circle-link" aria-label="Twitter">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-circle-link" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-col">
              <h3 className="footer-section-title title-orange">Our Address</h3>
              <div className="address-card">
                <div className="address-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div className="address-text-content">
                  <p className="address-company-name">GORE ENTERPRISES</p>
                  <p className="address-cin" style={{ fontSize: "0.7rem" }}>UDYAM REGISTRATION: UDYAM-MH-01-0206872</p>
                  <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                    <p>House No 4, Kumbhar Wasti</p>
                    <p>Ravalgaon, Ravalgaon-Guravpimpri Rd</p>
                    <p>Mirajgaon, Ahmednagar</p>
                    <p style={{ color: "#0f172a", fontWeight: "500", marginTop: "0.25rem" }}>Maharashtra, India - 414401</p>
                    <p style={{ marginTop: "0.5rem", fontSize: "0.85rem" }}>
                      <strong>Mob:</strong> +91 73502 72829<br />
                      <strong>Email:</strong> info@adroof.in
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-col">
              <h3 className="footer-section-title title-blue">Support</h3>
              <div className="links-list">
                <a href="/contact" className="footer-nav-link"><span>Contact Us</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg></a>
                <a href="/terms" className="footer-nav-link"><span>Terms & Conditions</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg></a>
                <a href="/privacy-policy" className="footer-nav-link"><span>Privacy Policy</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg></a>
                <a href="/refund-policy" className="footer-nav-link"><span>Refund and Cancellation Policy</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg></a>
                <a href="/delete-account" className="footer-nav-link"><span>Delete Account</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom-divider">
            <p className="copyright-text">&copy; 2026 <span className="copyright-brand">adroof.in</span>. All rights reserved. Gore Enterprises.</p>
            <div className="status-indicator-group">
              <span className="made-in-india-badge">Made with ❤️ in India</span>
              <span className="service-status-badge"><span className="status-dot" />Service Active</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
