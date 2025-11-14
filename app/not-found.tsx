import Link from 'next/link'
import Container from '@/components/Container'
import Button from '@/components/Button'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <>
      <section className={styles.notFound}>
        <Container>
          <div className={styles.notFoundContent}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you're looking for doesn't exist or has been moved.</p>
            <Button href="/" variant="primary" size="large">
              Back to Home
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

