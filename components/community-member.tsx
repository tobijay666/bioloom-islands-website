"use client"

import { useState } from "react"

interface CommunityMemberProps {
  name: string
  role: string
  avatar: string
  bio: string
  contributions: number
  specialization: string
}

export function CommunityMember({ name, role, avatar, bio, contributions, specialization }: CommunityMemberProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl flex-shrink-0 overflow-hidden">
          {avatar}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm text-accent font-semibold">{role}</p>
          <p className="text-xs text-foreground/60 mt-1">{specialization}</p>
        </div>
      </div>

      <p className="text-foreground/70 text-sm leading-relaxed mb-4">{bio}</p>

      <div className="flex items-center gap-2 pt-4 border-t border-border">
        <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="text-sm font-semibold">{contributions} Contributions</span>
      </div>

      {isHovered && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 pointer-events-none animate-in fade-in" />
      )}
    </div>
  )
}
