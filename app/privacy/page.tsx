import { Metadata } from 'next'
import Container from '@/components/Container'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for HR Studios website.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Privacy() {
  return (
    <>
      <section className={styles.pageHero}>
        <Container>
          <h1>Privacy Policy</h1>
          <p className={styles.pageHeroSubhead}>
            Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.privacyContent}>
            <div className={styles.privacySection}>
              <h2>Introduction</h2>
              <p>
                HR Studios ("we", "our", or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard 
                your information when you visit our website.
              </p>
            </div>

            <div className={styles.privacySection}>
              <h2>Information We Collect</h2>
              <p>We may collect information about you in a variety of ways:</p>
              <ul>
                <li><strong>Personal Data:</strong> Name, email address, phone number, company name, and other information you voluntarily provide when contacting us or using our services.</li>
                <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
                <li><strong>Cookies:</strong> We may use cookies and similar tracking technologies to track activity on our website.</li>
              </ul>
            </div>

            <div className={styles.privacySection}>
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and provide customer service</li>
                <li>Send you information about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className={styles.privacySection}>
              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to 
                protect your personal information. However, no method of transmission over 
                the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className={styles.privacySection}>
              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>
            </div>

            <div className={styles.privacySection}>
              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at 
                hello@hrstudios.com.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

