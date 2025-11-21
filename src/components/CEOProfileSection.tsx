export function CEOProfileSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-200/20 dark:bg-cyan-800/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-30"></div>
              <img
                src="/images/profile-20image.webp"
                alt="Dr. Lalinka Herath"
                className="relative w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">Dr. Lalinka Herath</h2>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">CEO/CSO</p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                <span className="font-semibold">PhD, MSc, BSc</span>
              </p>
            </div>

            <div className="space-y-4 border-l-4 border-blue-500 pl-6">
              <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                <span className="italic text-blue-600 dark:text-blue-400">
                  "Bioloom Islands pioneers the future of biology from digital design to living function."
                </span>
              </p>
              <p className="text-base text-slate-600 dark:text-slate-400">
                Leading synthetic biology innovation in South Asia with a vision to transform how we design and build
                biological systems for a healthier, more resilient world.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Learn More
              </button>
              <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
