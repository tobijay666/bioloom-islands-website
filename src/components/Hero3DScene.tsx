"use client"

import { useEffect, useRef, useState } from "react"

export function Hero3DScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

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

    const state = {
      rotation: 0,
      particleRotation: 0,
      scale: 1,
    }

    const islands = [
      { x: 0.3, y: 0.4, size: 40, color: "#4a90a4", opacity: 0.8 },
      { x: 0.65, y: 0.5, size: 50, color: "#2d6a7f", opacity: 0.7 },
      { x: 0.2, y: 0.7, size: 35, color: "#5ba8b8", opacity: 0.75 },
      { x: 0.75, y: 0.2, size: 30, color: "#3d7b8f", opacity: 0.8 },
    ]

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
      ctx.fillStyle = "rgba(250, 251, 252, 0.02)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      state.rotation += (mouseRef.current.x - canvas.width / 2) * 0.0001
      state.particleRotation += 0.0001

      ctx.save()
      ctx.translate(centerX, centerY)

      // Background circles
      ctx.fillStyle = "rgba(74, 144, 164, 0.03)"
      for (let i = 0; i < 5; i++) {
        const radius = (100 + i * 80) * (0.8 + Math.sin(state.particleRotation + i) * 0.2)
        ctx.beginPath()
        ctx.arc(0, 0, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // Islands
      islands.forEach((island, index) => {
        ctx.save()
        ctx.rotate(state.rotation * (index % 2 === 0 ? 1 : -1))

        const x = (island.x - 0.5) * canvas.width * 0.6
        const y = (island.y - 0.5) * canvas.height * 0.6

        ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
        ctx.beginPath()
        ctx.ellipse(x + 10, y + 15, island.size * 1.2, island.size * 0.8, 0, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = island.color
        ctx.globalAlpha = island.opacity
        ctx.beginPath()
        ctx.ellipse(x, y, island.size, island.size * 0.8, 0.2, 0, Math.PI * 2)
        ctx.fill()

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

      // Particles
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
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
            Programming Life,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Protecting Tomorrow
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
            Bioloom Islands pioneers the future of biology from digital design to living function.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Explore Islands
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-white dark:text-white rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 flex flex-col items-center gap-2 animate-bounce">
          <p className="text-slate-600 dark:text-slate-400 text-sm">Scroll to explore</p>
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
