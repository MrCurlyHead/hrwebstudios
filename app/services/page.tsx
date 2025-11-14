import { Metadata } from 'next'
import { siteSettings } from '@/site-settings'
import Container from '@/components/Container'
import Button from '@/components/Button'
import PricingCard from '@/components/PricingCard'
import FAQ from '@/components/FAQ'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Pick the plan that fits—upgrade anytime. Professional website packages from basic to pro.',
  openGraph: {
    title: 'Services | HR Studios',
    description: 'Pick the plan that fits—upgrade anytime. Professional website packages from basic to pro.',
  },
}

export default function Services() {
  return (
    <>
      <section className={styles.pageHero}>
        <Container>
          <h1>Services</h1>
          <p className={styles.pageHeroSubhead}>
            Pick the plan that fits—upgrade anytime.
          </p>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.pricingGrid}>
            <PricingCard
              name="Basic"
              price="From $2,500"
              ideal="Perfect for new businesses ready to establish their online presence."
              features={[
                'Up to 5 pages',
                'Modern, responsive design',
                'Basic CMS setup',
                'Essential SEO optimization',
                'Contact form',
                'Google Analytics setup',
                'Mobile-optimized',
              ]}
              recommended={false}
            />
            <PricingCard
              name="Standard"
              price="From $4,500"
              ideal="Ideal for established businesses ready to grow online."
              features={[
                'Up to 10 pages',
                'Premium design polish',
                'Full CMS access',
                'Advanced SEO setup',
                'Contact form + integrations',
                'Google Analytics + Search Console',
                'Blog functionality',
                'Performance optimization',
                'Priority support',
              ]}
              recommended={true}
            />
            <PricingCard
              name="Pro"
              price="From $7,500"
              ideal="For businesses needing advanced features and e-commerce."
              features={[
                'Unlimited pages',
                'Custom design & development',
                'Advanced CMS + custom features',
                'Comprehensive SEO strategy',
                'E-commerce functionality',
                'Payment gateway integration',
                'Advanced analytics & reporting',
                'Blog + content management',
                'Performance & security optimization',
                'Dedicated account manager',
                'Ongoing maintenance included (3 months)',
              ]}
              recommended={false}
            />
          </div>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <Container>
          <h2 className={styles.sectionTitle}>Add-ons</h2>
          <div className={styles.addonsGrid}>
            <div className={styles.addonItem}>
              <h3>Logo Refresh</h3>
              <p>Professional logo design or refresh</p>
              <span className={styles.addonPrice}>From $500</span>
            </div>
            <div className={styles.addonItem}>
              <h3>Copywriting</h3>
              <p>Professional website copy tailored to your brand</p>
              <span className={styles.addonPrice}>From $800</span>
            </div>
            <div className={styles.addonItem}>
              <h3>Photo Session</h3>
              <p>Professional photography for your business</p>
              <span className={styles.addonPrice}>From $1,200</span>
            </div>
            <div className={styles.addonItem}>
              <h3>Local SEO</h3>
              <p>Advanced local search optimization</p>
              <span className={styles.addonPrice}>From $600</span>
            </div>
            <div className={styles.addonItem}>
              <h3>Maintenance Plan</h3>
              <p>Monthly updates, backups, and support</p>
              <span className={styles.addonPrice}>From $150/month</span>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <FAQ />
        </Container>
      </section>

      <section className={styles.sectionCta}>
        <Container>
          <div className={styles.ctaContent}>
            <h2>Compare plans with us</h2>
            <p>Not sure which plan fits? Let's discuss your needs and find the right solution.</p>
            <Button href="/contact" variant="primary" size="large">
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

