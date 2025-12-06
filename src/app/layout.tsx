import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Yadhukrishnan | Graphic Designer & Video Editor',
  description: 'Portfolio of Yadhukrishnan - Professional Graphic Designer and Video Editor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-white">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
