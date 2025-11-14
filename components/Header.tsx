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

          <Link href="/" className="logo">
            <Logo size={32} className="logo-icon" />
            <span className="logo-text">{siteSettings.brand.name}</span>
          </Link>
          
          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="mobile-menu-links">
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
            </div>
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
          width: 44px;
          height: 44px;
          min-height: 44px;
          justify-content: center;
          align-items: center;
          z-index: 1001;
          position: relative;
          -webkit-tap-highlight-color: transparent;
        }

        .mobile-menu-toggle span {
          display: block;
          width: 24px;
          height: 2px;
          background-color: #E7ECF3;
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        @media (max-width: 768px) {
          .header {
            padding: 0;
          }

          .header-content {
            padding: var(--space-md) 0;
            position: relative;
          }

          .header.scrolled .header-content {
            padding: var(--space-sm) 0;
          }

          .mobile-menu-toggle {
            display: flex;
            order: -1;
            margin-right: auto;
          }

          .logo {
            font-size: 1.25rem;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }

          .logo-icon {
            width: 28px;
            height: 28px;
          }

          .header-cta {
            display: none;
          }

          .nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(11, 13, 16, 0.98);
            backdrop-filter: blur(10px);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0;
            gap: 0;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1001;
            -webkit-overflow-scrolling: touch;
            margin: 0;
          }

          .nav.open {
            opacity: 1;
            visibility: visible;
          }

          .mobile-menu-links {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--space-md);
            padding: var(--space-xl);
            width: 100%;
            max-width: 100%;
          }

          .nav-link {
            width: auto;
            min-width: 200px;
            padding: var(--space-md) var(--space-xl);
            font-size: 1.25rem;
            min-height: 56px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #B4C0CF;
            text-decoration: none;
            transition: all 0.2s;
            -webkit-tap-highlight-color: transparent;
            border: none;
            text-align: center;
          }

          .nav-link:hover,
          .nav-link:active {
            color: #E7ECF3;
            transform: scale(1.05);
          }

          .nav-link:focus-visible {
            outline: 2px solid #5AA9E6;
            outline-offset: 4px;
            border-radius: 4px;
          }
        }

        @media (min-width: 769px) {
          .header-cta {
            display: block;
          }

          .mobile-menu-toggle {
            display: none;
          }

          .logo {
            position: static;
            transform: none;
          }

          .mobile-menu-links {
            display: flex;
            flex-direction: row;
            gap: var(--space-xl);
            align-items: center;
            padding: 0;
          }

          .mobile-menu-links .nav-link {
            width: auto;
            min-width: auto;
            padding: 0;
            border-bottom: none;
            font-size: 0.95rem;
            min-height: auto;
            color: #B4C0CF;
            transform: none;
          }

          .mobile-menu-links .nav-link:hover {
            color: #E7ECF3;
            background-color: transparent;
            transform: none;
          }

          .mobile-menu-links .nav-link:active {
            color: #E7ECF3;
            background-color: transparent;
            transform: none;
          }
        }
      `}</style>
    </header>
  )
}

