"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteContent from "@/data/siteContent";
import Hero from "@/components/Hero";
import {
  ArrowRight,
  FlaskConical,
  Users,
  Award,
  BookOpen,
  DollarSign,
  MapPin,
  ChevronRight,
  CheckCircle2,
  Cpu
} from "lucide-react";

export default function HomePage() {
  const { research, team, grantsAndProjects, profile } = siteContent;

  return (
    <div className="flex flex-col">
      {/* 1. Distinguished Hero */}
      <Hero />

      {/* 2. Research Overview / Ongoing Work (like malinalab.com) */}
      <section className="py-16 md:py-24 bg-white border-y border-[#D8E2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#476FD6] text-xs font-semibold uppercase tracking-wider mb-3">
                <FlaskConical className="w-3.5 h-3.5" />
                <span>Current Work</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#081E3F] font-heading">
                Ongoing Research
              </h2>
              <p className="mt-2 text-base text-[#64748B] max-w-2xl">
                {research.overview}
              </p>
            </div>
            <Link
              href="/research"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#476FD6] hover:text-[#1C3F99] transition-colors whitespace-nowrap group"
            >
              <span>View all research</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {research.focusAreas.map((area) => (
              <Link
                key={area.id}
                href="/research"
                className="glass-card rounded-2xl p-7 flex flex-col justify-between group border border-[#D8E2EE] hover:border-[#476FD6]/50"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#EDF1F8] text-[#081E3F] inline-block mb-4">
                    {area.tag}
                  </span>
                  <h3 className="text-xl font-bold text-[#081E3F] mb-3 font-heading group-hover:text-[#476FD6] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#15213F]/80 leading-relaxed mb-6">
                    {area.description}
                  </p>
                </div>
                <span className="text-xs font-semibold text-[#476FD6] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Research Approach & Instrumentation Callout */}
      <section className="py-16 md:py-20 bg-[#EDF1F8]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#476FD6] text-xs font-semibold uppercase tracking-wider border border-[#D8E2EE]">
                <Cpu className="w-3.5 h-3.5" />
                <span>Our Approach</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#081E3F] font-heading leading-tight">
                Cutting-Edge Mass Spectrometry &amp; Non-Targeted Analysis
              </h2>
              <p className="text-base text-[#15213F]/80 leading-relaxed">
                {research.analyticalMethods.description}
              </p>
              <div className="pt-2">
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#081E3F] hover:bg-[#1C3F99] transition-all shadow-xs"
                >
                  <span>Explore Facilities &amp; Methods</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {research.analyticalMethods.methods.map((method, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-[#D8E2EE] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-[#476FD6] bg-[#EEF4FF] px-2 py-0.5 rounded">
                      0{idx + 1}
                    </span>
                    <h3 className="font-bold text-[#081E3F] mt-3 mb-2 text-sm">
                      {method.name}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {method.detail}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#D8E2EE]/60 flex items-center gap-1 text-[11px] text-[#081E3F] font-semibold">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Validated QA/QC</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Team Preview Section */}
      <section className="py-16 md:py-24 bg-white border-b border-[#D8E2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#476FD6] text-xs font-semibold uppercase tracking-wider mb-3">
                <Users className="w-3.5 h-3.5" />
                <span>Our Team</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#081E3F] font-heading">
                Talented Researchers &amp; Fellows
              </h2>
              <p className="mt-2 text-base text-[#64748B] max-w-2xl">
                {team.overview}
              </p>
            </div>
            <Link
              href="/team"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#476FD6] hover:text-[#1C3F99] transition-colors whitespace-nowrap group"
            >
              <span>Meet the whole team</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.categories[0].members.slice(0, 2).concat(team.categories[1].members.slice(0, 2)).map((member, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden border border-[#D8E2EE] flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                    {member.imageUrl ? (
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-200">
                        <Users className="w-8 h-8 text-slate-400" />
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#081E3F] text-base font-heading group-hover:text-[#476FD6] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#476FD6] mt-0.5 mb-2 leading-snug">
                      {member.role}
                    </p>
                    {member.researchFocus && (
                      <p className="text-xs text-[#64748B] line-clamp-3 leading-relaxed">
                        {member.researchFocus}
                      </p>
                    )}
                  </div>
                </div>
                <div className="px-5 pb-4">
                  <Link
                    href="/team"
                    className="text-xs font-semibold text-[#476FD6] inline-flex items-center gap-1 hover:underline"
                  >
                    <span>View profile</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Major Grants & Sponsors Wall (like malinalab.com) */}
      <section className="py-16 md:py-20 bg-[#081E3F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#B6862C] mb-2">
              Our Funding &amp; Sponsors
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Supported by Leading Federal &amp; State Institutions
            </h2>
            <p className="text-sm text-white/75 mt-2">
              Millions in competitive research grants advancing environmental analytical chemistry
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 items-center justify-items-center mb-12">
            {grantsAndProjects.grants
              .filter((g) => g.logoUrl)
              .slice(0, 6)
              .map((grant, idx) => (
                <div
                  key={idx}
                  className="bg-white/95 rounded-xl p-3 h-20 w-36 flex items-center justify-center border border-white/10 shadow-xs relative overflow-hidden"
                >
                  <Image
                    src={grant.logoUrl!}
                    alt={grant.agency}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))}
          </div>

          <div className="text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#081E3F] bg-white hover:bg-[#EEF4FF] transition-all shadow-md"
            >
              <span>Explore All Grants &amp; Media Coverage</span>
              <ArrowRight className="w-4 h-4 text-[#476FD6]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Join Us / Get in Touch Banner (like malinalab.com) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#081E3F] via-[#1C3F99] to-[#081E3F] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#476FD6]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B6862C]/20 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <div className="relative h-16 w-16 rounded-full overflow-hidden bg-white p-0.5 border-2 border-white shadow-md mb-4">
                <Image
                  src={profile.labLogoUrl}
                  alt={profile.labName}
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#B6862C] mb-2">
                {profile.labName}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
                Join ECC Lab
              </h2>
              <p className="text-sm sm:text-base text-white/80 mb-8 leading-relaxed">
                We welcome motivated graduate students, undergraduates, and postdoctoral fellows interested in environmental analytical chemistry, mass spectrometry, and emerging contaminants.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl text-sm font-bold text-[#081E3F] bg-white hover:bg-[#EEF4FF] transition-all shadow-md"
                >
                  Contact Dr. Quinete &rarr;
                </Link>
                <Link
                  href="/team"
                  className="px-6 py-3 rounded-xl text-sm font-bold text-white border border-white/30 hover:bg-white/10 transition-all"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
