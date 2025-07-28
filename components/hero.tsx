"use client";

import { motion, animate, useInView } from "framer-motion";
import {
  Work_Sans,
  Raleway,
  Playfair_Display,
  Montserrat,
} from "next/font/google";
import Link from "next/link";
import { useEffect, useRef } from "react";
import MarqueeButton from "./ui/marquee-button";
import { ArrowRight } from "lucide-react";

const worksans = Work_Sans({ subsets: ["latin"] });

const raleway = Raleway({
  weight: ["400", "600", "700", "800"],
  subsets: ["cyrillic"],
});

export const CountUpStats = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:py-24">
      <h2
        className={`mb-8 text-center text-base text-black sm:text-lg md:mb-16 ${worksans.className}`}
      >
        SAVE TIME AND FOCUS ON YOUR EXPERTISE WITH AN
        <span className="text-red-700"> AUTOMATED WEBSITE</span>
      </h2>

      <div className="flex flex-col items-center justify-center sm:flex-row">
        <Stat num={100} suffix="%" subheading="Client satisfaction rate" />
        <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
        <Stat
          num={15.5}
          decimals={1}
          suffix="K+"
          subheading="Client hours saved"
        />
        <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
        <Stat num={50} suffix="K+" subheading="Customers reached" />
      </div>
    </div>
  );
};

interface Props {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
}

const Stat = ({ num, suffix, decimals = 0, subheading }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex w-72 flex-col items-center py-8 sm:py-0">
      <p
        className={`mb-2 text-center text-7xl font-normal sm:text-6xl ${worksans.className}`}
      >
        <span ref={ref}></span>
        {suffix}
      </p>
      <p
        className={`max-w-48 text-center text-neutral-600 ${worksans.className}`}
      >
        {subheading}
      </p>
    </div>
  );
};

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-12 md:pt-32 md:pb-24 flex items-start justify-center bg-[#f6f4eb] relative"
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center pt-32 md:pt-48">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="items-center gap-2 mb-10 hidden md:flex"
        >
          
          <Link
            className={`text-2xl ${raleway.className} md:text-xl tracking-[0.3rem] font-semibold text-slate-900 non-italic ml-2`}
            href={"/"}
          >
            GILANIFY
          </Link>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`text-5xl md:text-8xl text-slate-900 max-w-5xl mx-auto mb-8 ${worksans.className}`}
        >
          We make growth systems for B2B companies.
        </motion.p>

        {/* Let's Talk Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-8"
        >
          <motion.button
            className={`bg-transparent text-black px-4 py-2 text-sm ${worksans.className} items-center space-x-2 inline-flex tracking-tighter border border-black rounded-xl hover:text-red-950/60 transition-colors lg:px-6 lg:py-3 lg:text-base font-medium`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={"https://form.typeform.com/to/jGoFtoRI"}>LET&apos;S TALK</Link>
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>

        {/* CountUpStats Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="md:mt-60 mt-20 w-full pb-4"
        >
          <CountUpStats />
        </motion.div>
      </div>
    </section>
  );
}
