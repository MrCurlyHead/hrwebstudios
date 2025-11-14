import Link from 'next/link'
import Image from 'next/image'
import styles from './WorkCard.module.css'

interface WorkCardProps {
  image: string
  client: string
  result: string
  href: string
}

// Random Unsplash image IDs for placeholders
const placeholderImages = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop",
]

// Map clients to appropriate image keywords
const getImageUrl = (client: string, imagePath?: string): string => {
  const imageMap: Record<string, string> = {
    "Canberra City FC": "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
    "Coastal Fitness": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    "Tech Solutions Co": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    "Green Thumb Landscaping": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
    "The Local Bookshop": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
    "Wellness Studio": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
  }
  
  if (client === 'Placeholder' && imagePath) {
    // Use the image path to deterministically select a different placeholder image
    const imageIndex = parseInt(imagePath.match(/case-(\d+)\.jpg/)?.[1] || '2') || 2
    return placeholderImages[(imageIndex - 2) % placeholderImages.length]
  }
  
  return imageMap[client] || `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop`
}

export default function WorkCard({ image, client, result, href }: WorkCardProps) {
  const imageUrl = getImageUrl(client, image)
  const isPlaceholder = client === 'Placeholder'
  
  const cardContent = (
    <>
      <div className={styles.workImage}>
        <Image
          src={imageUrl}
          alt={client}
          fill
          className={styles.workImageContent}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.workContent}>
        <h3 className={styles.workClient}>{client}</h3>
        {!isPlaceholder && result && <p className={styles.workResult}>{result}</p>}
        {!isPlaceholder && <span className={styles.workLink}>View Case Study →</span>}
      </div>
    </>
  )
  
  if (isPlaceholder) {
    return (
      <div className={styles.workCard}>
        {cardContent}
      </div>
    )
  }
  
  return (
    <Link href={href} className={styles.workCard}>
      {cardContent}
    </Link>
  )
}

