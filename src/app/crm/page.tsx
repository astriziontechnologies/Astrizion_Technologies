import type { Metadata } from 'next'
import CRMApp from './CRMApp'

export const metadata: Metadata = {
  title: 'CRM — Astrizion Technologies',
  description: 'Astrizion Technologies internal CRM.',
  robots: { index: false, follow: false },
}

export default function CRMPage() {
  return <CRMApp />
}
