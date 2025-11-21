"use client"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">About Our Story</h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 max-w-3xl">
              <p className="text-lg leading-relaxed">
                As Sri Lanka's first synthetic biology-focused biotechnology startup, Bioloom Islands was founded with a vision to harness the power of genetic engineering to solve complex challenges. We are pioneers in designing and building novel biological systems, from microbes to plants, right here in Colombo.
              </p>
            </div>
          </div>

          <div className="space-y-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 max-w-3xl">
              <p className="text-lg leading-relaxed">
                Our mission is to lead bio-innovation in South Asia, creating sustainable solutions for healthcare, agriculture, and conservation. We envision a future where biology is a programmable platform for building a healthier, more resilient world.
              </p>
              <div className="grid md:grid-cols-3 gap-6 pt-4">
                <div className="flex gap-3">
                  <div className="text-2xl">🔬</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Innovation</h4>
                    <p className="text-sm">Cutting-edge genetic engineering</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-2xl">🌍</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Sustainability</h4>
                    <p className="text-sm">Creating lasting solutions for Earth</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-2xl">🤝</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Community</h4>
                    <p className="text-sm">Building local expertise and growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
