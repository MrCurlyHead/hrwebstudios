'use client'

import { useEffect } from 'react'
import Image from 'next/image'

interface LightboxProps {
  items: Array<{ image: string; caption: string; tag: string }>
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export default function Lightbox({ items, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose, onNext, onPrev])

  const currentItem = items[currentIndex]

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
          ×
        </button>
        <button className="lightbox-prev" onClick={onPrev} aria-label="Previous image">
          ‹
        </button>
        <button className="lightbox-next" onClick={onNext} aria-label="Next image">
          ›
        </button>
        <div className="lightbox-image">
          <Image
            src={currentItem.image}
            alt={currentItem.caption}
            fill
            className="lightbox-image-content"
            sizes="90vw"
            priority
          />
        </div>
        <div className="lightbox-info">
          <p className="lightbox-caption">{currentItem.caption}</p>
          <span className="lightbox-counter">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      </div>
      <style jsx>{`
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(11, 13, 16, 0.98);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-xl);
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .lightbox-close {
          position: absolute;
          top: -50px;
          right: 0;
          background: none;
          border: none;
          color: #E7ECF3;
          font-size: 3rem;
          cursor: pointer;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.2s;
          z-index: 2001;
        }

        .lightbox-close:hover {
          opacity: 0.7;
        }

        .lightbox-close:focus-visible {
          outline: 2px solid #5AA9E6;
          outline-offset: 2px;
          border-radius: 4px;
        }

        .lightbox-prev,
        .lightbox-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(90, 169, 230, 0.2);
          border: none;
          color: #E7ECF3;
          font-size: 3rem;
          cursor: pointer;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.2s;
          z-index: 2001;
        }

        .lightbox-prev {
          left: -80px;
        }

        .lightbox-next {
          right: -80px;
        }

        .lightbox-prev:hover,
        .lightbox-next:hover {
          background-color: rgba(90, 169, 230, 0.4);
        }

        .lightbox-prev:focus-visible,
        .lightbox-next:focus-visible {
          outline: 2px solid #5AA9E6;
          outline-offset: 2px;
        }

        .lightbox-image {
          width: 100%;
          max-width: 1200px;
          aspect-ratio: 16 / 9;
          background-color: #151A21;
          position: relative;
          border-radius: 8px;
          overflow: hidden;
        }

        .lightbox-image-content {
          object-fit: contain;
          width: 100%;
          height: 100%;
        }

        .lightbox-info {
          margin-top: var(--space-lg);
          text-align: center;
        }

        .lightbox-caption {
          color: #E7ECF3;
          font-size: 1.125rem;
          margin-bottom: var(--space-sm);
          max-width: none;
        }

        .lightbox-counter {
          color: #B4C0CF;
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .lightbox-prev,
          .lightbox-next {
            width: 50px;
            height: 50px;
            font-size: 2rem;
          }

          .lightbox-prev {
            left: 10px;
          }

          .lightbox-next {
            right: 10px;
          }

          .lightbox-close {
            top: 10px;
            right: 10px;
          }
        }
      `}</style>
    </div>
  )
}

