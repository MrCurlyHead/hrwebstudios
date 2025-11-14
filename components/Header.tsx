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
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="mobile-menu-header">
              <Link href="/" className="mobile-menu-logo" onClick={() => setIsMobileMenuOpen(false)}>
                <Logo size={32} className="logo-icon" />
                <span className="logo-text">{siteSettings.brand.name}</span>
              </Link>
              <button
                className="mobile-menu-close"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <span></span>
                <span></span>
              </button>
            </div>
            
            <div className="mobile-menu-nav">
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

            <div className="mobile-menu-footer">
              <Button
                href="/contact"
                variant="primary"
                size="large"
                className="mobile-menu-cta"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {siteSettings.cta.primary}
              </Button>
            </div>
          </nav>
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
          width: 24px;
          height: 2px;
          background-color: #E7ECF3;
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        .mobile-menu-toggle.open span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .mobile-menu-toggle.open span:nth-child(2) {
          opacity: 0;
        }

          .mobile-menu-toggle.open span:nth-child(3) {
            transform: rotate(-45deg) translate(6px, -6px);
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
            background-color: #0B0D10;
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 0;
            gap: 0;
            transform: translateX(100%);
            opacity: 0;
            visibility: hidden;
            transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
            z-index: 9999;
            overflow-y: auto;
            display: flex;
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
            padding: var(--space-lg);
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            background-color: rgba(17, 21, 26, 0.5);
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
            background: none;
            border: none;
            cursor: pointer;
            position: relative;
            padding: 0;
          }

          .mobile-menu-close span {
            position: absolute;
            width: 24px;
            height: 2px;
            background-color: #E7ECF3;
            border-radius: 2px;
          }

          .mobile-menu-close span:nth-child(1) {
            transform: rotate(45deg);
          }

          .mobile-menu-close span:nth-child(2) {
            transform: rotate(-45deg);
          }

          .mobile-menu-nav {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding: var(--space-xl) var(--space-lg);
            gap: 0;
          }

          .nav-link {
            width: 100%;
            padding: var(--space-xl) var(--space-lg);
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            font-size: 1.25rem;
            font-weight: 500;
            min-height: 64px;
            display: flex;
            align-items: center;
            color: #E7ECF3;
            text-decoration: none;
            transition: all 0.2s ease;
            background-color: transparent;
          }

          .nav-link:hover {
            background-color: rgba(90, 169, 230, 0.1);
            color: #5AA9E6;
            padding-left: var(--space-xl);
          }

          .nav-link:active {
            background-color: rgba(90, 169, 230, 0.15);
          }

          .nav-link:last-child {
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          }

          .nav-link:focus-visible {
            outline: 2px solid #5AA9E6;
            outline-offset: -2px;
            background-color: rgba(90, 169, 230, 0.1);
          }

          .mobile-menu-footer {
            padding: var(--space-xl) var(--space-lg);
            border-top: 1px solid rgba(255, 255, 255, 0.06);
            background-color: rgba(17, 21, 26, 0.5);
          }

          .mobile-menu-cta {
            width: 100%;
            justify-content: center;
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

