import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import ProjectsHero from './components/ProjectsHero'
import ProjectsGrid from './components/ProjectsGrid'
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

export const metadata: Metadata = {
  title: 'Our Projects — Astrizion Technologies',
  description: 'Explore our portfolio of web, mobile, AI, and automation projects delivered for clients across industries.',
}

export default function ProjectsPage() {
  return (
    <div className={poppins.className}>
      <ProjectsHero />
      <ProjectsGrid />
    </div>
  )
}
