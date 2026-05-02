import type { Metadata } from 'next'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import './globals.css'
import ShellWrapper from '@/components/ShellWrapper'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
const poppins = Poppins({ variable: '--font-poppins', subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://astriziontechnologies.com'),
  title: {
    default: 'Astrizion Technologies — Web Development, AI & IT Services in India',
    template: '%s | Astrizion Technologies',
  },
  description:
    'Astrizion Technologies is an India-based IT company delivering Web Development, Mobile Apps, AI/ML, Automation, IT Consulting, Digital Marketing, and Web Scraping solutions for businesses worldwide.',
  keywords: [
    'IT company India', 'web development company India', 'mobile app development India',
    'AI ML solutions', 'automation services', 'IT consulting India', 'digital marketing agency India',
    'web scraping services', 'software development Namakkal', 'Next.js development', 'React development',
    'Astrizion Technologies',
  ],
  authors: [{ name: 'Astrizion Technologies', url: 'https://astriziontechnologies.com' }],
  creator: 'Astrizion Technologies',
  publisher: 'Astrizion Technologies',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://astriziontechnologies.com',
    siteName: 'Astrizion Technologies',
    title: 'Astrizion Technologies — Web Development, AI & IT Services in India',
    description:
      'India-based IT company delivering Web Development, Mobile Apps, AI/ML, Automation, IT Consulting, Digital Marketing, and Web Scraping solutions worldwide.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Astrizion Technologies — Initiate · Integrate · Innovate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astrizion Technologies — Web Development, AI & IT Services in India',
    description:
      'India-based IT company delivering Web Development, Mobile Apps, AI/ML, Automation, IT Consulting, Digital Marketing, and Web Scraping solutions worldwide.',
    images: ['/images/og-image.png'],
    creator: '@astriziontechnologies',
  },
  alternates: {
    canonical: 'https://astriziontechnologies.com',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Astrizion Technologies',
  url: 'https://astriziontechnologies.com',
  logo: 'https://astriziontechnologies.com/images/og-image.png',
  description:
    'Astrizion Technologies is an India-based IT company delivering Web Development, Mobile Apps, AI/ML, Automation, IT Consulting, Digital Marketing, and Web Scraping solutions.',
  email: 'astriziontechnologies@gmail.com',
  telephone: '+91-9342436069',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '84, Raja Street, Kaliyamman Kovil Opposite',
    addressLocality: 'Komarapalayam',
    postalCode: '638183',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9342436069',
    contactType: 'customer service',
    availableLanguage: ['English', 'Tamil'],
  },
  sameAs: [
    'https://www.linkedin.com/company/astriziontechnologies',
    'https://twitter.com/astriziontechnologies',
    'https://github.com/astriziontechnologies',
    'https://www.instagram.com/astriziontechnologies',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Astrizion Technologies',
  url: 'https://astriziontechnologies.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://astriziontechnologies.com/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <ShellWrapper>{children}</ShellWrapper>
      </body>
    </html>
  )
}
