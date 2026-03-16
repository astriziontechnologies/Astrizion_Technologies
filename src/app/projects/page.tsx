import type { Metadata } from 'next'
import ProjectsHero from './components/ProjectsHero'
import ProjectsGrid from './components/ProjectsGrid'
import ProjectsSEOContent from './components/ProjectsSEOContent'

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Explore the portfolio of Astrizion Technologies — web applications, mobile apps, AI/ML systems, and automation projects delivered for clients across industries in India and globally.',
  keywords: [
    'Astrizion Technologies portfolio', 'IT projects India', 'web development portfolio',
    'mobile app projects', 'AI ML projects', 'software development case studies',
  ],
  alternates: { canonical: 'https://astriziontechnologies.com/projects' },
  openGraph: {
    title: 'Our Projects | Astrizion Technologies',
    description: 'Explore our portfolio of web, mobile, AI, and automation projects delivered for clients across industries.',
    url: 'https://astriziontechnologies.com/projects',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Astrizion Technologies Projects Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Projects | Astrizion Technologies',
    description: 'Explore our portfolio of web, mobile, AI, and automation projects delivered for clients across industries.',
    images: ['/images/og-image.png'],
  },
}

const projectsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Astrizion Technologies — Projects Portfolio',
  url: 'https://astriziontechnologies.com/projects',
  description: 'Portfolio of web applications, mobile apps, AI/ML systems, and automation projects delivered by Astrizion Technologies.',
  publisher: {
    '@type': 'Organization',
    name: 'Astrizion Technologies',
    url: 'https://astriziontechnologies.com',
  },
}

export default function ProjectsPage() {
  return (
    <div style={{ fontFamily: 'var(--font-poppins)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsSEOContent />
    </div>
  )
}
