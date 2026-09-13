"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import siteContent from "@/data/siteContent";
import {
  MapPin,
  Phone,
  Mail,
  Building2
} from "lucide-react";

export default function Footer() {
  const { profile, navigation } = siteContent;

  return (
    <footer className="bg-[#081E3F] text-white pt-16 pb-12 border-t-4 border-[#B6862C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Location & Affiliation Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/15">
          {/* Col 1: Lab Identity & Logos */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16 rounded-full overflow-hidden bg-white p-0.5 border border-white/20 shadow-md flex-shrink-0">
                <Image
                  src={profile.labLogoUrl}
                  alt={profile.labName}
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="relative h-12 w-44 bg-white/95 rounded-xl p-1.5 flex items-center justify-center overflow-hidden">
                <Image
                  src={profile.instituteLogoUrl}
                  alt="FIU Institute of Environment"
                  fill
                  className="object-contain p-1"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold font-heading text-white">
                {profile.labName}
              </h3>
              <p className="text-xs text-[#B6862C] font-semibold mt-0.5">
                Principal Investigator: {profile.name}
              </p>
            </div>

            <p className="text-xs text-white/80 leading-relaxed">
              {profile.title}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-full overflow-hidden bg-white/10 p-1 border border-white/20 flex-shrink-0">
                <Image
                  src={profile.fiuSealUrl}
                  alt="Florida International University Seal"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="text-xs text-white/70">
                <p className="font-bold text-white">Florida International University</p>
                <p>Miami, Florida, United States</p>
              </div>
            </div>
          </div>

          {/* Col 2: Biscayne Bay Campus Location */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#B6862C]">
              <MapPin className="w-4 h-4 text-[#B6862C]" />
              <span>{profile.location.campus}</span>
            </div>

            <p className="text-sm text-white/90 leading-relaxed">
              {profile.location.description}
            </p>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
              <Building2 className="w-4 h-4 text-[#476FD6] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-white/80 leading-relaxed">
                {profile.location.buildingNote}
              </p>
            </div>

            <div className="text-xs text-white/70">
              <p className="font-mono text-white/90 font-semibold">{profile.location.address}</p>
            </div>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#B6862C]">
              <Phone className="w-4 h-4 text-[#B6862C]" />
              <span>Contact Information</span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <Phone className="w-4 h-4 text-[#476FD6]" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider block text-white/60">Office Phone</span>
                  <a href={`tel:${profile.officePhone.replace(/[^\d]/g, "")}`} className="font-semibold text-white hover:text-[#476FD6] transition-colors">
                    {profile.officePhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <Phone className="w-4 h-4 text-[#B6862C]" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider block text-white/60">Laboratory Phone</span>
                  <a href={`tel:${profile.labPhone.replace(/[^\d]/g, "")}`} className="font-semibold text-white hover:text-[#476FD6] transition-colors">
                    {profile.labPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <Mail className="w-4 h-4 text-[#476FD6]" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider block text-white/60">Email Address</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-semibold text-white hover:text-[#476FD6] transition-colors break-all"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Quick Links & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            {navigation.map((nav) => (
              <Link
                key={nav.name}
                href={nav.href}
                className="hover:text-white transition-colors font-medium"
              >
                {nav.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="hover:text-white transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-2 text-center md:text-right">
            <span>&copy; {new Date().getFullYear()} {profile.labName}.</span>
            <span>&bull;</span>
            <span>FIU</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
