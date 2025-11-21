import { Header } from "./components/Header"
import { Hero3DScene } from "./components/Hero3DScene"
import { CEOProfileSection } from "./components/CEOProfileSection"
import { AboutSection } from "./components/AboutSection"
import { EducationSection } from "./components/EducationSection"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <Hero3DScene />
        <CEOProfileSection />
        <AboutSection />
        <EducationSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
