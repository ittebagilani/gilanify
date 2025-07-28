"use client";

import React, {
  ReactNode,
  CSSProperties,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Raleway, Work_Sans } from "next/font/google";
import { FiCheck, FiX } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const worksans = Work_Sans({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const ServicePackages = () => {
  const [selected, setSelected] = useState<ToggleOptionsType>("monthly");

  return (
    <section
      id="service-packages"
      className="py-12 md:py-20 bg-[#f6f4eb] text-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2
            className={`text-3xl md:text-4xl font-semibold ${raleway.className}`}
          >
            Service Packages
          </h2>
          <p
            className={`text-base md:text-lg text-slate-700 mt-2 ${worksans.className}`}
          >
            Choose the perfect plan for your business.
          </p>
          <Toggle selected={selected} setSelected={setSelected} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <PriceCard
            tier="Starter"
            price={selected === "monthly" ? "$3,120" : "$36,510"}
            priceSuffix={selected === "monthly" ? "/mo" : "/yr"}
            bestFor="Perfect for solopreneurs or small teams"
            CTA={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="https://form.typeform.com/to/jGoFtoRI">
                  <Button variant="outline" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            }
            benefits={[
              { text: "1 AI Workflow Setup", checked: true },
              { text: "Make Integration", checked: true },
              { text: "Email Automation", checked: true },
              { text: "Basic Support (Email)", checked: true },
              { text: "1 Revision", checked: true },
            ]}
          />
          <PriceCard
            tier="Growth"
            price={selected === "monthly" ? "$5,240" : "$60,450"}
            priceSuffix={selected === "monthly" ? "/mo" : "/yr"}
            bestFor="For growing businesses needing efficiency"
            highlight
            CTA={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="https://form.typeform.com/to/jGoFtoRI">
                  <Button variant="outline" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            }
            benefits={[
              { text: "Up to 3 AI Workflows", checked: true },
              { text: "CRM + Make Integration", checked: true },
              { text: "Lead Scoring Automation", checked: true },
              { text: "Priority Support", checked: true },
              { text: "Unlimited Revisions", checked: true },
            ]}
          />
          <PriceCard
            tier="Custom"
            bestFor="Tailored solutions for scaling operations"
            isCustom
            CTA={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="https://form.typeform.com/to/jGoFtoRI">
                  <Button variant="outline" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            }
            benefits={[
              { text: "Fully Custom AI Systems", checked: true },
              { text: "API & Database Integration", checked: true },
              { text: "Custom Triggers & Webhooks", checked: true },
              { text: "Dedicated Support & Training", checked: true },
              { text: "End-to-End Automation Strategy", checked: true },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const PriceCard = ({
  tier,
  price,
  priceSuffix,
  bestFor,
  CTA,
  benefits,
  highlight,
  isCustom,
}: PriceCardProps) => {
  return (
    <Card
      className={twMerge(
        "relative",
        highlight
          ? "border-2 border-slate-900 bg-[#fcfaee]"
          : "border border-slate-200 bg-[#fcfaee]"
      )}
      style={highlight ? { boxShadow: "0px 6px 0px rgba(0, 0, 0, 0.9)" } : {}}
    >
      {highlight && (
        <span className="absolute right-1 top-4 -translate-y-1/2 rounded-full bg-[#2f2e2d] px-2 py-0.5 text-sm text-white">
          Most Popular
        </span>
      )}
      <div className="flex flex-col items-center border-b border-slate-300 pb-6">
        <span
          className={`mb-6 inline-block text-slate-950 text-xl font-medium ${worksans.className}`}
        >
          {tier}
        </span>
        {!isCustom && (
          <div className="mb-3 flex items-center gap-3">
            <AnimatePresence mode="popLayout">
              <motion.span
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                key={price}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className={`inline-block text-4xl font-medium text-slate-950 ${worksans.className}`}
              >
                {price}
              </motion.span>
            </AnimatePresence>
            {priceSuffix && (
              <motion.div
                layout
                className={`font-medium text-slate-600 ${worksans.className}`}
              >
                <span className="block">{priceSuffix}</span>
              </motion.div>
            )}
          </div>
        )}
        {isCustom && (
          <div className="mb-3 flex items-center gap-3">
            <span
              className={`inline-block text-4xl font-medium text-slate-950 ${worksans.className}`}
            >
              Let&apos;s Talk
            </span>
          </div>
        )}
        <span className={`text-center text-slate-700 ${worksans.className}`}>
          {bestFor}
        </span>
      </div>

      <div className="space-y-4 py-9">
        {benefits.map((b, i) => (
          <Benefit {...b} key={i} />
        ))}
      </div>

      {CTA}
    </Card>
  );
};

const Toggle = ({
  selected,
  setSelected,
}: {
  selected: ToggleOptionsType;
  setSelected: Dispatch<SetStateAction<ToggleOptionsType>>;
}) => {
  return (
    <div className="relative mx-auto mt-3 flex w-fit items-center rounded-full bg-[#e9e7dd]">
      <button
        className={`relative z-10 flex items-center gap-2 px-3 py-1.5 text-sm font-medium ${worksans.className}`}
        onClick={() => setSelected("monthly")}
      >
        <span className="relative z-10">Monthly</span>
      </button>
      <button
        className={`relative z-10 flex items-center gap-2 px-3 py-1.5 text-sm font-medium ${worksans.className}`}
        onClick={() => setSelected("annual")}
      >
        <span className="relative z-10">Annually</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "annual" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ ease: "easeInOut" }}
          className="h-full w-1/2 rounded-full border border-slate-900 bg-white"
        />
      </div>
    </div>
  );
};

const Benefit = ({ text, checked }: BenefitType) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span className="grid size-5 place-content-center rounded-full bg-[#2f2e2d] text-sm text-white">
          <FiCheck />
        </span>
      ) : (
        <span className="grid size-5 place-content-center rounded-full bg-slate-200 text-sm text-slate-500">
          <FiX />
        </span>
      )}
      <span className={`text-sm text-slate-700 ${worksans.className}`}>
        {text}
      </span>
    </div>
  );
};

const Card = ({ className, children, style = {} }: CardProps) => {
  return (
    <motion.div
      initial={{ filter: "blur(2px)" }}
      whileInView={{ filter: "blur(0px)" }}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={style}
      className={twMerge(
        "relative h-full w-full overflow-hidden rounded-2xl bg-white shadow-md p-6",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

type PriceCardProps = {
  tier: string;
  price?: string;
  priceSuffix?: string;
  bestFor: string;
  CTA: ReactNode;
  benefits: BenefitType[];
  highlight?: boolean;
  isCustom?: boolean;
};

type CardProps = {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
};

type BenefitType = {
  text: string;
  checked: boolean;
};

type ToggleOptionsType = "monthly" | "annual";
