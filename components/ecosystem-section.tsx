"use client"

import { EcosystemCard } from "./ecosystem-card"

const ecosystems = [
  {
    title: "Coral Reefs",
    description: "Vibrant underwater ecosystems teeming with biodiversity and symbiotic relationships.",
    icon: "🪸",
    color: "#e74c3c",
    organisms: [
      { name: "Coral Polyps", role: "Foundation species", emoji: "🪨" },
      { name: "Clownfish", role: "Symbiotic dweller", emoji: "🐠" },
      { name: "Sea Urchins", role: "Algae consumers", emoji: "🦔" },
      { name: "Sea Turtles", role: "Top predator", emoji: "🐢" },
    ],
  },
  {
    title: "Rainforest Canopy",
    description: "Dense forests bursting with life, where sunlight filters through countless layers.",
    icon: "🌳",
    color: "#27ae60",
    organisms: [
      { name: "Jaguars", role: "Apex predator", emoji: "🐆" },
      { name: "Poison Dart Frogs", role: "Insect controller", emoji: "🐸" },
      { name: "Macaws", role: "Seed disperser", emoji: "🦜" },
      { name: "Lianas", role: "Nutrient cycler", emoji: "🌿" },
    ],
  },
  {
    title: "Alpine Meadows",
    description: "High-altitude ecosystems adapted to extreme cold and intense UV radiation.",
    icon: "❄️",
    color: "#3498db",
    organisms: [
      { name: "Mountain Goats", role: "Grazer", emoji: "🐐" },
      { name: "Alpine Flowers", role: "Primary producer", emoji: "🌼" },
      { name: "Snow Leopards", role: "Predator", emoji: "❄️" },
      { name: "Marmots", role: "Seed spreader", emoji: "🐿️" },
    ],
  },
  {
    title: "Desert Oasis",
    description: "Water-scarce environments where life thrives through remarkable adaptations.",
    icon: "🌵",
    color: "#f39c12",
    organisms: [
      { name: "Camels", role: "Large herbivore", emoji: "🐫" },
      { name: "Scorpions", role: "Nocturnal hunter", emoji: "🦂" },
      { name: "Date Palms", role: "Primary producer", emoji: "🌴" },
      { name: "Desert Beetles", role: "Detritivore", emoji: "🐞" },
    ],
  },
]

export function EcosystemSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ecosystem Mechanics</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore the intricate web of relationships that keep our planet thriving. Click on any biome to discover its
            inhabitants and their roles.
          </p>
        </div>

        {/* Interactive ecosystem grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max">
          {ecosystems.map((ecosystem, idx) => (
            <EcosystemCard key={idx} {...ecosystem} />
          ))}
        </div>

        {/* Key concepts */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Biodiversity",
              description: "The variety of species creates resilience and stability in ecosystems.",
              icon: "🔀",
            },
            {
              title: "Energy Flow",
              description: "Energy moves through ecosystems from producers to consumers to decomposers.",
              icon: "⚡",
            },
            {
              title: "Symbiosis",
              description: "Species often thrive through mutually beneficial relationships.",
              icon: "🤝",
            },
          ].map((concept, idx) => (
            <div key={idx} className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">{concept.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{concept.title}</h3>
              <p className="text-foreground/70 text-sm">{concept.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
