import type { Metadata } from 'next'
import ContactHero from './components/ContactHero'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import ContactSEOContent from './components/ContactSEOContent'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Astrizion Technologies. Call +91 9342436069, email astriziontechnologies@gmail.com, or fill out our contact form. Free 30-minute consultation available.',
  keywords: [
    'contact Astrizion Technologies', 'IT company contact India', 'hire software developer India',
    'web development quote India', 'IT consulting contact Tamil Nadu',
  ],
  alternates: { canonical: 'https://astriziontechnologies.com/contact' },
  openGraph: {
    title: 'Contact Us | Astrizion Technologies',
    description: 'Get in touch with Astrizion Technologies. Free 30-minute consultation — no commitment required.',
    url: 'https://astriziontechnologies.com/contact',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Contact Astrizion Technologies' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Astrizion Technologies',
    description: 'Get in touch with Astrizion Technologies. Free 30-minute consultation — no commitment required.',
    images: ['/images/og-image.png'],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://astriziontechnologies.com',
  name: 'Astrizion Technologies',
  url: 'https://astriziontechnologies.com',
  logo: 'https://astriziontechnologies.com/images/og-image.png',
  image: 'https://astriziontechnologies.com/images/og-image.png',
  description: 'Astrizion Technologies is an India-based IT company delivering Web Development, Mobile Apps, AI/ML, Automation, IT Consulting, Digital Marketing, and Web Scraping solutions.',
  telephone: '+91-9342436069',
  email: 'astriziontechnologies@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '84, Raja Street, Kaliyamman Kovil Opposite',
    addressLocality: 'Komarapalayam',
    addressRegion: 'Tamil Nadu',
    postalCode: '638183',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '11.4500',
    longitude: '77.8833',
  },
  areaServed: ['India', 'Global'],
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9342436069',
    contactType: 'customer service',
    availableLanguage: ['English', 'Tamil'],
    contactOption: 'TollFree',
  },
  hasMap: 'https://maps.google.com/?q=Komarapalayam,Tamil+Nadu,India',
  sameAs: [
    'https://www.linkedin.com/company/astriziontechnologies',
    'https://twitter.com/astriziontechnologies',
    'https://github.com/astriziontechnologies',
    'https://www.instagram.com/astriziontechnologies',
  ],
}

export default function ContactPage() {
  return (
    <div style={{ fontFamily: 'var(--font-poppins)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <ContactHero />
      <ContactSEOContent />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  )
}
