"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import siteContent from "@/data/siteContent";
import {
  BookOpenCheck,
  Presentation,
  Calendar,
  CheckCircle,
  Award,
  ChevronDown,
  ChevronUp,
  X,
  ArrowRight
} from "lucide-react";

export default function TeachingPage() {
  const { teaching, postersAndPresentations } = siteContent;
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);
  const [expandedYear, setExpandedYear] = useState<string>("2024");

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#476FD6] text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpenCheck className="w-3.5 h-3.5" />
            <span>Education &amp; Dissemination</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#081E3F] font-heading tracking-tight">
            Teaching &amp; Presentations
          </h1>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[#476FD6] to-[#B6862C] rounded-full" />
          <p className="mt-4 text-lg text-[#15213F]/85 leading-relaxed">
            {teaching.intro}
          </p>
        </div>

        {/* 1. COURSES CURRICULUM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            {/* Graduate Courses */}
            <div className="bg-white rounded-3xl p-7 border border-[#D8E2EE] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-lg bg-[#081E3F] text-white text-xs font-bold font-mono">
                  GRADUATE
                </span>
                <h2 className="text-xl font-bold text-[#081E3F] font-heading">
                  Graduate Courses
                </h2>
              </div>
              <div className="space-y-3">
                {teaching.graduateCourses.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#EDF1F8]/60 border border-[#D8E2EE]/60 flex items-center justify-between"
                  >
                    <span className="text-base font-bold text-[#081E3F]">
                      {course.name}
                    </span>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-white text-[#476FD6] border border-[#D8E2EE]">
                      {course.code}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Undergraduate Courses */}
            <div className="bg-white rounded-3xl p-7 border border-[#D8E2EE] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-lg bg-[#476FD6] text-white text-xs font-bold font-mono">
                  UNDERGRADUATE
                </span>
                <h2 className="text-xl font-bold text-[#081E3F] font-heading">
                  Undergraduate Courses
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {teaching.undergraduateCourses.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#EDF1F8]/60 border border-[#D8E2EE]/60 flex flex-col justify-between gap-2"
                  >
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white text-[#476FD6] border border-[#D8E2EE] w-fit">
                      {course.code}
                    </span>
                    <span className="text-sm font-bold text-[#081E3F]">
                      {course.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Classroom Photo */}
          <div className="lg:col-span-5">
            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border-2 border-white shadow-xl bg-white group">
              <Image
                src={teaching.classroomImageUrl}
                alt="Dr. Quinete teaching students"
                fill
                className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081E3F]/80 via-transparent to-transparent flex items-end p-6">
                <p className="text-sm font-medium text-white leading-snug">
                  Hands-on laboratory training and analytical mentorship at Florida International University
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. POSTERS AND PRESENTATIONS */}
        <div className="pt-12 border-t border-[#D8E2EE]">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#476FD6] text-xs font-semibold uppercase tracking-wider mb-3">
              <Presentation className="w-3.5 h-3.5" />
              <span>Scientific Dissemination</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#081E3F] font-heading">
              {postersAndPresentations.sectionTitle}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#15213F]/85 leading-relaxed">
              {postersAndPresentations.overview}
            </p>
          </div>

          {/* Highlights Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-7 rounded-3xl border border-[#D8E2EE] shadow-xs">
              <h3 className="text-lg font-bold text-[#081E3F] mb-4 flex items-center gap-2 font-heading">
                <Award className="w-5 h-5 text-[#B6862C]" />
                <span>Key Conference Series</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#15213F]/85">
                {postersAndPresentations.keyConferences.map((conf, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#476FD6] flex-shrink-0 mt-0.5" />
                    <span>{conf}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#D8E2EE] shadow-xs">
              <h3 className="text-lg font-bold text-[#081E3F] mb-4 flex items-center gap-2 font-heading">
                <Award className="w-5 h-5 text-[#476FD6]" />
                <span>Student Presentation Highlights</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#15213F]/85">
                {postersAndPresentations.studentHighlights.map((sh, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{sh}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Presentation Accordion by Year */}
          <div className="space-y-3 mb-16">
            {postersAndPresentations.presentationYears.map((py) => {
              const isExpanded = expandedYear === py.year;
              return (
                <div
                  key={py.year}
                  className="rounded-2xl border border-[#D8E2EE] bg-white overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setExpandedYear(isExpanded ? "" : py.year)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#EDF1F8]/40 transition-colors"
                  >
                    <span className="flex items-center gap-3 text-base font-bold text-[#081E3F]">
                      <Calendar className="w-4 h-4 text-[#476FD6]" />
                      <span>{py.year} Presentations</span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EEF4FF] text-[#476FD6]">
                        {py.items.length} presentations
                      </span>
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-[#64748B]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#64748B]" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-[#D8E2EE]/60 bg-[#FBFCFE]">
                      <ul className="space-y-3 mt-2">
                        {py.items.map((item, iIdx) => (
                          <li
                            key={iIdx}
                            className="text-xs sm:text-sm text-[#15213F] pl-4 border-l-2 border-[#476FD6] leading-relaxed"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Posters Gallery */}
          <div>
            <h3 className="text-xl font-bold text-[#081E3F] mb-2 font-heading">
              Conference Poster Showcase
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] mb-6 italic">
              {postersAndPresentations.galleryNote}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {postersAndPresentations.posterImages.map((posterUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedPoster(posterUrl)}
                  className="relative h-48 rounded-2xl overflow-hidden bg-slate-100 border border-[#D8E2EE] cursor-pointer hover:shadow-lg transition-all group"
                >
                  <Image
                    src={posterUrl}
                    alt={`Conference poster ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#081E3F]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs text-white font-bold bg-black/60 px-3 py-1.5 rounded-lg shadow-sm">
                      View Poster
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Lightbox */}
        {selectedPoster && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedPoster(null)}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] w-full h-[80vh] rounded-2xl overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedPoster}
                alt="Poster preview"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setSelectedPoster(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                aria-label="Close poster preview"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

        {/* Navigation shortcut */}
        <div className="mt-16 pt-8 border-t border-[#D8E2EE] flex justify-between items-center">
          <Link
            href="/news"
            className="text-sm font-semibold text-[#64748B] hover:text-[#081E3F] transition-colors"
          >
            &larr; Grants &amp; News
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#476FD6] hover:text-[#1C3F99] transition-colors"
          >
            <span>Group Pictures Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
