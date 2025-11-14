import Link from 'next/link'
import { siteSettings } from '@/site-settings'
import Container from './Container'
import Button from './Button'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = siteSettings.company.copyrightYear

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <Link href="/" className={styles.footerLogo}>
              {siteSettings.brand.name}
            </Link>
            <p className={styles.footerTagline}>{siteSettings.brand.tagline}</p>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>Quick Links</h3>
            <nav className={styles.footerNav}>
              {siteSettings.navigation.map((item) => (
                <Link key={item.href} href={item.href} className={styles.footerLink}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>Contact</h3>
            <div className={styles.footerContact}>
              <p>{siteSettings.contact.email}</p>
              <p>{siteSettings.contact.phone}</p>
              <p>{siteSettings.contact.address}</p>
              <p>{siteSettings.contact.hours}</p>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>Get Started</h3>
            <p className={styles.footerCtaText}>Ready to upgrade your web presence?</p>
            <Button href="/contact" variant="secondary" size="small">
              {siteSettings.cta.footer}
            </Button>
            <div className={styles.footerSocial}>
              <a
                href={siteSettings.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={styles.socialLink}
              >
                LinkedIn
              </a>
              <a
                href={siteSettings.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialLink}
              >
                Instagram
              </a>
              <a
                href={siteSettings.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.socialLink}
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>
            © {currentYear} {siteSettings.brand.name}. ABN: {siteSettings.company.abn}
          </p>
          <Link href="/privacy" className={styles.footerLinkSmall}>
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  )
}

