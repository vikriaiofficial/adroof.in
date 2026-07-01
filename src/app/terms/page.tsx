import Image from 'next/image';

export default function TermsAndConditions() {
  const sectionCard = {
    width: '100%',
    textAlign: 'left' as const,
    background: 'rgba(255, 255, 255, 0.8)',
    border: '1px solid rgba(15, 23, 42, 0.08)',
    borderRadius: '16px',
    padding: 'clamp(20px, 5vw, 40px)',
    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.03)',
    lineHeight: '1.7',
    color: '#334155',
  };

  const h2Style = { color: '#0f172a', fontSize: '1.5rem', fontWeight: '700' as const };
  const h3Style = { color: '#0f172a', fontSize: '1.2rem', fontWeight: '600' as const };
  const ulStyle = { paddingLeft: '20px', listStyleType: 'disc' as const, display: 'flex', flexDirection: 'column' as const, gap: '0.5rem' };
  const olStyle = { paddingLeft: '20px', listStyleType: 'decimal' as const, display: 'flex', flexDirection: 'column' as const, gap: '0.5rem' };
  const hrStyle = { border: '0', borderTop: '1px solid rgba(15, 23, 42, 0.08)' };
  const contactBoxStyle = {
    background: 'rgba(255, 106, 0, 0.04)',
    borderLeft: '4px solid var(--brand-orange)',
    padding: '12px 16px',
    borderRadius: '0 8px 8px 0',
    fontWeight: '500' as const,
    color: '#0f172a',
  };
  const linkStyle = { color: 'var(--brand-orange)', textDecoration: 'none', fontWeight: '500' as const };

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
      <main className="page-content-container" style={{ padding: '40px 20px 80px', maxWidth: '1000px' }}>
        {/* Header Block */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '100%', marginBottom: '2.5rem' }}>
          <p className="intro-badge">LEGAL COMPLIANCE</p>
          <h1 className="main-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Terms &amp; Conditions</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Last Updated: July 1, 2026</p>
        </div>

        {/* All Terms Continuous */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
          <div style={sectionCard}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={h3Style}>1. Acceptance of Terms</h3>
              <p>
                Welcome to Adroof! These Terms and Conditions (&quot;Terms&quot;) govern your use of the Adroof mobile application and website (&quot;Service&quot;) operated by Gore Enterprises (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
              </p>
              <p>
                By downloading, installing, or using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service. Your continued use after changes to these Terms constitutes acceptance of those changes.
              </p>

              <h3 style={h3Style}>2. Description of Service</h3>
              <p>
                Adroof is an all-in-one offline &amp; digital advertising platform that enables businesses to:
              </p>
              <ol style={olStyle}>
                <li>Book physical hoardings, banners, flyer distributions, and vehicle voice announcements.</li>
                <li>Connect Facebook Pages, Instagram Business Accounts, Google Ads, and Google Business Profile accounts.</li>
                <li>Schedule and publish content to connected social media accounts.</li>
                <li>View analytics and performance reports for social media and advertising campaigns.</li>
                <li>Manage customer reviews and messages from Google Business Profile and Facebook Pages.</li>
              </ol>

              <h3 style={h3Style}>3. User Accounts and Your Responsibilities</h3>
              <p>
                <strong>a. Accurate Information:</strong> You agree to provide accurate information and keep it updated. You are responsible for all activity that occurs under your account.
              </p>
              <p>
                <strong>b. Account Security:</strong> Keep your password secure. You are responsible for any unauthorized use of your account.
              </p>
              <p>
                <strong>c. Prohibited Conduct:</strong> You agree not to use the Service to post spam, illegal content, or content that violates Google&apos;s Community Guidelines or Meta&apos;s Community Standards. You must comply with Google Play&apos;s Developer Program Policies and the Google API Services User Data Policy.
              </p>
              <p>
                <strong>d. Third-Party Platforms:</strong> Your use of Facebook, Instagram, and Google services through Adroof is also subject to their respective terms. Adroof is not responsible for the actions of these third-party platforms.
              </p>

              <h3 style={h3Style}>4. Meta Platform Integration (Facebook &amp; Instagram)</h3>
              <p>
                <strong>a. Permissions:</strong> When you use &quot;Login with Facebook,&quot; you grant Adroof permission to access and manage your Facebook Pages and Instagram Accounts as detailed in our Privacy Policy. This includes permission to publish content and read insights on your behalf.
              </p>
              <p>
                <strong>b. Compliance with Meta Policies:</strong> By using Adroof, you also agree to be bound by Meta&apos;s Terms of Service, Community Standards, and Platform Terms. You understand that Adroof&apos;s access to Meta data is subject to your permissions and Meta&apos;s policies.
              </p>
              <p>
                <strong>c. API Limitations:</strong> You acknowledge that Adroof&apos;s functionality is dependent on the availability of Meta&apos;s APIs. We are not liable for service interruptions caused by changes to Meta&apos;s Platform.
              </p>

              <h3 style={h3Style}>5. Google Platform Integration (Google Ads &amp; Google Business Profile)</h3>
              <p>
                <strong>a. Permissions:</strong> When you connect your Google Account, you grant Adroof permission to access your Google Ads data and Google Business Profile as detailed in our Privacy Policy.
              </p>
              <p>
                <strong>b. Google API Services Disclosure:</strong> Adroof&apos;s use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements. We use Google data solely to provide the features of the Adroof app. We do not transfer Google user data to any third parties except as necessary to provide the Service.
              </p>
              <p>
                <strong>c. Limited Use:</strong> Adroof&apos;s use of Google data is limited to providing and improving the app&apos;s features for the user. We do not sell, license, or share Google user data for advertising purposes.
              </p>
              <p>
                <strong>d. API Limitations:</strong> You acknowledge that Adroof&apos;s functionality is dependent on the availability of Google&apos;s APIs. We are not liable for service interruptions caused by changes to Google&apos;s Platform.
              </p>

              <h3 style={h3Style}>6. Subscriptions, Payments, and Billing</h3>
              <p>
                <strong>a. In-App Purchases:</strong> Adroof offers auto-renewing subscriptions purchased through Google Play Billing.
              </p>
              <p>
                <strong>b. Billing:</strong> Payment will be charged to your Google Play account at confirmation of purchase. Subscriptions automatically renew unless auto-renew is turned off at least 24-hours before the end of the current period.
              </p>
              <p>
                <strong>c. Managing Subscriptions:</strong> You can manage and cancel your subscriptions by going to your Google Play Store account settings after purchase.
              </p>
              <p>
                <strong>d. Refund Policy:</strong> All subscription purchases are final and non-refundable as per Google Play&apos;s policies. For offline booking services purchased directly through Adroof, our 7-day refund policy applies as stated in our Payment Policy. Please review before purchasing.
              </p>

              <h3 style={h3Style}>7. Intellectual Property</h3>
              <p>
                The Service and its original content, features, and functionality are owned by Gore Enterprises and are protected by international copyright, trademark, and other intellectual property laws. You retain ownership of the content you create and post through the App. You grant us a license to use your content solely for the purpose of providing the Service to you.
              </p>

              <h3 style={h3Style}>8. Termination and Data Deletion</h3>
              <p>
                <strong>a. By You:</strong> You may delete your account at any time via the in-app settings or by emailing <a href="mailto:info@adroof.in" style={linkStyle}>info@adroof.in</a>. For full instructions, visit our Data Deletion page at <a href="https://www.adroof.online/delete-account" style={linkStyle} target="_blank" rel="noopener noreferrer">https://www.adroof.online/delete-account</a>.
              </p>
              <p>
                <strong>b. By Us:</strong> We may suspend or terminate your access if you violate these Terms, Google&apos;s policies, or Meta&apos;s policies. We will provide notice when possible.
              </p>
              <p>
                <strong>c. Data Deletion:</strong> Upon account deletion, all your data including Meta and Google data will be permanently removed from our servers within 7 business days, as described in our Data Deletion Instructions.
              </p>

              <h3 style={h3Style}>9. Disclaimers and Limitation of Liability</h3>
              <p>
                <strong>a.</strong> The Service is provided &quot;AS IS&quot; without warranties of any kind. We do not guarantee that the Service will be error-free or uninterrupted.
              </p>
              <p>
                <strong>b.</strong> Gore Enterprises is not liable for any damages arising from your use of the Service, including loss of data, profits, or goodwill. Our total liability will not exceed the amount you paid us in the last 3 months.
              </p>
              <p>
                <strong>c.</strong> We are not responsible for service interruptions caused by changes to third-party APIs like Meta or Google.
              </p>

              <h3 style={h3Style}>10. Indemnification</h3>
              <p>
                You agree to indemnify and hold Gore Enterprises harmless from any claims resulting from your violation of these Terms or your violation of any rights of a third party.
              </p>

              <h3 style={h3Style}>11. Governing Law</h3>
              <p>
                These Terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in Ahmednagar, Maharashtra.
              </p>

              <h3 style={h3Style}>12. Changes to Terms</h3>
              <p>
                We may update these Terms from time to time. We will post the new Terms on this page and update the &quot;Last Updated&quot; date. Continued use of the Service after changes means you accept the new Terms.
              </p>

              <h3 style={h3Style}>13. Contact Us</h3>
              <p>
                For any questions about these Terms, please contact:
              </p>
              <p style={contactBoxStyle}>
                <strong>Gore Enterprises</strong><br />
                Email: info@adroof.in<br />
                Address: House No 4, Kumbhar Wasti, Ravalgaon, Mirajgaon, Ahmednagar, Maharashtra - 414401<br />
                Phone: +91 73502 72829
              </p>
            </div>
          </div>
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
