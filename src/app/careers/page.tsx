import type { Metadata } from 'next'
import CareersHero from './components/CareersHero'
import Openings from './components/OpeningsSection'
import ApplicationForm from './components/ApplicationForm'

export const metadata: Metadata = {
  title: 'Careers — Astrizion Technologies',
  description: 'Join the Astrizion Technologies team. Explore open positions and build your career in IT, AI, and digital solutions.',
}

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <Openings />
      <ApplicationForm />
    </>
  )
}
