import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import AboutHero from './components/AboutHero'
import MissionSection from './components/MissionSection'
import ValuesSection from './components/ValuesSection'
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

export const metadata: Metadata = {
  title: 'About Us — Astrizion Technologies',
  description: 'Learn about Astrizion Technologies — our story, mission, values, and the team behind our innovative IT solutions.',
}

export default function AboutPage() {
  return (
    <div className={poppins.className}>
      <AboutHero />
      <MissionSection />
      <ValuesSection />
    </div>
  )
}
