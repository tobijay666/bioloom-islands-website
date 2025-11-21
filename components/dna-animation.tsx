"use client"

import { useEffect, useRef } from "react"

export function DNAAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth * window.devicePixelRatio
    canvas.height = canvas.offsetHeight * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    let animationId: number

    const animate = (time: number) => {
      const t = time * 0.0005

      ctx.fillStyle = "rgb(249, 250, 251)"
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      // Draw DNA helix
      for (let i = 0; i < 8; i++) {
        const x = (width / 8) * (i + 0.5)
        const spiralAmount = Math.sin(t + i * 0.3) * 30

        // Left strand
        ctx.strokeStyle = `rgba(59, 130, 246, ${0.3 + Math.sin(t + i) * 0.2})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(x + spiralAmount, height * 0.3, 4, 0, Math.PI * 2)
        ctx.stroke()

        // Right strand
        ctx.strokeStyle = `rgba(6, 182, 212, ${0.3 + Math.sin(t + i + 1) * 0.2})`
        ctx.beginPath()
        ctx.arc(x - spiralAmount, height * 0.7, 4, 0, Math.PI * 2)
        ctx.stroke()

        // Connection
        ctx.strokeStyle = `rgba(100, 150, 220, ${0.2 + Math.sin(t + i * 0.5) * 0.15})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(x + spiralAmount, height * 0.3)
        ctx.lineTo(x - spiralAmount, height * 0.7)
        ctx.stroke()
      }

      // Draw PCR amplification waves
      const waveAmount = Math.sin(t * 1.5) * 0.5
      for (let i = 0; i < 3; i++) {
        const offset = (t + i * 2) % 3
        const radius = offset * 40 + 10
        const opacity = 1 - offset / 3

        ctx.strokeStyle = `rgba(6, 182, 212, ${opacity * 0.4})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(width * 0.7, height * 0.5, radius, 0, Math.PI * 2)
        ctx.stroke()
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
    />
  )
}
