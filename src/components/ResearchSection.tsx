"use client";

import React from "react";
import Image from "next/image";
import siteContent from "@/data/siteContent";
import { FlaskConical, ShieldAlert, HeartPulse, Cpu, CheckCircle2, Search } from "lucide-react";

export default function ResearchSection() {
  const { research } = siteContent;

  const iconMap: Record<string, React.ReactNode> = {
    "test-tube": <FlaskConical className="w-6 h-6 text-[#476FD6]" />,
    "shield-alert": <ShieldAlert className="w-6 h-6 text-[#B6862C]" />,
    "heart-pulse": <HeartPulse className="w-6 h-6 text-[#081E3F]" />,
  };

  return (
    <section id="research" className="py-16 md:py-24 bg-white border-y border-[#D8E2EE]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Overview */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#476FD6] text-xs font-semibold uppercase tracking-wider mb-3">
            <Search className="w-3.5 h-3.5" />
            <span>Core Exploration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#081E3F] font-heading">
            {research.sectionTitle}
          </h2>
          <div className="mt-3 mx-auto h-1 w-16 bg-gradient-to-r from-[#476FD6] to-[#B6862C] rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#15213F]/85 leading-relaxed">
            {research.overview}
          </p>
        </div>

        {/* 3 Core Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {research.focusAreas.map((area) => (
            <div
              key={area.id}
              className="glass-card rounded-2xl p-8 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-[#EEF4FF] border border-[#476FD6]/15 group-hover:scale-110 transition-transform">
                    {iconMap[area.icon] || <FlaskConical className="w-6 h-6 text-[#476FD6]" />}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#EDF1F8] text-[#081E3F]">
                    {area.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#081E3F] mb-3 font-heading">
                  {area.title}
                </h3>
                <p className="text-sm sm:text-base text-[#15213F]/80 leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D8E2EE]/60 flex items-center text-xs font-semibold text-[#476FD6]">
                <span>Environmental Analytical Chemistry</span>
              </div>
            </div>
          ))}
        </div>

        {/* Analytical Methods Development subsection */}
        <div className="bg-[#EDF1F8]/70 rounded-3xl p-8 md:p-12 border border-[#D8E2EE] mb-20 shadow-xs">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#D8E2EE] text-xs font-semibold text-[#081E3F] mb-3">
              <Cpu className="w-3.5 h-3.5 text-[#476FD6]" />
              <span>Instrumentation &amp; Precision</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#081E3F] font-heading">
              {research.analyticalMethods.title}
            </h3>
            <p className="mt-3 text-base text-[#15213F]/85 leading-relaxed">
              {research.analyticalMethods.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {research.analyticalMethods.methods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-[#D8E2EE] shadow-xs hover:border-[#476FD6]/40 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#EEF4FF] text-[#476FD6] text-xs font-bold font-mono">
                    {method.badge}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#081E3F] mb-2">
                  {method.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {method.detail}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-[#081E3F] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Validated Protocol</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Laboratory Facilities & Equipment Gallery */}
        <div>
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[#081E3F] font-heading">
                Laboratory Facilities
              </h3>
              <p className="text-sm text-[#64748B] mt-1">
                State-of-the-art analytical instrumentation and wet-lab research facilities at FIU
              </p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#476FD6] bg-[#EEF4FF] px-3 py-1 rounded-full mt-2 sm:mt-0">
              4 Specialized Units
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {research.laboratoryImages.map((labImg, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-white border border-[#D8E2EE] shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative h-60 w-full overflow-hidden bg-[#15213F]/5">
                  <Image
                    src={labImg.url}
                    alt={labImg.caption}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081E3F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-xs text-white leading-snug">
                      {labImg.caption}
                    </p>
                  </div>
                </div>
                <div className="p-3.5 bg-white">
                  <p className="text-xs font-medium text-[#15213F] line-clamp-2">
                    {labImg.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
