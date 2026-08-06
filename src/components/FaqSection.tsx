"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "What is your typical project timeline?",
      answer:
        "Standard web design and development projects typically take 2 to 4 weeks from strategy discovery to launch. Performance marketing setups and CRO audits can be completed within 1 to 2 weeks.",
    },
    {
      question: "How do we get started working together?",
      answer:
        "Simply submit the contact form below or book a strategy call. We will review your goals, discuss key deliverables, and provide a clear timeline and fixed-rate proposal.",
    },
    {
      question: "Why do you use Next.js and Tailwind CSS?",
      answer:
        "Next.js offers unmatched site speed, server-side rendering for top Google SEO rankings, and bank-grade security. Tailwind CSS allows us to write bespoke, ultra-clean responsive styles without heavy bloated code.",
    },
    {
      question: "Do you offer ongoing growth retainers after launch?",
      answer:
        "Yes! Many clients retain me for ongoing monthly conversion optimization, performance marketing campaign management, and feature enhancements.",
    },
    {
      question: "What are your pricing and payment structures?",
      answer:
        "I offer both fixed-scope project pricing and monthly growth retainer packages. Payments are typically split into a 50% initial deposit and 50% upon final launch approval.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-brand-cream relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header (No Badge) */}
        <div className="text-center mb-14 space-y-3">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-forest tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-slate text-sm sm:text-base font-medium">
            Everything you need to know about working together, project scope, and growth strategy.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-brand-forest text-brand-white border-brand-emerald shadow-md"
                    : "bg-brand-white text-brand-charcoal border-brand-sage/30 hover:border-brand-sage/60"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-heading text-lg sm:text-xl font-bold ${isOpen ? "text-brand-white" : "text-brand-forest"}`}>
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen
                        ? "bg-brand-white/20 text-brand-white"
                        : "bg-brand-light-sage text-brand-forest"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-sm sm:text-base text-brand-sage leading-relaxed border-t border-brand-white/10 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
