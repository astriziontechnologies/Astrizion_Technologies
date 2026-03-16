export default function AboutSEOContent() {
  return (
    <section className="py-20 bg-[#0F2854]/[0.03]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Who We Are */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-[clamp(1.625rem,4vw,2.25rem)] font-bold text-[#0F2854] mb-6">
            Who We Are — Astrizion Technologies
          </h2>
          <div className="space-y-4 text-[#0F2854]/70 text-base leading-relaxed">
            <p>
              Astrizion Technologies is a full-service software development and IT consulting company based in Komarapalayam, Tamil Nadu, India. We partner with startups, small businesses, and enterprises across India and globally to build technology that drives growth, efficiency, and competitive advantage.
            </p>
            <p>
              Founded on the principle that great technology should be accessible to every business, we bring together experienced engineers, creative designers, and strategic thinkers to deliver end-to-end digital solutions. From building a startup&apos;s first web application to deploying AI systems for established enterprises, we handle projects of every scale with the same level of dedication and precision.
            </p>
            <p>
              Our name reflects our ambition — <strong className="text-[#0F2854]">Astrizion Technologies</strong> stands for reaching for the stars while delivering results grounded in real-world impact. Our tagline — <strong className="text-[#0F2854]">Initiate · Integrate · Innovate</strong> — captures exactly how we work: we begin with deep understanding, integrate the right technologies, and continuously innovate to keep our clients ahead.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-20">
          <h2 className="text-[clamp(1.5rem,3.5vw,2rem)] font-bold text-[#0F2854] mb-8 text-center">
            What Astrizion Technologies Does
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Web Development',
                body: 'We design and develop fast, scalable, and SEO-friendly web applications using Next.js, React, Vue.js, Node.js, Python, and Django. From landing pages to complex SaaS platforms, we build for performance and conversion.',
              },
              {
                title: 'Mobile App Development',
                body: 'Our mobile team builds cross-platform and native apps for iOS and Android using React Native, Flutter, Swift, and Kotlin — covering everything from consumer apps to enterprise mobility solutions.',
              },
              {
                title: 'AI & Machine Learning',
                body: 'We develop intelligent systems using TensorFlow, PyTorch, OpenAI, and LangChain — including NLP pipelines, computer vision, predictive analytics, LLM integrations, and AI-powered automation tools.',
              },
              {
                title: 'Business Automation',
                body: 'We automate repetitive business processes using RPA, custom scripts, API integrations, and workflow tools — reducing manual effort, eliminating errors, and freeing your team for high-value work.',
              },
              {
                title: 'IT Consulting',
                body: 'Our consultants provide technology stack assessments, digital transformation strategies, cloud migration planning, security audits, and architecture reviews — helping businesses make smarter technology decisions.',
              },
              {
                title: 'Digital Marketing & Web Scraping',
                body: 'We run data-driven SEO, Google Ads, Meta Ads, and content marketing campaigns, and build robust web scraping systems for competitive intelligence, market research, and large-scale data extraction.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-[#0F2854]/15 bg-white"
              >
                <h3 className="text-[#0F2854] font-semibold text-base mb-3">{item.title}</h3>
                <p className="text-[#0F2854]/65 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Serve */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-[clamp(1.5rem,3.5vw,2rem)] font-bold text-[#0F2854] mb-6">
            Who We Serve
          </h2>
          <p className="text-[#0F2854]/70 text-base leading-relaxed mb-6">
            Astrizion Technologies works with businesses across all industries — including e-commerce, real estate, healthcare, logistics, education, finance, and manufacturing. We serve clients across India including Tamil Nadu, Karnataka, Maharashtra, Delhi, and internationally across the US, UK, UAE, and beyond.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['Startups', 'SMEs', 'Enterprises', 'Agencies'].map((type) => (
              <div
                key={type}
                className="py-4 rounded-xl border border-[#0F2854]/15 bg-white text-center text-[#0F2854] font-medium text-sm"
              >
                {type}
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[clamp(1.5rem,3.5vw,2rem)] font-bold text-[#0F2854] mb-6">
            Our Location
          </h2>
          <p className="text-[#0F2854]/70 text-base leading-relaxed">
            Astrizion Technologies is headquartered at <strong className="text-[#0F2854]">84, Raja Street, Kaliyamman Kovil Opposite, Komarapalayam — 638183, Namakkal District, Tamil Nadu, India</strong>. While our physical office is in Tamil Nadu, we operate as a remote-first company, collaborating with clients and team members across India and globally. You can reach us at <strong className="text-[#0F2854]">+91 9342436069</strong> or <strong className="text-[#0F2854]">astriziontechnologies@gmail.com</strong> any time.
          </p>
        </div>

      </div>
    </section>
  )
}
