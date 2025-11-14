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
            <div className="mobile-menu-header">
              <Link href="/" className="mobile-menu-logo" onClick={() => setIsMobileMenuOpen(false)}>
                <Logo size={28} className="logo-icon" />
                <span className="logo-text">{siteSettings.brand.name}</span>
              </Link>
              <button
                className="mobile-menu-close"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
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
              <Link
                href="/contact"
                className="nav-link nav-link-cta"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {siteSettings.cta.primary}
              </Link>
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
            padding: 0;
            gap: 0;
            transform: translateX(100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }

          .nav.open {
            transform: translateX(0);
            opacity: 1;
            visibility: visible;
          }

          .mobile-menu-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: var(--space-md) var(--space-lg);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            background-color: rgba(11, 13, 16, 0.95);
            position: sticky;
            top: 0;
            z-index: 1001;
          }

          .mobile-menu-logo {
            display: flex;
            align-items: center;
            gap: var(--space-sm);
            font-size: 1.25rem;
            font-weight: 700;
            color: #E7ECF3;
            text-decoration: none;
          }

          .mobile-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 44px;
            height: 44px;
            min-height: 44px;
            background: none;
            border: none;
            cursor: pointer;
            color: #E7ECF3;
            padding: var(--space-sm);
            border-radius: 4px;
            transition: background-color 0.2s;
            -webkit-tap-highlight-color: transparent;
          }

          .mobile-menu-close:hover,
          .mobile-menu-close:active {
            background-color: rgba(255, 255, 255, 0.1);
          }

          .mobile-menu-close:focus-visible {
            outline: 2px solid #5AA9E6;
            outline-offset: 2px;
          }

          .mobile-menu-links {
            display: flex;
            flex-direction: column;
            padding: var(--space-lg) 0;
          }

          .nav-link {
            width: 100%;
            padding: var(--space-lg) var(--space-lg);
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            font-size: 1.125rem;
            min-height: 56px;
            display: flex;
            align-items: center;
            color: #B4C0CF;
            text-decoration: none;
            transition: all 0.2s;
            -webkit-tap-highlight-color: transparent;
          }

          .nav-link:hover,
          .nav-link:active {
            background-color: rgba(255, 255, 255, 0.05);
            color: #E7ECF3;
            padding-left: calc(var(--space-lg) + var(--space-sm));
          }

          .nav-link:last-child {
            border-bottom: none;
          }

          .nav-link.nav-link-cta {
            background-color: #5AA9E6;
            color: #0B0D10;
            font-weight: 600;
            margin: var(--space-md) var(--space-lg) 0;
            border-radius: 8px;
            border-bottom: none;
            justify-content: center;
            min-height: 52px;
          }

          .nav-link.nav-link-cta:hover,
          .nav-link.nav-link-cta:active {
            background-color: #4A95D6;
            padding-left: var(--space-lg);
          }

          .nav-link:focus-visible {
            outline: 2px solid #5AA9E6;
            outline-offset: -2px;
          }
        }

        @media (min-width: 769px) {
          .header-cta {
            display: block;
          }

          .mobile-menu-header {
            display: none;
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
            padding: 0;
            border-bottom: none;
            font-size: 0.95rem;
            min-height: auto;
            color: #B4C0CF;
          }

          .mobile-menu-links .nav-link:hover {
            color: #E7ECF3;
            background-color: transparent;
            padding-left: 0;
          }

          .mobile-menu-links .nav-link:active {
            color: #E7ECF3;
            background-color: transparent;
            padding-left: 0;
          }

          .mobile-menu-links .nav-link.nav-link-cta {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}

