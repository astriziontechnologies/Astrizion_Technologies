import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import ContactHero from './components/ContactHero'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

export const metadata: Metadata = {
  title: 'Contact — Astrizion Technologies',
  description: 'Get in touch with Astrizion Technologies. We would love to hear about your project.',
}

export default function ContactPage() {
  return (
    <div className={poppins.className}>
      <ContactHero />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  )
}
