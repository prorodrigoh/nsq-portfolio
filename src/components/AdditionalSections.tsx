"use client";

import React, { useState } from "react";
import Image from "next/image";
import siteContent from "@/data/siteContent";
import {
  Presentation,
  BookOpenCheck,
  Camera,
  Calendar,
  CheckCircle,
  Award,
  ChevronDown,
  ChevronUp,
  X
} from "lucide-react";

export default function AdditionalSections() {
  const { postersAndPresentations, teaching, groupPictures } = siteContent;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [expandedYear, setExpandedYear] = useState<string>("2024");

  return (
    <>
      {/* SECTION 1: TEACHING */}
      <section id="teaching" className="py-16 md:py-20 bg-[#EDF1F8]/40 border-t border-[#D8E2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#476FD6] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#D8E2EE]">
              <BookOpenCheck className="w-3.5 h-3.5" />
              <span>Academic Curriculum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#081E3F] font-heading">
              {teaching.sectionTitle}
            </h2>
            <div className="mt-3 mx-auto h-1 w-16 bg-gradient-to-r from-[#476FD6] to-[#B6862C] rounded-full" />
            <p className="mt-4 text-base sm:text-lg text-[#15213F]/85 leading-relaxed">
              {teaching.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Courses Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Graduate Courses */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D8E2EE] shadow-xs">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-[#081E3F] text-white text-xs font-bold font-mono">
                    GRADUATE
                  </span>
                  <h3 className="text-lg font-bold text-[#081E3F]">
                    Graduate Level Courses
                  </h3>
                </div>
                <div className="space-y-3">
                  {teaching.graduateCourses.map((course, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#EDF1F8]/60 border border-[#D8E2EE]/60 flex items-center justify-between"
                    >
                      <span className="text-sm sm:text-base font-bold text-[#081E3F]">
                        {course.name}
                      </span>
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-white text-[#476FD6] border border-[#D8E2EE]">
                        {course.code}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Undergraduate Courses */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D8E2EE] shadow-xs">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-[#476FD6] text-white text-xs font-bold font-mono">
                    UNDERGRADUATE
                  </span>
                  <h3 className="text-lg font-bold text-[#081E3F]">
                    Undergraduate Level Courses
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {teaching.undergraduateCourses.map((course, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#EDF1F8]/60 border border-[#D8E2EE]/60 flex flex-col justify-between gap-2"
                    >
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-white text-[#476FD6] border border-[#D8E2EE] w-fit">
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

            {/* Classroom / Laboratory Photo */}
            <div className="lg:col-span-5">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-white group">
                <Image
                  src={teaching.classroomImageUrl}
                  alt="Dr. Quinete teaching students"
                  fill
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081E3F]/70 via-transparent to-transparent flex items-end p-6">
                  <p className="text-sm font-medium text-white">
                    Hands-on laboratory training and interactive academic mentorship at FIU
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: POSTERS AND PRESENTATIONS */}
      <section id="presentations" className="py-16 md:py-20 bg-white border-t border-[#D8E2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#476FD6] text-xs font-semibold uppercase tracking-wider mb-3">
              <Presentation className="w-3.5 h-3.5" />
              <span>Conferences &amp; Dissemination</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#081E3F] font-heading">
              {postersAndPresentations.sectionTitle}
            </h2>
            <div className="mt-3 mx-auto h-1 w-16 bg-gradient-to-r from-[#476FD6] to-[#B6862C] rounded-full" />
            <p className="mt-4 text-base sm:text-lg text-[#15213F]/85 leading-relaxed">
              {postersAndPresentations.overview}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#EDF1F8]/70 p-6 rounded-2xl border border-[#D8E2EE]">
              <h3 className="text-base font-bold text-[#081E3F] mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#B6862C]" />
                <span>Key Conference Series</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#15213F]/85">
                {postersAndPresentations.keyConferences.map((conf, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#476FD6] flex-shrink-0 mt-0.5" />
                    <span>{conf}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#EDF1F8]/70 p-6 rounded-2xl border border-[#D8E2EE]">
              <h3 className="text-base font-bold text-[#081E3F] mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#476FD6]" />
                <span>Student Presentation Highlights</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#15213F]/85">
                {postersAndPresentations.studentHighlights.map((sh, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{sh}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Presentation Breakdown by Year Accordion */}
          <div className="space-y-3 mb-12">
            {postersAndPresentations.presentationYears.map((py) => {
              const isExpanded = expandedYear === py.year;
              return (
                <div
                  key={py.year}
                  className="rounded-xl border border-[#D8E2EE] bg-white overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedYear(isExpanded ? "" : py.year)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#EDF1F8]/40 transition-colors"
                  >
                    <span className="flex items-center gap-2 text-base font-bold text-[#081E3F]">
                      <Calendar className="w-4 h-4 text-[#476FD6]" />
                      <span>{py.year} Presentations</span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#EEF4FF] text-[#476FD6]">
                        {py.items.length} talks
                      </span>
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-[#64748B]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#64748B]" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-5 pt-1 border-t border-[#D8E2EE]/60 bg-[#FBFCFE]">
                      <ul className="space-y-2.5 mt-2">
                        {py.items.map((item, iIdx) => (
                          <li
                            key={iIdx}
                            className="text-xs sm:text-sm text-[#15213F] pl-4 border-l-2 border-[#476FD6]/40 leading-relaxed"
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

          {/* Poster Showcase Gallery */}
          <div>
            <p className="text-sm text-[#64748B] mb-6 italic">
              {postersAndPresentations.galleryNote}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {postersAndPresentations.posterImages.map((posterUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(posterUrl)}
                  className="relative h-44 rounded-xl overflow-hidden bg-slate-100 border border-[#D8E2EE] cursor-pointer hover:shadow-md transition-all group"
                >
                  <Image
                    src={posterUrl}
                    alt={`Conference poster ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#081E3F]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs text-white font-semibold bg-black/50 px-2.5 py-1 rounded-md">
                      View Poster
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: GROUP PICTURES */}
      <section id="gallery" className="py-16 md:py-20 bg-[#EDF1F8]/50 border-t border-[#D8E2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#476FD6] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#D8E2EE]">
              <Camera className="w-3.5 h-3.5" />
              <span>Lab Life &amp; Community</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#081E3F] font-heading">
              {groupPictures.sectionTitle}
            </h2>
            <div className="mt-3 mx-auto h-1 w-16 bg-gradient-to-r from-[#476FD6] to-[#B6862C] rounded-full" />
            <p className="mt-4 text-base sm:text-lg text-[#15213F]/85 leading-relaxed">
              {groupPictures.intro}
            </p>
          </div>

          {/* Responsive Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {groupPictures.images.map((imgUrl, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(imgUrl)}
                className="relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-white border border-[#D8E2EE] cursor-pointer shadow-xs hover:shadow-lg transition-all group"
              >
                <Image
                  src={imgUrl}
                  alt={`Research group moment ${idx + 1}`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081E3F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-[11px] text-white font-medium">Click to expand</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-center text-[#64748B] max-w-3xl mx-auto leading-relaxed italic">
            {groupPictures.outro}
          </p>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full h-[80vh] rounded-2xl overflow-hidden shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Expanded preview"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
