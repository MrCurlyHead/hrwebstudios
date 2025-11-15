import { Metadata } from 'next'
import Image from 'next/image'
import { siteSettings } from '@/site-settings'
import Container from '@/components/Container'
import Button from '@/components/Button'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about HR Studios and our mission to help local businesses establish a professional online presence.',
  openGraph: {
    title: 'About Us | HR Studios',
    description: 'Learn about HR Studios and our mission to help local businesses establish a professional online presence.',
  },
}

export default function About() {
  return (
    <>
      <section className={styles.pageHero}>
        <Container>
          <h1>About Us</h1>
          <p className={styles.pageHeroSubhead}>
            We help local businesses look world-class online.
          </p>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.contentBlock}>
            <h2 className={styles.teamHeading}>The Team</h2>
            <div className={styles.teamGrid}>
              <div className={styles.teamMember}>
                <div className={styles.teamImage}>
                  <Image
                    src="/harry-photo.png"
                    alt="Harry Roberts"
                    width={200}
                    height={200}
                    quality={100}
                    priority
                    className={`${styles.teamPhoto} ${styles.harryPhoto}`}
                  />
                </div>
                <h3>Harry Roberts</h3>
                <p>
                  Harry has 12 years in tech. He handles all the technical work from building 
                  the sites to making sure they run fast and stay secure.
                </p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.teamImage}>
                  <Image
                    src="/ryan-photo.jpg?v=2"
                    alt="Ryan Lawrence"
                    width={200}
                    height={200}
                    className={styles.teamPhoto}
                  />
                </div>
                <h3>Ryan Lawrence</h3>
                <p>
                  Ryan handles the business side and works directly with clients. He manages 
                  projects from start to finish and makes sure you get what you need.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <Container>
          <div className={styles.contentBlock}>
            <h2 className={styles.teamHeading}>Who We Serve</h2>
            <p>
              We build websites for local businesses. You know how to run your business. 
              We know how to build websites. That's it.
            </p>
            <p>
              If you need a professional website but don't want to deal with the technical 
              side of things, we handle everything. We design it, build it, and keep it running. 
              You focus on your business.
            </p>
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.contentBlock}>
            <h2 className={styles.teamHeading}>Our Story</h2>
            <p>
              We started HR Studios because too many local businesses had terrible websites 
              or no website at all. Big agencies charge too much, and DIY website builders 
              take too much time to learn.
            </p>
            <p>
              So we built a service that does it right. We handle the design, development, 
              and support. You get a website that works without the hassle.
            </p>
            <p>
              Now we help businesses across Australia get online with websites that actually 
              represent their work properly.
            </p>
          </div>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <Container>
          <div className={styles.contentBlock}>
            <h2 className={styles.teamHeading}>Our Values</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueItem}>
                <h3>Quality</h3>
                <p>We build sites that look good, load fast, and work on every device.</p>
              </div>
              <div className={styles.valueItem}>
                <h3>Speed</h3>
                <p>You get a draft in 48 hours. We launch fast without cutting corners.</p>
              </div>
              <div className={styles.valueItem}>
                <h3>Clarity</h3>
                <p>No jargon. We tell you what's happening and keep you updated.</p>
              </div>
              <div className={styles.valueItem}>
                <h3>Support</h3>
                <p>We handle updates and maintenance. You focus on your business.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.sectionCta}>
        <Container>
          <div className={styles.ctaContent}>
            <h2>Work with us</h2>
            <p>Ready to get a website? Get in touch.</p>
            <Button href="/contact" variant="primary" size="large">
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

