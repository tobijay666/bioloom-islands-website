"use client"

import { useState } from "react"

interface EcosystemCardProps {
  title: string
  description: string
  icon: string
  color: string
  organisms: Array<{
    name: string
    role: string
    emoji: string
  }>
}

export function EcosystemCard({ title, description, icon, color, organisms }: EcosystemCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`group relative p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
        isExpanded ? "col-span-2 row-span-2" : ""
      }`}
      style={{
        borderColor: color,
        backgroundColor: `${color}08`,
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Background glow effect */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
        style={{
          backgroundColor: color,
          opacity: "0.05",
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-3xl">{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>

        <p className="text-foreground/70 mb-4 text-sm leading-relaxed">{description}</p>

        {isExpanded && (
          <div className="animate-in fade-in slide-in-from-bottom-2 mt-6 space-y-4">
            <div className="border-t" style={{ borderColor: color + "40" }} />
            <div className="grid grid-cols-1 gap-3 mt-4">
              <h4 className="font-semibold text-sm">Organisms in this ecosystem:</h4>
              {organisms.map((organism, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-md transition-all hover:scale-105"
                  style={{
                    backgroundColor: color + "15",
                    borderLeft: `3px solid ${color}`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{organism.emoji}</span>
                    <span className="font-semibold text-sm">{organism.name}</span>
                  </div>
                  <p className="text-xs text-foreground/60">{organism.role}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-semibold opacity-60">BIOME</span>
          <svg
            className={`w-5 h-5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}
