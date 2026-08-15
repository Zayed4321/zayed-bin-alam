"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
  tags: string[];
  image: string;
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote:
        "This is my 2nd time hiring Zayed. He's great. This time he bailed me out on something urgent and completed it in less than 24 hours. He's my go-to for Meta Ads & GTM tracking.",
      author: "Dany",
      role: "Meta Ads & GTM Setup",
      rating: 5,
      tags: ["Reliable", "Meta Tag Optimization", "Pixel Audit"],
      image: "/Crave-Portfolio.png",
    },
    {
      quote:
        "Zayed did an excellent job optimizing two ad campaigns for me, great quality and very affordable. I was so happy with his work that I referred him to a friend as well. Highly recommend him, 10/10!",
      author: "Kim Cordle",
      role: "Google Ads & Analytics Strategy",
      rating: 5,
      tags: ["Committed to Quality", "Solution Oriented", "Clear Communicator"],
      image: "/Happy_man.jpg",
    },
    {
      quote:
        "Zayed completed all tasks with excellence and on schedule. He was very available; speaks English fluently; was communicative; and nice to work with. He took initiative to make recommendations beyond my requests. I would definitely hire him again.",
      author: "Debra Mignola",
      role: "Full Funnel & CAPI Audit",
      rating: 5,
      tags: ["Reliable", "Collaborative", "Solution Oriented"],
      image: "/Happy_man.jpg",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipeThreshold = 30;
    const velocityThreshold = 150;

    if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      if (currentIndex < testimonials.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      if (currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    }
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-brand-white border-t border-brand-sage/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* TOP SECTION HEADER WITH FULL-WIDTH BORDER */}
        <div className="border-b border-brand-sage/30 pb-8 space-y-3">
          <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-forest tracking-tight">
            Clients feedback
          </h2>
          <p className="text-brand-slate text-sm sm:text-base font-medium max-w-xl">
            Real feedback from client campaigns across Meta Ads, Google Ads, and GTM Server-Side tracking. Swipe left or right to view all.
          </p>
        </div>

        {/* FEATURED LAYOUT: DYNAMIC PORTRAIT / PORTFOLIO IMAGE ON LEFT & SWIPABLE FEEDBACK ON RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT COLUMN: FEATURED TESTIMONIAL PORTFOLIO IMAGE */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-brand-sage/30 bg-brand-cream">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[currentIndex].image}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={`${testimonials[currentIndex].author} Portfolio Showcase`}
                    fill
                    className="object-cover object-top rounded-3xl"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT COLUMN: BUTTERY SMOOTH SWIPABLE FEEDBACK TRACK */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6 overflow-hidden">
            
            <div className="relative overflow-hidden py-2 select-none touch-pan-y">
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={handleDragEnd}
                animate={{ x: `-${currentIndex * 86}%` }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="flex items-start gap-6 cursor-grab active:cursor-grabbing will-change-transform"
              >
                {testimonials.map((item, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <div
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-[85%] shrink-0 space-y-5 transition-opacity duration-300 ${
                        isActive
                          ? "opacity-100"
                          : "opacity-40 hover:opacity-70"
                      }`}
                    >
                      {/* Quote Mark Icon */}
                      <div className="text-brand-forest opacity-80">
                        <svg className="w-10 h-10 fill-current text-brand-forest" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      {/* Review Quote Text */}
                      <p className="font-sans text-xl sm:text-2xl font-bold text-brand-forest leading-relaxed select-none">
                        {item.quote}
                      </p>

                      {/* Rating & Endorsement Tags */}
                      <div className="flex flex-wrap items-center gap-2 pt-2 select-none">
                        <div className="flex items-center gap-1 text-amber-500 mr-2">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-light-sage text-brand-forest border border-brand-sage/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Author Info */}
                      <div className="pt-4 border-t border-brand-sage/20 select-none">
                        <h4 className="font-sans text-base sm:text-lg font-extrabold text-brand-forest">
                          {item.author}
                        </h4>
                        <p className="text-xs sm:text-sm font-semibold text-brand-emerald">
                          {item.role}
                        </p>
                      </div>

                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* NAVIGATION CONTROLS */}
            <div className="flex items-center justify-between pt-4 border-t border-brand-sage/20">
              <div className="text-xs font-bold text-brand-slate uppercase tracking-widest">
                0{currentIndex + 1} / 0{testimonials.length}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full border border-brand-sage/40 bg-brand-white text-brand-forest flex items-center justify-center hover:bg-brand-forest hover:text-brand-white transition-all duration-300 shadow-xs active:scale-95"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full border border-brand-sage/40 bg-brand-white text-brand-forest flex items-center justify-center hover:bg-brand-forest hover:text-brand-white transition-all duration-300 shadow-xs active:scale-95"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
