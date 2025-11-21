"use client"

import { useRef } from "react"
import { Header } from "./components/Header"
import { Hero3DScene } from "./components/Hero3DScene"
import { CEOProfileSection } from "./components/CEOProfileSection"
import { AboutSection } from "./components/AboutSection"
import { EducationSection } from "./components/EducationSection"
import { Footer } from "./components/Footer"
import "./App.css"

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <main className="w-full overflow-hidden bg-background">
      <Header />

      {/* Hero Section with 3D Background */}
      <section
        ref={containerRef}
        className="relative w-full h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 dark:from-slate-950 dark:via-blue-950 dark:to-teal-950 flex items-center justify-center overflow-hidden mt-20"
      >
        <Hero3DScene />

        {/* Content overlay */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-none">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Bioloom Islands
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto text-balance">
              Programming Life, Protecting Tomorrow. Pioneering synthetic biology innovation in South Asia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 pointer-events-auto">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Explore Our Work
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <CEOProfileSection />

      <AboutSection />

      <EducationSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
