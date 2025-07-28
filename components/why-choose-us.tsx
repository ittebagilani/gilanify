"use client";

import { Check, X } from "lucide-react";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";

const cgaramond = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const worksans = Work_Sans({ subsets: ["latin"] });

const features = [
  { name: "Custom Design", us: true, wix: false },
  { name: "Performance Optimization", us: true, wix: false },
  { name: "SEO-Friendly Code", us: true, wix: true },
  { name: "Scalability", us: true, wix: false },
  { name: "Full Creative Control", us: true, wix: false },
  { name: "Advanced Functionality", us: true, wix: false },
];

export default function WhyChooseUs() {
  return (
    <div className="bg-[#fcfaee]">
      <div className="w-full max-w-4xl mx-auto px-4 py-12 ">
        <div className="text-center mb-8">
          <h2
            className={`${cgaramond.className} text-3xl md:text-4xl font-medium text-center mb-12 text-slate-950`}
          >
            What We Offer
          </h2>
        </div>

        <div className="bg-[#fcfaee] rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#f3f0e2]">
              <tr className={`${worksans.className}`}>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Features
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">
                  Gilanify
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">
                  Others
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {features.map((feature, index) => (
                <tr key={index} className="">
                  <td
                    className={`${worksans.className} px-6 py-4 text-sm text-gray-900`}
                  >
                    {feature.name}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {feature.us ? (
                      <Check className="mx-auto text-green-500 w-5 h-5" />
                    ) : (
                      <X className="mx-auto text-red-500 w-5 h-5" />
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {feature.wix ? (
                      <Check className="mx-auto text-green-500 w-5 h-5" />
                    ) : (
                      <X className="mx-auto text-red-500 w-5 h-5" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
