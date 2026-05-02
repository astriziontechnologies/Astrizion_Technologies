'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { BottomNavbar } from '@/components/BottomNav'
import ScrollToTop from '@/components/ui/ScrollToTop'

const SHELL_HIDDEN_PATHS = ['/crm']

export default function ShellWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideShell = SHELL_HIDDEN_PATHS.some(p => pathname === p || pathname.startsWith(p + '/'))

  if (hideShell) {
    return <>{children}</>
  }

  return (
    <>
      <Navbar />
      <main className="pt-18 sm:pt-20 pb-20 lg:pb-0">{children}</main>
      <Footer />
      <ScrollToTop />
      <BottomNavbar />
    </>
  )
}
