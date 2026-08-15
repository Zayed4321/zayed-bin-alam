"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { caseStudiesData } from "@/data/caseStudiesData";

export function PortfolioSection() {
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
          {caseStudiesData.map((study) => (
            <div
              key={study.id}
              className="rounded-3xl bg-[#FAFAF8] text-brand-charcoal p-8 sm:p-12 shadow-2xl border border-brand-sage/40 transition-all duration-500 hover:shadow-brand-emerald/20 group"
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
                      <Link href={`/work/${study.slug}`} className="hover:text-brand-emerald transition-colors">
                        {study.title}
                      </Link>
                    </h3>
                    <p className="text-brand-slate text-sm sm:text-base leading-relaxed mt-3 max-w-lg font-normal">
                      {study.description}
                    </p>
                  </div>

                  {/* Impact Metric Badge & CTA Button linking to dedicated page */}
                  <div className="pt-4 flex items-center gap-4 flex-wrap">
                    <Link
                      href={`/work/${study.slug}`}
                      className="group/btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-brand-forest/40 text-brand-forest font-extrabold text-xs uppercase tracking-wider hover:bg-brand-forest hover:text-brand-white transition-all duration-300 shadow-xs"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>

                    <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-light-sage text-brand-forest text-xs font-bold border border-brand-sage/30">
                      <TrendingUp className="w-3.5 h-3.5 text-brand-emerald" />
                      <span>{study.impactMetric}</span>
                    </div>
                  </div>
                </div>

                {/* RIGHT FEATURED VISUAL CARD (~50%) */}
                <div className="lg:col-span-6 flex justify-end">
                  {study.featuredImage ? (
                    <Link
                      href={`/work/${study.slug}`}
                      className="w-full lg:w-[480px] h-[300px] sm:h-[340px] rounded-2xl overflow-hidden shadow-xl border border-brand-sage/30 relative cursor-pointer group/img block"
                    >
                      <Image
                        src={study.featuredImage}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-xs font-bold uppercase tracking-wider">
                          Click to view full case study &rarr;
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <Link
                      href={`/work/${study.slug}`}
                      className={`w-full lg:w-[480px] h-[300px] sm:h-[340px] rounded-2xl bg-gradient-to-br ${study.gradient} p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-xl border border-white/20 group/card hover:scale-[1.01] transition-transform duration-500 block`}
                    >
                      {/* Ambient Glow */}
                      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />

                      {/* Logo Graphic Emblem */}
                      <div className="relative z-10 w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl transform group-hover/card:scale-110 transition-transform duration-500">
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
                        {study.iconSymbol === "crave" && (
                          <span className="font-heading text-2xl font-black text-white">
                            CTA
                          </span>
                        )}
                      </div>

                      <span className="relative z-10 font-heading font-serif text-xl text-white font-bold tracking-wide mt-4">
                        {study.title}
                      </span>
                    </Link>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
