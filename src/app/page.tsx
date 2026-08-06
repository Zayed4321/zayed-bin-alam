import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BrandEssenceMarquee } from "@/components/BrandEssenceMarquee";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CtaContactSection } from "@/components/CtaContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-brand-cream text-brand-charcoal overflow-x-hidden selection:bg-brand-sage selection:text-brand-forest">
      <Header />
      <Hero />
      <BrandEssenceMarquee />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CtaContactSection />
      <Footer />
    </main>
  );
}
