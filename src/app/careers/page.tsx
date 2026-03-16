import type { Metadata } from 'next'
import CareersHero from './components/CareersHero'
import Openings from './components/OpeningsSection'
import ApplicationForm from './components/ApplicationForm'
import CareersCultureContent from './components/CareersCultureContent'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Astrizion Technologies — explore open positions in web development, AI/ML, mobile apps, and digital marketing. Build your career at a fast-growing IT company in India.',
  keywords: [
    'careers Astrizion Technologies', 'IT jobs India', 'software developer jobs Tamil Nadu',
    'web developer jobs Namakkal', 'AI developer jobs India', 'IT company hiring India',
  ],
  alternates: { canonical: 'https://astriziontechnologies.com/careers' },
  openGraph: {
    title: 'Careers | Astrizion Technologies',
    description: 'Join Astrizion Technologies. Explore open positions and build your career in IT, AI, and digital solutions in India.',
    url: 'https://astriziontechnologies.com/careers',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Careers at Astrizion Technologies' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | Astrizion Technologies',
    description: 'Join Astrizion Technologies. Explore open positions and build your career in IT, AI, and digital solutions in India.',
    images: ['/images/og-image.png'],
  },
}

const careersSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Careers at Astrizion Technologies',
  url: 'https://astriziontechnologies.com/careers',
  description: 'Explore open positions at Astrizion Technologies and build your career in IT, AI, and digital solutions.',
  publisher: {
    '@type': 'Organization',
    name: 'Astrizion Technologies',
    url: 'https://astriziontechnologies.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '84, Raja Street, Kaliyamman Kovil Opposite',
      addressLocality: 'Komarapalayam',
      postalCode: '638183',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
  },
}

export default function CareersPage() {
  return (
    <div style={{ fontFamily: 'var(--font-poppins)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }}
      />
      <CareersHero />
      <Openings />
      <CareersCultureContent />
      <ApplicationForm />
    </div>
  )
}
