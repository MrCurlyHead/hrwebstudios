import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  target?: string
  rel?: string
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'medium',
  onClick,
  type = 'button',
  className = '',
  target,
  rel,
}: ButtonProps) {
  const baseClasses = `btn btn-${variant} btn-${size} ${className}`

  if (href) {
    return (
      <Link 
        href={href} 
        className={baseClasses} 
        target={target} 
        rel={rel}
        onClick={onClick}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  )
}

