export default function ProjectsSEOContent() {
  return (
    <section className="py-20 bg-[#0F2854]/[0.03]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Our Work */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-[clamp(1.625rem,4vw,2.25rem)] font-bold text-[#0F2854] mb-6">
            Our Project Portfolio — Web, Mobile, AI & Automation
          </h2>
          <div className="space-y-4 text-[#0F2854]/70 text-base leading-relaxed">
            <p>
              At Astrizion Technologies, every project we take on is an opportunity to create lasting value for our clients. Our portfolio spans web development, mobile app development, AI/ML systems, business automation, digital marketing, and web scraping — delivering solutions across industries including e-commerce, real estate, healthcare, logistics, education, and finance.
            </p>
            <p>
              We have delivered over 50 projects for clients across India and internationally, each built with production-grade code, tested thoroughly, and optimized for performance. Whether it is a high-converting e-commerce platform, a real-time delivery tracking mobile app, an intelligent document processing AI system, or a fully automated sales pipeline — we bring the same level of engineering excellence to every engagement.
            </p>
          </div>
        </div>

        {/* Project Categories */}
        <div className="mb-20">
          <h2 className="text-[clamp(1.5rem,3.5vw,2rem)] font-bold text-[#0F2854] mb-8 text-center">
            Types of Projects We Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Web Development Projects',
                body: 'We build e-commerce platforms, SaaS applications, business websites, real estate portals, booking systems, CMS-powered sites, and custom enterprise web applications using Next.js, React, Node.js, Python, and Django.',
              },
              {
                title: 'Mobile App Development Projects',
                body: 'Our mobile projects include delivery tracking apps, consumer marketplace apps, on-demand service apps, healthcare apps, and enterprise mobility solutions — built with React Native, Flutter, Swift, and Kotlin.',
              },
              {
                title: 'AI & Machine Learning Projects',
                body: 'We develop AI document analyzers, predictive inventory management systems, NLP-powered chatbots, LLM integrations, computer vision solutions, and recommendation engines using Python, TensorFlow, PyTorch, and OpenAI APIs.',
              },
              {
                title: 'Automation & Web Scraping Projects',
                body: 'We automate CRM pipelines, email workflows, data processing systems, and business reporting. Our web scraping projects include market intelligence scrapers, price monitoring tools, and large-scale data extraction systems.',
              },
              {
                title: 'Digital Marketing Projects',
                body: 'We execute SEO campaigns that achieve 200–400% organic traffic growth, manage Google Ads and Meta Ads campaigns with measurable ROI, and build content strategies that establish topical authority in competitive niches.',
              },
              {
                title: 'IT Consulting & Architecture Projects',
                body: 'We have helped businesses with cloud migration from on-premise to AWS and GCP, legacy system modernization, technology stack assessments, security audits, and team training and upskilling programs.',
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

        {/* How We Work */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-[clamp(1.5rem,3.5vw,2rem)] font-bold text-[#0F2854] mb-6">
            How We Approach Every Project
          </h2>
          <div className="space-y-4 text-[#0F2854]/70 text-base leading-relaxed">
            <p>
              Our project delivery process is structured around three pillars — <strong className="text-[#0F2854]">Initiate</strong>, <strong className="text-[#0F2854]">Integrate</strong>, and <strong className="text-[#0F2854]">Innovate</strong>. We begin with a deep discovery phase to understand your business goals, target users, and technical requirements. We then integrate the right technologies and frameworks — choosing tools based on project needs, not trends. Finally, we innovate by applying creative solutions to complex problems, ensuring the delivered product is not just functional but genuinely exceptional.
            </p>
            <p>
              Every project at Astrizion Technologies is managed with clear communication, regular sprint reviews, and transparent progress tracking. We work as an extension of your team — not just a vendor — which is why our client satisfaction rate is 99%.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {[
            { value: '50+', label: 'Projects Delivered', sub: 'Across industries' },
            { value: '30+', label: 'Happy Clients', sub: 'India & Global' },
            { value: '7+', label: 'Service Areas', sub: 'End-to-end solutions' },
            { value: '99%', label: 'Satisfaction Rate', sub: 'Client verified' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl border border-[#0F2854]/15 bg-white text-center"
            >
              <div className="text-3xl font-bold text-[#0F2854] mb-1">{stat.value}</div>
              <div className="text-[#0F2854] font-medium text-sm mb-0.5">{stat.label}</div>
              <div className="text-[#0F2854]/50 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
