"use client"

import { useState } from "react"

interface GalleryItemProps {
  title: string
  category: string
  description: string
  image: string
  featured?: boolean
}

export function GalleryItem({ title, category, description, image, featured = false }: GalleryItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`group relative rounded-lg overflow-hidden bg-card border border-border transition-all duration-300 ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      } ${isHovered ? "shadow-xl scale-105" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-muted h-64 md:h-96">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">{category}</span>
          {featured && (
            <span className="text-xs font-bold px-2 py-1 bg-accent/20 text-accent rounded-full">Featured</span>
          )}
        </div>

        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>

        {isHovered && (
          <div className="mt-4 pt-4 border-t border-border animate-in fade-in">
            <button className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors flex items-center gap-2">
              Explore
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
