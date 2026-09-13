"use client";

import React, { useState } from "react";
import Image from "next/image";
import siteContent from "@/data/siteContent";
import {
  BookOpen,
  Award,
  Tv,
  Newspaper,
  ExternalLink,
  Filter,
  DollarSign,
  Calendar,
  Layers,
  Droplets,
  FlaskConical,
  Fish,
  Factory,
  Baby
} from "lucide-react";

export default function PublicationsProjects() {
  const { publications, grantsAndProjects } = siteContent;
  const [activeTab, setActiveTab] = useState<"publications" | "grants" | "media">("publications");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");

  const categoryIcons: Record<string, React.ReactNode> = {
    "Aquatic & Water Quality": <Droplets className="w-4 h-4 text-sky-500" />,
    "Analytical Method Development": <FlaskConical className="w-4 h-4 text-indigo-500" />,
    "Bioaccumulation & Marine Life": <Fish className="w-4 h-4 text-teal-500" />,
    "Environmental Contamination": <Factory className="w-4 h-4 text-amber-600" />,
    "Human Health & Exposure": <Baby className="w-4 h-4 text-rose-500" />,
  };

  const years = ["all", "2025", "2024", "2023", "2022", "2021", "2020"];

  const filteredPubs = publications.items.filter((item) => {
    const matchesYear = selectedYear === "all" || item.year === selectedYear;
    const matchesCategory =
      selectedCategory === "all" || item.tags.includes(selectedCategory);
    return matchesYear && matchesCategory;
  });

  return (
    <section id="publications" className="py-16 md:py-24 bg-white border-t border-[#D8E2EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#476FD6] text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Scholarly Output &amp; Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#081E3F] font-heading">
            Publications &amp; Projects
          </h2>
          <div className="mt-3 mx-auto h-1 w-16 bg-gradient-to-r from-[#476FD6] to-[#B6862C] rounded-full" />
        </div>

        {/* View Switcher: Publications vs Grants vs Media */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#EDF1F8] border border-[#D8E2EE] shadow-inner max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab("publications")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === "publications"
                  ? "bg-white text-[#081E3F] shadow-sm"
                  : "text-[#64748B] hover:text-[#081E3F]"
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#476FD6]" />
              <span>Selected Publications ({publications.items.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("grants")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === "grants"
                  ? "bg-white text-[#081E3F] shadow-sm"
                  : "text-[#64748B] hover:text-[#081E3F]"
              }`}
            >
              <Award className="w-4 h-4 text-[#B6862C]" />
              <span>Major Grants ({grantsAndProjects.grants.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("media")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === "media"
                  ? "bg-white text-[#081E3F] shadow-sm"
                  : "text-[#64748B] hover:text-[#081E3F]"
              }`}
            >
              <Tv className="w-4 h-4 text-[#476FD6]" />
              <span>Media Coverage ({grantsAndProjects.media.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: PUBLICATIONS */}
        {activeTab === "publications" && (
          <div>
            {/* Top Banner with Scholar Link */}
            <div className="bg-[#EDF1F8]/80 border border-[#D8E2EE] rounded-2xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm sm:text-base text-[#15213F] leading-relaxed">
                {publications.intro}
              </p>
              <a
                href={publications.googleScholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#476FD6] to-[#1C3F99] rounded-xl hover:from-[#3b5eb8] hover:to-[#153177] shadow-sm transition-all whitespace-nowrap"
              >
                <span>View Full Publication List</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Research Domain Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-8">
              {publications.categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() =>
                    setSelectedCategory(selectedCategory === cat.name ? "all" : cat.name)
                  }
                  className={`text-left p-4 rounded-xl border transition-all ${
                    selectedCategory === cat.name
                      ? "bg-[#EEF4FF] border-[#476FD6] shadow-sm ring-2 ring-[#476FD6]/20"
                      : "bg-[#FBFCFE] border-[#D8E2EE] hover:border-[#476FD6]/30 hover:bg-[#EDF1F8]/50"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    {categoryIcons[cat.name] || <Layers className="w-4 h-4" />}
                    <h4 className="text-xs font-bold text-[#081E3F] line-clamp-1">
                      {cat.name}
                    </h4>
                  </div>
                  <p className="text-[11px] text-[#64748B] line-clamp-2 leading-snug">
                    {cat.description}
                  </p>
                </button>
              ))}
            </div>

            {/* Year Filters & Reset */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#D8E2EE]">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] mr-2 flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" />
                  <span>Year:</span>
                </span>
                {years.map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear(yr)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      selectedYear === yr
                        ? "bg-[#081E3F] text-white"
                        : "bg-[#EDF1F8] text-[#15213F] hover:bg-[#D8E2EE]"
                    }`}
                  >
                    {yr === "all" ? "All Years" : yr}
                  </button>
                ))}
              </div>

              {(selectedYear !== "all" || selectedCategory !== "all") && (
                <button
                  onClick={() => {
                    setSelectedYear("all");
                    setSelectedCategory("all");
                  }}
                  className="text-xs font-semibold text-[#476FD6] hover:underline"
                >
                  Reset Filters ({filteredPubs.length} results)
                </button>
              )}
            </div>

            {/* Publications List */}
            <div className="space-y-4">
              {filteredPubs.map((pub, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-5 sm:p-6 border border-[#D8E2EE] flex flex-col sm:flex-row items-start justify-between gap-4 group"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#081E3F] text-white text-xs font-bold font-mono">
                        {pub.year}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-[#EEF4FF] text-[#476FD6] text-xs font-semibold">
                        {pub.badge}
                      </span>
                      {pub.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-[#EDF1F8] text-[#64748B] text-[11px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm sm:text-base text-[#15213F] leading-relaxed font-normal">
                      {pub.citation}
                    </p>
                  </div>

                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#476FD6] bg-[#EEF4FF] hover:bg-[#476FD6] hover:text-white transition-all whitespace-nowrap self-end sm:self-center"
                    >
                      <span>DOI Link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: MAJOR GRANTS */}
        {activeTab === "grants" && (
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#081E3F] font-heading">
                {grantsAndProjects.grantsSubtitle}
              </h3>
              <p className="text-sm text-[#64748B] mt-1">
                Competitive federal and state grants supporting innovative environmental chemistry research
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {grantsAndProjects.grants.map((grant, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 border border-[#D8E2EE] flex flex-col justify-between group relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      {/* Agency Logo */}
                      <div className="relative h-14 w-28 bg-white rounded-lg border border-[#D8E2EE] p-1 flex items-center justify-center overflow-hidden">
                        {grant.logoUrl ? (
                          <Image
                            src={grant.logoUrl}
                            alt={grant.agency}
                            fill
                            className="object-contain p-1"
                          />
                        ) : (
                          <DollarSign className="w-6 h-6 text-[#476FD6]" />
                        )}
                      </div>

                      {/* Award Amount Badge */}
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 rounded-lg bg-[#081E3F] text-[#B6862C] font-bold text-sm sm:text-base font-mono shadow-xs">
                          {grant.amount}
                        </span>
                        <div className="flex items-center gap-1 justify-end text-xs text-[#64748B] mt-1">
                          <Calendar className="w-3 h-3" />
                          <span>{grant.period}</span>
                        </div>
                      </div>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-[#081E3F] mb-2 font-heading">
                      {grant.title}
                    </h4>

                    <p className="text-xs sm:text-sm font-medium text-[#476FD6]">
                      {grant.agency}
                    </p>
                  </div>

                  {grant.link && (
                    <div className="mt-4 pt-3 border-t border-[#D8E2EE]">
                      <a
                        href={grant.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#476FD6] hover:underline"
                      >
                        <span>View Award Profile</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: MEDIA COVERAGE */}
        {activeTab === "media" && (
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#081E3F] font-heading">
                {grantsAndProjects.mediaSubtitle}
              </h3>
              <p className="text-sm text-[#64748B] mt-1">
                Scientific findings featured across broadcast television and national journalism
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {grantsAndProjects.media.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 border border-[#D8E2EE] flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-[#EEF4FF] text-[#476FD6] flex-shrink-0">
                    {item.type === "tv" ? (
                      <Tv className="w-6 h-6 text-[#476FD6]" />
                    ) : (
                      <Newspaper className="w-6 h-6 text-[#B6862C]" />
                    )}
                  </div>
                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EDF1F8] text-[#081E3F] mb-1.5">
                      {item.outlet}
                    </span>
                    <h4 className="text-base font-bold text-[#081E3F] mb-1.5 leading-snug">
                      {item.title}
                    </h4>
                    {item.detail && (
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
