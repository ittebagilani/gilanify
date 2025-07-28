"use client";

import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Work_Sans, Cormorant_Garamond, Raleway } from "next/font/google";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const worksans = Work_Sans({ subsets: ["latin"] });
const cgaramond = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const raleway = Raleway({
  weight: ["400", "600", "700", "800"],
  subsets: ["cyrillic"],
});

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed top-0 z-50 w-full px-6 text-slate-950 transition-all duration-300 ease-out lg:px-12 ${
        scrolled
          ? "bg-[#fcfaee] py-3 shadow-xl border-b-[1px] border-orange-100"
          : "bg-[#fcfaee]/90 py-6 shadow-none border-b-[1px] border-orange-100"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center lg:justify-between">
        <Logo />
        <div className="hidden lg:flex gap-6 items-center">
          <StartProjectButton />
        </div>
      </div>
    </motion.header>
  );
};

const Logo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center gap-1 lg:flex-row lg:items-center lg:gap-2"
    >
      <div className="flex items-center gap-2">
        
        <Link
          className={`text-2xl ${raleway.className} md:text-xl tracking-[0.3rem] font-semibold text-slate-900 ml-2`}
          href="/"
        >
          GILANIFY
        </Link>
      </div>
    </motion.div>
  );
};

const StartProjectButton = () => {
  return (
    <motion.button
      className={`bg-transparent text-black px-4 py-2 text-sm ${worksans.className} items-center space-x-2 inline-flex tracking-tighter hover:text-red-950/60 border border-black rounded-xl transition-colors lg:px-6 lg:py-3 lg:text-base font-medium`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href="https://form.typeform.com/to/jGoFtoRI"
        className="flex items-center gap-2"
      >
        START A PROJECT
        <ArrowRight size={16} />
      </Link>
    </motion.button>
  );
};

export default Navbar;
