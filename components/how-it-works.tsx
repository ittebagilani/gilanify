"use client"

import { motion } from "framer-motion"
import { Cormorant_Garamond, Work_Sans } from "next/font/google"
import { MessageSquare, Palette, Code, Rocket } from "lucide-react"

const cgaramond = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const worksans = Work_Sans({ subsets: ["latin"] })

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery & Planning",
    description:
      "We begin with an in-depth consultation to understand your business goals, target audience, and project requirements. This helps us create a strategic roadmap for your success.",
  },
  {
    icon: Palette,
    title: "Design & Prototyping",
    description:
      "Our designers create stunning, user-friendly mockups of your website. We iterate based on your feedback until we achieve the perfect design that represents your brand.",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Our expert developers bring the design to life, building a fast, responsive, and secure website using the latest technologies and best practices.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description:
      "After thorough testing, we launch your website and provide ongoing support and maintenance to ensure your digital presence continues to grow and evolve.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-24 bg-[#f7f5e9]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`${cgaramond.className} text-3xl md:text-4xl font-medium mb-6 text-slate-950`}>
            How We Bring Your Vision to Life
          </h2>
          <p className={`${worksans.className} text-slate-600 text-md`}>
            Our proven process ensures a smooth journey from concept to launch
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-[#fcfaee] rounded-xl p-6 h-full shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative z-10">
                  <div className="mb-4 relative">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                      <step.icon className="w-6 h-6 text-[#4A6670]" />
                    </div>
                    <span className={`${worksans.className} text-sm font-medium text-slate-950`}>Step {index + 1}</span>
                  </div>
                  <h3 className={`${cgaramond.className} text-xl font-semibold mb-3 text-slate-950`}>{step.title}</h3>
                  <p className={`${worksans.className} text-slate-600 text-sm leading-relaxed`}>{step.description}</p>
                </div>
              </div>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-slate-950/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

