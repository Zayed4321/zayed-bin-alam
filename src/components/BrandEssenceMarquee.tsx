"use client";

import React from "react";

export function BrandEssenceMarquee() {
  const services = [
    {
      label: "Meta Ads",
      icon: (
        <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
          <path d="M16.96 4H7.04C5.36 4 4 5.36 4 7.04v9.92C4 18.64 5.36 20 7.04 20h9.92c1.68 0 3.04-1.36 3.04-3.04V7.04C20 5.36 18.64 4 16.96 4zm-1.8 11.23c-1.35 0-2.31-.83-3.16-1.95-.85 1.12-1.81 1.95-3.16 1.95-1.74 0-3.04-1.38-3.04-3.23 0-1.85 1.3-3.23 3.04-3.23 1.35 0 2.31.83 3.16 1.95.85-1.12 1.81-1.95 3.16-1.95 1.74 0 3.04 1.38 3.04 3.23 0 1.85-1.3 3.23-3.04 3.23z"/>
        </svg>
      ),
    },
    {
      label: "Google Ads",
      icon: (
        <svg className="w-4 h-4 fill-current text-amber-400" viewBox="0 0 24 24">
          <path d="M12 5c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
          <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
        </svg>
      ),
    },
    {
      label: "YouTube Ads",
      icon: (
        <svg className="w-4 h-4 fill-current text-red-500" viewBox="0 0 24 24">
          <path d="M21.58 7.19a2.7 2.7 0 0 0-1.9-1.9C17.99 4.8 12 4.8 12 4.8s-5.99 0-7.68.49a2.7 2.7 0 0 0-1.9 1.9C2 8.89 2 12 2 12s0 3.11.42 4.81a2.7 2.7 0 0 0 1.9 1.9c1.69.49 7.68.49 7.68.49s5.99 0 7.68-.49a2.7 2.7 0 0 0 1.9-1.9C22 15.11 22 12 22 12s0-3.11-.42-4.81zM10 15V9l5.2 3L10 15z"/>
        </svg>
      ),
    },
    {
      label: "Facebook Ads",
      icon: (
        <svg className="w-4 h-4 fill-current text-blue-500" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/>
        </svg>
      ),
    },
    {
      label: "ChatGPT Ads & Automation",
      icon: (
        <svg className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-2h2zm0-4h-2V7h2z"/>
        </svg>
      ),
    },
    {
      label: "TikTok Ads",
      icon: (
        <svg className="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V5.8a6.34 6.34 0 0 0-1-.08A6.34 6.34 0 1 0 15.82 12V8.4a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.13z"/>
        </svg>
      ),
    },
    {
      label: "Shopify Store Sales",
      icon: (
        <svg className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
          <path d="M19.27 5.33A2.88 2.88 0 0 0 16.5 3.5h-9a2.88 2.88 0 0 0-2.77 1.83L2 12.5V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6.5zm-12 1.34A.88.88 0 0 1 8.1 6h7.8a.88.88 0 0 1 .83.67L18.4 11H5.6z"/>
        </svg>
      ),
    },
    {
      label: "Conversion Rate Optimization",
      icon: (
        <svg className="w-4 h-4 fill-current text-amber-400" viewBox="0 0 24 24">
          <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.09-4-4L2 15.66z"/>
        </svg>
      ),
    },
    {
      label: "Server-Side Tracking",
      icon: (
        <svg className="w-4 h-4 fill-current text-teal-300" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-6 bg-brand-forest text-brand-white border-y border-brand-emerald/30 overflow-hidden select-none">
      <div className="flex w-full whitespace-nowrap overflow-hidden">
        <div className="flex items-center gap-12 animate-marquee py-1">
          {[...services, ...services, ...services].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 shrink-0">
              <div className="w-8 h-8 rounded-full bg-brand-white/10 flex items-center justify-center border border-brand-sage/20">
                {item.icon}
              </div>
              <span className="font-heading font-semibold text-sm sm:text-base tracking-wide text-brand-white">
                {item.label}
              </span>
              <span className="text-brand-sage text-base font-bold ml-6">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
