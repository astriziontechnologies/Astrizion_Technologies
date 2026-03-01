import { Poppins } from 'next/font/google'
import HeroSection from '@/components/sections/HeroSection'
import ServicesOverview from '@/components/sections/ServicesOverview'
import WhyUsSection from '@/components/sections/WhyUsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import CTASection from '@/components/sections/CTASection'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export default function HomePage() {
  return (
    <div className={poppins.className}>
      <HeroSection />
      <ServicesOverview />
      <WhyUsSection />
      <ProcessSection />
      <CTASection />
    </div>
  )
}
