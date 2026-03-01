import type { Metadata } from 'next'
import ProjectsHero from './components/ProjectsHero'
import ProjectsGrid from './components/ProjectsGrid'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Our Projects — Astrizion Technologies',
  description: 'Explore our portfolio of web, mobile, AI, and automation projects delivered for clients across industries.',
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <CTASection />
    </>
  )
}
