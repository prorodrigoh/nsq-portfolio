"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteContent from "@/data/siteContent";
import {
  BookOpen,
  ExternalLink,
  Filter,
  Droplets,
  FlaskConical,
  Fish,
  Factory,
  Baby,
  Layers,
  ArrowRight
} from "lucide-react";

export default function PublicationsPage() {
  const { publications } = siteContent;
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
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#476FD6] text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Peer-Reviewed Literature</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#081E3F] font-heading tracking-tight">
            {publications.sectionTitle}
          </h1>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[#476FD6] to-[#B6862C] rounded-full" />
        </div>

        {/* Top Banner with Scholar Link */}
        <div className="bg-[#FBFCFE] border border-[#D8E2EE] rounded-2xl p-6 sm:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="max-w-2xl">
            <p className="text-base sm:text-lg text-[#15213F] leading-relaxed">
              {publications.intro}
            </p>
            <p className="text-xs text-[#64748B] mt-1">
              Regularly updated with preprints, accepted manuscripts, and high-impact journal articles.
            </p>
          </div>
          <a
            href={publications.googleScholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#476FD6] to-[#1C3F99] rounded-xl hover:from-[#3b5eb8] hover:to-[#153177] shadow-md hover:shadow-lg transition-all whitespace-nowrap"
          >
            <span>View Full Publication List</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Research Domain Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {publications.categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() =>
                setSelectedCategory(selectedCategory === cat.name ? "all" : cat.name)
              }
              className={`text-left p-4 rounded-2xl border transition-all ${
                selectedCategory === cat.name
                  ? "bg-[#EEF4FF] border-[#476FD6] shadow-sm ring-2 ring-[#476FD6]/20"
                  : "bg-white border-[#D8E2EE] hover:border-[#476FD6]/30 hover:bg-[#EDF1F8]/50"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {categoryIcons[cat.name] || <Layers className="w-4 h-4" />}
                <h3 className="text-xs font-bold text-[#081E3F] line-clamp-1">
                  {cat.name}
                </h3>
              </div>
              <p className="text-[11px] text-[#64748B] line-clamp-2 leading-snug">
                {cat.description}
              </p>
            </button>
          ))}
        </div>

        {/* Year Filters & Counter */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#D8E2EE]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter by Year:</span>
            </span>
            {years.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedYear === yr
                    ? "bg-[#081E3F] text-white shadow-xs"
                    : "bg-white text-[#15213F] hover:bg-[#D8E2EE] border border-[#D8E2EE]"
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
              className="glass-card rounded-2xl p-6 border border-[#D8E2EE] flex flex-col sm:flex-row items-start justify-between gap-4 group"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
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
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-[#476FD6] bg-[#EEF4FF] hover:bg-[#476FD6] hover:text-white transition-all whitespace-nowrap self-end sm:self-center shadow-xs"
                >
                  <span>DOI Article</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Navigation shortcut */}
        <div className="mt-16 pt-8 border-t border-[#D8E2EE] flex justify-between items-center">
          <Link
            href="/team"
            className="text-sm font-semibold text-[#64748B] hover:text-[#081E3F] transition-colors"
          >
            &larr; Our Team
          </Link>
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#476FD6] hover:text-[#1C3F99] transition-colors"
          >
            <span>Major Grants &amp; News</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
