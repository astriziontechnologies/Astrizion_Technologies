import type { Metadata } from 'next'
import AboutHero from './components/AboutHero'
import MissionSection from './components/MissionSection'
import ValuesSection from './components/ValuesSection'
import TeamSection from './components/TeamSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'About Us — Astrizion Technologies',
  description: 'Learn about Astrizion Technologies — our story, mission, values, and the team behind our innovative IT solutions.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <CTASection />
    </>
  )
}
