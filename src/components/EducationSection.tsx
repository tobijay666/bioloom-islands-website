export function EducationSection() {
  const programs = [
    {
      icon: "🧬",
      title: "CRISPR & Genetic Design Workshops",
      description:
        "Hands-on workshops teaching practical applications of CRISPR gene editing technology and synthetic biology design principles.",
    },
    {
      icon: "🌐",
      title: "Webinars with Global Leaders",
      description:
        "Connect with world-renowned experts in synthetic biology, genetic engineering, and biotech innovation.",
    },
    {
      icon: "👨‍🎓",
      title: "Internship Programs",
      description:
        "Opportunities for undergraduate and graduate students to gain real-world experience in cutting-edge biotechnology research.",
    },
    {
      icon: "📊",
      title: "Research Consulting Services",
      description:
        "Help researchers integrate synthetic biology into their work with expert guidance and technical support.",
    },
  ]

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-950 dark:via-blue-950 dark:to-cyan-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Education & Research</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
              Bioloom Islands is committed to building a vibrant synthetic biology ecosystem in Sri Lanka. We partner
              with local universities and institutions to offer comprehensive educational programs and research support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400"
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{program.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join the Bio-Innovation Movement?</h3>
            <p className="text-lg mb-6 opacity-90">
              Partner with us to advance synthetic biology education and research in South Asia.
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
