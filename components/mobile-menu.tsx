"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import type React from "react"
import { useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Cormorant_Garamond, Work_Sans } from "next/font/google"

const cgaramond = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const worksans = Work_Sans({ subsets: ["latin"] })

interface MobileDrawerMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileDrawerMenu: React.FC<MobileDrawerMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname()

  // Close menu when screen is resized to larger size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        onClose()
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen, onClose])

  // const menuItems = [
  //   { name: "SERVICES", path: "/services" },
  //   { name: "PORTFOLIO", path: "/portfolio" },
  //   { name: "ABOUT", path: "/about" },
  //   { name: "CONTACT", path: "/contact" },
  //   { name: "REFERRAL", path: "/referral" },
  // ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed top-0 right-0 h-screen w-80 bg-[#fcfaee] z-50 flex flex-col md:hidden ${worksans.className}`}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-950 hover:text-slate-600 transition-colors"
            >
              <X size={24} />
            </button>

            <nav className="flex-1 p-4 mt-16">
              <ul className="space-y-8">
                {/* {menuItems.map((item) => (
                  <motion.li key={item.name} whileHover={{ x: 5 }} whileTap={{ x: 0 }}>
                    <Link
                      href={item.path}
                      onClick={onClose}
                      className={`text-base ${cgaramond.className} font-medium text-slate-950 hover:text-slate-600 transition-colors w-full text-left block ${
                        pathname === item.path ? "text-primary" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))} */}
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileDrawerMenu

