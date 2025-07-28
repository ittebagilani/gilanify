"use client";

import { motion } from "framer-motion";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";
import { Check } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const cgaramond = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const worksans = Work_Sans({ subsets: ["latin"] });

const benefits = [
  "Generous 30% Referral Rewards",
  "Transparent and Hassle-Free Process",
  "Community-Driven Success",
  "Exclusive Discount for Referrals",
  "Contribute to Local Business Growth",
];

export default function ReferralPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      referrerName: formData.get("name"),
      referrerEmail: formData.get("email"),
      referrerPhone: formData.get("phone"),
      referralName: formData.get("referralName"),
      referralPhone: formData.get("referralPhone"),
      referralEmail: formData.get("referralEmail"),
    };

    try {
      const response = await fetch("/api/submit-referral", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit referral");
      }

      toast({
        title: "Referral submitted!",
        description: "Thank you for your referral. We'll be in touch soon.",
        className: "bg-green-500 text-white",
      });

      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission failed",
        description:
          "There was an error submitting your referral. Please try again.",
        className: "bg-red-500 text-white",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f7f5e9] min-h-screen">
      <motion.header
        className="py-12 md:py-24 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className={`${cgaramond.className} text-4xl md:text-5xl font-medium text-slate-950 mt-20`}
        >
          Referral Program
        </h1>
      </motion.header>

      <main className="container mx-auto px-4 py-12 -mt-20">
        <motion.section
          id="learn-more"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2
            className={`${cgaramond.className} text-3xl font-medium mb-6 text-slate-900`}
          >
            Discover How It Works and Reap the Rewards
          </h2>
          <div className={`${worksans.className} text-slate-700 space-y-4`}>
            <p>
              We&apos;ve launched a dynamic Referral Program, aiming to build a
              community where success is shared and rewarded. It&apos;s a simple yet
              impactful initiative designed to empower you, our valued
              supporters, to play an active role in our growth journey.
            </p>
            <p>
              By referring local businesses to us, you not only contribute to
              their online success but also unlock exclusive rewards for
              yourself. It&apos;s a win-win, and here&apos;s how it works:
            </p>
            <p>
              When you refer a local business to us, and they sign a deal with
              us, we express our gratitude by sending you a generous 30% of the
              signed deal directly to your pocket. It&apos;s hassle-free,
              transparent, and a meaningful way for us to acknowledge your role
              in expanding our community.
            </p>
            <p>
              Join us in shaping a community where success is shared, and
              rewards flow to those who contribute. It&apos;s not just a program;
              it&apos;s a collaborative journey towards mutual growth and prosperity.
              Referring and earning has never been more rewarding!
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2
            className={`${cgaramond.className} text-3xl font-medium mb-6 text-slate-900`}
          >
            Benefits
          </h2>
          <ul
            className={`${worksans.className} grid grid-cols-1 md:grid-cols-2 gap-4`}
          >
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-green-500" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2
            className={`${cgaramond.className} text-3xl font-medium mb-6 text-slate-900`}
          >
            Refer Now
          </h2>
          <form
            className={`${worksans.className} bg-[#fcfaee] rounded-xl p-8 shadow-lg`}
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={`${worksans.className} border-0 border-b rounded-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0`}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Your Email Address *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`${worksans.className} border-0 border-b rounded-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0`}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Your Mobile Number *</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className={`${worksans.className} border-0 border-b rounded-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0`}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="referralName">Name Of The Referral *</Label>
                <Input
                  type="text"
                  id="referralName"
                  name="referralName"
                  required
                  className={`${worksans.className} border-0 border-b rounded-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0`}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="referralPhone">Their Mobile Number *</Label>
                <Input
                  type="tel"
                  id="referralPhone"
                  name="referralPhone"
                  required
                  className={`${worksans.className} border-0 border-b rounded-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0`}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="referralEmail">Their Email Address</Label>
                <Input
                  type="email"
                  id="referralEmail"
                  name="referralEmail"
                  className={`${worksans.className} border-0 border-b rounded-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0`}
                />
              </div>
            </div>
            <Button type="submit" className="mt-8" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Now"}
            </Button>
          </form>
        </motion.section>
      </main>

      <motion.footer
        className={`${worksans.className} text-center py-12 text-slate-600`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p>
          Questions about our referral program?{" "}
          <Link href="/contact" className="text-slate-900 hover:underline">
            Contact us
          </Link>{" "}
          for more information.
        </p>
      </motion.footer>
    </div>
  );
}
