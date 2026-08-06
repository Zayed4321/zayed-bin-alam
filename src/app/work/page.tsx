"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Footer } from "@/components/Footer";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal selection:bg-brand-sage selection:text-brand-forest">
      {/* Header Bar */}
      <header className="py-6 px-6 sm:px-8 lg:px-12 border-b border-brand-sage/20 bg-brand-cream/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-forest text-brand-white flex items-center justify-center font-sans text-xl font-extrabold shadow-sm transition-transform group-hover:scale-105">
              Z
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-lg text-brand-forest tracking-tight leading-none">
                Zayed Bin Alam
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-emerald mt-0.5">
                Selected Case Studies &amp; Work
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-forest/30 text-brand-forest font-bold text-xs uppercase tracking-wider hover:bg-brand-forest hover:text-white transition-all shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back To Home</span>
            </Link>

            <Link
              href="/hire-me"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-forest text-brand-white font-bold text-xs uppercase tracking-wider hover:bg-brand-emerald transition-colors shadow-md"
            >
              <span>Hire Me!</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="min-h-screen">
        <PortfolioSection />
      </main>

      <Footer />
    </div>
  );
}
