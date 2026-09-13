import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteContent from "@/data/siteContent";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  ExternalLink,
  Globe
} from "lucide-react";

export const metadata = {
  title: "Location & Contact | Dr. Natalia Quinete Lab at FIU",
  description: "Contact information, lab location, and campus affiliations for Dr. Natalia Quinete at Florida International University's Biscayne Bay Campus.",
};

export default function ContactPage() {
  const { profile } = siteContent;

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#476FD6] text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#081E3F] font-heading tracking-tight">
            Location &amp; Contact
          </h1>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[#476FD6] to-[#B6862C] rounded-full" />
          <p className="mt-4 text-lg text-[#15213F]/85 leading-relaxed">
            Reach out regarding research collaborations, graduate and postdoctoral opportunities, or academic inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Campus & Facilities */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-[#D8E2EE] shadow-xs">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#B6862C] mb-3">
                <MapPin className="w-4 h-4 text-[#B6862C]" />
                <span>{profile.location.campus}</span>
              </div>
              <h2 className="text-2xl font-bold text-[#081E3F] font-heading mb-4">
                Coastal Environmental Science Setting
              </h2>
              <p className="text-base text-[#15213F]/85 leading-relaxed mb-6">
                {profile.location.description}
              </p>

              <div className="p-4 rounded-2xl bg-[#EDF1F8]/70 border border-[#D8E2EE] flex items-start gap-3 mb-6">
                <Building2 className="w-5 h-5 text-[#476FD6] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#15213F]/90 leading-relaxed font-medium">
                  {profile.location.buildingNote}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#081E3F] font-semibold bg-[#EEF4FF] p-3 rounded-xl border border-[#476FD6]/20">
                <Globe className="w-4 h-4 text-[#476FD6]" />
                <span>{profile.location.address}</span>
              </div>
            </div>

            {/* Campus Illustration */}
            <div className="relative h-72 sm:h-80 rounded-3xl overflow-hidden border border-[#D8E2EE] shadow-sm bg-slate-100 group">
              <Image
                src={profile.location.campusImageUrl}
                alt="Biscayne Bay waterfront view"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081E3F]/80 via-transparent to-transparent flex items-end p-6">
                <p className="text-sm font-medium text-white">
                  Biscayne Bay waterfront view &bull; Unique coastal research ecosystem
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Details & Affiliations */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-[#D8E2EE] shadow-xs">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#B6862C] mb-6">
                <Phone className="w-4 h-4 text-[#B6862C]" />
                <span>Direct Contact Details</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#FBFCFE] border border-[#D8E2EE] flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-[#EEF4FF] text-[#476FD6]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#64748B] block tracking-wider">Office Phone</span>
                    <a
                      href={`tel:${profile.officePhone.replace(/[^\d]/g, "")}`}
                      className="text-base font-bold text-[#081E3F] hover:text-[#476FD6] transition-colors"
                    >
                      {profile.officePhone}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FBFCFE] border border-[#D8E2EE] flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-[#EEF4FF] text-[#B6862C]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#64748B] block tracking-wider">Laboratory Phone</span>
                    <a
                      href={`tel:${profile.labPhone.replace(/[^\d]/g, "")}`}
                      className="text-base font-bold text-[#081E3F] hover:text-[#476FD6] transition-colors"
                    >
                      {profile.labPhone}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FBFCFE] border border-[#D8E2EE] flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-[#EEF4FF] text-[#476FD6]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#64748B] block tracking-wider">Email</span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-base font-bold text-[#081E3F] hover:text-[#476FD6] transition-colors break-all"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#D8E2EE]">
                <a
                  href={`mailto:${profile.email}`}
                  className="w-full inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#476FD6] to-[#1C3F99] hover:from-[#3b5eb8] hover:to-[#153177] shadow-md transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email Message</span>
                </a>
              </div>
            </div>

            {/* Lab & University Affiliation Card */}
            <div className="bg-[#081E3F] rounded-3xl p-8 text-white shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-14 w-14 rounded-full overflow-hidden bg-white p-0.5 border border-white/20 flex-shrink-0">
                  <Image
                    src={profile.labLogoUrl}
                    alt={profile.labName}
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold font-heading">{profile.labName}</h3>
                  <p className="text-xs text-[#B6862C] font-semibold">Florida International University</p>
                </div>
              </div>
              <p className="text-xs text-white/80 leading-relaxed mb-4">
                Department of Chemistry &amp; Biochemistry &bull; Institute of Environment &bull; College of Arts, Sciences &amp; Education
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://environment.fiu.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#476FD6] bg-white px-3.5 py-2 rounded-xl hover:bg-[#EEF4FF] transition-colors"
                >
                  <span>Visit Institute Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation shortcut */}
        <div className="mt-16 pt-8 border-t border-[#D8E2EE] flex justify-between items-center">
          <Link
            href="/gallery"
            className="text-sm font-semibold text-[#64748B] hover:text-[#081E3F] transition-colors"
          >
            &larr; Group Pictures Gallery
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#476FD6] hover:text-[#1C3F99] transition-colors"
          >
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
