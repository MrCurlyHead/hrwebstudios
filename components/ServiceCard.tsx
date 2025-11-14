import styles from './ServiceCard.module.css'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceIcon}>{icon}</div>
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceDescription}>{description}</p>
    </div>
  )
}

