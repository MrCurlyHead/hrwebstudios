'use client'

import { useState } from 'react'
import Image from 'next/image'
import Container from '@/components/Container'
import Lightbox from '@/components/Lightbox'

const galleryItems = [
  { 
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=900&fit=crop', 
    caption: 'Modern e-commerce design', 
    tag: 'E-commerce' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=900&fit=crop', 
    caption: 'Clean business website', 
    tag: 'Web' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=900&fit=crop', 
    caption: 'Brand identity design', 
    tag: 'Branding' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=900&fit=crop', 
    caption: 'Landing page design', 
    tag: 'Landing Page' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=900&fit=crop', 
    caption: 'Restaurant website', 
    tag: 'Web' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&h=900&fit=crop', 
    caption: 'Fitness studio branding', 
    tag: 'Branding' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=900&fit=crop', 
    caption: 'Service business website', 
    tag: 'Web' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&h=900&fit=crop', 
    caption: 'Online store design', 
    tag: 'E-commerce' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop', 
    caption: 'Professional services site', 
    tag: 'Web' 
  },
]

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryItems.length)
  }

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  return (
    <>
      <section className="page-hero">
        <Container>
          <h1>Gallery</h1>
          <p className="page-hero-subhead">
            Visual showcase of our design work and website projects.
          </p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    openLightbox(index)
                  }
                }}
              >
                <div className="gallery-image">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="gallery-image-content"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="gallery-overlay">
                  <p className="gallery-caption">{item.caption}</p>
                  <span className="gallery-tag">{item.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {lightboxOpen && (
        <Lightbox
          items={galleryItems}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}

      <style jsx>{`
        .page-hero {
          padding: var(--space-4xl) 0 var(--space-3xl);
          text-align: center;
        }

        .page-hero h1 {
          margin-bottom: var(--space-lg);
        }

        .page-hero-subhead {
          font-size: 1.25rem;
          color: #B4C0CF;
          max-width: 600px;
          margin: 0 auto;
        }

        .section {
          padding: var(--space-4xl) 0;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: var(--space-lg);
        }

        .gallery-item {
          position: relative;
          background-color: #11151A;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          aspect-ratio: 4 / 3;
        }

        .gallery-item:hover {
          transform: translateY(-4px);
          border-color: rgba(90, 169, 230, 0.3);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .gallery-item:focus-visible {
          outline: 2px solid #5AA9E6;
          outline-offset: 2px;
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          background-color: #151A21;
          position: relative;
          overflow: hidden;
        }

        .gallery-image-content {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(11, 13, 16, 0.95), transparent);
          padding: var(--space-lg);
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          transform: translateY(0);
        }

        .gallery-caption {
          color: #E7ECF3;
          font-size: 1rem;
          margin-bottom: var(--space-xs);
          max-width: none;
        }

        .gallery-tag {
          color: #5AA9E6;
          font-size: 0.875rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

