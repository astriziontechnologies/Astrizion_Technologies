import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { BottomNavbar } from '@/components/BottomNav'
import ScrollToTop from '@/components/ui/ScrollToTop'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Astrizion Technologies — Initiate · Integrate · Innovate',
  description:
    'Astrizion Technologies delivers cutting-edge Web Development, Mobile Apps, AI/ML, Automation, IT Consulting, Digital Marketing and Web Scraping solutions.',
  keywords: ['IT company', 'web development', 'mobile apps', 'AI ML', 'automation', 'IT consulting', 'digital marketing'],
  openGraph: {
    title: 'Astrizion Technologies',
    description: 'Initiate · Integrate · Innovate',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <Navbar />
        <main className="pt-18 sm:pt-20 pb-20 lg:pb-0">{children}</main>
        <Footer />
        <ScrollToTop />
        <BottomNavbar />
      </body>
    </html>
  )
}
