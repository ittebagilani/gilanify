"use client";

import { motion } from "framer-motion";
import { Raleway, Work_Sans } from "next/font/google";
import {
  Bot,
  Mail,
  Calendar,
  DollarSign,
  Users,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const raleway = Raleway({ subsets: ["latin"] });
const worksans = Work_Sans({ subsets: ["latin"] });

const services = [
  {
    icon: Bot,
    title: "AI & Automation Solutions",
    description:
      "Harness AI and automation to streamline processes and boost efficiency.",
    subServices: [
      "AI/ChatGPT Automations",
      "AI Meeting Note Summarizer (Zoom → GPT → Notion)",
      "Email Draft Generator (from form + GPT)",
      "Auto-Classify Support Tickets via GPT",
      "AI Follow-up Email Writer for leads",
      "AI Automated Fulfillment",
      "AI Onboarding Systems",
      "AI Scoring Systems",
    ],
  },
  {
    icon: Mail,
    title: "Client Communication Systems",
    description:
      "Automate and enhance client interactions for seamless communication.",
    subServices: [
      "Client Onboarding Welcome Series (emails/texts)",
      "Automated Meeting Scheduling (Calendly/Google Calendar)",
      "Weekly Client Updates from project tools (Notion/Asana)",
      "SLA Breach Alerts for unanswered messages",
    ],
  },
  {
    icon: DollarSign,
    title: "Finance & Billing Systems",
    description:
      "Simplify financial processes with automated billing and follow-ups.",
    subServices: [
      "Invoice Generation from Stripe/QuickBooks",
      "Automated Payment Follow-Ups (email/text) for overdue invoices",
    ],
  }
];

export default function OtherServices() {
  return (
    <section className="py-12 md:py-20 bg-[#f6f4eb] text-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2
            className={`${raleway.className} text-3xl md:text-4xl font-semibold mb-6 text-slate-950`}
          >
            Comprehensive Digital Solutions
          </h2>
          <p className={`${worksans.className} text-slate-700 text-base md:text-lg`}>
            Beyond web development, we offer a range of services to elevate your online presence and streamline operations.
          </p>
        </div>

        <div className="flex flex-col gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-[#fcfaee] rounded-xl p-6 h-full shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-[#e9e7dd]">
                  <service.icon className="w-6 h-6 text-[#2f2e2d]" />
                </div>
                <h3
                  className={`${raleway.className} text-xl font-semibold mb-3 text-slate-950`}
                >
                  {service.title}
                </h3>
                <p
                  className={`${worksans.className} text-slate-700 text-sm leading-relaxed mb-4`}
                >
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.subServices.map((subService, subIndex) => (
                    <li
                      key={subIndex}
                      className={`${worksans.className} text-slate-600 text-sm leading-relaxed pl-4 relative`}
                    >
                      <span className="absolute left-0 text-[#2f2e2d]">-</span>
                      {subService}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.button
            className={`bg-[#2f2e2d] text-[#fcfaee] px-6 py-3 text-[15px] ${worksans.className} hover:bg-[#3a3a3a] transition-colors duration-300 items-center space-x-2 inline-flex`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/services">Learn More</Link>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}