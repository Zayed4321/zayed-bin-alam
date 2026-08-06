"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, X, Sparkles } from "lucide-react";

interface CaseStudy {
  id: string;
  number: string;
  yearCategory: string;
  title: string;
  description: string;
  impactMetric: string;
  gradient: string;
  iconSymbol: "infinity" | "target" | "layers";
  summaryDetails: string;
  deliverables: string[];
  tools: string[];
}

export function PortfolioSection() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: "study-1",
      number: "01",
      yearCategory: "2025 • Wellness & Skincare • Meta & ChatGPT Ads",
      title: "Aura Skincare & Wellness",
      description: "A high-converting Meta & ChatGPT ad campaign scaling monthly bookings by 240% with bulletproof server-side GTM tracking.",
      impactMetric: "+240% Bookings",
      gradient: "from-[#0F3D2E] via-[#1E6B4F] to-[#1E1E1E]",
      iconSymbol: "infinity",
      summaryDetails: "Implemented end-to-end prompt-level intent mapping for ChatGPT ads paired with high-converting Meta video creative angles and GTM Conversions API tracking.",
      deliverables: ["ChatGPT Prompt Intent Mapping", "Meta Video Creatives", "GTM Server-Side CAPI", "ROAS Scaling Framework"],
      tools: ["ChatGPT Ads", "Meta Ads Manager", "Google Tag Manager", "Shopify"],
    },
    {
      id: "study-2",
      number: "02",
      yearCategory: "2025 • Healthcare Clinic • Google Search & PMax",
      title: "Vitalis Health Clinic",
      description: "High-intent Google Search and Performance Max campaigns driving 3.2x client acquisition at a 42% lower cost per booking.",
      impactMetric: "3.2x Client Growth",
      gradient: "from-[#1E6B4F] via-[#0F3D2E] to-[#A8CBB7]",
      iconSymbol: "target",
      summaryDetails: "Restructured Google Ads campaign hierarchy to capture ready-to-book patients searching for high-margin wellness treatments.",
      deliverables: ["Google Search Audit", "Performance Max Setup", "Landing Page CRO", "Conversion Tracking Fix"],
      tools: ["Google Ads", "Google Analytics 4", "Looker Studio", "Hotjar"],
    },
    {
      id: "study-3",
      number: "03",
      yearCategory: "2025 • B2B SaaS • LinkedIn Ads & Tracking",
      title: "FinVault Enterprise",
      description: "Precision B2B decision-maker ad strategy paired with Meta CAPI tracking to attribute $1.8M in pipeline revenue.",
      impactMetric: "$1.8M Pipeline",
      gradient: "from-[#0F3D2E] via-[#5C6461] to-[#1E6B4F]",
      iconSymbol: "layers",
      summaryDetails: "Built account-based LinkedIn advertising funnels targeting C-suite decision-makers with personalized lead magnets and server-side tracking.",
      deliverables: ["ABM Campaign Strategy", "LinkedIn Lead Gen Forms", "Attribution Modeling", "CRM Pipeline Sync"],
      tools: ["LinkedIn Ads", "HubSpot CRM", "Meta CAPI", "PostHog"],
    },
  ];

  return (
    <section id="work" className="py-20 lg:py-32 bg-brand-forest relative overflow-hidden">
      {/* Background Soft Emerald Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-emerald/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        
        {/* TOP SECTION HEADER (NO BADGE) */}
        <div className="border-b border-brand-emerald/30 pb-8 mb-12">
          <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-white leading-tight tracking-tight">
            Designs That Blend Creativity &amp; Functionality
          </h2>
        </div>

        {/* CASE STUDY CARDS STACK */}
        <div className="space-y-10">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="rounded-3xl bg-[#FAFAF8] text-brand-charcoal p-8 sm:p-12 shadow-2xl border border-brand-sage/40 transition-all duration-500 hover:shadow-brand-emerald/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
                
                {/* LEFT CONTENT (~50%) */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  {/* Number Circle Badge */}
                  <div className="w-11 h-11 rounded-full border-2 border-brand-sage/50 flex items-center justify-center text-xs font-bold text-brand-forest bg-brand-white shadow-xs">
                    {study.number}
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
                      {study.yearCategory}
                    </span>
                    <h3 className="font-heading font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-forest tracking-tight mt-2 leading-tight">
                      {study.title}
                    </h3>
                    <p className="text-brand-slate text-sm sm:text-base leading-relaxed mt-3 max-w-lg font-normal">
                      {study.description}
                    </p>
                  </div>

                  {/* Impact Metric Badge & CTA Button */}
                  <div className="pt-4 flex items-center gap-4 flex-wrap">
                    <button
                      onClick={() => setSelectedStudy(study)}
                      className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-brand-forest/40 text-brand-forest font-extrabold text-xs uppercase tracking-wider hover:bg-brand-forest hover:text-brand-white transition-all duration-300 shadow-xs"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>

                    <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-light-sage text-brand-forest text-xs font-bold border border-brand-sage/30">
                      <TrendingUp className="w-3.5 h-3.5 text-brand-emerald" />
                      <span>{study.impactMetric}</span>
                    </div>
                  </div>
                </div>

                {/* RIGHT FEATURED VISUAL CARD (~50%) */}
                <div className="lg:col-span-6 flex justify-end">
                  <div
                    className={`w-full lg:w-[480px] h-[300px] sm:h-[340px] rounded-2xl bg-gradient-to-br ${study.gradient} p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-xl border border-white/20 group hover:scale-[1.01] transition-transform duration-500`}
                  >
                    {/* Ambient Glow */}
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />

                    {/* Logo Graphic Emblem */}
                    <div className="relative z-10 w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                      {study.iconSymbol === "infinity" && (
                        <svg className="w-12 h-12 text-brand-white fill-current drop-shadow-md" viewBox="0 0 24 24">
                          <path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.96 9.17 8.15C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.81 2.83 2.81c.97.97 2.33 1.53 3.77 1.53 2.98 0 5.4-2.42 5.4-5.38s-2.42-5.38-5.4-5.38zm-13.2 8.38c-1.65 0-3-1.35-3-3s1.35-3 3-3c.8 0 1.55.31 2.12.88l1.41 1.41-1.41 1.41c-.57.57-1.32.88-2.12.88zm13.2 0c-.8 0-1.55-.31-2.12-.88l-1.41-1.41 1.41-1.41c.57-.57 1.32-.88 2.12-.88 1.65 0 3 1.35 3 3s-1.35 3-3 3z"/>
                        </svg>
                      )}
                      {study.iconSymbol === "target" && (
                        <svg className="w-12 h-12 text-brand-sage fill-current drop-shadow-md" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                        </svg>
                      )}
                      {study.iconSymbol === "layers" && (
                        <svg className="w-12 h-12 text-emerald-300 fill-current drop-shadow-md" viewBox="0 0 24 24">
                          <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/>
                        </svg>
                      )}
                    </div>

                    <span className="relative z-10 font-heading font-serif text-xl text-white font-bold tracking-wide mt-4">
                      {study.title}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* CASE STUDY DETAILS MODAL */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-forest/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-brand-cream border border-brand-sage/40 rounded-3xl p-8 sm:p-10 max-w-2xl w-full shadow-2xl relative space-y-6">
            <button
              onClick={() => setSelectedStudy(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-brand-light-sage text-brand-forest hover:bg-brand-sage/40 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
              {selectedStudy.yearCategory}
            </span>

            <h3 className="font-heading font-serif text-3xl font-extrabold text-brand-forest">
              {selectedStudy.title}
            </h3>

            <p className="text-brand-slate text-sm sm:text-base leading-relaxed">
              {selectedStudy.summaryDetails}
            </p>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-forest mb-3">
                Key Deliverables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedStudy.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-brand-charcoal font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-brand-emerald" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-slate mb-3">
                Tools &amp; Stack Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedStudy.tools.map((t, idx) => (
                  <span key={idx} className="text-xs font-semibold px-3 py-1 rounded-md bg-brand-light-sage text-brand-forest border border-brand-sage/30">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <Link href="#contact" onClick={() => setSelectedStudy(null)}>
                <div className="px-6 py-2.5 rounded-full bg-brand-forest text-brand-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-brand-emerald transition-colors">
                  Inquire For Similar Campaign
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
