import styles from './PricingCard.module.css'

interface PricingCardProps {
  name: string
  price: string
  ideal: string
  features: string[]
  recommended?: boolean
}

export default function PricingCard({
  name,
  price,
  ideal,
  features,
  recommended = false,
}: PricingCardProps) {
  return (
    <div className={`${styles.pricingCard} ${recommended ? styles.recommended : ''}`}>
      {recommended && <div className={styles.recommendedBadge}>Recommended</div>}
      <h3 className={styles.pricingName}>{name}</h3>
      <div className={styles.pricingPrice}>{price}</div>
      <p className={styles.pricingIdeal}>{ideal}</p>
      <ul className={styles.pricingFeatures}>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  )
}

