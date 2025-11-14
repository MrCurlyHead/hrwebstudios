# HR Studios Agency Website

A professional, dark-themed agency website built with Next.js 14, TypeScript, and modern web standards.

## Features

- **Dark Theme Design**: Clean, minimal, and sophisticated dark theme with high contrast
- **6 Main Pages**: Home, About Us, Services, Our Work, Gallery, Contact
- **Responsive Design**: Mobile-first approach with clean hamburger navigation
- **SEO Optimized**: Sitemap, robots.txt, Open Graph tags, and unique metadata per page
- **Accessibility**: Keyboard navigation, focus styles, semantic HTML
- **Performance**: Optimized images, lazy loading, and efficient code splitting
- **Contact Form**: Ready for backend integration (currently logs to console)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable React components
- `/styles` - Global CSS styles
- `/public` - Static assets
- `site-settings.ts` - Centralized brand variables and navigation

## Customization

Edit `site-settings.ts` to update:
- Brand name and tagline
- Contact information
- Social media links
- Navigation items
- CTA button text

## Contact Form

The contact form currently logs submissions to the console. To integrate with a backend:

1. Update `components/ContactForm.tsx`
2. Add your email service (SendGrid, Mailgun, etc.) or API endpoint
3. Configure form submission handler

## License

Copyright © 2024 HR Studios

