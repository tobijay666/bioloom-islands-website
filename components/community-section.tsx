"use client"

import { CommunityMember } from "./community-member"
import { CommunityStats } from "./community-stats"

const communityMembers = [
  {
    name: "Dr. Maya Chen",
    role: "Marine Biologist",
    avatar: "🌊",
    bio: "Leading conservation efforts for coral reef restoration and marine ecosystem protection.",
    contributions: 342,
    specialization: "Oceanography",
  },
  {
    name: "James Rivera",
    role: "Conservation Engineer",
    avatar: "🌳",
    bio: "Developing sustainable technology solutions for wildlife habitat preservation.",
    contributions: 289,
    specialization: "Sustainable Tech",
  },
  {
    name: "Amara Okafor",
    role: "Community Coordinator",
    avatar: "🤝",
    bio: "Organizing grassroots initiatives and building bridges between communities and conservation.",
    contributions: 421,
    specialization: "Social Impact",
  },
  {
    name: "Dr. Kai Nakamura",
    role: "Ecosystem Scientist",
    avatar: "🔬",
    bio: "Researching biodiversity patterns and ecosystem resilience mechanisms.",
    contributions: 267,
    specialization: "Research",
  },
  {
    name: "Sofia Mendes",
    role: "Environmental Educator",
    avatar: "📚",
    bio: "Creating educational content to inspire the next generation of conservationists.",
    contributions: 198,
    specialization: "Education",
  },
  {
    name: "Alex Thompson",
    role: "Field Researcher",
    avatar: "🧭",
    bio: "Conducting on-the-ground studies in remote ecosystems and documenting species diversity.",
    contributions: 356,
    specialization: "Field Studies",
  },
]

export function CommunitySection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Community</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Join thousands of dedicated conservationists, scientists, and nature enthusiasts working together to protect
            and restore our planet's biodiversity.
          </p>
        </div>

        {/* Community Statistics */}
        <div className="mb-16">
          <CommunityStats />
        </div>

        {/* Community Members */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8">Featured Contributors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityMembers.map((member, idx) => (
              <CommunityMember key={idx} {...member} />
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <div className="mt-16 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Join our global community and contribute to conservation projects, share your expertise, and help protect
            Earth's incredible biodiversity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Become a Member
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
