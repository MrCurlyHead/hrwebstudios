import styles from './ProcessStep.module.css'

interface ProcessStepProps {
  number: string
  title: string
  description: string
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className={styles.processStep}>
      <div className={styles.processNumber}>{number}</div>
      <h3 className={styles.processTitle}>{title}</h3>
      <p className={styles.processDescription}>{description}</p>
    </div>
  )
}

