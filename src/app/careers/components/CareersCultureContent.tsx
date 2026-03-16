export default function CareersCultureContent() {
  return (
    <section className="py-20 bg-[#0F2854]/[0.03]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Why Join */}
        <div className="mb-16">
          <h2 className="text-[clamp(1.625rem,4vw,2.25rem)] font-bold text-[#0F2854] mb-6">
            Why Build Your Career at Astrizion Technologies?
          </h2>
          <div className="space-y-4 text-[#0F2854]/70 text-base leading-relaxed">
            <p>
              Astrizion Technologies is a fast-growing IT company based in Komarapalayam, Tamil Nadu, offering careers in software development, mobile app development, AI/ML engineering, digital marketing, and IT consulting. We are a remote-first organization, which means you can work from anywhere in India while contributing to projects that serve clients globally.
            </p>
            <p>
              We believe the best products are built by people who are genuinely passionate about technology. At Astrizion Technologies, you will work on real client projects from day one — not on isolated tasks or internal tools, but on production systems that reach real users and create real business impact. You will be mentored by experienced engineers, given ownership over your work, and encouraged to suggest and implement improvements.
            </p>
          </div>
        </div>

        {/* Culture Grid */}
        <div className="mb-16">
          <h2 className="text-[clamp(1.5rem,3.5vw,2rem)] font-bold text-[#0F2854] mb-8">
            Our Work Culture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Remote-First & Flexible',
                body: 'We are a remote-first team. You have the flexibility to work from home or anywhere in India. We trust our people to manage their time effectively and deliver results — not just clock hours.',
              },
              {
                title: 'Real Projects, Real Impact',
                body: 'Every intern and full-time employee at Astrizion Technologies works on live client projects. You will see the results of your work in production, used by real businesses and real users.',
              },
              {
                title: 'Learning & Growth',
                body: 'Technology evolves fast, and so do we. We encourage continuous learning, provide access to modern tools and frameworks, and support your professional development in whichever direction you want to grow.',
              },
              {
                title: 'Collaborative & Transparent',
                body: 'We work as a team, not in silos. Open communication, peer code reviews, honest feedback, and team-wide knowledge sharing are core to how we operate every day.',
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

        {/* Roles We Hire */}
        <div className="mb-16">
          <h2 className="text-[clamp(1.5rem,3.5vw,2rem)] font-bold text-[#0F2854] mb-6">
            Roles We Hire For
          </h2>
          <p className="text-[#0F2854]/70 text-base leading-relaxed mb-6">
            We hire talented individuals across a range of disciplines. Current and recurring openings at Astrizion Technologies include:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#0F2854]/70 text-sm">
            {[
              'Full Stack Web Developer (Next.js / Node.js)',
              'Mobile App Developer (React Native / Flutter)',
              'AI / ML Engineer (Python / TensorFlow / PyTorch)',
              'Digital Marketing Specialist (SEO / Google Ads)',
              'UI/UX Designer (Figma)',
              'Backend Developer (Python / Django / FastAPI)',
              'DevOps Engineer (AWS / Docker / Kubernetes)',
              'Web Scraping Developer (Python / Playwright)',
            ].map((role) => (
              <li
                key={role}
                className="flex items-center gap-2 p-3 rounded-xl border border-[#0F2854]/15 bg-white"
              >
                <span className="w-4 h-4 rounded-full bg-[#0F2854] flex items-center justify-center shrink-0">
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {role}
              </li>
            ))}
          </ul>
        </div>

        {/* Location note */}
        <div className="p-6 rounded-2xl border border-[#0F2854]/15 bg-white">
          <h3 className="text-[#0F2854] font-semibold text-base mb-3">Location & Working Mode</h3>
          <p className="text-[#0F2854]/65 text-sm leading-relaxed">
            Our head office is at <strong className="text-[#0F2854]">84, Raja Street, Kaliyamman Kovil Opposite, Komarapalayam — 638183, Namakkal District, Tamil Nadu, India</strong>. All current openings are remote or hybrid, open to candidates across India. We particularly welcome applications from candidates in Tamil Nadu, Karnataka, Andhra Pradesh, Kerala, and Telangana, as well as candidates across India who prefer remote work.
          </p>
        </div>

      </div>
    </section>
  )
}
