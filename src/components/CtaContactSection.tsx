"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export function CtaContactSection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "zayed-bin-alam" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <section id="contact" className="py-16 lg:py-24 bg-brand-white border-t border-brand-sage/20 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* FULL-WIDTH 100% CAL.COM CALENDAR CONTAINER */}
        <div className="rounded-3xl bg-brand-light-sage/50 border border-brand-sage/40 p-4 sm:p-6 lg:p-8 shadow-xl relative overflow-hidden">
          {/* Subtle Organic Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-sage/30 rounded-full blur-3xl pointer-events-none" />

          {/* 100% Full Width Embed Container */}
          <div className="w-full bg-brand-white rounded-2xl border border-brand-sage/30 shadow-lg overflow-hidden h-[720px] sm:h-[780px] p-2 relative z-10">
            <Cal
              namespace="zayed-bin-alam"
              calLink="zayed-bin-alam-performance-marketing-expert/zayed-bin-alam"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
