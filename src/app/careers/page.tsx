import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import CareersHero from './components/CareersHero'
import Openings from './components/OpeningsSection'
import ApplicationForm from './components/ApplicationForm'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

export const metadata: Metadata = {
  title: 'Careers — Astrizion Technologies',
  description: 'Join the Astrizion Technologies team. Explore open positions and build your career in IT, AI, and digital solutions.',
}

export default function CareersPage() {
  return (
    <div className={poppins.className}>
      <CareersHero />
      <Openings />
      <ApplicationForm />
    </div>
  )
}
