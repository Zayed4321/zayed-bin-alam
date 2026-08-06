"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Our Work", href: "/work" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-brand-cream/95 backdrop-blur-md border-b border-brand-sage/20 py-4 shadow-sm"
          : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* 100% CONTAINER BROKEN INTO 66.66% (COL-SPAN-8) AND 33.33% (COL-SPAN-4) */}
        <div className="grid grid-cols-12 items-stretch gap-6">

          {/* 66.66% COLUMN (ROW 1: LOGO + NAVBAR & ROW 2: METADATA TAGS) */}
          <div className="col-span-12 lg:col-span-8 flex flex-col justify-between space-y-4">

            {/* ROW 1: LOGO (65% ALLOCATION) & NAVBAR (35% ALLOCATION, START POSITIONED) */}
            <div className="flex items-center justify-start gap-4 w-full">

              {/* Brand Logo (Larger 65% Percentage Allocation) */}
              <div className="w-[65%] flex items-center justify-start shrink-0">
                <Link href="/" className="group flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-forest text-brand-white flex items-center justify-center font-sans text-xl font-extrabold shadow-sm transition-transform duration-300 group-hover:scale-105">
                    Z
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-lg text-brand-forest tracking-tight leading-none">
                      Zayed Bin Alam
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-emerald mt-0.5">
                      Growth &amp; Design
                    </span>
                  </div>
                </Link>
              </div>

              {/* Central Editorial Navigation Bar (Smaller 35% Allocation, Starts from Start) */}
              <div className="w-[35%] hidden md:flex items-center justify-start">
                <nav className="bg-brand-white/90 backdrop-blur-md border border-brand-sage/30 px-6 sm:px-7 py-2.5 rounded-full shadow-xs">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="font-sans text-xs uppercase tracking-widest font-bold text-brand-charcoal hover:text-brand-forest transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-emerald hover:after:w-full after:transition-all after:duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-brand-forest hover:bg-brand-light-sage transition-colors focus:outline-none ml-auto"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* ROW 2: METADATA ITEMS BELOW NAVBAR */}
            <div className="hidden sm:flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-brand-emerald pt-2">
              <span className="text-left">Performance Marketing Specialist</span>
              <span className="text-right sm:text-center mr-36">Co-Founder, Akhirah Lab</span>
            </div>

          </div>

          {/* 33.33% COLUMN: HIRE ME BUTTON WITH WAVE ANIMATION */}
          <div className="hidden lg:flex col-span-4 items-stretch justify-end">
            <Link
              href="/hire-me"
              className="w-[60%] h-full min-h-[105px] rounded-3xl bg-brand-forest text-brand-white px-2 py-6 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:bg-brand-emerald border-2 border-brand-sage/40 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 animate-wave-float group relative overflow-hidden text-center"
            >
              {/* Shimmering Wave Overlay */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

              <span className="font-sans font-extrabold text-lg sm:text-xl uppercase tracking-widest text-brand-white z-10 flex items-center gap-2">
                Hire Me!
                <ArrowRight className="w-5 h-5 text-brand-sage group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </Link>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-cream border-b border-brand-sage/30 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-sm font-bold uppercase tracking-wider text-brand-charcoal hover:text-brand-forest py-2 border-b border-brand-sage/10"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <Link href="/hire-me" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-full py-3 rounded-full bg-brand-forest text-brand-white font-sans font-bold text-center text-sm uppercase tracking-wider shadow-md">
                Hire Me!
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
