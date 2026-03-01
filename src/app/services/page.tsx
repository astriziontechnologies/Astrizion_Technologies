import type { Metadata } from 'next'
import ServicesHero from './components/ServicesHero'
import ServicesList from './components/ServicesList'
import TechStack from './components/TechStack'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Services — Astrizion Technologies',
  description: 'Explore our full range of IT services: Web Development, Mobile Apps, AI/ML, Automations, IT Consulting, Digital Marketing, and Web Scraping.',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <TechStack />
      <CTASection />
    </>
  )
}
