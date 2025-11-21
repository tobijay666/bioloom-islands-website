"use client"

export function CommunityStats() {
  const stats = [
    { label: "Active Members", value: "2,847", icon: "👥" },
    { label: "Contributions", value: "12,543", icon: "📝" },
    { label: "Conservation Projects", value: "89", icon: "🌱" },
    { label: "Species Protected", value: "1,240", icon: "🦋" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-all group">
          <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
          <div className="text-2xl font-bold text-gradient">{stat.value}</div>
          <div className="text-sm text-foreground/60 mt-2">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
