"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import siteContent from "@/data/siteContent";
import { Camera, X, ArrowRight } from "lucide-react";

export default function GalleryPage() {
  const { groupPictures } = siteContent;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#476FD6] text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Lab Community</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#081E3F] font-heading tracking-tight">
            {groupPictures.sectionTitle}
          </h1>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[#476FD6] to-[#B6862C] rounded-full" />
          <p className="mt-4 text-lg text-[#15213F]/85 leading-relaxed">
            {groupPictures.intro}
          </p>
        </div>

        {/* 20 Photos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {groupPictures.images.map((imgUrl, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(imgUrl)}
              className="relative h-56 sm:h-64 rounded-3xl overflow-hidden bg-white border border-[#D8E2EE] cursor-pointer shadow-xs hover:shadow-xl transition-all group"
            >
              <Image
                src={imgUrl}
                alt={`Research group moment ${idx + 1}`}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081E3F]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs text-white font-semibold bg-black/40 px-2.5 py-1 rounded-lg">
                  Expand Photo
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Outro statement verbatim */}
        <div className="max-w-3xl mx-auto text-center p-8 rounded-3xl bg-[#FBFCFE] border border-[#D8E2EE] shadow-xs">
          <p className="text-sm sm:text-base text-[#15213F]/80 leading-relaxed italic">
            &ldquo;{groupPictures.outro}&rdquo;
          </p>
        </div>

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

        {/* Navigation shortcut */}
        <div className="mt-16 pt-8 border-t border-[#D8E2EE] flex justify-between items-center">
          <Link
            href="/teaching"
            className="text-sm font-semibold text-[#64748B] hover:text-[#081E3F] transition-colors"
          >
            &larr; Teaching &amp; Presentations
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#476FD6] hover:text-[#1C3F99] transition-colors"
          >
            <span>Location &amp; Contact</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
