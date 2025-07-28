"use client";

import { motion } from "framer-motion";
import { Raleway, Work_Sans } from "next/font/google";
import { Calendar, Clock, PhoneCall, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const worksans = Work_Sans({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export default function FreeConsultation() {
  return (
    <section className="py-12 md:py-20 bg-[#f6f4eb] text-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ filter: "blur(2px)" }}
          whileInView={{ filter: "blur(0px)" }}
          whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="max-w-5xl mx-auto rounded-2xl bg-[#fcfaee] shadow-md overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/2 p-8 bg-[#0f0f0e] text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2
                  className={`${raleway.className} text-3xl md:text-4xl font-semibold mb-6`}
                >
                  Book Your Free Consultation
                </h2>
                <p className={`${worksans.className} mb-8 text-base text-slate-200`}>
                  Take the first step towards transforming your online presence.
                  Our experts are ready to discuss your project and provide
                  valuable insights.
                </p>
                <ul className={`${worksans.className} space-y-4`}>
                  <li className="flex items-center">
                    <span className="grid size-5 place-content-center rounded-full bg-white text-sm text-[#2f2e2d] mr-4">
                      <Calendar className="w-4 h-4" />
                    </span>
                    <span>Choose a date that works for you</span>
                  </li>
                  <li className="flex items-center">
                    <span className="grid size-5 place-content-center rounded-full bg-white text-sm text-[#2f2e2d] mr-4">
                      <Clock className="w-4 h-4" />
                    </span>
                    <span>30-minute session</span>
                  </li>
                  <li className="flex items-center">
                    <span className="grid size-5 place-content-center rounded-full bg-white text-sm text-[#2f2e2d] mr-4">
                      <PhoneCall className="w-4 h-4" />
                    </span>
                    <span>Phone or video call options</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center bg-[#fcfaee]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <h3
                  className={`${raleway.className} text-2xl md:text-3xl font-semibold mb-4 text-slate-950`}
                >
                  Ready to Get Started?
                </h3>
                <p className={`${worksans.className} mb-8 text-slate-700 text-base`}>
                  Click below to schedule your free consultation and take the
                  first step towards elevating your online presence.
                </p>
                <Link href="https://form.typeform.com/to/jGoFtoRI" passHref>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className={`w-full bg-[#2f2e2d] text-[#fcfaee] px-6 py-3 text-[15px] ${worksans.className} hover:bg-[#3a3a3a] transition-colors duration-300 items-center space-x-2`}
                    >
                      <span>Schedule Now</span>
                      <ArrowRight size={16} />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}