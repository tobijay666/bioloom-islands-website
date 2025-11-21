"use client"

import { useEffect, useRef, useState } from "react"
import { DNAHelix, PCRVisualization, ProteinFold, ScientificBackground } from "./ScientificAnimations"

export function Hero3DScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const mouseRef = useRef({ x: 0, y: 0 })
  const [activeTab, setActiveTab] = useState<"dna" | "pcr" | "protein">("dna")

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animation state
    const state = {
      rotation: 0,
      particleRotation: 0,
      scale: 1,
    }

    // Generate island data
    const islands = [
      { x: 0.3, y: 0.4, size: 40, color: "#4a90a4", opacity: 0.8 },
      { x: 0.65, y: 0.5, size: 50, color: "#2d6a7f", opacity: 0.7 },
      { x: 0.2, y: 0.7, size: 35, color: "#5ba8b8", opacity: 0.75 },
      { x: 0.75, y: 0.2, size: 30, color: "#3d7b8f", opacity: 0.8 },
    ]

    // Floating particles
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      r: number
      opacity: number
    }> = []
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.0005,
        vy: (Math.random() - 0.5) * 0.0005,
        r: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    const animate = () => {
      // Clear canvas with subtle background
      ctx.fillStyle = "rgba(250, 251, 252, 0.02)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Update rotation based on mouse
      state.rotation += (mouseRef.current.x - canvas.width / 2) * 0.0001
      state.particleRotation += 0.0001

      ctx.save()
      ctx.translate(centerX, centerY)

      // Draw animated background circles
      ctx.fillStyle = "rgba(74, 144, 164, 0.03)"
      for (let i = 0; i < 5; i++) {
        const radius = (100 + i * 80) * (0.8 + Math.sin(state.particleRotation + i) * 0.2)
        ctx.beginPath()
        ctx.arc(0, 0, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw islands
      islands.forEach((island, index) => {
        ctx.save()
        ctx.rotate(state.rotation * (index % 2 === 0 ? 1 : -1))

        const x = (island.x - 0.5) * canvas.width * 0.6
        const y = (island.y - 0.5) * canvas.height * 0.6

        // Island shadow
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
        ctx.beginPath()
        ctx.ellipse(x + 10, y + 15, island.size * 1.2, island.size * 0.8, 0, 0, Math.PI * 2)
        ctx.fill()

        // Island main shape
        ctx.fillStyle = island.color
        ctx.globalAlpha = island.opacity
        ctx.beginPath()
        ctx.ellipse(x, y, island.size, island.size * 0.8, 0.2, 0, Math.PI * 2)
        ctx.fill()

        // Island highlight
        ctx.fillStyle = "rgba(255, 255, 255, 0.2)"
        ctx.beginPath()
        ctx.ellipse(
          x - island.size * 0.2,
          y - island.size * 0.3,
          island.size * 0.3,
          island.size * 0.2,
          0,
          0,
          Math.PI * 2,
        )
        ctx.fill()

        ctx.restore()
        ctx.globalAlpha = 1
      })

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.opacity = Math.max(0.1, particle.opacity - 0.0001)

        if (particle.x < 0 || particle.x > 1) particle.vx *= -1
        if (particle.y < 0 || particle.y > 1) particle.vy *= -1

        const x = (particle.x - 0.5) * canvas.width * 0.8
        const y = (particle.y - 0.5) * canvas.height * 0.8

        ctx.fillStyle = `rgba(93, 168, 184, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(x, y, particle.r, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.restore()

      requestAnimationFrame(animate)
    }

    animate()
    setIsLoaded(true)

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <ScientificBackground />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
        {/* Tab selector */}
        <div className="flex gap-4 mb-12">
          <button
            onClick={() => setActiveTab("dna")}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              activeTab === "dna"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-300 dark:hover:bg-slate-600"
            }`}
          >
            DNA Helix
          </button>
          <button
            onClick={() => setActiveTab("pcr")}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              activeTab === "pcr"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-300 dark:hover:bg-slate-600"
            }`}
          >
            PCR Cycles
          </button>
          <button
            onClick={() => setActiveTab("protein")}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              activeTab === "protein"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-300 dark:hover:bg-slate-600"
            }`}
          >
            Protein Fold
          </button>
        </div>

        {/* Animation display */}
        <div className="min-h-96 w-full max-w-2xl">
          {activeTab === "dna" && <DNAHelix />}
          {activeTab === "pcr" && <PCRVisualization />}
          {activeTab === "protein" && <ProteinFold />}
        </div>

        {/* Description */}
        <div className="mt-8 text-center max-w-2xl">
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            {activeTab === "dna" &&
              "Visualizing the double helix structure of DNA with rotating strands and base pair connections."}
            {activeTab === "pcr" &&
              "PCR (Polymerase Chain Reaction) cycling through denaturation, annealing, and extension phases."}
            {activeTab === "protein" &&
              "Protein folding simulation showing three-dimensional molecular structure formation."}
          </p>
        </div>
      </div>
    </div>
  )
}
