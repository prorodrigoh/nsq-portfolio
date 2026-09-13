import React from "react";
import Image from "next/image";
import siteContent from "@/data/siteContent";
import { FlaskConical, ShieldAlert, HeartPulse, Cpu, CheckCircle2, Search, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Research Focus Areas | Dr. Natalia Quinete Lab at FIU",
  description: "Explore Dr. Natalia Quinete's research in environmental analytical chemistry, emerging contaminants, PFAS, and mass spectrometry at Florida International University.",
};

export default function ResearchPage() {
  const { research } = siteContent;

  const iconMap: Record<string, React.ReactNode> = {
    "test-tube": <FlaskConical className="w-8 h-8 text-[#476FD6]" />,
    "shield-alert": <ShieldAlert className="w-8 h-8 text-[#B6862C]" />,
    "heart-pulse": <HeartPulse className="w-8 h-8 text-[#081E3F]" />,
  };

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#476FD6] text-xs font-semibold uppercase tracking-wider mb-3">
            <Search className="w-3.5 h-3.5" />
            <span>Research Program</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#081E3F] font-heading tracking-tight">
            {research.sectionTitle}
          </h1>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[#476FD6] to-[#B6862C] rounded-full" />
          <p className="mt-4 text-lg text-[#15213F]/85 leading-relaxed">
            {research.overview}
          </p>
        </div>

        {/* 3 Core Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {research.focusAreas.map((area) => (
            <div
              key={area.id}
              className="glass-card rounded-3xl p-8 flex flex-col justify-between relative group border border-[#D8E2EE]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-[#EEF4FF] border border-[#476FD6]/15 group-hover:scale-110 transition-transform">
                    {iconMap[area.icon] || <FlaskConical className="w-8 h-8 text-[#476FD6]" />}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#EDF1F8] text-[#081E3F]">
                    {area.tag}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#081E3F] mb-4 font-heading">
                  {area.title}
                </h2>
                <p className="text-base text-[#15213F]/80 leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#D8E2EE]/60 flex items-center justify-between text-xs font-semibold text-[#476FD6]">
                <span>Environmental Analytical Chemistry</span>
                <span className="w-2 h-2 rounded-full bg-[#476FD6]" />
              </div>
            </div>
          ))}
        </div>

        {/* Analytical Methods Development */}
        <div className="bg-[#EDF1F8]/80 rounded-3xl p-8 md:p-12 border border-[#D8E2EE] mb-20 shadow-xs">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#D8E2EE] text-xs font-semibold text-[#081E3F] mb-3">
              <Cpu className="w-3.5 h-3.5 text-[#476FD6]" />
              <span>Instrumentation &amp; Precision</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#081E3F] font-heading">
              {research.analyticalMethods.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#15213F]/85 leading-relaxed">
              {research.analyticalMethods.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {research.analyticalMethods.methods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-[#D8E2EE] shadow-xs hover:border-[#476FD6]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-lg bg-[#EEF4FF] text-[#476FD6] text-xs font-bold font-mono mb-4">
                    {method.badge}
                  </span>
                  <h3 className="text-lg font-bold text-[#081E3F] mb-3 leading-snug">
                    {method.name}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {method.detail}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#EDF1F8] flex items-center gap-2 text-xs text-[#081E3F] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Quality Assured Protocol</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Laboratory Facilities Section */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#081E3F] font-heading">
                Laboratory Facilities &amp; Equipment
              </h2>
              <p className="text-base text-[#64748B] mt-1">
                State-of-the-art analytical instrumentation, sample extraction stations, and wet lab infrastructure at FIU
              </p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#476FD6] bg-[#EEF4FF] px-3.5 py-1.5 rounded-full mt-2 sm:mt-0">
              4 Specialized Units
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {research.laboratoryImages.map((labImg, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-white border border-[#D8E2EE] shadow-xs hover:shadow-lg transition-all"
              >
                <div className="relative h-64 w-full overflow-hidden bg-[#15213F]/5">
                  <Image
                    src={labImg.url}
                    alt={labImg.caption}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081E3F]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                    <p className="text-xs text-white leading-snug">
                      {labImg.caption}
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-xs font-medium text-[#15213F] line-clamp-2">
                    {labImg.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next page navigation shortcut */}
        <div className="mt-16 pt-8 border-t border-[#D8E2EE] flex justify-between items-center">
          <Link
            href="/"
            className="text-sm font-semibold text-[#64748B] hover:text-[#081E3F] transition-colors"
          >
            &larr; Back to Home
          </Link>
          <Link
            href="/team"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#476FD6] hover:text-[#1C3F99] transition-colors"
          >
            <span>Meet Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
