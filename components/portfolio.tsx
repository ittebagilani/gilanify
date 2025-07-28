"use client"

import { motion } from "framer-motion"
import { Work_Sans } from "next/font/google"
import { FiArrowUpRight } from "react-icons/fi"
import Link from "next/link"

const worksans = Work_Sans({ subsets: ["latin"] })

const projects = [
  {
    id: 1,
    title: "Shafe Inc",
    description: "A corporate solution for secure data management, powered by AI automation.",
    imgSrc: "/shafe.png",
    link: "#",
  },
  {
    id: 2,
    title: "Lux AI",
    description: "A luxury brand experience enhanced by AI-driven personalization.",
    imgSrc: "/luxai.png",
    link: "#",
  },
  {
    id: 3,
    title: "ORO",
    description: "A minimalist jewelry design platform with AI-optimized workflows.",
    imgSrc: "/oro.png",
    link: "#",
  },
]

const Portfolio = () => {
  return (
    <section className="py-12 md:py-20 bg-[#f6f4eb] text-slate-950">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className={`text-3xl md:text-7xl uppercase text-center mb-12 ${worksans.className}`}>
          Our Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              imgSrc={project.imgSrc}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const Card = ({
  imgSrc,
  title,
  description,
  link,
}: {
  imgSrc: string
  title: string
  description: string
  link: string
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      {/* Image Container */}
      <div className="w-full h-80 relative">
        <img
          src={imgSrc || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="p-4">
        <h3 className={`text-xl font-semibold mb-2 ${worksans.className}`}>
          {title}
        </h3>
        <p className={`text-sm text-slate-700 mb-4 ${worksans.className}`}>
          {description}
        </p>
        <Link
          href={link}
          className="flex items-center text-slate-950 hover:text-slate-700 transition-colors"
        >
          <span className={`text-sm ${worksans.className}`}>View Project</span>
          <FiArrowUpRight className="ml-1 text-lg" />
        </Link>
      </div>
    </motion.div>
  )
}

export default Portfolio