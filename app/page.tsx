"use client"
import Hero from "@/components/hero"
import { ServicePackages } from "@/components/services"
import Portfolio from "@/components/portfolio"

import WhyChooseUs from "@/components/why-choose-us"
import OtherServices from "@/components/other-services"
import FreeConsultation from "@/components/free-consultation"
import Testimonials from "@/components/testimonials"
import HowItWorks from "@/components/how-it-works"

export default function Home() {
  return (
    <div className="min-h-screen text-[#2A2A2A] bg-[#f6f4eb]">
      <Hero />
      {/* <WhoWeAre /> */}
      {/* <Services /> */}
      {/* <PastClients /> */}
      {/* <Portfolio /> */}
      <Testimonials />  
      {/* <OtherServices /> */}
      <ServicePackages />
      {/* <HowItWorks /> */}
      {/* <WhyChooseUs /> */}
      {/* <FreeConsultation /> */}
    </div>
  )
}

