import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import ServicesHero from './components/ServicesHero'
import ServicesList from './components/ServicesList'
import TechStack from './components/TechStack'
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

export const metadata: Metadata = {
  title: 'Services — Astrizion Technologies',
  description: 'Explore our full range of IT services: Web Development, Mobile Apps, AI/ML, Automations, IT Consulting, Digital Marketing, and Web Scraping.',
}

export default function ServicesPage() {
  return (
    <div className={poppins.className}>
      <ServicesHero />
      <ServicesList />
      <TechStack />
    </div>
  )
}
