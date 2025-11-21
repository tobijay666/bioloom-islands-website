"use client"

export function DNAHelix() {
  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      <style>{`
        @keyframes dnaRotate {
          from { transform: rotateX(0deg) rotateZ(0deg); }
          to { transform: rotateX(360deg) rotateZ(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .dna-helix {
          animation: dnaRotate 8s linear infinite;
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        .dna-strand {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="dna-helix">
        {/* Left strand */}
        <div
          className="absolute w-1 h-64 bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-600 rounded-full"
          style={{
            left: "-40px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />

        {/* Right strand */}
        <div
          className="absolute w-1 h-64 bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-600 rounded-full"
          style={{
            right: "-40px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />

        {/* Base pairs */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-20 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"
            style={{
              top: `${50 + (i - 6) * 8}%`,
              left: "50%",
              transform: "translateX(-50%)",
              opacity: 0.6 + (1 - Math.abs(i - 6) / 6) * 0.4,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export function PCRVisualization() {
  return (
    <div className="relative w-full h-80 flex items-center justify-center">
      <style>{`
        @keyframes pcrPulse {
          0% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1); opacity: 1; }
          100% { transform: scale(0.8); opacity: 0.5; }
        }
        @keyframes moleculeFloat {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(20px) translateY(-15px); }
          50% { transform: translateX(0px) translateY(-30px); }
          75% { transform: translateX(-20px) translateY(-15px); }
        }
        .pcr-cycle {
          animation: pcrPulse 3s ease-in-out infinite;
        }
        .molecule {
          animation: moleculeFloat 6s ease-in-out infinite;
        }
      `}</style>

      {/* Central PCR tube */}
      <div className="relative w-16 h-48 border-4 border-blue-500 rounded-b-3xl rounded-t-lg bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 pcr-cycle">
        {/* DNA strands inside */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-12 bg-cyan-500 molecule"
            style={{
              left: `${25 + i * 6}%`,
              top: `${20 + Math.random() * 40}%`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Temperature indicators */}
      <div className="absolute left-0 space-y-4 text-xs font-semibold">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
          <span>95°C</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: "0.5s" }} />
          <span>55°C</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: "1s" }} />
          <span>72°C</span>
        </div>
      </div>
    </div>
  )
}

export function ProteinFold() {
  return (
    <div className="relative w-full h-80 flex items-center justify-center">
      <style>{`
        @keyframes proteinFold {
          0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          25% { transform: rotateX(45deg) rotateY(45deg) rotateZ(0deg); }
          50% { transform: rotateX(90deg) rotateY(90deg) rotateZ(45deg); }
          75% { transform: rotateX(45deg) rotateY(45deg) rotateZ(90deg); }
          100% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
        }
        .protein-structure {
          animation: proteinFold 6s ease-in-out infinite;
          transform-style: preserve-3d;
        }
      `}</style>

      <div className="protein-structure" style={{ perspective: "1000px" }}>
        {/* Central hub */}
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-lg" />

        {/* Connecting nodes */}
        {[...Array(6)].map((_, i) => {
          const angle = (i / 6) * Math.PI * 2
          const x = Math.cos(angle) * 80
          const y = Math.sin(angle) * 80

          return (
            <div key={i}>
              {/* Line to node */}
              <div
                className="absolute w-20 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translateX(-50%) translateY(-50%) rotate(${angle}rad)`,
                  transformOrigin: "left center",
                }}
              />

              {/* Node */}
              <div
                className="absolute w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-md"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function ScientificBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -50px); }
          66% { transform: translate(-20px, 30px); }
        }
        @keyframes pulse-ring {
          0%, 100% { r: 0; opacity: 0.5; }
          50% { r: 120px; opacity: 0; }
        }
        .drift-particle {
          animation: drift 20s ease-in-out infinite;
        }
        .pulse-ring {
          animation: pulse-ring 3s ease-out infinite;
        }
      `}</style>

      {/* Animated SVG background with scientific elements */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
        {/* Pulsing circles at key points */}
        {[...Array(4)].map((_, i) => (
          <circle
            key={`pulse-${i}`}
            cx={`${25 + i * 25}%`}
            cy={`${30 + (i % 2) * 40}%`}
            r="0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="pulse-ring"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>

      {/* Floating particle elements */}
      <div
        className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl drift-particle"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl drift-particle"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl drift-particle"
        style={{ animationDelay: "4s" }}
      />
    </div>
  )
}
