"use client"

import { FAQItem } from "./faq-item"

const faqs = [
  {
    question: "What is Bioloom Islands?",
    answer:
      "Bioloom Islands is an interactive digital platform that showcases interconnected ecosystems and fosters global collaboration on conservation. It combines immersive 3D visualization with educational content and community engagement to inspire action for biodiversity protection.",
  },
  {
    question: "How can I join the community?",
    answer:
      'You can join our community by clicking the "Become a Member" button in the Community section. Simply fill out your profile, select your areas of interest, and you\'ll gain access to conservation projects, discussion forums, and collaboration opportunities with like-minded individuals worldwide.',
  },
  {
    question: "What types of conservation projects are available?",
    answer:
      "Our platform hosts a diverse range of projects including coral reef restoration, rainforest preservation, species monitoring, sustainable agriculture, and climate action initiatives. You can contribute by sharing expertise, volunteering time, providing funding, or simply spreading awareness.",
  },
  {
    question: "Is there a cost to participate?",
    answer:
      "Basic community membership is completely free! We believe conservation should be accessible to everyone. We do offer premium features and enhanced tools for organizations and dedicated contributors, but all core features remain available at no cost.",
  },
  {
    question: "How is the 3D ecosystem visualization created?",
    answer:
      "Our interactive 3D environments use advanced canvas-based rendering to create responsive, performant visualizations of real ecosystems. These are continuously updated with the latest biodiversity data and scientific research to provide accurate representations of nature.",
  },
  {
    question: "Can I contribute my own research or data?",
    answer:
      "We welcome contributions from scientists, researchers, and nature enthusiasts. You can submit datasets, research findings, photos, and observations through our contributor dashboard. Our team reviews submissions to ensure quality and scientific accuracy.",
  },
]

export function FAQSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-foreground/70">
            Find answers to common questions about Bioloom Islands and how to get involved.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Additional support */}
        <div className="mt-12 p-8 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 text-center">
          <h3 className="text-xl font-bold mb-2">Didn't find your answer?</h3>
          <p className="text-foreground/70 mb-4">
            Our support team is here to help. Reach out to us directly for any questions or concerns.
          </p>
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}
