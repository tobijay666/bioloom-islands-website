"use client"

import { useState } from "react"
import { GalleryItem } from "./gallery-item"

const galleryItems = [
  {
    title: "Bioluminescent Organisms",
    category: "Discovery",
    description: "Experience nature's own light show with creatures that glow in the dark.",
    image: "/bioluminescent-organisms-glowing-creatures.jpg",
    featured: true,
  },
  {
    title: "Ancient Forests",
    category: "Exploration",
    description: "Journey through forests older than human civilization.",
    image: "/ancient-forest-old-growth-trees.jpg",
  },
  {
    title: "Butterfly Migration",
    category: "Movement",
    description: "Follow the epic journey of monarch butterflies across continents.",
    image: "/monarch-butterfly-migration.jpg",
  },
  {
    title: "Coral Growth",
    category: "Time-lapse",
    description: "Watch coral colonies build their colorful structures over time.",
    image: "/coral-reef-growth-colorful.jpg",
  },
  {
    title: "Underwater Sanctuaries",
    category: "Innovation",
    description: "Discover protected marine reserves that support thriving ecosystems.",
    image: "/underwater-ocean-sanctuary-fish.jpg",
    featured: true,
  },
  {
    title: "Pollinator Networks",
    category: "Connection",
    description: "See how bees, butterflies, and birds connect flowering plants.",
    image: "/bee-pollinating-flowers-garden.jpg",
  },
]

const categories = ["All", "Discovery", "Exploration", "Movement", "Time-lapse", "Innovation", "Connection"]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Gallery & Discovery</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore a curated collection of the world\'s most remarkable ecosystems and biodiversity moments.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {filteredItems.map((item, idx) => (
            <GalleryItem key={idx} {...item} />
          ))}
        </div>

        {/* Browse all CTA */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  )
}
