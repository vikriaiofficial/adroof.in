import Image from 'next/image';

export default function DeleteAccount() {
  const h3Style = { color: '#0f172a', fontSize: '1.15rem', fontWeight: '600' as const };
  const ulStyle = { paddingLeft: '20px', listStyleType: 'disc' as const, display: 'flex', flexDirection: 'column' as const, gap: '0.5rem' };
  const olStyle = { paddingLeft: '20px', listStyleType: 'decimal' as const, display: 'flex', flexDirection: 'column' as const, gap: '0.5rem' };
  const contactBoxStyle = {
    background: 'rgba(255, 106, 0, 0.04)',
    borderLeft: '4px solid var(--brand-orange)',
    padding: '12px 16px',
    borderRadius: '0 8px 8px 0',
    fontWeight: '500' as const,
    color: '#0f172a',
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
          <h1 className="main-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>Delete Your Adroof Account &amp; Connected Data</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', textAlign: 'center', maxWidth: '560px' }}>
            You can request permanent deletion of your Adroof account and all associated data from Meta, Google, and our servers at any time.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Last Updated: July 1, 2026</p>
        </div>

        {/* Content Card */}
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

          <h2 style={{ color: '#0f172a', fontSize: '1.35rem', fontWeight: '700' }}>What Data Will Be Permanently Deleted?</h2>
          <p>
            When you delete your account, the following data will be permanently removed from our servers within 7 business days:
          </p>

          {/* 1. Adroof Profile */}
          <h3 style={h3Style}>1. Your Adroof Profile Data</h3>
          <ul style={ulStyle}>
            <li>Name, email address, phone number, password, and company details.</li>
            <li>All campaign history, booking records, analytics reports, and saved templates.</li>
          </ul>

          {/* 2. Meta Platform Data */}
          <h3 style={h3Style}>2. Meta Platform Data (Facebook &amp; Instagram)</h3>
          <p>
            As required by Meta Platform Terms, we will delete all data received from Meta APIs, including:
          </p>
          <ul style={ulStyle}>
            <li>Facebook Page names, Page IDs, and Page Access Tokens.</li>
            <li>Instagram Business Account IDs and Access Tokens.</li>
            <li>Ad Account data, campaign performance, spend, and Page/Post Insights.</li>
            <li>All cached posts, comments, and Messenger conversations from your connected Pages.</li>
          </ul>

          {/* 3. Google Platform Data */}
          <h3 style={h3Style}>3. Google Platform Data (Google My Business &amp; Google Ads)</h3>
          <p>
            As required by Google API Services User Data Policy, we will delete all data received from Google APIs, including:
          </p>
          <ul style={ulStyle}>
            <li><strong>Google My Business (GMB) Data:</strong> Business Profile IDs, location data, reviews, posts, Q&amp;A, and performance insights.</li>
            <li><strong>Google Ads Data:</strong> Customer IDs, campaign data, keywords, ad performance metrics, and billing information.</li>
            <li>OAuth Access Tokens and Refresh Tokens for your Google Account.</li>
          </ul>

          {/* 4. Billing & Payment Data */}
          <h3 style={h3Style}>4. Billing &amp; Payment Data</h3>
          <p>
            All invoice history and transaction records will be deleted, except where we are legally required to retain them for tax/audit purposes in India. In such cases, data is anonymized.
          </p>

          <p style={{
            background: 'rgba(220, 38, 38, 0.04)',
            borderLeft: '4px solid #dc2626',
            padding: '12px 16px',
            borderRadius: '0 8px 8px 0',
            fontWeight: '500',
            color: '#0f172a'
          }}>
            ⚠️ <strong>Important:</strong> This action is permanent and irreversible. Once deleted, your data cannot be recovered.
          </p>

          <hr style={{ border: '0', borderTop: '1px solid rgba(15, 23, 42, 0.08)' }} />

          <h2 style={{ color: '#0f172a', fontSize: '1.35rem', fontWeight: '700' }}>How to Delete Your Account &amp; Connected Data</h2>
          <p>
            You can delete your account using any of the three methods below. All methods will delete your Meta and Google data.
          </p>

          {/* Method 1 */}
          <h3 style={h3Style}>Method 1: Email Request (Recommended for All Data)</h3>
          <p>
            This is the fastest way to delete your Adroof account + all Meta + Google data together.
          </p>
          <ol style={olStyle}>
            <li>Send an email to <strong><a href="mailto:info@adroof.in" style={{ color: 'var(--brand-orange)', textDecoration: 'none' }}>info@adroof.in</a></strong> from your registered email address.</li>
            <li>Use the subject line: <strong>Delete My Adroof Account</strong></li>
            <li>In the email, confirm that you want to delete your account and revoke all Meta and Google access.</li>
          </ol>
          <p style={{
            background: 'rgba(22, 163, 74, 0.04)',
            borderLeft: '4px solid #16a34a',
            padding: '12px 16px',
            borderRadius: '0 8px 8px 0',
            fontWeight: '500',
            color: '#0f172a'
          }}>
            ✅ Our team will process your request within <strong>7 business days</strong>. We will revoke all access tokens and permanently delete your data. You will receive a confirmation email once completed.
          </p>

          {/* Method 2 */}
          <h3 style={h3Style}>Method 2: Facebook Data Deletion (For Meta Data Only)</h3>
          <p>
            This will delete only your Facebook/Instagram data from Adroof.
          </p>
          <ol style={olStyle}>
            <li>Go to your Facebook account &gt; Settings &amp; Privacy &gt; Settings.</li>
            <li>Click on &quot;Apps and Websites&quot; in the left menu.</li>
            <li>Find &quot;Adroof&quot; in the list of Active apps and click &quot;Remove&quot;.</li>
            <li>In the pop-up, check the box: &quot;Also delete all posts, photos, and videos that Adroof may have published on your behalf&quot; and confirm.</li>
          </ol>
          <p>
            This sends an automated deletion request to our servers. We will delete all your Meta data within 7 business days.
          </p>

          {/* Method 3 */}
          <h3 style={h3Style}>Method 3: Google Account Revocation (For Google Data Only)</h3>
          <p>
            This will delete only your Google My Business and Google Ads data from Adroof.
          </p>
          <ol style={olStyle}>
            <li>Go to your Google Account permissions page:{' '}
              <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-orange)', textDecoration: 'none', fontWeight: '500' }}>
                https://myaccount.google.com/permissions
              </a>
            </li>
            <li>Find &quot;Adroof&quot; in the list of &quot;Third-party apps with account access&quot;.</li>
            <li>Click on &quot;Adroof&quot; and then click the &quot;Remove Access&quot; button.</li>
            <li>Confirm the removal.</li>
          </ol>
          <p>
            This immediately revokes our access tokens. Our system will automatically detect the revocation and delete all your Google-related data from our servers within 7 business days.
          </p>

          <hr style={{ border: '0', borderTop: '1px solid rgba(15, 23, 42, 0.08)' }} />

          <p>
            For any questions regarding account or data deletion, contact us at{' '}
            <a href="mailto:info@adroof.in" style={{ color: 'var(--brand-orange)', textDecoration: 'none', fontWeight: '500' }}>info@adroof.in</a>.
          </p>
          <p style={contactBoxStyle}>
            <strong>Gore Enterprises</strong><br />
            House No 4, Kumbhar Wasti, Ravalgaon, Mirajgaon, Ahmednagar, Maharashtra - 414401<br />
            Phone: +91 73502 72829
          </p>
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
