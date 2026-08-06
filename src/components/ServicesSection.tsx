"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Activity, ShieldCheck, CheckCircle2 } from "lucide-react";

export function ServicesSection() {
  const deliverables = [
    "Target exact buyer questions & prompts inside ChatGPT",
    "Weekly competitor AI ad tracking & placement optimization",
    "Conversational ad copy that converts AI searchers into paying clients",
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-brand-white border-t border-brand-sage/20 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
        
        {/* ======================================================== */}
        {/* 1. CHATGPT ADS SECTION */}
        {/* ======================================================== */}
        <div>
          {/* Section Header (No Badge) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-forest tracking-tight">
                ChatGPT Ads
              </h2>
            </div>
            <p className="text-brand-slate max-w-md text-sm sm:text-base font-medium">
              Conversational ad strategy and prompt-level intent targeting designed to acquire high-value clients directly inside ChatGPT &amp; generative AI engines.
            </p>
          </div>

          {/* ChatGPT Ads Showcase Card - Deep Forest Green Brand Palette */}
          <div className="rounded-3xl bg-brand-forest text-brand-white p-8 sm:p-12 border border-brand-emerald/40 shadow-2xl overflow-hidden relative">
            {/* Ambient Soft Emerald Glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-emerald/25 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              {/* LEFT COLUMN: Customized Brand Strategy Copy */}
              <div className="lg:col-span-6 space-y-6">
                <h3 className="font-sans text-3xl sm:text-4xl font-extrabold text-brand-white tracking-tight leading-tight">
                  Capture High-Intent Buyers Inside ChatGPT &amp; AI Search
                </h3>

                <p className="text-brand-light-sage text-base sm:text-lg leading-relaxed font-normal">
                  Be the first recommendation when buyers ask ChatGPT for wellness &amp; healthcare solutions. We map buyer prompt intent and engineer high-converting conversational ad placements.
                </p>

                {/* Clear & Simple Bullet Points */}
                <div className="space-y-3.5 pt-2">
                  {deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-brand-white font-medium">
                      <div className="w-5 h-5 rounded-full bg-brand-emerald/40 text-brand-sage flex items-center justify-center shrink-0 mt-0.5 border border-brand-sage/30">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-sage" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Brand CTA Button */}
                <div className="pt-4">
                  <Link
                    href="/hire-me"
                    className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-emerald text-brand-white font-extrabold text-sm uppercase tracking-wider shadow-lg hover:shadow-2xl hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 active:scale-95 border border-brand-sage/30"
                  >
                    <span>Inquire About ChatGPT Ads</span>
                    <ArrowRight className="w-4 h-4 text-brand-sage group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>

              {/* RIGHT COLUMN: Browser Mockup Frame in Brand Forest Green Theme */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-brand-emerald/40 bg-[#0A2E22] overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                  {/* Browser Window Header Controls */}
                  <div className="px-4 py-3 bg-[#08241A] border-b border-brand-emerald/30 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <div className="ml-4 px-3 py-0.5 rounded-md bg-white/10 text-[11px] text-brand-sage font-mono tracking-wide">
                      chatgpt.com/ads-copilot
                    </div>
                  </div>

                  {/* Feature Image */}
                  <div className="relative p-2 sm:p-3 bg-[#0A2E22]">
                    <Image
                      src="/feature-chatgpt-ads.png"
                      alt="Create Winning ChatGPT Campaigns"
                      width={750}
                      height={480}
                      className="w-full h-auto rounded-xl object-cover shadow-md"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. OTHER SERVICES SECTION */}
        {/* ======================================================== */}
        <div className="pt-10 border-t border-brand-sage/20 space-y-10">
          
          {/* Other Services Header (No Badge) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-forest tracking-tight">
                Other Services
              </h2>
            </div>
            <p className="text-brand-slate max-w-md text-sm sm:text-base font-medium">
              Data-driven performance marketing across Meta, Google, LinkedIn, Server-Side Tracking, and CRO.
            </p>
          </div>

          {/* TOP ROW: 3 CARDS MATCHING REFERENCE RATIO (6-3-3 COLUMNS) */}
          <div className="grid grid-cols-12 gap-6 items-stretch">
            
            {/* CARD 1: META ADS (6 COLUMNS - FEATURED WIDE CARD) */}
            <div className="col-span-12 lg:col-span-6 rounded-3xl bg-brand-cream/80 border border-brand-sage/40 p-8 sm:p-10 flex flex-col justify-between group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-brand-forest text-brand-white flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 fill-current text-brand-sage" viewBox="0 0 24 24">
                    <path d="M16.96 4H7.04C5.36 4 4 5.36 4 7.04v9.92C4 18.64 5.36 20 7.04 20h9.92c1.68 0 3.04-1.36 3.04-3.04V7.04C20 5.36 18.64 4 16.96 4zm-1.8 11.23c-1.35 0-2.31-.83-3.16-1.95-.85 1.12-1.81 1.95-3.16 1.95-1.74 0-3.04-1.38-3.04-3.23 0-1.85 1.3-3.23 3.04-3.23 1.35 0 2.31.83 3.16 1.95.85-1.12 1.81-1.95 3.16-1.95 1.74 0 3.04 1.38 3.04 3.23 0 1.85-1.3 3.23-3.04 3.23z"/>
                  </svg>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand-emerald">
                  Meta Paid Social
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-brand-forest tracking-tight">
                  Meta Ads (Facebook &amp; Instagram)
                </h3>
                <p className="text-brand-slate text-sm sm:text-base leading-relaxed font-normal">
                  High-converting video &amp; static creative campaigns, audience retargeting funnels, and ROAS scaling engineered specifically for wellness and DTC brands.
                </p>
              </div>

              <div className="pt-6 relative z-10">
                <Link href="/hire-me" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-forest group-hover:text-brand-emerald transition-colors">
                  <span>Explore Meta Campaigns</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* CARD 2: GOOGLE ADS (3 COLUMNS) */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 rounded-3xl bg-brand-cream/80 border border-brand-sage/40 p-7 sm:p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-2xl bg-brand-forest text-brand-white flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 fill-current text-amber-400" viewBox="0 0 24 24">
                    <path d="M12 5c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                  </svg>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-emerald">
                  Search &amp; PMax
                </span>
                <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-brand-forest tracking-tight">
                  Google Ads
                </h3>
                <p className="text-brand-slate text-xs sm:text-sm leading-relaxed font-normal">
                  High-intent search, Performance Max, and YouTube video ads capturing ready-to-buy customers.
                </p>
              </div>

              <div className="pt-6">
                <Link href="/hire-me" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-forest group-hover:text-brand-emerald transition-colors">
                  <span>Explore Google Ads</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* CARD 3: LINKEDIN ADS (3 COLUMNS) */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 rounded-3xl bg-brand-cream/80 border border-brand-sage/40 p-7 sm:p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-2xl bg-brand-forest text-brand-white flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 fill-current text-blue-400" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-emerald">
                  B2B Acquisition
                </span>
                <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-brand-forest tracking-tight">
                  LinkedIn Ads
                </h3>
                <p className="text-brand-slate text-xs sm:text-sm leading-relaxed font-normal">
                  Precision executive targeting &amp; high-ticket decision-maker acquisition for B2B scale-ups.
                </p>
              </div>

              <div className="pt-6">
                <Link href="/hire-me" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-forest group-hover:text-brand-emerald transition-colors">
                  <span>Explore LinkedIn Ads</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

          </div>

          {/* BOTTOM ROW: 2 EQUAL CARDS WITH COMPACT HEIGHT */}
          <div className="grid grid-cols-12 gap-6 items-stretch">
            
            {/* CARD 4: SERVER SIDE TRACKING (6 COLUMNS) */}
            <div className="col-span-12 md:col-span-6 rounded-2xl bg-brand-forest text-brand-white p-6 sm:p-7 border border-brand-emerald/40 flex items-center justify-between group hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-emerald/20 text-brand-sage flex items-center justify-center shrink-0 border border-brand-emerald/40">
                  <ShieldCheck className="w-6 h-6 text-brand-sage" />
                </div>
                <div>
                  <h4 className="font-sans text-lg sm:text-xl font-extrabold text-brand-white tracking-tight">
                    Server-Side Tracking (GTM &amp; Meta CAPI)
                  </h4>
                  <p className="text-brand-light-sage text-xs sm:text-sm leading-snug mt-1 font-normal">
                    100% accurate conversion tracking bypassing iOS blockages with GTM &amp; Meta Conversions API.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 5: CONVERSION RATE OPTIMIZATION (6 COLUMNS) */}
            <div className="col-span-12 md:col-span-6 rounded-2xl bg-brand-forest text-brand-white p-6 sm:p-7 border border-brand-emerald/40 flex items-center justify-between group hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-emerald/20 text-brand-sage flex items-center justify-center shrink-0 border border-brand-emerald/40">
                  <Activity className="w-6 h-6 text-brand-sage" />
                </div>
                <div>
                  <h4 className="font-sans text-lg sm:text-xl font-extrabold text-brand-white tracking-tight">
                    Conversion Rate Optimization (CRO)
                  </h4>
                  <p className="text-brand-light-sage text-xs sm:text-sm leading-snug mt-1 font-normal">
                    UI/UX friction audits, heatmaps, and funnel redesigns to maximize conversion from current traffic.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
