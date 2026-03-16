import type { Metadata } from 'next'
import ServicesHero from './components/ServicesHero'
import ServicesList from './components/ServicesList'
import TechStack from './components/TechStack'
import ServicesFAQ from './components/ServicesFAQ'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Astrizion Technologies offers Web Development, Mobile App Development, AI/ML Solutions, Automation, IT Consulting, Digital Marketing, and Web Scraping services for businesses in India and globally.',
  keywords: [
    'web development services India', 'mobile app development company', 'AI ML solutions India',
    'business automation services', 'IT consulting Tamil Nadu', 'digital marketing agency',
    'web scraping services India', 'software development company', 'React Next.js development',
  ],
  alternates: { canonical: 'https://astriziontechnologies.com/services' },
  openGraph: {
    title: 'Our Services | Astrizion Technologies',
    description: 'Web Development, Mobile Apps, AI/ML, Automation, IT Consulting, Digital Marketing, and Web Scraping — all under one roof.',
    url: 'https://astriziontechnologies.com/services',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Astrizion Technologies Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | Astrizion Technologies',
    description: 'Web Development, Mobile Apps, AI/ML, Automation, IT Consulting, Digital Marketing, and Web Scraping — all under one roof.',
    images: ['/images/og-image.png'],
  },
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Astrizion Technologies Services',
  url: 'https://astriziontechnologies.com/services',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Web Development', url: 'https://astriziontechnologies.com/services#web-dev' },
    { '@type': 'ListItem', position: 2, name: 'Mobile App Development', url: 'https://astriziontechnologies.com/services#mobile' },
    { '@type': 'ListItem', position: 3, name: 'AI / ML Solutions', url: 'https://astriziontechnologies.com/services#ai-ml' },
    { '@type': 'ListItem', position: 4, name: 'Automations', url: 'https://astriziontechnologies.com/services#automation' },
    { '@type': 'ListItem', position: 5, name: 'IT Consulting', url: 'https://astriziontechnologies.com/services#consulting' },
    { '@type': 'ListItem', position: 6, name: 'Digital Marketing', url: 'https://astriziontechnologies.com/services#marketing' },
    { '@type': 'ListItem', position: 7, name: 'Web Scraping', url: 'https://astriziontechnologies.com/services#scraping' },
  ],
}

const servicesFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Astrizion Technologies offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Astrizion Technologies offers Web Development, Mobile App Development (iOS & Android), AI/ML Solutions, Business Automation, IT Consulting, Digital Marketing, and Web Scraping services for businesses in India and globally.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Astrizion Technologies work with international clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Astrizion Technologies works with clients across India and globally, delivering IT solutions for businesses of all sizes — from startups to enterprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies does Astrizion Technologies use for web development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use modern technologies including Next.js, React, Vue.js for frontends, Node.js, Python, and Django for backends, and REST & GraphQL APIs for scalable web applications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Astrizion Technologies build AI-powered applications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We develop AI/ML solutions including machine learning models, NLP systems, computer vision, predictive analytics, LLM integrations (GPT, Claude), and AI-powered chatbots and agents.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I get started with Astrizion Technologies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can get started by visiting our Contact page at astriziontechnologies.com/contact, filling out the contact form, or calling us at +91 9342436069. We offer a free 30-minute consultation call.',
      },
    },
  ],
}

export default function ServicesPage() {
  return (
    <div style={{ fontFamily: 'var(--font-poppins)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqSchema) }}
      />
      <ServicesHero />
      <ServicesList />
      <TechStack />
      <ServicesFAQ />
    </div>
  )
}
