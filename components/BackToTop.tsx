'use client'

import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 800)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) return null

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ↑
      <style jsx>{`
        .back-to-top {
          position: fixed;
          bottom: var(--space-xl);
          right: var(--space-xl);
          width: 48px;
          height: 48px;
          background-color: #5AA9E6;
          color: #0B0D10;
          border: none;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(90, 169, 230, 0.3);
        }

        .back-to-top:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(90, 169, 230, 0.4);
        }

        .back-to-top:focus-visible {
          outline: 2px solid #5AA9E6;
          outline-offset: 2px;
        }

        @media (max-width: 768px) {
          .back-to-top {
            bottom: var(--space-lg);
            right: var(--space-lg);
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
    </button>
  )
}

