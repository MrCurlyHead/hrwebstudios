'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { siteSettings } from '@/site-settings'
import Button from './Button'
import Container from './Container'
import Logo from './Logo'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <Container>
        <div className="header-content">
          <Link href="/" className="logo">
            <Logo size={32} className="logo-icon" />
            <span className="logo-text">{siteSettings.brand.name}</span>
          </Link>
          
          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
            {siteSettings.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Button
              href="/contact"
              variant="primary"
              size="small"
              className="header-cta"
            >
              {siteSettings.cta.primary}
            </Button>
            
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: rgba(11, 13, 16, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          transition: all 0.3s ease;
        }

        .header.scrolled {
          background-color: rgba(11, 13, 16, 0.95);
          padding: var(--space-sm) 0;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-lg) 0;
          transition: padding 0.3s ease;
        }

        .header.scrolled .header-content {
          padding: var(--space-md) 0;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          font-size: 1.5rem;
          font-weight: 700;
          color: #E7ECF3;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .logo:hover {
          opacity: 0.8;
        }

        .logo-icon {
          flex-shrink: 0;
        }

        .logo-text {
          display: inline-block;
        }

        .nav {
          display: flex;
          gap: var(--space-xl);
          align-items: center;
        }

        .nav-link {
          color: #B4C0CF;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.2s;
          position: relative;
        }

        .nav-link:hover {
          color: #E7ECF3;
        }

        .nav-link:focus-visible {
          outline: 2px solid #5AA9E6;
          outline-offset: 4px;
          border-radius: 2px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: var(--space-lg);
        }

        .header-cta {
          display: none;
        }

        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: var(--space-sm);
          width: 30px;
          height: 30px;
          justify-content: center;
        }

        .mobile-menu-toggle span {
          display: block;
          width: 100%;
          height: 2px;
          background-color: #E7ECF3;
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .header {
            padding: 0;
          }

          .header-content {
            padding: var(--space-md) 0;
          }

          .header.scrolled .header-content {
            padding: var(--space-sm) 0;
          }

          .logo {
            font-size: 1.25rem;
          }

          .logo-icon {
            width: 28px;
            height: 28px;
          }

          .header-cta {
            display: none;
          }

          .mobile-menu-toggle {
            display: flex;
            width: 44px;
            height: 44px;
            padding: var(--space-sm);
            min-height: 44px;
            justify-content: center;
            align-items: center;
          }

          .nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(11, 13, 16, 0.98);
            backdrop-filter: blur(10px);
            border-top: none;
            flex-direction: column;
            padding: var(--space-4xl) var(--space-lg) var(--space-lg);
            gap: 0;
            transform: translateX(100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            overflow-y: auto;
          }

          .nav.open {
            transform: translateX(0);
            opacity: 1;
            visibility: visible;
          }

          .nav-link {
            width: 100%;
            padding: var(--space-lg) 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            font-size: 1.125rem;
            min-height: 48px;
            display: flex;
            align-items: center;
          }

          .nav-link:last-child {
            border-bottom: none;
          }

          .nav-link:focus-visible {
            outline-offset: -2px;
          }
        }

        @media (min-width: 769px) {
          .header-cta {
            display: block;
          }
        }
      `}</style>
    </header>
  )
}

