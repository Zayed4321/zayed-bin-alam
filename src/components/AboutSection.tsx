"use client";

import { Award, CheckCircle2, Users, TrendingUp, ExternalLink, ArrowRight } from "lucide-react";

export function AboutSection() {
  const stats = [
    { value: "6+", label: "Years Experience", icon: Award },
    { value: "40+", label: "Projects Completed", icon: CheckCircle2 },
    { value: "98%", label: "Client Satisfaction", icon: Users },
    { value: "$1M+", label: "Revenue Generated", icon: TrendingUp },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-brand-cream relative overflow-hidden">
      {/* Topographic Background */}
      <div className="absolute inset-0 bg-topographic-pattern pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-12">
        
        {/* "ABOUT ME" HEADER & CONDENSED SHORT COPY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <h2 className="font-sans text-4xl sm:text-5xl font-extrabold text-brand-forest tracking-tight">
              About Me
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <p className="text-brand-charcoal text-base sm:text-lg leading-relaxed font-medium">
              Most agencies burn budget on guesswork. Before touching an ad account, I study your market, competitors, and audience—building data-backed campaigns with bulletproof server-side tracking (GTM &amp; Meta Conversions API) to lower your cost per acquisition.
            </p>
            <p className="text-brand-slate text-base leading-relaxed font-normal">
              No guesswork, no inflated numbers—just clear, scalable performance. Co-Founder at{" "}
              <a
                href="https://www.akhirahlab.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-brand-forest underline decoration-brand-emerald/40 hover:decoration-brand-forest transition-colors inline-flex items-center gap-1"
              >
                Akhirah Lab <ExternalLink className="w-3.5 h-3.5" />
              </a>.
            </p>

            {/* CONSISTENT SANS-SERIF METRICS COUNTER GRID */}
            <div className="pt-6 border-t border-brand-sage/20 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="font-sans text-3xl sm:text-4xl font-extrabold text-brand-forest tracking-tight flex items-center gap-1">
                    <span>{stat.value}</span>
                  </div>
                  <span className="text-xs font-semibold text-brand-emerald uppercase tracking-wider mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SHORTENED FEATURED CARD WITH WHATSAPP CTA BUTTON */}
        <div className="rounded-3xl bg-brand-forest text-brand-white p-6 sm:p-8 border border-brand-emerald/40 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-emerald/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-8">
              <p className="font-sans text-base sm:text-lg font-medium text-brand-white leading-snug">
                Not sure if paid ads make sense right now? DM me for a free audit before spending a dollar.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-brand-white text-brand-forest font-extrabold text-sm uppercase tracking-wider shadow-lg hover:shadow-2xl hover:bg-brand-sage/20 transition-all duration-300 transform hover:scale-105 active:scale-95 border border-brand-sage/40"
              >
                {/* Authentic WhatsApp Green Icon */}
                <svg className="w-5 h-5 fill-emerald-600 shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Send WhatsApp Message</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-brand-forest" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
