import type { Metadata } from 'next'
import AboutHero from './components/AboutHero'
import MissionSection from './components/MissionSection'
import ValuesSection from './components/ValuesSection'
import AboutSEOContent from './components/AboutSEOContent'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Astrizion Technologies — our story, mission, values, and the passionate team building innovative IT solutions in India. We Initiate, Integrate, and Innovate.',
  keywords: ['about Astrizion Technologies', 'IT company India', 'software company Tamil Nadu', 'IT company Namakkal', 'Astrizion mission'],
  alternates: { canonical: 'https://astriziontechnologies.com/about' },
  openGraph: {
    title: 'About Us | Astrizion Technologies',
    description: 'Learn about Astrizion Technologies — our story, mission, values, and the team building innovative IT solutions in India.',
    url: 'https://astriziontechnologies.com/about',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'About Astrizion Technologies' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Astrizion Technologies',
    description: 'Learn about Astrizion Technologies — our story, mission, values, and the team building innovative IT solutions in India.',
    images: ['/images/og-image.png'],
  },
}

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Astrizion Technologies',
  url: 'https://astriziontechnologies.com/about',
  description: 'Learn about Astrizion Technologies — our story, mission, values, and the team building innovative IT solutions in India.',
  publisher: {
    '@type': 'Organization',
    name: 'Astrizion Technologies',
    url: 'https://astriziontechnologies.com',
  },
}

export default function AboutPage() {
  return (
    <div style={{ fontFamily: 'var(--font-poppins)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <AboutSEOContent />
    </div>
  )
}
