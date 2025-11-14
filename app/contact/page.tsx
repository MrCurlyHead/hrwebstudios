import { Metadata } from 'next'
import { siteSettings } from '@/site-settings'
import Container from '@/components/Container'
import ContactForm from '@/components/ContactForm'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with HR Studios. Let\'s discuss how we can help your business stand out online.',
  openGraph: {
    title: 'Contact | HR Studios',
    description: 'Get in touch with HR Studios. Let\'s discuss how we can help your business stand out online.',
  },
}

export default function Contact() {
  return (
    <>
      <section className={styles.pageHero}>
        <Container>
          <h1>Contact</h1>
          <p className={styles.pageHeroSubhead}>
            Let's discuss how we can help your business stand out online.
          </p>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.contactLayout}>
            <div className={styles.contactInfo}>
              <h2>Get in Touch</h2>
              <p>
                Ready to upgrade your web presence? We'd love to hear about your 
                project and discuss how we can help. Fill out the form or reach 
                out directly—we're here to help.
              </p>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactDetailItem}>
                  <strong>Email</strong>
                  <a href={`mailto:${siteSettings.contact.email}`}>
                    {siteSettings.contact.email}
                  </a>
                </div>
                <div className={styles.contactDetailItem}>
                  <strong>Phone</strong>
                  <a href={`tel:${siteSettings.contact.phone}`}>
                    {siteSettings.contact.phone}
                  </a>
                </div>
                <div className={styles.contactDetailItem}>
                  <strong>Hours</strong>
                  <p>{siteSettings.contact.hours}</p>
                </div>
                <div className={styles.contactDetailItem}>
                  <strong>Location</strong>
                  <p>{siteSettings.contact.areaServed}</p>
                </div>
              </div>
            </div>

            <div className={styles.contactFormWrapper}>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

