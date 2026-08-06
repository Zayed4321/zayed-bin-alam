"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Button";
import { Award, CheckCircle2, TrendingUp, Users, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const stats = [
    { value: "5+", label: "Years Experience", icon: Award },
    { value: "120+", label: "Projects Completed", icon: CheckCircle2 },
    { value: "98%", label: "Client Satisfaction", icon: Users },
    { value: "$10M+", label: "Revenue Generated", icon: TrendingUp },
  ];

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 bg-brand-cream overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-12 left-1/3 w-[800px] h-[500px] bg-brand-light-sage/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* 2. GIANT LEFT-ALIGNED NAME HEADLINE OVERLAPPING TOP OF IMAGE */}
        <div className="relative z-20">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-7xl sm:text-9xl md:text-[12rem] lg:text-[14rem] font-extrabold tracking-tighter text-brand-forest uppercase leading-[0.82] text-left select-none drop-shadow-[0_4px_20px_rgba(250,250,248,0.95)] [text-shadow:_0_2px_15px_rgba(250,250,248,0.9)]"
          >
            ZAYED B.
          </motion.h1>
        </div>

        {/* 3. TWO-COLUMN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative">
          
          {/* LEFT COLUMN: Bio & CTAs starting cleanly below the giant name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col space-y-6 pt-6 sm:pt-10 lg:pt-16 z-20"
          >
            {/* LINKEDIN HEADLINE DETAILS */}
            <div className="border-l-4 border-brand-emerald pl-4 py-1">
              <p className="text-brand-charcoal text-lg sm:text-xl font-medium leading-relaxed">
                Helping Wellness Brands &amp; Apps Scale Revenue with Data-Driven Meta &amp; Google Ads <span className="text-brand-emerald font-semibold">|</span> Performance Marketing Specialist <span className="text-brand-emerald font-semibold">|</span> Co-Founder, Akhirah Lab
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link href="/hire-me">
                <Button variant="primary" size="lg">
                  Let&apos;s Work Together
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="secondary" size="lg">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Image overlapping under the right side of the giant name with soft top gradient for contrast */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7 flex justify-center lg:justify-end -mt-6 sm:-mt-10 lg:-mt-20 z-10"
          >
            <div className="relative w-full max-w-xl lg:max-w-2xl group">
              {/* Outer Container with overflow-hidden */}
              <div className="relative w-full h-auto rounded-3xl overflow-hidden shadow-2xl bg-brand-cream">
                {/* Soft Cream Gradient Wash at Top Edge of Photo for Crystal-Clear Text Contrast */}
                <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-brand-cream/85 via-brand-cream/30 to-transparent z-10 pointer-events-none" />

                <Image
                  src="/Zayed1.jpg"
                  alt="Zayed B. - Performance Marketing Specialist"
                  width={900}
                  height={1125}
                  priority
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* FLOATING LINKEDIN BUTTON AT BOTTOM LEFT OF IMAGE */}
              <a
                href="https://www.linkedin.com/in/zayed-bin-alam-777123270/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 left-6 z-20 bg-brand-white/95 backdrop-blur-md px-4 py-2.5 rounded-full border border-brand-sage/40 shadow-xl flex items-center gap-2.5 text-brand-forest text-xs font-bold hover:bg-brand-forest hover:text-brand-white transition-all duration-300 group/link"
              >
                <svg className="w-4 h-4 fill-current text-[#0A66C2] group-hover/link:text-brand-white transition-colors" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z"/>
                </svg>
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
