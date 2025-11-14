import { Metadata } from 'next'
import Image from 'next/image'
import { siteSettings } from '@/site-settings'
import Container from '@/components/Container'
import Button from '@/components/Button'
import ServiceCard from '@/components/ServiceCard'
import ProcessStep from '@/components/ProcessStep'
import WorkCard from '@/components/WorkCard'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Websites that make local businesses look world-class. Professional web design, development, and ongoing care.',
  openGraph: {
    title: 'HR Studios - Websites that make local businesses look world-class',
    description: 'Professional web design, development, and ongoing care for local businesses.',
  },
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <h1>Websites that make local businesses look world-class.</h1>
            <p className={styles.heroSubhead}>
              Professional design, lightning-fast performance, SEO-ready, and easy to manage. 
              Done-for-you websites that actually work.
            </p>
            <div className={styles.heroCtas}>
              <Button href="/contact" variant="primary" size="large">
                {siteSettings.cta.primary}
              </Button>
              <Button href="/work" variant="secondary" size="large">
                {siteSettings.cta.secondary}
              </Button>
            </div>
          </div>
        </Container>
        <div className={styles.heroBg} aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
            alt=""
            fill
            className={styles.heroBgImage}
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Key Services */}
      <section className={styles.section}>
        <Container>
          <h2 className={styles.sectionTitle}>What We Offer</h2>
          <div className={styles.servicesGrid}>
            <ServiceCard
              icon="🚀"
              title="Starter Site"
              description="Perfect for new businesses ready to establish their online presence quickly."
            />
            <ServiceCard
              icon="⭐"
              title="Pro Site"
              description="Full-featured websites with advanced functionality and premium design."
            />
            <ServiceCard
              icon="🛒"
              title="E-commerce"
              description="Complete online stores with secure payments and inventory management."
            />
            <ServiceCard
              icon="🔧"
              title="Ongoing Care"
              description="Monthly maintenance, updates, and support to keep your site running smoothly."
            />
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <Container>
          <h2 className={styles.sectionTitle}>How We Work</h2>
          <div className={styles.processGrid}>
            <ProcessStep
              number="01"
              title="Discover"
              description="We gather your content, goals, and brand vision, then propose a clean layout that fits your business."
            />
            <ProcessStep
              number="02"
              title="Build"
              description="Our team designs and develops your site with attention to detail, speed, and mobile-first responsiveness."
            />
            <ProcessStep
              number="03"
              title="Launch & Grow"
              description="We launch your site, set up SEO basics, and provide ongoing support to help you grow online."
            />
          </div>
        </Container>
      </section>

      {/* Highlights/Stats */}
      <section className={styles.section}>
        <Container>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightItem}>
              <div className={styles.highlightValue}>48-hour</div>
              <div className={styles.highlightLabel}>Draft Delivery</div>
            </div>
            <div className={styles.highlightItem}>
              <div className={styles.highlightValue}>100%</div>
              <div className={styles.highlightLabel}>Core Web Vitals Friendly</div>
            </div>
            <div className={styles.highlightItem}>
              <div className={styles.highlightValue}>✓</div>
              <div className={styles.highlightLabel}>Local SEO Setup</div>
            </div>
            <div className={styles.highlightItem}>
              <div className={styles.highlightValue}>24/7</div>
              <div className={styles.highlightLabel}>Support Available</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Work */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <Container>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Work</h2>
            <Link href="/work" className={styles.sectionLink}>
              View All Work →
            </Link>
          </div>
          <div className={styles.workGrid}>
            <WorkCard
              image="/work/case-1.jpg"
              client="Canberra City FC"
              result="Reported zero downtime over an entire year, streamlined team management and stats tracking"
              href="/work/canberra-city-fc"
            />
            <WorkCard
              image="/work/case-2.jpg"
              client="Placeholder"
              result=""
              href="#"
            />
            <WorkCard
              image="/work/case-3.jpg"
              client="Placeholder"
              result=""
              href="#"
            />
          </div>
        </Container>
      </section>

      {/* Trust Strip */}
      <section className={styles.section}>
        <Container>
          <div className={styles.trustStrip}>
            <p className={styles.trustQuote}>
              "HR Studios built us a rock-solid platform that's been running flawlessly for over a year. The stats tracking and team management features have transformed how we operate."
            </p>
            <p className={styles.trustAuthor}>— Canberra City FC Management</p>
          </div>
        </Container>
      </section>

      {/* CTA Band */}
      <section className={styles.sectionCta}>
        <Container>
          <div className={styles.ctaContent}>
            <h2>Ready to upgrade your web presence?</h2>
            <p>Let's discuss how we can help your business stand out online.</p>
            <Button href="/contact" variant="primary" size="large">
              {siteSettings.cta.primary}
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

