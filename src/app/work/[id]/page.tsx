"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, TrendingUp, Sparkles, CheckCircle2, ZoomIn, X } from "lucide-react";
import { caseStudiesData } from "@/data/caseStudiesData";
import { Footer } from "@/components/Footer";

export default function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const study = caseStudiesData.find(
    (s) => s.id === resolvedParams.id || s.slug === resolvedParams.id
  );

  const [activeZoomImage, setActiveZoomImage] = useState<{ src: string; title: string } | null>(null);

  if (!study) {
    notFound();
  }

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
                Case Study Breakdown
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-forest/30 text-brand-forest font-bold text-xs uppercase tracking-wider hover:bg-brand-forest hover:text-white transition-all shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back To Work</span>
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

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-20 space-y-14">
        
        {/* Case Study Header Banner */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald px-3 py-1 rounded-full bg-brand-light-sage border border-brand-sage/30">
              {study.yearCategory}
            </span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-forest text-brand-white text-xs font-bold">
              <TrendingUp className="w-3.5 h-3.5 text-brand-sage" />
              <span>{study.impactMetric}</span>
            </div>
          </div>

          <h1 className="font-heading font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-forest tracking-tight leading-tight">
            {study.title}
          </h1>

          <p className="text-brand-slate text-base sm:text-xl leading-relaxed font-medium max-w-3xl">
            {study.description}
          </p>
        </div>

        {/* Featured Showcase Image (Click to Zoom) - Scaled with Natural Image Ratio */}
        {(study.detailImage || study.featuredImage) && (
          <div
            onClick={() => setActiveZoomImage({ src: (study.detailImage || study.featuredImage)!, title: study.title })}
            className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-brand-sage/30 cursor-zoom-in group bg-[#0A2E22]"
          >
            <Image
              src={study.detailImage || study.featuredImage!}
              alt={study.title}
              width={1200}
              height={675}
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              priority
            />
            <div className="absolute inset-0 bg-brand-forest/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-[2px]">
              <ZoomIn className="w-5 h-5 text-brand-sage" />
              <span>Click to Enlarge / Zoom</span>
            </div>
          </div>
        )}

        {/* Overview Section */}
        <div className="bg-brand-white rounded-3xl p-8 sm:p-12 border border-brand-sage/30 shadow-sm space-y-4">
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-brand-forest tracking-tight">
            Project Overview &amp; Challenge
          </h2>
          <p className="text-brand-slate text-base sm:text-lg leading-relaxed font-normal">
            {study.fullOverview || study.summaryDetails}
          </p>
        </div>

        {/* Technical Workflow & Step-by-Step Breakdown */}
        {study.steps && study.steps.length > 0 && (
          <div className="space-y-10">
            <div className="border-b border-brand-sage/30 pb-4">
              <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-brand-forest tracking-tight">
                Step-by-Step Implementation &amp; Results
              </h2>
              <p className="text-brand-slate text-sm sm:text-base font-medium mt-1">
                Detailed technical breakdown of how the tracking architecture was configured and validated. Click any image to enlarge.
              </p>
            </div>

            <div className="space-y-12">
              {study.steps.map((st, i) => (
                <div
                  key={i}
                  className="bg-brand-white rounded-3xl p-6 sm:p-10 border border-brand-sage/30 shadow-lg space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full bg-brand-forest text-brand-white font-sans text-xs font-extrabold uppercase tracking-wider">
                      {st.stepNumber}
                    </span>
                    <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-brand-forest">
                      {st.title}
                    </h3>
                  </div>

                  <p className="text-brand-slate text-base sm:text-lg leading-relaxed font-normal">
                    {st.description}
                  </p>

                  {st.image && (
                    <div
                      onClick={() => setActiveZoomImage({ src: st.image!, title: `${st.stepNumber}: ${st.title}` })}
                      className="rounded-2xl border border-brand-sage/30 bg-[#0A2E22] overflow-hidden shadow-xl cursor-zoom-in group relative"
                    >
                      {/* Mockup Window Header */}
                      <div className="px-4 py-3 bg-[#08241A] border-b border-brand-emerald/30 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/80" />
                          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                          <div className="ml-3 text-xs text-brand-sage font-mono">
                            {st.title} verification
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-brand-sage font-bold group-hover:text-white transition-colors">
                          <ZoomIn className="w-4 h-4" />
                          <span>Click to Zoom</span>
                        </div>
                      </div>

                      <div className="relative w-full p-2 bg-[#0A2E22]">
                        <Image
                          src={st.image}
                          alt={st.title}
                          width={1200}
                          height={675}
                          className="w-full h-auto object-contain p-2 transition-transform duration-500 group-hover:scale-[1.01]"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Deliverables & Stack Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Key Deliverables */}
          <div className="bg-brand-white rounded-3xl p-8 border border-brand-sage/30 shadow-sm space-y-5">
            <h3 className="font-sans text-xl font-extrabold text-brand-forest tracking-tight">
              Key Deliverables
            </h3>
            <div className="space-y-3">
              {study.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-brand-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Stack */}
          <div className="bg-brand-white rounded-3xl p-8 border border-brand-sage/30 shadow-sm space-y-5">
            <h3 className="font-sans text-xl font-extrabold text-brand-forest tracking-tight">
              Tools &amp; Stack Used
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {study.tools.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs font-bold px-4 py-2 rounded-xl bg-brand-light-sage text-brand-forest border border-brand-sage/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-brand-forest text-brand-white rounded-3xl p-8 sm:p-12 border border-brand-emerald/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Need A Similar Tracking &amp; Ads Setup?
            </h3>
            <p className="text-brand-light-sage text-sm font-normal">
              Book a direct strategy call with Zayed to audit your setup and eliminate data loss.
            </p>
          </div>

          <Link
            href="/hire-me"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-emerald text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-emerald-600 transition-all shadow-lg shrink-0 transform hover:scale-105"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </main>

      {/* HIGH-RESOLUTION LIGHTBOX ZOOM MODAL */}
      {activeZoomImage && (
        <div
          onClick={() => setActiveZoomImage(null)}
          className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md p-4 sm:p-8 flex flex-col items-center justify-center animate-in fade-in duration-300 cursor-zoom-out"
        >
          {/* Top Control Bar */}
          <div className="w-full max-w-6xl flex items-center justify-between text-white pb-4 mb-2 border-b border-white/20">
            <span className="text-sm font-bold tracking-wide">
              {activeZoomImage.title}
            </span>
            <button
              onClick={() => setActiveZoomImage(null)}
              className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
            >
              <span>Close</span>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Full Screen Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl h-[75vh] sm:h-[82vh] rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10"
          >
            <Image
              src={activeZoomImage.src}
              alt={activeZoomImage.title}
              fill
              className="object-contain p-2"
              priority
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
