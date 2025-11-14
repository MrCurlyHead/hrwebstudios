import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Visual showcase of our design work and website projects.',
  openGraph: {
    title: 'Gallery | HR Studios',
    description: 'Visual showcase of our design work and website projects.',
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

