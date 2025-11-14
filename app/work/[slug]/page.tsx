import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Container from '@/components/Container'
import Button from '@/components/Button'
import styles from './page.module.css'

const caseStudies: Record<string, {
  title: string
  client: string
  industry: string
  overview: string
  goals: string[]
  solution: string
  results: string[]
  liveUrl?: string
}> = {
  'canberra-city-fc': {
    title: 'Canberra City FC',
    client: 'Canberra City FC',
    industry: 'Sports & Recreation',
    overview: 'Canberra City FC needed a comprehensive team management platform to track player statistics, schedule matches, manage lineups, and record match results. The club required a reliable system that could handle real-time updates and provide easy access for coaches, players, and administrators.',
    goals: [
      'Track detailed player statistics (goals, assists, cards, player of match)',
      'Schedule and manage match events with lineup management',
      'Record match results with goal scorers and assists',
      'Maintain player information database with positions and details',
      'Ensure 100% uptime and reliability for critical match days',
    ],
    solution: 'We built a robust Flask-based web application with comprehensive team management features. The platform includes real-time stats tracking, automated season statistics, match scheduling with lineup management, player database management, and a game-day information system. The application features admin authentication, guest access, and a clean, intuitive interface for both desktop and mobile devices.',
    results: [
      'Reported zero downtime over an entire year',
      'Streamlined team management with automated stats calculation',
      'Efficient match scheduling and lineup management system',
      'Comprehensive player tracking across multiple seasons',
      'Improved team organization with beer duty and support tracking',
      'Real-time access to game-day information and match results',
    ],
    liveUrl: 'https://example.com',
  },
  'coastal-fitness': {
    title: 'Coastal Fitness',
    client: 'Coastal Fitness',
    industry: 'Health & Fitness',
    overview: 'Coastal Fitness wanted to modernize their booking system and create a more engaging online presence to attract new members and streamline class bookings.',
    goals: [
      'Streamline class booking process',
      'Reduce no-shows with automated reminders',
      'Showcase facilities and trainers',
      'Enable online membership sign-ups',
    ],
    solution: 'We created a comprehensive website with integrated booking system, automated email reminders, and a member portal. The design emphasizes the coastal lifestyle and community feel of the gym.',
    results: [
      '50% more class bookings',
      'Streamlined member sign-ups with online forms',
      '40% reduction in no-shows with automated reminders',
      'Increased membership inquiries by 75%',
    ],
  },
  'tech-solutions': {
    title: 'Tech Solutions Co',
    client: 'Tech Solutions Co',
    industry: 'Technology',
    overview: 'A B2B technology consulting firm needed a professional website that would establish credibility and generate qualified leads.',
    goals: [
      'Establish professional online presence',
      'Generate qualified leads',
      'Showcase expertise and case studies',
      'Improve brand perception',
    ],
    solution: 'We developed a clean, professional website with clear service descriptions, case studies, and a strategic contact form. The design emphasizes trust and expertise.',
    results: [
      'Doubled qualified leads within 6 months',
      'Professional presence that reflects company expertise',
      'Improved conversion rate on contact forms',
      'Better brand positioning in the market',
    ],
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const study = caseStudies[params.slug]
  if (!study) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${study.client} | Our Work`,
    description: study.overview,
    openGraph: {
      title: `${study.client} Case Study | HR Studios`,
      description: study.overview,
    },
  }
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const study = caseStudies[params.slug]

  if (!study) {
    notFound()
  }

  return (
    <>
      <section className={styles.pageHero}>
        <div className={styles.heroBg} aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&h=1080&fit=crop"
            alt=""
            fill
            className={styles.heroBgImage}
            priority
            sizes="100vw"
          />
        </div>
        <Container>
          <div className={styles.caseStudyHeader}>
            <span className={styles.caseStudyIndustry}>{study.industry}</span>
            <h1>{study.title}</h1>
            <p className={styles.caseStudyOverview}>{study.overview}</p>
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.caseStudyContent}>
            <div className={`${styles.caseStudySection} ${styles.sectionWithImage}`}>
              <div className={`${styles.sectionImage} ${styles.imageLeft}`}>
                <Image
                  src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop"
                  alt="Team management and planning"
                  width={600}
                  height={400}
                  className={styles.featureImage}
                />
              </div>
              <div className={styles.sectionText}>
                <h2>Goals</h2>
                <ul className={styles.caseStudyList}>
                  {study.goals.map((goal, index) => (
                    <li key={index}>{goal}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={`${styles.caseStudySection} ${styles.sectionWithImage} ${styles.imageRightLayout}`}>
              <div className={styles.sectionText}>
                <h2>Solution</h2>
                <p>{study.solution}</p>
              </div>
              <div className={`${styles.sectionImage} ${styles.imageRight}`}>
                <Image
                  src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&h=400&fit=crop"
                  alt="Soccer team in action"
                  width={600}
                  height={400}
                  className={styles.featureImage}
                />
              </div>
            </div>

            <div className={`${styles.caseStudySection} ${styles.sectionWithImage}`}>
              <div className={`${styles.sectionImage} ${styles.imageLeft}`}>
                <Image
                  src="/canberra-city-fc.jpg"
                  alt="Canberra City FC team"
                  width={600}
                  height={400}
                  className={styles.featureImage}
                />
              </div>
              <div className={styles.sectionText}>
                <h2>Results</h2>
                <ul className={`${styles.caseStudyList} ${styles.caseStudyResults}`}>
                  {study.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>

            {study.liveUrl && (
              <div className={styles.caseStudySection}>
                <Button href={study.liveUrl} variant="secondary" size="large" target="_blank" rel="noopener noreferrer">
                  View Live Site →
                </Button>
              </div>
            )}
          </div>
        </Container>
      </section>

      {study.client === 'Canberra City FC' && (
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <Container>
            <div className={styles.featureShowcase}>
              <h2 className={styles.showcaseTitle}>Platform Features</h2>
              <div className={styles.showcaseGrid}>
                <div className={styles.showcaseItem}>
                  <div className={styles.showcaseImage}>
                    <Image
                      src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&h=400&fit=crop"
                      alt="Soccer team celebrating"
                      width={600}
                      height={400}
                      className={styles.showcaseImg}
                    />
                  </div>
                  <h3>Real-Time Stats Tracking</h3>
                  <p>Comprehensive player statistics including goals, assists, cards, and player of match awards tracked across multiple seasons.</p>
                </div>
                <div className={styles.showcaseItem}>
                  <div className={styles.showcaseImage}>
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                      alt="Match scheduling interface"
                      width={600}
                      height={400}
                      className={styles.showcaseImg}
                    />
                  </div>
                  <h3>Match Scheduling</h3>
                  <p>Easy-to-use event management system for scheduling matches, managing lineups, and tracking opponent information.</p>
                </div>
                <div className={styles.showcaseItem}>
                  <div className={styles.showcaseImage}>
                    <Image
                      src="/player-database.jpg"
                      alt="Player database system"
                      width={600}
                      height={400}
                      className={styles.showcaseImg}
                    />
                  </div>
                  <h3>Player Database</h3>
                  <p>Centralized player information management with positions, shirt numbers, and team organization features.</p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      <section className={styles.sectionCta}>
        <Container>
          <div className={styles.ctaContent}>
            <h2>Want results like these?</h2>
            <p>Let's discuss how we can help your business achieve similar success.</p>
            <Button href="/contact" variant="primary" size="large">
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

