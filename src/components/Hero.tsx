"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteContent from "@/data/siteContent";
import { BookOpen, FlaskConical, Mail, ExternalLink, MapPin } from "lucide-react";

export default function Hero() {
  const { profile } = siteContent;

  return (
    <section id="about" className="relative pt-12 pb-16 md:py-20 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#476FD6]/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-[#B6862C]/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait & Lab Emblem Badge */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group">
              {/* Outer Glow & FIU Gold accent frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#081E3F] via-[#476FD6] to-[#B6862C] rounded-3xl blur-xs opacity-75 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl bg-white border-2 border-white">
                <Image
                  src={profile.headshotUrl}
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              {/* Lab Logo Floating Badge on Portrait */}
              <div className="absolute -bottom-6 -right-4 bg-white/95 backdrop-blur-md border border-[#D8E2EE] p-2 rounded-2xl shadow-xl flex items-center gap-3 max-w-[240px]">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border border-[#D8E2EE] flex-shrink-0 bg-white">
                  <Image
                    src={profile.labLogoUrl}
                    alt={profile.labName}
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-[#B6862C]">ECC Lab</p>
                  <p className="text-[11px] font-bold text-[#081E3F] leading-tight">Research Laboratory</p>
                </div>
              </div>
            </div>

            {/* University Tagline */}
            <div className="mt-10 flex items-center gap-2 text-xs text-[#64748B]">
              <MapPin className="w-3.5 h-3.5 text-[#B6862C]" />
              <span>Florida International University • Biscayne Bay Campus</span>
            </div>
          </div>

          {/* Right Column: Lab Name, Bio & Academic Credentials */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Full Lab Name Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF4FF] border border-[#476FD6]/20 text-[#476FD6] text-xs font-semibold w-fit mb-4">
              <span className="w-2 h-2 rounded-full bg-[#476FD6] animate-pulse" />
              <span>{profile.labName}</span>
            </div>

            {/* Principal Investigator Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#081E3F] font-heading leading-tight">
              {profile.name}
            </h1>

            {/* Academic Title & Department */}
            <p className="mt-3 text-base sm:text-lg font-medium text-[#476FD6] leading-relaxed">
              {profile.title}
            </p>

            {/* Divider Accent */}
            <div className="my-6 h-1 w-20 bg-gradient-to-r from-[#476FD6] via-[#B6862C] to-transparent rounded-full" />

            {/* Verbatim Bio */}
            <p className="text-base sm:text-lg text-[#15213F]/90 leading-relaxed font-normal">
              {profile.bio}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3.5 items-center">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#476FD6] to-[#1C3F99] hover:from-[#3b5eb8] hover:to-[#153177] shadow-md hover:shadow-lg transition-all"
              >
                <FlaskConical className="w-4 h-4" />
                <span>Explore Research</span>
              </Link>

              <Link
                href="/publications"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#081E3F] bg-white hover:bg-[#EDF1F8] border border-[#D8E2EE] shadow-xs hover:shadow-md transition-all"
              >
                <BookOpen className="w-4 h-4 text-[#476FD6]" />
                <span>Publications</span>
              </Link>

              <a
                href={profile.googleScholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-[#476FD6] bg-[#EEF4FF] hover:bg-[#476FD6] hover:text-white border border-[#476FD6]/30 transition-all"
              >
                <span>Google Scholar</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-[#15213F] hover:text-[#476FD6] hover:bg-white/80 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Lab</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
