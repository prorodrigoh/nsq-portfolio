"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import siteContent from "@/data/siteContent";
import { Users, User, GraduationCap, Award, ArrowRight } from "lucide-react";

export default function TeamPage() {
  const { team } = siteContent;
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Members" },
    ...team.categories.map((c) => ({ id: c.id, name: c.categoryName })),
  ];

  const displayedCategories =
    activeCategory === "all"
      ? team.categories
      : team.categories.filter((c) => c.id === activeCategory);

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#476FD6] text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Research Group</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#081E3F] font-heading tracking-tight">
            {team.sectionTitle}
          </h1>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[#476FD6] to-[#B6862C] rounded-full" />
          <p className="mt-4 text-lg text-[#15213F]/85 leading-relaxed">
            {team.overview}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-[#081E3F] text-white shadow-sm"
                  : "bg-white text-[#15213F] hover:bg-[#EEF4FF] hover:text-[#476FD6] border border-[#D8E2EE]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Members Grid by Category */}
        <div className="space-y-16">
          {displayedCategories.map((category) => (
            <div key={category.id}>
              <div className="flex items-center gap-3 mb-8 border-b border-[#D8E2EE] pb-3">
                <div className="p-1.5 rounded-md bg-[#EEF4FF] text-[#476FD6]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#081E3F] font-heading">
                  {category.categoryName}
                </h2>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white border border-[#D8E2EE] text-[#64748B]">
                  {category.members.length}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.members.map((member, mIdx) => (
                  <div
                    key={mIdx}
                    className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-[#D8E2EE]"
                  >
                    <div>
                      {/* Photo or Fallback Avatar */}
                      <div className="relative h-64 w-full bg-[#15213F]/5 overflow-hidden border-b border-[#D8E2EE]">
                        {member.imageUrl ? (
                          <Image
                            src={member.imageUrl}
                            alt={member.name}
                            fill
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#EEF4FF] to-[#D8E2EE] text-[#081E3F]">
                            <div className="w-20 h-20 rounded-full bg-white/80 border border-[#476FD6]/20 flex items-center justify-center shadow-xs">
                              <User className="w-10 h-10 text-[#476FD6]" />
                            </div>
                            <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                              Lab Researcher
                            </span>
                          </div>
                        )}

                        {member.role.includes("fellow") && (
                          <div className="absolute top-3 right-3 bg-[#081E3F]/90 backdrop-blur-xs text-[#B6862C] px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                            <Award className="w-3 h-3 text-[#B6862C]" />
                            <span>Fellow</span>
                          </div>
                        )}
                      </div>

                      {/* Card Info */}
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-[#081E3F] mb-1 font-heading group-hover:text-[#476FD6] transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#476FD6] mb-3 leading-snug">
                          {member.role}
                        </p>
                        {member.researchFocus && (
                          <p className="text-xs text-[#15213F]/85 leading-relaxed bg-[#EDF1F8]/70 p-3.5 rounded-xl border border-[#D8E2EE]/60">
                            {member.researchFocus}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="px-5 pb-4 pt-1">
                      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#D8E2EE] to-transparent" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation shortcut */}
        <div className="mt-16 pt-8 border-t border-[#D8E2EE] flex justify-between items-center">
          <Link
            href="/research"
            className="text-sm font-semibold text-[#64748B] hover:text-[#081E3F] transition-colors"
          >
            &larr; Research Focus Areas
          </Link>
          <Link
            href="/publications"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#476FD6] hover:text-[#1C3F99] transition-colors"
          >
            <span>View Publications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
