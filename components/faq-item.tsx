"use client"

import { useState } from "react"

interface FAQItemProps {
  question: string
  answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-border rounded-lg overflow-hidden transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
      >
        <h3 className="font-semibold text-left">{question}</h3>
        <svg
          className={`w-5 h-5 text-accent transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-6 py-4 border-t border-border bg-muted/30 animate-in slide-in-from-top-2">
          <p className="text-foreground/70 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}
