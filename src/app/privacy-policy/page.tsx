import Image from 'next/image';

export default function PrivacyPolicy() {
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
          <h1 className="main-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Last Updated: July 1, 2026</p>
        </div>

        {/* All Policy Sections Stacked Vertically */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>

          {/* ===== SECTION 1: GENERAL PRIVACY POLICY ===== */}
          <div style={sectionCard}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h2 style={h2Style}>General Privacy Policy</h2>
              <p>
                At Gore Enterprises (&quot;Gore Enterprises&quot;, &quot;AdRoof&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we are committed to protecting your privacy and security. This General Privacy Policy explains how we collect, use, share, and protect your personal data when you use the AdRoof mobile application, website, and related marketing platform services.
              </p>

              <hr style={hrStyle} />

              <h3 style={h3Style}>1. Information We Collect</h3>
              <p>
                To provide you with our all-in-one offline &amp; digital advertising coordination services, we collect:
              </p>
              <ul style={ulStyle}>
                <li><strong>Account Information:</strong> Your name, phone number, email address, password, and business details.</li>
                <li><strong>Campaign Information:</strong> Target geographical locations, hoarding preferences, flyer templates, voice-van scripts, target audiences, and digital marketing budget allocations.</li>
                <li><strong>Billing &amp; Payment Data:</strong> Transaction records, invoices, GST details, and related payment status variables (processed securely via our RBI-authorized banking partners).</li>
                <li><strong>Device Information:</strong> IP address, device identifier, operating system version, and mobile app usage metrics.</li>
              </ul>

              <h3 style={h3Style}>2. How We Use Your Information</h3>
              <p>
                We use the collected information for the following business purposes:
              </p>
              <ul style={ulStyle}>
                <li>To initialize, schedule, run, and display tracking updates for both physical (hoardings, boards, flyers, voice vans) and online campaigns.</li>
                <li>To process invoices and secure payments.</li>
                <li>To provide responsive customer support and resolve campaign queries.</li>
                <li>To monitor, analyze, and optimize application efficiency, performance, and features.</li>
              </ul>

              <h3 style={h3Style}>3. Sharing &amp; Disclosing Data</h3>
              <p>
                We do not sell your personal data. We only share campaign-related data with authorized vendors under strict confidentiality obligations:
              </p>
              <ul style={ulStyle}>
                <li><strong>Offline Service Partners:</strong> Printing houses, local boards installers, billboard space owners, and audio announcement van operators to physically place and track your offline media.</li>
                <li><strong>Digital Network Providers:</strong> Google Ads and Meta Ads interfaces through secure authorized APIs (to launch digital campaigns on your behalf).</li>
                <li><strong>Legal Compliance:</strong> When required by Indian law, judicial orders, or governmental requests.</li>
              </ul>

              <h3 style={h3Style}>4. Data Security</h3>
              <p>
                We employ standard administrative, physical, and electronic security measures (such as SSL encryption and access controls) to prevent unauthorized access, modifications, or leakages.
              </p>

              <h3 style={h3Style}>5. Contact Us</h3>
              <p>
                For questions, clarifications, or grievances regarding this privacy policy or data deletion, please contact us at:
              </p>
              <p style={contactBoxStyle}>
                Email: info@adroof.in<br />
                Address: GORE ENTERPRISES, House No 4, Kumbhar Wasti, Ravalgaon, Ravalgaon-Guravpimpri Rd, Mirajgaon, Ahmednagar, Maharashtra, India - 414401 (Mob: +91 73502 72829).
              </p>
            </div>
          </div>

          {/* ===== SECTION 2: META / FACEBOOK PRIVACY POLICY ===== */}
          <div style={sectionCard}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h2 style={h2Style}>Privacy Policy for Adroof</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Last Updated: July 1, 2026</p>

              <hr style={hrStyle} />

              <h3 style={h3Style}>1. Introduction</h3>
              <p>
                Gore Enterprises (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the Adroof application and website available at{' '}
                <a href="https://www.adroof.online" target="_blank" rel="noopener noreferrer" style={linkStyle}>https://www.adroof.online</a> (&quot;Service&quot;).
              </p>
              <p>
                This Privacy Policy explains how we collect, use, share, and protect your information when you use our Service, especially when you connect your Facebook and Instagram accounts. We are committed to protecting your privacy and handling your data in an open and transparent manner.
              </p>

              <h3 style={h3Style}>2. Information We Collect</h3>
              <p>
                To provide our social media management services, we collect the following types of information:
              </p>

              <h4 style={{ color: '#0f172a', fontSize: '1.05rem', fontWeight: '600' }}>A. Information You Provide to Us:</h4>
              <ul style={ulStyle}>
                <li><strong>Account Information:</strong> Your name, email address, phone number, and password when you create an Adroof account.</li>
                <li><strong>Business Information:</strong> Your company name, GST details, and billing address for invoicing.</li>
              </ul>

              <h4 style={{ color: '#0f172a', fontSize: '1.05rem', fontWeight: '600' }}>B. Information We Collect from Meta Platforms When You Use Facebook Login:</h4>
              <p>
                When you connect your Facebook account to Adroof, you grant us permission to access the following information via Meta&apos;s APIs:
              </p>
              <ul style={ulStyle}>
                <li><strong>User Profile Data:</strong> Your name, email address, and profile picture.</li>
                <li><strong>Facebook Pages Data:</strong> A list of Facebook Pages you administer, including Page names, Page IDs, and Page Access Tokens. This is required to publish content and fetch analytics on your behalf.</li>
                <li><strong>Instagram Business Accounts Data:</strong> A list of Instagram Business Accounts connected to your Pages, including Instagram User IDs and Access Tokens.</li>
                <li><strong>Page and Post Insights Data:</strong> Metrics such as post reach, impressions, likes, comments, shares, follower count, and audience demographics.</li>
                <li><strong>Advertising Data:</strong> Your Ad Account ID, and data related to campaigns, ad sets, and ads, including spend, impressions, clicks, and other performance metrics. This is accessed via the Marketing API.</li>
                <li><strong>Messaging Data:</strong> If you enable the Messenger feature, we access messages sent to your connected Facebook Pages to display them in Adroof.</li>
              </ul>

              <h4 style={{ color: '#0f172a', fontSize: '1.05rem', fontWeight: '600' }}>C. Technical Data:</h4>
              <ul style={ulStyle}>
                <li><strong>Log and Device Information:</strong> IP address, browser type, operating system, and app usage data for security and performance monitoring.</li>
              </ul>

              <h3 style={h3Style}>3. How We Use Your Information</h3>
              <p>
                We use the information we collect for the following specific purposes:
              </p>
              <ul style={ulStyle}>
                <li><strong>To Provide the Service:</strong> To display your connected Facebook Pages, Instagram Accounts, and Ad Accounts in your Adroof dashboard. To schedule, publish, and manage posts on your behalf when you instruct us to.</li>
                <li><strong>To Generate Analytics:</strong> To create performance reports for your social media content and advertising campaigns.</li>
                <li><strong>To Provide Customer Support:</strong> To respond to your requests and troubleshoot issues.</li>
                <li><strong>To Process Payments:</strong> To manage your subscription and send invoices.</li>
                <li><strong>To Improve Our Service:</strong> To analyze usage patterns to improve features and user experience.</li>
              </ul>
              <p style={{
                background: 'rgba(59, 130, 246, 0.04)',
                borderLeft: '4px solid #3b82f6',
                padding: '12px 16px',
                borderRadius: '0 8px 8px 0',
                fontWeight: '500',
                color: '#0f172a'
              }}>
                We do not use your data for advertising, marketing, or any purpose other than providing Adroof&apos;s core functionality to you.
              </p>

              <h3 style={h3Style}>4. How We Share Your Information</h3>
              <p>
                We do not sell your personal data. We share your information only in the following limited circumstances:
              </p>
              <ul style={ulStyle}>
                <li><strong>With Meta Platforms, Inc.:</strong> We share data with Meta&apos;s APIs to perform actions you request, such as publishing a post or fetching insights. All data transfer is done securely.</li>
                <li><strong>With Service Providers:</strong> We use Amazon Web Services (AWS) for secure cloud hosting in Mumbai, India, and Razorpay for payment processing. These providers are bound by strict confidentiality agreements.</li>
                <li><strong>For Legal Reasons:</strong> We may disclose your information if required by law, subpoena, or other legal process in India.</li>
              </ul>

              <h3 style={h3Style}>5. Facebook Platform Data Use Compliance</h3>
              <p>
                Adroof&apos;s use and transfer of information received from Meta APIs will adhere to the Meta Platform Terms, including the Data Use Restrictions.
              </p>
              <p style={{
                background: 'rgba(22, 163, 74, 0.04)',
                borderLeft: '4px solid #16a34a',
                padding: '12px 16px',
                borderRadius: '0 8px 8px 0',
                fontWeight: '500',
                color: '#0f172a'
              }}>
                ✅ Specifically, we affirm that we will:
              </p>
              <ol style={olStyle}>
                <li>Not sell, license, or purchase any data obtained from Meta.</li>
                <li>Not transfer, share, or disclose Facebook user data to any ad network, data broker, data analytics provider, or other advertising or monetization-related service.</li>
                <li>Not use Facebook user data for the purpose of retargeting, building user profiles, or tracking users across apps and websites.</li>
                <li>Only use the data to provide and improve the direct features of Adroof for the end user who provided the data.</li>
              </ol>

              <h3 style={h3Style}>6. Data Retention and Deletion</h3>
              <p>
                We retain your information only as long as your Adroof account is active or as needed to provide you services.
              </p>
              <p>You have the right to delete your data at any time through the following methods:</p>
              <ol style={olStyle}>
                <li><strong>In-App Deletion:</strong> You can disconnect your Facebook account from within <strong>Adroof Settings &gt; Connected Accounts</strong>. This will immediately revoke our access tokens.</li>
                <li><strong>Email Request:</strong> You can email us at <a href="mailto:support@adroof.in" style={linkStyle}>support@adroof.in</a> with the subject line &quot;Data Deletion Request&quot;. We will permanently delete all your data, including all Meta data and access tokens, from our servers within 7 business days.</li>
                <li><strong>Facebook Data Deletion Callback:</strong> You can also request data deletion directly via Facebook. Instructions are available at:{' '}
                  <a href="https://www.adroof.online/data-deletion" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    https://www.adroof.online/data-deletion
                  </a>
                </li>
              </ol>

              <h3 style={h3Style}>7. Data Security</h3>
              <p>
                We implement industry-standard security measures to protect your data, including SSL encryption for all data in transit, AES-256 encryption for data at rest, and strict access controls. However, no method of transmission over the Internet is 100% secure.
              </p>

              <h3 style={h3Style}>8. Your Rights</h3>
              <p>
                You have the right to access, update, or delete your personal information. You can manage most of your information directly within your Adroof account settings.
              </p>

              <h3 style={h3Style}>9. Children&apos;s Privacy</h3>
              <p>
                Our Service is not intended for use by children under the age of 18. We do not knowingly collect data from children.
              </p>

              <h3 style={h3Style}>10. Changes to This Privacy Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
              </p>

              <h3 style={h3Style}>11. Contact Us</h3>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <p style={contactBoxStyle}>
                <strong>Gore Enterprises</strong><br />
                Email: support@adroof.in<br />
                Address: House No 4, Kumbhar Wasti, Ravalgaon, Ravalgaon-Guravpimpri Rd, Mirajgaon, Ahmednagar, Maharashtra, India - 414401<br />
                Phone: +91 73502 72829
              </p>
            </div>
          </div>

          {/* ===== SECTION 3: GOOGLE ADS & GMB PRIVACY POLICY ===== */}
          <div style={sectionCard}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h2 style={h2Style}>Google Ads &amp; GMB Privacy Policy</h2>
              <p>
                Gore Enterprises (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect information when you interact with us through Google Ads, Google My Business (GMB), our website, or other channels.
              </p>

              <hr style={hrStyle} />

              <h3 style={h3Style}>1. Information We Collect</h3>
              <p>
                We may collect the following types of information through Google Ads, Google My Business, website forms, or phone calls:
              </p>
              <ul style={ulStyle}>
                <li><strong>Personal Information:</strong> Name, phone number, email address, physical address.</li>
                <li><strong>Business Information:</strong> Type of inquiry, service requirements.</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device info, cookies, location data.</li>
                <li><strong>GMB Insights:</strong> Aggregated data from Google My Business such as number of calls, direction requests, and website clicks.</li>
              </ul>

              <h3 style={h3Style}>2. How We Use Your Information</h3>
              <p>
                We use the collected data to:
              </p>
              <ul style={ulStyle}>
                <li>Provide information about our products/services.</li>
                <li>Contact you for quotes, bookings, or customer support.</li>
                <li>Measure and improve the performance of Google Ads campaigns.</li>
                <li>Respond to reviews and messages on Google My Business.</li>
                <li>Comply with legal obligations.</li>
              </ul>

              <h3 style={h3Style}>3. Google Ads and Third-Party Services</h3>
              <p>
                We use Google Ads to promote our business. Google may use cookies to show ads based on your past visits. You can opt out of personalized advertising by visiting Google Ad Settings:{' '}
                <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  https://adssettings.google.com
                </a>
              </p>
              <p>
                Information from Google My Business such as phone number, reviews, and photos is publicly visible and handled according to Google's Privacy Policy:{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  https://policies.google.com/privacy
                </a>
              </p>
              <p>
                If we use Google Analytics, it helps us understand website traffic and user behavior.
              </p>

              <h3 style={h3Style}>4. Data Sharing</h3>
              <p>
                We do not sell your personal data. We may share data only in these cases:
              </p>
              <ul style={ulStyle}>
                <li><strong>Service Providers:</strong> With hosting, CRM, SMS/email services, strictly to provide services to you.</li>
                <li><strong>Google:</strong> Necessary data is shared to run Google Ads and manage GMB.</li>
                <li><strong>Legal Reasons:</strong> If required by law, regulation, or legal request.</li>
              </ul>

              <h3 style={h3Style}>5. Data Security</h3>
              <p>
                We take reasonable technical measures to protect your data. However, no method of transmission over the internet is 100% secure.
              </p>

              <h3 style={h3Style}>6. Your Rights</h3>
              <p>
                You have the right to request access to the personal data we hold about you, ask us to correct or delete your data, or unsubscribe from marketing communications. To exercise these rights, contact us at{' '}
                <a href="mailto:info@adroof.in" style={linkStyle}>
                  info@adroof.in
                </a>.
              </p>

              <h3 style={h3Style}>7. Cookies</h3>
              <p>
                Our website, Google Ads, and GMB use cookies to improve user experience and ad performance. You can manage or disable cookies through your browser settings.
              </p>

              <h3 style={h3Style}>8. Updates to This Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. The latest version will always be posted on this page with a new effective date.
              </p>

              <h3 style={h3Style}>9. Contact Us</h3>
              <p>
                If you have questions about this Privacy Policy, contact:
              </p>
              <p style={contactBoxStyle}>
                <strong>Gore Enterprises</strong><br />
                Address: House No 4, Kumbhar Wasti, Ravalgaon, Ravalgaon-Guravpimpri Rd, Mirajgaon, Ahmednagar, Maharashtra - 414401<br />
                Email: info@adroof.in<br />
                Phone: +91 73502 72829
              </p>
            </div>
          </div>

          {/* ===== SECTION 4: PAYMENT, REFUND & CANCELLATION POLICY ===== */}
          <div style={sectionCard}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h2 style={h2Style}>Payment, Refund &amp; Cancellation Policy</h2>
              <p>
                Gore Enterprises (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the Adroof platform. This Payment Policy outlines the terms governing payments, refunds, cancellations, and how we handle your payment-related data.
              </p>

              <hr style={hrStyle} />

              <h3 style={h3Style}>1. Subscription Payments</h3>
              <p>
                All subscription plans purchased on the Adroof platform are <strong>non-refundable and non-cancellable</strong>. Once a subscription has been activated, no refund or cancellation request will be entertained under any circumstances. By purchasing a subscription, you acknowledge and agree to this policy.
              </p>
              <p style={{
                background: 'rgba(220, 38, 38, 0.04)',
                borderLeft: '4px solid #dc2626',
                padding: '12px 16px',
                borderRadius: '0 8px 8px 0',
                fontWeight: '500',
                color: '#0f172a'
              }}>
                ⚠️ <strong>Important:</strong> Subscriptions are strictly non-refundable. Please review your plan carefully before making a purchase.
              </p>

              <h3 style={h3Style}>2. Booking Service Payments</h3>
              <p>
                For individual booking services (such as hoarding bookings, flyer distribution orders, voice van announcements, or one-time digital campaign bookings), the following refund and cancellation policy applies:
              </p>
              <ul style={ulStyle}>
                <li><strong>Cancellation within 7 days:</strong> If you cancel a booking service within <strong>1 week (7 calendar days)</strong> of the payment date, you are eligible for a full refund.</li>
                <li><strong>Cancellation after 7 days:</strong> Any cancellation request made after 7 days from the date of payment will <strong>not</strong> be eligible for a refund.</li>
                <li><strong>Service already executed:</strong> If the booked service has already been partially or fully delivered/executed, no refund will be issued regardless of the time elapsed.</li>
              </ul>
              <p>
                To request a cancellation or refund for a booking service, please email us at{' '}
                <a href="mailto:info@adroof.in" style={linkStyle}>info@adroof.in</a>{' '}
                with your booking ID and order details.
              </p>

              <h3 style={h3Style}>3. Refund Processing</h3>
              <p>
                Approved refunds will be processed within <strong>7–10 business days</strong> and credited back to the original payment method used at the time of purchase. We are not responsible for any delays caused by your bank or payment provider.
              </p>

              <h3 style={h3Style}>4. Payment Data Collection</h3>
              <p>
                We collect certain payment-related data for <strong>business analytics and operational purposes</strong>, including:
              </p>
              <ul style={ulStyle}>
                <li>Transaction amounts and dates.</li>
                <li>Payment method type (e.g., UPI, net banking, debit card).</li>
                <li>Invoice and billing details.</li>
                <li>Service/subscription purchased.</li>
              </ul>
              <p>
                This data is used solely to analyze business trends, generate financial reports, improve our services, and comply with applicable Indian tax and accounting regulations.
              </p>

              <h3 style={h3Style}>5. No Storage of Sensitive Payment Details</h3>
              <p style={{
                background: 'rgba(22, 163, 74, 0.04)',
                borderLeft: '4px solid #16a34a',
                padding: '12px 16px',
                borderRadius: '0 8px 8px 0',
                fontWeight: '500',
                color: '#0f172a'
              }}>
                🔒 <strong>We do NOT store</strong> your credit card numbers, debit card numbers, CVV, or any other sensitive financial credentials on our servers. All payment transactions are processed securely through our RBI-authorized third-party payment gateway partners.
              </p>

              <h3 style={h3Style}>6. Contact Us</h3>
              <p>
                If you have any questions regarding payments, refunds, or this policy, please contact us:
              </p>
              <p style={contactBoxStyle}>
                <strong>Gore Enterprises</strong><br />
                Address: House No 4, Kumbhar Wasti, Ravalgaon, Ravalgaon-Guravpimpri Rd, Mirajgaon, Ahmednagar, Maharashtra - 414401<br />
                Email: info@adroof.in<br />
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
