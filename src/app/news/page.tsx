import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteContent from "@/data/siteContent";
import { Award, Tv, Newspaper, Calendar, ExternalLink, ArrowRight, DollarSign } from "lucide-react";

export const metadata = {
  title: "Fundings & News | Dr. Natalia Quinete Lab at FIU",
  description: "Major competitive grants and media coverage for Dr. Natalia Quinete's research group at Florida International University.",
};

export default function NewsPage() {
  const { grantsAndProjects } = siteContent;

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#476FD6] text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Support &amp; Recognition</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#081E3F] font-heading tracking-tight">
            {grantsAndProjects.sectionTitle}
          </h1>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[#476FD6] to-[#B6862C] rounded-full" />
          <p className="mt-4 text-lg text-[#15213F]/85 leading-relaxed">
            Competitive federal awards, state agency grants, and prominent national news coverage documenting our ongoing research on persistent pollutants.
          </p>
        </div>

        {/* 1. Major Grants Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-[#D8E2EE] pb-4">
            <div className="p-2 rounded-xl bg-[#081E3F] text-[#B6862C]">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#081E3F] font-heading">
                {grantsAndProjects.grantsSubtitle}
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Funding from EPA, DOE, NSF, and state environmental foundations
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {grantsAndProjects.grants.map((grant, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl p-7 border border-[#D8E2EE] flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    {/* Agency Logo */}
                    <div className="relative h-16 w-32 bg-white rounded-xl border border-[#D8E2EE] p-1.5 flex items-center justify-center overflow-hidden shadow-xs">
                      {grant.logoUrl ? (
                        <Image
                          src={grant.logoUrl}
                          alt={grant.agency}
                          fill
                          className="object-contain p-1"
                        />
                      ) : (
                        <DollarSign className="w-8 h-8 text-[#476FD6]" />
                      )}
                    </div>

                    {/* Award Amount Badge */}
                    <div className="text-right">
                      <span className="inline-block px-3.5 py-1 rounded-xl bg-[#081E3F] text-[#B6862C] font-bold text-base sm:text-lg font-mono shadow-xs">
                        {grant.amount}
                      </span>
                      <div className="flex items-center gap-1.5 justify-end text-xs text-[#64748B] mt-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{grant.period}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#081E3F] mb-2 font-heading leading-snug">
                    {grant.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-[#476FD6]">
                    {grant.agency}
                  </p>
                </div>

                {grant.link && (
                  <div className="mt-6 pt-4 border-t border-[#D8E2EE]/60">
                    <a
                      href={grant.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#476FD6] hover:text-[#1C3F99] transition-colors"
                    >
                      <span>View LinkedIn / Recipient Profile</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 2. Recent Media Coverage Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8 border-b border-[#D8E2EE] pb-4">
            <div className="p-2 rounded-xl bg-[#EEF4FF] text-[#476FD6]">
              <Tv className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#081E3F] font-heading">
                {grantsAndProjects.mediaSubtitle}
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Television broadcasts and investigative journalism featuring our findings
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {grantsAndProjects.media.map((item, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-[#D8E2EE] flex items-start gap-5"
              >
                <div className="p-3.5 rounded-2xl bg-[#EEF4FF] text-[#476FD6] flex-shrink-0">
                  {item.type === "tv" ? (
                    <Tv className="w-6 h-6 text-[#476FD6]" />
                  ) : (
                    <Newspaper className="w-6 h-6 text-[#B6862C]" />
                  )}
                </div>
                <div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#EDF1F8] text-[#081E3F] mb-2">
                    {item.outlet}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#081E3F] mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  {item.detail && (
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {item.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation shortcut */}
        <div className="mt-16 pt-8 border-t border-[#D8E2EE] flex justify-between items-center">
          <Link
            href="/publications"
            className="text-sm font-semibold text-[#64748B] hover:text-[#081E3F] transition-colors"
          >
            &larr; Publications
          </Link>
          <Link
            href="/teaching"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#476FD6] hover:text-[#1C3F99] transition-colors"
          >
            <span>Teaching &amp; Presentations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
