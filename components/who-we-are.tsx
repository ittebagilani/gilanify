"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Cormorant_Garamond, Work_Sans } from "next/font/google"
import AnimatedCircles from "./animated-circles"
import Link from "next/link"

const cgaramond = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const worksans = Work_Sans({ subsets: ["latin"] })

export const WhoWeAre = () => {
  return (
    <section className="relative bg-[#fcfaee] text-slate-950 transition-bg py-16 md:py-40">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-10">
          {/* Text Section */}
          <div className="flex-1 mb-8 md:mb-0 md:mr-10">
            <h1
              className={`${cgaramond.className} text-3xl md:text-5xl font-medium text-center md:text-left mb-8 md:mb-12 text-slate-950`}
            >
              Our Websites Attract.
            </h1>
            <p
              className={`${worksans.className} mt-6 md:mt-12 text-center md:text-left hover:bg-orange-50 mb-8 md:mb-10`}
            >
              At ILLUSTRA Design, we redefine digital excellence through captivating web design that seamlessly merges
              creativity and functionality. Elevate your brand further with our strategic social media marketing and
              high-impact ads. Let&apos;s amplify your digital presence and boost your business to new heights.
            </p>

            <div className="flex justify-center md:justify-start">
              <motion.button
                className={`bg-[#292929] text-[#fcfaee] px-6 py-3 text-[15px] ${worksans.className} hover:bg-[#3a3a3a] transition-colors duration-300 items-center space-x-2 inline-flex`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={"https://form.typeform.com/to/jGoFtoRI"}>Free Consultation</Link>
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </div>

          {/* AnimatedCircles Section */}
          <div className="flex-shrink-0 mt-8 md:mt-0 md:w-60">
            <AnimatedCircles />
          </div>
        </div>
      </div>
    </section>
  )
}

