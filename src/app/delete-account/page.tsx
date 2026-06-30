'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function DeleteAccount() {
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (confirmed) {
      // Open mailto link
      window.location.href = 'mailto:info@adroof.in?subject=Account%20Deletion%20Request&body=Hi%20AdRoof%20Team%2C%0A%0AI%20would%20like%20to%20request%20the%20deletion%20of%20my%20account%20and%20all%20associated%20data.%0A%0AMy%20registered%20details%3A%0AName%3A%20%0AEmail%2FPhone%3A%20%0A%0AThank%20you.';
      setSubmitted(true);
    }
  };

  return (
    <div className="main-wrapper">
      {/* Glow overlays */}
      <div className="glow-top" />
      <div className="glow-bottom" />

      {/* Header / Navigation bar */}
      <header style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(15, 23, 42, 0.05)'
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image
            src="/logo.png"
            alt="AdRoof Logo"
            width={120}
            height={40}
            style={{ height: '36px', width: 'auto' }}
          />
        </a>
        <a href="/" className="download-btn" style={{ padding: '8px 16px', borderRadius: '12px', fontSize: '0.85rem' }}>
          Back to Home
        </a>
      </header>

      {/* Main Container */}
      <main className="page-content-container" style={{ padding: '40px 20px 80px', maxWidth: '720px' }}>
        {/* Header Block */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '100%', marginBottom: '2.5rem' }}>
          <p className="intro-badge">ACCOUNT MANAGEMENT</p>
          <h1 className="main-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Delete Account</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', textAlign: 'center', maxWidth: '500px' }}>
            Request permanent deletion of your AdRoof account and all associated data.
          </p>
        </div>

        {/* Info Card */}
        <div style={{
          width: '100%',
          textAlign: 'left',
          background: 'rgba(255, 255, 255, 0.8)',
          border: '1px solid rgba(15, 23, 42, 0.08)',
          borderRadius: '16px',
          padding: 'clamp(24px, 5vw, 40px)',
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.03)',
          lineHeight: '1.7',
          color: '#334155',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}>

          {!submitted ? (
            <>
              <h2 style={{ color: '#0f172a', fontSize: '1.35rem', fontWeight: '700' }}>What happens when you delete your account?</h2>

              <p>
                When you request account deletion, <strong>all your data and details will be permanently removed</strong> from our servers. This includes:
              </p>
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Your profile information (name, email, phone number).</li>
                <li>All campaign history, booking records, and analytics data.</li>
                <li>Connected social accounts and advertising platform tokens.</li>
                <li>Payment transaction history and invoices.</li>
                <li>All saved preferences, templates, and application settings.</li>
              </ul>

              <p style={{
                background: 'rgba(220, 38, 38, 0.04)',
                borderLeft: '4px solid #dc2626',
                padding: '12px 16px',
                borderRadius: '0 8px 8px 0',
                fontWeight: '500',
                color: '#0f172a'
              }}>
                ⚠️ <strong>Warning:</strong> This action is irreversible. Once your account is deleted, your data cannot be recovered.
              </p>

              <hr style={{ border: '0', borderTop: '1px solid rgba(15, 23, 42, 0.08)' }} />

              <h3 style={{ color: '#0f172a', fontSize: '1.15rem', fontWeight: '600' }}>How to delete your account</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Step 1 */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    minWidth: '36px', height: '36px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff6a00, #ee5a24)',
                    color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.9rem', fontWeight: '700'
                  }}>1</div>
                  <div>
                    <p style={{ fontWeight: '600', color: '#0f172a' }}>Confirm your decision</p>
                    <p style={{ fontSize: '0.9rem' }}>Check the confirmation box below to acknowledge that all your data will be permanently deleted.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    minWidth: '36px', height: '36px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff6a00, #ee5a24)',
                    color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.9rem', fontWeight: '700'
                  }}>2</div>
                  <div>
                    <p style={{ fontWeight: '600', color: '#0f172a' }}>Send deletion request</p>
                    <p style={{ fontSize: '0.9rem' }}>Click the button below to send an email to <strong>info@adroof.in</strong> with your account deletion request.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    minWidth: '36px', height: '36px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff6a00, #ee5a24)',
                    color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.9rem', fontWeight: '700'
                  }}>3</div>
                  <div>
                    <p style={{ fontWeight: '600', color: '#0f172a' }}>Account deleted within 7–10 days</p>
                    <p style={{ fontSize: '0.9rem' }}>Our team will process your request and permanently delete your account and all associated data within <strong>7 to 10 business days</strong>. You will receive a confirmation email once completed.</p>
                  </div>
                </div>
              </div>

              <hr style={{ border: '0', borderTop: '1px solid rgba(15, 23, 42, 0.08)' }} />

              {/* Confirmation Checkbox */}
              <label style={{
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'flex-start',
                cursor: 'pointer',
                padding: '16px',
                borderRadius: '12px',
                border: confirmed ? '2px solid #dc2626' : '2px solid rgba(15, 23, 42, 0.1)',
                background: confirmed ? 'rgba(220, 38, 38, 0.03)' : 'transparent',
                transition: 'all 0.25s ease',
              }}>
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  style={{
                    width: '20px', height: '20px', marginTop: '2px',
                    accentColor: '#dc2626', cursor: 'pointer',
                  }}
                />
                <span style={{ fontSize: '0.95rem', color: '#0f172a', fontWeight: '500' }}>
                  I understand that deleting my account will <strong>permanently remove all my data</strong>, including profile information, campaign history, booking records, connected accounts, and payment details. This action is <strong>irreversible</strong>.
                </span>
              </label>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={!confirmed}
                style={{
                  width: '100%',
                  padding: '14px 24px',
                  borderRadius: '14px',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: '700',
                  cursor: confirmed ? 'pointer' : 'not-allowed',
                  color: '#fff',
                  background: confirmed
                    ? 'linear-gradient(135deg, #dc2626, #b91c1c)'
                    : '#cbd5e1',
                  boxShadow: confirmed ? '0 4px 20px rgba(220, 38, 38, 0.3)' : 'none',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.02em',
                }}
              >
                {confirmed ? '🗑️ Request Account Deletion' : 'Please confirm above to proceed'}
              </button>
            </>
          ) : (
            /* Success State */
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
              <h2 style={{ color: '#0f172a', fontSize: '1.5rem', fontWeight: '700' }}>Request Initiated</h2>
              <p style={{ maxWidth: '400px', color: '#475569' }}>
                Your email client has been opened with a pre-filled deletion request to <strong>info@adroof.in</strong>. Please send the email to complete your request.
              </p>
              <p style={{
                background: 'rgba(22, 163, 74, 0.04)',
                borderLeft: '4px solid #16a34a',
                padding: '12px 16px',
                borderRadius: '0 8px 8px 0',
                fontWeight: '500',
                color: '#0f172a',
                textAlign: 'left',
                width: '100%',
              }}>
                ✅ Your account and all associated data will be permanently deleted within <strong>7 to 10 business days</strong> after we receive your email. A confirmation will be sent to you once completed.
              </p>
              <a href="/" className="download-btn" style={{
                padding: '12px 28px',
                borderRadius: '14px',
                fontSize: '0.95rem',
                marginTop: '0.5rem',
                display: 'inline-block',
                textDecoration: 'none',
              }}>
                Return to Home
              </a>
            </div>
          )}
        </div>
      </main>

      {/* Footer Area */}
      <footer id="contact" className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Column 1: Info & Socials */}
            <div className="footer-col">
              <div className="footer-logo-container">
                <Image
                  src="/logo.png"
                  alt="AdRoof Logo"
                  width={150}
                  height={150}
                  style={{ height: "46px", width: "auto" }}
                />
              </div>
              <p className="footer-description">
                Bringing simple, direct advertising to local businesses and major brands. Book physical hoardings, banners, flyer distributions, and vehicle voice announcements alongside optimized Meta & Google ad campaigns right from the AdRoof application.
              </p>
              <div className="footer-col" style={{ gap: "0.75rem" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: "600", color: "#0f172a" }}>Follow Us</h4>
                <div className="social-links-row">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-circle-link" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-circle-link" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-circle-link" aria-label="Twitter">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-circle-link" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Address */}
            <div className="footer-col">
              <h3 className="footer-section-title title-orange">Our Address</h3>
              <div className="address-card">
                <div className="address-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
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

            {/* Column 3: Support */}
            <div className="footer-col">
              <h3 className="footer-section-title title-blue">Support</h3>
              <div className="links-list">
                <a href="/contact" className="footer-nav-link">
                  <span>Contact Us</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                <a href="/terms" className="footer-nav-link">
                  <span>Terms & Conditions</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                <a href="/privacy-policy" className="footer-nav-link">
                  <span>Privacy Policy</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                <a href="/refund-policy" className="footer-nav-link">
                  <span>Refund and Cancellation Policy</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                <a href="/delete-account" className="footer-nav-link">
                  <span>Delete Account</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom-divider">
            <p className="copyright-text">
              &copy; 2026 <span className="copyright-brand">adroof.in</span>. All rights reserved. Gore Enterprises.
            </p>
            <div className="status-indicator-group">
              <span className="made-in-india-badge">
                Made with ❤️ in India
              </span>
              <span className="service-status-badge">
                <span className="status-dot" />
                Service Active
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
