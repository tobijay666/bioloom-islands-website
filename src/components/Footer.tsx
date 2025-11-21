export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Platform",
      links: ["Explore Islands", "Gallery", "Community", "Contribute"],
    },
    {
      title: "Resources",
      links: ["Documentation", "Research Papers", "Dataset Library", "API Docs"],
    },
    {
      title: "Community",
      links: ["Join Us", "Forums", "Events", "Newsletter"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Contact", "Press"],
    },
  ]

  const socialLinks = [
    { name: "Twitter", icon: "𝕏", url: "#" },
    { name: "LinkedIn", icon: "in", url: "#" },
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "GitHub", icon: "⚙️", url: "#" },
  ]

  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Bioloom
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Connecting communities to protect and restore Earth's incredible biodiversity.
            </p>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  aria-label={link.name}
                  className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 flex items-center justify-center transition-colors text-sm font-semibold"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-12 pb-12 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-md">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Stay Updated</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              Subscribe to receive updates on new projects and conservation initiatives.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © {currentYear} Bioloom Islands. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-600 dark:text-slate-400">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
