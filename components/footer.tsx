"use client"

import { motion } from "framer-motion"
import { Cormorant_Garamond, Work_Sans } from "next/font/google"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import Link from "next/link"

const cgaramond = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const worksans = Work_Sans({ subsets: ["latin"] })

export default function Footer() {
  const footerSections = [
    // {
    //   title: "SITE",
    //   items: [
    //     { name: "Home", href: "/" },
    //     { name: "Services", href: "/services" },
    //     { name: "Portfolio", href: "/portfolio" },
    //     { name: "About Us", href: "/about" },
    //     { name: "Contact", href: "/contact" },
    //   ],
    // },
    // {
    //   title: "ABOUT",
    //   items: [
    //     { name: "Our Values", href: "/our-values" },
    //     { name: "Commitments", href: "/commitments" },
    //     { name: "Privacy", href: "/privacy" },
    //   ],
    // },
    // {
    //   title: "CONTACT",
    //   items: [
    //     { name: "info@illustra.design", href: "mailto:info@illustra.design" },
    //     { name: "647 | 677 | 4937", href: "tel:+16476774937" },
    //   ],
    // },
  ]

  return (
    <footer className="bg-white text-slate-950 py-12">
      <div className="container mx-auto px-4">
        
        <div className="border-t border-white/20 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} ILLUSTRA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

