import { Metadata } from 'next'
import Container from '@/components/Container'
import Button from '@/components/Button'
import WorkCard from '@/components/WorkCard'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'See examples of our work and the results we\'ve achieved for local businesses.',
  openGraph: {
    title: 'Our Work | HR Studios',
    description: 'See examples of our work and the results we\'ve achieved for local businesses.',
  },
}

const caseStudies = [
  {
    image: '/work/case-1.jpg',
    client: 'Canberra City FC',
    industry: 'Sports & Recreation',
    result: 'Reported zero downtime over an entire year, streamlined team management and stats tracking',
    href: '/work/canberra-city-fc',
  },
  {
    image: '/work/case-2.jpg',
    client: 'Placeholder',
    industry: '',
    result: '',
    href: '#',
  },
  {
    image: '/work/case-3.jpg',
    client: 'Placeholder',
    industry: '',
    result: '',
    href: '#',
  },
  {
    image: '/work/case-4.jpg',
    client: 'Placeholder',
    industry: '',
    result: '',
    href: '#',
  },
  {
    image: '/work/case-5.jpg',
    client: 'Placeholder',
    industry: '',
    result: '',
    href: '#',
  },
  {
    image: '/work/case-6.jpg',
    client: 'Placeholder',
    industry: '',
    result: '',
    href: '#',
  },
]

const industries = ['All', 'Sports & Recreation', 'Health & Fitness', 'Technology', 'Home Services', 'Retail', 'Health & Wellness']

export default function Work() {
  return (
    <>
      <section className={styles.pageHero}>
        <Container>
          <h1>Our Work</h1>
          <p className={styles.pageHeroSubhead}>
            Proof of quality. See the results we've achieved for local businesses.
          </p>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.workGrid}>
            {caseStudies.map((study, index) => (
              <WorkCard
                key={index}
                image={study.image}
                client={study.client}
                result={study.result}
                href={study.href}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.sectionCta}>
        <Container>
          <div className={styles.ctaContent}>
            <h2>Want results like these?</h2>
            <p>Let's discuss how we can help your business achieve similar success online.</p>
            <Button href="/contact" variant="primary" size="large">
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

