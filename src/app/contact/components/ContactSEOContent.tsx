export default function ContactSEOContent() {
  return (
    <section className="py-20 bg-[#0F2854]/[0.03]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* How to Reach Us */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-[clamp(1.625rem,4vw,2.25rem)] font-bold text-[#0F2854] mb-6">
            Contact Astrizion Technologies
          </h2>
          <div className="space-y-4 text-[#0F2854]/70 text-base leading-relaxed">
            <p>
              Astrizion Technologies is based at <strong className="text-[#0F2854]">84, Raja Street, Kaliyamman Kovil Opposite, Komarapalayam — 638183, Namakkal District, Tamil Nadu, India</strong>. You can reach our team by phone at <strong className="text-[#0F2854]">+91 9342436069</strong> or by email at <strong className="text-[#0F2854]">astriziontechnologies@gmail.com</strong>. We respond to all inquiries within 24 hours on business days.
            </p>
            <p>
              Whether you are a startup looking for your first website, a business exploring AI integration, or an enterprise evaluating IT consulting partners — we are happy to have a conversation. We offer a <strong className="text-[#0F2854]">free 30-minute consultation call</strong> with no commitment required, so you can understand exactly how we can help before making any decision.
            </p>
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-16">
          <h2 className="text-[clamp(1.5rem,3.5vw,2rem)] font-bold text-[#0F2854] mb-8 text-center">
            Our Engagement Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: '01',
                title: 'Initial Contact',
                body: 'Fill out our contact form or call +91 9342436069. Tell us about your project — what you need, your goals, and your timeline.',
              },
              {
                step: '02',
                title: 'Discovery Call',
                body: 'We schedule a free 30-minute call to understand your requirements in depth, answer your questions, and evaluate the best approach.',
              },
              {
                step: '03',
                title: 'Proposal & Quote',
                body: 'Within 2–3 business days, we send you a detailed proposal with scope, timeline, technology stack, and transparent pricing.',
              },
              {
                step: '04',
                title: 'Project Kickoff',
                body: 'Once approved, we set up communication channels, define milestones, and begin development with regular progress updates.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl border border-[#0F2854]/15 bg-white"
              >
                <div className="text-3xl font-bold text-[#0F2854]/15 mb-3">{item.step}</div>
                <h3 className="text-[#0F2854] font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-[#0F2854]/60 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services & Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

          <div>
            <h2 className="text-[clamp(1.375rem,3vw,1.75rem)] font-bold text-[#0F2854] mb-5">
              Services You Can Enquire About
            </h2>
            <ul className="space-y-2 text-[#0F2854]/70 text-sm">
              {[
                'Custom Web Development (Next.js, React, Django)',
                'Mobile App Development (iOS, Android, React Native)',
                'AI / ML Solutions & LLM Integration',
                'Business Process Automation & RPA',
                'IT Consulting & Digital Transformation',
                'SEO, Google Ads & Digital Marketing',
                'Web Scraping & Data Extraction',
                'E-commerce Development (Shopify, Custom)',
                'SaaS Product Development',
                'Cloud Migration (AWS, GCP)',
              ].map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F2854] shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[clamp(1.375rem,3vw,1.75rem)] font-bold text-[#0F2854] mb-5">
              Areas We Serve
            </h2>
            <p className="text-[#0F2854]/70 text-sm leading-relaxed mb-4">
              While headquartered in Tamil Nadu, Astrizion Technologies serves clients across all of India and internationally:
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-[#0F2854] font-medium text-sm mb-1">India</p>
                <p className="text-[#0F2854]/60 text-sm">Tamil Nadu · Karnataka · Maharashtra · Delhi NCR · Telangana · Andhra Pradesh · Kerala · Gujarat · Rajasthan · West Bengal · Pan-India Remote</p>
              </div>
              <div>
                <p className="text-[#0F2854] font-medium text-sm mb-1">International</p>
                <p className="text-[#0F2854]/60 text-sm">United States · United Kingdom · United Arab Emirates · Singapore · Australia · Canada · Europe</p>
              </div>
            </div>
          </div>

        </div>

        {/* Address Block */}
        <div className="p-6 rounded-2xl border border-[#0F2854]/15 bg-white">
          <h3 className="text-[#0F2854] font-semibold text-base mb-4">Office Address</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-[#0F2854]/50 text-xs uppercase tracking-wider mb-1">Address</p>
              <address className="not-italic text-[#0F2854]/70 leading-relaxed">
                84, Raja Street,<br />
                Kaliyamman Kovil Opposite,<br />
                Komarapalayam — 638183,<br />
                Namakkal (Dt), Tamil Nadu, India
              </address>
            </div>
            <div>
              <p className="text-[#0F2854]/50 text-xs uppercase tracking-wider mb-1">Phone</p>
              <a href="tel:+919342436069" className="text-[#0F2854]/70 hover:text-[#0F2854] transition-colors">+91 9342436069</a>
            </div>
            <div>
              <p className="text-[#0F2854]/50 text-xs uppercase tracking-wider mb-1">Email</p>
              <a href="mailto:astriziontechnologies@gmail.com" className="text-[#0F2854]/70 hover:text-[#0F2854] transition-colors break-all">astriziontechnologies@gmail.com</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
