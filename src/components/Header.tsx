"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import siteContent from "@/data/siteContent";
import { Menu, X, ExternalLink, Mail } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { profile, navigation } = siteContent;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#D8E2EE] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand: Lab Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative h-13 w-13 rounded-full overflow-hidden flex-shrink-0 shadow-xs border border-[#D8E2EE] bg-white group-hover:scale-105 transition-transform">
              <Image
                src={profile.labLogoUrl}
                alt={profile.labName}
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-bold text-[#081E3F] tracking-tight group-hover:text-[#476FD6] transition-colors leading-none">
                  ECC Lab
                </span>
                <span className="text-[10px] font-bold text-[#B6862C] bg-[#EDF1F8] px-1.5 py-0.5 rounded uppercase tracking-wider">
                  FIU
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-[#64748B] line-clamp-1 leading-tight mt-1 max-w-[220px] sm:max-w-[340px]">
                Emerging Contaminants of Concern Research Laboratory
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-all ${
                    active
                      ? "text-[#476FD6] bg-[#EEF4FF] shadow-xs"
                      : "text-[#15213F] hover:text-[#476FD6] hover:bg-[#EDF1F8]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Quick CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={profile.googleScholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#476FD6] bg-[#EEF4FF] hover:bg-[#476FD6] hover:text-white border border-[#476FD6]/20 rounded-lg transition-all shadow-xs"
            >
              <span>Scholar</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#081E3F] hover:bg-[#1C3F99] rounded-lg transition-all shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#15213F] hover:text-[#476FD6] hover:bg-[#EDF1F8] rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBFCFE] border-b border-[#D8E2EE] px-4 pt-2 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="mb-3 px-3 py-2 bg-[#EDF1F8]/60 rounded-xl border border-[#D8E2EE] flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-full overflow-hidden bg-white border border-[#D8E2EE] flex-shrink-0">
              <Image
                src={profile.labLogoUrl}
                alt={profile.labName}
                fill
                className="object-contain p-0.5"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-[#081E3F]">ECC Lab</p>
              <p className="text-[10px] text-[#64748B] line-clamp-1">{profile.labName}</p>
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                    active
                      ? "text-[#476FD6] bg-[#EEF4FF]"
                      : "text-[#15213F] hover:bg-[#EDF1F8] hover:text-[#476FD6]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-[#D8E2EE] flex items-center gap-3">
            <a
              href={profile.googleScholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex justify-center items-center gap-1.5 py-2.5 text-sm font-medium text-[#476FD6] bg-[#EEF4FF] rounded-lg"
            >
              <span>Google Scholar</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 inline-flex justify-center items-center gap-1.5 py-2.5 text-sm font-medium text-white bg-[#081E3F] rounded-lg"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Lab</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
