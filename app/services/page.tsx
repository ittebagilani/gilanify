"use client"

import { motion } from "framer-motion"
import { Paintbrush, Code, Smartphone, Zap, Layout, Share2, Fingerprint } from "lucide-react"
import { Cormorant_Garamond, Work_Sans } from "next/font/google"
import Link from "next/link"

const cgaramond = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const worksans = Work_Sans({ subsets: ["latin"] })

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive and performant websites and web applications.",
    details: [
      "Custom website development",
      "E-commerce solutions",
      "Content Management Systems (CMS)",
      "Progressive Web Apps (PWA)",
      "API integration and development",
    ],
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces.",
    details: [
      "User-centered design approach",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing",
      "Responsive design",
    ],
  },
  {
    icon: Fingerprint,
    title: "Branding & Visual Identity",
    description: "Crafting a strong and memorable brand identity for your business.",
    details: [
      "Logo design and brand guidelines",
      "Color schemes and typography selection",
      "Mobile UI/UX best practices",
      "Business cards and marketing materials",
      "Consistent branding across digital platforms",
    ],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Enhancing website speed and efficiency for better user experience.",
    details: [
      "Page load time optimization",
      "Code minification and compression",
      "Caching strategies",
      "Image and asset optimization",
      "Database query optimization",
    ],
  },
  {
    icon: Layout,
    title: "Responsive Web Design",
    description: "Ensuring seamless experiences across all devices and screen sizes.",
    details: [
      "Mobile-first approach",
      "Fluid grid layouts",
      "Flexible images and media",
      "CSS media queries",
      "Touch-friendly interfaces",
    ],
  },
  {
    icon: Share2,
    title: "Web Accessibility",
    description: "Making web content accessible to people with disabilities.",
    details: [
      "WCAG 2.1 compliance",
      "Screen reader compatibility",
      "Keyboard navigation",
      "Color contrast optimization",
      "Accessible forms and interactive elements",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-[#f7f5e9] min-h-screen">
      <motion.header
        className="py-12 md:py-24 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={`${cgaramond.className} text-4xl md:text-5xl font-medium mb-6 text-slate-950 mt-20`}>
          Our Services
        </h1>
        <p className={`${worksans.className} text-md md:text-lg text-slate-700 max-w-3xl mx-auto px-4`}>
          Discover how we can elevate your digital presence with our comprehensive range of services.
        </p>
      </motion.header>

      <main className="container mx-auto px-4 py-12 -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#fcfaee] rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f3f0e0] rounded-full flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 text-slate-700" />
                </div>
                <h2 className={`${cgaramond.className} text-xl font-semibold text-slate-900`}>{service.title}</h2>
              </div>
              <p className={`${worksans.className} text-slate-600 mb-4`}>{service.description}</p>
              <ul className={`${worksans.className} text-slate-700 space-y-2 mb-4`}>
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 mt-1 text-slate-400">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
              <Link
                href={`https://form.typeform.com/to/jGoFtoRI`}
                className={`${worksans.className} text-slate-900 font-semibold hover:text-slate-700 transition-colors`}
              >
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      <motion.footer
        className={`${worksans.className} text-center py-12 text-slate-600`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p>
          Need a custom solution?{" "}
          <Link href="/contact" className="text-slate-900 hover:underline">
            Contact us
          </Link>{" "}
          for a personalized consultation.
        </p>
      </motion.footer>
    </div>
  )
}

