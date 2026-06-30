import Image from "next/image";

export default function Home() {
  return (
    <div className="main-wrapper">
      <main className="hero-section">


        {/* Main Content Area */}
        <div className="page-content-container">
        {/* Header Block */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", width: "100%" }}>
          <p className="intro-badge">ADROOF PRESENTS</p>
          <h1 className="main-title">Ab digital growth assan hai</h1>
          <p className="sub-tagline">
            India&apos;s All-In-One Offline &amp; Digital Advertising Platform
          </p>
        </div>

        {/* Poster Showcase Card */}
        <div className="video-card-container">
          <div className="video-ratio-wrapper">
            <Image
              src="/poster.jpg"
              alt="AdRoof - No Marketing Tention, Business Growth with AdRoof"
              fill
              sizes="(max-width: 860px) 100vw, 860px"
              style={{ objectFit: "cover", borderRadius: "18px" }}
              priority
            />
          </div>
        </div>

        {/* Download Badges */}
        <div className="download-buttons-group">
          {/* Google Play Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.vikriai.app&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
            aria-label="Get it on Google Play"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.636z" />
            </svg>
            <span>Google Play</span>
          </a>

          {/* App Store Button */}
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
            aria-label="Download on the App Store"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span>App Store</span>
          </a>
        </div>

        {/* Small Logo Centered below buttons */}
        <div className="hero-brand-logo">
          <Image
            src="/logo.png"
            alt="AdRoof Logo"
            width={120}
            height={120}
            style={{ width: "clamp(80px, 15vw, 110px)", height: "auto" }}
          />
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

            {/* Column 2: Address and CIN details */}
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

            {/* Column 3: Navigation / Policies */}
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

          {/* Footer Bottom Area */}
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
