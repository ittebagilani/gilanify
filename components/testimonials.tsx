"use client";

import React from "react";
import { Raleway, Work_Sans } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
const worksans = Work_Sans({ subsets: ["latin"] });

const StaticTestimonials = () => {
  return (
    <div className="bg-[#fcfaee] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2
            className={`text-3xl md:text-4xl font-semibold ${raleway.className}`}
          >
            Testimonials
          </h2>
          <p
            className={`text-base md:text-lg text-slate-700 mt-2 ${worksans.className}`}
          >
            Don&apos;t take our word for it, here&apos;s what our clients have to say.
          </p>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="bg-[#f7f4eb] rounded-2xl p-8 shadow-md  h-full">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
          <img
            src={testimonial.img}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3
            className={`font-semibold text-lg text-slate-950 ${raleway.className}`}
          >
            {testimonial.name}
          </h3>
          <p className={`text-sm text-slate-700 ${worksans.className}`}>
            {testimonial.title}
          </p>
        </div>
      </div>
      <blockquote
        className={`text-slate-700 text-lg leading-relaxed ${worksans.className}`}
      >
        {testimonial.info}
      </blockquote>
    </div>
  );
};

const testimonials = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?auto=format&fit=crop&w=703&q=80",
    name: "JOE DAVIES",
    title: "Cofounder, FATJOE",
    info: "Gilanify streamlined our operations with powerful Make automations. Itteba’s systems saved us hours every week.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?auto=format&fit=crop&w=715&q=80",
    name: "ZAK BLAKE",
    title: "Ex-CTO, Scaling With Systems",
    info: "Itteba understood our tech stack instantly. The automations he built with Make completely transformed our workflows.",
  },
  {
    id: 3,
    img: "https://plus.unsplash.com/premium_photo-1670588776139-da93b47afc6f?auto=format&fit=crop&w=687&q=80",
    name: "SARAH CHEN",
    title: "Marketing Director, TechFlow",
    info: "We used to manually manage everything. Now with Gilanify's AI and automation setups, our campaigns run themselves.",
  },
];

export default StaticTestimonials;
