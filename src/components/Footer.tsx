"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "WhatsApp",
      url: "https://wa.me/8801763613549?text=Hi%20Zayed%2C%20I%27d%20like%20to%20inquire%20about%20paid%20ads%20and%20marketing%20strategy",
      icon: (
        <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/zayed.bin.alam.2024",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/zayedalam1/",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/zayed-bin-alam/",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z"/>
        </svg>
      ),
    },
    {
      name: "X",
      url: "https://x.com/ZayedBinAlam123",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-brand-forest text-brand-white border-t border-brand-emerald/30 relative pt-20 pb-12 overflow-hidden">
      {/* Wave Background Pattern */}
      <div className="absolute inset-0 bg-wave-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start justify-between">
          
          {/* Left: Headline & Bio */}
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-white text-brand-forest flex items-center justify-center font-sans text-xl font-extrabold">
                Z
              </div>
              <span className="font-sans font-extrabold text-2xl tracking-tight text-brand-white">
                Zayed Bin Alam
              </span>
            </div>
            <h3 className="font-sans text-3xl sm:text-4xl font-extrabold text-brand-white leading-tight">
              Let&apos;s Build Something Extraordinary
            </h3>
            <p className="text-brand-light-sage text-sm sm:text-base max-w-md leading-relaxed font-normal">
              Performance marketing specialist &amp; growth strategist helping brands scale with paid ads across ChatGPT, Meta, and Google.
            </p>
          </div>

          {/* Right: Stacked Pill Social Cards (Centered on Mobile, Right-Aligned on Desktop) */}
          <div className="md:col-span-6 flex flex-col items-center md:items-end space-y-3">
            <div className="w-full max-w-xs mx-auto md:mx-0 space-y-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-2xl border border-white/15 bg-white/5 hover:bg-brand-emerald hover:border-emerald-400/40 px-5 py-3 flex items-center justify-between transition-all duration-300 group shadow-sm"
                >
                  <span className="font-sans text-sm font-bold text-white tracking-wide">
                    {item.name}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-white/20 flex items-center justify-center text-white border border-white/15 transition-colors">
                    {item.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Large Editorial Headline Branding */}
        <div className="pt-8 border-t border-brand-white/10 text-center relative">
          <h2 className="font-sans font-extrabold text-5xl sm:text-7xl lg:text-9xl tracking-tight text-brand-white/10 uppercase select-none">
            Zayed Bin Alam
          </h2>

          <button
            onClick={scrollToTop}
            className="absolute right-0 top-12 p-3 rounded-full bg-brand-emerald/40 hover:bg-brand-emerald text-brand-white transition-colors shadow-lg group"
            aria-label="Scroll Back To Top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Copyright & Legals */}
        <div className="pt-6 border-t border-brand-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-sage gap-4 font-medium">
          <div>
            &copy; {new Date().getFullYear()} Zayed Bin Alam. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/work" className="hover:text-brand-white transition-colors">Our Work</Link>
            <Link href="#services" className="hover:text-brand-white transition-colors">ChatGPT Ads</Link>
            <Link href="/hire-me" className="hover:text-brand-white transition-colors">Hire Me</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
