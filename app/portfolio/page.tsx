"use client";

import { motion } from "framer-motion";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const cgaramond = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const worksans = Work_Sans({ subsets: ["latin"] });

const projects = [
  {
    title: "Step2 Kitchen Studio",
    image: "/step2kitchen.png", // Reusing image
    description:
      "A kitchen design studio specializing in custom cabinetry and innovative storage solutions.",
    link: "https://step2kitchen.vercel.app/",
  },
  {
    title: "FLO Detailing",
    image: "/flo.png", // Reusing image
    description:
      "Professional car detailing service offering a range of packages for vehicle care.",
    link: "https://flodetailing.com",
  },
  {
    title: "SHAFE Inc",
    image: "/shafe.png",
    description:
    "An architecture firm specializing in sustainable and innovative design solutions.",
    link: "https://shafeinc.com",
  },
  {
    title: "ORO",
    image: "/oro.png",
    description:
      "Premium fragrance e-commerce site offering a curated selection of luxury perfumes.",
    link: "https://orofragrances.com",
  },
  {
    title: "Itteba Gilani",
    image: "/ittebagilani.png",
    description:
      "A simplistic portfolio showcasing the computer scientist Itteba Gilani.",
    link: "https://ittebagilani.vercel.app/",
  },
  {
    title: "Tempest AI",
    image: "/tempest.png",
    description:
      "Advanced AI-powered application allowing conversations with PDFs.",
    link: "https://tempestai.vercel.app/",
  },

  {
    title: "Ittsy Systems",
    image: "/itssy.png", // Reusing image
    description: "Solutions architecture and data integration service company",
    link: "https://ittsy.co",
  },
  {
    title: "TechTips",
    image: "/techtips.png", // Reusing image
    description:
      "Comprehensive tech tutorial platform offering expert advice and cutting-edge insights.",
    link: "https://mytechtips.vercel.app/",
  },
  {
    title: "Code Habit",
    image: "/codehabit.png", // Reusing image
    description: "A platform for developers to track their coding habits.",
    link: "",
    discontinued: true,
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-[#f7f5e9] min-h-screen">
      <motion.header
        className="py-12 md:py-24 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className={`${cgaramond.className} text-4xl md:text-5xl font-medium mb-6 text-slate-950 mt-20`}
        >
          Portfolio
        </h1>
        <p
          className={`${worksans.className} text-md md:text-lg text-slate-700 max-w-3xl mx-auto px-4`}
        >
          A showcase of our recent projects and client collaborations across
          various industries and technologies.
        </p>
      </motion.header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`bg-[#fcfaee] rounded-xl overflow-hidden shadow-lg transition-shadow ${
                project.discontinued ? "opacity-75" : "hover:shadow-xl"
              }`}
            >
              {project.discontinued ? (
                <div className="relative">
                  <div className="relative aspect-video">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className=""
                    />
                  </div>
                  <div className="p-6">
                    <h2
                      className={`${cgaramond.className} text-xl font-semibold text-slate-900 mb-2 flex items-center`}
                    >
                      {project.title}
                      <span className="ml-2 text-xs text-slate-500">
                        (Discontinued)
                      </span>
                    </h2>
                    <p className={`${worksans.className} text-slate-600`}>
                      {project.description}
                    </p>
                  </div>
                </div>
              ) : (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2
                      className={`${cgaramond.className} text-xl font-semibold text-slate-900 mb-2`}
                    >
                      {project.title}
                    </h2>
                    <p className={`${worksans.className} text-slate-600`}>
                      {project.description}
                    </p>
                  </div>
                </Link>
              )}
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
          Interested in working together?{" "}
          <Link href="https://form.typeform.com/to/jGoFtoRI" className="text-slate-900 hover:underline">
            Let&apos;s discuss your project
          </Link>
        </p>
      </motion.footer>
    </div>
  );
}
